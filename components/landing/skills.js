import Container from "../container";

const skills = [
  { icon: "html-5.svg", title: "HTML/CSS", level: "Expert" },
  { icon: "javascript.svg", title: "Javascript", level: "Expert" },
  { icon: "git.svg", title: "Git", level: "Intermediate" },
  { icon: "angular.svg", title: "Angular", level: "Intermediate" },
  { icon: "react.svg", title: "React JS", level: "Intermediate" },
  { icon: "nextjs.svg", title: "Next JS", level: "Intermediate" },
  { icon: "nodejs.svg", title: "Node JS", level: "Competent" },
  { icon: "mysql.svg", title: "SQL Language", level: "Competent" },
  { icon: "python.svg", title: "Python", level: "Beginner" },
  { icon: "java.svg", title: "Java", level: "Beginner" },
];

export default function Skills() {
  return (
    <section id="skills">
      <Container>
        <div className="pt-8 pb-16  md:py-16 border-b-2 border-stone-200 dark:border-sub-dark flex-col md:flex-row-reverse">
          <h2 className="text-center text-xl font-bold mb-8">
          This is what I have used over the years
          </h2>
          <div className="flex flex-wrap justify-center">
            {skills.map(skill => (
              <SkillItem {...skill} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

const SkillItem = ({title, level, icon}) => {

  return (
    <div className="flex flex-wrap items-center mb-2 p-2 px-4  rounded-sm text-xl ">
      {icon && <img src={`/static/${icon}`} className="h-8" />}
      {/* <div>{title}</div> */}
      {/* {level && (
        <>
          <Dot />
          <span className="text-gray-600 text-base dark:text-mid-white">{level}</span>
        </>
      )} */}
    </div>
  )
};

const Dot = () => {
  return <div className="mx-2 w-1 h-1 rounded-full bg-black"></div>
}
