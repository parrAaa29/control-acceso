import React from "react";
import styles from "./ultimateSection.module.css";
import Link from "next/link";
import { FadeText } from "@/components/ui/fade-text";
import { PhoneIcon } from '@heroicons/react/20/solid';


const UltimateSection = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-red-100 p-10 rounded-lg text-center">
                <section className={styles.ultimateSection}>
                        <p className={styles.ultimateLabel}>CONTACT US</p>
                    <h2 className={styles.title}>
                            Contact us for more information
                    </h2>
                    <Link href="/contacte" className="flex justify-center items-center">
                        <FadeText
                            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 flex items-center space-x-2 cursor-pointer w-fit"
                            direction="down"
                            framerProps={{
                                show: { transition: { delay: 0.6 } },
                            }}
                            icon={
                                <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                            }
                            text="Contact us free now"
                        />
                    </Link>
                </section>
            </div>
        </>
    );
};

export default UltimateSection;