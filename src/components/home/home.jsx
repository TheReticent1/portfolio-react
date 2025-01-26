import Cards from "../../shared/components/cards/cards";
import "./home.css";

const cardsData = [
    {heading: "01 | Heading1", logo:"/imgs/studio.jpg", cardImage:"/imgs/intro.jpg", descriptionHeading:"Card Heading 1", description:"Card description 1"},
    {heading: "02 | Heading2", logo:"/imgs/intro.jpg", cardImage:"/imgs/studio.jpg", descriptionHeading:"Card Heading 2", description:"Card description 2"},
    {heading: "03 | Heading3", logo:"/imgs/studio.jpg", cardImage:"/imgs/intro.jpg", descriptionHeading:"Card Heading 3", description:"Card description 3"},
];
const Home = () => {
    return <>
        <div className="container">
            <div className="home-container">
                <div className="introduction">
                    <div className="heading gradient">Code Parth</div>
                    <div className="sub-heading">Full Stack Developer</div>
                    <div className="intro-img">
                        <div className="intro-img-text">
                            <pre>
                                <code>
                                    "Why do programmers prefer dark mode? Because the light attracts bugs." – Anonymous
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="work">
                    <div className="work-heading">Portfolio</div>
                    {
                        cardsData.map((item, index) => {
                           return <Cards cardsConfig={item} key={index}/>
                        })
                    }
                </div>
            </div>
        </div>
    </>
}

export default Home;