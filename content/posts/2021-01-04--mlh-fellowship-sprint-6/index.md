---
title: "MLH Fellowship(Fall 2020): Sprint 6"
tags: ["Major League Hacking: Fellowship", "computer vision", "flutter"]
cover: featured.jpeg
author: Yash Khare
---

<img src="https://socialify.git.ci/yashk2000/HealthMonitor/image?description=1&descriptionEditable=Remote%20testing%20made%20easy&font=Raleway&forks=1&language=1&pattern=Charlie%20Brown&stargazers=1&theme=Light" width="720" />

# Health Monitor
An app built to allow people to carry out preliminary tests at the comfort of their homes using their mobile/laptop.

## 👨‍🏭  Who are we?
This project was built by [Rachit Gupta](https://github.com/dotrachit), [Sakshi Rambhia](https://github.com/Sakshi16), [Rohan Rout](https://github.com/routrohan) and [Yash Khare](https://github.com/yashk2000).

## 💻 What did we use?
The webapp has been built using [ReactJS](https://reactjs.org/) and styled with [React Bootstrap](https://react-bootstrap.github.io/) and the mobile app

## 🛠️ Setting up the Project
### For setting up the webapp:
1) Clone the repository
- `git clone https://github.com/yashk2000/HealthMonitor.git`

2) Move into the project root
- `cd HealthMonitor`

3) Move into the frontend folder
- `cd website/frontend`

4) Install the dependencies
- `npm install`

5) Start the local server
- `npm start`

### Setting up the mobile app:

The mobile app is in progress, and is being built using flutter. 

First enter the `healthmonitor_mobile` folder. 
- `cd healthmonitor_mobile`

To build it, you need to have Flutter installed. Refer to the official docs provided by Flutter over [here](https://flutter.dev/docs/get-started/install) and install it for your operating system. 

Once you're done, you can open up the application in your preferred editor. The best way to go would be to use Android Studio, but you can use any other editor such as VS Code as well. 

The next step would be to enter the application directory and run the following command to fetch the dependencies. 

```bash
flutter pub get
```

If you're using Android Studio, you can directly use the green play button to install the app on your device or an emulator. Else, you need to run the following command: 

```bash
flutter run
```

This will run the application either on a physical device you'll have connected to your system or on an emulator that has been set up. 

Other useful links: 

- [Download Android Studio](https://developer.android.com/studio)
- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)
- For help getting started with Flutter, view the Flutter [online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

## What did we learn?

We learned a lot about implementing research papers and deploying it on the web. We worked on the backend this much for the first time, especially for Yash, Sakshi and Rachit. Rohan learned how to extract the finger from an image using just image processing techniques. 

## 🔜 What's next?

- Improve the accuracy of the finger extraction
- Improve the layout of the web app
- Add a chatbot to answer basic medical queries
- Add a separate login for doctors as well to make this a complete remote health monitoring solution 

## Link to the project: 

- [GitHub](https://github.com/yashk2000/HealthMonitor)