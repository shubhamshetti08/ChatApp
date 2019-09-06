import authServices from '../Services/userService';
import axios from 'axios';

//import ForgotPwd from '../Pages/forgotPwd';
var controller = {
    register(firstName, lastName, email, password) {

        var data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        return axios.post(authServices.register, data).then(response => {
                console.log("response--" + JSON.stringify(response));
                if (response.status === 200) {
                    console.log("register sucess")
                }


            })
            .catch(error => {
                console.log("registration failed", error);
                //return error;
            })
    },

    login(email, password) {

        var data = {
            email: email,
            password: password
        }
        return axios.post(authServices.login, data).then(response => {
                console.log("response--" + JSON.stringify(response));
                if (response.status === 200) {
                    console.log("login sucess")
                }


            })
            .catch(error => {
                console.log("login failed", error);
                //return error;
            })
    },
    forgotPwd(email) {

        var data = {
            email: email,
        }
        return axios.post(authServices.forgotPwd, data).then(response => {
                console.log("response--" + JSON.stringify(response));
                if (response.status === 200) {
                    console.log("key mailed")
                }


            })
            .catch(error => {
                console.log("forgot pwd failed", error);
                //return error;
            })
    },
    resetPwd(password, confirmpassword) {
        var data = {
            password: password,
            confirmpassword: confirmpassword
        }
        return axios.post(authServices.resetPwd, data).then(response => {
                console.log("response--" + JSON.stringify(response));
                if (response.status === 200) {
                    console.log("reset sucess")
                }


            })
            .catch(error => {
                console.log("reset failed", error);
                //return error;
            })
    },
    getAllUseres() {
        return axios.get(authServices.getAllUsers).then(response => {
            console.log("response----------->>>>>>>>>>>>", response.data);
            if (response.status === 200) {
                console.log("get all useres sucess");
                return response.data;
            }

        })
        // return data;
        .catch(error => {
            console.log("get all useres failed", error);
            //return error;


        })


    },
    getUserMsg() {
        return axios.get(authServices.getUserMsg).then(response => {
            console.log("all chats------", response.data);
            if (response.status === 200) {
                console.log("get all chats sucess");
                return response.data;
            }

        })
        // return data;
        .catch(error => {
            console.log(" get all chats failed", error);
            //return error;


        })


    }

}
export default controller;