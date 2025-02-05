import { useState } from "react";
import Popup from "../../shared/components/popup/popup";
import "./about-me.css";

const timelineData = [
    {
        year: "2024 - Present",
        heading: "Senior Software Consultant",
        discription: "Leading complex software projects, providing high-level consulting, and optimizing system architecture for clients across various industries. Specializing in cloud solutions, performance improvements, and scalable software design.",
        skills: [
            {skillName:"HTML",rating:8,class:'html'},
            {skillName:"CSS",rating:8,class:'css'},
            {skillName:"Javascript",rating:8,class:'javascript'},
            {skillName:"Typescript",rating:8,class:'typescript'},
            {skillName:"Node Js",rating:8,class:'nodejs'},
            {skillName:"Express Js",rating:8,class:'expressjs'},
            {skillName:"Angular 18",rating:8,class:'angular'},
            {skillName:"NgRx",rating:8,class:'ngrx'},
            {skillName:"RxJs",rating:8,class:'rxjs'},
            {skillName:"React",rating:8,class:'react'},
            {skillName:"MongoDb",rating:8,class:'mongodb'},
            {skillName:"MySql",rating:8,class:'mysql'},
            {skillName:"PostgreSql",rating:8,class:'postgresql'},
            {skillName:"Mongoose",rating:8,class:'mongoose'},
            {skillName:"TypeORM",rating:8,class:'typeorm'},
            {skillName:"Github",rating:8,class:'github'},
            {skillName:"Azure",rating:8,class:'azure'},
            {skillName:"CI/CD",rating:8,class:'cicd'},
            {skillName:"Docker",rating:8,class:'docker'},
            {skillName:"Kubernetes",rating:8,class:'kubernetes'},
        ]
    },
    {
        year: "2023 - 2024",
        heading: "Senior Software Developer",
        discription: "Developed and maintained high-performance web applications, working with cross-functional teams to ensure the delivery of high-quality solutions. Mentored junior developers and helped implement Agile best practices."
    },
    {
        year: "2021 - 2023",
        heading: "Mid Frontend Developer",
        discription: "Focused on building dynamic and responsive user interfaces using modern JavaScript frameworks. Collaborated with UI/UX designers to implement intuitive designs and improve user experience."
    },
    {
        year: "2019-2021",
        heading: "Full Stack Developer",
        discription: "Worked on both frontend and backend development, building full-featured web applications. Led the development of RESTful APIs and integrated third-party services, ensuring smooth interaction between the client and server-side components."
    },
    {
        year: "2017 - 2019",
        heading: "Freelancing",
        discription: "Worked with various clients on freelance projects, providing software development services. Focused on building custom websites, web applications, and assisting businesses with their technical needs."
    },
    {
        year: "2014 - 2017",
        heading: "Engineering",
        discription: "Pursued a Bachelor's degree in Computer Engineering, where I gained a strong foundation in algorithms, data structures, and computer systems. Participated in various academic projects and internships."
    },
    {
        year: "2011-2014",
        heading: "Diploma",
        discription: "Completed a diploma in Computer Science and Engineering, where I learned programming languages, computer hardware, and software engineering principles."
    },
    {
        year: "2010-2011",
        heading: "SSC",
        discription: "Completed secondary school with a focus on science and mathematics, laying the foundation for my career in technology."
    },
];

const AboutMe = () => {
    const [card, setCard] = useState();
    const [visible, setVisible] = useState(false);
    const handleClick = (val, card) => { 
        document.body.style.overflow = val ? 'hidden' : 'auto';
        setVisible(val);
        setCard(card);
    }
    return<>
        <div className="container">
            <div className="content">
                <div className="introduction">
                    <div className="heading gradient">Code Parth</div>
                    <div className="sub-heading">Full Stack Developer</div>
                </div>
                <div className="work">
                    <div className="work-heading">Timeline</div>
                    <div className="timeline" key="time1">
                        <ul>
                            {
                                timelineData.map((item, index) => {
                                    return (
                                        <li key={item.year}>
                                            <div className="timeline-card" onClick={() => handleClick(true, item)} title="more details...">
                                                <div className="tl-year">{item.year}</div>
                                                <div className="tl-heading">{item.heading}</div>
                                                <div className="tl-discription">
                                                    {item.discription}
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Popup visible={visible} popupData={card} onDataChange={handleClick}/>
    </>
}

export default AboutMe;