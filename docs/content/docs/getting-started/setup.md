+++
title = "Setting up"

sort_by = "weight"
weight = 5
template = "docs/page.html"

[extra]
toc = true
top = false
+++


## Requirements

You'll need a recent:
 - [Rustup](https://rustup.rs/) setup for Rust `rustup update && rustup show`
 - [flutter](https://docs.flutter.dev/get-started/install)
    - extract download into /Users/<USERNAME>/development/
    - update ~/.bash_profile with `export PATH="$PATH:/Users/<USERNAME>/development/flutter/bin"`
    - run `source ~/.bash_profile`
    - run `flutter doctor -v`
 - Android NDK / XCode setup for the target - and device or simulator set up
    - Android Studio - https://flutter.dev/docs/get-started/install/macos#android-setup
    - verify that downloaded .dmg file matches the checksum on the website `shasum -a 256 android-studio-2021.2.1.15-mac.dmg`
    - run Android Studio to install
        - Android SDK to location: /Users/luke/Library/Android/sdk
        - JDK to location: /Applications/Android Studio.app/Contents/jre/Contents/Home
        - default latest API version 32 (but we need older version 22 for Effektio at the moment)
        - update Flutter with Android SDK location `flutter config --android-studio-dir /Users/luke/Library/Android/sdk`. Restart VSCode
        - Troubleshooting Issue 1: There was no 'Contents' folder, so when running `flutter doctor` it output `Android Studio not found at /Users/luke/Library/Android/sdk/Contents`, however the 'Contents' folder existed in /Applications/Android\ Studio.app/Contents.
            - Solution: Fixed by creating a symobolic link with `ln -s /Applications/Android\ Studio.app/Contents /Users/luke/Library/Android/sdk`
        - Troubleshooting Issue 2: Running `flutter doctor --android-licenses` returned output `Android sdkmanager not found. Update to the latest Android SDK and ensure that the cmdline-tools are installed to resolve this.`, and `flutter doctor` returned `cmdline-tools component is missing`, even though the latest Android SDK was installed.
            - Solution: See https://www.fluttercampus.com/guide/201/android-sdkmanager-not-found-error-flutter/.
                - Step 1: Open Android Studio, on the "Welcome to Android Studio" page, click "Projects" > "More Actions" > "SDK Manager", which opens "Preferences" > "Appearance & Behavior" > "System Settings" > "Android SDK" > "SDK Platforms".
                    - Add checkbox next to "Android 5.1 (Lollipop) API Level 22", then click "Apply" to install that older version
                - Step 2: Go to "Preferences" > "Appearance & Behavior" > "System Settings" > "Android SDK" > "SDK Tools", and click "Show Package Details"
                    - Add checkbox next to "Android SDK Build-Tools 33-rc4" > "28.0.3"
                        - Note: in the Makefile.toml, it has `ANDROID_PLATFORM_VERSION = "28"`, hence why installing this version "28" too
                    - Add checkbox next to "Android SDK Build-Tools 33-rc4" > "22.0.1"
                    - Add checkbox next to "NDK (Side by side)" > "22.0.7026061"
                    - Add checkbox next to "Android SDK Command-line Tools (latest)" > "Android SDK Command-line Tools (latest)" (7.0)
                    - Add checkbox next to "Intel x86 Emulator Accelerator (HAXM installer)"
                    - Note: After selectin the above, then click "Apply", accept the license conditions and wait for them to install.
        - Troubleshooting Issue 3: Running `flutter doctor` returns `Unable to find any JVMs matching version "1.8".` and `No Java runtime present`
            - Solution: Run `java --version`, click "More Info" to be redirected to link https://www.oracle.com/technetwork/java/javase/downloads, then get the 1.8 version by clicking the "Java 18" tab, then download the "x64 DMG Installer" from https://www.oracle.com/java/technologies/downloads/#jdk18-mac
                - Fix the error when running `flutter doctor` again that says `Some Android licenses not accepted.  To resolve this, run: flutter doctor --android-licenses` but running `flutter doctor --android-licenses` to accept all the Android licenses
                - Fix `Unable to find any JVMs matching version "1.8".` error when running `flutter doctor` by running `export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-18.0.1.1.jdk/Contents/Home`, add that line to the end of `~/.bash_profile
    - Add Emulator Device: Open Android Studio, on the "Welcome to Android Studio" page, click "Projects" > "More Actions" > "AVD Device", then choose one like Nexus 5 with API Level 22 Lollipop
    - Note: Run `sdkmanager` by running `/Users/luke/Library/Android/sdk/cmdline-tools/latest/bin/sdkmanager`
 -
_Note_ on the Android NDK. [Because of a change with the paths, you need to have NDKv22 install](https://github.com/bbqsrc/cargo-ndk/issues/38) (v23 and above don't work at the moment).
 - VSCode - add Flutter SDK path: /Users/<USERNAME>/development/flutter

## Setup

You need `cargo make` for managing and building the native core artefacts. Install via
`cargo install cargo-make`

Then you run the init once in the root of the repository:

`cargo make init`

- Note: When running this, I got warnings and error as shown below:
    ```bash
    [cargo-make] WARN - Found unknown key: tasks.?.build.mac.?.description in file: ./Makefile.toml
    [cargo-make] WARN - Found unknown key: tasks.?.build.mac.?.category in file: ./Makefile.toml
    ...
    /Users/luke/code/github/ltfschoen/effektio
    [cargo-make][1] WARN - Found unknown key: tasks.?.build.mac.?.description in file: /Users/luke/code/github/ltfschoen/effektio/Makefile.toml
    [cargo-make][1] WARN - Found unknown key: tasks.?.build.mac.?.category in file: /Users/luke/code/github/ltfschoen/effektio/Makefile.toml
    ...
    [cargo-make][1] INFO - Running Task: flutter-get
    [cargo-make][1] ERROR - Error while running duckscript: Source: Unknown Line: 3 - Command: flutter not found.
    [cargo-make][1] WARN - Build Failed.
    [cargo-make] ERROR - Error while running duckscript: Source: Unknown Line: 4 - Error while executing command, exit code: 1
    [cargo-make] WARN - Build Failed.
    ```
    - This was because `flutter` binary wasn't in the PATH. 
        - Tried to fix by adding symbolic links so the task `tasks.flutter-get` in the Makefile.toml, but that didn't work
            ```
            export FLUTTER_BINARY_PATH="/Users/luke/development/flutter/bin/flutter"
            export CARGO_MAKE_WORKSPACE_WORKING_DIRECTORY="/Users/luke/code/github/ltfschoen/effektio"
            export TARGET_PLUGIN="effektio_flutter_sdk"
            ln -s ${FLUTTER_BINARY_PATH} ${CARGO_MAKE_WORKSPACE_WORKING_DIRECTORY}/${TARGET_PLUGIN}
            ls -s ${FLUTTER_BINARY_PATH} ${CARGO_MAKE_WORKSPACE_WORKING_DIRECTORY}/app
            ```
        - Also tried changing from `flutter pub get` to `"${FLUTTER_BINARY_PATH}/flutter pub get"` in the task `task.flutter-get`, and adding `FLUTTER_BINARY_PATH = "/Users/luke/development/flutter/bin"` under `[env]`, but that didn't work either.
        - So instead of usig the script, I just ran it manually:
            ```
            cd /Users/luke/code/github/ltfschoen/effektio/effektio_flutter_sdk,
            flutter pub get,
            cd /Users/luke/code/github/ltfschoen/effektio/app,
            "flutter pub get",
            ```
        - Other fixes:
            - running `cargo make setup-android`
            - Adding to top of Makefile.toml under `[env]`:
                - `CARGO_MAKE_WORKSPACE_WORKING_DIRECTORY = "/Users/luke/code/github/ltfschoen/effektio"`


You also need to build the core SDK once first:

## Building for SDK

Whenever the native SDK changed, you need to (re)build the artifacts. To do that you can use `cargo make android`

.Note: currently only android is fully supported. Plumbing for iOS is existing but not tested, Web, Linux, Mac, Windows and are platforms have not been configured yet.

## Running the App

Once the SDK is rebuild, you can run the flutter as usual on your device or emulator per:

F5 in VS Code or `flutter run` in `app`

### Troubleshooting Issues

Error encountered after first running Android Studio and created an emulator,
when open VS Code it shows the emulator in bottom right corner of window, after that you can run `flutter run`, as mentioned here https://stackoverflow.com/questions/49280884/how-to-set-up-devices-for-visual-studio-code-for-a-flutter-emulator and it outputs:

```bash
Using hardware rendering with device Android SDK built for x86 64. If you notice graphics artifacts,
consider enabling software rendering with "--enable-software-rendering".
Launching lib/main.dart on Android SDK built for x86 64 in debug mode...

FAILURE: Build failed with an exception.

* What went wrong:
Unable to start the daemon process.
This problem might be caused by incorrect configuration of the daemon.
For example, an unrecognized jvm option is used.
Please refer to the User Manual chapter on the daemon at https://docs.gradle.org/6.7/userguide/gradle_daemon.html
Process command line: /Library/Java/JavaVirtualMachines/jdk-18.0.1.1.jdk/Contents/Home/bin/java -XX:MaxPermSize=1024m -XX:ReservedCodeCacheSize=2048m -XX:+UseCompressedOops -XX:+HeapDumpOnOutOfMemoryError --add-opens java.base/java.util=ALL-UNNAMED --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.lang.invoke=ALL-UNNAMED --add-opens java.prefs/java.util.prefs=ALL-UNNAMED -Xms8198m -Xmx8198m -Dfile.encoding=UTF-8 -Duser.country=AU -Duser.language=en -Duser.variant -cp /Users/luke/.gradle/wrapper/dists/gradle-6.7-all/cuy9mc7upwgwgeb72wkcrupxe/gradle-6.7/lib/gradle-launcher-6.7.jar org.gradle.launcher.daemon.bootstrap.GradleDaemon 6.7
Please read the following process output to find out more:
-----------------------
Unrecognized VM option 'MaxPermSize=1024m'
Error: Could not create the Java Virtual Machine.
Error: A fatal exception has occurred. Program will exit.
```

So I tried removing the text `-XX:MaxPermSize=1024m` from file ./app/android/gradle.properties, as mentioned here https://stackoverflow.com/questions/31411989/android-studio-unrecognized-vm-option-maxpermsize-256m

But then that gave error 

```
Could not open settings generic class cache for settings file '/Users/luke/code/github/ltfschoen/effektio/app/android/settings.gradle' (/Users/luke/.gradle/caches/6.7/scripts/f0emg6u6oecmxqzgk5g9nn4ui).
> BUG! exception in phase 'semantic analysis' in source unit '_BuildScript_' Unsupported class file major version 62
```

This error appears to be because I installed JDK/JRE version 18, but in the file /Android Studio/jre/release it says `JAVA_VERSION="11.0.12"`, so I think the solution is to uninstall JDK/JRE version 18 and instead install version 11.0.12 from https://www.oracle.com/java/technologies/downloads/#java11-mac, as mentioned here: https://stackoverflow.com/questions/67240279/could-not-open-settings-generic-class-cache-for-settings-file
To download older Oracle version 11 without signon go here https://gist.github.com/wavezhang/ba8425f24a968ec9b2a8619d7c2d86a6, and download it from those direct links and verify the checksum for 11.0.15 is ea37f4d69f378a3fc7a629aee5aa89b9367ab70e6dd8dd76d47167a370a64d0f
```
https://cfdownload.adobe.com/pub/adobe/coldfusion/java/java11/java11015/jdk-11.0.15_osx-x64_bin.dmg
https://www.oracle.com/a/tech/docs/11-0-15-checksum.html

shasum -a 256 jdk-11.0.15_osx-x64_bin.dmg
```

Then changed the release file to be `JAVA_VERSION="11.0.15"` instead of `JAVA_VERSION="11.0.12"`

But still had to update my path since `java --version` still output:
```
java 18.0.1.1 2022-04-22
Java(TM) SE Runtime Environment (build 18.0.1.1+2-6)
Java HotSpot(TM) 64-Bit Server VM (build 18.0.1.1+2-6, mixed mode, sharing)
```

Modified `JAVA_HOME` in ~/.bash_profile to be `export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.0.15.jdk/Contents/Home`
Then run `source ~/.bash_profile`

So now `java --version` should output:
```
java 11.0.15 2022-04-19 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.15+8-LTS-149)
Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.15+8-LTS-149, mixed mode)
```

Note: Uninstall previous version by following this guide https://docs.oracle.com/javase/9/install/installation-jdk-and-jre-macos.htm

But when I run the emulator again in Android Studio the emulated device is shown in the VS Code bottom right corner, and then I run `flutter clean; flutter run`, it outputs similar error again:
```
Using hardware rendering with device Android SDK built for x86 64. If you notice graphics artifacts,
consider enabling software rendering with "--enable-software-rendering".
Launching lib/main.dart on Android SDK built for x86 64 in debug mode...

