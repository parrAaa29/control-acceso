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
                        <h3 className="text-xl font-bold ml-4 text-[#2b2b2b]">We follow our own path</h3>
                    </div>
                    <p>
                        There’s no rule book on IR best practices, so we wrote our own. The proven methodologies we use are based on our real-world knowledge of what truly works from decades of supporting issuers through their capital markets journeys.
                    </p>
                </div>
            </BlurFade>

            <BlurFade delay={0.8} inView>
                <div className="bg-white rounded-lg p-6 shadow-md flex-1 max-w-xl m-5 h-full">
                    <div className="flex items-center mb-4">
                        <div className="bg-white p-2 rounded-2xl border-2 border-[#f7a603]">
                            <FingerPrintIcon className="h-8 w-8 text-[#f7a603]" />
                        </div>
                        <h3 className="text-xl font-bold ml-4 text-[#2b2b2b]">Reassuringly hands-on</h3>
                    </div>
                    <p>
                        We don’t advise from afar—we are both strategists and practitioners. We roll up our sleeves and get deep in the trenches, filling your knowledge gaps and supporting your time-pressed IR teams.
                    </p>
                </div>
            </BlurFade>
        </>
    );
};

export default CardAbout;
