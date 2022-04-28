import './Left.css';
import landingPage from '../images/landingPage.png';
import border from '../images/border.svg';
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { motion } from 'framer-motion';


const Left = ({ headline, name, description, usedTechnologies, background }) => {






    return (

        < motion.div initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
            }} className='card'>

            <div className='img-container'>

                <div className='overlay'>
                </div>
                <div className='image'>
                    <img src={background} alt='Bookshelf-app' />
                    <img src={border} alt="Border" />
                </div>

            </div>
            <div className='text-container'>
                <h3>{headline} </h3>
                <h2>{name} </h2>
                <p>{description}</p>
                <h4>{usedTechnologies}</h4>
                <div className='icons'>
                    <FiGithub />
                    <FiExternalLink />

                </div>
            </div>


        </ motion.div>








    );
}

export default Left;