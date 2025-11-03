var auth = "",
    authorID = "",
    guilds = ["1234", "5678", "9101112"],
    log = new Array;

async function getMsg(guild, offset = 0, MIDList = new Array, CIDList = new Array) {
    try {
        if (!guild || !MIDList || !CIDList) {
            throw new Error('Can\'t getMsg() without the guild ID, an array to store the recieved message IDs in and/or and array to store the channel IDs of said messages in.\n    - Ran function getMsg() without providing all required values.');
        }

        var response
        if (authorID) {
            var response = await fetch(`https://discord.com/api/v9/guilds/${guild}/messages/search?min_id=48997859328000000&sort_by=timestamp&author_id=${authorID}&sort_order=desc&offset=${offset * 25}`, {
                method: 'GET',
                headers: {
                    'Authorization': auth,
                    'Content-Type': 'application/json'
                }
            });
        } else {
            var response = await fetch(`https://discord.com/api/v9/guilds/${guild}/messages/search?min_id=48997859328000000&sort_by=timestamp&sort_order=desc&offset=${offset * 25}`, {
                method: 'GET',
                headers: {
                    'Authorization': auth,
                    'Content-Type': 'application/json'
                }
            });
        }
        
        const data = await response.json().catch(() => ({}));
        if (response.status === 204) {
            log.push("🙈 No messages here");
            return;
        } else if (response.ok) {
            if (data.messages && Array.isArray(data.messages) && data.messages.length > 0) {
                for (const messageArray of data.messages) {
                    const message = messageArray[0];    
                    const msgID = message?.id;
                    const channelID = message?.channel_id;
                    if (MIDList) {
                        log.push(`Adding message ID ${msgID} of channel ${channelID} to the deletion query.`);
                        MIDList.push(msgID);
                        CIDList.push(channelID);
                    }
                }
                offset++;
                return await getMsg(guild, offset, MIDList, CIDList);
            } else {
                log.push(`Final message ID list: ${MIDList.join(", ")}`);
                log.push(`Final channel ID list: ${CIDList.join(", ")}`);
                return [MIDList || new Array, CIDList || new Array];
            }
        } else if (response.status == 429) {
            const retryAfter = (data.retry_after || 2.5) * 1000 + 250;
            log.push(`Ratelimited while getting messages from channel ${channelID} - Retrying in ${retryAfter} milliseconds.`);
            await new Promise(resolve => setTimeout(resolve, retryAfter));
            return await getMsg(channelID, MIDList, offset);
        } else if (response.status == 403) {
            throw new Error(`Lacking permissions to get messages in channel ${channelID} of guild ${guild}.`);
        } else {
            throw new Error(`❌ Failed - Error: ${response.status, data || "Unknown Error"}`);
        }
    } catch (error) {
        log.push(`💥 Unrecoverable error: ${error}`);
        return [new Array, new Array];
    }
}

async function delMsg(channelID, msgID, guild = "(option value not provided)") {
    try {
        if (!channelID || !msgID) {
            throw new Error('Can\'t delMsg() without the channel ID or message ID.\n    - Ran function delMsg() without providing all required values.');
        }
        const response = await fetch(`https://discord.com/api/v9/channels/${channelID}/messages/${msgID}`, {
            method: 'DELETE',
            headers: {
                'Authorization': auth,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json().catch(() => ({}));
        if (response.ok) {
            log.push(`Deleted message ${msgID} from channel ${channelID} of guild ${guild}`);
            return;
        } else if (response.status == 429) {
            const retryAfter = (data.retry_after || 2.5) * 1000 + 250;
            await new Promise(resolve => setTimeout(resolve, retryAfter));
            return await delMsg(channelID, msgID, guild);
        } else if (response.status == 403) {
            throw new Error(`❌ Lacking permission to delete ${msgID} in channel ${channelID} of guild ${guild}`)
        } else {
            throw new Error(`❌ Failed - Status: ${response.status} - Error: ${data.message || "Unknown error"}`);
        }

    } catch (error) {
        log.push(`💥 Unrecoverable error: ${error}`);
    }
}

async function masterFunction() {
    for (const guild of guilds) {
        const IDsArray = await getMsg(guild);
        if (IDsArray[0].length == 0) {
            log.push(`🧐 No messages found in the DM channel`);
        } else {
            for (var i = 0; i < Math.min(IDsArray[0].length, IDsArray[1].length); i++) {
                await delMsg(IDsArray[1][i], IDsArray[0][i], guild);
            }
        }
    }
    log.push("Done!");
}
masterFunction();