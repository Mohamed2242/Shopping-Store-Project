var users = [
    {
    username: 'admin',
    email:'admin',
    password: 'admin'
    }
    ];
    
    function registerUser() {
    
    
    var newUserName = document.getElementById("firstname").value;
    var newEmail= document.getElementById("email").value;
    var newPassword = document.getElementById("pass").value;
    var rePassword = document.getElementById("repass").value;
    
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
                                        
    var regName = /^[a-zA-Z ]{2,30}$/;  
    if(newPassword!=rePassword){
       alert("Passwords do not match");
       
    }else{
        if(newPassword==""||newPassword.length < 6){
    alert("Minimum 6 characters required");
        }else{
    
            if(newEmail== "" || !regEmail.test(newEmail)){
    alert("Please enter a valid e-mail address");
            }else{
                if(newUserName==""||!regName.test(newUserName)){
                    alert("Please Enter Valid Name")
                }else{
                    var newUser = {
                        username: newUserName,
                        password: newPassword,
                        email:newEmail
                        };
                      var found=false;
                        for(var i = 0; i < users.length; i++) {
                      
                        if(newEmail == users[i].email) {
                         found=true;
                            
                           
                            break;
                       
                        }
                        }
                        if(found){
        alert('Email Is Used');
                        }else{
         users.push(newUser);
                        console.log(users);
                        document.getElementById("myform").reset();
                }
                
                   
            }
            
        }
       
          
            
    }
    
    }}
    function hide(){
    var signUpForm=document.getElementById("myform");
    var signInForm=document.getElementById("myform1");
    
    signInForm.style.display="none";
    signUpForm.style.display="block";
    }
    function show(){
        var signUpForm=document.getElementById("myform");
        var signInForm=document.getElementById("myform1");
        
        signInForm.style.display="block";
        signUpForm.style.display="none";
        }
        function login(){
    
    var email=document.getElementById("Email").value;
    var pass =document.getElementById("Pass").value;
    
    var found=false;
    for(var i=0;i<users.length;i++){
        if(email==users[i].email&&pass==users[i].password){
          found=true;
          localStorage.setItem("name",users[i].username);
          localStorage.setItem("login","true");
        }
       
    }
    if(found){
      window.location.href="Home.html";
    }
    else{
        alert("wrong");
    }
        }