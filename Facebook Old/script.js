$(document).ready(function(){
    $("#sign-up").validate({
        rules:{
            fname:{
                required:true,
                minlength:8
            },
            sname:{
                required:true,
                minlength:8
            },
            lname:{
                required:true
            },
            address:{
                required:true,
                email:true
            },
            newPass:{
                required:true,
                minlength:8

            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            Gender3:{
                required:true
            }

        },
        messages:{
            Gender3:"Select any one option!"
        }
        
    })
})