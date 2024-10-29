import React from 'react';
import { Modal } from 'antd';
import Image from 'next/image';

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
  moreImages?: boolean; 
};

type ProjectModalProps = {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, project, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width="90vw"
      style={{ top: '50%', transform: 'translateY(-50%)', padding: 0}}
      styles={{ body: { height: '90vh', padding: 0 }}}
    >
      {project && (
        <div className="flex flex-col md:flex-row h-full">
          <div className="flex-1 p-2">
            {project.moreImages ? (
              <div className="grid grid-cols-2 gap-2 h-full">
                {project.imageColage.map((image, index) => (
                  <div key={index} className="relative w-full h-full border-2 border-gray">
                    <Image
                      src={image}
                      alt={`Collage image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative w-full h-full"> 
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className='object-cover'
                />
              </div>
            )}
          </div>
          <div className="flex-1 p-10 pb-0 bg-white overflow-auto">
            <h1 className="text-[38px] font-bold mb-6">{project.title}</h1>
            <div className="grid grid-cols-2 gap-4 text-lg">
              <div>
                <p className="font-semibold">ARQUITECTE</p>
                <p className="text-gray-600">{project.architect}</p>
                <p className="font-semibold mt-4">UBICACIÓ</p>
                <p className="text-gray-600">{project.location}</p>
              </div>
              <div>
                <p className="font-semibold">ANY</p>
                <p className="text-gray-600">{project.year}</p>
                <p className="font-semibold mt-4">GENERAL CONTRACTOR</p>
                <p className="text-gray-600">{project.contractor}</p>
              </div>
            </div>
            <blockquote className="mt-6 italic border-l-4 border-gray-400 pl-4 overflow-auto max-h-[21rem]">
              {project.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg mb-4">{paragraph}</p>
              ))}
            </blockquote>
          </div>
        </div>
      )}
    </Modal>
  );
};



export default ProjectModal;