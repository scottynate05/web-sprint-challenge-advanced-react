import React from 'react'
import { useLightMode } from '../hooks/useLightMode'

const LightMode = () => {
    const [lightMode, setLightMode] = useLightMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setLightMode(!lightMode);
    };
    return(
        <>
            <nav className="navbar">
                <div>
                    <button
                        onClick={toggleMode}
                        className={lightMode ? 'toggle toggled' : 'toggle'}>Light Mode</button>
                </div>
            </nav>
        </>
    )
}
export default LightMode