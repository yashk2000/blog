---
title: "GSoC`20: Período de codificación tres"
tags: ["GSoC", "Mifos Initiative", "open source", "Vision PPI", "android", "computer vision"]
cover: header.png
author: Yash Khare
---

<center>

<img src="featured.png" width="720" />

</center>

This is the last blog post of GSoC'20, marking the end of the last coding phase 🎊

During the third phase, I mainly worked on implementing the feature to automatically display what survey option should be filled and imporving the UI/UX of the application. 

As I mentioned in my previos blog, during the 2nd phase, I mainly worked on the image labelling part. Once the objects within an image/images are detected,
I used the data obtained to provide a user with suggestions as to which survery option would be most suitable. The system can detect whether a house has katcha or 
pakka outer walls, whether there is a television, a refridgerator, VCR, the number of telephones, etc. A collectio of screenshots of how this looks can be seen below:

| <img src="https://user-images.githubusercontent.com/41234408/91013076-c9e97780-e604-11ea-8c47-c965e401c1ab.png" width="250" />  | <img src="https://user-images.githubusercontent.com/41234408/91013158-e5548280-e604-11ea-8049-a3fc2a391af8.png" width="250" />   | <img src="https://user-images.githubusercontent.com/41234408/91013128-db328400-e604-11ea-8ba8-3d6603424b7b.png" width="250" />  |
|---|---|---|

After this, I mainly focused on improving the UI/UX of the application. I shifted the application layout from a navigation drawer based layout to a bottom navigation
bar based layout. I also improved the layout of all other activites so that they look better. Screenshots showing those changes can be seen below: 

| <img src="https://user-images.githubusercontent.com/41234408/91012906-80992800-e604-11ea-960f-7956ed1c6b30.png" width="250" />  | <img src="https://user-images.githubusercontent.com/41234408/91012933-8ee74400-e604-11ea-8dca-4056855e25d5.png" width="250" />   | <img src="https://user-images.githubusercontent.com/41234408/91012972-a1fa1400-e604-11ea-92d2-5ba6ef186fa4.png" width="250" />  |
|---|---|---|
| Login Screen | Bottom Navigation + Enhanced user profile page | Bottom Navigation + Enhanced Search Fragment|
| <img src="https://user-images.githubusercontent.com/41234408/91013027-b2aa8a00-e604-11ea-8d46-41b63ecff38b.png" width="250" />  | <img src="https://user-images.githubusercontent.com/41234408/91013053-bccc8880-e604-11ea-8670-9fe584d11b61.png" width="250" />   | <img src="https://user-images.githubusercontent.com/41234408/91013076-c9e97780-e604-11ea-8c47-c965e401c1ab.png" width="250" />  |
| Client Profile Page | Image Analysis Activity | Questions Fragment |

As the last part of my project, I worked on the some of the documentation part of the project. This work includes: 

- Creating the project readme: https://github.com/openMF/ppi-vision/blob/master/README.md

- Adding a Code of Conduct to the project: https://github.com/openMF/ppi-vision/blob/master/CODE_OF_CONDUCT.md

- Adding contribution guidelines to help new contributors get started with the project easily: https://github.com/openMF/ppi-vision/blob/master/CONTRIBUTING.md

- Add issue templates to the project for bug fixes, feature requests and chores: https://github.com/openMF/ppi-vision/tree/master/.github/ISSUE_TEMPLATE

- Added a pull request template so contributors can ensure they followed some guidelines and reducing the chance of a build failure: https://github.com/openMF/ppi-vision/blob/master/.github/PULL_REQUEST_TEMPLATE.md

