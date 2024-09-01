"use client"
import {useSession} from "next-auth/react";

export default function Home() {
    const session = useSession();
    return (
        <div className="flex justify-center pt-24">
            <main className="dark:bg-black dark:text-white">
                <h1 className="text-6xl">{session.data?.user?.name} uploads</h1>
            </main>
        </div>
    );
}