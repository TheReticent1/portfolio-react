import { useState } from 'react';
import Popup from '../../shared/components/popup/popup';
import './about-me.css';
const timelineData = [
    {   year:"2025 - Persent", 
        heading:"Job Hunting", 
        description:"Looking for React js job at entry level in Pune.",
        popupDescription: "Seeking an entry-level React.js developer position in Pune where I can utilize my skills in JavaScript and React.js to contribute to dynamic projects, continue learning, and grow as part of a collaborative team.",
        skills: [
            {skillName:"Javascript", rating:7},
            {skillName:"HTML5", rating:7},
            {skillName:"CSS", rating:7},
            {skillName:"React.js", rating:5},
            {skillName:"GIT", rating:6},
            {skillName:"MySql", rating:7},
        ]
    },
    { year:"2024", heading:"Internship", description:"Pursued internship in Full stack development using react and java",
        popupDescription: "I am a passionate Full Stack Developer with hands-on experience from my internship, where I worked with React.js and Java to build dynamic, user-friendly applications. I gained valuable skills in both front-end and back-end development, focusing on creating seamless, responsive interfaces and efficient server-side solutions. Eager to apply my technical expertise and continue growing in the development field.",
        skills: [],
    },
    { year:"2021 - 2024", heading:"Engineering", description:"Pursued engineering degree in Electronics and telecommunication",
        popupDescription:"I have completed my Engineering degree in Electronics and Telecommunication with a CGPA of 7.8. During my studies, I gained a strong foundation in both hardware and software concepts, with a particular interest in programming and technology. This background has equipped me with problem-solving skills and a technical mindset, which I now apply to my career in full-stack development.",
        skills: [],

    },
    { year:"2018 - 2021", heading:"Diploma", description:"Pursued diploma in Information technology", 
        popupDescription:"I have completed a Diploma in Information Technology, where I developed a solid understanding of computer science fundamentals, programming, and system design. This academic experience provided me with a strong technical foundation, which I continue to build upon in my career as a Full Stack Developer, focusing on both front-end and back-end technologies.",
        skills: [],

    },
    { year:"2014 - 2016", heading:"HSC", description:"Science student", 
        popupDescription:'',
        skills: [],
    },
    { year:"2013-2014", heading:"SSC", description:"Passout from school",
        popupDescription:'',
        skills: [],
    },
]
const AboutMe = () => {
    const [visible, setVisible] = useState(false);
    const [cardData, setCardData] = useState(null);
    const handleClick = (val, cardDetails) => {
        setVisible(val);
        setCardData(cardDetails);
        document.body.style.overflowY = val ? 'hidden' : 'auto';
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
                    <div className="timeline">
                        <ul>
                            {
                                timelineData.map((card, index) => {
                                    return <li key={index}>
                                            <div className="timeline-card" onClick={() => handleClick(true, card)}>
                                                <p>{card.year}</p>
                                                <h3>{card.heading}</h3>
                                                <p>{card.description}</p>
                                            </div>
                                        </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Popup visible={visible} onHandleClick={handleClick} popupData={cardData}/>
    </>
}

export default AboutMe;