import { atom } from "jotai";

export const user = atom({
    name:"",
    email:'',
    password:'',
    status:true
})
export const newUser = atom({
    name:'',
    email:'',
    password:'',
    phonenumber:'',
    status:false
})

export const defaultNewUser = atom({
    name:'',
    email:'',
    password:'',
    phonenumber:'',
    status:false
})

export const defaultOldUser = atom({
    name:'',
    email:'',
    password:'',
    status:true
})

export const auth = atom(false);