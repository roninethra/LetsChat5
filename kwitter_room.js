var firebaseConfig = {
  apiKey: "AIzaSyBC2ie2500fKSIfJLOGOv5RyTB17Hotp8c",
  authDomain: "lets-chat-9958b.firebaseapp.com",
  databaseURL: "https://lets-chat-9958b-default-rtdb.firebaseio.com",
  projectId: "lets-chat-9958b",
  storageBucket: "lets-chat-9958b.appspot.com",
  messagingSenderId: "590292191681",
  appId: "1:590292191681:web:115f81a69fbeb0af954740"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var usernamedisplay= localStorage.getItem("name");
document.getElementById("nameforwelcome").innerHTML= usernamedisplay;
function updateuser(){
    var nameofuser= document.getElementById("username").value;
    firebase.database().ref("/").child(nameofuser).update({
        testing: "adding user"
    })

}
function homepage(){
  window.location=("index.html");
  localStorage.removeItem("name");
  localStorage.removeItem("RoomName");
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
 
  console.log("Room Name - " + Room_names);
row= "<div class= 'room_name' id=" +Room_names+" onclick= 'redirectToRoomName(this.id)'># "+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;

  });});}
getData();

function redirectToRoomName(NethrasRoom){
  localStorage.setItem("RoomName", NethrasRoom);
  window.location="kwitter_page.html";
}
function addRoom(){
  roomnamevariable = document.getElementById("roomnameinput").value
  firebase.database().ref("/").child(roomnamevariable).update({
         purpose: "Nethra"
  })
  localStorage.setItem("RoomName", roomnamevariable);
  window.location="kwitter_page.html";
}