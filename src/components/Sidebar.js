import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    //Early return pattern
    if (!isMenuOpen) return null;

    return (
        <div className='p-5 shadow-lg w-48'>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>Shorts</li>
            <li>Subscription</li>
            </ul>
            <ul>
            <h2 className='font-bold pt-4'>You</h2>
                <li>Your channel</li>
                <li>History</li>
                <li>Playlists</li>
                <li>Your videos</li>
                <li>Watch later</li>
                <li>Liked videos</li>
            </ul>
            <ul>
                <h2 className='font-bold pt-4'>Subscriptions</h2>
                <li>Akshay saini</li>
                <li>Carryminati</li>
                <li>TRS</li>
                <li>Tech Dev</li>
            </ul>
        </div>
    );
};

export default Sidebar;