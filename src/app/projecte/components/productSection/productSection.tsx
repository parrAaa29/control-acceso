import React from "react";
import styles from "./productSection.module.css";
import ProductCard from "./components/productSectionCart";
import { HiCamera, HiLightBulb, HiPhone } from "react-icons/hi";
import BlurFade from "@/components/ui/blur-fade";

const ProductSection = () => {
    return (
        <div className="p-8 flex items-center flex-col">
            <section className={styles.productSection}>
                <p className={styles.productLabel}>PRODUCTES</p>
                <h2 className={styles.title}>
                    Els nostres productes més destacats
                </h2>
            </section>

            <BlurFade delay={0.25} inView>
                <ProductCard
                    title="Suprema Xpass D2 Mullion"
                    description="XPass D2 és un lector de targetes molt compacte apte per a aquells espais reduïts. El disseny XPass D2 Mullion-type mesura 48mm d'ample i és perfecte per a espais estrets i marcs de portes."
                    features={['Micrófono y altavoz', 'Sensor día/noche', 'Visión térmica']}
                    imageUrl="/img/product/Lector-de-tarjetas-dual-XPass-D2-Mullion-type-removebg-preview.png"
                    iconEven={<HiCamera className="w-3 h-4" />}
                    iconOdd={<HiLightBulb className="w-3 h-4" />}
                />

                <ProductCard
                    title="Duali DE-960"
                    description="Duali DE-960 és un lector de proximitat i de paret dissenyat per llegir targetes RFID i NFC. Compatible amb targetes i estàndards com ISO-14443, Mifare, DESFire, NFC i FeliCa"
                    features={['Micrófono y altavoz', 'Sensor día/noche']}
                    imageUrl="/img/product/Duali-DE-960-removebg-preview.png"
                    iconEven={<HiCamera className="w-3 h-4" />}
                    iconOdd={<HiLightBulb className="w-3 h-4" />}
                    reverseOrder={true}
                />

                <ProductCard
                    title="Suprema Mobile Access"
                    description="Suprema Mobile Access li permet usar el seu propi telèfon (Smartphone) com a clau per accedir a portes, instal·lacions i més. En usar el seu telèfon com a credencial, administrar i usar una targeta d'accés es fa més fàcil, ràpid i segur."
                    features={['Teléfono móvil']}
                    imageUrl="/img/product/Suprema_Mobile_Access.png"
                    iconEven={<HiPhone className="w-3 h-4" />}
                />
            </BlurFade>
        </div>
    );
};

export default ProductSection;