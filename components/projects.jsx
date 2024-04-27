import Image from 'next/image';
import React from 'react';

const ProjectsGrid = () => {
  const projects = [
    { title: 'PanicStudy', image: '/image.png', href: "https://panicstudy.com", description: "A peer-tutoring site to match student tutors with tutees algorithmically"},
    { title: 'CourseGen', image: '/course-gen.jpg', href: "https://test.com", description: "An AI-powered site to generate a course on any topic of your choosing" },
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
                <a className="hover:bg-purple-500" href={project.href}><Image
                    src={project.image}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    className="w-full h-72 object-cover mb-2"
                ></Image></a>
                
                <a className="hover:text-purple-600 font-medium text-purple-500"  href={project.href}>{project.title}</a>
                <p className="text-wrap">{project.description}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default ProjectsGrid;