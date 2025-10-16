import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white dark: bg-gray-800 shadow mt-auto p-4">
            <div className="max-w-7xl mx-auto text-center text-gray-500 dark: text-gray-400">
                <p> {new Date().getFullYear}Task Manager. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;