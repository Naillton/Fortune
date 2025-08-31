import { useEffect, useState } from "react";

export default function RandomNumber() {
    const [randomNumber, setRandomNumber] = useState<number[]>([]);

    useEffect(() => {
        const numbers = Array.from({ length: 6 }, () =>
            Math.floor(Math.random() * 100) + 1
        );
        setRandomNumber(numbers);
    }, []);

    return (
        <div className="flex flex-row space-x-2">
            {randomNumber.map((number, i) => (
                <div key={i} className="w-10 h-10 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 rounded-full shadow-lg flex justify-center items-center">
                    <p className="text-white">{number}</p>
                </div>
            ))}
        </div>
    )
}