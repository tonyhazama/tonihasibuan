import React, { useState } from 'react'
import { FaBuilding, FaGraduationCap } from 'react-icons/fa';
import { FiGlobe, FiFile } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import Image from 'next/image'
import Layout from '@/components/layout';

export default function Cv() {
  const [language, setLanguage] = useState('en');

  const data = {
    en: {labels: {
      experience: "Work Experience",
      education: "Education ",
      "skill": "Technical Skills",
      "otherSkill": "Other Skill",
      "language": "Language",
      "appendix": "Lampiran"
    },
    name: "Muhammad Sultoni",
    profession: "Web Developer",
    aboutMe: `I am a Professional Web Developer with 4 Years of Experience working in the IT industry. I am proficient in HTML/CSS, Javascript, React JS, and Angular. I am also competent in Java, Next.JS, and SQL Language. I have a strong artistic sense, logical thinking & problem-solving skills.`,
    contacts: [
      {icon: AiFillMail, title: 'mail@tonihasibuan.com', link: 'mailto:mail@tonihasibuan.com'},
      {icon: AiFillGithub, title: 'github.com/tonyhazama', link: 'https://github.com/tonyhazama'},
      {icon: AiFillLinkedin, title: 'in/muhammad-sultoni-hsb', link: 'https://www.linkedin.com/in/muhammad-sultoni-hsb/'},
      {icon: FiGlobe, title: 'www.tonihasibuan.com', link: 'https://www.tonihasibuan.com/'},
    ],
    experiences: [
      {
        position: "Web Developer",
        workplace: "PT. Tujuh Sembilan",
        date: {from: "July 2018", to: "Present"},
        description: "Working as a Programmer Talent and Outsource Employee\nWorked on School admission management system\n- Create a responsive Web Application\n- Create UI and Integrate payment gateway\n- Create Data visualization using datasets from API",
        techStack: ['React', 'Angular', 'MySql', 'Java'],
        contract: "Full-time",
        img: "tujuhsembilan.jpg"
      },
      {
        workplace: "Bank BTPN",
        position: "Fullstack Developer",
        date: {from: "July 2021", to: "Present"},
        description: "Working on Collateral Management System and User Identity Management System\n- Migrate data using Talend Data Studio and MySQL environment\n- Create Scheduler to consume kafka message into system database\n- Create API, Create Frontend Component and perform integration process",
        techStack: ['React', 'Angular', 'MySql', 'Java'],
        contract: "Contract",
        img: "btpn.jpg"
      },
      {
        position: "Frontend Web Developer",
        workplace: "PT Bank Central Asia Tbk,",
        title: "Market Auction Price",
        date: {from: "April 2020", to: "July 2020"},
        description: "Worked on Housing loan simulation and proposal application\n- Develop modules, custom components & functions for the application\n- Integrate API to do calculation and data simulation\n- Deliver modular design & micro front-end approach",
        techStack: ['React', 'Angular', 'MySql', 'Java'],
        contract: "Contract",
        img: "bca.jpg"
      },
      {
        position: "Frontend Web Developer",
        workplace: "PT Bank Central Asia Tbk,",
        title: "Market Auction Price",
        date: {from: "May 2019", to: "July 2020"},
        description: "Worked on Swift Message Investigation Tool\n- Creating Project Framework, custom components, and Functions for the application\n- Perform Front-end and back-end API Integration\n- Implement dynamic routing and role management based on user privilege",
        techStack: ['React', 'Angular', 'MySql', 'Java'],
        contract: "Contract",
        img: "bca.jpg"
      },
      {
        position: "Frontend Web Developer",
        workplace: "Serasi Autoraya",
        title: "Market Auction Price",
        date: {from: "Jan 2019", to: "Apr 2019"},
        description: "Worked on website for Market price statistics of auction cars\n- Develop React JS Web application\n- Create dynamic Data visualization using Highcharts\n- Create dynamic dashboard with customizable Chart ",
        techStack: ['React', 'Angular', 'MySql', 'Java'],
        contract: "Contract",
        img: "sera.jpg"
      }
    ],
    educations: [
      {
        degree: "Software Engineering",
        school: "SMKN 4 Padalarang",
        date: {from: "Jan 2016", to: "Apr 2018"},
        description: ""
      },
    ],
    skills: [
      { icon: "html-5.svg", title: "HTML/CSS", level: "Expert" },
      { icon: "javascript.svg", title: "Javascript", level: "Expert" },
      { icon: "git.svg", title: "Git", level: "Intermediate" },
      { icon: "angular.svg", title: "Angular", level: "Intermediate" },
      { icon: "react.svg", title: "React JS", level: "Intermediate" },
      { icon: "nextjs.svg", title: "Next JS", level: "Intermediate" },
      { icon: "java.svg", title: "Java", level: "Competent" },
      { icon: "nodejs.svg", title: "Node JS", level: "Competent" },
      { icon: "mysql.svg", title: "SQL Language", level: "Competent" },
    ],
    otherSkills: [
      { icon: "", title: "Adobe Photoshop" },
      { icon: "", title: "Adobe Illustrator" },
      { icon: "", title: "Figma" },
      { icon: "", title: "Talend Data Studio" },
    ],
    languages: [
      {id: "id", title: "Bahasa Indonesia", level: "Native"},
      {id: "en", title: "English", level: "Professional Working"}
    ],
    },

    id: {
      labels: {
        experience: "Pengalaman Kerja",
        education: "Pendidikan ",
        "skill": "Skill",
        "otherSkill": "Other Skill",
        "language": "Bahasa",
        "appendix": "Lampiran"
      },
      name: "Muhammad Sultoni",
      profession: "Web Developer",
      aboutMe: `Saya adalah seorang Web Developer Profesional dengan 4 Tahun Pengalaman bekerja di industri TI. Saya mahir dalam HTML/CSS, Javascript, React JS, dan Angular. Saya juga kompeten di Java, Next.JS, dan Bahasa SQL. Saya memiliki rasa artistik yang kuat, pemikiran logis & keterampilan memecahkan masalah.`,
      contacts: [
        {icon: FiGlobe, title: 'tonihasibuan.com', link: 'https://www.tonihasibuan.com/'},
        {icon: AiFillMail, title: 'muhammad.sultoni@gmail.com', link: 'mailto:muhammad.sultoni@gmail.com'},
        {icon: AiFillGithub, title: 'github.com/tonyhazama', link: 'https://github.com/tonyhazama'},
        {icon: AiFillLinkedin, title: 'linkedin.com/in/muhammad-sultoni-hsb', link: 'https://www.linkedin.com/in/muhammad-sultoni-hsb/'},
      ],
      experiences: [
        {
          workplace: "Bank BTPN",
          position: "Fullstack Developer",
          title: "Market Auction Price",
          date: {from: "July 2021", to: "Present"},
          description: "Worked on Collateral Management System, User Identity Management System\n- Enhance existing application\n- Migrate multi-system data into one single app using Talend Data Studio and MySQL environment\n- Create Scheduler to consume kafka message into system database\n- Create Springboot API for frontend and reporting\n- Integrate Springboot Microservices and Angular",
          techStack: ['React', 'Angular', 'MySql', 'Java'],
          img: "btpn.jpg"
        },
        {
          position: "Frontend Web Developer",
          workplace: "PT. Tujuh Sembilan",
          title: "Market Auction Price",
          date: {from: "July 2020", to: "July 2021"},
          description: "Worked on Marketplace Auction Price (Analytics application) at PT. SerasiAutoraya using React",
          techStack: ['React', 'Angular', 'MySql', 'Java'],
          img: "tujuhsembilan.jpg"
        },
        {
          position: "Frontend Web Developer",
          workplace: "PT Bank Central Asia Tbk,",
          date: {from: "April 2020", to: "July 2020"},
          description: "Worked on Swift Message Investigation Tool\n- Creating Project Framework, Modules, Components, and Functions for the application\n- Perform Front-end and back-end API Integration\n- Deliver modular design & micro front-end approach\n- Perform code optimization process",
          techStack: ['React', 'Angular', 'MySql', 'Java'],
          img: "bca.jpg"
        },
        {
          position: "Frontend Web Developer",
          workplace: "PT Bank Central Asia Tbk,",
          title: "Market Auction Price",
          date: {from: "May 2019", to: "July 2020"},
          description: "Worked on Marketplace Auction Price (Analytics application) at PT. SerasiAutoraya using React",
          techStack: ['React', 'Angular', 'MySql', 'Java'],
          img: "bca.jpg"
        },
        {
          position: "Frontend Web Developer",
          workplace: "Serasi Autoraya",
          title: "Market Auction Price",
          date: {from: "Jan 2019", to: "Apr 2019"},
          description: "",
          techStack: ['React', 'Angular', 'MySql', 'Java'],
          img: "sera.jpg"
        }
      ],
      educations: [
        {
          degree: "Software Engineering",
          school: "SMKN 4 Padalarang",
          date: {from: "Jan 2019", to: "Apr 2019"},
          description: "Worked on Marketplace Auction Price (Analytics application) at PT. SerasiAutoraya using React"
        },
      ],
      skills: [
        {title: "HTML/CSS", level: "Expert"},
        {title: "Javascript", level: "Expert"},
        {title: "Angular", level: "Intermediate"},
        {title: "React JS", level: "Intermediate"},
        {title: "Next JS", level: "Intermediate"},
        {title: "Java", level: "Competent"},
      ],
      languages: [
        {id: "id", title: "Bahasa Indonesia", level: "Native"},
        {id: "en", title: "English", level: "Professional Working"}
      ],
    }
  };

  const {name, profession, aboutMe, labels = {}, experiences = [], educations = [], skills = [], languages = [], contacts = [], otherSkills = []} = data[language];

  const toggleLangguage = () => {
    console.log("s")
    setLanguage(language === "en" ? "id" : "en")
  }

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
          <div className="py-2 px-4 bg-white dark:bg-main-dark  shadow-md flex items-center cursor-pointer font-semibold text-sm" onClick={downloadPdf}>
            <FiFile className="mr-2 text-lg" /> DOWNLOAD PDF
          </div>
        </div>

        <div id="cvContent" className="w-cv shadow-xl m-auto min-h-full bg-white text-black print:w-auto">
          <div className="p-paper-margin pb-0 flex flex-wrap print:p-0">
            <div className="flex-1 pr-28">
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

          <div className="px-paper-margin pt-paper-space print:px-0">
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

const ExperienceItem = ({workplace, position, description, date, img, contract, duration}) => {

  return (
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
    <div className="flex flex-wrap items-center mb-2 mr-2  p-1 px-2  rounded-sm border-gray-300 border-[1px] ">
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