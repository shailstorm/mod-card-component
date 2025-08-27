'use client'

import { oxanium, quantico } from "../fonts";
import ShinyButton from "./ShinyButton";
import { useState } from "react";
import Tag, { TagProps } from "./Tag";

export interface ModCardProps {
    media: { src: string, type: 'image' | 'video' }[];
    tags: TagProps[];
    title: string;
    user: { pfp: string, username: string };
    description: string,
    remix?: boolean
}

export default function ModCard({ media, tags, title, user, description, remix=true }: ModCardProps) {

    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const nextPhoto = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentMediaIndex((prev) => (prev + 1) % media.length);
        setTimeout(() => setIsTransitioning(false), 300);
    };
    
    const prevPhoto = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentMediaIndex((prev) => (prev - 1 + media.length) % media.length);
        setTimeout(() => setIsTransitioning(false), 300);
    };


    return (
        <div className={oxanium.className + " " + "relative flex flex-col border-[0.5px] border-[#6a6a6a] w-[450px] bg-[#18181a] rounded-[4px] overflow-clip group"}>

            {/* media, arrows */}
            <div className="flex relative h-[260px] w-full overflow-hidden">
                {media.length > 1 && (
                    <div className="z-20 absolute flex justify-between items-center w-full h-full p-[12px]">
                        <button onClick={prevPhoto} className="hover:scale-110 transition-transform duration-50" disabled={isTransitioning}>
                            <img src="arrow.svg" width="18px" height="18px" className="drop-shadow-sm"/>
                        </button>
                        <button onClick={nextPhoto} className="hover:scale-110 transition-transform duration-50" disabled={isTransitioning}>
                            <img src="arrow.svg" width="18px" height="18px" className="drop-shadow-sm rotate-180"/>
                        </button>
                    </div>
                )}
                                
                <div 
                    className="flex transition-transform duration-300 ease-in-out" 
                    style={{ 
                        transform: `translateX(-${currentMediaIndex * 100}%)`,
                        width: `${media.length * 100}%`
                    }}
                >
                    {media.map((item, index) => (
                        <div key={index} className="w-full h-[260px] flex-shrink-0">
                            {item.type === 'video' ? (
                                <video 
                                    src={item.src} 
                                    width="100%" 
                                    height="100%"
                                    autoPlay 
                                    muted 
                                    loop
                                    className="object-cover"
                                />
                            ) : (
                                <img 
                                    src={item.src} 
                                    width="100%" 
                                    height="100%"
                                    className="object-cover"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* <hr className="h-0 border-[#969696] border-t-[0.5px] bg-[#6a6a6a]"/> */}

            <div className="flex flex-col justify-between px-[24px] pt-[18px] pb-[24px] gap-[24px]">
                {/* tags */}
                <div className="flex flex-wrap gap-[6px]">
                    {tags.sort((a, b) => (b.feature ? 1 : 0) - (a.feature ? 1 : 0)).map((tag, index) => (
                        <Tag key={index} name={tag.name} feature={tag.feature} />
                    ))}
                </div>

                {/* title, profile, description */}
                <div className="flex flex-col gap-[6px]">
                    <div className={quantico.className + " " + "flex items-center font-semibold text-[24px] bg-gradient-to-b from-[#909090] via-[#d4d4d4] to-[#909090] bg-clip-text text-transparent leading-[24px]"}>{title.toUpperCase()}</div>
                    
                    <div className="flex items-center gap-[10px] pb-[2px]">
                        <img src={user.pfp} width="20px" height="20px" className="pb-[2px]"></img>
                        <div className={oxanium.className + " " + "text-[16px] text-[#acacac] leading-[24px]"}>{user.username}</div>
                    </div>

                    <div className={oxanium.className + " " + "flex relative items-center bg-[#232323] text-[#d9d9d9] py-[12px] pl-[12px] pr-[32px] text-[18px] leading-[24px]"}>
                        {description}
                        <div className="absolute right-[8px] top-[8px]">
                            <img src="copy.svg" width="16px" height="16px" className="brightness-80 hover:brightness-110 cursor-pointer transition-all duration-50"></img>
                        </div>
                    </div>
                </div>
                
                {/* buttons */}
                <div className="flex justify-between items-stretch">
                    <div className="flex gap-[12px]">
                        <ShinyButton 
                            text="VIEW" 
                            backgroundGradient={{
                                from: "#2a2a2a",
                                via: "#1e1e1e", 
                                to: "#111111"
                            }}
                        />
                        {remix && (
                            <ShinyButton 
                                text="REMIX"
                                backgroundGradient={{
                                    from: "#1F531E",
                                    via: "#163f1e",
                                    to: "#0b210f"
                                }}
                            />
                        )}
                    </div>

                    <div className="flex gap-[18px] items-end pb-[2px]">
                        <img src="share.svg" width="20px" height="20px" className="brightness-80 hover:brightness-110 cursor-pointer transition-all duration-50"></img>
                        <img src="download.svg" width="20px" height="20px" className="brightness-80 hover:brightness-110 cursor-pointer transition-all duration-50"></img>
                    </div>
                </div>

            </div>
        </div>
    )
}