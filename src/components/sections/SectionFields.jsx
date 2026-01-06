import React from 'react';
import FieldInput from '../shared/FieldInput';

const SectionFields = ({ data, onChange }) => {
    const containerStyle = {
        marginBottom: '30px',
        padding: '20px',
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '15px'
    };

    const handleFieldChange = (index, newVal) => {
        // We update either 'valor' or 'seleccion' depending on what expected.
        // The FieldInput component sends the value.
        // We need to know if we target 'valor' or 'seleccion'.
        // Heuristic: If 'opciones' exists, target 'seleccion', else 'valor'.
        const field = data.campos[index];
        const key = field.opciones ? 'seleccion' : 'valor';
        const fieldData = { ...field, [key]: newVal };
        onChange(index, fieldData);
    };

    return (
        <div style={containerStyle}>
            {data.nombre && (
                <h3 style={{ color: 'var(--color-pistachio)', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                    {data.id ? `${data.id}. ` : ''}{data.nombre || data.lado}
                </h3>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
                {data.campos.map((field, index) => (
                    <FieldInput
                        key={index}
                        field={field}
                        onChange={(val) => handleFieldChange(index, val)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionFields;
