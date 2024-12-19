import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact py-20 md:px-10 px-3 bg-[#ecebeb] ">
      <div className="container md:px-10">
        <div className="section-title">
          <h2 className="text-semibold">Contact</h2>
          <p className="">Contact Me</p>
        </div>
        <div className=" mt-2 md:grid md:grid-cols-2 gap-4 ">
          <div className=" d-flex align-items-stretch">
            <div className="info-box bg-gray-400 flex items-center mt-5">
              <div className="icon px-3 py-2 ml-6">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div>
                <h3>My Address</h3>
                <p>Khudian khas kasur</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box flex items-center ">
              <div className="ml-5 bg-gray-400 icon px-3 py-2">
                <ion-icon name="share-social-outline" className=""></ion-icon>
              </div>
              <div>
                <h3>Social Profiles</h3>
                <div className="social-links overflow-hidden ">
                  <a
                    href="https://wa.me/923040535970"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter"
                  >
                    <ion-icon
                      className="text-[10px]"
                      name="logo-whatsapp"
                    ></ion-icon>
                  </a>
                  <a href="#" className="facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a href="#" className="instagram">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                  <a href="#" className="google-plus">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                  <a href="#" className="linkedin">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="info-box bg-gray-400 flex items-center mt-5">
              <div className="icon px-3 py-2 ml-6">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="me-20 md:mr-0">
                <h3>Email Me</h3>
                <p>websprofessor@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="info-box bg-gray-400 flex items-center mt-5">
              <div className="icon px-3 py-2 ml-6">
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <div>
                <h3>Call Me</h3>
                <p>+923040535970</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:px-10 py-10 contact-form bg-gray-600 rounded-md my-5">
          <form action="form" className="px-3">
            <h3 className="text-center text-white text-3xl pb-5">
              Contact me with Form
            </h3>
            <div className="md:flex ">
              <div className="md:w-[50%]">
                <label htmlFor="name" className="text-white">
                  Your Name
                </label>{" "}
                <br />
                <input
                  className="p-2 bg-gray-300 border border-2 border-gray-600 md:w-[500px] w-[300px] mt-1 rounded-md"
                  type="text"
                  placeholder="Name"
                  label="name"
                />
              </div>
              <div className="w-[50%]">
                <label htmlFor="name" className="text-white">
                  Your Email
                </label>{" "}
                <br />
                <input
                  className="p-2 bg-gray-300 border border-2 border-gray-600 md:w-[500px] w-[300px]  mt-1 rounded-md"
                  type="email"
                  placeholder="Email"
                  label="email"
                />
              </div>
            </div>
            <div className="w-[100%] mt-3">
              <label htmlFor="name" className="text-white">
                Subject
              </label>{" "}
              <br />
              <input
                className="p-2 bg-gray-300 border border-2 border-gray-600 md:w-[1050px] w-[300px] mt-1 rounded-md"
                type="subject"
                placeholder="Subject"
                label="Subject"
              />
            </div>
            <div className="w-[100%] mt-3">
              <label htmlFor="name" className="text-white">
                Your Message
              </label>{" "}
              <br />
              <textarea
                name="text"
                bg-gray-300
                id=""
                className="p-2 bg-gray-300 border border-2 border-gray-600 text-gray-400 text-semibold md:w-[1050px] w-[300px] mt-1 rounded-md"
              >
                Your Message
              </textarea>
            </div>
            <button className="p-3 bg-blue-700 flex text-center justify-center items-center bg-white hover-letter-space-2 hover:text-black text-semibold rounded-md mt-4 transition-all hover:bg-gray-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
