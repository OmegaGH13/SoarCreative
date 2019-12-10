const firebaseConfig = {
  apiKey: "AIzaSyBAEYuqxsG23aWOmOwyijx5_1t1mnYoKkU",
  authDomain: "soar-creative-project.firebaseapp.com",
  databaseURL: "https://soar-creative-project.firebaseio.com",
  projectId: "soar-creative-project",
  storageBucket: "soar-creative-project.appspot.com",
  messagingSenderId: "730537734019",
  appId: "1:730537734019:web:698da3c1bee526d7a5d0b6",
  measurementId: "G-JJJQBK0V9C"
};
  

  

  function createLogin(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    const promise = auth.createUserWithEmailAndPassword(email.Value, password.Value);
    promise.catch(e => alert(e.message));
    alert('Signed In');
  }