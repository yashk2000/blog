---
path: '/favorite-vscode-features'
date: '2019-05-19T17:12:33.962Z'
title: 'Favorite Visual Studio Code features 👌'
featuredImage: './featured-image.jpg'
headerImage: './header.jpg'
tags: [vscode, plugins, web, development]
excerpt: 'I use Visual Studio Code almost every day so here are my favorite features'
---

Visual Studio Code is one of the most used code editor environments.
As mentioned in the [stackoverflow developer survey in 2019](https://insights.stackoverflow.com/survey/2019)

It is used by all kinds of developers since it has a rich ecosystem where you can download plugins to support mostly any language.

## First things first Keymaps

To have a better switching experience more easilly switch you can install one of the official
keymap plugins

- sublime keymaps

- atom keymaps

asdas

## Most valuable shortcuts

While there are a lot of shortcuts which you can use to navigate faster throughout the application
But some of them I find using all the time really good

- CMD + D // select line
  gif

- CMP + (SHIFT) + P // open quick run
  gif

- CMD + b // close panel
  gif

[link](https://link)

## Most valuable plugins

### REST Client

### Bracket Pair Colorizer

[link](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)

### Auto Close Tag

[link](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

### Auto Rename Tag

### editorconfig

### eslint

### import cost

### jest

### night owl

[]

### open in Browser

[link](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser)

### Visual Studio Intellicode

[link](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

### bookmarks

### browser preview

### color highlight

### css triggers

### dotenv

### quokka

for inline js evaluation

###

\*

- cmd + p for everything
- exclude search

```js
'exclude';
```

In conclusion I think that happens to a lot of people 🙈. But I want to try it again and start this blog by also talking about topics which fascinate me it. The last time I have started to create a website I have lost the interessed and passion about the my own site pretty fast.
I didn't have improve or develope it furthermore after I had finalized it.
Now I want to start again and share some knowledge and my opinions on diffrerent topics since I have recognized that when I write things down I feel that I can keep the knowledge much better.

<iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen />

<blockquote>
  <p>Let`s get things started.</p>
</blockquote>

Its actually a pretty shinny era when you are a web developer especially in the JavaScript scene.
There are a lot of things going on.
Use a fast base and embrace all the Open Source performance tools to not get slower

Before I can get started creating the blog I want to make sure to setup all the web dev performance tools which I think are helpful to measure different aspects of web performance. I want to make sure that the blog is accessible to everyone so it should be fast, bulletprof, seo optimized so people can actually find it...

### Setting the baseline

If you want all the things mentioned above you have to make sure that these things get tested regularly while developing your stuff. So what I want to do is to run different CI jobs which analyse my site after I deploy a change. I decided to create my blog based on gatsby since it uses react and some other fancy new tech which I have some more or less familarity with and as mentioned by several blog posts is super fast. So what I did first was to measure the starting point when creating a new project with gatsby-cli. I use lighthouse which is develpped by google to measure the baseline for gatsby.

- first install gatsby-cli

```js
npm install --global gatsby-cli //or
yarn add gatsby-cli --global
```

- create a new gatsby side

```js
gatsby new gatsby-site
```

- build and serve the production a production build (so that all the js, css files get bundled minified and served by a local server)

```js
gatsby build
gatsby serve
```

this will boot up a server which hosts your statical stuff. Now we want to measure how fast gatsby-js is at the begining of a project. Be aware this measurement uses a site provisioned by gatsby-cli v.1.1.48.

So when

## First Automate the build process

- travis deployment
- zeit urls

For each feature we want to make sure to run some steps to check the performance therefore we need to make sure that each pull request gets deployed to a different url to run tests on the url and make sure that all deployments have same settings. We use zeit now.sh to make immutable deployments which are deployed by travis CI

## First automate the performance testing

### defining your budget

performance budgets are an essential but under-appreciated part of product success and team health. Most partners we work with are not aware of the real-world operating environment and make inappropriate technology choices as a result. We set a budget in time of <= 5 seconds first-load Time-to-Interactive and <= 2s for subsequent loads. We constrain ourselves to a real-world baseline device + network configuration to measure progress. The default global baseline is a ~\$200 Android device on a 400Kbps link with a 400ms round-trip-time (“RTT”). This translates into a budget of ~130-170KB GZIP of critical-path resources, depending on composition — the more JS you include, the smaller the bundle must be.

https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/

### Lightweight tools

- [size-limits](https://github.com/ai/size-limit)

perfect for checking the whole bundle size

- [budlesize](https://github.com/siddharthkp/bundlesize)

perfect for checking each vendor (commons) bundle and async chunks

There are some easy integrated open-source-tools to check the size of your bundle for each deployment. This makes sure you dont deploy an oversized budget.

gatsbyjs
[lighthouse](https://github.com/ebidel/lighthouse-ci)
1.add lighthouse
First we want to automate the deployment process now makes it pretty easy to test all our changes on perf aspects before mergin pull requests. it generates a custom url for al deployments.

sitespeed io recently also used in gitlab integation
bundlesize

webpagetest
