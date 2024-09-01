import React from "react";
import {auth} from "@/services/auth";
import {redirect} from "next/navigation";


export default async function App() {

    const session = await auth();
    console.log(session?.user?.name)

    return (
        <>
            {
                session?.user ? (
                    redirect('/home')
                ) : (
                    redirect('/singin')
                )
            }
        </>
    )
}