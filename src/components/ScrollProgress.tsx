import { useEffect, useState } from "react";

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateScroll = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setProgress(Number((currentScroll / scrollHeight).toFixed(2)) * 100);
            }
        };

        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-transparent">
            <div
                className="h-full bg-accent transition-all duration-150 ease-out shadow-[0_0_10px_rgba(255,165,0,0.5)]"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
