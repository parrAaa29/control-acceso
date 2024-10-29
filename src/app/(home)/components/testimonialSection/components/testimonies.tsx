import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
    {
        img: "/img/logos/generalitat-de-catalunya-logo.png",
        link: "https://web.gencat.cat/ca/inici/", // URL de destino para cada imagen
    },
    {
        img: "/img/logos/GPAinnova-logo.webp",
        link: "https://www.gpainnova.com/",
    },
    {
        img: "/img/logos/Leitat_logo.png",
        link: "https://leitat.org/",
    },
    {
        img: "/img/logos/logo-sequra.png",
        link: "https://www.sequra.com/es",
    },
    {
        img: "/img/logos/mutua-terrasa.png",
        link: "https://www.mutuaterrassa.com/es/",
    },
    {
        img: "/img/logos/Codorniu-Logo.png",
        link: "https://www.codorniu.com/",
    },
];

const ReviewCard = ({
    img,
    link,
}: {
    img: string;
    link: string;
}) => {
    return (
        <div className="flex flex-row items-center gap-2">
            <a href={link} target="_blank" rel="noopener noreferrer"> {/* Enlace que se abre en otra pestaña */}
                <Image
                    className="ml-10 mr-10 grayscale transition duration-300 ease-in-out hover:grayscale-0"
                    width="200"
                    height="200"
                    alt="logo-image"
                    src={img}
                />
            </a>
        </div>
    );
};

export function Testimonies() {
    return (
        <div className="relative flex h-[100%] w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {reviews.map((review) => (
                    <ReviewCard key={review.img} img={review.img} link={review.link} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
