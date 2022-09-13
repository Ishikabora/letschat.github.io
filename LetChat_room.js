const firebaseConfig = {
  apiKey: "AIzaSyAonOCW93vRMmY7r7EaRx42Z0GqQPuMo-k",
  authDomain: "letchat-1d71f.firebaseapp.com",
  projectId: "letchat-1d71f",
  storageBucket: "letchat-1d71f.appspot.com",
  messagingSenderId: "272063118861",
  appId: "1:272063118861:web:92b4404505aed2ed60df44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
    
  function addRoom(){
         firebase.database.ref("/").child(room_name).update({
               purpose: "adding room name"
        });
         window.location = "letChat_page.html";

         localStorage.setItem("room_name",room_name);
          
      }

      
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room_name",Room_names);
       row = "<div class = 'room_name' id = "+ Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(){
      
      //console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "letsChat_page.html";
      }


function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}





