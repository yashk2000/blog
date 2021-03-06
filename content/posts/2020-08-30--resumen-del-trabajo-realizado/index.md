---
title: "GSoC`20: Resumen del trabajo realizado"
tags: ["GSoC", "Mifos Initiative", "open source", "Vision PPI", "android", "computer vision"]
cover: header.png
author: Yash Khare
---

<div align="center">
    <a href="https://summerofcode.withgoogle.com/projects/#4868824286887936"><img src="https://user-images.githubusercontent.com/41234408/83450842-a4205c80-a473-11ea-9093-acaf28560d29.png" width="720" alt="google-summer-of-code"/></a>
</div>

# **Work Report**

**Project Abstract**

The Poverty Probability Index (PPI) is a poverty measurement tool for organizations and businesses with a mission to serve the poor. A PPI survey consists of 10 questions about a household’s characteristics using which asset ownership is scored to compute the likelihood that the household is living below the poverty line.

Leveraging Cloud Vision, a field officer would simply have to take a series of photos with their smartphone camera inside and outside of the house and then the Cloud Vision would be able to deduce based on the images the response to the 10 questions by detecting whether the objects mentioned in the survey are present in the household or not.

This year the project aims to do the following:

- Increase the **accuracy of the models** for object detection
- **Train more models** using the Google Cloud Vision platform to recognize more objects
- **Improve the current augmentation procedure** to include more techniques and hence build a better dataset
- **Integrate the AutoML API** with the android client
- **Implement auto-filling of the survey** based on the results received from the AutoML API when it detects objects in the images uploaded
- **Enhance the UI/UX** of the android client

**Mentors**: [@Nayan](https://github.com/Nayan), [@rahulg963](https://github.com/rahulg963)

**Changes in the project plans** 

There were a few changes in the project plans once we actually got to working on it. The main change was that instead of using Google Cloud Vision and the AutoML API, we instead decided to go ahead with the MLKit SDK released by Google which is completely offline and doesn't not require any internet connection. 

The cons of using Cloud Vision were:

❌ Google Cloud Vision is paid and would cost more than a 1000$ per month just to keep the model deployed 

❌ The initial training phase would also cost quite a bit of money 

❌ There would be some latency in getting results back since data has to be uploaded, analysed and returned. The speed of this process would entirely depend on the connection speed of the user 

The pros of going ahead with MLKit: 

✅ No payment needed at all 

✅ No latency as network connection isn’t needed

✅ No cost in training the model or re-training it

✅ Models can be trained using transfer learning with TensorFlow and then be converted into tflite models

Given these factors, we dropped the plan of using Google Cloud Vision and AutoML and instead decided to use MLKit.

**Milestones**

**1) Data Augmentation**

The first step of the project was to improve the data augmentation techniques. Since the it is difficult to find a dataset containing photos of the items needed in a household setting, it is important to increase the size of the dataset as much as possible by using augmentation techniques. 

I created a new python script which takes in a directory of images as the input and augments all data and stores the output in another directory. I also created a Jupyter Notebook which can be used to visualize all the augmentation techinques on a single image without running the python script. 

The augmentation techniques I added were: 

- Cropping
- Histogram Equalization
- Translation and Padding
- A variety of blurring techniques
- Saturation and Hue
- Salt and pepper noise
- Adaptive Gaussian thresholding
- Affine transformation
- Parallel Light Technique
- Spot Light Technique

