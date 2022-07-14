export const Validate = (data , type) => {
    const error = {};

    if(!data.email){
        error.email ="Please Enter Your Email";
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        error.email = "Email address is invalid";
    }else{
        delete error.email;
    }
    
    if(!data.password){
        error.password ="Please Enter Your Password"
    }else if(data.password.length < 6){
        error.password ="Password need to be 6 character or more";
    }else{
        delete error.password;
    }
    if (data.isAccepted) {
        delete error.isAccepted
    } else {
        error.isAccepted = "Accept our regulations"
    }
    if(type === "signIn"){

        if(!data.name.trim()){
            error.name ="Please Enter Your UserName"
        }else{
            delete error.name;
        }

        if(!data.confirmPassword){
            error.confirmPassword="Please Confirm Your Password";
        }else if(data.confirmPassword !== data.password){
            error.confirmPassword="Password Do Not Match";
        }else{
            delete error.confirmPassword;
        }

      
    }

    return error;
}