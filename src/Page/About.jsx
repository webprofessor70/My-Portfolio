import React from "react";
import { SiWebmoney } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="about mt-10 pt-10 px-3 md:px-0">
      {/* ======= About Me ======= */}
      <div className="about-me container mx-auto py-10">
        <div className="section-title">
          <h2 className="text-3xl font-bold md:text-start ">About</h2>
          <p className=" text-3xl text-center md:text-start">
            LEARN MORE ABOUT ME
          </p>
        </div>
        <div className="flex flex-wrap mt-10 ">
          <div
            className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center"
            data-aos="fade-right"
          >
            <img
              src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
              className="w-3/4 rounded-lg shadow-md"
              alt="About Me"
            />
          </div>
          <div className="w-full lg:w-2/3 pt-4 lg:pt-0" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-blue-700">
              Web Developer & Designer
            </h3>
            <p className="italic text-gray-400 mt-4">
              I am a professional Web developer & Graphics UI/UX Designer. I
              have a 2 year experience in this working field and social
              gathering.
            </p>
            <div className="flex flex-wrap mt-6">
              <div className="w-full lg:w-1/2">
                <ul className="list-none space-y-5">
                  <li className="flex items-center">
                    <i className="bi bi-chevron-right text-green-500 mr-2"></i>
                    <strong>Birthday:</strong>{" "}
                    <span className="ml-2">18-04-2001</span>
                  </li>
                  <li className="flex items-center">
                    <i className="bi bi-chevron-right text-green-500 mr-2"></i>
                    <strong>Website:</strong>{" "}
                    <span className="ml-2">www.example.com</span>
                  </li>
                  <li className="flex items-center">
                    <i className="bi bi-chevron-right text-green-500 mr-2"></i>
                    <strong>Phone:</strong>{" "}
                    <span className="ml-2">+923040535970</span>
                  </li>
                  <li className="flex items-center">
                    <i className="bi bi-chevron-right text-green-500 mr-2"></i>
                    <strong>City:</strong>{" "}
                    <span className="ml-2">Kasur Punjab</span>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <ul className="list-none space-y-5">
                  <li className="flex items-center">
                    <i className="bi bi-chevron-right text-green-500 mr-2"></i>
                    <strong>Age:</strong> <span className="ml-2">23</span>
                  </li>
                  <li className="flex items-center">
                    <i className="bi bi-chevron-right text-green-500 mr-2"></i>
                    <strong>Degree:</strong> <span className="ml-2">B.A</span>
                  </li>
                  <li className="flex items-center">
                    <i className="bi bi-chevron-right text-green-500 mr-2"></i>
                    <strong>Email:</strong>{" "}
                    <span className="ml-2">websprofessor@gmail.com</span>
                  </li>
                  <li className="flex items-center">
                    <i className="bi bi-chevron-right text-green-500 mr-2"></i>
                    <strong>Freelance:</strong>{" "}
                    <span className="ml-2">Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-gray-400">
              The frontend is the part of a website or app that users interact
              with directly. It involves creating visually appealing and
              functional interfaces using languages like HTML, CSS, and
              JavaScript, often paired with frameworks like React or Vue.js. The
              backend is the behind-the-scenes engine that powers websites and
              apps. It handles server operations, databases, and application
              logic using languages like Python, Node.js, PHP, or Java. The
              backend ensures everything runs smoothly for the user.
            </p>
          </div>
        </div>
      </div>

      {/* ======= Counts ======= */}
      <div className="counts container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "happy", count: 50, label: "Happy Clients" },
            { icon: "card", count: 200, label: "Projects" },
            { icon: "time", count: 1463, label: "Hours Of Support" },
            { icon: "trophy", count: 5, label: "Awards" },
          ].map((item, index) => (
            <div
              key={index}
              className="count-box border border-gray-700  bg-white  p-6 text-center rounded-lg relative"
            >
              <ion-icon
                name={item.icon}
                style={{ color: "#FF33A1" }}
              ></ion-icon>
              <span className="text-3xl font-bold text-900 block mt-1">
                {item.count}
              </span>
              <p className="text-sm text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ======= Skills ======= */}
      <div className="skills container mx-auto py-10">
        <div className="section-title text-center">
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {[
            { skill: "HTML", value: 100 },
            { skill: "CSS", value: 90 },
            { skill: "JavaScript", value: 75 },
            { skill: "PHP", value: 80 },
            { skill: "WordPress/CMS", value: 90 },
            { skill: "Photoshop", value: 55 },
          ].map((item, index) => (
            <div
              key={index}
              className="progress relative bg-white bg-opacity-20 rounded-md h-12"
            >
              <span className="skill text-white text-sm font-semibold absolute inset-0 flex items-center px-4">
                {item.skill}{" "}
                <span className="ml-auto text-gray-400">{item.value}%</span>
              </span>
              <div
                className="progress-bar h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-md"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* ======= Interests ======= */}
      <div className="interests container mx-auto py-10 text-black">
        <div className="section-title text-center">
          <h2 className="text-3xl text-black font-bold">Interests</h2>
        </div>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-2">
          <div className="flex justify-center  items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-500 py-5 text-white rounded-md">
            <ion-icon
              name="logo-web-component"
              className="text-3xl"
              style={{ color: "#FF5733" }}
            ></ion-icon>
            <p>Web Development</p>
          </div>
          <div className="flex justify-center items-center gap-1 bg-gradient-to-r from-blue-700 to-purple-500 py-5 text-white rounded-md">
            <ion-icon
              name="code-slash-outline"
              className="text-3xl"
              style={{ color: "#33FF57" }}
            ></ion-icon>
            <p>Coding</p>
          </div>
          <div className="flex justify-center items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-800 py-5 text-white rounded-md">
            <ion-icon
              name="browsers-outline"
              className="text-3xl"
              style={{ color: "#3357FF" }}
            ></ion-icon>
            <p>Computer Management</p>
          </div>
          <div className="flex justify-center items-center gap-1 bg-gradient-to-r from-blue-900 to-purple-500 py-5 text-white rounded-md">
            <ion-icon
              name="book-outline"
              className="text-3xl"
              style={{ color: "#FF33A1" }}
            ></ion-icon>
            <p>Reading books</p>
          </div>
          <div className="flex justify-center items-center gap-1 bg-gradient-to-r from-blue-500 to-red-500 py-5 text-white rounded-md">
            <ion-icon
              name="funnel-outline"
              className="text-3xl"
              style={{ color: "#FFA833" }}
            ></ion-icon>
            <p>Develop new skills</p>
          </div>
          <div className="flex justify-center items-center gap-1 bg-gradient-to-r from-blue-500 to-red-800 py-5 text-white rounded-md">
            <ion-icon
              name="game-controller-outline"
              className="text-3xl"
              style={{ color: "#33FFF5" }}
            ></ion-icon>
            <p>Playing Games</p>
          </div>
          <div className="flex justify-center items-center gap-1 bg-gradient-to-r from-blue-500 to-yellow-500 py-5 text-white rounded-md">
            <ion-icon
              name="tablet-landscape-outline"
              className="text-3xl"
              style={{ color: "#F5FF33" }}
            ></ion-icon>
            <p>Watch new movies</p>
          </div>
          <div className="flex justify-center items-center gap-1 bg-gradient-to-r from-blue-500 to-yellow-800 py-5 text-white rounded-md">
            <ion-icon
              name="logo-youtube"
              className="text-3xl"
              style={{ color: "#FF3333" }}
            ></ion-icon>
            <p>Watch Development Tutorials</p>
          </div>
        </div>
      </div>

      {/* ======= Testimonials ======= */}
      <div className="testimonials container mx-auto py-10">
        <div className="section-title text-center">
          <h2 className="text-3xl font-bold">Testimonials</h2>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-4 py-24 mx-auto">
            <div className="md:flex  gap-1 -m-3">
              <div className="lg:w-1/4 lg:mb-0 mb-6 bg-white p-4 border border-gray-300 shadow-md rounded-md">
                <div className="h-full text-center bg-white">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-10 border border-gray-800 bg-gray-100"
                    src="https://marketplace.canva.com/EAF21qlw744/1/0/1600w/canva-blue-modern-facebook-profile-picture-mtu4sNVuKIU.jpg"
                  />
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    HOLDEN CAULFIELD
                  </h2>
                  <p className="text-gray-500">Senior Product Designer</p>
                </div>
              </div>
              <div className="lg:w-1/4 lg:mb-0 mb-6 p-4 bg-white border border-gray-300 shadow-md rounded-md">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg"
                  />
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    ALPER KAMU
                  </h2>
                  <p className="text-gray-500">UI Develeoper</p>
                </div>
              </div>
              <div className="lg:w-1/4 lg:mb-0 p-4 bg-white border border-gray-300 rounded-md shadow-md">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://marketplace.canva.com/EAFt95wfNdk/1/0/1600w/canva-purple-and-green-simple-woman-instagram-profile-picture-Vbr6GRy5Ya4.jpg"
                  />
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    HENRY LETHAM
                  </h2>
                  <p className="text-gray-500">CTO</p>
                </div>
              </div>
              <div className="lg:w-1/4 lg:mb-0 p-4 bg-white border  border-gray-300 rounded-md shadow-md">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-900 bg-gray-100"
                    src="https://marketplace.canva.com/EAFuxWeKWeY/2/0/1600w/canva-blue-and-white-simple-man-linkedin-profile-picture-UIlH4IkY1AY.jpg"
                  />
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    HENRY LETHAM
                  </h2>
                  <p className="text-gray-500">CTO</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
