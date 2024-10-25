"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Modal } from 'antd';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
  link: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Sede de la Generalitat en Girona',
    location: 'Barcelona, ES',
    imageUrl: '/img/project/project-img-1.jpg',
    link: '#',
    description: `Recientemente hemos implementado un sistema de control de accesos para gestionar y optimizar el uso de las diferentes salas del edificio. Para realizar este proyecto hemos instalado más de 30 cerraduras electrónicas comunicadas con nuestro software de gestión IDPresence.
                  Toda esta infraestructura estará vinculada al sistema de reserva que permitirá al usuario poder identificarse dentro del intranet del edificio y poder de hacer la reserva y cuando le sea aceptada podrá acceder a la sala reservada a la hora consignada con el acceso con tarjeta identificativa RFID.
                  A continuación podemos ver un esquema de la tecnología implementada en el sistema.`
  },
  {
    id: 2,
    title: 'Palau Marc de la Generalitat',
    location: 'Barcelona, ES',
    imageUrl: '/img/project/project-img-2.jpg',
    link: '#',
    description: `Descripción del proyecto Palau Marc de la Generalitat. Aquí puedes incluir detalles específicos sobre el proyecto...`
  },
  {
    id: 3,
    title: 'Institut Nacional d’Educació Física',
    location: 'Barcelona, ES',
    imageUrl: '/img/project/project-img-3.jpg',
    link: '#',
    description: `Descripción del proyecto Institut Nacional d’Educació Física. Aquí puedes incluir detalles específicos sobre el proyecto...`
  },
  {
    id: 4,
    title: 'Departament d’Agricultura de la Generalitat',
    location: 'Catalunya, ES',
    imageUrl: '/img/project/project-img-4.jpg',
    link: '#',
    description: `Descripción del proyecto Departament d’Agricultura de la Generalitat. Aquí puedes incluir detalles específicos sobre el proyecto...`
  },
  {
    id: 5,
    title: 'Recinto Hotelero del Grupo Nadal.',
    location: 'Palo Alto, CA',
    imageUrl: '/img/project/project-img-5.jpg',
    link: '#',
    description: `Descripción del proyecto Recinto Hotelero del Grupo Nadal. Aquí puedes incluir detalles específicos sobre el proyecto...`
  },
  {
    id: 6,
    title: 'Leitat Technological Center',
    location: 'Barcelona, ES',
    imageUrl: '/img/project/project-img-6.jpg',
    link: '#',
    description: `Descripción del proyecto Leitat Technological Center. Aquí puedes incluir detalles específicos sobre el proyecto...`
  },
  {
    id: 7,
    title: 'Grupo Aviación y Náutica SL',
    location: 'Catalunya, ES',
    imageUrl: '/img/project/project-img-7.jpg',
    link: '#',
    description: `Descripción del proyecto Grupo Aviación y Náutica SL. Aquí puedes incluir detalles específicos sobre el proyecto...`
  },
  {
    id: 8,
    title: 'Centros Veteralia',
    location: 'Catalunya, ES',
    imageUrl: '/img/project/project-img-8.jpg',
    link: '#',
    description: `Descripción del proyecto Centros Veteralia. Aquí puedes incluir detalles específicos sobre el proyecto...`
  },
  {
    id: 9,
    title: 'Sedes del Grupo Werfen',
    location: 'Catalunya, ES',
    imageUrl: '/img/project/project-img-9.jpg',
    link: '#',
    description: `Descripción del proyecto Sedes del Grupo Werfen. Aquí puedes incluir detalles específicos sobre el proyecto...`
  }
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
    <section className="flex flex-col items-center p-5 w-full">
      <div className="flex flex-wrap justify-center w-full">
        {projects.slice(0, displayedProjects).map((project) => (
          <div key={project.id} className="flex flex-col items-center w-full md:w-1/3 p-3 mb-10">
            <a onClick={() => handleImageClick(project)} className="block w-full h-full cursor-pointer">
              <div className="relative w-full h-96">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
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
            <>Ver menos <FaArrowUp className="ml-2" /></>
          ) : (
            <>Ver más <FaArrowDown className="ml-2" /></>
          )}
        </button>
      )}

      <Modal
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        width={1300}
      >
        {selectedProject && (
          <div className="flex flex-col md:flex-row items-start h-[500px]">
            <div className="flex-1 md:max-w-lg mb-4 md:mb-0">
              <div className="relative w-full h-96">
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex-1 md:pl-6">
              <h1 className="mt-4 text-4xl font-bold">{selectedProject.title}</h1>
              <div className="mt-4 space-y-2">
                <p><strong>LOCATION:</strong> {selectedProject.location}</p>
                <p><strong>LOCATION:</strong> {selectedProject.location}</p>
              </div>

              <blockquote className="mt-6 italic border-l-4 border-gray-500 pl-4 h-full">
                <p className='text-base'>
                  {selectedProject.description}
                </p>
              </blockquote>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
