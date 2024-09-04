import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
    return (
        <Navbar
            links={[
                <Link key={1} className="nav-link text-light fs-2" to="/">
                    About Me
                </Link>,
                <Link key={2} className="nav-link text-light fs-2" to="/projects">
                    Portfolio
                </Link>,
                <Link key={3} className="nav-link text-light fs-2" to="/contact">
                    Contact
                </Link>,
                <Link key={4} className="nav-link text-light fs-2" to="/resume" >
                    Resume
                </Link>,
            ]}
        />
    );
}