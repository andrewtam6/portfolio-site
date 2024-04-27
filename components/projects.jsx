import Image from 'next/image';
import React from 'react';

const ProjectsGrid = () => {
  const projects = [
    { title: 'PanicStudy', image: '/image_ps.png' },
    { title: 'Project placeholder', image: '/placeholder.jpg' },
    { title: 'Project placeholder', image: '/placeholder.jpg' },
    { title: 'Project placeholder', image: '/placeholder.jpg' },
  ];

  return (
    <div className='w-screen items-center flex'>
        <div className="w-full h-full flex flex-col items-center py-12">
            <div className="grid grid-cols-4 gap-16 items-center">
            {projects.map((project, index) => (
                <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-100 rounded-lg"
                >
                <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-72 h-64 object-cover mb-2"
                />
                <a href='https://panicstudy.com'>{project.title}</a>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default ProjectsGrid;