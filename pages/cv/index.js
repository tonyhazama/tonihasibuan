import React, { useState } from 'react'
import { FaBuilding, FaGraduationCap } from 'react-icons/fa';
import { FiGlobe, FiFile } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import Image from 'next/image'
import Layout from '@/components/layout';

export default function Cv() {
  const [language, setLanguage] = useState('id');

  const data = {
    en: {

    },
    id: {
      labels: {
        experience: "Pengalaman Kerja",
        education: "Pendidikan ",
        "skill": "Skill",
        "language": "Bahasa",
        "appendix": "Lampiran"
      },
      name: "Muhammad Sultoni",
      profession: "Web Developer",
      aboutMe: `I am a Professional Web Developer with 4 Years of Experience working in the IT industry. I am proficient in HTML/CSS, Javascript, React JS, and Angular. I am also competent in Java, Next.JS, and SQL Language. I have a strong artistic sense, logical thinking & problem-solving skills.`,
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
          description: "Worked on Marketplace Auction Price (Analytics application) at PT. SerasiAutoraya using React",
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
          title: "Market Auction Price",
          date: {from: "April 2020", to: "July 2020"},
          description: `- Develop modules, custom components & functions for the application\n- Perform Front-end and back-end API Integration\n- Deliver modular design & micro front-end approach\n- Perform code optimization process`,
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
        {title: "Bahasa Indonesia", level: "Native"},
        {title: "English", level: "Professional Working"}
      ],
    }
  };

  const {name, profession, aboutMe, labels, experiences = [], educations = [], skills = [], languages = [], contacts} = data[language];

  return (
    
    <Layout>
      <div className="bg-slate-200 dark:bg-sub-dark p-8 pb-16 overflow-y-auto">
        <div className="w-cv m-auto flex justify-end mb-8">
          <div className="py-2 px-4 bg-white dark:bg-main-dark  shadow-md flex items-center cursor-pointer font-semibold text-sm">
            <FiFile className="mr-2 text-lg" /> DOWNLOAD PDF
          </div>
        </div>
        <div id="cv" className="w-cv shadow-xl m-auto min-h-full bg-white text-black">
          <div className="p-paper-margin pb-0">
            <h1 className="text-3xl font-bold">{name}</h1>
            <h5 className="text-xl mb-4">{profession}</h5>
            <div className="max-w-2xl">{aboutMe}</div>
          </div>
          <div className="px-paper-margin pt-4">
            {contacts.map(contact => <ContactItem {...contact} />)}
          </div>
          <div className="px-paper-margin pt-paper-space">
            <h5 className="text-2xl font-semibold mb-6">{labels.experience}</h5>
            <div>
              {experiences.map(exp => {
                return <ExperienceItem {...exp} />
              })}
            </div>
          </div>
          <div className="px-paper-margin pt-paper-space">
            <h5 className="text-2xl font-semibold mb-6">{labels.education}</h5>
            <div>
              {educations.map(edu => {
                return <EducationItem {...edu} />
              })}
            </div>
          </div>
          <div className="px-paper-margin pt-paper-space">
            <h5 className="text-2xl font-semibold mb-6">{labels.skill}</h5>
            <div className="flex flex-wrap">
              {skills.map(skill => {
                return <SkillItem {...skill} />
              })}
            </div>
          </div>
          <div className="p-paper-margin">
            <h5 className="text-2xl font-semibold mb-6">{labels.language}</h5>
            <div className="flex flex-wrap">
              {languages.map(lang => {
                return <SkillItem {...lang} />
              })}
            </div>
          </div>
        </div>
        {/* <pre>{JSON.stringify(data, '', 2)}</pre> */}
      </div>
    </Layout>
  )
}




const ContactItem = ({icon, title, link}) => {
  const Icon = icon;
  return (
    <div className="flex flex-wrap items-center mb-1">
      <Icon className="mr-2 text-xl" />
      <a target="_blank" href={link}>{title}</a>
    </div>
  )
}

const ExperienceItem = ({workplace, position, description, techStack, date, img}) => {

  return (
    <div className="flex flex-wrap mb-6 last:mb-0">
      <div className="pr-4">
        <div className="w-16 h-16  bg-gray-100 flex justify-center items-center overflow-hidden">
          <Image src={`/static/${img}`} alt={workplace} width="64" height="64" />
          {/* <FaBuilding className="text-2xl text-gray-400" /> */}
        </div>
      </div>
      <div className="flex-1">
        <div className="text-lg font-medium">{position}{`  —  `} <span className="text-blue-900">{workplace}</span> </div>
        <div className="mb-1 text-gray-500">{`${date.from}  —  ${date.to}`}</div>
        <div className="mb-1 whitespace-pre-wrap">{description}</div>
        <div className="mb-1">Techstack: {techStack.map((t, i) => (`${t} ${i+1 < techStack.length ? ' - ' :'' } `))}</div>
      </div>
    </div>
  )
};

const EducationItem = ({school, degree, description, date}) => {

  return (
    <div className="flex flex-wrap mb-6 last:mb-0">
      <div className="pr-4">
        <div className="w-16 h-16  bg-gray-100 flex justify-center items-center">
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
    <div className="flex flex-wrap items-center mb-3 mr-3  p-1 px-4 rounded-md border-gray-200 border-2 ">
      <div>{icon}</div>
      <div>{title}</div>
      <Dot />
      <span className="text-gray-600 text-sm">{level}</span>
    </div>
  )
};


const Dot = () => {
  return <div className="mx-2 w-1 h-1 rounded-full bg-black"></div>
}