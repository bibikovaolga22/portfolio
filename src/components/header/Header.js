import "../header/Header.css"
import logo from '../images/logo.svg';
import { motion } from 'framer-motion';
// import Contacts from "../contacts/Contacts";
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    return (


        <header>

            <div className="logo">
                <img src={logo} alt='Logo' />

            </div>

            <nav className="navigation">
                <ul className="nav-box">
                    <motion.li

                        initial={{ y: -80 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}><span>01.</span>
                        < HashLink to='#about' smooth  > About Me</ HashLink></motion.li>
                    <motion.li initial={{ y: -80 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}><span>02.</span>
                        < HashLink to='#projects' smooth  >Projects</ HashLink>
                    </motion.li>
                    <motion.li initial={{ y: -80 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}><span>03.</span>
                        < HashLink to='#contacts' smooth  > Contacts</ HashLink>
                    </motion.li>

                </ul>




            </nav>





        </header >






    )
}

export default Header;