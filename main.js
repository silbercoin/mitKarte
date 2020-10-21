
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBQ7IYx1KbPuCQP3aM9_TLgo6LRKQbd1gg",
  authDomain: "mitkarte-d3451.firebaseapp.com",
  databaseURL: "https://mitkarte-d3451.firebaseio.com",
  projectId: "mitkarte-d3451",
  storageBucket: "mitkarte-d3451.appspot.com",
  messagingSenderId: "613908235620",
  appId: "1:613908235620:web:ac2a384cb888a26776e671"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);

// submit form
function submitForm(e){
  e.preventDefault();

  // Get value
  var email = getInputVal('email'); 
  // save message
  saveMessage(email);


}


// Function to get form values
function getInputVal(id){
  return document.getElementById(id).Value;
}

// Save message to firebase
function saveMessage(email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email:email
  });
}