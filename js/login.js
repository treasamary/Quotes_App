
     let username = document.getElementById("username");
     let error= document.getElementById("error");
     let password=document.getElementById("password");
     function formvalidate(){
     if(username.value=="admin"&&password.value=="admin123"){
        
         username.style.border="5px solid green";
         password.style.border="5px solid green";
         
         alert("Login Successful ")
          alert("You are now directed to the home page  ")
          return true;
     }
    
     else if(username.value=="")
              {
              alert("username cannot be empty");
              username.style.border="5px solid red";
              return false;
     
              }
         else if(password.value==""){
              alert("password cannot be empty");
              password.style.border="5px solid red";
              return false;
     
              }

     else{
         alert("Login Failed.Try again");
         username.style.border="5px solid red";
         password.style.border="5px solid red";
         return false;
     }
     }






