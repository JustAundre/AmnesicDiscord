# AmnesicDiscord: As per GDPR; forget me.
Discord remembers too well—let's sweep-the-leg them with the iconic duo, the leveraging of the [GDPR](https://gdpr-info.eu/art-17-gdpr/) and the fact that their [API](https://www.cloudflare.com/learning/security/api/what-is-an-api/) is basically accessible to every domain. <br>
<details>
  <summary>⚠️🛑⚠️ DISCLAIMER ⚠️🛑⚠️</summary>

  **Disclaimer: I am *not* responsible for any data you intended to retain on Discord but accidentally deleted as a result of your use of this project and its code, nor am I responsible for the actions Discord may enforce against your account for breaking their Terms of Service for self-botting as [Chapter Descent](#discord-forget-it-all-now) does. For more information, please visit their [Terms of Service](https://discord.com/terms) page & their [Community Guidelines](https://discord.com/guidelines) page.**

  You may also disregard the disclaimer if you want to proceed by skipping [Chapter Descent](#Discord-forget-it-all-now) entirely, which is possible, and in few cases, entirely not needed if [Chapter Climax](#discord-forget-that-please) yields results which achieve what the intention of [Chapter Descent](#discord-forget-it-all-now) is, which as well as clearing messages, may also remove messages you *also have access to*!
</details>

If you intend to use this project safely and with *(REDUCED)* chances of enforcement action upon your account, please keep the `safe delay` toggle ***on***.
<details>
  <summary>Why the slow, sluggish delay?</summary>

  Because it's more reasonable for someone to be deleting a message or 2, fetching messages & creating DMs with someone every 6-12 seconds than deleting 20 messages in 3 seconds and then waiting exactly the [ratelimit](https://www.cloudflare.com/learning/bots/what-is-rate-limiting/) to proceed.
</details>

## "Discord, what do you remember?"
Chapter Rising <br>
Let's gather what they (*Discord*) knows! (By requesting all the messages you've ever sent) <br>
Desktop/Discord Web go [here](https://support.discord.com/hc/en-us/articles/360004957991-Your-Discord-Data-Package#h_01JV2QTH9Q7VZPVXJ5SX9ZAEYD). <br>
Mobile users, you'll go [here](https://support.discord.com/hc/en-us/articles/360004957991-Your-Discord-Data-Package#h_01JV2QTH9QYN9JKZ1D9KC22ZFT).

You'll follow as they say, *except for when you get to the page to select what data you're requesting,* you'll ask only for your *messages*. <br>
Go ahead and download the bulk-deletion helper from [their own Repository](https://github.com/ishnz/bulk_deletion_helper)
<details>
  <summary>Cavet to users on Linux/MacOS and other Unix systems</summary>

  Applying to *users on [Unix-based systems](https://fsl.fmrib.ox.ac.uk/fslcourse/unix_intro/whatis.html) only,* the scripts provided in this repo reference the messages folder with the wrong capitalization as noted in [this pull request](https://github.com/ishnz/bulk_deletion_helper/pull/16) as of November 2nd, 2025 \(11/2/2025\).

  Again, if you are not a Linux user and use Windows; you may ignore this.
</details>

If you haven't already, install python3 from [their webpage](https://python.org); or alternatively, on Linux/Mac OS, using your package manager using one of the 3 command chains belonging to your respective base distribution; you'll need it to run the script.
<details>
  <summary>Command list</summary>

  ```bash
  # Debian/Ubuntu
  sudo apt update ; sudo apt install python3 python3-pip

  # Newer Red Hat/Fedora
  sudo dnf update ; sudo dnf install python3 python3-pip
  # Older Red Hat/Fedora
  sudo yum update ; sudo yum install python3 python3-pip

  # Arch
  sudo pacman -Syu ; sudo pacman -Sy python python-pip

  # Mac OS
  brew install python
  ```
</details>

Once you have the script(s) downloaded, and your data package extracted—move the script to the same folder as the `messages` folder (not inside of the `messages` folder) and run the script their readme.md file tells you to, in order to compile the list of users you've had private DMs with. <br>
![How your setup should look](media/image.png) <br>
You may then also copy the server IDs of the servers you wish to purge yourself from that you're still in, and any group DMs as well. <br>
![Copying server IDs](media/image-1.png) <br>
![Copying group IDs](media/image-2.png) <br>
By the end of this, you should have 3 lists compiled; server IDs, user IDs & group DM channel IDs. You'll need these lists after our next chapter.

## "Discord, forget that please."
Chapter Climax <br>
Let's remove the messages you *can't* access. For this, we'll be making support request/ticket with Discord's Zendesk @ (https://support.discord.com/hc/en-us/requests/new). <br>
Sign up for Zendesk and login, or just login if you already have an account (Refrain from uploading sensitive as much as possible, out of concern for dataleaks such as [this one](https://discord.com/press-releases/update-on-security-incident-involving-third-party-customer-service).)

<details>
  <summary>Ticket template</summary>

  ```text
  Good day, Discord.
  
  I have recently requested my data package from Discord and found some data that I would like to have wiped in compliance with GDPR.
  I would like to request the messages with the following IDs in CSV format, listed as channelid,messageid, get deleted. While I understand conversation context is important, my personal privacy is vastly more concerning to myself; and I'm sure, you too.
  I would have done this myself, but unfortunately, this still isn't possible.
  
  Thank you in advance,
  (Full name/Full online alias).
  ```
  ^^^ (The [latter](https://www.dictionary.com/browse/latter) is recommended). ^^^ <br>
  Remember to attach the CSV file containing your messages for the Trust & Safety team to process. Don't worry too much about any invalid references to messages as Discord will kindly skip over those for you as they have me and others (although; you shouldn't have any of those if you've done [Chapter Rising](#Discord-what-do-you-remember) as instructed).
  </details>

<details>
  <summary>Messages which will be ignored/deleted:</summary>
  
  As Discord says in their resolving reply to my ticket, messages which will likely not be deleted goes as follow:
  ```text
  Messages located in spaces that you still have access to will not be deleted.
  Messages that were sent by another user will not be deleted.
  Messages with invalid or incorrect message/channel IDs will not be processed.
  ```
</details>

On follow-up emails which require your intervention to proceed (if any), be firm but polite, understanding and formal. <br>
In my case, I got lucky; and without backlash, in 1 swift email, bascially everything I couldn't access was gone with the wind. <br>
If Discord says they deleted *everything*, and I mean *everything*... Congrats; your journey has shortend and you may skip the next chapter. <br>
If Discord is a prick and would like to make you manually delete all messages that you still have access to... unfortunately for you, please proceed to the next chapter.

## "Discord, forget it all. *Now.*"
Chapter Descent - **\<CODE IN ALPHA: NOT FINISHED\>** <br>

<details>
  <summary>Why choose this over something like Discrub?</summary>

  [Discrub](https://github.com/prathercc/discrub-ext) can only scrub DMs with people you already have open DMs with; otherwise, have fun scrubbing those messages. <br>
  While the goal of [Discrub](https://github.com/prathercc/discrub-ext) is a data exporting tool *& data removal* tool, that makes it less optimized for being either. "Jack of all cards, master of none." -They say. <br>
  My script is optimized to only do what is needed for removing your data; you don't need to see what messages you're deleting if you're deleting them all, nor their reaction data. With [Discrub](https://github.com/prathercc/discrub-ext), if you give it 0 delay between requests; it does 0 delay... by continuing to spam even after getting a [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429) error back. As for the script I made, it will gracefully listen to the [retry_after](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Retry-After) value Discord returns during a [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429) error.

  Don't take this the wrong way, I don't think I would be doing all this now without the existence of Discrub.
</details>

## "Goodbye, Discord."
Last Page; Resolution <br>
[**Delete your account.**](https://support.discord.com/hc/en-us/articles/212500837-How-to-Delete-your-Discord-Account)

<details>
  <summary>Credits where it's due</summary>

  ## Credits

  Blessings to every maintainer, contributor, creator and sponser of the [Thorium Browser](https://thorium.rocks/), [Ungoogled Chromium](https://ungoogled-software.github.io/ungoogled-chromium-binaries/) and [Firefox](https://www.firefox.com/en-US/), which are the browsers I cannot decide between and thank for being available across so many platforms, and especially the up and coming [Ladybird Web Browser](https://ladybird.org/) which I wish I could back with more than just my words and can't wait for their 1.0 release someday.

  Special thanks and credits to [NTTS's video](https://www.youtube.com/watch?v=g5FbRfwMEuo) on this topic & The [creator(s)](https://github.com/prathercc) & [contributors](https://github.com/prathercc/discrub-ext/issues?q=is%3Aissue%20state%3Aclosed) of the [Discrub](https://github.com/prathercc/discrub-ext) extension for Chrome *& Firefox* for being a good chunk of my information & being an inspiration for this project respectively.

  High praise to **John Gruber** & **Aaron Swartz**, creators of the [markdown file format](https://en.wikipedia.org/wiki/Markdown) and Garen Torikian, creator of the [MD Tutorial](https://www.markdowntutorial.com/lesson/1/) whose source code is found at their [respective repository](https://github.com/gjtorikian/markdowntutorial.com).

  Best wishes for the [IETF](https://www.ietf.org/), main standardizer of the [CSV (Comma-separated values) filetype](https://en.wikipedia.org/wiki/Comma-separated_values), which is a somewhat standard format for storing data now.

  Grant the hopes & dreams of the [contributors](https://github.com/discohook/discohook/graphs/contributors) & [initial creator](https://ko-fi.com/shayypy) of [Discohook](https://discohook.app) for letting me spam 5 webhooks at once with the letter "a" in my test Discord server so that I could test my scripts.

  Heaven awaits the creator(s) of and the people who forfeit their wonderful works to [SVGrepo](https://svgrepo.com/)
</details>

<details>
  <summary>(Limitations - Discord sucks 😩)</summary>

  If Discord asks you to delete messages yourself, manually... That includes users you aren't friends with anymore but still have DMed even *once* or with deleted users which is only accessible by querying a search for all messages from your past self using the flexible global DMs search (which is ONLY AVAILABLE ON THE MOBILE APP 😩)

  If you know anything about a way to use the global DM search via API, which so far I've found to be only usable via the mobile frontend for Discord, please DM me on Github.
</details>

P.S. It took me longer than it should've to compile this readme file :3