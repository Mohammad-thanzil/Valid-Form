
function validation(){
  
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        document.getElementById("result").style.color = "red";

        return false;
    }

    else if(document.Formfill.Username.value.length<8){
        document.getElementById("result").innerHTML="Atleast eight letter*";
        document.getElementById("result").style.color = "red";

        return false;
    }

    else if(document.Formfill.email.value==""){
        document.getElementById("result").innerHTML="Enter Email*";
        document.getElementById("result").style.color = "red";

        return false;
    }

    else if(document.Formfill.gender.value === "" ){
        document.getElementById("result").innerHTML="Enter gender*";
        document.getElementById("result").style.color = "red";

        return false;
    }

    else if(document.Formfill.password.value === "" ){
        document.getElementById("result").innerHTML="Enter password*";
        document.getElementById("result").style.color = "red";

        return false;
    }

    else if(document.Formfill.password.value.length < 8){
        document.getElementById("result").innerHTML="Password Must 8-digit*";
        document.getElementById("result").style.color = "red";

        return false;
    }

    else if(document.Formfill.confirmpassword.value === "" ){
        document.getElementById("result").innerHTML="Enter confirm password*";
        document.getElementById("result").style.color = "red";

        return false;
    }

    else if(document.Formfill.confirmpassword.value.length < 8){
        document.getElementById("result").innerHTML="Password Must 8-digit*";
        document.getElementById("result").style.color = "red";

        return false;
    }

    else if(document.Formfill.password.value!==document.Formfill.confirmpassword.value){
        document.getElementById("result").innerHTML="password Does'nt matched*";
        document.getElementById("result").style.color = "red";

        return false;
    }
  

    else if(document.Formfill.confirmpassword.value == document.Formfill.confirmpassword.value){
        popup.classList.add("open-slide")
        
        return false;
    }else;

}
