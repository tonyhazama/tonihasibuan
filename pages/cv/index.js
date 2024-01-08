import React, { useState } from 'react'
import { FaBuilding, FaGraduationCap } from 'react-icons/fa';
import { FiGlobe, FiFile } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import Image from 'next/image'
import Layout from '@/components/layout';

export default function Cv() {
  const [language, setLanguage] = useState('en');

  const data = {labels: {
    experience: "Work Experience",
    education: "Education ",
    "skill": "Technical Skills",
    "otherSkill": "Other Skill",
    "language": "Language",
    "appendix": "Lampiran"
  },
  name: "Muhammad Sultoni",
  profession: "Web Developer",
  aboutMe: "I am a Professional Software developer with 4+ years of experience.I am passionate about software development and dedicated to delivering high-quality solutions. "+
  "I stay up-to-date with the latest technologies and continuously improve my skills to provide efficient, effective, and user-friendly solutions for clients.",
  contacts: [
    {icon: FiGlobe, title: 'www.tonihasibuan.com', link: 'https://www.tonihasibuan.com/'},
    {icon: AiFillMail, title: 'muhammad.sultoni.hsb@gmail.com', link: 'mailto:muhammad.sultoni.hsb@gmail.com'},
    {icon: AiFillGithub, title: 'github.com/tonyhazama', link: 'https://github.com/tonyhazama'},
    {icon: AiFillLinkedin, title: 'in/tonihasibuan', link: 'https://www.linkedin.com/in/tonihasibuan/'},
  ],
  experiences: [
    {
      position: "Frontend Web Developer",
      workplace: "PT Barrans Global Mandiri",
      date: {from: "October 2022", to: "Present"},
      description: "Developed Insurance proposal app and admin portal\n"+
      "- Setup project skeleton, folder structure and configurations\n"+
      "- Maintaining best practice, configuration and code standards \n"+
      "- Create responsive Web application with multi-language and support",
      techStack: ['Next JS',],
      contract: "Full-time",
      img: "barrans.jpeg"
    },
    {
      position: "Frontend Web Developer",
      workplace: "PT. Orde Digital Intelektual",
      date: {from: "July 2022", to: "Januari 2023"},
      description: "Developed Cash management system for Corporate use\n"+
      "- Leading development team and helped solve development problems\n"+
      "- Created custom hooks, global components and scaffolding for other modules\n"+
      "- Developed Highly Optimized and reusable code to accelerate development\n",
      techStack: ['React', 'Angular', 'MySql', 'Java'],
      contract: "Full-time",
      img: "ordent.jpg"
    },
    {
      position: "Software Developer",
      workplace: "PT. Tujuh Sembilan",
      date: {from: "July 2018", to: "July 2022"},
      description: "Enrolled in a bootcamp program and worked as an outsourced employee.\n"+
      "- Developed Kolese Loyola School admission management system\n"+
      "- Created a responsive Web Application with localization support\n"+
      "- Created and integrated a complex UI with an external API",
      techStack: ['React', 'Angular', 'MySql', 'Java'],
      contract: "Full-time",
      img: "tujuhsembilan.jpg",
    },
    
    {
      workplace: "Bank BTPN",
      position: "Fullstack Developer (AngularJS & Springboot)",
      date: {from: "July 2021", to: "July 2022"},
      description: "Worked on Collateral Management and User Identity Management System\n"+
      "- Migrated data using Talend Data Studio and MySQL environment\n"+
      "- Created Scheduler to consume kafka message into system database\n"+
      "- Created API, Created Frontend Component and performed integration",
      techStack: ['React', 'Angular', 'MySql', 'Java'],
      contract: "Contract",
      img: "btpn.jpg"
    },
    {
      position: "Frontend Web Developer (AngularJS & ReactJS)",
      workplace: "PT NTT Indonesia Technology",
      title: "Market Auction Price",
      date: {from: "May 2019", to: "July 2020"},
      description: "Developed a Swift message investigation tool, a housing loan simulation application, and a web application for auction car price statistics.\n"+
        "- Developed a project framework, custom components, and reusable functions.\n"+
        "- Implemented dynamic routing and role management based on user privilege.\n"+
        "- Created dynamic data visualization and customizable charts.\n",
      techStack: ['Angular', 'Java'],
      contract: "Contract",
      img: "ntt.jpg"
    },
  ],
  educations: [
    {
      degree: "Software Engineering",
      school: "SMKN 4 Padalarang",
      date: {from: "Jan 2015", to: "Apr 2018"},
      description: ""
    },
  ],
  skills: [
    { icon: "html-5.svg", title: "HTML/CSS", level: "Expert" },
    { icon: "javascript.svg", title: "Javascript", level: "Expert" },
    { icon: "git.svg", title: "Git", level: "Expert" },
    { icon: "react.svg", title: "React JS", level: "Expert" },
    { icon: "nextjs.svg", title: "Next JS", level: "Intermediate" },
    { icon: "angular.svg", title: "Angular", level: "Intermediate" },
    { icon: "mysql.svg", title: "SQL Language", level: "Intermediate" },
    { icon: "java.svg", title: "Java", level: "Intermediate" },
    { icon: "nodejs.svg", title: "Node JS", level: "Beginner" },
  ],
  otherSkills: [
    { icon: "", title: "Adobe Photoshop" },
    { icon: "", title: "Adobe Illustrator" },
    { icon: "", title: "Figma" },
    { icon: "", title: "Talend Data Studio" },
  ],
  languages: [
    {id: "id", title: "Bahasa Indonesia", level: "Fluent/Native"},
    {id: "en", title: "English", level: "Working Proficiency"}
  ],
  };

  const {name, profession, aboutMe, labels = {}, experiences = [], educations = [], skills = [], languages = [], contacts = [], otherSkills = []} = data;

  const downloadPdf = () => {
    window.print();
  }

  return (
    
    <Layout>
      <div id="cv" className="bg-slate-200 dark:bg-sub-dark p-8 pb-16 overflow-y-auto print:p-0">
        <div className="w-cv m-auto flex justify-end mb-8 print:hidden">
          {/* <div className="py-2 px-4 bg-white dark:bg-main-dark  shadow-md flex items-center cursor-pointer font-semibold text-sm mr-8">
            <FiFile className="mr-2 text-lg" /> SEND TO MY EMAIl
          </div> */}
          <div className="py-2 px-4 bg-white dark:bg-main-dark  shadow-md print:shadow-none flex items-center cursor-pointer font-semibold text-sm" onClick={downloadPdf}>
            <FiFile className="mr-2 text-lg" /> DOWNLOAD PDF
          </div>
        </div>

        <div id="cvContent" className="w-cv shadow-xl  print:shadow-none m-auto min-h-full bg-white text-black print:w-auto">
          <div className="p-paper-margin pb-0 flex flex-wrap print:p-0">
            <div className="flex-1 pr-28 print:pr-0">
              <h1 className="text-3xl font-bold">{name}</h1>
              <h5 className="text-xl mb-4">{profession}</h5>
              <div className="">{aboutMe}</div>
              <div className="pt-4 flex flex-wrap">
                {contacts.map(contact => <ContactItem {...contact} />)}
              </div>
            </div>
            {/* <div className="w-56 h-w-56 mr-8">
              <Image src={`/static/profile.png`} alt="Profile picture" width="224" height="224" />
            </div> */}
          </div>
          
          <div className="px-paper-margin pt-paper-space print:px-0">
            <h5 className="font-semibold mb-4 text-cv-title">{labels.experience}</h5>
            <div>
              {experiences.map(exp => {
                return <ExperienceItem {...exp} />
              })}
            </div>
          </div>

          <div className="px-paper-margin pt-paper-space print:pt-0 print:px-0">
            <h5 className="font-semibold mb-4 text-cv-title">{labels.education}</h5>
            <div>
              {educations.map(edu => {
                return <EducationItem {...edu} />
              })}
            </div>
          </div>
          <div className="px-paper-margin pt-paper-space print:px-0">
            <h5 className="font-semibold mb-4 text-cv-title">{labels.skill}</h5>
            <div className="flex flex-wrap">
              {skills.map(skill => {
                return <SkillItem {...skill} />
              })}
            </div>
          </div>
          <div className="px-paper-margin pt-paper-space print:px-0 print:pb-0">
            <h5 className="font-semibold mb-4 text-cv-title">{labels.otherSkill}</h5>
            <div className="flex flex-wrap">
              {otherSkills.map(skill => {
                return <SkillItem {...skill} />
              })}
            </div>
          </div>
          <div className="p-paper-margin pt-paper-space print:px-0 print:pb-0">
            <h5 className="font-semibold mb-4 text-cv-title">{labels.language}</h5>
            <div className="flex flex-wrap">
              {languages.map(lang => {
                return <SkillItem {...lang} />
              })}
            </div>
          </div>
          {/* <Drafter /> */}
        </div>
      </div>
    </Layout>
  )
}


