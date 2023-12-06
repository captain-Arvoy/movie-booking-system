import {connect} from "@/dbConfig/dbConfig";
import bcryptjs from "bcryptjs";
import {NextRequest,NextResponse} from "next/server";
import User from "@/models/userModel";
import jwt from "jsonwebtoken"
connect()
export async function POST(NextRequest,NextRespone){
    try{
        const reqBody =  await NextRequest.json()
        console.log(reqBody)
        const {username, password} = reqBody;
        //check if user exists
        const user = await User.findOne({username})
        if(!user){
            return NextResponse.json({
                error: `User does not exist ${email}`
            },{status: 400})
        }
        //check if password is correct
        const validPassword = await bcryptjs.compare(password,user.password)
        if(!validPassword){
            return NextResponse.json({
                message: "Invalid Password"
            },{status: 400})
        }
        console.log("LOGIN !!!!!!!SUCEESS!!!!!!")
        //create JWT
        const tokenData = {
            id: user._id,
            username: user.username
        }
        const token = jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn: "1d"})
        const response = NextResponse.json({
            message: "Login Successful",
            user: user.username,
            success: true
        })
        response.cookies.set("token",token,{
            httpOnly: true
        })
        console.log(`cookies Set: ${response}`)
        return response;
    } catch (error) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}