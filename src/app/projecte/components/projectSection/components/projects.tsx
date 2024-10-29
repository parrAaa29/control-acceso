"use client";
import Image from 'next/image';
import { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import ProjectModal from './projectModal';

type Project = {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
  imageColage: string[];
  link: string;
  description: string;
  architect: string;
  year: string;
  contractor: string;
  moreImages: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Sede de la Generalitat en Girona',
    location: 'Barcelona, ES',
    imageUrl: '/img/project/project-img-1.jpg',
    imageColage: [
      '/img/project/project-img-1.jpg',
      '/img/project/project-img-1.2.jpg',
      '/img/project/project-img-1.3.jpg',
      '/img/project/project-img-1.4.jpg'
    ],
    link: '#',
    description: `Recentment hem implementat un sistema de control d'accessos per gestionar i optimitzar l'ús de les diferents sales de l'edifici. Per realitzar aquest projecte hem instal·lat més de 30 panys electrònics comunicats amb el nostre programari de gestió IDPresence.
                  \n\nToda aquesta infraestructura estarà vinculada al sistema de reserva que permetrà a l'usuari poder identificar-se dins de l'edifici i poder de fer la reserva i quan li sigui acceptada podrà accedir a la sala reservada a l'hora consignada amb l'accés amb targeta identificativa RFID.
                  \n\nA continuació podem veure un esquema de la tecnologia implementada en el sistema.`,
    architect: 'Olson Kundig',
    year: '2023',
    contractor: 'Dowbuilt',
    moreImages: true,
  },
  {
    id: 2,
    title: 'Palau Marc de la Generalitat',
    location: 'Barcelona, ES',
    imageUrl: '/img/project/project-img-2.jpg',
    imageColage: [
      '/img/project/project-img-2.jpg',
      '/img/project/project-img-2.1.jpg',
      '/img/project/project-img-2.2.jpg',
      '/img/project/project-img-2.3.jpg'
    ],
    link: '#',
    description: `Hem implementat un sistema de control d'accés en un dels principals edificis del Govern de la Generalitat a les seves seus de Barcelona a la consergeria de Cultura, que inclou el control d'accés de tots els empleats, visites i personal extern, cadascun amb les seves diferents característiques.\n\n
                  El projecte comprèn de torns amb terminals de control d' accés amb detecció biomètrica i per targeta RFID. També està dotat d' escàners de DNI i impressores d' ediquetes identificatives. L' arquitectura del sistema està formada per dos servidors de processos, dos servidors de bases de dades, 
                  i múltiples llocs de treball distribuïts pel territori.\n\n El sistema acull i controla un flux diari de més de 300 usuaris, amb monitoratge d'entrades i sortides en temps real, control d'hores treballades, gestió de visites, expedició de targetes de credencials, escaneig de documents de
                  identitat de visitants i personal extern, i control dels torns i portes d'entrada / sortida.\n\nEn aquest projecte s'han instal·lat terminals Suprema BioStation A2 i també hem instal·lat controls d'accés en diferents entrades de l'edifici.`,
    architect: 'Olson Kundig',
    year: '2023',
    contractor: 'Dowbuilt',
    moreImages: true,
  },
  {
    id: 3,
    title: 'Institut Nacional d’Educació Física',
    location: 'Barcelona, ES',
    imageUrl: '/img/project/project-img-3.jpg',
    imageColage: [],
    link: '#',
    description: `Es tracta d'un projecte de control de videovigilància i comunicació amb videoporters a través d'un telèfon IP.\n\n Hem dut a terme la implementació d'un sistema de videovigilància amb càmeres Mobotix a l'edifici, a cadascuna de les plantes i a l'exterior. El sistema de control inclou 
    videoporters per a la comunicació directa amb la recepció a través d' un telèfon IP.\n\n La instal·lació inclou el programari de control de presència ID Presence per al control d'accés amb terminals Suprema, repartits a les seus de Barcelona i Lleida. Aquest sistema permet la detecció biomètrica i amb targetes
    RFID dels usuaris, i l' opció de crear un calendari personal. A més, es poden consultar els marcatges realitzats en els llistats. També es pot consultar en temps real els usuaris que estan al recinte.nn En aquest projecte s'han instal·lat càmeres i videoporters de Mobotix, el programari ID Presence i 
    terminals Suprema BioLite Net.`,
    architect: 'Olson Kundig',
    year: '2023',
    contractor: 'Dowbuilt',
    moreImages: false,
  },
  {
    id: 4,
    title: 'Sedes del Grupo Werfen',
    location: 'Catalunya, ES',
    imageUrl: '/img/project/project-img-9.jpg',
    imageColage: [],
    link: '#',
    description: `Implementació d' un control d' accés a l' edifici, a cadascuna de les plantes, accessos a escales interiors i al menjador corporatiu. La instal·lació inclou terminals d'obertura de porta automàtica i també control de torns d'entrada i sortida per a empleats, visites i personal extern, cada tipus amb el seu comportament diferenciat.\n\n
                  L' arquitectura de desplegament del sistema està formada per dos servidors de processos, dos servidors de bases de dades i múltiples llocs de treball distribuïts pel territori nacional. L'arquitectura lògica està formada per 4 seus, una a Madrid i tres a Barcelona, amb total estanqueïtat de dades entre elles.\n\n
                  El sistema acull i controla un flux mensual d'entrada i sortida de més de 1.100 usuaris diferents, que efectuen més de 74.000 marcatges d'identificació positiva. El sistema està dotat amb monitoratge a temps real, amb un retard de 30 segons, que controla les hores treballades, gestiona les visites i controla els torns i portes d'accés. \n\n
                  El sistema permet l' explotació de les dades generades en multitud de llistats. A destacar el llistat de marcatges, on es pot consultar de forma immediata qualsevol marcatge de qualsevol usuari d'entre els milers de l'històric. També el llistat de presència, que proporciona una llista de les persones que es troben al recinte en un moment donat a 
                  requeriment de qualsevol improvist o emergència que afecti la seguretat de l' edifici. \n\n Aquesta instal·lació comprèn 97 terminals. Els models utilitzats són Nitgen Fingkey i Kreta BioProx.`,
    architect: 'Olson Kundig',
    year: '2023',
    contractor: 'Dowbuilt',
    moreImages: false,
  },
  {
    id: 5,
    title: 'Recinto Hotelero del Grupo Nadal',
    location: 'Palo Alto, CA',
    imageUrl: '/img/project/project-img-5.jpg',
    imageColage: [],
    link: '#',
    description: `Hem instal·lat un total de 31 càmeres IP al recinte hoteler del Grup Nadal. Aprofitant i ampliant el cablejat estructurat de l'hotel, instal·lem càmeres IP POE, per la qual cosa no hem necessitat fer arribar alimentació addicional a cap de les càmeres. Així, mitjançant un únic cable, alimentem i transportem el senyal de vídeo a la xarxa informàtica. \n\n
    Per als passadissos, menjadors, bars i zones comunes hem instal·lat el model Vivotek FD8134, de petit format però amb resolució megapíxel. Per a les zones exteriors, hem instal·lat el model Vivotek IP7361, amb protecció IP65 anti vandàliques. Ambdues càmeres disposen de sensors infrarojos per al visionat d'imatges en la foscor. Les imatges que ens ofereixen les 31 
    càmeres IP són gravades i emmagatzemades en un disc dur QNAP instal·lat a la mateixa xarxa de les càmeres. \n\n Des de qualsevol punt de l'hotel, i fins i tot de l'exterior del mateix, es poden visualitzar les imatges, així com gestionar alarmes i detectar moviments no autoritzats en zones restringides. \n\n
    Addicionalment, es crea un patró de comportament perquè el sistema de gravació i visionat funcioni de la forma més autònoma possible, actuant en funció dels esdeveniments ocorreguts.`,
    architect: 'Olson Kundig',
    year: '2023',
    contractor: 'Dowbuilt',
    moreImages: false,
  },
  {
    id: 6,
    title: 'Leitat Technological Center',
    location: 'Barcelona, ES',
    imageUrl: '/img/project/project-img-6.jpg',
    imageColage: [],
    link: '#',
    description: `En aquest projecte hem implementat l'aplicació ID Access que permet gestionar l'accés i presència de persones a les distines seus de l'empresa Leitat. Integrada amb els terminals Suprema, ID Access verifica la validesa d' un usuari o acreditació per a la seva posterior autorització de pas. Els usuaris i visitants poden accedir a les zones acreditades mitjançant
                  una targeta RFID o a partir de la seva identificació biomètrica. \n\n A més, ID Access permet establir diferents nivells de seguretat delimitats per zones i espais de treball, i una restricció horària en els terminals d'accés. \n\n En la implementació d'aquesta solució s'han utilitzat terminals Suprema XPass, BioLite Net i el programari ID Access.`,
    architect: 'Olson Kundig',
    year: '2023',
    contractor: 'Dowbuilt',
    moreImages: false,
  },
  {
    id: 7,
    title: 'Grupo Aviación y Náutica SL',
    location: 'Catalunya, ES',
    imageUrl: '/img/project/project-img-7.jpg',
    imageColage: [],
    link: '#',
    description: `L' objectiu final d' aquest projecte és la gestió integral de les avionetes, vols i clients de l' empresa. \n\n El projecte consta d' un terminal amb pantalla tàctil i lector de targetes de proximitat per realitzar l' inici i la fi dels vols de cada client, i d' una aplicació client per a la gestió de totes les dades. \n\n
                  Quan un client s' identifica amb la seva targeta, pot seleccionar una avioneta disponible segons el seu permís de vol i disponibilitat, i segons el saldo del client li permet o no iniciar el vol. En finalitzar el vol, el mateix client o l' instructor poden finalitzar el vol identificant-se amb la seva targeta, indicant les dades del trajecte realitzat. \n\n
                  Amb l' aplicació client l' administrador pot donar d' alta nous clients, avionetes, modificar el saldo d' un client i realitzar llistats completament filtrables dels vols dels clients o de les càrregues de saldo. \n\nEl sistema funciona tant en la seva modalitat online com offline, la qual cosa permet iniciar i finalitzar el vol independentment 
                  de l' estat de la connexió a la xarxa, i un cop recuperada la pèrdua de connexió s' actualitzen les dades automàticament. \n\n L'aplicació compta amb diferents nivells de privilegis completament personalitzables, per permetre des de privilegis d'administrador que permet gestionar totes les dades i realitzar llistats, fins a perfils més restringits que 
                  només permeten realitzar cert tipus d'operacions.`,
    architect: 'Olson Kundig',
    year: '2023',
    contractor: 'Dowbuilt',
    moreImages: false,
  },
  {
    id: 8,
    title: 'Centros Veteralia',
    location: 'Catalunya, ES',
    imageUrl: '/img/project/project-img-8.jpg',
    imageColage: [],
    link: '#',
    description: `El projecte es basa en un sistema de fidelització amb el lliurament d' una targeta personalitzada als clients. L' ús del servei proporciona un increment dels punts acumulats en el compte personal de cada client, que podran ser bescanviats en els centres Veteralia. \n\n
                  El programari Mascota Veteralia es basa en una interfície gràfica intuïtiva per accedir a cadascun dels diferents mòduls o pantalles. El client, en comprar un producte o en contractar algun servei de Veteralia, entrega la targeta de fidelització per procedir a la seva lectura i acumular punts. \n\n
                  Els registres que es produeixen a totes les seus i entitats es tracten de forma centralitzada, on a més hi ha un servei de mailing d' atenció i informació al client. \n\nEn la implementació d'aquest projecte s'ha desenvolupat un programari específic anomenat Mascota Veteralia, i com a lector de targetes s'empra la Uniform MSR213V.`,
    architect: 'Olson Kundig',
    year: '2023',
    contractor: 'Dowbuilt',
    moreImages: false,
  },
  {
    id: 9,
    title: 'Mútua de Terrassa',
    location: 'Catalunya, ES',
    imageUrl: '/img/project/project-img-4.jpg',
    imageColage: [],
    link: '#',
    description: `Hem instal·lat un sistema de control d'accés per evitar el pas de personal no autoritzat en àrees restringides. S'han instal·lat 15 terminals d'accés de proximitat i biomètrics distribuïts per les diferents àrees hospitalàries de Mútua de Terrassa, millorant així la seguretat d'un edifici obert al públic.\n\n
                  Aquest sistema valida als usuaris registrats en els terminals, permetent o denegant l' accés a les esmentes zones i facilitant posteriorment l' explotació de dades d' accés. \n\n
                  Aquesta instal·lació també permet controlar l'accés al menjador, autoritzant l'obtenció d'un tiquet per menjar i, mitjançant el programari de gestió, especificar si aquest tiquet està inclòs per contracte o cal descomptar-lo de la nòmina, per exemple. \n\n
                  S'han utilitzat terminals de proximitat i biomètrics Nitgen Fingkey, Kimaldi Kreta Prox, impressores Hengsler i programari ID Access.`,
    architect: 'Olson Kundig',
    year: '2023',
    contractor: 'Dowbuilt',
    moreImages: false,
  },
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleToggleProjects = () => {
    setShowMore(!showMore);
  };

  const handleImageClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const displayedProjects = showMore ? projects.length : 6;

  return (
    <section className="flex flex-col items-center p-12 pt-0 w-full">
      <div className="flex flex-wrap justify-center w-full">
        {projects.slice(0, displayedProjects).map((project) => (
          <div key={project.id} className="flex flex-col items-center w-full md:w-1/3 p-3 mb-10">
            <a onClick={() => handleImageClick(project)} className="block w-full h-full cursor-pointer">
              <div className="relative w-full h-96">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className='object-cover'
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-start">{project.title}</h3>
              <p className="text-gray-500 text-start">{project.location}</p>
            </a>
          </div>
        ))}
      </div>

      {projects.length > 6 && (
        <button
          onClick={handleToggleProjects}
          className="flex items-center px-4 py-2 text-white bg-orange-600 rounded-full hover:bg-orange-700 transition duration-200"
        >
          {showMore ? (
            <>Veure menys <FaArrowUp className="ml-2" /></>
          ) : (
            <>Veure més <FaArrowDown className="ml-2" /></>
          )}
        </button>
      )}

      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;