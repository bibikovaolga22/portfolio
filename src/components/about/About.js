import "./About.css"
import me from '../images/me3.png';
import line from '../images/line.svg';
import me5 from '../images/me5.svg'
import { motion } from 'framer-motion';



const About = () => {
    return (


        <section className="about-me" id='about'>
            <div className="about-me-box">
                <motion.h2 initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                    }}

                ><span>01.</span>About Me    <img src={line} alt="Line" /> </motion.h2>

                <div className="about-info">

                    <div className="line">
                        <motion.p initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            variants={{
                                hidden: { y: 30, opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                            }} >
                            I'm a self-taught developer specializig in frontend. I have been practicing my coding skills for almost 2 years now.
                            Since that time I accompleshed dosens of Frontend and UX projects some of which you can find in my portfolio. Also I earned several certificates
                            from Udacity Univercity and Codecademy Online Courses.
                        </motion.p>
                        <motion.h4 initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            variants={{
                                hidden: { y: 30, opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                            }}  >Here are a few technologies I work with:</motion.h4>

                        <motion.ul initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            variants={{
                                hidden: { y: 30, opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                            }} className="technologies">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Java Script</li>
                            <li>React</li>
                            <li>Webpack</li>
                            <li>SaSS</li>
                        </motion.ul>
                    </div>

                    <div className="my-image-container">
                        <motion.img src={me} alt='Me'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            variants={{
                                hidden: { x: -30, opacity: 0 },
                                visible: { x: 0, opacity: 1 }
                            }} />
                        <motion.img src={me5} alt="Ellipse"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            variants={{
                                hidden: { x: 100, opacity: 0 },
                                visible: { x: 0, opacity: 1 }
                            }} />
                    </div>
                </div>
            </div>



        </section>













    );
}

export default About;