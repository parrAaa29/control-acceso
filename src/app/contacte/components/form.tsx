import React from 'react';
import FormComponent from './formInputs';
import Navbar from '@/app/(home)/components/heroSection/components/navbar';
import ContactInfo from './contactInfo';

const ContactComponent = () => {
    return (
        <>
            <Navbar />
            <div
                className="flex flex-col md:flex-row max-w-[90%] mx-auto gap-10 h-[70vh] bg-white rounded-lg"
                style={{
                    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1), 0 8px 12px rgba(0, 0, 0, 0.3)'
                }}
            >
                <div className="relative flex-1 h-96 md:h-auto rounded-lg overflow-hidden p-6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.9350141869935!2d2.1085932156496556!3d41.54627387925006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a496c8a3c34827%3A0xc85f9df0a7b7a4a2!2sRonda%20de%20Ponent%2C%202%2C%2008201%20Sabadell%2C%20Barcelona%2C%20Spain!5e0!3m2!1sen!2sus!4v1632486393750!5m2!1sen!2sus"
                        className="w-full h-[75%]"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Sabadell Map"
                    ></iframe>

                    <ContactInfo />
                </div>

                <div className="flex-1 p-10">
                    <h3 className="text-2xl mb-2">Formulari de Contacte</h3>
                    <hr className="mb-5" />
                    <FormComponent />
                </div>
            </div>
        </>
    );
};

export default ContactComponent;