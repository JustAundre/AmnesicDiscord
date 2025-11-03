# AmnesicDiscord: As per GDPR; forget me.
Discord remembers too well—let's sweep-the-leg them with the iconic duo, the leveraging of the [GDPR](https://gdpr-info.eu/art-17-gdpr/) and the fact that their [API](https://www.cloudflare.com/learning/security/api/what-is-an-api/) is basically accessible

**Disclaimer: I am *not* responsible for any data you intended to retain on Discord but accidentally deleted as a result of your use of this project and its code, nor am I responsible for the actions Discord may enforce against your account for breaking their Terms of Service for self-botting as [Chapter Descent](#Discord-forget-it-all-now) does. For more information, please visit their [Terms of Service](https://discord.com/terms) page & their [Community Guidelines](https://discord.com/guidelines) page.**

If you intend to use this project safely and with *(REDUCED)* chances of enforcement action upon your account, please keep the `safe delay` toggle ***on***.
<details>
  <summary>Why the slow, sluggish delay?</summary>

  Because it's more reasonable for someone to be deleting a message or 2, fetching messages & creating DMs with someone every 6-12 than deleting 20 messages in 3 seconds and then waiting exactly the [ratelimit](https://www.cloudflare.com/learning/bots/what-is-rate-limiting/) to proceed.
</details>

## "Discord, what do you remember?"
Chapter Rising

Let's gather what they (*Discord*) knows! (By requesting all the messages you've ever sent)

Desktop/Discord Web go [here](https://support.discord.com/hc/en-us/articles/360004957991-Your-Discord-Data-Package#h_01JV2QTH9Q7VZPVXJ5SX9ZAEYD).

Mobile users, you'll go [here](https://support.discord.com/hc/en-us/articles/360004957991-Your-Discord-Data-Package#h_01JV2QTH9QYN9JKZ1D9KC22ZFT).

You'll follow as they say, *except for when you get to the page to select what data you're requesting,* you'll ask only for your *messages*.
Go ahead and download the bulk-deletion helper from [their own Repository](https://github.com/ishnz/bulk_deletion_helper)
<details>
  <summary>Cavet to users on Linux and other Unix systems like MacOS</summary>

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

Once you have the script(s) downloaded, and your data package extracted—move the script to the same folder as the `messages` folder (not inside of the `messages` folder) and run the script their readme.md file tells you to, in order to compile the list of users you've had private DMs with.

You may then also copy the server IDs of the servers you wish to purge yourself from that you're still in, and any group DMs as well.

By the end of this, you should have 3 lists compiled; server IDs, user IDs & group DM channel IDs. You'll need these lists after our next chapter.
## "Discord, forget that please."
Chapter Climax

Let's remove the messages you *can't* access. For this, we'll be making support request/ticket with Discord's Zendesk @ (https://support.discord.com/hc/en-us/requests/new).

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
  ^^^ (The [latter](https://www.dictionary.com/browse/latter) is recommended). ^^^
  
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

On following emails (if any come) which require your intervention to proceed, be firm but polite, understanding and legible.

In my case, I got lucky; and without backlash, in 1 swift email, bascially everything I couldn't access was gone with the wind.

If Discord says they deleted *everything*, and I mean *everything*... Congrats; your journey has shortend and you may skip the next chapter.

If Discord is a prick and would like to make you manually delete all messages that you still have access to—
<details>
  <summary>Discord sucks. 😩</summary>

  (This is including messages with people you aren't friends with anymore but still have DMed or with deleted users which is only accessible by querying a search for all messages from your past self using the flexible global DMs search (which is ONLY AVAILABLE ON THE MOBILE APP 😩))

  If you know anything about a way to use the global DM search via API, which so far I've found to be only usable via the mobile frontend for Discord, please DM me on Github.
</details>

*\<pause and loud inhale for heightend emphasis on how stupid it is for us to need to do this\>*, unfortunately for you, please proceed to the next chapter.

## "Discord, forget it all. *Now.*"
Chapter Descent

# <CODE IN ALPHA: NOT FINISHED>

## "Goodbye, Discord."
Last Page; Resolution

[**Delete your account.**](https://support.discord.com/hc/en-us/articles/212500837-How-to-Delete-your-Discord-Account)

## Credits
Blessings to every maintainer, contributor, creator and sponser of the [Thorium Browser](https://thorium.rocks/), [Ungoogled Chromium](https://ungoogled-software.github.io/ungoogled-chromium-binaries/) and [Firefox](https://www.firefox.com/en-US/), which are the browsers I cannot decide between and thank for being available across so many platforms, and especially the up and coming [Ladybird Web Browser](https://ladybird.org/) which I wish I could back with more than just my words and can't wait for their 1.0 release someday.

Special thanks and credits to [NTTS's video](https://www.youtube.com/watch?v=g5FbRfwMEuo) on this topic & The [creator(s)](https://github.com/prathercc) & [contributors](https://github.com/prathercc/discrub-ext/issues?q=is%3Aissue%20state%3Aclosed) of the [Discrub](https://github.com/prathercc/discrub-ext) extension for Chrome *& Firefox* for being a good chunk of my information & being an inspiration for this project respectively.

High praise to **John Gruber** & **Aaron Swartz**, creators of the [markdown file format](https://en.wikipedia.org/wiki/Markdown) and Garen Torikian, creator of the [MD Tutorial](https://www.markdowntutorial.com/lesson/1/) whose source code is found at their [respective repository](https://github.com/gjtorikian/markdowntutorial.com).

Best wishes for the [IETF](https://www.ietf.org/), main standardizer of the [CSV (Comma-separated values) filetype](https://en.wikipedia.org/wiki/Comma-separated_values), which is a somewhat standard format for storing data now.

P.S. It took me longer than it should've to compile this readme file :3
