"use client"
import { useSession } from "next-auth/react"

import React from 'react';

const Profile = () => {
    const session = useSession()

     if(session.data?.user?.id){
        return <>{JSON.stringify(session.data.id)}</>
     }
    
    return<>sign out</>
     
};

export default Profile;