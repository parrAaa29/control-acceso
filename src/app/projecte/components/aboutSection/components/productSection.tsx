import React from 'react';
import { Badge } from "@/components/ui/badge";
import { HiMicrophone, HiSun } from "react-icons/hi";
import Image from 'next/image';

type ProductCardProps = {
    title: string;
    description: string;
    features: string[];
    imageUrl: string;
    reverseOrder?: boolean;
    iconEven?: React.ReactNode;
    iconOdd?: React.ReactNode;
};

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    description,
    features,
    imageUrl,
    reverseOrder = false,
    iconEven = <HiMicrophone className="w-3 h-4" />,
    iconOdd = <HiSun className="w-3 h-4" />
}) => {
    return (
        <div className="mb-14 flex max-w-4xl max-h-72 border-l-2 border-r-2 border-orange-100">
            {reverseOrder ? (
                <>
                    <div className="flex-1 p-5 pl-10 pr-0 flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold mb-5">
                            {title}
                        </h3>
                        <p className="mb-5 text-gray-700 text-justify">{description}</p>
                        <div className="mb-4">
                            {features.map((feature, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="mr-2 mt-2 inline-flex items-center space-x-2"
                                >
                                    {index % 2 === 0 ? iconEven : iconOdd}
                                    <span>{feature}</span>
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <Image 
                            src={imageUrl} 
                            alt={title} 
                            className="w-auto h-full object-contain" 
                            width={150} 
                            height={150} 
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="mb-4">
                        <Image 
                            src={imageUrl} 
                            alt={title} 
                            className="w-auto h-full object-contain" 
                            width={150} 
                            height={150} 
                        />
                    </div>
                    <div className="flex-1 p-5 pr-10 pl-0 flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold mb-5">
                            {title}
                        </h3>
                        <p className="mb-5 text-gray-700 text-justify">{description}</p>
                        <div className="mb-4">
                            {features.map((feature, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="mr-2 mt-2 inline-flex items-center space-x-2"
                                >
                                    {index % 2 === 0 ? iconEven : iconOdd}
                                    <span>{feature}</span>
                                </Badge>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductCard;
