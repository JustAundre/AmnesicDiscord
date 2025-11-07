var auth = "",
    authorID = "",
    userIDs = [""],
    groupCIDs = [""],
    guildIDs = [""],
    log = new Array
;
async function openDMs(userID, CIDList = new Array, i = 0) {
    try {
        var url = "https://example.com/api/v9/users/@me/channels",
            options = {
            method: 'POST',
            headers: {
                "Authorization": auth,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                recipient_id: userID
            })
        };
        const response = await fetch(url, options);

        const data = await response.json().catch(() => ({}));
        if (response.ok) {
            log.push(`Adding ${data.id} to the channel ID list`);
            CIDList.push(data.id);
            i++;
            if (i >= userIDs.length) {
                return CIDList;
            } else {
                return await openDMs(userID[i], CIDList, i);
            }
        } else if (response.status == 429) {
            const retryAfter = (data.retry_after || 2.5) * 1000 + 250;
            await new Promise(resolve => setTimeout(resolve, retryAfter));
            return await openDMs(userID, CIDList, i);
        } else {
            throw new Error("❌ Couldn't open DM with user ${userID} - error:", data || "Unknown error", response.status);
        }

    } catch (error) {
        log.push("💥 Unrecoverable error:", error);
    }
}

async function getMessages(channelIDs, type, MIDList = new Array, offset = 0) {
    try {
        if (!channelID || !MIDList) {
            throw new Error('Can\'t getMsg() without the channel ID or an array to store the recieved message IDs in.\n    - Ran function getMsg() without providing all required values.');
        }
        
        var url,
            options = {
                method: "GET",
                headers: {
                    "Authorization": auth,
                    "Content-Type": "application/json"
                }
            }
        ;
        
        type = type.toLowerCase()
        if (type == "dm" || type == "groupdm") {
            url = `https://example.com/api/v9/channels/${channelID}/messages/search?min_id=48997859328000000&sort_by=timestamp&sort_order=desc${authorID}&offset=${offset * 25}`;
        } else if (type.lowercase() == "guild") {
            url = `https://example.com/api/v9/guilds/${guildID}/messages/search?min_id=48997859328000000&sort_by=timestamp${authorID}&sort_order=desc&offset=${offset * 25}`;
        } else {
            throw new Error("🔎 Couldn't identify how to retrieve messages; your options are 'dm', 'groupdm' or 'guild'");
        }

        var response = await fetch(url, options);

        const data = await response.json().catch(() => ({}));
        if (response.status == 204) {
            log.push("🙈 No messages found");
            return new Array;
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
                return await getMessages(channelID, type, MIDList, offset);
            } else {
                log.push(`Final message ID list: ${MIDList.join(", ")}`);
                return MIDList || new Array;
            }
        } else if (response.status == 429) {
            const retryAfter = (data.retry_after || 2.5) * 1000 + 250;
            log.push(`Ratelimited while getting messages from channel ${channelID} - retrying in ${retryAfter} milliseconds.`);
            await new Promise(resolve => setTimeout(resolve, retryAfter));
            return await getMessages(channelID, type, MIDList, offset);
        } else if (response.status == 403) {
            throw new Error(`⛓️‍💥 No permission to get messages from channel "${channelID}"`);
        } else {
            throw new Error("❌ Error:", data, response.status || "Unknown error");
        }
    } catch (error) {
        log.push(`💥 Unrecoverable error: ${error}`);
    }
}

async function deleteMessage() {

}

async function masterFunction() {
    try {
        if (!auth) {
            log.push("Authorization token missing/is a falsy value; exiting script.");
        }

        if (!authorID) {
            log.push("Author ID missing, will attempt to delete every message in every channel of every guild, DM & group.");
        } else {
            authorID=`&author_id=${authorID}`;
        }

        var channelIDs = await openDMs(userIDs),
            messageIDs = await getMessages(channelIDs, "DM");
        await deleteMessage(channelIDs, messageIDs);
    } catch {
        console.warn("💥 Unrecoverable error:", log || "Critical issue; verbose log doesn't exist!");
    }
}