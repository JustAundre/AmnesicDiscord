// Global variables provided by the user
var auth = "",
    authorID = "",
    userIDs = [""],
    groupCIDs = [""],
    serverIDs = [""]
;

// Verbose log variable which will store information sent by the script.
var log = new Array;

async function getDMCIDs(userIDs) { // "Get Channel IDs from DMs using user IDs"
    const DMCIDs = new Array; 

    if (!userIDs || userIDs.length === 0 || userIDs.every(id => !id)) { // Initial validation
        log.push("getDMCIDs - Unrecoverable error: No valid users provided.");
        return DMCIDs; 
    }

    for (let i = 0; i < userIDs.length; i++) { // Outer loop iterates through ALL user IDs
        const userID = userIDs[i];
        
        if (!userID) {
            log.push("getDMCID: Invalid user ID provided-skipping.");
            continue; // Skip invalid ID and move to next iteration
        }

        let success = false;
        
        while (!success) { // Inner loop handles retries for the CURRENT user
            try {
                const url = "https://discord.com/api/v9/users/@me/channels";
                const options = {
                    method: "POST",
                    headers: {
                        "Authorization": auth,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ recipient_id: userID })
                };

                const response = await fetch(url, options);
                const data = await response.json().catch(() => ({}));

                if (response.ok) {
                    DMCIDs.push(data.id);
                    success = true; // Success, break the while loop and the 'for' loop advances.
                } else if (response.status === 429) {
                    const retryAfter = (data.retry_after || 2.5) * 1000 + 250;
                    log.push(`Rate-limited on user ${userID}; waiting ${retryAfter}ms.`);
                    await new Promise(resolve => setTimeout(resolve, retryAfter));
                } else {
                    throw new Error(`Failed to get DM channel ID with user "${userID}" - error: ${data.message || "Unknown Error"}`);
                }
            } catch (error) {
                log.push(`getDMCID: ${error}`);
                success = true;
            }
        }
    }
    return DMCIDs;
}

async function getADMIDs(DMCIDs) { // "Get All IDs from DMs (by searching the provided channel IDs)"

}

async function getASIDs(serverIDs) { // "Get All IDs from Servers (by searching the provided server IDs)"

}

async function delMsgs(AIDArray) { // Delete Messages
    try {
        const [CIDs, MIDs] = AIDArray;
        
        if (!CIDs || !MIDs || CIDs.length === 0 || MIDs.length === 0) {
            throw new Error("Nothing to delete.");
        }

        const limit = Math.min(CIDs.length, MIDs.length);

        for (let i = 0; i < limit; i++) { // Outer loop iterates through ALL messages
            const channelID = CIDs[i];
            const msgID = MIDs[i];
            let success = false;
            
            while (!success) { // Inner loop handles retries for the CURRENT message
                try {
                    const url = `https://discord.com/api/v9/channels/${channelID}/messages/${msgID}`;
                    const options = {
                        method: "DELETE",
                        headers: {
                            "Authorization": auth,
                            "Content-Type": "application/json"
                        }
                    };

                    const response = await fetch(url, options);
                    const data = await response.json().catch(() => ({}));

                    if (response.ok) {
                        log.push(`🗑️ Deleted message ${msgID} from channel ${channelID}`);
                        success = true; // Success, break the while loop and the 'for' loop advances.
                    } else if (response.status === 429) {
                        const retryAfter = (data.retry_after || 2.5) * 1000 + 250;
                        log.push(`Ratelimited; waiting ${retryAfter} milliseconds before trying to delete ${msgID} from ${channelID}`);
                        await new Promise(resolve => setTimeout(resolve, retryAfter));
                    } else if (response.status === 403) {
                        throw new Error(`❌ Lacking permission to delete ${msgID} in channel ${channelID}`)
                    } else {
                        throw new Error(`❌ Failed - Status: ${response.status} - Error: ${data.message || "Unknown error"}`);
                    }
                } catch (error) {
                    log.push(`delMsg: ${error}`);
                    success = true;
                }
            }
        } 
    } catch (error) {
        log.push(`delMsgs - Unrecoverable error: ${error}`);
    }
}

async function masterFunction() {
    log.push("Entered master function.");
    try {
        if (!auth) { // Handles cases which will always cause issues
            throw new Error(`Invalid value provided for auth token: "${auth}"`);
        } else if (!Array.isArray(userIDs) || !Array.isArray(groupCIDs) || !Array.isArray(serverIDs)) {
            throw new Error("userIDs, groupCIDs & serverIDs all need to be an array.");
        } else if (userIDs.length <= 0 && groupCIDs.length <= 0 && serverIDs.length <= 0) {
            throw new Error(`There is nothing to delete; all arrays of IDs have 0 values.`);
        } else if (!authorID) {
            log.push(`Continuing script with assumption that you have authorization to delete all messages in every DM, group, and server which is unlikely; value provided for author ID was: "${authorID}"`);
        }

        let DMCIDs = await getDMCIDs(userIDs);  // Channel IDs from your DMs
            DMCIDs = DMCIDs.concat(groupCIDs);  // Channel IDs from your DMs - redefined, combined with your group IDs
        let ADMIDs = await getADMIDs(DMCIDs),   // Combined IDs for your DMs ([arrayOfChannelIDs, arrayOfMessageIDs])
            ASIDs = await getASIDs(serverIDs)   // Combined IDs for yor joined servers ([arrayOfChannelIDs, arrayOfMessageIDs])
        ;
    } catch (error) {
        log.push(`Unrecoverable error: ${error}`);
    }
}

(async () => { // Logs the verbose logs only after the master function finishes
    await masterFunction();
    console.log(log);
})();