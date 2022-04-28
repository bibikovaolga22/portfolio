import './Contacts.css';
import line from '../images/line.svg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';


const Contacts = () => {
    return (

        <section className='contacts' id='contacts'>


            <div className='info'>
                <h2><span>03.</span>Contacts   <img src={line} alt="Line" /> </h2>

                <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    variants={{
                        hidden: { y: 40, opacity: 0 },
                        visible: { y: 0, opacity: 1 }
                    }}>Get In Touch</motion.h3>
                <motion.p initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { y: 40, opacity: 0 },
                        visible: { y: 0, opacity: 1 }
                    }}>Currently I am looking for  new opportunities and my inbox is always open. You can send message on my email: bibikovaolga777@gmail.com</motion.p>
                <motion.div initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    variants={{
                        hidden: { y: 40, opacity: 0 },
                        visible: { y: 0, opacity: 1 }
                    }} className='icon-box'>
                    <a href='https://www.linkedin.com/in/olgabibikova/' target="_blank"><FaLinkedin /></a>
                    <a href='https://github.com/bibikovaolga22' target='_blank'><FaGithub /></a>

                </motion.div>
                <div className='button'>
                    <motion.button initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.5 }}

                        variants={{
                            hidden: { y: 40, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}
                    ><a href="mailto:bibikovaolga777@gmail.com">Say Hello</a></motion.button>
                </div>

                <p>Designed and Build by Olga Bibikova</p>
            </div>




        </section>









    );
}

export default Contacts;