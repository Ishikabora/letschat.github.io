
const firebaseConfig = {
    apiKey: "AIzaSyBZyyB9RsZbSArruPz2Q4zB-dazSaG2vFw",
    authDomain: "lets-chat-app-7d391.firebaseapp.com",
    databaseURL: "https://lets-chat-app-7d391-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-7d391",
    storageBucket: "lets-chat-app-7d391.appspot.com",
    messagingSenderId: "469531270967",
    appId: "1:469531270967:web:ae2df893fca195cedf04b2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function logout2() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}   

   

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data["message"];
like = message_data["like"];
name_with_tag = "<h4>"+name+"<img class = 'user_tick'src = 'tick.png'</h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+"value ="+like+" onclick= 'updateLike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'><Like:"+like+"</span></button><hr>";
row = name_with_tag + messsge_with_tag + like_button+ span_with_tag;
document.getElementById("output").innerHTML = row;
//End code
      } });  }); }
getData();


function send(){
      msg = document.getElementById("msg").value;
      firebase.database.ref(room_name).push({
        name:user_name,
        message:msg,
        like:0

      });
   

     msg = document.getElementById("msg").innerHTML = message +'<br>' + nameOfTheUse + '<br>' + updated_likes;
      document.getElementById("msg").value = "";
}


function updateLike(message_id){
      console.log("clicked on like button-"+message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+1;
    console.log(updated_likes);
     firebase.database().ref(room_name).child(message_id).update({
          like: updated_likes
     });
}


