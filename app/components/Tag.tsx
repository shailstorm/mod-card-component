import { oxanium } from "../fonts"

export interface TagProps {
    name: string;
    feature?: boolean;
}

export const tagStyles = {
    feature: "bg-gradient-to-r from-[#818181] via-[#dbdbdb] to-[#818181] p-[1px] text-[#d1d1d1]",
    weapon: "border-[#008BBD] text-[#00ABEA]",
    ranged: "border-[#278536] text-[#27B73D]",
    tool: "border-[#8B5555] text-[#A16264]"
}

export default function Tag({ name, feature = false }: TagProps) {
    return (
        <>
            {feature ? (
                <div className={tagStyles["feature"] + " " + "flex justify-center items-center text-[16px] h-[28px]"}>
                    <div className={oxanium.className + " " + "bg-[#18181a] px-[12px] py-[2px] h-full flex items-center justify-center leading-[20px]"}>
                        <p className="mt-[2px]">{name}</p>
                    </div>
                </div>
            ) : (
                <div className={tagStyles[name.toLowerCase() as keyof typeof tagStyles] + " " + oxanium.className + " " + "flex justify-center items-center text-[16px] px-[12px] py-[0px] border-[0.5px] font-semibold"}>
                    <p className="mt-[2px]">{name.toUpperCase()}</p>
                </div>
            )}
        </>
    )
}
