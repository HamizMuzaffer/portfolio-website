"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React, { useState } from "react"
import ProjectCard from "@/components/ProjectCard"

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
    image: '/work/msytry.jpg',
    category: "Full Stack",
    link: "https://mystry-murex.vercel.app/",
    name: "Mystery Message",
    description: 'An anonymous message sending app built using next js and MongoDB as a database',
    github: 'https://github.com/HamizMuzaffer/nextjs-full-stack.git'
  },
  {
    image: '/work/smit.png',
    category: "Full Stack",
    link: "https://smit-student-portal.vercel.app/",
    name: "SMIT Student Portal",
    description: 'A student portal website made using MERN stack with amazing features',
    github: 'https://github.com/HamizMuzaffer/SMIT-Assignment-Submission-Portal.git'
  },
  {
    image: '/work/node.png',
    category: "Node Js",
    link: "http://node-blog-env-1.eba-3qpif8kf.ap-south-1.elasticbeanstalk.com/#",
    name: "Node Blog",
    description: 'A service side blog writing app made using EJS for server side pages and MongoDB as a database',
    github: ''
  },
  {
    image: '/work/node.png',
    category: "Node Js",
    link: "https://github.com/HamizMuzaffer/URL-Shortener.git",
    name: "URL Shortener",
    description: 'A custom URL shortener made using NodeJs',
    github: 'https://github.com/HamizMuzaffer/URL-Shortener.git'
  },
  {
    image: '/work/agency.png',
    category: "Next Js",
    link: "https://hamiz.vercel.app/",
    name: "Digital Agency",
    description: 'A digital agency UI with PWA integration',
    github: 'https://github.com/HamizMuzaffer/portfolio-website.git'
  },
  {
    image: '/work/site.png',
    category: "Next Js",
    link: "https://hamizmuzaffer.vercel.app/",
    name: "Portfolio Website",
    description: 'My Portfolio App built using Framer motion and shadCN UI library',
    github: 'https://github.com/HamizMuzaffer/portfolio-website.git'
  },

  
  {
    image: '/work/airport.png',
    category: "JAVA",
    link: "https://github.com/HamizMuzaffer/Airport-Management.git",
    name: "Airport Management System",
    description: 'Flight management system, developed through Java by integrating Java Swing library. It completely works on the concept of Object Oriented Programming.',
    github: 'https://github.com/HamizMuzaffer/Airport-Management.git'
  },
  {
    image: '/work/codeweb.png',
    category: "JavaScript",
    link: "https://hamizmuzaffer.github.io/CodeWeb/",
    name: "CodeWeb",
    description: 'A complete blog writing app made using JavaScript and Firebase with multiple features including search,write and edit and authorization',
    github: 'https://github.com/HamizMuzaffer/CodeWeb.git'
  },
  {
    image: '/work/react-todo.png',
    category: "React Js",
    link: "https://todo-chi-mauve.vercel.app/",
    name: "TODO App",
    description: 'A react todo app with integration of redux toolkit for state manangement',
    github: 'https://github.com/HamizMuzaffer/react-todo.git'
  },
  {
    image: '/work/password-changer.png',
    category: "React Js",
    link: "https://password-generator-one-wheat-85.vercel.app/",
    name: "Password Generator",
    description: 'A random password generator made using react hooks like useRef and useEffect',
    github: 'https://password-generator-one-wheat-85.vercel.app/'
  },
  {
    image: '/work/ecommerce.png',
    category: "React Js",
    link: "https://ecommerce-react-dusky.vercel.app/",
    name: "Ecommerce Website",
    description: 'React ecommerce website with add product feature and admin panel to add or delete the products made using firebase',
    github: 'https://ecommerce-react-dusky.vercel.app/'
  },

  {
    image: '/work/rejouice.png',
    category: "HTML,CSS",
    link: "https://hamizmuzaffer.github.io/Rejouice-Clone/",
    name: "Rejouice Website",
    description: 'An Animated Website built using CSS and JS with the integration of GSAP and locomotive scroll',
    github: 'https://github.com/HamizMuzaffer/Rejouice-Clone.git'
  },
  {
    image: '/work/portfolio.png',
    category: "HTML,CSS",
    link: "https://umairahmedportfolio.netlify.app/",
    name: "Video Editing Porfolio",
    description: 'A video editing porflio Site built using Locomotive scroll and swiper js',
    github: 'https://github.com/HamizMuzaffer/umairbashir.git'
  },
  {
    image: '/work/stopwatch.png',
    category: "JavaScript",
    link: "https://hamizmuzaffer.github.io/StopWatch-Js/",
    name: "Stopwatch",
    description: 'A stopwatch with reset and pause feature for user built using vanilla JS',
    github: 'https://github.com/HamizMuzaffer/StopWatch-Js.git'
  },
  {
    image: '/work/Todo.png',
    category: "JavaScript",
    link: "https://hamizmuzaffer.github.io/To-Do-App/",
    name: "Todo App",
    description: 'A JavaScript todo app with feature of edit and delete',
    github: 'https://hamizmuzaffer.github.io/To-Do-App/'
  },
  {
    image: '/work/calculator.png',
    category: "JavaScript",
    link: "https://hamizmuzaffer.github.io/Calculator-App/",
    name: "Calculator",
    description: 'A JavaScript calculator with all arithmetic operations enabled',
    github: 'https://hamizmuzaffer.github.io/Calculator-App/'
  },
  

]
const uniqueCategories = [
  'All Projects',
  ...new Set(projectData.map((item) => item.category))]

const CategorySelector = ({ categories, defaultCategory, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    onCategoryChange(value);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <Select onValueChange={handleCategoryChange} defaultValue={selectedCategory}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category, index) => (
            <SelectItem key={index} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};



const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories)
  const [category, setCategory] = useState("All Projects")
  const filteredProjects = projectData.filter((item, index) => {
    return category === 'All Projects' ? item : item.category === category
  })
  return (

    <section className='min-h-screen pt-6'>
      <div className="container">
        <h2 className="section-title text-center mx-auto mb-8 xl:mb-16">My Projects</h2>
        <div className="mb-16">
          <CategorySelector
            categories={categories}
            defaultCategory={category}
            onCategoryChange={setCategory}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((item, index) => (
            <ProjectCard key={index} project={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects