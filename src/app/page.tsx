"use client";
import { Sparkles } from "lucide-react";
import { useNavigate } from "./utils/routerUtils";

export default function Home() {
  const { navigateTo } = useNavigate();

  return (
    <>
      <header className="flex justify-center items-center text-4xl">
        <h1 className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-transparent bg-clip-text" style={{
            textShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
            opacity: 1,
            transform: "none",
            padding: "20px",
            fontStyle: "italic",
          }}>Create your luck!
        </h1>
      </header>
      <main>
        <section className="flex flex-col justify-center items-center min-h-screen p-4">
          <div className="cursor-pointer mb-8">
            <div className="relative w-32 h-20">
              <div onClick={() => navigateTo("/cookie", 0)} className="w-full h-full transform origin-right animate-tilt-right bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full rotate-12 shadow-lg border-2 border-amber-400 animate-bounce-up-down">
                <div className="absolute inset-2 border border-amber-500/30 rounded-full"></div>
                <div className="absolute inset-4 border border-amber-500/20 rounded-full"></div>
                <div className="absolute -top-2 -right-2 rotate-[105deg] animate-spin-slow">
                  <Sparkles aria-label="Sparkle icon" className="w-6 h-6 text-yellow-400 drop-shadow-lg rotate-[105deg]" />
                </div>
                <div className="absolute -bottom-1 -left-2 rotate-[-260deg] animate-spin-slow">
                  <Sparkles aria-label="Sparkle icon" className="w-4 h-4 text-orange-400 drop-shadow-lg rotate-[260deg]" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-center space-y-6">
            <div className="absolute top-0 left-0  animate-spin-slow">
              <Sparkles aria-label="Sparkle icon" className="w-2 h-2 text-yellow-400 drop-shadow-lg" />
            </div>
            <div className="absolute top-0 right-0 animate-spin-slow">
              <Sparkles aria-label="Sparkle icon" className="w-2 h-2 text-yellow-400 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-0 -left-5 animate-spin-slow">
              <Sparkles aria-label="Sparkle icon" className="w-2 h-2 text-yellow-400 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-0 -right-5 animate-spin-slow">
              <Sparkles aria-label="Sparkle icon" className="w-2 h-2 text-yellow-400 drop-shadow-lg" />
            </div>
            <div className="absolute -left-5 animate-spin-slow">
              <Sparkles aria-label="Sparkle icon" className="w-2 h-2 text-yellow-400 drop-shadow-lg" />
            </div>
            <div className="absolute -right-5 animate-spin-slow">
              <Sparkles aria-label="Sparkle icon" className="w-2 h-2 text-yellow-400 drop-shadow-lg" />
            </div>
            <div className="absolute -right-5 animate-spin-slow">
              <Sparkles aria-label="Sparkle icon" className="w-2 h-2 text-yellow-400 drop-shadow-lg" />
            </div>
            <div className="absolute -bottom-5 animate-spin-slow">
              <Sparkles aria-label="Sparkle icon" className="w-2 h-2 text-yellow-400 drop-shadow-lg" />
            </div>
            <div className="absolute -top-5 animate-spin-slow">
              <Sparkles aria-label="Sparkle icon" className="w-2 h-2 text-yellow-400 drop-shadow-lg" />
            </div>
            <div className="text-3xl">
              <h1 className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-transparent bg-clip-text">Fortune Cookie</h1>
            </div>
            <div className="">
              <p className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-transparent bg-clip-text">Tap the cookie to crack it open!</p>
            </div>
            <div className="animate-pulseScale">
              <div className="flex flex-row items-center justify-center border border-yellow-400 scale-105 transition-transform duration-300 p-2 rounded-full">
                <div className="animate-spin-slow">
                  <Sparkles aria-label="Sparkle icon" className="w-4 h-4 text-orange-400 drop-shadow-lg rotate-[260deg]" />
                </div>
                <p className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-transparent bg-clip-text px-2">Magic awaits inside</p>
                <div className="animate-spin-slow">
                  <Sparkles aria-label="Sparkle icon" className="w-4 h-4 text-orange-400 drop-shadow-lg rotate-[260deg]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex justify-center">
        <p className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-transparent bg-clip-text">© 2025 - Todos os direitos reservados</p>
      </footer>
    </>
  );
}
