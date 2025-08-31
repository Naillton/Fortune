"use client";

import { useEffect } from "react";
import { useNavigate } from "../utils/routerUtils";
import SparklesCookie from "../components/sparklesCookie";

export default function Cookie() {
    const { navigateTo } = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigateTo("/fortune", 0);
        }, 500);
        
        return () => clearTimeout(timer);
    }, [navigateTo]);

    return (
        <main className="flex flex-col justify-center items-center min-h-screen p-4">
            <div className="flex flex-col  justify-center items-center gap-2 animate-pulseScale">
                <div className="flex flex-row">
                    <div className="w-16 h-20 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-l-full shadow-lg relative">
                        <div className="absolute inset-2 border border-amber-500/30 rounded-l-full shadow-lg"></div>
                    </div>
                    <div className=" w-2 h-20">
                        <SparklesCookie />
                    </div>
                    <div className="w-16 h-20 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-r-full shadow-lg relative">
                        <div className="absolute inset-2 border border-amber-500/30 rounded-r-full shadow-lg"></div>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-transparent bg-clip-text">Cracking open your fortune...</p>
                </div>
            </div>
        </main>
    )
}