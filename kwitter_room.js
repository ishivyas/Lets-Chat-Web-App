

//ADD YOUR FIREBASE LINKS HERE


const firebaseConfig = {
      apiKey: "AIzaSyDM3WNAwslaOHnIHo4SccZzShWRhkGq_lU",
      authDomain: "kwitter-app-f8a0a.firebaseapp.com",
      databaseURL: "https://kwitter-app-f8a0a-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-f8a0a",
      storageBucket: "kwitter-app-f8a0a.appspot.com",
      messagingSenderId: "754840147328",
      appId: "1:754840147328:web:6a921eed6e7b90dc179d65"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();