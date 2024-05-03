import Image from 'next/image';
import React from 'react';

const ProjectsGrid = () => {
  const projects = [
    { title: 'PanicStudy', image: '/image.png', description: "A site to match student tutors with tutees programmatically"},
    { title: 'CourseGen', image: '/coursegen.png', description: "An AI-powered site to generate a course on any topic" },
  ];

  return (
    <div className='w-screen items-center flex'>
        <div className="w-full h-full flex flex-col items-center py-12">
            <div className="grid grid-cols-2 gap-20 items-center">
            {projects.map((project, index) => (
                <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-100 rounded-lg"
                >
                <div className="bg-purple-500" ><Image
                    src={project.image}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    className="w-full h-72 object-cover mb-2"
                ></Image></div>
                
                <a className="hover:text-purple-600 font-medium text-purple-500">{project.title}</a>
                <p className="text-wrap">{project.description}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default ProjectsGrid;