import React from "react";
import styles from '../heroSection.module.css';
import { FadeText } from '@/components/ui/fade-text';
import { PhoneIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className={`${styles.header} flex items-center justify-center`}>
            <div className={`${styles.logo} flex-1 text-center`}>
                <Link href="/" passHref>
                    <FadeText
                        className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] cursor-pointer"
                        direction="down"
                        framerProps={{
                            show: { transition: { delay: 0.6 } },
                        }}
                        text="e"
                    />
                </Link>
            </div>
            <div className={`${styles.navTitle} flex-1 text-center`}>
                <Link href="/" passHref>
                    <FadeText
                        className="text-4xl tracking-[0em] text-black dark:text-white md:text-7xl md:leading-[5rem] cursor-pointer"
                        direction="down"
                        framerProps={{
                            show: { transition: { delay: 0.6 } },
                        }}
                        text="Enttia | Control d'Acces"
                    />
                </Link>
            </div>
            <nav className={`flex space-x-4 flex-1 text-center justify-end`}>
                <Link href="/">
                    <FadeText
                        className="px-4 py-2 border border-gray-300 rounded-lg text-black bg-white hover:bg-gray-100 flex items-center cursor-pointer"
                        direction="down"
                        framerProps={{
                            show: { transition: { delay: 0.6 } },
                        }}
                        text="About Us"
                    />
                </Link>

                <Link href="/contacte">
                    <FadeText
                        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 flex items-center space-x-2 cursor-pointer"
                        direction="down"
                        framerProps={{
                            show: { transition: { delay: 0.6 } },
                        }}
                        icon={
                            <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                        }
                        text="Contacte"
                    />
                </Link>
            </nav>
        </div>
    );
}
