"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: '/work/fh.png',
    category: "Full Stack",
    link: "https://fh-frontend-steel.vercel.app/",
    name: "F&H Internationals",
    description: 'Serving customers through parcels delivery all over Pakistan and abroad',
    github: 'https://github.com/HamizMuzaffer/nextjs-full-stack.git'
  },
  {
    image: "/work/msytry.jpg",
    category: "Full Stack",
    link: "https://mystry-murex.vercel.app/",
    name: "Mystery Message",
    description:
      "An anonymous message sending app built using next js and MongoDB as a database",
    github: "https://github.com/HamizMuzaffer/nextjs-full-stack.git",
  },
  {
    image: "/work/smit.png",
    category: "Full Stack",
    link: "https://smit-student-portal.vercel.app/",
    name: "SMIT Student Portal",
    description:
      "A student portal website made using MERN stack with amazing features",
    github:
      "https://github.com/HamizMuzaffer/SMIT-Assignment-Submission-Portal.git",
  },
  {
    image: "/work/node.png",
    category: "Node Js",
    link: "http://node-blog-env-1.eba-3qpif8kf.ap-south-1.elasticbeanstalk.com/#",
    name: "Node Blog",
    description:
      "A service side blog writing app made using EJS for server side pages and MongoDB as a database",
    github: "",
  },
  {
    image: "/work/node.png",
    category: "Node Js",
    link: "https://github.com/HamizMuzaffer/URL-Shortener.git",
    name: "URL Shortener",
    description: "A custom URL shortener made using NodeJs",
    github: "https://github.com/HamizMuzaffer/URL-Shortener.git",
  },
  {
    image: "/work/agency.png",
    category: "Next Js",
    link: "https://hamiz.vercel.app/",
    name: "Digital Agency",
    description: "A digital agency UI with PWA integration",
    github: "",
  },

  {
    image: "/work/Vervestyle.png",
    category: "HTML,CSS",
    link: "https://hamizmuzaffer.github.io/ClothingStore-Vervestyle/",
    name: "VerveStyle Clothing",
    description: "A Basic UI for a clothing website built using CSS",
    github: "https://github.com/HamizMuzaffer/ClothingStore-Vervestyle",
  },
  {
    image: "/work/wordwise.png",
    category: "HTML,CSS",
    link: "https://hamizmuzaffer.github.io/WordWise/",
    name: "WordWise",
    description: "A Landing page UI for a online book reading platform",
    github: "https://github.com/HamizMuzaffer/WordWise.git",
  },
  {
    image: "/work/pepsi.png",
    category: "HTML,CSS",
    link: "https://hamizmuzaffer.github.io/Pepsi-Clone/",
    name: "Pepsi Website Clone",
    description: "A UI clone for pepsi website build using HTML and CSS",
    github: "https://github.com/HamizMuzaffer/Pepsi-Clone.git",
  },
  {
    image: "/work/rejouice.png",
    category: "HTML,CSS",
    link: "https://hamizmuzaffer.github.io/Rejouice-Clone/",
    name: "Rejouice Website",
    description:
      "An Animated Website built using CSS and JS with the integration of GSAP and locomotive scroll",
    github: "https://github.com/HamizMuzaffer/Rejouice-Clone.git",
  },
  {
    image: "/work/portfolio.png",
    category: "HTML,CSS",
    link: "https://umairahmedportfolio.netlify.app/",
    name: "Video Editing Porfolio",
    description:
      "A video editing porflio Site built using Locomotive scroll and swiper js",
    github: "https://github.com/HamizMuzaffer/umairbashir.git",
  },
  {
    image: "/work/umair.png",
    category: "HTML,CSS",
    link: "https://umairbashir-henna.vercel.app/",
    name: "Portfolio Site",
    description: "A video editing portfolio site built using HTML,CSS",
    github: "https://github.com/HamizMuzaffer/UmairWebsite.git",
  },
  {
    image: "/work/stopwatch.png",
    category: "JavaScript",
    link: "https://hamizmuzaffer.github.io/StopWatch-Js/",
    name: "Stopwatch",
    description:
      "A stopwatch with reset and pause feature for user built using vanilla JS",
    github: "https://github.com/HamizMuzaffer/StopWatch-Js.git",
  },
  {
    image: "/work/Todo.png",
    category: "JavaScript",
    link: "https://hamizmuzaffer.github.io/To-Do-App/",
    name: "Todo App",
    description: "A JavaScript todo app with feature of edit and delete",
    github: "https://hamizmuzaffer.github.io/To-Do-App/",
  },
  {
    image: "/work/calculator.png",
    category: "JavaScript",
    link: "https://hamizmuzaffer.github.io/Calculator-App/",
    name: "Calculator",
    description:
      "A JavaScript calculator with all arithmetic operations enabled",
    github: "https://hamizmuzaffer.github.io/Calculator-App/",
  },
  {
    image: "/work/airport.png",
    category: "JAVA",
    link: "https://github.com/HamizMuzaffer/Airport-Management.git",
    name: "Airport Management System",
    description:
      "Flight management system, developed through Java by integrating Java Swing library. It completely works on the concept of Object Oriented Programming.",
    github: "https://github.com/HamizMuzaffer/Airport-Management.git",
  },
  {
    image: "/work/codeweb.png",
    category: "JavaScript",
    link: "https://hamizmuzaffer.github.io/CodeWeb/",
    name: "CodeWeb",
    description:
      "A complete blog writing app made using JavaScript and Firebase with multiple features including search,write and edit and authorization",
    github: "https://github.com/HamizMuzaffer/CodeWeb.git",
  },
  {
    image: "/work/prostack.png",
    category: "JavaScript",
    link: "https://hamizmuzaffer.github.io/ProStack-WebApp/",
    name: "Prostack Web",
    description: "Tech Blogs and query solution website made using Firebase",
    github: "https://github.com/HamizMuzaffer/ProStack-WebApp.git",
  },
  {
    image: "/work/react-todo.png",
    category: "React Js",
    link: "https://todo-chi-mauve.vercel.app/",
    name: "TODO App",
    description:
      "A react todo app with integration of redux toolkit for state manangement",
    github: "https://github.com/HamizMuzaffer/react-todo.git",
  },
  {
    image: "/work/password-changer.png",
    category: "React Js",
    link: "https://password-generator-one-wheat-85.vercel.app/",
    name: "Password Generator",
    description:
      "A random password generator made using react hooks like useRef and useEffect",
    github: "https://password-generator-one-wheat-85.vercel.app/",
  },
  {
    image: "/work/ecommerce.png",
    category: "React Js",
    link: "https://ecommerce-react-dusky.vercel.app/",
    name: "Ecommerce Website",
    description:
      "React ecommerce website with add product feature and admin panel to add or delete the products made using firebase",
    github: "https://ecommerce-react-dusky.vercel.app/",
  },
];
export const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between">
          <div className="max-w-[600px] w-full mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:mb-0 xl:pr-8">
            <h2 className="section-title mb-4 text-center xl:text-left">
              Latest Projects
            </h2>
            <p className="subtitle mb-4 text-center xl:text-left">
              Explore my latest work, showcasing the challenges I&apos;ve
              tackled and the creative solutions I&apos;ve crafted. Curious to
              see more? Dive into all my projects!
            </p>
            <Link href="/projects">
              <Button>All Projects</Button>
            </Link>
          </div>
          <div className="w-full xl:max-w-[600px]">
            <Swiper
              className="h-[480px]"
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {projectData.slice(0, 4).map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
