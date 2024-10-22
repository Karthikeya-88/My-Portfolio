import { IoIosNavigate } from "react-icons/io";
import { IoNavigateSharp } from "react-icons/io5";
import { MdEmail, MdOutlineCall } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";
import { LiaCopyrightSolid } from "react-icons/lia";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="ultimate-container container-fluid d-flex flex-column justify-content-center align-items-center">
        <nav className="nav-container navbar bg-body-tertiary fixed-top navbar-white">
          <div className="container-fluid">
            <h1
              className="my-name name-reveal"
              style={{ fontFamily: "Perpetua" }}
            >
              <span data-text="Karthikeya">Karthikeya </span>
              <span data-text="Doosa">Doosa</span>
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Hey there,
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link active"
                      href="#aboutMe"
                      id="navbar-about"
                    >
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#myResume"
                      id="navbar-resume"
                    >
                      Check My Resume
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      aria-current="page"
                      href="#mySkills"
                      id="navbar-skills"
                    >
                      My Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      aria-current="page"
                      href="#myExperience"
                      id="navbar-skills"
                    >
                      Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#myProjects"
                      id="navbar-projects"
                    >
                      My Projects
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#hireMe"
                      id="navbar-hire-me"
                    >
                      Want to Hire me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="mb-1 pt-5 mt-4">
          <h2 className="text-center text-info">Expertise Offered</h2>
          <div className="expertise-types m-1" style={{ fontFamily: "Roboto" }}>
            <p className="text-reveal mt-1">
              <span data-text="Full">Full </span>
              <span data-text="Stack">Stack </span>
              <span data-text="Development">Development</span>
            </p>
            <p className="text-reveal">
              <span data-text="Full">Full </span>
              <span data-text="Stack">Stack </span>
              <span data-text="Engineer">Engineer</span>
            </p>
          </div>
          <div className="expertise-types m-1" style={{ fontFamily: "Roboto" }}>
            <p className="text-reveal">
              <span data-text="Back">Back </span>
              <span data-text="End">End </span>
              <span data-text="Development">Development</span>
            </p>
            <p className="text-reveal">
              <span data-text="Front">Front </span>
              <span data-text="End">End </span>
              <span data-text="Development">Development</span>
            </p>
          </div>
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div className="about-me-container mb-2 p-2 rounded" id="aboutMe">
          <h2 className="text-center text-info">About Me</h2>
          <ul className="about-me-ul m-1">
            <li>
              I'm Karthikeya from Karimnagar, Telangana. I have recently
              Graduated with a Master of Business Administration (MBA) degree,
              majoring in Human Resource Management, in 2024 and Under Graduated
              with a Bachelor of Commerce (B.Com) degree in{" "}
              <b style={{ fontFamily: "Perpetua" }}>
                Computer Applications (CA)
              </b>{" "}
              in 2022, earning a commendable GPA of 7.0
            </li>
            <li>
              Through my expertise in programming languages and in-depth
              knowledge of frontend development, I have developed strong
              problem-solving abilities. This expertise has fueled{" "}
              <b style={{ fontFamily: "Perpetua" }}>
                {" "}
                my enthusiasm for technological innovation
              </b>{" "}
              and guided my{" "}
              <b style={{ fontFamily: "Perpetua" }}>
                deliberate decision to pursue
              </b>{" "}
              a career in software development
            </li>
            <li>
              Upon familiarizing myself with NxtWave's programming and
              curriculum, I initiated my professional development in full-stack
              development, signaling the start of my transformative journey in
              this discipline
            </li>
            <li>
              Now, I'm a Dedicated{" "}
              <b style={{ fontFamily: "Perpetua" }}>MERN stack developer</b>{" "}
              with a strong foundation in Node.js, React.js, and MongoDB.
              Skilled in designing and implementing efficient database
              solutions, developing scalable server-side architectures, and
              crafting responsive frontend interfaces
            </li>
            <li>
              <b style={{ fontFamily: "Perpetua" }}>Searching for </b> a Junior
              Developer/Engineer role in Full Stack, Backend, or Frontend
              development where I can apply my skills, drive technological
              advancements, and collaborate with a dynamic team
            </li>
          </ul>
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div
          className="mb-2 p-4 text-dark rounded border border-light"
          id="myResume"
          style={{ backgroundColor: "#e7e5e4", width: "94vw" }}
        >
          <h2 className="text-center text-info">My Resume</h2>
          <h6
            className="m-4 resume-text text-center"
            style={{ fontWeight: "600" }}
          >
            Here is a link to My Resume:{" "}
            <a
              href="https://drive.google.com/file/d/1f3c-z-CBXr1zy70OBdo7p0eS555liY0M/view?usp=sharing"
              className="resume-el"
            >
              <IoIosNavigate />
            </a>
          </h6>
          <div className="text-center pb-2">
            <marquee
              behavior="scroll"
              direction="right"
              scrollamount="8"
              width="40%"
            >
              <h4 className="text-center text-warning open-to-relocation">
                Open to Relocation
              </h4>
            </marquee>
          </div>
          <div>
            <h4 className="mb-3 text-center">
              I'm flexible regarding job types:
            </h4>
            <div className="open-to-job-type">
              <p>Freelance</p>
              <p>Full Time</p>
              <p>Temporary</p>
            </div>
            <div className="open-to-job-type">
              <p>Part-time</p>
              <p>Contract</p>
              <p>Internship</p>
            </div>
          </div>
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div className="my-skills-container mb-4 p-2" id="mySkills">
          <h2 className="text-center text-info">My Skills</h2>
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img
                  src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727620556/Back-end_Development_bfh3ma.png"
                  className="d-block w-100"
                  style={{ borderRadius: "8px" }}
                  alt="Backend"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727620774/Databases_woyeqq.png"
                  className="d-block w-100"
                  style={{ borderRadius: "8px" }}
                  alt="Database"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727620964/Front-end_Development_m9qjx8.png"
                  className="d-block w-100"
                  style={{ borderRadius: "8px" }}
                  alt="Frontend"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div
          className="mb-2 p-4 text-dark rounded border border-light"
          style={{ backgroundColor: "#e7e5e4", width: "94vw" }}
          id="myExperience"
        >
          <h2 className="text-center text-info">Learning Experience</h2>
          <div className="d-flex justify-content-between text-center pl-4 pr-4 p-3 w-100">
            <h5 className="d-block d-sm-block d-md-none d-lg-none d-xl-none experience-header">
              <b>MERN Stack Developer</b>
            </h5>
            <h5 className="d-none d-md-block d-lg-block d-xl-block experience-header">
              <b>MERN Stack Developer - Nxtwave</b>
            </h5>
            <h5 className="d-block d-sm-block d-md-none d-lg-none d-xl-none experience-header">
              <b>2023 - 2024</b>
            </h5>
            <h5 className="d-none d-md-block d-lg-block d-xl-block experience-header">
              <b>May 2023 - July 2024</b>
            </h5>
          </div>
          <ul style={{ listStyle: "disc" }} className="text-black">
            <li className="experience-li">
              Developed high-performance MERN stack applications, integrating
              JavaScript, Node.js, React.js, and MongoDB, with proficiency in
              Programming with Python, SQLite, HTML & CSS.
            </li>
            <li className="experience-li">
              Enhanced my problem-solving skills with programming languages and
              expanded my expertise in backend development. Successfully
              designed and implemented efficient database solutions and
              responsive frontend interfaces, demonstrating expertise in backend
              development and problem-solving.{" "}
            </li>
          </ul>
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div className="mb-2 p-4" id="myProjects">
          <h2 className="text-center text-info">My Projects</h2>
          <div>
            <h4 className="ml-4 mt-2 project-title">
              <span
                style={{
                  fontFamily: "Bree Serif",
                  color: "lawngreen",
                }}
              >
                Node JS Project:
              </span>{" "}
              Twitter Assignment{" "}
              <span>
                <a href="https://github.com/Karthikeya-88/Tweet">
                  <IoNavigateSharp />
                </a>
              </span>{" "}
            </h4>
            <ul className="projects-ul">
              <li>
                Structured a scalable Node.js backend application for a
                Twitter-inspired social media platform, featuring a
                comprehensive suite of RESTful APIs to support essential
                functionalities, including secure user authentication and
                registration using Passport.js and JSON Web Tokens, tweet
                creation, follower management, and relationship tracking
              </li>
              <li>
                This application was designed and developed with scalability,
                security, and efficiency in mind, serving as a testament to
                expertise in backend development, API design, and software
                architecture. By leveraging best practices and industry-standard
                technologies, the application ensures seamless horizontal
                scaling to accommodate exponential growth, robust security
                measures to safeguard sensitive user data, and optimized
                performance to deliver lightning-fast responses
              </li>
              <li>
                {" "}
                Furthermore, the application's modular design, clean codebase,
                and comprehensive documentation facilitate maintainability,
                readability, and collaborative development. Through this
                project, proficiency in backend development, API design, and
                software architecture is showcased, demonstrating the ability to
                craft complex systems that prioritize performance, reliability,
                and user experience
              </li>
              <li>
                Executed security measures by integrating industry-standard
                security libraries, including bcrypt for password encryption and
                JSON Web Token (JWT) middleware. To ensure the integrity and
                confidentiality of user data through secure authentication and
                authorization protocols, thereby safeguarding sensitive user
                information and preventing unauthorized access
              </li>
            </ul>
          </div>
          <div>
            <h4 className="ml-4 mt-2 project-title">
              <span style={{ fontFamily: "Bree Serif", color: "lawngreen" }}>
                Node JS Project:
              </span>{" "}
              Todo Application{" "}
              <span>
                <a href="https://github.com/Karthikeya-88/Todo-Application.git">
                  <IoNavigateSharp />
                </a>
              </span>{" "}
            </h4>
            <ul className="projects-ul">
              <li>
                Developed a scalable and efficient Todo List API utilizing
                Node.js and Express.js, providing a comprehensive suite of
                functionalities to manage todos seamlessly. Specifically, I
                designed and implemented API endpoints for creating, reading,
                updating, and deleting todos, ensuring seamless data
                manipulation and retrieval
              </li>
              <li>
                The API features include creating new todos with optional due
                dates and priorities, retrieving all or specific todos, updating
                todo status and details, and deleting individual or multiple
                todos
              </li>
              <li>
                Implemented filtering and sorting capabilities by status,
                priority, category, and due date. Designed and integrated robust
                validation and error handling mechanisms
              </li>
              <li>
                Leveraged JSON data storage for scalable todo management,
                ensuring secure and efficient API performance
              </li>
            </ul>
          </div>
          <div>
            <h4 className="ml-4 mt-2 project-title">
              <span style={{ fontFamily: "Bree Serif", color: "lawngreen" }}>
                Node JS Project:
              </span>{" "}
              Authentication{" "}
              <span>
                <a href="https://github.com/Karthikeya-88/Node-Authentication.git">
                  <IoNavigateSharp />
                </a>
              </span>{" "}
            </h4>
            <ul className="projects-ul">
              <li>
                Designed and developed a RESTful API using Node.js, Express.js,
                and JavaScript for user authentication, registration, and
                password management. Implemented robust validation, error
                handling, and security measures to ensure secure data storage
                and transmission
              </li>
              <li>
                User registration with unique username, name, password, gender,
                and location. Login functionality with username and password
                authentication
              </li>
              <li>
                Password change feature with old password verification and new
                password validation - Validation for username uniqueness,
                password length, and incorrect credentials
              </li>
              <li>
                Handled errors with custom status codes and descriptive error
                messages
              </li>
            </ul>
          </div>
          <div className="project-container">
            <div>
              <h4 className="ml-4 mt-2 project-title">
                <span style={{ fontFamily: "Bree Serif", color: "orange" }}>
                  React JS App:
                </span>{" "}
                Personal Cosmos (My Own React Project){" "}
              </h4>
              <ul className="react-project-ul">
                <li>
                  I am delighted to introduce Personal Cosmos. This presents a
                  quartet of navigable routes: the welcoming home interface, the
                  limited literary expanse of books, the sleek and efficient
                  cart system, and the enlightening about section, which offers
                  a glimpse into the project's inception and purpose{" "}
                </li>
                <li>
                  I authored a comprehensive JSON data set to support the
                  project, I utilized Mocky to generate a simulated API for the
                  project. The API serves as the foundation for the project's
                  data-driven functionality. The API enables seamless
                  integration of data across the route{" "}
                </li>
                <li>
                  Used media queries for responsiveness in various devices,
                  enhanced and achieved a search functionality to boost user
                  experience. Incorporated React Spinners Puff Loader component
                  to enhance the user interface with a lively and engaging
                  loading animation
                </li>
                <li>
                  Developed and blended a popup feature to display additional
                  book data, providing users with more detailed information.
                  Utilized React Context to manage the cart list, enabling
                  efficient state management across components. Applied "add to
                  cart" functionality using React Context, allowing users to
                  seamlessly add items to their cart list. Additionally, "remove
                  from cart" functionality added using React Context, enabling
                  users to easily remove items from their cart list. Deployed
                  the website using Vercel
                </li>
                <li>Spanned a 6-Day development period</li>
              </ul>
            </div>
            <div>
              <marquee behavior="slide" scrollamount="4" width="380px">
                <a href="https://karthikeya-personal-cosmos-6fl3.vercel.app/">
                  <img
                    src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727520804/Screenshot_1072_f7m2hk.png"
                    alt="Project-1"
                    className="project-image"
                  />
                </a>
              </marquee>
            </div>
          </div>
          <div className="project-container">
            <div>
              <h4 className="ml-4 mt-2 project-title">
                <span style={{ fontFamily: "Bree Serif", color: "orange" }}>
                  React JS App:
                </span>{" "}
                Covid19 Dashboard
              </h4>
              <ul className="react-project-ul">
                <li>
                  I conceptualized and developed a comprehensive COVID-19
                  tracking platform for India, providing in-depth state-level
                  data analysis and actionable insights to support informed
                  decision-making
                </li>
                <li>
                  The platform offers a robust suite of features, including
                  real-time case tracking, demographic analysis, and geographic
                  information system (GIS) mapping to visualize the spread of
                  the virus across different regions
                </li>
                <li>
                  Utilizing React Router and Recharts, I crafted and developed
                  an captivating and interactive user interface. This intuitive
                  dashboard showcases dynamic visualizations, providing
                  real-time insights and enhancing user engagement
                </li>
                <li>
                  Translating Figma designs into responsive React components
                  ensured a superior user experience. This platform supports
                  informed decision-making and promotes public awareness of
                  COVID-19
                </li>
                <li>Had a development duration of 16 days</li>
              </ul>
            </div>
            <div>
              <marquee behavior="slide" scrollamount="4" width="380px">
                <a href="https://karthikcoviddb.ccbp.tech/">
                  <img
                    src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727588556/Screenshot_1076_ljplim.png"
                    alt="Project-2"
                    className="project-image"
                  />
                </a>
              </marquee>
            </div>
          </div>
          <div className="project-container">
            <div>
              <h4 className="ml-4 mt-2 project-title">
                <span style={{ fontFamily: "Bree Serif", color: "orange" }}>
                  React JS App:
                </span>{" "}
                Nxt Watch (YouTube Clone){" "}
              </h4>
              <ul className="react-project-ul">
                <li>
                  Composed a video streaming web application, "Nxt Watch,"
                  mirroring YouTube's core functionality, utilizing innovative
                  technologies to provide an immersive user experience, Utilized
                  Styled Components for modular, reusable UI styling
                </li>{" "}
                <li>
                  Executed authentication and authorization mechanisms
                  leveraging JSON Web Tokens (JWT) for secure user sessions.
                  Incorporated a toggleable dark mode feature, enhancing user
                  accessibility and visual appeal
                </li>
                <li>
                  Designed a responsive, four-route navigation system: - Home:
                  Showcasing a prominent banner, search functionality, and video
                  listings, Trending: Featuring trending event-based video
                  content, Gaming: Dedicated to gaming videos and shorts, Saved
                  Videos: Allowing users to save and access favorite videos
                </li>
                <li>
                  Make use of React Router for seamless client-side routing and
                  navigation. Elaborated a detailed video view component with
                  interactive features: Like/Dislike buttons and Save Video
                  functionality. Developed over 8 days, Deployed using Netlify
                </li>
                <li style={{ fontWeight: "bold" }}>
                  Username: rahul & Password: rahul@2021
                </li>
              </ul>
            </div>
            <div>
              <marquee behavior="slide" scrollamount="4" width="380px">
                <a href="https://nxt-watch-karthikeya.netlify.app/">
                  <img
                    src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727521802/Screenshot_1074_gtzcth.png"
                    alt="Project-3"
                    className="project-image ml-4"
                  />
                </a>
              </marquee>
            </div>
          </div>
          <div className="project-container">
            <div>
              <h4 className="ml-4 mt-2 project-title">
                <span style={{ fontFamily: "Bree Serif", color: "orange" }}>
                  React JS App:
                </span>{" "}
                Jobby App (Job Portal Clone){" "}
              </h4>
              <ul className="react-project-ul">
                <li>
                  Designed, developed, and launched a comprehensive job search
                  platform, Jobby App, providing a unified and intuitive user
                  experience for job seekers to explore employment opportunities
                </li>
                <li>
                  Implemented a suite of user-facing pages, including Login,
                  Home, Jobs, and Job Item Details, utilizing React components,
                  form inputs, and event handlers to create a seamless and
                  interactive user experience, ensuring efficient user
                  authentication, data capture, and job search functionality
                </li>
                <li>
                  Deployed a comprehensive security solution to protect user
                  data, utilizing JWT tokens for secure authentication, REST API
                  calls for encrypted data exchange, and local storage security
                  measures to prevent unauthorized access, thereby ensuring the
                  highest level of user data protection
                </li>
                <li>
                  {" "}
                  Implemented secure client-side routing using React Router,
                  ensuring protected routes and persistent login state
                  management, while preventing unauthorized access. Spanned a
                  5-Day development period
                </li>
                <li style={{ fontWeight: "bold" }}>
                  Username: henry & Password: henry_the_developer
                </li>
              </ul>
            </div>
            <div>
              <marquee behavior="slide" scrollamount="4" width="380px">
                <a href="https://karthijobbyapp.ccbp.tech/">
                  <img
                    src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727595871/Screenshot_1077_jlso4c.png"
                    alt="Project-4"
                    className="project-image"
                  />
                </a>
              </marquee>
            </div>
          </div>
          <div className="project-container">
            <div>
              <h4 className="ml-4 mt-2 project-title">
                <span style={{ fontFamily: "Bree Serif", color: "orange" }}>
                  React JS App:
                </span>{" "}
                Nxt Trendz (E Commerce Clone - Amazon, Flipkart){" "}
              </h4>
              <ul className="react-project-ul">
                <li>
                  Created and established an e-commerce platform, leveraging
                  inspiration from industry leaders Amazon and Flipkart, to
                  deliver a seamless and intuitive online shopping experience
                </li>
                <li>
                  Developed and integrated robust page components for User
                  Authentication (Login), Product Catalog (Products), and
                  Product Information (Product Details) utilizing React Router
                  for navigation, and form inputs for data capture, ensuring a
                  seamless user experience
                </li>
                <li>
                  Instigated security measures to safeguard user data, utilizing
                  JSON Web Tokens (JWT) for authentication and authorization,
                  RESTful API calls for secure data exchange, and local storage
                  encryption to protect sensitive information, ensuring the
                  confidentiality, integrity, and availability of user data. Had
                  a development duration of 12 days
                </li>
                <li style={{ fontWeight: "bold" }}>
                  Username: henry & Password: henry_the_developer
                </li>
              </ul>
            </div>
            <div>
              <marquee behavior="slide" scrollamount="4" width="380px">
                <a href="https://karthiknxtrends.ccbp.tech/">
                  <img
                    src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727522986/Screenshot_1075_wmdmic.png"
                    alt="Pr-5"
                    className="project-image"
                  />
                </a>
              </marquee>
            </div>
          </div>
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div
          className="want-to-hire-container mb-2 p-2 pb-1"
          id="hireMe"
          style={{ backgroundColor: "#e7e5e4" }}
        >
          <h2 className="text-center text-info">Want to Hire Me</h2>
          <div className="button-icons-container mt-4">
            <button type="button" className="button-icons">
              <a className="anchor-el" href="tel:9182318580">
                <MdOutlineCall />
              </a>
            </button>
            <button type="button" className="button-icons">
              <a className="anchor-el" href="mailto:dkarthikeya888@gmail.com">
                <MdEmail />
              </a>
            </button>
            <button type="button" className="button-icons">
              <a
                className="anchor-el"
                href="http://www.linkedin.com/in/karthikeya-doosa-210a42244"
              >
                <BiLogoLinkedinSquare />
              </a>
            </button>
            <button type="button" className="button-icons">
              <a className="anchor-el" href="https://github.com/Karthikeya-88">
                <VscGithub />
              </a>
            </button>
          </div>
        </div>
        <div className="text-center text-white m-0 p-0 d-flex justify-content-center align-items-center">
          <p style={{ fontFamily: "Bree serif" }}>
            Copyright{" "}
            <span>
              <LiaCopyrightSolid />{" "}
            </span>{" "}
            2024 Karthikeya. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
