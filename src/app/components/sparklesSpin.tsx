import { Sparkles } from "lucide-react";

type BoxProps = {
  className?: string;
};

export default function SparklesSpin({ className }: BoxProps) {
    return (
        <div>
            <Sparkles aria-label="Sparkle icon" className={`${className} text-yellow-500 drop-shadow-lg animate-pulseSparkle mx-2 animate-random-spin`}/>
        </div>
    )
}