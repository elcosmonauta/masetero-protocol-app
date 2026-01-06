import React, { useState } from 'react';

const SectionDiagnosis = ({ data, onUpdate }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    // This component handles the logic. 
    // The 'opciones' in JSON are strings like "OPCIÓN A ...".
    // We match specific logic or just use index.

    // We assume data has 'opciones' array.

    const handleSelect = (option) => {
        setSelectedOption(option);
        // We could also update the data state if we want to persist the selection.
        // For now, local state to show template.
    };

    const getTemplate = () => {
        if (!selectedOption) return null;
        if (selectedOption.includes("OPCIÓN A")) return data.plantillas_texto.opcion_a_candidato;
        if (selectedOption.includes("OPCIÓN B")) return data.plantillas_texto.opcion_b_no_candidato;
        return "";
    };

    return (
        <div style={{ marginBottom: '40px', padding: '20px', border: '1px solid var(--color-gold)', borderRadius: '15px', background: 'rgba(212, 175, 55, 0.05)' }}>
            <h2 style={{ color: 'var(--color-gold)', textAlign: 'center', marginBottom: '30px' }}>{data.id}. {data.nombre}</h2>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '30px', flexWrap: 'wrap' }}>
                {data.opciones.map((op, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelect(op)}
                        style={{
                            padding: '15px 30px',
                            background: selectedOption === op ? 'var(--color-gold)' : 'transparent',
                            color: selectedOption === op ? '#000' : 'var(--color-gold)',
                            border: '1px solid var(--color-gold)',
                            borderRadius: '30px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            boxShadow: selectedOption === op ? '0 0 20px rgba(212, 175, 55, 0.4)' : 'none'
                        }}
                    >
                        {op}
                    </button>
                ))}
            </div>

            {selectedOption && (
                <div style={{ animation: 'fadeIn 0.5s ease' }}>
                    <h3 style={{ color: 'var(--text-color)', marginBottom: '15px' }}>Plantilla Sugerida:</h3>
                    <textarea
                        value={getTemplate()}
                        readOnly // Or editable if desired, but here just display 
                        style={{
                            width: '100%',
                            minHeight: '300px',
                            background: 'var(--input-bg)',
                            border: '1px solid var(--border-color)',
                            color: 'var(--text-color)',
                            padding: '20px',
                            borderRadius: '10px',
                            fontFamily: 'monospace',
                            lineHeight: '1.5',
                            resize: 'vertical'
                        }}
                    />
                    <p style={{ opacity: 0.6, fontSize: '0.9rem', marginTop: '10px' }}>
                        * Copie y pegue este texto en el informe final.
                    </p>
                </div>
            )}
        </div>
    );
};

export default SectionDiagnosis;
