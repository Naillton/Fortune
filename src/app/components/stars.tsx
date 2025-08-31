export default function Stars() {
    return (
        <div>
            {[...Array(100)].map((_, i) => (
            <div
                key={`star-${i}`}
                className="star"
                style={{
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random() * 5}s`,
                }}
            />
            ))}
        </div>
    )
}