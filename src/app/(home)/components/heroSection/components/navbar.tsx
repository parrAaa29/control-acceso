"use client";

import React from "react";
import { usePathname } from "next/navigation";
import styles from '../heroSection.module.css';
import { FadeText } from '@/components/ui/fade-text';
import { PhoneIcon, HomeIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";

export default function Navbar() {
    const currentPath = usePathname();

    return (
        <div className={`${styles.header} flex items-center justify-center`}>
            <div className={`${styles.logo} flex-1 text-center`}>
                <Link href="/" passHref>
                    <BlurFade delay={0.6} inView>
                        <Image src="/img/logos/e-48.png" alt="Enttia Logo" width={50} height={50} className="mt-5 cursor-pointer" />
                    </BlurFade>
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
                {/* Renderizado condicional de enlaces según la ruta */}
                {currentPath !== "/projecte" && (
                    <Link href="/projecte">
                        <FadeText
                            className="px-4 py-2 border border-gray-300 rounded-lg text-black bg-white hover:bg-gray-100 flex items-center cursor-pointer"
                            direction="down"
                            framerProps={{
                                show: { transition: { delay: 0.6 } },
                            }}
                            text="Sobre nosaltres"
                        />
                    </Link>
                )}

                {currentPath === "/" && (
                    <Link href="/contacte">
                        <FadeText
                            className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 flex items-center space-x-2 cursor-pointer"
                            direction="down"
                            framerProps={{
                                show: { transition: { delay: 0.6 } },
                            }}
                            icon={<PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />}
                            text="Contacte"
                        />
                    </Link>
                )}

                {currentPath === "/contacte" && (
                    <Link href="/">
                        <FadeText
                            className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 flex items-center cursor-pointer"
                            direction="down"
                            framerProps={{
                                show: { transition: { delay: 0.6 } },
                            }}
                            icon={<HomeIcon className="h-5 w-5 mr-2" aria-hidden="true" />}
                            text="Inici"
                        />
                    </Link>
                )}


                {currentPath === "/projecte" && (
                    <Link href="/">
                        <FadeText
                            className="px-4 py-2 border border-gray-300 rounded-lg text-black bg-white hover:bg-gray-100 flex items-center cursor-pointer"
                            direction="down"
                            framerProps={{
                                show: { transition: { delay: 0.6 } },
                            }}
                            text="Inici"
                        />
                    </Link>
                )}

                {currentPath === "/projecte" && (
                    <Link href="/contacte">
                        <FadeText
                            className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 flex items-center cursor-pointer"
                            direction="down"
                            framerProps={{
                                show: { transition: { delay: 0.6 } },
                            }}
                            icon={<PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />}
                            text="Contacte"
                        />
                    </Link>
                )}
            </nav>
        </div>
    );
}
