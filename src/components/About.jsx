import Image from "next/image"
import { AboutImage } from "./AboutImage"
import { TabsContent, TabsList, TabsTrigger, Tabs } from "../components/ui/tabs"
import { User2, Briefcase, MailIcon, GraduationCap, HomeIcon, PhoneCall, Calendar, University, } from "lucide-react";
const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Hamiz Muzaffer"
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+92 331 2893020"
    },
    {
        icon: <MailIcon size={20} />,
        text: "hamiz.muzaffer77@gmail.com"
    },
    {
        icon: <Calendar size={20} />,
        text: "Born 7th July 2004"
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Bachelors in Computer Science"
    },
    {
        icon: <HomeIcon size={20} />,
        text: "Karachi,Sindh"
    }
]

const educationData = [
    {
        title: "Education",
        data: [
            {
                university: "Saylani Mass IT Training",
                qualification: "AWS Developer Associate",
                year: '2024-Present'
            },
            {
                university: "Nazeer Hussain University",
                qualification: "Bachelors in Computer Science",
                year: '2022 - Present'
            },
            {
                university: "Saylani Mass IT Training",
                qualification: "Web And Mobile App Development",
                year: '2023-2024'
            },
            
        ]
    },
    {
        title: "Experience",
        data: [
            {
                company: "Hexsoltech",
                role: "Full Stack Developer",
                year: '2025-Present'
            },
            {
                company: "TechNet Cloud",
                role: "Full Stack Developer Intern",
                year: '2024-2025'
            },
            {
                company: "Devsinz",
                role: "MERN Stack Intern",
                year: '2024'
            },

        ]
    }

]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: "Frontend Development"
            },
            {
                name: "Backend Development"
            },
            {
                name: "Maintenance and Support"
            },
            {
                name: "API Integration"
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: "/about/icons/css3-02-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/javascript-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/react-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/nextjs-icon-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/redux-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/firebase-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/nodejs-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/mongodb-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/express-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/mysql-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/postgresql-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/postman-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/git-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/github-142-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/material-ui-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/tailwind-css-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/ant-design-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/bootstrap-fill-svgrepo-com.svg"
            },
            {
                imgPath : "/about/icons/java-svgrepo-com.svg"
            }
        ]
    },
]

export const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }
    return (
        <section id="about" className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
                <div className="flex flex-col xl:flex-row">
                    <div className="hidden xl:flex relative flex-1">
                        <AboutImage containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative ' />
                    </div>
                    <div className="flex flex-col items-center xl:items-start xl:flex-1">
                        <Tabs defaultValue="personal" className="w-full">
                            <div className="flex justify-center xl:justify-start">
                                <TabsList>
                                    <TabsTrigger value="personal">Personal Info</TabsTrigger>
                                    <TabsTrigger value="qualificatiom">Qualification</TabsTrigger>
                                    <TabsTrigger value="skills">Skills</TabsTrigger>
                                </TabsList>
                            </div>
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Aspiring full stack dev passionate about building end-to-end web solutions.</h3>
                                        <p className="text-base md:text-lg mb-6 max-w-xl mx-auto xl:mx-0">I&apos;m an up-and-coming full stack developer with a passion for building comprehensive web solutions. I bring enthusiasm, a solid foundation in both front-end and back-end technologies, and a strong drive to learn. I&apos;m eager to contribute to innovative projects while continuously expanding my expertise across the entire web development stack.</p>
                                        <div className="gap-y-4 mb-12 grid md:grid-cols-2">
                                            {infoData.map((item, index) => (
                                                <div key={index} className="flex items-center gap-x-4 mx-auto xl:mx-0 max-w-sm">
                                                    <div className="text-primary flex-shrink-0">
                                                        {item.icon}
                                                    </div>
                                                    <div className="text-left text-sm md:text-base">
                                                        {item.text}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualificatiom">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">My Journey</h3>
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            <div>
                                                <div>
                                                    <div className="flex gap-x-4 items-center text-[22px] text-primary  mb-4">
                                                        <Briefcase />
                                                        <h4 className="font-medium capitalize">{getData(educationData, "Experience").title}</h4>
                                                    </div>
                                                    <div>
                                                        {getData(educationData, "Experience").data.map((item, index) => {
                                                            const { company, role, year } = item
                                                            return (
                                                                <div key={index} className="flex gap-x-8 group mb-4">
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-2">{role}</div>
                                                                        <div className="text-base font-medium">{year}</div>
                                                                    </div>

                                                                </div>

                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div className="flex gap-x-4 items-center text-[22px] text-primary  mb-4">
                                                            <GraduationCap />
                                                            <h4 className="font-medium capitalize">{getData(educationData, "Education").title}</h4>
                                                        </div>
                                                        <div>
                                                            {getData(educationData, "Education").data.map((item, index) => {
                                                                const { university, qualification, year } = item
                                                                return (
                                                                    <div key={index} className="flex gap-x-8 group mb-4">
                                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                        </div>
                                                                        <div>
                                                                            <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                            <div className="text-lg leading-none text-muted-foreground mb-2">{qualification}</div>
                                                                            <div className="text-base font-medium">{year}</div>
                                                                        </div>

                                                                    </div>

                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </TabsContent>

                                <TabsContent value="skills" >
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8">Things I know</h3>
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">Skillls</h4>
                                            <div className="border-b border-border mb-4 "></div>
                                            <div>
                                                {getData(skillData, "skills").data.map((item, index) => {
                                                    const { name } = item
                                                    return (
                                                        <div className="w-2/4  mx-auto xl:mx-0 text-center xl:text-left" key={index}>
                                                            <div className="font-medium">
                                                                - {name}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-center xl:text-left mb-2">What I am good at!</h4>
                                            <div className="border-b border-border mb-4 "></div>
                                            <div className="flex flex-wrap justify-center xl:justify-start">

                                                {getData(skillData, 'tools').data.map((item, index) => {
                                                    const { imgPath } = item;
                                                    return (
                                                        <div className="px-4 py-2" key={index}>
                                                            <Image src={imgPath} width={50} height={50} priority alt="dev" />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}
