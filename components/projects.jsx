import React from 'react';

const ProjectsGrid = () => {
  const projects = [
    { title: 'PanicStudy', image: './imgs/panic-study.jpg' },
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
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-72 h-64 object-cover mb-2"
                />
                <span>{project.title}</span>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default ProjectsGrid;