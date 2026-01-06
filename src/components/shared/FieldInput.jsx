import React from 'react';

const FieldInput = ({ field, onChange }) => {
    const label = field.nombre || field.item;

    if (field.opciones) {
        return (
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', color: 'var(--color-gold)', marginBottom: '5px' }}>{label}</label>
                <select
                    value={field.seleccion || field.valor || ""}
                    onChange={(e) => onChange(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        background: 'var(--input-bg)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-color)',
                        borderRadius: '8px'
                    }}
                >
                    <option value="">Seleccionar...</option>
                    {field.opciones.map((op, i) => (
                        <option key={i} value={op}>{op}</option>
                    ))}
                </select>
            </div>
        );
    }

    return (
        <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', color: 'var(--color-gold)', marginBottom: '5px' }}>{label}</label>
            <input
                type="text"
                value={field.valor || ""}
                placeholder={field.formato || ""}
                onChange={(e) => onChange(e.target.value)}
                style={{
                    width: '100%',
                    padding: '10px',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-color)',
                    borderRadius: '8px'
                }}
            />
        </div>
    );
};

export default FieldInput;
