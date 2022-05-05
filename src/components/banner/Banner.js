
import "../banner/Banner.css";
import { motion } from 'framer-motion';
import ellipse1 from '../images/ellipse1.svg';
import ellipse2 from '../images/ellipse2.svg';
import ellipse3 from '../images/ellipse3.svg';
import resume from '../docs/Resume-Olga-Bibikova.pdf'

const Banner = () => {

    return (

        <section className="banner">


            <div className="text">
                <motion.p initial={{ y: 30, opacity: 0.5 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}> Hi, my name is </motion.p>

                <motion.h1
                    initial={{ y: 30, opacity: 0.5 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}

                > Olga Bibikova.<br /> <span> I build things for the web.</span></motion.h1>
                <motion.p
                    initial={{ y: 30, opacity: 0.3 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}> 
                    I'm a frontend developer and a UX designer who's open for new challenges and looking for opportunities of 
                    working on real-life projects.
                    </motion.p>


                <motion.button
                    initial={{ y: 30, opacity: 0.5 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.3 }}


                    type='button' > <a href={resume} target="_blank"> Resume</a>  </motion.button>


            </div>

            <div className="image-container">
                <motion.div className="item1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                > <img src={ellipse1} alt="ellipse" /> </motion.div>
                <motion.div className="item2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}><img src={ellipse2} alt="ellipse" /> </motion.div>
                <motion.div className="item3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1.2 }}><img src={ellipse3} alt="ellipse" /> </motion.div>


            </div>


        </section >



    );
}

export default Banner;