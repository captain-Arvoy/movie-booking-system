import {connect} from "@/dbConfig/dbConfig";
import bcryptjs from "bcryptjs";
import {NextRequest,NextResponse} from "next/server";
import User from "@/models/userModel";
connect()
export async function POST(NextRequest){
    try{
        const reqBody=await Request.json()
        const {username,email,password} = reqBody
        console.log(`Log: ${reqBody}`)
        const user = await User.findOne({email})
        //check if user exists
        if(user){
            return NextResponse.json({error: "User already exists"},{status: 400})
        }
        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt)
        
        const newUser = new User({
            username,
            email,
            hashedPassword
        })
        try{
            await newUser.save()
            return NextResponse.json({
                message: "User created successfully",
                success: true,
                savedUser
            })
        } catch (error){
            
        }
    }catch(error){
        return NextResponse.json({
            error:error.message
        },{status: 500})
    }
}