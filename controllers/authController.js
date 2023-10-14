import Users from "../models/userModel.js"
import { hashString } from "../utils/index.js"




export const register = async(req, res, next)=>{

    const {firstName, LastName, email, password} = req.body
    
    try{
        const exists = Users.findOne({email})
        if(exists){
            next("email already exists")
            return
        }
        const hashedPassword = await hashString (password)
        const user = await Users.create({
            firstName,
            LastName,
            email,
            hashedPassword
        })
    }catch(err){
        console.log(err)
    }
}