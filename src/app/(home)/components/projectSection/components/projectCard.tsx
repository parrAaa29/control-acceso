import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from "@/components/layout/button";
import { ArrowRightIcon } from '@heroicons/react/20/solid';

interface NewsCardProps {
    date: string;
    title: string;
    description: string;
    imageUrl: string | StaticImageData;
    linkUrl: string;
    knowMore?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ date, title, description, imageUrl, linkUrl, knowMore }) => {

    return (
        <div className="relative max-w-sm rounded-lg overflow-hidden bg-white border border-gray-200">
            <Link href={linkUrl} className="block">
                <div className={`relative ${knowMore ? 'blur-sm' : 'blur-none'} transition-all duration-300 z-10`}>
                    <div className="m-4">
                        <Image
                            className="w-full h-64 object-cover rounded-lg"
                            src={imageUrl}
                            alt="News Image"
                            width={400}
                            height={250}
                        />
                    </div>
                    <div className="px-6 pb-2 text-start">
                        <span className="text-gray-500 text-sm">{date}</span>
                    </div>
                    <div className="px-6 py-4 text-start">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">
                            {description}
                        </p>
                    </div>
                </div>
            </Link>

            {knowMore && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <Link href={linkUrl}>
                        <Button variant="ghost" asChild size="sm" className="bg-blue-100 py-1 px-3 text-sm pointer-events-auto flex items-center">
                                Saber més
                                <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

NewsCard.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
    knowMore: PropTypes.bool,
};

export default NewsCard;
