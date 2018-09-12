# Prizy
This a WIP for the Larisa Developers Meetup Group. 

## Description
An app to make giving prizes easier. Every user needs to create an account and be logged in.  
It displays a list of all the meetups from the meetup api specific to the Larisa Developers meetup group. 
Users needs to check in to an event to be able to receive a prize. 
When clicking on one meetup entry, the app will pick 2 random accounts to assign a prize to them.

## How to run it locally
First run the Metro JavaScript bundler locally.

    npm start

Then check the App from a real device ([instructions](https://facebook.github.io/react-native/docs/running-on-device)) or a simulator ([instructions](https://facebook.github.io/react-native/docs/running-on-simulator-ios)).

For running on simulator you can use the helper commands.

    npm run run-ios

or

    npm run run-android

## Backend
Data is hosted on firebase and authentication is happening from there.

## API
The app is getting data from the Meetup API https://www.meetup.com/meetup_api/.

## Trelo Board
https://trello.com/b/oCVfuIUL/prize-app

## Contribution
Please check issues first and [Trello board](https://trello.com/b/oCVfuIUL/prize-app) for upcoming features. PRs are welcomed.