These techniques can be viewed here: [https://github.com/openMF/ppi-vision/blob/master/DataCollection/ImageAugmentation.ipynb](https://github.com/openMF/ppi-vision/blob/master/DataCollection/ImageAugmentation.ipynb), done by [#115](https://github.com/openMF/ppi-vision/pull/115).

The data augmentation script can be found here: [https://github.com/openMF/ppi-vision/blob/master/DataCollection/GenerateImages.py](https://github.com/openMF/ppi-vision/blob/master/DataCollection/GenerateImages.py), done by [#113](https://github.com/openMF/ppi-vision/pull/113).

**2) Image Labelling using MLKit and Autofilling the survey**

The next step was to do the main image labelling part on an android device for which I have used MLKit. A user select multiple photos from their device, or click photos directly using a camera and use MLKit to detect all objects within the photo taken. A gif of this can be seen below: 

<div align="center">
    <img src="https://user-images.githubusercontent.com/41234408/90552152-0570e580-e1b0-11ea-933f-a9f355abeee9.gif" height="720" />
</div>

_For people intersted in knowing how object classification(the basis of image labelling works, I have also prepared a sample Jupyter Notebook that demonstrates the process over here: [https://github.com/openMF/ppi-vision/blob/master/ImageClassification/ImageClassificationExample.ipynb](https://github.com/openMF/ppi-vision/blob/master/ImageClassification/ImageClassificationExample.ipynb)._

<div align="center">
    <img src="https://user-images.githubusercontent.com/41234408/91044208-86a5fd80-e632-11ea-9a8a-7804d9af154b.png" height="720" />
</div>

The work for this part is split amongst the PRs [#148](https://github.com/openMF/ppi-vision/pull/148), [#151](https://github.com/openMF/ppi-vision/pull/151) and [#153](https://github.com/openMF/ppi-vision/pull/153). 

Once the objects within an image/images are detected, I used the data obtained to provide a user with suggestions as to which survery option would be most suitable. The system can detect whether a house has katcha or pakka outer walls, whether there is a television, a refridgerator, VCR, the number of telephones, etc. A screenshot of how this looks can be seen below:

| <img src="https://user-images.githubusercontent.com/41234408/91013076-c9e97780-e604-11ea-8c47-c965e401c1ab.png" width="250" />  | <img src="https://user-images.githubusercontent.com/41234408/91013158-e5548280-e604-11ea-8049-a3fc2a391af8.png" width="250" />   | <img src="https://user-images.githubusercontent.com/41234408/91013128-db328400-e604-11ea-8ba8-3d6603424b7b.png" width="250" />  |
|---|---|---|

**3) Improving the UI/UX of the android app**

The last major part of the project was to improve the UI/UX of the application. Since the app only needs to have 2 major screens, I shifted the layout from a navigation drawer based layout to a bottom navigation bar. Besides, I improved the display of the home search fragment, the user and clinet profiles, the image analysis section and the question display fragment. 

| <img src="https://user-images.githubusercontent.com/41234408/91012906-80992800-e604-11ea-960f-7956ed1c6b30.png" width="250" />  | <img src="https://user-images.githubusercontent.com/41234408/91012933-8ee74400-e604-11ea-8dca-4056855e25d5.png" width="250" />   | <img src="https://user-images.githubusercontent.com/41234408/91012972-a1fa1400-e604-11ea-92d2-5ba6ef186fa4.png" width="250" />  |
|---|---|---|
| Login Screen | Bottom Navigation + Enhanced user profile page | Bottom Navigation + Enhanced Search Fragment|
| <img src="https://user-images.githubusercontent.com/41234408/91013027-b2aa8a00-e604-11ea-8d46-41b63ecff38b.png" width="250" />  | <img src="https://user-images.githubusercontent.com/41234408/91013053-bccc8880-e604-11ea-8670-9fe584d11b61.png" width="250" />   | <img src="https://user-images.githubusercontent.com/41234408/91013076-c9e97780-e604-11ea-8c47-c965e401c1ab.png" width="250" />  |
| Client Profile Page | Image Analysis Activity | Questions Fragment |

**4) Documentation**

Earlier, there was hardly any documentation for the project. During my GSoC work, I also worked on documenting the application. I have done the following work on documenting the project: 

- I created the project wiki: https://github.com/openMF/ppi-vision/wiki

<center>

<div align="center">
    <img src="https://user-images.githubusercontent.com/41234408/91046071-72173480-e635-11ea-839d-e3872d295195.png" width="720"/>
</div>

</center>

- Created a proper readme to describe the project so anyone can see what the project is about: https://github.com/openMF/ppi-vision/blob/master/README.md

<center>

<div align="center">
    <img src="https://user-images.githubusercontent.com/41234408/91046285-c3272880-e635-11ea-9e41-f19bbae66776.png" width="720"/>
</div>

</center>

- A detailed explanation of the project on the Mifos Confluence: https://mifosforge.jira.com/wiki/spaces/MIFOSX/pages/977305715/Computer+Vision+Based+PPI+Tool

| <img src="https://user-images.githubusercontent.com/41234408/91046601-5a8c7b80-e636-11ea-93ec-b46e6f6405db.png" width="450" />  | <img src="https://user-images.githubusercontent.com/41234408/91046681-7ee85800-e636-11ea-86e9-8e36b5551b20.png" width="450" /> |
|---|---|
| <img src="https://user-images.githubusercontent.com/41234408/91046710-8c054700-e636-11ea-8c30-1f0f15a631a8.png" width="450" /> | <img src="https://user-images.githubusercontent.com/41234408/91046741-99223600-e636-11ea-9dcf-ced374bd9340.png" width="450" />  |

- Adding a Code of Conduct to the project: https://github.com/openMF/ppi-vision/blob/master/CODE_OF_CONDUCT.md

<div align="center">
    <img src="https://user-images.githubusercontent.com/41234408/91065050-a72f8100-e64d-11ea-80b1-efd6282e28a3.png" width="720" />
</div>

- Adding contribution guidelines to help new contributors get started with the project easily: https://github.com/openMF/ppi-vision/blob/master/CONTRIBUTING.md

<div align="center">
    <img src="https://user-images.githubusercontent.com/41234408/91065568-46ed0f00-e64e-11ea-9129-ed833722b79c.png" width="720" />
</div>

- Add issue templates to the project for bug fixes, feature requests and chores: https://github.com/openMF/ppi-vision/tree/master/.github/ISSUE_TEMPLATE

| <img src="https://user-images.githubusercontent.com/41234408/91065974-bc58df80-e64e-11ea-88eb-91aa3988babd.png" width="450" /> | <img src="https://user-images.githubusercontent.com/41234408/91066010-caa6fb80-e64e-11ea-8441-b338917b7b4e.png" width="450" />  |
|---|---|
| Options that show up on creating an issue | Bug Report Template |
| <img src="https://user-images.githubusercontent.com/41234408/91066056-d692bd80-e64e-11ea-9b45-669546b9b4a4.png" width="450" />  | <img src="https://user-images.githubusercontent.com/41234408/91066091-e4484300-e64e-11ea-9256-dc9cc0d310e1.png" width="450" />  |
| Chore Template | Feature Request Template |

- Added a pull request template so contributors can ensure they followed some guidelines and reducing the chance of a build failure: https://github.com/openMF/ppi-vision/blob/master/.github/PULL_REQUEST_TEMPLATE.md

| <img src="https://user-images.githubusercontent.com/41234408/91066568-7c462c80-e64f-11ea-882e-820ce90b9505.png" width="450" />  | <img src="https://user-images.githubusercontent.com/41234408/91066661-9b44be80-e64f-11ea-9623-bdbb4b69d5aa.png" width="450" />  |
|---|---|
| PR Template in markdown  | PR Template when filled after contributor satisfies the conditions  |

**5) Continuous Integration(CI)**

There was no CI in the project earlier. I added CI using GitHub actions for both the python scripts as well as the android app. Now if any contributor sends a pull request, the changes can be built using GitHub actions and if any code is broken, the reviewers can see it right there. 

| <img src="https://user-images.githubusercontent.com/41234408/91063909-2e7bf500-e64c-11ea-8406-54f296d6fc76.png" width="250" />  | <img src="https://user-images.githubusercontent.com/41234408/91063958-3d62a780-e64c-11ea-9bee-4ce2ab155c6b.png" width="250" />   | <img src="https://user-images.githubusercontent.com/41234408/91063996-49e70000-e64c-11ea-90d4-b815028cff4b.png" width="250" />  |
|---|---|---|
| Android Workflow | Python Workflow | GitHub Actions Results |
| <img src="https://user-images.githubusercontent.com/41234408/91064027-58cdb280-e64c-11ea-96ea-c683139ae5db.png" width="250" />  | <img src="https://user-images.githubusercontent.com/41234408/91064058-6420de00-e64c-11ea-824b-5fbc90f7de22.png" width="250" />   | <img src="https://user-images.githubusercontent.com/41234408/91064111-7733ae00-e64c-11ea-9feb-83688e8b7523.png" width="250" />  |
| Python CI Results | Android CI Results | Examples of a workflow failing on a PR |

**6) Other miscellaneous work done**

