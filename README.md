Make your KA Lite installation lighter, put a bird on it.

# About
When placed in your KA Lite's installation directory, open start.html for serverless browsing of your KA Lite's videos and exercises. 


# Installation and dependencies
Place this directory in your KA Lite directory, convert all of the .MP4 files in your content directory to .webmsd.webm, and open in the start.html file in javascript.  The file format dependency and the browser dependency can be fixed with a little elbow grease, keep in mind this is a proof of concept.

# Technical stuff
The start.html page loads topics.json into your browser.  When that finishes loading, you are prompted to go to topics.html where you can browse the "Source of all knowledge", the topic tree.  When you drill down far enough, the links lead to video.html which will load a video from your ka-lite's content directory and also form a link to HTML exercises in your ka-lite directory.  When you click on the exercise link, it brings you to that exercise's HTML page.

# What this doesn't do now but may do in the future
Mainly from a functional stand point, the difference of using Flying Owl as opposed to KA Lite is that that your activity data (mastery on topics, points, etc.) is not saved, nor can you see a the progress of other users for the sake of coaching. We could however build this out to prompt the user to import an activity data file (so they can see past progress) and also export an activity data file to save their progress.  Getting even crazier, contained in your own user file you could store references to other user files that would then allow your browser to build a coaching page for you to see others' activity data. 

# Inspiration
> In character, in manner, in style, in all things, the supreme excellence is simplicity.

by Henry Wadsworth Longfellow (Thanks to Sal Khan for using this quote in his book One World Schoolhouse) 

> Put a bird on it.

by Kari Neumeyer and Fred Armisen of Portlandia


# Credits
Flying Owl coded from R.J. Steinert's hammock in Ghana.  R.J. Steinert is CTO of Open Learning Exchange and is a big fan of putting birds on things.

Thanks to the KA Lite and KA "heavy" team for making awesome sauce!

Thanks to Sal Khan for all of the awesome videos and inspiration. Your book rocks btw.

