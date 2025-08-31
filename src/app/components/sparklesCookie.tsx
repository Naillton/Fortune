import { Sparkles } from "lucide-react";

export default function SparklesCookie() {
    const sparkles = Array.from({ length: 20 });

    return (
        <div>
            {sparkles.map((_, i) => {
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const offsetX = (Math.random() < 0.5 ? -1 : 1) * left;
                const offsetY = (Math.random() < 0.5 ? -1 : 1) * top;
                return (
                    <Sparkles
                        aria-label="Sparkle icon"
                        key={i}
                        className="w-3 h-3 text-orange-400 drop-shadow-lg absolute animate-spin-slow"
                        style={{
                            top: `${50 + offsetY / 2}%`,
                            left: `${50 + offsetX / 2}%`,
                        }}
                    />
                );
            })}
        </div>
    )
}