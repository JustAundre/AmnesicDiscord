<p>Discord remembers too well—let's sweep-the-leg them with the iconic duo, the leveraging of the <a href="https://gdpr-info.eu/art-17-gdpr/">GDPR</a> & the fact that their <a href="https://www.cloudflare.com/learning/security/api/what-is-an-api/">API</a> is basically accessible to every domain. <br></p>
<details>
  <summary>⚠️🛑⚠️ <b>DISCLAIMER</b> ⚠️🛑⚠️</summary>

  <p><b>Disclaimer: I am <em>not</em> responsible for any data you intended to retain on Discord but accidentally deleted as a result of your use of this project & its code, nor am I responsible for the actions Discord may enforce against your account for breaking their Terms of Service for self-botting as <a href="#chapter-descent">Chapter Descent</a> does. For more information, please visit their <a href="https://discord.com/terms">Terms of Service</a> page & their <a href="https://discord.com/guidelines">Community Guidelines</a> page.</b></p>

  <p>You may also disregard the disclaimer if you want to proceed by skipping <a href="#chapter-descent">Chapter Descent</a> entirely, which is possible, & in few cases, entirely not needed if <a href="#chapter-climax">Chapter Climax</a> yields results which achieve what the intention of <a href="#chapter-descent">Chapter Descent</a> is, which as well as clearing messages, may also remove messages you <em>also have access to</em>!</p>
</details>

<p>If you intend to use this project safely & with <em>REDUCED</em> chances of enforcement action upon your account, please keep the <b>safe delay</b> toggle <b><em>on</em></b>.</p>
<details>
  <summary>Why the slow, sluggish delay?</summary>

  <p>Because it's more reasonable for someone to be deleting a message or 2, fetching messages & creating DMs with someone every 6-12 seconds than deleting <b>20 messages</b> in <em>3 seconds</em> & then waiting exactly the <a href="https://www.cloudflare.com/learning/bots/what-is-rate-limiting/">ratelimit</a> to proceed.</p>
</details>

<h2 id="discord-what-do-you-remember">"Discord, what do you remember?"</h2>
<h3 id="chapter-rising" style="font-size: .85em; opacity: .8; margin: unset;">Chapter Rising</h3>
<p>Let's gather what they (<em>Discord</em>) knows! (By requesting all the messages you've ever sent) <br></p>
<p>Desktop/Discord Web go <a href="https://support.discord.com/hc/en-us/articles/360004957991-Your-Discord-Data-Package#h_01JV2QTH9Q7VZPVXJ5SX9ZAEYD">here</a> <br></p>
<p>Mobile users, you'll go <a href="https://support.discord.com/hc/en-us/articles/360004957991-Your-Discord-Data-Package#h_01JV2QTH9QYN9JKZ1D9KC22ZFT">here</a></p>

<p>You'll follow as they say, <em>except for when you get to the page to select what data you're requesting,</em> you'll ask only for your <em>messages</em>. <br></p>
<p>Go ahead & download the bulk-deletion helper from <a href="https://github.com/ishnz/bulk_deletion_helper">their own Repository</a>!</p>
<details>
  <summary>Caveat to users on Linux/MacOS & other Unix systems</summary>

  <p>Applying to <em>users on <a href="https://fsl.fmrib.ox.ac.uk/fslcourse/unix_intro/whatis.html">Unix-based systems</a> only,</em> the scripts provided in this repo reference the messages folder with the wrong capitalization as noted in this <a href="https://github.com/ishnz/bulk_deletion_helper/pull/16">pull request of theirs</a> as of November 2nd, 2025 (11/2/2025).</p>

  <p>Again, if you are not a Linux user & use Windows; you may ignore this.</p>
</details>

<p>If you haven't already, install <b>python3</b> from <a href="https://python.org">their webpage</a>; or alternatively, on Linux/Mac OS, using your package manager using one of the 3 command chains belonging to your respective base distribution; you'll need it to run the script.</p>
<details>
  <summary>Command list</summary>

  <pre><code>
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
  </code></pre>
</details>