const Drafter = () => {
  const [text, setText] = useState();
  const changeText = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <textarea className="w-full p-2 px-4" onChange={changeText}></textarea>
      <div className="py-4">{JSON.stringify(text)}</div>
    </div>
  )
}




const ContactItem = ({icon, title, link}) => {
  const Icon = icon;
  return (
    <div className="flex flex-wrap items-center mb-2 mr-8">
      <Icon className="mr-2 text-xl" />
      <a target="_blank" href={link}>{title}</a>
    </div>
  )
}

const ExperienceItem = ({workplace, position, description, date, img, contract, duration, children}) => {

  return (
    <>
    <div className="flex flex-wrap mb-4 last:mb-0">
      <div className="pr-4">
        <div className="w-16 h-16  bg-gray-100 flex justify-center items-center overflow-hidden">
          <Image src={`/static/${img}`} alt={workplace} width="64" height="64" />
        </div>
      </div>
      <div className="flex-1">
        <div className="text-lg font-medium">{position}{`  —  `} <span className="text-cv-accent">{workplace}</span> </div>
        <div className="mb-1 text-gray-500 flex items-center">
          {`${date.from}  —  ${date.to}`} {duration && `(${duration})`}
          <Dot />
          {contract}
        </div>
        <div className="mb-1 whitespace-pre-wrap">{description}</div>
      </div>
    </div>
    
    <div className='flex flex-col ml-8'>
    {children && children.map(c => <ExperienceItem {...c} />)}
    </div>
    </>
  )
};

const EducationItem = ({school, degree, description, date}) => {

  return (
    <div className="flex flex-wrap mb-4 last:mb-0">
      <div className="pr-4">
        <div className="w-16 h-16 bg-gray-100 flex justify-center items-center">
          <FaGraduationCap className="text-2xl text-gray-400" />
        </div>
      </div>
      <div className="flex-1">
        <div className="text-lg font-medium">{degree}{`  —  `}{school}</div>
        <div className="mb-1 text-gray-500">{`${date.from}  —  ${date.to}`}</div>
        <div className="mb-1 whitespace-pre-wrap">{description}</div>
      </div>
    </div>
  )
};

const SkillItem = ({title, level, icon}) => {

  return (
    <div className="flex flex-wrap items-center mb-2 mr-2  p-1 px-2  rounded-sm border-gray-300 border-thin ">
      {icon && <img src={`/static/${icon}`} className="h-skill-icon mr-2" />}
      <div>{title}</div>
      {level && (
        <>
          <Dot />
          <span className="text-gray-600 text-sm">{level}</span>
        </>
      )}
    </div>
  )
};


const Dot = () => {
  return <div className="mx-2 w-1 h-1 rounded-full bg-black"></div>
}