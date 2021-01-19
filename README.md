# chat
--
This chat app is a React Native application built using Expo's gifted-chat and Google Firebase to create a chat app that runs in real-time, for Android and iOS.

## Getting Started
--

## Installing Expo
--
Before the app can run, the Expo CLI must be installed via the terminal with the following command:

`npm install expo-cli --global`

The Expo app will also need to be downloaded on the user's mobile device to allow the app to run using Expo.

### Expo Setup

The user must create an Expo account.  This can be done by navigating to the Expo sign-up page and following the steps outlined to create an account.  Once finished, the user should be able to log in to Expo on their mobile device and in their browser.  These credentials will also be used to log in to the Expo CLI during setup.

### iOS Simulator Setup

_User will need a product that runs on iOS in order to run this app in an iOS simulator._ On a device running iOS, such as a MacBook, the user must install Xcode.  Once installed, the user will open it and navigate to "Preferences".  Under "Preferences", the user will click on "Components" and install their choice of simulator from the list.  Once installed, the user will open the simulator, start their Expo project, and run the project.  Projects can be run either by typing "i" in the Expo CLI or clicking "Run on iOS simmulator" in Xcode.  Personally, I do not own a MacBook so I did not undertake these steps.

### Android Emulator Setup

To set up an emulator for Android, users must download and install Android Studio.  The user will be guided through an installation process once the download completes.  **Do not uncheck the option for "Android Virtual Device"** when it shows up during installation.  

Once installed, the user should open Android Studio and click the "Configure" option.  From there, navigate to Settings --> Appearance and Behavior --> System Setitngs --> Android SDK. Then click on "SDK Tools" and check whether or not "Android SDK Build Tools" are installed.  If not, click on the row labelled "Android SDK Build Tools" and download the latest version using the download symbol next to it.  

**MacOS and Linux users:**  If a user is on MacOS or Linux, they will need to add the location of the Android SDK to their PATH.  In order to accomplish this, copy the path (displayed in the text field at the top of their screens in Android Studio) and add the following to their "/.bashrc" file:

`export ANDROID_SDK=/Users/myuser/Library/Android/sdk`

_Be sure to replace 'myuser' and 'Library' with your information._

**MacOS users only:** Users with a MacOS will also need to add platform tools to their "/.bashrc" file. The line for this is as follows:

`export PATH=/Users/myuser/Library/Android/sdk/platform-tools:$PATH`

_Once again, make sure to insert your information into the path._

#### Installing and Running Android Emulator

At this point, the user will close out of the "Settings for New Projects" window and click "Configure" again.  This time, the user will select the "AVD Manager" option instead.  From there, click "Create Virtual Device" and select a device from the list.  Click "Next" to navigate to the "System Image" interface and click on the "Recommended" tab.  Finally, select an operating system.

Click the "Download" link next to whichever OS you choose, and Android Studio will download the image. _This may take a few minutes._ Once finished, in the next window, give your device a name and click "Finish".

Finally, return to the Virtual Device Manager and click on the "Play" icon to start the emulator. Then, navigate to the "Browser" tab of the project you are currently running in Expo and click "Run on Android device/emulator". Expo will begin installing the Expo client on the virtual device and then start the project.

## Firebase Setup
--
