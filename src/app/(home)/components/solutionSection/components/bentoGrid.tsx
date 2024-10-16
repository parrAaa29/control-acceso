import {
  BellIcon,
  CalendarIcon,
  LockClosedIcon,
  GlobeIcon,
  FileIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";

const features = [
  {
    Icon: LockClosedIcon,
    name: "Protecció",
    description: "Implementem les mesures de seguretat més avançades per a la teva tranquil·litat.",
    href: "/",
    cta: "Saber més",
    background: <Image className="absolute -right-20 -top-20 opacity-100 brightness-50 blur-sm" src="/img/problem/pexels-grid-img.jpg" alt="" layout="fill" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    textClass: "text-white",
  },
  {
    Icon: FileIcon,
    name: "Projectes",
    description: "Informat sobre els projectes que hem realitzat.",
    href: "/",
    cta: "Saber més",
    background: <Image className="absolute -right-20 -top-20 opacity-100 brightness-50 blur-sm" src="/img/problem/pexels-grid-img-projects.jpg" alt="" layout="fill" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    textClass: "text-white",
  },
  {
    Icon: GlobeIcon,
    name: "Web",
    description: "Descobreix la nostra pàgina web.",
    href: "https://enttia.com/",
    cta: "Saber més",
    background: "",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 bg-white brightness-100",
    textClass: "text-black",
    openInNewTab: true,
  },
  {
    Icon: CalendarIcon,
    name: "Empresa",
    description: "Empreses relacionades amb nosaltres.",
    href: "/",
    cta: "Saber més",
    background: "",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-white brightness-100",
    textClass: "text-black",
    openInNewTab: true,
  },
  {
    Icon: BellIcon,
    name: "Contacte",
    description:
      "Contacta amb nosaltres per a més informació.",
    href: "/",
    cta: "Contacta",
    background: <Image className="absolute -right-20 -top-20 opacity-100 brightness-50 blur-sm" src="/img/problem/pexels-grid-img-contact.jpg" alt="imagen-contacto" layout="fill" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    textClass: "text-white",

  },
];

export async function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
