import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
    {
        img: "/img/logos/generalitat-de-catalunya-logo.png",
    },
    {
        img: "/img/logos/GPAinnova-logo.webp",
    },
    {
        img: "/img/logos/Leitat_logo.png",
    },
    {
        img: "/img/logos/logo-sequra.png",
    },
    {
        img: "/img/logos/mutua-terrasa.png",
    },
    {
        img: "/img/logos/Codorniu-Logo.png",
    },
];

const firstRow = reviews;

const ReviewCard = ({
    img,
}: {
    img: string;
}) => {
    return (
        <div className="flex flex-row items-center gap-2">
            <Image
                className="ml-10 mr-10 grayscale transition duration-300 ease-in-out hover:grayscale-0"
                width="200"
                height="200"
                alt="logo-image"
                src={img}
            />
        </div>
    );
};


export function Testimonies() {
    return (
        <div className="relative flex h-[100%] w-full flex-col items-center justify-center overflow-hidden">
            <div className=""></div>
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.img} img={review.img} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