<p>Once you have the script(s) downloaded, & your data package extracted—move the script to the same folder as the <code>messages</code> folder (not inside of the <code>messages</code> folder) & run the script their readme.md file tells you to, in order to compile the list of users you've had private DMs with. <br></p>
<p><img src="media/image.png" alt="How your setup should look" /><br></p>
<p>You may then also copy the server IDs of the servers you wish to purge yourself from that you're still in, & any group DMs as well. <br></p>
<p><img src="media/image-1.png" alt="Copying server IDs" /><br></p>
<p><img src="media/image-2.png" alt="Copying group IDs" /><br></p>
<p>By the end of this, you should have 3 lists compiled; <b>server IDs</b>, <b>user IDs</b> & <b>group DM channel IDs</b>. You'll need these lists after our next chapter.</p>

<h2 id="discord-forget-that-please">"Discord, forget that please."</h2>
<h3 id="chapter-climax" style="font-size: .85em; opacity: .8; margin: unset;">Chapter Climax</h3>
<p>Let's remove the messages you <em>can't</em> access. For this, we'll be making support request/ticket with <a href="https://support.discord.com/hc/en-us/requests/new">Discord's Zendesk</a> <br></p>
<p>Sign up for Zendesk & login, or just login if you already have an account (avoid sending sensitive info as much as possible, find out why <a href="https://discord.com/press-releases/update-on-security-incident-involving-third-party-customer-service.">here</a>.)</p>

<details>
  <summary>Ticket template</summary>

  <pre><code>Good day, Discord.
  
I have recently requested my data package from Discord & found some data that I would like to have wiped in compliance with GDPR.
I would like to request the messages with the following IDs in CSV format, listed as channelid,messageid, get deleted. While I underst& conversation context is important, my personal privacy is vastly more concerning to myself; & I'm sure, you too.
I would have done this myself, but unfortunately, this still isn't possible.

Thank you in advance,
(Full name/Full online alias).
</code></pre>
  <p>^^^ (The <a href="https://www.dictionary.com/browse/latter">latter</a> is recommended). ^^^ <br></p>
  <p>Remember to attach the <b>CSV file</b> containing your messages for the <b>Trust & Safety team</b> to process. Don't worry too much about any invalid references to messages as Discord will kindly skip over those for you as they have me & others (although; you shouldn't have any of those if you've done <a href="#discord-what-do-you-remember">Chapter Rising</a> as instructed).</p>
</details>

<details>
  <summary>Messages which will be ignored/deleted:</summary>
  
  <p>As Discord says in their resolving reply to my ticket, messages which will likely not be deleted goes as follow:</p>
  <pre><code>Messages located in spaces that you still have access to will not be deleted.
Messages that were sent by another user will not be deleted.
Messages with invalid or incorrect message/channel IDs will not be processed.
</code></pre>
</details>

<p>On follow-up emails which require your intervention to proceed (if any), be firm but polite, underst&ing & formal. <br></p>
<p>In my case, I got lucky; & without backlash, in 1 swift email, basically everything I couldn't access was gone with the wind. <br></p>
<p>If Discord says they deleted <em>everything</em>, & I mean <em>everything</em>... Congrats; your journey has shortend & you may skip the next chapter. <br></p>
<p>If Discord is a prick & would like to make you manually delete all messages that you still have access to... unfortunately for you, please proceed to the next chapter.</p>

<h2 id="discord-forget-it-all-now">"Discord, forget it all. <em>Now.</em>"</h2>
<h3 id="chapter-descent" style="font-size: .85em; opacity: .8; margin: unset;">Chapter Descent - <b>&lt;CODE IN ALPHA: NOT FINISHED&gt;</b></h3>

<details>
  <summary>Why choose this over something like Discrub?</summary>

  <p><a href="https://github.com/prathercc/discrub-ext">Discrub</a> can only scrub DMs with people you already have open DMs with; otherwise, have fun scrubbing those messages. <br></p>
  <p>While the goal of <a href="https://github.com/prathercc/discrub-ext">Discrub</a> is a data exporting tool <em>& data removal</em> tool, that makes it less optimized for being either. "Jack of all cards, master of none." -They say. <br></p>
  <p>My script is optimized to only do what is needed for removing your data; you don't need to see what messages you're deleting if you're deleting them all, nor their reaction data. With <a href="https://github.com/prathercc/discrub-ext">Discrub</a>, if you give it 0 delay between requests; it does 0 delay... by continuing to spam even after getting a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429">429</a> error back. As for the script I made, it will gracefully listen to the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Retry-After">retry_after</a> value Discord returns during a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429">429</a> error.</p>

  <p>Don't take this the wrong way, I don't think I would be doing all this now without the existence of Discrub.</p>
