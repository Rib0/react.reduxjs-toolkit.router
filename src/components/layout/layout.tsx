import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from '@/components/navigation';

const Layout: React.FC = () => {
    return (
        <div>
            <Navigation />
            <main>
                <Outlet />
            </main>            
        </div>
    );
};

export { Layout };
