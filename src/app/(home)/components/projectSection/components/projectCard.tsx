import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

interface NewsCardProps {
    date: string;
    title: string;
    description: string;
    imageUrl: string | StaticImageData;
    linkUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ date, title, description, imageUrl, linkUrl }) => {

    return (
        <Link href={linkUrl}>
            <div className="max-w-sm rounded-lg overflow-hidden bg-white border border-gray-200">
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
            </div >
        </Link>

    );
};

NewsCard.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
};

export default NewsCard;
