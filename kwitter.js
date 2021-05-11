function userlogin(){
    username= document.getElementById("username").value;
      localStorage.setItem("name", username);
      window.location=("kwitter_room.html");
  }
  function gotoreviews(){
      window.location=("reviews.html");
  }