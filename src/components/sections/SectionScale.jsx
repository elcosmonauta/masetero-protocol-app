import React from 'react';

const SectionScale = ({ data }) => {
    return (
        <div style={{ marginBottom: '40px', padding: '20px', background: 'rgba(147, 197, 114, 0.1)', borderRadius: '10px', border: '1px solid var(--color-pistachio)' }}>
            <h3 style={{ color: 'var(--color-pistachio)', marginTop: 0 }}>{data.id}. {data.nombre}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                {data.escala.map((item, index) => (
                    <div key={index} style={{
                        padding: '10px',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        background: 'var(--card-bg)'
                    }}>
                        <strong style={{ color: 'var(--color-gold)', fontSize: '1.2rem', display: 'block', marginBottom: '5px' }}>
                            {item.puntaje}
                        </strong>
                        <span style={{ fontSize: '0.9rem' }}>{item.descripcion}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionScale;