- Helped review merge all existing prs in the project as well as fix some minor bugs.
- Refactored the login of the application using Retrofit and RXJava such that it doesn't have a dependency on non-maintained libraries like khttp. 
- Added the feature to save the credentails once a user logs in and also a feature to log out. Earlier no credentials were saved and a user had to log in everytime the app was opened. 
- Reformat code properly using the spotless plugin.
- Added an about section to the application so users can see the developers, the GitHub repo, license and social media pages of Mifos. 

<div align="center">
    <img src="https://user-images.githubusercontent.com/41234408/91045504-9cb4bd80-e634-11ea-8024-219da8af56bc.jpg" height="720" />
</div>

**7) Link to APK**

- Link to APK: [https://drive.google.com/file/d/1sZkow9zy7Hs6Bpc2GCsrpO6smVVQ6xH_/view](https://drive.google.com/file/d/1sZkow9zy7Hs6Bpc2GCsrpO6smVVQ6xH_/view)
- Link to live preview on appetize.io: https://appetize.io/app/9m1cruam36xd6k205p7qf4b3d4?device=nexus5&scale=75&orientation=portrait&osVersion=8.1

**Pull Requests & Issues**

**Commits/PRs Made**

- [#196](https://github.com/openMF/ppi-vision/pull/196): Show dialog to user when logging out **`feat`**
- [#194](https://github.com/openMF/ppi-vision/pull/194): Change profile icon **`fix`**
- [#192](https://github.com/openMF/ppi-vision/pull/192): Change color of options menu **`fix`**
- [#190](https://github.com/openMF/ppi-vision/pull/190): Improve code quality **`chore`**
- [#188](https://github.com/openMF/ppi-vision/pull/188): Rename variables to follow the general convention **`chore`**
- [#187](https://github.com/openMF/ppi-vision/pull/187): Make variables and methods private where ever needed **`chore`**
- [#186](https://github.com/openMF/ppi-vision/pull/186): Add ripple effect to buttons **`feat`**
- [#185](https://github.com/openMF/ppi-vision/pull/185): Add action bar to computer vision activity **`fix`**
- [#183](https://github.com/openMF/ppi-vision/pull/183): Show user a message if analyse images is pressed without any images selected **`fix`**
- [#182](https://github.com/openMF/ppi-vision/pull/182): Fix crash in clicking on a client **`fix`**
- [#181](https://github.com/openMF/ppi-vision/pull/181): Update README.md **`chore`**
- [#179](https://github.com/openMF/ppi-vision/pull/179): Add issue annd PR templates **`chore`**
- [#177](https://github.com/openMF/ppi-vision/pull/177): Add CONTRIBUTING.md **`chore`**
- [#175](https://github.com/openMF/ppi-vision/pull/175): Add a code of conduct to the project **`chore`**
- [#173](https://github.com/openMF/ppi-vision/pull/173): Add about screen **`feat`**
- [#172](https://github.com/openMF/ppi-vision/pull/172): Codestyle fix using spotless **`chore`**
- [#171](https://github.com/openMF/ppi-vision/pull/171): Improve UI of computer vision activity **`feat`**
- [#168](https://github.com/openMF/ppi-vision/pull/168): Update UI of question fragment **`feat`**
- [#166](https://github.com/openMF/ppi-vision/pull/166): Enhance UI of user and client profile sections **`feat`**
- [#165](https://github.com/openMF/ppi-vision/pull/165): Enhance UI of home page **`feat`**
- [#162](https://github.com/openMF/ppi-vision/pull/162): Shift to a bottom navigation layout **`feat`**
- [#157](https://github.com/openMF/ppi-vision/pull/157): Add feature to autofill the survey **`feat`**
- [#153](https://github.com/openMF/ppi-vision/pull/153): Remove google services dependencies **`chore`**
- [#151](https://github.com/openMF/ppi-vision/pull/151): Enhance object detection system **`feat`**
- [#148](https://github.com/openMF/ppi-vision/pull/148): Add MLKit Object Detection **`feat`**
- [#145](https://github.com/openMF/ppi-vision/pull/145): Add toolbar for ComputerVision activity **`fix`**
- [#137](https://github.com/openMF/ppi-vision/pull/137): Add an example image classification notebook **`feat`**
- [#135](https://github.com/openMF/ppi-vision/pull/135): Clean up app and remove unused resources **`chore`**
- [#133](https://github.com/openMF/ppi-vision/pull/133): Add option to logout **`feat`**
- [#131](https://github.com/openMF/ppi-vision/pull/131): Refactor login **`feat`**
- [#125](https://github.com/openMF/ppi-vision/pull/125): Add hindi translation **`feat`**
- [#117](https://github.com/openMF/ppi-vision/pull/117): CI for python scripts **`feat`**
- [89ad68e](https://github.com/openMF/ppi-vision/commit/89ad68e1323ee9524423072af5f5a7b29e9c5b77): Add CI using GitHub Actions **`feat`** 
- [#115](https://github.com/openMF/ppi-vision/pull/115): Enhance the augmentation notebook **`feat`** 
- [#113](https://github.com/openMF/ppi-vision/pull/113): Create python script for augmentation **`feat`** 
- [#110](https://github.com/openMF/ppi-vision/pull/110): Fix the needed lint issues **`chore`**
- [#107](https://github.com/openMF/ppi-vision/pull/107): Add a new dependency for http requests **`feat`** 
- [#105](https://github.com/openMF/ppi-vision/pull/105): Fix method of obtaining the authKey **`fix`**
- [#103](https://github.com/openMF/ppi-vision/pull/103): Update app dependencies and make other needed changes **`chore`**
- [#101](https://github.com/openMF/ppi-vision/pull/101): Migrate app dependencies to androidX **`chore`**
- [#99](https://github.com/openMF/ppi-vision/pull/99): Update gradle and kotlin version **`chore`**
- [#98](https://github.com/openMF/ppi-vision/pull/98): Update API endpoint **`chore`**
- [#97](https://github.com/openMF/ppi-vision/pull/97): Add parallel and spot light augmentation techniques **`feat`** 
- [#96](https://github.com/openMF/ppi-vision/pull/96): Add salt and pepper noise, adaptive Gaussian thresholding and affine transformation **`feat`** 
- [#95](https://github.com/openMF/ppi-vision/pull/95): Add saturation and hue techniques to augment images **`feat`** 
- [#94](https://github.com/openMF/ppi-vision/pull/94): Fix unchecked nullability **`chore`**
- [#93](https://github.com/openMF/ppi-vision/pull/93): Fix idiomatic errors **`chore`**
- [#92](https://github.com/openMF/ppi-vision/pull/92): Disable search button when search query is empty **`fix`**
- [#91](https://github.com/openMF/ppi-vision/pull/91): Changed responsiveness of Login button based on emptiness of text fields **`fix`**
- [#90](https://github.com/openMF/ppi-vision/pull/90): Added augmentation techniques for blurring **`feat`** 
- [#88](https://github.com/openMF/ppi-vision/pull/88): Enhance UI of client profile page **`feat`** 
- [#87](https://github.com/openMF/ppi-vision/pull/87): Enhance UI of search activity **`feat`**
- [#86](https://github.com/openMF/ppi-vision/pull/86): Set tool bar title for different activities **`feat`**
- [#85](https://github.com/openMF/ppi-vision/pull/85): Status bar color **`fix`**
- [#81](https://github.com/openMF/ppi-vision/pull/81): Enhance user profile page **`feat`**
- [#80](https://github.com/openMF/ppi-vision/pull/80): Add translation and padding for augmentation **`feat`**
- [#79](https://github.com/openMF/ppi-vision/pull/79): Add option to share the app easily **`feat`**
- [#76](https://github.com/openMF/ppi-vision/pull/76): Clicking on profile opens profile page **`feat`**
- [#75](https://github.com/openMF/ppi-vision/pull/75): Keyboard hidden when nav drawer is opened **`fix`**
- [#72](https://github.com/openMF/ppi-vision/pull/72): Improve UI of search activity **`feat`**
- [#71](https://github.com/openMF/ppi-vision/pull/71): Added internet connectivity check in the login screen **`feat`**
- [#70](https://github.com/openMF/ppi-vision/pull/70): Added check for internet connectivity in search button **`feat`**
- [#66](https://github.com/openMF/ppi-vision/pull/66): Keyboard goes down on pressing search if query is suitable **`fix`**
- [#65](https://github.com/openMF/ppi-vision/pull/65): Add histogram equalization techiques for augmentation **`feat`**
- [#64](https://github.com/openMF/ppi-vision/pull/64): Deleted activity_user_profile2 **`chore`**
- [#31](https://github.com/openMF/ppi-vision/pull/31): Add bluring techniques for image augmentation **`feat`**
- [#28](https://github.com/openMF/ppi-vision/pull/28): Add cropping technique for image augmentation **`feat`**
- [#26](https://github.com/openMF/ppi-vision/pull/26): Fix typo in password length toast **`fix`**
- [#24](https://github.com/openMF/ppi-vision/pull/24): Make username a single-line text field, press next on keyboard to directly enter password field **`fix`**
- [#22](https://github.com/openMF/ppi-vision/pull/22): Add toggle for password visibility **`feat`**

**Issues**

- [#195](https://github.com/openMF/ppi-vision/issues/195): Display a dialog to user when logging out **`feat`**
- [#193](https://github.com/openMF/ppi-vision/issues/193): Change profile icon in bottom nav bar **`fix`**
- [#191](https://github.com/openMF/ppi-vision/issues/191): Color of options in action bar **`fix`**
- [#189](https://github.com/openMF/ppi-vision/issues/189): Improve code quality **`chore`**
- [#184](https://github.com/openMF/ppi-vision/issues/184): Add an action bar in computer vision activity **`fix`**
- [#180](https://github.com/openMF/ppi-vision/issues/180): Update README.md **`chore`**
- [#178](https://github.com/openMF/ppi-vision/issues/178): Add issue and PR templates to the project **`chore`**
- [#176](https://github.com/openMF/ppi-vision/issues/176): Add a contributions.md to the project **`chore`**
- [#174](https://github.com/openMF/ppi-vision/issues/174): Add a code of conduct for the project **`chore`**
- [#170](https://github.com/openMF/ppi-vision/issues/170): Improve UI of computer vision activity **`feat`**
- [#169](https://github.com/openMF/ppi-vision/issues/169): Enhance UI of the question fragment **`feat`**
- [#167](https://github.com/openMF/ppi-vision/issues/167): Revamp UI of user and client profile fragments **`feat`**
- [#164](https://github.com/openMF/ppi-vision/issues/164): Enhance UI of home page **`feat`**
- [#163](https://github.com/openMF/ppi-vision/issues/163): Shift the app to bottom navigation layout **`feat`**
- [#152](https://github.com/openMF/ppi-vision/issues/152): Remove dependency on google services **`chore`**
- [#150](https://github.com/openMF/ppi-vision/issues/150): Enhance the object detection system **`feat`**
- [#147](https://github.com/openMF/ppi-vision/issues/147): Auto-fill survey **`feat`**
- [#146](https://github.com/openMF/ppi-vision/issues/146): Add MLKit for object detection **`feat`**
- [#144](https://github.com/openMF/ppi-vision/issues/144): Toolbar in NewPPISurveyActivity not visible **`fix`**
- [#136](https://github.com/openMF/ppi-vision/issues/136): Add an example notebook for image classification **`feat`**
- [#134](https://github.com/openMF/ppi-vision/issues/134): Remove unused resources from the app **`chore`**
- [#132](https://github.com/openMF/ppi-vision/issues/132): Add an option for logging out **`feat`**
- [#130](https://github.com/openMF/ppi-vision/issues/130): Refactor the login of the application **`feat`**
- [#124](https://github.com/openMF/ppi-vision/issues/124): Add hindi translation **`feat`**
- [#116](https://github.com/openMF/ppi-vision/issues/116): Setup CI for the python script **`feat`**
- [#114](https://github.com/openMF/ppi-vision/issues/114): Modify the image augmentation notebook **`feat`**
- [#112](https://github.com/openMF/ppi-vision/issues/112): Create a python script for doing image augmentation **`feat`**
- [#109](https://github.com/openMF/ppi-vision/issues/109): Fix lint issues in the application **`chore`**
- [#108](https://github.com/openMF/ppi-vision/issues/108): Add GitHub Actions workflow for CI **`feat`**
- [#106](https://github.com/openMF/ppi-vision/issues/106): Replace the current khttp dependency **`feat`**
- [#104](https://github.com/openMF/ppi-vision/issues/104): Fix the method of obtaining the authKey **`fix`**
- [#102](https://github.com/openMF/ppi-vision/issues/102): Update app dependencies **`chore`**
- [#100](https://github.com/openMF/ppi-vision/issues/100): Migrate app dependencies to androidX **`chore`**
- [#84](https://github.com/openMF/ppi-vision/issues/84): Improve UI of the search page  **`feat`**
- [#83](https://github.com/openMF/ppi-vision/issues/83): Set title for activities **`feat`**
- [#82](https://github.com/openMF/ppi-vision/issues/82): Set a color for the app status bar **`fix`** 
- [#69](https://github.com/openMF/ppi-vision/issues/69): Improve search option edit text **`feat`**
- [#63](https://github.com/openMF/ppi-vision/issues/63): Add an option to share the app **`feat`**
- [#54](https://github.com/openMF/ppi-vision/issues/54): Add a notification of no internet if internet connection is missing when user presses search **`feat`**
- [#53](https://github.com/openMF/ppi-vision/issues/53): Keyboard should go down when the search button is pressed **`fix`** 
- [#52](https://github.com/openMF/ppi-vision/issues/52): Codestyle fixing **`chore`**
- [#51](https://github.com/openMF/ppi-vision/issues/51): About Screen for the app **`feat`**
- [#50](https://github.com/openMF/ppi-vision/issues/50): Fix naming convention for variables **`chore`**
- [#49](https://github.com/openMF/ppi-vision/issues/49): Make variables private **`chore`**
- [#47](https://github.com/openMF/ppi-vision/issues/47): No check for internet connection in login screen **`feat`**
- [#45](https://github.com/openMF/ppi-vision/issues/45): Keyboard does not go down when the nav drawer is opened **`fix`** 
- [#44](https://github.com/openMF/ppi-vision/issues/44): Clicking on the users photo in nav drawer should also open the profile page **`feat`**
- [#43](https://github.com/openMF/ppi-vision/issues/43): Add translation and padding augmentation techniques **`feat`**
- [#38](https://github.com/openMF/ppi-vision/issues/38): Enhance UI of user profile page **`feat`**
- [#36](https://github.com/openMF/ppi-vision/issues/36): Enhance UI of client profile page **`feat`**
- [#35](https://github.com/openMF/ppi-vision/issues/35): Delete unused activity_user_profile2.xml **`chore`**
- [#34](https://github.com/openMF/ppi-vision/issues/34): Add histogram equalization techniques for image augmentation **`feat`**
- [#30](https://github.com/openMF/ppi-vision/issues/30): Apply blurring techniques for augmentation **`feat`**
- [#27](https://github.com/openMF/ppi-vision/issues/27): Enhance the cropping technique for data augmentation **`feat`**
- [#25](https://github.com/openMF/ppi-vision/issues/25): Typo in toast message **`fix`** 
- [#23](https://github.com/openMF/ppi-vision/issues/23): Multi-line username field **`fix`** 

**Tags**:
- feature : **`feat`**
- bug fix : **`fix`** 
- chore related to maintainance, documentation, etc - **`chore`** 
  
**Updates**

### Community Bonding (May 4, 2020 - June 1, 2020)

- Meeting 1: [Notes](https://mifosforge.jira.com/wiki/spaces/MIFOSX/pages/1456341001/%5BGSoC%2720%5D+13-05-2020-meeting-1)
- Blog Post: [GSoC'20: Período de Unión Comunitaria](https://yashk2000.github.io/blog/gsoc20-community-bonding)

### Coding Period 1 (June 1, 2020 - July 3, 2020)

- Meeting 2: [Notes](https://mifosforge.jira.com/wiki/spaces/MIFOSX/pages/1456603143/%5BGSoC%2720%5D+01-06-2020-meeting-2)
- Meeting 3: [Notes](https://mifosforge.jira.com/wiki/spaces/MIFOSX/pages/1456603150/%5BGSoC%2720%5D+03-06-2020-meeting-3)
- Meeting 4: [Notes](https://mifosforge.jira.com/wiki/spaces/MIFOSX/pages/1460174936/%5BGSoC%2720%5D+07-06-2020-meeting-4)
- Meeting 5: [Notes](https://mifosforge.jira.com/wiki/spaces/MIFOSX/pages/1469612115/%5BGSoC%2720%5D+09-06-2020-meeting-5)
- Meeting 6: [Notes](https://mifosforge.jira.com/wiki/spaces/MIFOSX/pages/1489174579/%5BGSoC%2720%5D+15-06-2020-meeting-6)
- Meeting 7: [Notes](https://mifosforge.jira.com/wiki/spaces/MIFOSX/pages/1507983561/%5BGSoC%2720%5D+23-06-2020-meeting-7)
- Blog Post: [GSoC'20: Período de codificación uno](https://yashk2000.github.io/blog/gsoc20-coding-period-one)

### Coding Period 2 (July 3, 2020 to July 27, 2020)

- Meeting 8: [Notes](https://mifosforge.jira.com/wiki/spaces/MIFOSX/pages/1554513921/%5BGSoC%2720%5D+06-07-2020-meeting-8)
- Meeting 9: [Notes](https://mifosforge.jira.com/wiki/spaces/MIFOSX/pages/1699807235/GSoC+20+18-07-2020-meeting-9)
- Blog Post: [GSoC'20: Período de codificación dos](https://yashk2000.github.io/blog/gsoc20-coding-period-2)

**Statistics**

- Total PRs sent: **69**
- Total issues opened: **57**
- Total commits: **78**
- Total lines of code added: **15,269**
- Total lines of code deleted: **6,775**

**Links**

- [Confluence Page](https://mifosforge.jira.com/wiki/spaces/MIFOSX/pages/977305715/Computer+Vision+Based+PPI+Tool)
- [Project link on GSoC website](https://summerofcode.withgoogle.com/projects/#4868824286887936)
- [Link to the project on GitHub](https://github.com/openMF/ppi-vision)