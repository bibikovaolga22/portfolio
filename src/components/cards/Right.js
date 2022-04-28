import './Right.css';

import border from '../images/border.svg';
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { motion } from 'framer-motion';


const Right = ({ headline, name, description, usedTechnologies, background }) => {
    return (

        < motion.div initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
            }} className='card-right'>

            <div className='text-container-right'>
                <h3>{headline}</h3>
                <h2> {name}</h2>
                <p>{description}</p>
                <h4>{usedTechnologies}</h4>
                <div className='icons'>
                    <FiGithub />
                    <FiExternalLink />

                </div>
            </div>
            <div className='img-container-right'>

                <div className='overlay-right'>
                </div>
                <div className='image-right'>
                    <img src={background} alt='Landing page' />
                    <img src={border} alt="Border" />
                </div>

            </div>


        </ motion.div>








    );
}

export default Right;