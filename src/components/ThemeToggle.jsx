import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                padding: '10px 20px',
                borderRadius: '30px',
                border: '1px solid var(--border-color)',
                background: 'var(--card-bg)',
                color: 'var(--text-color)',
                backdropFilter: 'blur(10px)',
                zIndex: 1000,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '0.8rem',
                boxShadow: '0 0 15px var(--glow-color)',
            }}
        >
            {theme === 'night' ? 'DÍA' : 'NOCHE'}
        </button>
    );
};

export default ThemeToggle;
