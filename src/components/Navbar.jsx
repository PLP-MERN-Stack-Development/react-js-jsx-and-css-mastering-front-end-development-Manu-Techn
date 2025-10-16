import React from 'react';
import Button from './Button'

const Navbar = () => {
    return (
        <nav className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Task Manager</h1>
            <div className="flex gap-2">
                <Button variant="primary" size="sm">Home</Button>
                <Button variant="secondary" size="sm">About</Button>
                <Button variant="secondary" size="sm">Contact</Button>
            </div>
        </nav>
    );
};

export default Navbar;