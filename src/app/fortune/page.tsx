"use client";

import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { frasesMarcantes } from "../utils/utils";
import { RefreshCcw } from 'lucide-react';
import SparklesSpin from "../components/sparklesSpin";
import RandomNumber from "../components/randomNumber";
import { useNavigate } from "../utils/routerUtils";

export default function Fortune() {
    const [randomPhrase, setRandomPhrase] = useState<string | null>(null);
    const { navigateTo } = useNavigate();

    useEffect(() => {
            const phrase =
            frasesMarcantes[Math.floor(Math.random() * frasesMarcantes.length)];
            setRandomPhrase(phrase);
        }, []);

    return (
        <main className="flex flex-col justify-center items-center min-h-screen p-4">
            <div className="flex flex-col justify-center items-center gap-4 animate-fadeIn border-2 border-amber-400 rounded-lg p-6 bg-trasnparent">
                <div className="flex flex-col justify-center items-center space-y-4">
                    <div className="flex flex-row items-center justify-center">
                        <SparklesSpin className="w-2 h-2 mb-2" />
                        <SparklesSpin className="w-2 h-2 mt-3" />
                        <SparklesSpin className="w-2 h-2 mb-4" />
                        <div className=" w-8 h-8 border border-amber-500 rounded-full flex justify-center items-center animate-pulseDiv">
                            <Sparkles className="w-8 h-8 text-yellow-400 drop-shadow-lg animate-spin-slow" />
                        </div>
                        <SparklesSpin className="w-2 h-2 mt-5" />
                        <SparklesSpin className="w-2 h-2 mt-2" />
                        <SparklesSpin className="w-2 h-2 mb-4" />
                    </div>
                    <h1 className="text-2xl bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-transparent bg-clip-text">Your Fortune</h1>
                    <p className="text-center text-black italic text-lg px-4">{randomPhrase}</p>
                    <p className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-transparent bg-clip-text">Your Lucky Numbers</p>
                    <RandomNumber />
                    <button onClick={() => navigateTo("/", 0)} className="flex flex-row items-center justify-center px-2 py-1 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-105">
                        <RefreshCcw aria-label="Reload icon" className="w-4 h-4 mr-2" />
                        <p className="text-sm">Get Another Fortune</p>
                    </button>
                </div>
            </div>
        </main>
    )
}