import './about-me.css';
const timelineData = [
    { year:"2025 - Persent", heading:"Job Hunting", description:"Looking for React js job at entry level in Pune."},
    { year:"2024", heading:"Internship", description:"Pursued internship in Full stack development using react and java"},
    { year:"2021 - 2024", heading:"Engineering", description:"Pursued engineering degree in Electronics and telecommunication"},
    { year:"2018 - 2021", heading:"Diploma", description:"Pursued diploma in Information technology"},
    { year:"2014 - 2016", heading:"HSC", description:"Science student"},
    { year:"2013-2014", heading:"SSC", description:"Passout from school"},
]
const AboutMe = () => {
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
                                            <div className="timeline-card">
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
    </>
}

export default AboutMe;