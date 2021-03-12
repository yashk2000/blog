---
title: Introduction to Git
tags: ["version control", "git", "github"]
cover: featured-image.png
author: Yash Khare
---

<center>

<img src="featured-image.png" />

</center>

The first question is what exactly is Git ?

Git is a free, open source distributed version control system tool designed to handle any project efficiently. Linus Torvalds created Git in 2005 to develop Linux Kernel. Git is used to manage a project, or a set of files, as they change over time. It is used primarily for source code management in software development, but it can be used to keep track of changes in any set of files.

Another is question is what is the difference between Git and Github. Git is the tool used to manage your source code and Github is the service for projects that use Git.

**Installing Git on ubuntu:**

```bash
sudo apt install git
```

**Getting started:**

Now with Git on your system, you’ll want to do a few things to customise your Git environment. Git comes with a command: `git config`. It helps you control how Git looks and operates. The first step is setting up your name and email.

```bash
git config --global user.name "USERNAME"
git config --global user.email "EMAIL"
```

`--global` is used so that Git will use that information for anything you do on the system. If you want, you can later change these settings in the same way by using the same commands.

You can view all your settings by:

```bash
git config --list
```

You can also check what Git thinks a specific key’s value is by typing: `git config <key>`

```bash
git config user.name
```

Now your Git is set up and you can move on to learning some basic commands.

The first you'll want to do is initialise a repository. First enter the directory in which you want the repository to be initialised in. This can be done by using the cd command. For example if you want the repository to be in the folder Documents inside a sub-folder called getting_started, in the command prompt do:

```bash
cd Documents/getting_started
```

Then you can initialise a new repository by typing:

```bash
git init
```

You can also clone an existing repository. You can either clone an existing local repository or a repository on a remote server. The command for this is git clone.

```bash
git clone <url>
```

After creating a repository you can now add files to it. This is done using git add. To add a new file to the repository type :

```bash
git add <filename>
```

If you make multiple changes or add multiple files, you can stage the changes by typing:

```bash
git add *
```

After making changes you have to save them. Saving changes in Git is called making a commit. This is done using the command git commit. In the command prompt type:

```bash
git commit 
```

This opens a text editor in which some comments are already present. You can erase these comments and write your own comments.

You can also do this by typing:

```bash
git commit -m "Commit message"
```

You have now saved the changes to your local repository. To make the same changes to your remote repository (to push these changes) in the command prompt type:

```bash
git push origin master
```

You can change master to whichever branch you want to save the changes to.

If you make a change  directly in your remote repository, you pull these changes into your local repository by typing in the correct repository location:

```bash
git pull
```

This will update your local repository.

Finally to see what the history changes you have made to repository, to check your previous commits, you can type:

```bash
git log
```

So these are some of basic and most useful Git commands. Good luck for your coding!!