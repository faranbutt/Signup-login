import {compare} from 'bcrypt';
import { db, userTable } from '@/lib/drizzle';
import {sign} from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';


export async function POST(req:NextRequest){
    const {email,password} = await req.json();
    if(!email || !password) {return NextResponse.json({"message":"Missing Fields",status:"missing"})};
    console.log(email,password)
    try{
        const data = await db.select().from(userTable).where(eq(userTable.email,email))
        const user = data[0]
        if(data.length == 0 ){
            return NextResponse.json({message:"user is not registed",status:false})
        }
        else{
            const passHash = await compare(password,user.passwordHash)
            if(passHash){
                const token = sign({email:email},process.env.SECRET_KEY as string);
                return NextResponse.json({message:'User signed in',status:true,token:token})
            }
            else {
                if(passHash==false){
                    return NextResponse.json({message:"Incorrect password",status:"incorrect password"})
                }
            }
        }
        
    }catch(error){
        console.log((error as {message:string}).message)
    }
}
    