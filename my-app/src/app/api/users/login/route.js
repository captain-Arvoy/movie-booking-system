import {connect} from "@/dbConfig/dbConfig";
import bcryptjs from "bcryptjs";
import {NextRequest,NextResponse} from "next/server";
import User from "@/models/userModel";
connect()
export async function POST(NextRequest){
    try{
        const reqBody =  await NextRequest.json()
        const {email, password} = reqBody;
    
        //check if user exists
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({
                error: "User does not exist"
            })
        }
        //check if password is correct
        const validPassword = await bcryptjs.compare(password,user.password)
        if(!validPassword){
            return NextResponse.json({
                message: "Invalid Password"
            },{status: 400})
        } else {
            return NextResponse.json({
                message: "Success"
            },{status: 200})
        }
    } catch (error) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}