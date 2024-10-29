
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-gray-800 text-gray-200 py-8 mt-5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Logo and Description */}
                    <div className="flex flex-col items-start">
                        <h2 className="text-2xl font-bold text-white mb-3">MealDB</h2>
                        <p className="text-gray-400">
                            Discover delicious recipes and meal ideas from around the world, tailored to your taste.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                            <li><Link to="/meals" className="hover:text-gray-400">Meals</Link></li>
                            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
                            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
                        <p>Email: support@mealdb.com</p>
                        <p>Phone: +123 456 7890</p>
                        <div className="mt-4 flex space-x-4">
                            <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
                            <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
                            <a href="https://instagram.com" className="hover:text-gray-400">Instagram</a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 w-full">
                    &copy; {new Date().getFullYear()} MealDB. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
