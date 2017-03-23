import React from 'react';

import Menu1 from '../components/menu';

// Global CSS styles
import './global.css';

const App = (props) => (
    <div className="app-container">
        <Menu1 />
        <div className="page-container">
            {props.children}
        </div>
    </div>
);

export default App;