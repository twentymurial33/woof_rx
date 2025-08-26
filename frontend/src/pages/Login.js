var firebase = require('firebase');
var firebaseui = require('firebaseui');

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());