FAILURE: Build failed with an exception.

* Where:
Build file '/Users/luke/code/github/ltfschoen/effektio/app/android/app/build.gradle' line: 26

* What went wrong:
A problem occurred evaluating project ':app'.
> Could not open dsl generic class cache for script '/Users/luke/development/flutter/packages/flutter_tools/gradle/flutter.gradle' (/Users/luke/.gradle/caches/6.7/scripts/2j36nd2w0i66m6iesom2zqbe2).
   > BUG! exception in phase 'semantic analysis' in source unit '_BuildScript_' Unsupported class file major version 62
```

Tried adding the following in settings.json of VSCode as mentioned here https://stackoverflow.com/a/52541654 but still same issue:
```
"java.jdt.ls.java.home": "/Library/Java/JavaVirtualMachines/jdk-11.0.15.jdk/Contents/Home",
```


## Speed up Building

It takes a long time to execute full build.
You can rebuild only changes of source files to save your building time meaningfully.

`cargo make android-dev`
This will build only `x86_64` of rust library.
(build only rust) `682.6s` -> `120.31s`

`flutter run --no-build`
(only flutter changed) `85.0s` -> `42.6s`

## Running Tests

We have a test suite to run unit tests and integration tests. This is run via the CI to ensure consistency and every features is expected to add further tests to the suite. You can run the tests via:
