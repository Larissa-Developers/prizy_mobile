# Prizy

Prizy is a mobile app, built in React-Native, that will help automate the prize draws during our meetup. Attendees will have the ability to check in and enter the draw.

More features will be added in the future.

## Requirements

Be sure to check the official [React Native Guide](https://facebook.github.io/react-native/docs/getting-started.html).

1. [NodeJS](https://nodejs.org/en/) (version 8.3 or newer)
2. [Watchman](https://facebook.github.io/watchman/) - if you are on macOS. Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.
3. React Native cli - [react-native-cli](https://www.npmjs.com/package/react-native-cli)
4. Xcode (to the app run on iOS)
5. Android Studio (to the app run on Android)

## Getting started

### 1. Install node modules

Run `npm install` from root directory

### 2. Run on simulators

1. Start server to serve React Native code
   - `react-native start` or `npm run start`
2. Start iOS simulator
   - `react-native run-ios`
3. Start Android emulator
   - `react-native run-android`

## Backend

The app will consume data from a RESTful API. For more details, please, check the community's [backend project](https://github.com/Larissa-Developers/prizy_backend).

## Project management

Currently, there is a [trello board](https://trello.com/b/b1KCAdqE/prizy-mobile) available, with a backlog of user stories. In addition to that board, GitHub issues will be used to track bugs, feature requests and more.

## Contribution

If you are new to _Open Source_, please, read this [introduction](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source).

In a nutshell, you can follow these steps:

1. **Fork** the repo on GitHub
2. **Clone** the project to your own machine
3. **Commit** changes to your own branch
4. **Sync** your fork (see [how](https://help.github.com/articles/syncing-a-fork/))
5. **Push** your work back up to your fork
6. Submit a **Pull request** so that we can review your changes
