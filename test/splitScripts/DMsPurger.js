var auth = "",
    authorID = "",
    userIDs = ["1234", "5678", "9101112"],
    log = new Array;

async function createDMChannel(userID) {
    try {
        const response = await fetch("https://discord.com/api/v9/users/@me/channels", {
            method: 'POST',
            headers: {
                'Authorization': auth,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recipient_id: userID
            })
        });

        const data = await response.json().catch(() => ({}));
        if (response.ok) {
            return await data.id
        } else if (response.status == 429) {
            const retryAfter = (data.retry_after || 2.5) * 1000 + 250;
            await new Promise(resolve => setTimeout(resolve, retryAfter));
            return await createDMChannel(userID);
        } else {
            throw new Error(`❌ Failed to make a DM with user ${userID} - Error: ${data || "Unknown Error"}`);
        }

    } catch (error) {
        log.push(`💥 Unrecoverable error: ${error}`);
    }
}

async function getMsg(channelID, MIDList = new Array, offset = 0) {
    try {
        if (!channelID || !MIDList) {
            throw new Error('Can\'t getMsg() without the channel ID or an array to store the recieved message IDs in.\n    - Ran function getMsg() without providing all required values.');
        }
        
        var response
        if (authorID) {
            var response = await fetch(`https://discord.com/api/v9/channels/${channelID}/messages/search?min_id=48997859328000000&sort_by=timestamp&sort_order=desc&offset=${offset * 25}`, {
                method: 'GET',
                headers: {
                    'Authorization': auth,
                    'Content-Type': 'application/json'
                }
            });
        } else {
            var response = await fetch(`https://discord.com/api/v9/channels/${channelID}/messages/search?min_id=48997859328000000&sort_by=timestamp&sort_order=desc&author_id=${authorID}&offset=${offset * 25}`, {
                method: 'GET',
                headers: {
                    'Authorization': auth,
                    'Content-Type': 'application/json'
                }
            });
        }

        const data = await response.json().catch(() => ({}));
        if (response.status == 204) {
            log.push("🙈 No messages found");
            return;
        } else if (response.ok) {
            if (data.messages && Array.isArray(data.messages) && data.messages.length > 0) {
                for (const messageArray of data.messages) {
                    const message = messageArray[0];    
                    const msgID = message?.id;
                    if (msgID) {
                        log.push(`Adding message ID ${msgID} to the deletion query.`);
                        MIDList.push(msgID);
                    }
                }
                offset++;
                return await getMsg(channelID, MIDList, offset);
            } else {
                log.push(`Final message ID list: ${MIDList.join(", ")}`);
                return MIDList || new Array;
            }
        } else if (response.status == 429) {
            const retryAfter = (data.retry_after || 2.5) * 1000 + 250;
            log.push(`Ratelimited while getting messages from channel ${channelID} - Retrying in ${retryAfter} milliseconds.`);
            await new Promise(resolve => setTimeout(resolve, retryAfter));
            return await getMsg(channelID, MIDList, offset);
        } else if (response.status == 403) {
            throw new Error(`Lacking permissions to get messages in channel ${channelID}.`);
        } else {
            throw new Error(`❌ Failed - Error: ${response.status, data || "Unknown Error"}`);
        }
    } catch (error) {
        log.push(`💥 Unrecoverable error: ${error}`);
    }
}

async function delMsg(channelID, MIDList) {
    try {
        const response = await fetch(`https://discord.com/api/v9/channels/${channelID}/messages/${MIDList}`, {
            method: 'DELETE',
            headers: {
                'Authorization': auth,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            log.push(`🗑️ Message ${MIDList} deleted for user ${userID}`);
            return;
        } else if (response.status == 429) {
            const data = await response.json().catch(() => ({}));
            const retryAfter = (data.retry_after || 2.5) * 1000 + 250;
            await new Promise(resolve => setTimeout(resolve, retryAfter));
            return await delMsg(channelID, MIDList);
        } else if (response.status == 403) {
            throw new Error(`❌ Deleting message ${msgId} is forbidden`)
        } else {
            const data = await response.json().catch(() => ({}));
            throw new Error(`❌ Failed - Status: ${response.status} - Error: ${data || 'Unknown Error'}`);
        }

    } catch (error) {
        log.push(`💥 Unrecoverable error: ${error}`);
    }
}

async function masterFunction() {
    for (const userID of userIDs) {
        const channelID = await createDMChannel(userID);
        if (!channelID) {
            
        } else {
            log.push(`Made DM channel ${channelID} for user ${userID}`);
        }

        const MIDLists = await getMsg(channelID, [], 0);
        if (MIDLists.length == 0) {
            log.push(`🧐 No messages found in the DM channel for user ${userID}`);
        } else {
            for (const MIDList of MIDLists) {
                await delMsg(channelID, MIDList);
            }
        }
    }
    log.push("Done!");
}
masterFunction();