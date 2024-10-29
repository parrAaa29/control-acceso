import BlurFade from '@/components/ui/blur-fade';
import { LockClosedIcon, FingerPrintIcon } from '@heroicons/react/20/solid';
import React from "react";

const CardAbout = () => {
    return (
        <>
            <BlurFade delay={0.75} inView>
                <div className="bg-white rounded-lg p-6 shadow-md flex-1 max-w-xl m-5 h-full">
                    <div className="flex items-center mb-4">
                        <div className="bg-white p-2 rounded-2xl border-2 border-[#f7a603]">
                            <LockClosedIcon className="h-8 w-8 text-[#f7a603]" />
                        </div>
                        <h3 className="text-xl font-bold ml-4 text-[#2b2b2b]">Seguretat a la vostra mida</h3>
                    </div>
                    <p>
                        Amb ID Presence, oferim un sistema de control de presència robust i segur, adaptable a les necessitats de la vostra empresa, 
                        amb múltiples nivells d’identificació i configuracions personalitzades per cada usuari.
                    </p>
                </div>
            </BlurFade>

            <BlurFade delay={0.8} inView>
                <div className="bg-white rounded-lg p-6 shadow-md flex-1 max-w-xl m-5 h-full">
                    <div className="flex items-center mb-4">
                        <div className="bg-white p-2 rounded-2xl border-2 border-[#f7a603]">
                            <FingerPrintIcon className="h-8 w-8 text-[#f7a603]" />
                        </div>
                        <h3 className="text-xl font-bold ml-4 text-[#2b2b2b]">Control precís i eficient</h3>
                    </div>
                    <p>
                        Ens comprometem a oferir un control horari en temps real, que permet gestionar totes les incidències, absències i hores 
                        extres amb exactitud, i assegurar una integració pràctica i àgil amb el vostre equip.
                    </p>
                </div>
            </BlurFade>
        </>
    );
};

export default CardAbout;
