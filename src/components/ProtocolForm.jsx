import React, { useState } from 'react';
import { protocolData } from '../protocolData';
import SectionContainer from './sections/SectionContainer';

const ProtocolForm = () => {
    const [formData, setFormData] = useState(protocolData);

    const handleSectionUpdate = (index, newSectionData) => {
        const newFormData = { ...formData };
        newFormData.secciones = [...formData.secciones];
        newFormData.secciones[index] = newSectionData;
        setFormData(newFormData);
    };

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 20px 40px' }}>
            <h1 style={{
                textAlign: 'center',
                color: 'var(--color-gold)',
                marginBottom: '40px',
                textShadow: '0 0 10px var(--glow-color)',
                fontSize: '2rem',
                fontFamily: 'sans-serif'
            }}>
                {formData.titulo}
            </h1>

            <div style={{
                background: 'var(--card-bg)',
                backdropFilter: 'blur(10px)',
                padding: '40px',
                borderRadius: '20px',
                border: '1px solid var(--border-color)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            }}>
                {formData.secciones.map((section, index) => (
                    <SectionContainer
                        key={index}
                        data={section}
                        onUpdate={(newData) => handleSectionUpdate(index, newData)}
                    />
                ))}
            </div>

            <div style={{ marginTop: '50px', textAlign: 'center' }}>
                <button style={{
                    background: 'var(--color-gold)',
                    color: '#000',
                    border: 'none',
                    padding: '15px 40px',
                    fontSize: '1.2rem',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    boxShadow: '0 0 20px var(--color-gold)'
                }} onClick={() => {
                    const blob = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `protocolo_masetero_${new Date().toISOString().slice(0, 10)}.json`;
                    a.click();
                }}>
                    DESCARGAR DATOS (JSON)
                </button>
                <p style={{ marginTop: '10px', fontSize: '0.8rem', opacity: 0.7 }}>
                    * Funcionalidad para guardar localmente
                </p>
            </div>
        </div>
    );
};

export default ProtocolForm;
