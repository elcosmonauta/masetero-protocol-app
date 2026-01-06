import React from 'react';
import InputGroup from '../shared/InputGroup';

const Section1 = ({ data, onChange }) => {
    if (!data) return null;

    return (
        <div style={{ marginBottom: '40px' }}>
            <h2 style={{
                color: 'var(--color-pistachio)',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '10px',
                marginBottom: '20px'
            }}>
                {data.id}. {data.nombre}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                {data.campos.map((campo, index) => (
                    <InputGroup
                        key={index}
                        label={campo.nombre}
                        value={campo.valor}
                        placeholder={campo.valor ? "" : `Ingrese ${campo.nombre}`}
                        onChange={(e) => onChange(index, e.target.value)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Section1;