</details>

Go to the AmnesicDiscord project's [scrubbing page](https://justaundre.github.io/AmnesicDiscord/main/) & enter the channel ID list, guild ID list, the user ID list,your user ID & authentication token. The 3 lists for scrubbing, the authentication token to interact with data on your account, & your user ID to search for specifically only your messages. Preferably, keep <b>safe delay</b> on.

<h2 id="goodbye-discord">"Goodbye, Discord."</h2>
<h3 id="last-page-resolution" style="font-size: .85em; opacity: .8; margin: unset;">Last Page; Resolution</h3>
<p><a href="https://support.discord.com/hc/en-us/articles/212500837-How-to-Delete-your-Discord-Account"><b>Delete your account.</b></a></p>

<details>
  <summary>Credits where it's due</summary>

  <h3>Credits</h3>

  <p>Blessings to every maintainer, contributor, creator & sponser of the <a href="https://thorium.rocks/">Thorium Browser</a>, <a href="https://ungoogled-software.github.io/ungoogled-chromium-binaries/">Ungoogled Chromium</a> & <a href="https://www.firefox.com/en-US/">Firefox</a>, which are the browsers I cannot decide between & thank for being available across so many platforms, & especially the up & coming <a href="https://ladybird.org/">Ladybird Web Browser</a> which I wish I could back with more than just my words & can't wait for their 1.0 release someday.</p>

  <p>Special thanks & credits to <a href="https://www.youtube.com/watch?v=g5FbRfwMEuo"><b>NTTS</b>'s video</a> on this topic & The <a href="https://github.com/prathercc">creator(s)</a> & <a href="https://github.com/prathercc/discrub-ext/issues?q=is%3Aissue%20state%3Aclosed">contributors</a> of the <a href="https://github.com/prathercc/discrub-ext">Discrub</a> extension for Chrome <em>& Firefox</em> for being a good chunk of my information & being an inspiration for this project respectively.</p>

  <p>High praise to <b>John Gruber</b> & <b>Aaron Swartz</b>—creators of the <a href="https://en.wikipedia.org/wiki/Markdown">markdown file format</a>, <b>Garen Torikian</b>—creator of the <a href="https://www.markdowntutorial.com/lesson/1/">MD Tutorial</a> whose source code is found at their <a href="https://github.com/gjtorikian/markdowntutorial.com">respective repository</a>, & the honorable people with their no-analytics, free software philosophy who work at DigitalPro & made <a href="https://markdownlivepreview.dev">MarkdownLivePreview</a>.</p>

  <p>Best wishes for the <a href="https://www.ietf.org/">IETF</a>, main st&ardizer of the <a href="https://en.wikipedia.org/wiki/Comma-separated_values">CSV (Comma-separated values) filetype</a>, which is a somewhat st&ard format for storing data now.</p>

  <p>Grant the hopes & dreams of the <a href="https://github.com/discohook/discohook/graphs/contributors">contributors</a> & <a href="https://ko-fi.com/shayypy">initial creator</a> of <a href="https://discohook.app">Discohook</a> for letting me spam 5 webhooks at once with the letter "a" in my test Discord server so that I could test my scripts.</p>

  <p>Heaven awaits the creator(s) of & the people who forfeit their wonderful works to <a href="https://svgrepo.com/">SVGrepo</a></p>
</details>

<details>
  <summary>Limitations (Tangent) - Discord sucks 😩</summary>

  <p>If Discord asks you to delete messages yourself, manually... That includes users you aren't friends with anymore but still have DMed even <em>once</em> or with deleted users which is only accessible by querying a search for all messages from your past self using the flexible global DMs search (which is ONLY AVAILABLE ON THE MOBILE APP 😩)</p>

  <p>If you know anything about a way to use the global DM search via API, which so far I've found to be only usable via the mobile frontend for Discord, please DM me on Github.</p>
</details>

<p style="font-size: .85em; opacity: .8; margin: unset;">P.S. It took me longer than it should've to compile this readme file :3</p>