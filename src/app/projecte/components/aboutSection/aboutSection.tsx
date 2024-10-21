import Navbar from "@/app/(home)/components/heroSection/components/navbar";
import React from "react";
import styles from "./aboutSection.module.css";
import ProductCard from "./components/productSection";
import { HiCamera, HiLightBulb } from "react-icons/hi";

const AboutSection = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className="p-8 flex items-center flex-col">
                <section className={styles.productSection}>
                    <p className={styles.productLabel}>PRODUCTS</p>
                    <h2 className={styles.title}>
                        Our most relevant products
                    </h2>
                </section>

                <ProductCard
                    title="Suprema Xpass D2 Mullion"
                    description="XPass D2 es un lector de tarjetas muy compacto apto para aquellos espacios reducidos. El diseño XPass D2 Mullion-type mide 48mm de ancho y es perfecto para espacios estrechos y marcos de puertas."
                    features={['Micrófono y altavoz', 'Sensor día/noche', 'Visión térmica']}
                    imageUrl="/img/product/Lector-de-tarjetas-dual-XPass-D2-Mullion-type-removebg-preview.png"
                    iconEven={<HiCamera className="w-3 h-4" />}
                    iconOdd={<HiLightBulb className="w-3 h-4" />}
                />

                <ProductCard
                    title="Duali DE-960"
                    description="Duali DE-960 es un lector de proximidad y de pared diseñado para leer tarjetas RFID y NFC. Compatible con tarjetas y estándares como ISO-14443, Mifare, DESFire, NFC y FeliCa"
                    features={['Micrófono y altavoz', 'Sensor día/noche']}
                    imageUrl="/img/product/Duali-DE-960-removebg-preview.png"
                    iconEven={<HiCamera className="w-3 h-4" />}
                    iconOdd={<HiLightBulb className="w-3 h-4" />}
                    reverseOrder={true}
                />
            </div>
        </div>
    );
};

export default AboutSection;