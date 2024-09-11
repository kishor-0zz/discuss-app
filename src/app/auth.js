import NextAuth from "next-auth"
import github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./db"



const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET= process.env.GITHUB_CLIENT_SECRET;

if(!GITHUB_CLIENT_ID||!GITHUB_CLIENT_SECRET){
    throw new Error("missing github oauth credentials")
}

NextAuth({
    adapter:PrismaAdapter(db),
    providers:[
        github({
            clientId:GITHUB_CLIENT_ID,
            clientSecret:GITHUB_CLIENT_SECRET
        })
    ],
    callbacks:{
        async session({ session, user, token }) {
            if(session && user){
                session.user.id === user.id;
            }
            return session;
        },
    }
})