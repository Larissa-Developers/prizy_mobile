import firebase from 'firebase';

export function getEvent(eventId) {
  return firebase.database().ref('events/' + eventId);
}

export function getCheckedInUsersForEvent(eventId) {
  return firebase
    .database()
    .ref('users')
    .orderByChild('meetupId')
    .equalTo(eventId);
}

export function getEvents() {
  return firebase.database().ref('events');
}

export function checkUserIn(email, meetupId) {
  return firebase
    .database()
    .ref('users/' + firebase.auth().currentUser.uid)
    .set({
      email: email,
      meetupId: meetupId,
    });
}
