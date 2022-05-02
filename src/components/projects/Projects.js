import './Projects.css';
import Left from '../cards/Left.js';
import line from '../images/line.svg';
import Right from '../cards/Right.js';
import landingPage from '../images/landingPage.png';
import bookshelf from '../images/bookshelf.png'
import travelApp from '../images/travelapp3.png';
import mytrail1 from '../images/mytrail1.png';


const Projects = () => {
    return (
        <section className='projects' id='projects'>
            <div className='container'>
                <h2><span>02.</span>Projects <img src={line} alt="Line" /> </h2>
                <Left headline='Udacity Project / Front End' name='Bookshelf App' description="Bookshelf is an app where users can find books by their name and sort them between shelves.
                Users can navigate between two pages : from the main page with shelves to the search page.
                Also there is an option to remove books from the shelf. " usedTechnologies="React, Framer Motion, Books API" background={bookshelf} externalLink="https://github.com/bibikovaolga22/bookshelf-app-react" />
                <Right headline='Udacity  Project / Front End' name='Landing Page' description='Landing page with dynamic and updating navigation, allowing users easily navigate  between page sections. It demonstrates such features as: 
                smooth scroll and  steaky header and also button that brings user to the top of the page.  ' usedTechnologies='HTML, CSS, Java Script' background={landingPage} externalLink="https://github.com/bibikovaolga22/landing-page-udacity/tree/master" />
                <Left headline='Udacity  Project / Front End' name='Journey Planner App ' description="An app where users can plan their journey and get the 
                information about  destination.By typing city name and departure date they can see city's photo, weather for departure date 
                and a number of days between current date and the chosen date." usedTechnologies="HTML,CSS, JavaScript, Webpack" background={travelApp} externalLink="https://github.com/bibikovaolga22/travel-app" />
                <Right headline='Udacity  Project / UX' name='MyTrail App ' description='A capstone project of UX Deisgn course. An app where users would be able to find all the necessary info about 
                their trail. ' usedTechnologies='Figma, Miro, Zeplin' background={mytrail1} externalLink="https://github.com/bibikovaolga22/my-trail-ux-project" />
            </div>

        </section>




    );
}

export default Projects;