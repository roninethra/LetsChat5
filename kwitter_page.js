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

  username= localStorage.getItem("name");
  room_name= localStorage.getItem("RoomName");
document.getElementById("nameforwelcome").innerHTML= username;
  
function send(){
      var message= document.getElementById("messageinput").value;
     firebase.database().ref(room_name).push({
         message: message, name: username, likes: 0
     });
     document.getElementById("messageinput").value= "";
  }
  function homepage(){
    window.location=("index.html");
    localStorage.removeItem("name");
    localStorage.removeItem("RoomName");
  }
  function getData() {firebase.database().ref("/"+ room_name).on('value', function(snapshot) 
  {
    document.getElementById("conversation").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {
    childKey  = childSnapshot.key;
    Room_names = childKey;
    firebase_message_id = childKey;
    childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
    message_data = childData;
    //Start code
    
console.log(message_data);
name= message_data['name'];
message= message_data['message'];
likes= message_data['likes'];
nametag= "<h3>"+name+"<img class= 'user_tick' src= 'https://qph.fs.quoracdn.net/main-qimg-e1f0859025623850e8dd44300a60a872.webp'></h3>";
messagetag= "<h4 style= 'color:white;' class= 'message_h4'>"+message+"</h4>";
likestag= "<button class='btn btn-warning'id= "+firebase_message_id+" value= '"+likes+"'onclick='update_likes(this.id)' >"+likes;
span_with_tag= "<span class='glyphicon glyphicon-thumbs-up'>Like: " + likes +"</span></button><hr>";
row= "<div style= 'color:white; background-color:purple; border-radius: 20px;'  >"+nametag + messagetag + likestag + span_with_tag+"</div>";
document.getElementById("conversation").innerHTML+=row;  


    //End code
  }});});}
getData();
function update_likes(message_id){
  console.log("HELP!!!!");
  likes= document.getElementById(message_id).value;
  updated_likes=  Number(likes) + 1;
  firebase.database().ref(room_name).child(message_id).update({
      likes: updated_likes
  });
}