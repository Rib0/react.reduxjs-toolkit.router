import React from 'react';
import { Link } from 'react-router-dom';

import { NAVIGATION_ITEMS } from '@/constants/router';

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul>
                {NAVIGATION_ITEMS.map((item) => (
                    <li key={item.path}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export { Navigation };
