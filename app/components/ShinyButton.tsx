import React, { useState, MouseEvent } from "react";

interface ButtonProps {
    text: string;
    backgroundGradient: {
        from: string;
        via: string;
        to: string;
    };
}

export default function ShinyButton({ text, backgroundGradient }: ButtonProps) {
    const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
    
    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        const yPercentage = Math.max(0, Math.min(100, (y / rect.height) * 100));
        
        setGradientPos({ x: xPercentage, y: yPercentage });
    };
    
    const handleMouseLeave = () => {
        setGradientPos({ x: 50, y: 50 });
    };
    
    return (
        <button 
            className="flex justify-center items-center w-[94px] h-[42px] p-[1.5px] rounded-[6px] hover:cursor-pointer"
            style={{
                background: `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, #dbdbdb 10%, #a8a8a8 40%, #818181 100%)`
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div 
                className={`flex justify-center items-center w-full h-full rounded-[5px] font-bold font-[quantico] text-[20px] shadow-inner active:brightness-75 transition-all duration-100`}
                style={{
                    background: `linear-gradient(to bottom, ${backgroundGradient.from}, ${backgroundGradient.via}, ${backgroundGradient.to})`
                } as React.CSSProperties}
            >
                <span 
                    className="bg-clip-text text-transparent"
                    style={{
                        backgroundImage: `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, #dbdbdb 10%, #a8a8a8 40%, #818181 100%)`,
                        WebkitBackgroundClip: 'text'
                    }}
                >{text}</span>
            </div>
        </button>
    )
}