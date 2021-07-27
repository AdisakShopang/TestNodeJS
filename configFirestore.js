const firebase = require("firebase");

// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
const apiKeyValue = 'AIzaSyD1xMeaECuDh13G_aUvC13a4YDTsLpIB94';
const authDomainValue = 'chattest-ffcac.firebaseapp.com';
const projectIdValue = 'chattest-ffcac';
firebase.initializeApp({
    apiKey: apiKeyValue,
    authDomain: authDomainValue,
    projectId: projectIdValue
});
  
var db = firebase.firestore();

module.exports = db;