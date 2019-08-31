import authServices from '../Services/userService';
import axios from 'axios';
var controller={
    register(firstName,lastName,email,password){

        var data={
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        }
        return axios.post(authServices.register,data).then(response=>{
            console.log("response--"+JSON.stringify(response));
            if(response.status===200)
            {
                console.log("register sucess")
            }
    
            
        })
        .catch(error=>{
            console.log("registration failed",error);
            //return error;
        })
    }
}
export default controller;