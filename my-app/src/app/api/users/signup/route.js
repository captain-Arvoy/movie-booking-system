import {connect} from "@/dbConfig/dbConfig";
import bcryptjs from "bcryptjs";
import {NextRequest,NextResponse} from "next/server";
import User from "@/models/userModel";
connect()
export async function POST(NextRequest){
    try{
        const reqBody=await NextRequest.json()
        const {username,email,password} = reqBody
        console.log(`Log: ${reqBody}`)
        const user = await User.findOne({email})
        // check if user exists
        if(user){
            
            return NextResponse.json({error: "User already exists"},{status: 400})
        }
        //hash password
        const salt = await bcryptjs.genSalt(2)
        const hashedPassword = await bcryptjs.hash(password,salt)
        console.log(hashedPassword)
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        })
        try{
            await newUser.save()
            console.log(`saved Succesfully`)
            return NextResponse.json({
                message: "User created successfully",
                success: true,
            },{status: 200})
        } catch (error){
            console.log("Error in signup: "+error)
            return NextResponse.json({
                message: "Failed to create new user",
                sucess: false,
            },{status: 500})
        }
    }catch(error){
        return NextResponse.json({
            error:error.message
        },{status: 500})
    }
}