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
    href: "/projecte",
    cta: "Saber més",
    background: <Image className="absolute -right-20 -top-20 opacity-100 brightness-50 blur-sm" src="/img/problem/pexels-grid-img.jpg" alt="" fill/>,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    textClass: "text-white",
  },
  {
    Icon: FileIcon,
    name: "Projectes",
    description: "Informat sobre els projectes que hem realitzat.",
    href: "/projecte/#projects",
    cta: "Saber més",
    background: <Image className="absolute -right-20 -top-20 opacity-100 brightness-50 blur-sm" src="/img/problem/pexels-grid-img-projects.jpg" alt="" fill />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    textClass: "text-white",
  },  
  {
    Icon: GlobeIcon,
    name: "Web",
    description: "Descobreix la nostra pàgina web.",
    href: "#footer",
    cta: "Saber més",
    background: "",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 bg-white brightness-100",
    textClass: "text-black",
    openInNewTab: false,
  },
  {
    Icon: CalendarIcon,
    name: "Empresa",
    description: "Empreses relacionades amb nosaltres.",
    href: "#testimonials",
    cta: "Saber més",
    background: "",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-white brightness-100",
    textClass: "text-black",
    openInNewTab: false,
  },
  {
    Icon: BellIcon,
    name: "Contacte",
    description:
      "Contacta amb nosaltres per a més informació.",
    href: "/contacte",
    cta: "Contacta",
    background: <Image className="absolute -right-20 -top-20 opacity-100 brightness-50 blur-sm" src="/img/problem/pexels-grid-img-contact.jpg" alt="imagen-contacto" fill />,
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
