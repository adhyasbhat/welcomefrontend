import axios from 'axios'
import environment from "../environment/EnvironmentDev"

const baseURL = environment.baseURL

const apiClient = axios.create({
    baseURL:baseURL,
    timeout: 10000,
    headers:{
        "Content-Type":"application/json"
    }
})

export const loginUser = async (name,password)=>{
    try{
        const response = await apiClient.post("/login",{
            name,
            password
        })
        return response
    }
    catch(error){
        console.log("Error in login : ",error)
    }
}
 export const registerUser = async (name,email,dob,phone,password,confirmpassword)=>{
    try{
        const response = await apiClient.post("/register",{
            name,
            email,
            dob,
            phone,
            password,
            confirmpassword
        })
        console.log(response)
        return response.data
    }
    catch(error){
        console.log("Error in register:",error)
    }
 }