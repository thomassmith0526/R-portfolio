import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
    return (
        <Navbar
            links={[
                <Link key={1} className="nav-link text-light" to="/about">
                    About Me
                </Link>,
                // <Link key={2} className="nav-link text-warning" to="/portfolio">
                //     Portfolio
                // </Link>,
                <Link key={3} className="nav-link text-light" to="/contact">
                    Contact
                </Link>,
                <Link key={4} className="nav-link text-dark" to="/resume">
                    Resume
                </Link>,
                <Link key={5} className="nav-link text-success" to="/green">
                    Green Acre
                </Link>,
                <Link key={6} className="nav-link text-primary" to="/sql">
                   Employee Database
                </Link>,
                <Link key={7} className="nav-link text-warning" to="/weather">
                    Weather App
                </Link>,
            ]}
        />
    );
}