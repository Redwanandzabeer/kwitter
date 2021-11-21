const firebaseConfig = {
      apiKey: "AIzaSyDiffcKBY_M4HpSKT2GGkrct1sExmrPCdA",
      authDomain: "kwitter-app-16e7f.firebaseapp.com",
      databaseURL: "https://kwitter-app-16e7f-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-16e7f",
      storageBucket: "kwitter-app-16e7f.appspot.com",
      messagingSenderId: "583284259341",
      appId: "1:583284259341:web:34cddd8fe03151f91bb344",
      measurementId: "G-E7XH3T9L7L"
    };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
msg=document.getElementById("msg").Value;
firebase.database().ref(room_name).push(

{
name: user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";

}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
