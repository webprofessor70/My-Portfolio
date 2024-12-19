import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "Web Design",
    link: "www.google.come",
    image:
      "https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png",
    description:
      "An innovative e-commerce platform with cutting-edge features.",
    description2:
      "The E-Commerce Website Project is a modern, user-friendly platform designed to facilitate online shopping with ease and efficiency. It features a responsive design, seamless navigation, and secure payment integration to enhance the shopping experience.",
  },
  {
    id: 2,
    title: "Mobile App Design",
    category: "Mobile Apps",
    link: "www.google.come",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVlS-BJv3RKMiBOLVTEv196TQvqBlAkYzRA&s",
    description: "A sleek mobile app design with intuitive user experience.",
    description2:
      "The Mobile App Design Project focuses on creating a sleek and intuitive user interface tailored for modern mobile devices. The app emphasizes user experience (UX) with smooth navigation, visually appealing layouts, and responsive design. It includes essential features like interactive screens, user authentication, and real-time functionality, ensuring seamless performance.",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Design",
    link: "www.google.come",
    image:
      "https://i.ytimg.com/vi/UqHILyzcULE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAFPX0my6jzpARnsT55vB3cpmdkcQ",
    description: "A professional portfolio website to showcase your work.",
    description2:
      "The Portfolio Website Project is a professional platform designed to showcase personal or professional achievements, projects, and skills. With a clean and modern design, this website offers a visually appealing layout that highlights key content like work samples, testimonials, and an interactive resume. It’s fully responsive, ensuring optimal viewing across all devices, and incorporates smooth animations and intuitive navigation to engage visitors.",
  },
];

const categories = ["All", "Web Design", "Mobile Apps"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="min-h-screen bg-gray-50 py-10 mt-20 pt-40">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          My Portfolio
        </h1>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-10 cursor-pointer">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover overflow-hidden transition-all cursor-pointer hover:scale-[1.1]"
                onClick={() => openModal(project)}
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h2>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">{project.category}</p>
                  {/* <a href={project.link}>Project Link</a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">
              {selectedProject.title}
            </h2>
            <p className="text-gray-600 mt-2">{selectedProject.description2}</p>
            <div className="flex justify-between pt-3">
              <p className="text-sm text-gray-500">
                {selectedProject.category}
              </p>
              <a
                className="text-sm text-semibold cursor-pointer text-blue-600"
                href={selectedProject.link}
              >
                Project Link
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
