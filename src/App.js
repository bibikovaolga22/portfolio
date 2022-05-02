import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contacts from './components/contacts/Contacts';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import lineHor from './components/images/lineHor.svg';
import email from './components/images/email.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from "react-icons/fa";

function App() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });


  }, [])

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'

    })

  }

  return (


    < div className="App" >

      <Header />
      <Banner />
      <About />
      <Projects />
      <Contacts />
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }} className='fixed-icons'>

        <a href='https://www.linkedin.com/in/olgabibikova/' target="_blank"><FaLinkedin /></a>
        <a href='https://github.com/bibikovaolga22?tab=repositories' target='_blank'><FaGithub /></a>

        <img src={lineHor} alt='horisontal-line' />
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className='email-fixed'>
        <img src={email} alt='email' />
        <img src={lineHor} alt='horisontal-line' />
      </motion.div>
      <AnimatePresence>
        {showButton && (
          <motion.button onClick={scrollToTop} className='back-to-top'
            initial={{ y: 30, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ delay: 0, duration: 0.3 }}
          > <FaArrowUp /> </motion.button>

        )}
      </AnimatePresence>

    </div >
  );
}

export default App;
