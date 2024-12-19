import React, { useState } from "react";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  const handleShowModal = (title, description) => {
    setModalContent({ title, description });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent({ title: "", description: "" });
  };

  const services = [
    {
      title: "Web Development",
      description:
        "Get the best website and application development services here.",
      icon: "bx bxl-dribbble",
    },
    {
      title: "Graphics Designing",
      description:
        "Get designs, templates, CVs, flex cards, and other graphic work.",
      icon: "bx bx-file",
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your business through professional digital marketing services.",
      icon: "bx bx-tachometer",
    },
    {
      title: "UI/UX Design",
      description:
        "Create 3D and modern UI/UX designs for your website or application.",
      icon: "bx bx-world",
    },
    {
      title: "Online Data",
      description:
        "Access 1TB of data with courses, software, and earning opportunities.",
      icon: "bx bx-slideshow",
    },
    {
      title: "Online Courses",
      description:
        "Enroll in social media marketing and development courses to boost your skills.",
      icon: "bx bx-arch",
    },
  ];

  return (
    <section
      id="services"
      className="services pt-[100px] bg-[#ecebeb] px-3 md:px-10"
    >
      <div className="container text-center mt-5">
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
              <div className="modal-header p-4 flex justify-between items-center border-b">
                <h5 className="text-lg font-bold text-center">
                  {modalContent.title}
                </h5>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-800"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body p-4">
                <p className="mt-2">{modalContent.description}</p>
              </div>
              <div className="modal-footer p-4 flex justify-end border-t">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="container md:px-20 md:py-5 rounded-md">
        <div className="section-title">
          <h2>Services</h2>
          <p>My Services</p>
        </div>
        <div className="md:grid md:grid-cols-3 grid-cols-1 gap-6 py-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="icon-box mt-4 cursor-pointer"
              onClick={() =>
                handleShowModal(service.title, service.description)
              }
            >
              <div className="icon">
                <i className={service.icon} />
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
