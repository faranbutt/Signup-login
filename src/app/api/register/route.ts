import { NextRequest, NextResponse } from "next/server";
import { userTable,db } from "@/lib/drizzle";
import { eq, and, or } from 'drizzle-orm'
import {hash} from 'bcrypt'
import { sign } from "jsonwebtoken";

export async function POST(request:NextRequest){
    const {name,email,phonenumber,password} = await request.json()
    console.log("EEEEEEE",email);

    if(!name || !email || !phonenumber || !password){
        return NextResponse.json({"message":"missing fields",status:"missing"})
    }
    try{
                const data = await db.select().from(userTable).where(or(eq(userTable.email,email),eq(userTable.phonenumber,phonenumber)))
                if(data.length){
                    return NextResponse.json({message:"useer already existed or number is already linked to another account",status:false})
                }
                else {
                    const passHash = await hash(password,10)
                    const user:{name:string,email:string,password:any,phonenumber:string} = {
                                            name,
                                            email,
                                            password:passHash,
                                            phonenumber
                                } 
                    var flag = 0
                    const res = await db.insert(userTable).values({name:user.name,email:user.email,phonenumber:user.phonenumber,passwordHash:user.password}).returning()
                    if(res){
                                            flag = 1
                                            console.log("FLAG",flag)
                            }
                    if(flag){
                        const  token  = sign( //Signing a jwt token
                    {
                    email: user.email
                    },
                    process.env.SECRET_KEY as string
                    );
                    return NextResponse.json({message : "UserAdded to database",status:true,token:token})
                    }

                }
                    
                }catch(error){
                    console.log(error)
                    return NextResponse.json({"message":"Error in database"})

                }

}

//         const data = await db.select().from(userTable).where(or(eq(userTable.email,email),eq(userTable.phonenumber,phonenumber)))
//         if(data.length){
//             return NextResponse.json({message:"useer already existed or number is already linked to another account",status:false})
//         }
//         else{
//             hash(password,10,async(err,hash)=>{
//                 if(err){
//                     return NextResponse.json({message:"Server Error"})
//                 }
//                 const user:{name:string,email:string,password:any,phonenumber:string} = {
//                     name,
//                     email,
//                     password:hash,
//                     phonenumber
//                 }
//                 var flag = 1
//                 console.log("Faran")
//                 const res = await db.insert(userTable).values({name:user.name,email:user.email,phonenumber:user.phonenumber,passwordHash:user.password}).returning()
//                 var flag = 0;
//                 if(res){
//                     flag = 1
//                     console.log("FLAG",flag)
//                 }
//                 if (flag) {
//                     const  token  = sign( //Signing a jwt token
//                     {
//                     email: user.email
//                     },
//                     process.env.SECRET_KEY as string
//                     );
//                     };

//             })
            
            
//         }
        

//     }catch(error){
//         console.log(error)
//         return NextResponse.json({ERROR:error})
//     }
//     return NextResponse.json({message : "UserAdded to database",status:true})
// }   