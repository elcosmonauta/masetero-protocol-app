import React from 'react';

const InputGroup = ({ label, value, onChange, placeholder, type = "text" }) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <label style={{
                display: 'block',
                marginBottom: '8px',
                color: 'var(--color-gold)',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{
                    width: '100%',
                    padding: '12px 15px',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    color: 'var(--text-color)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-purple)';
                    e.target.style.boxShadow = '0 0 10px var(--glow-color)';
                }}
                onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-color)';
                    e.target.style.boxShadow = 'none';
                }}
            />
        </div>
    );
};

export default InputGroup;
