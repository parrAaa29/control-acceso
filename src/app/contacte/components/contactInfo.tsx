import React from "react";

export default function ContactInfo() {
    return (
        <div className="relative mt-10 flex gap-20 justify-center text-start">
            <div>
                <h4 className="font-semibold mb-1">Adreça</h4>
                <p className="text-sm text-gray-700 mb-1">Ronda de Ponent 2, Local </p>
                <p className="text-sm text-gray-700">08201, Sabadell, Barcelona</p>
            </div>

            <div>
                <h4 className="font-semibold mb-1">Correu electrónic</h4>
                <p className="text-sm text-gray-700">info@enttia.com</p>
            </div>
            <div>
                <h4 className="font-semibold mb-1">Telèfon</h4>
                <p className="text-sm text-gray-700">+34 937 450 700</p>
            </div>
        </div>
    );
}