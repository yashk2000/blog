---
layout: post
title: KWoC’18- End Evaluation Report
categories: [Open Source Competition]
tags: [java, android, open source, contributions]
fullview: false
comments: true
image: https://raw.githubusercontent.com/yashk2000/myblog/gh-pages/images/Screenshot%20from%202019-01-14%2021-37-54.png
---

Kharagpur Winter of Code is an online program for introducing college students to open source software and how to contribute to it. It also helps students prepare for other open source events such as Google Sumer of Code. The program generally begins in December and goes on for a month till January. I got to know about KWoC form the seniors in my college who had participated in it last year.

This year KWoC began on 5th December 2018 and went on till 10th January 2019. It was a really good experience. I am a newbie to open source and was confused about how to contribute to open source. Initially scared, I slowly began talking to the mentors of the projects I selected. My mentors were really helpful and it is thanks to them that I was able to contribute in KWoC. I contributed to six projects. Being an Android developer, I hunted for all Android projects and started contributing to them. I’ll list all of them and talk about all of them.

1) Quiz App :

This was the first app which I contributed to. The mentor of the project Sai Rajendra Immadi helped me a lot. He patiently answered every query I had, no matter how small. The first contribution I made to the app was a simple button change. Earlier the previous button used to show even on the first question. I made a change so that the button would show up only after the first question. Link to my first pull request :

https://github.com/immadisairaj/Quiz/pull/12

When this pull request was approved and merged, I was really happy. It was a great boost to my confidence and enthusiasm

The next contribution I made was adding a new feature to the app. I made a dialog box show the summary of a users score after the quiz ended. It also provided an option for the user to see the solution to the questions. Link to the pull request :

https://github.com/immadisairaj/Quiz/pull/13

After this, a problem came up in the app after a recent commit due to which sometimes the wrong score was being displayed. I fixed this error next. Link to the pull request :

https://github.com/immadisairaj/Quiz/pull/19

After this, the UI of the app had changed a lot from the beginning so I updated the README.md of the app with the latest screenshots of the UI. This was a really simple thing, but every pull request that got merged, no matter how simple made me really happy and increased my confidence. Link to the pull request :

https://github.com/immadisairaj/Quiz/pull/20

My final contribution to the app was also a change to the README.

https://github.com/immadisairaj/Quiz/pull/51

2) BBC News App :

This app taught me a lot. The mentor of the app harrycode was also really helpful. The first change I made was a change to the UI of the app. I made the news headlines and the news appear in different, more visible colors. Link to the pull request :

https://github.com/harrycode007/BBCNewsApp/pull/7

I then found a simple issue. All news items were not being fetched from BBC News. Since this is an app which gives news only form BBC sources, I created the issue and fixed it. Link to the pull request :

https://github.com/harrycode007/BBCNewsApp/pull/15

It was in this app that I learned the importance of hard-coding strings. harrycode explained to me the importance of hardcoding strings. They help in creating translations for the app and help in the internationalization of an app. Link to the pull request :

https://github.com/harrycode007/BBCNewsApp/pull/16

The final contribution I made to this app was adding a new feature. I added a new feature of allowing the user to chose the category of news the user wants to see. Link to the pull request :

https://github.com/harrycode007/BBCNewsApp/pull/18

3) Find The Meaning :

This is a dictionary app created by Amrita Nair. She was the mentor of the project and was really helpful. There were several bugs in the app due to which the app used to crash. I created issues for the bugs and solved them.

Pull requests for preventing the ap from crashing :

https://github.com/theamritanair/Find-the-Meaning/pull/7

https://github.com/theamritanair/Find-the-Meaning/pull/9

I also created an about activity for the app to show details of the app and the API used. Link to the pull request :

https://github.com/theamritanair/Find-the-Meaning/pull/12

I created another feature in the app which allows the user to search for Hindi words besides English words by changing the language of the app. This pull request hasn’t been merged yet though. Link to the pull request :

https://github.com/theamritanair/Find-the-Meaning/pull/13

4) Melonicious :

This is a really great app which is still in development. This app tracks the progress of a given set of students on GitHub. The mentor of this project, Abhilash G was a really great mentor. In this project, I first time used SnackBars to display a message and used a SnackBar to implement double quit to exit feature. Link to the pull request :

https://github.com/AbhilashG97/Melonicious/pull/10

I added an about activity to the app to display the details of the app. Link to the pull request  :

https://github.com/AbhilashG97/Melonicious/pull/13

This was the first app in which I created translations for the app. I created Spanish translations for the app. whenever the system settings were changed to Spanish, the app also displayed in Spanish. Link to the pull request :

https://github.com/AbhilashG97/Melonicious/pull/18

5) Weather App :

This is perhaps one of the best apps for showing weather in the Google Play Store. It is free and has no adds. It has all the features an app needs. It only lacked on a feature that was of sharing the weather. This was my only contribution to the app, adding a share feature. But I did it and when it was merged, I felt really happy as it was the first time, I made such a feature to an app that was on the Google Play Store. Link to the pull request:

https://github.com/Sparker0i/Weather/pull/57

6) PyQt Calculator :

This is not an android app, but nevertheless, I found it interesting and made some contributions to it. I fixed an issue that the wrong app name was being displayed in the app window. Link to pull requests :

https://github.com/taapas1128/Calculator_pyqt/pull/39

https://github.com/taapas1128/Calculator_pyqt/pull/40

Contribution summary :

Commits made: 19

Pull request merged: 18/1

These are all the contribution I made in KWoC. This was really good preparation for GSoC. Thanks to KWoC, I know how to use Git properly now. I also want to thank the foss club at my college, FOSS@Amrita which taught me all the things I know and made me enthusiastic about open source. I would really like to thank all the mentors who supported me in the program. I am grateful to Kharagpur Open Source Society for this wonderful program to incorporate more people into open-source development. Looking forward to more such endeavors in the future 🙂