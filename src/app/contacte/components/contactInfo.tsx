import React from "react";

export default function ContactInfo() {
    return (
        <div className="relative mt-10 flex gap-8 justify-center text-start">
            <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-sm text-gray-700">Ronda de Ponent, 2, Local, 08201, Sabadell, Barcelona</p>
            </div>

                <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-sm text-gray-700">info@enttia.com</p>
                </div>
                <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-sm text-gray-700">+34 937 450 700</p>
                </div>
            </div>
    );
}