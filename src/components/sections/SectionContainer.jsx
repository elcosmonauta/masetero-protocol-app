import React from 'react';
import SectionFields from './SectionFields';
import SectionScale from './SectionScale';
import SectionChecklist from './SectionChecklist';
import SectionMixed from './SectionMixed';
import SectionItems from './SectionItems';
import SectionDiagnosis from './SectionDiagnosis';

const SectionContainer = ({ data, onUpdate }) => {
    if (!data) return null;

    // Handler for subsections traversal (recursive)
    const handleSubsectionUpdate = (subIndex, newSubData) => {
        const newData = { ...data };
        newData.subsecciones = [...data.subsecciones];
        newData.subsecciones[subIndex] = newSubData;
        onUpdate(newData);
    };

    // Handler for Checklist Row updates (for tabla_checkbox)
    const handleChecklistChange = (rowIndex, newRow) => {
        const newData = { ...data };
        newData.filas = [...data.filas];
        newData.filas[rowIndex] = newRow;
        onUpdate(newData);
    };

    // Handler for Section Fields updates (for generic fields)
    const handleFieldsChange = (fieldIndex, newFieldData) => {
        const newData = { ...data };
        newData.campos = [...data.campos];
        newData.campos[fieldIndex] = newFieldData;
        onUpdate(newData);
    };

    // --- Render Logic ---

    // 1. Diagnosis Section (Section 14)
    // Detected by presence of 'opciones' and 'plantillas_texto'
    if (data.opciones && data.plantillas_texto) {
        return <SectionDiagnosis data={data} onUpdate={onUpdate} />;
    }

    // 2. Items Section (Section 9.2)
    // Detected by presence of 'items' array
    if (data.items) {
        return <SectionItems data={data} onUpdate={onUpdate} />;
    }

    // 3. Mixed Blocks (Section 12A - ATM)
    // Explicit type check
    if (data.tipo === 'bloque_mixto') {
        return <SectionMixed data={data} onUpdate={onUpdate} />;
    }

    // 4. Generic Fields Section (Section 1, 10, 12 subsections, 13)
    // Condition: has 'campos' and is not a mixed component container
    if (data.campos && !data.componentes) {
        return <SectionFields data={data} onChange={handleFieldsChange} />;
    }

    // 5. Scale Section (Section 2)
    // Heuristic: ID 2 or name match
    if (data.id === '2' || (data.nombre && data.nombre.includes('ESCALA DE PUNTUACIÓN'))) {
        return <SectionScale data={data} />;
    }

    // 6. Subsections Container (Recursion)
    if (data.subsecciones) {
        return (
            <div style={{ marginBottom: '40px' }}>
                {data.nombre && (
                    <h2 style={{
                        color: 'var(--color-pistachio)',
                        borderBottom: '1px solid var(--border-color)',
                        paddingBottom: '10px',
                        marginBottom: '20px'
                    }}>
                        {data.id ? `${data.id}. ` : ''}{data.nombre}
                    </h2>
                )}
                {data.subsecciones.map((sub, index) => (
                    <div key={index} style={{ marginLeft: '10px', paddingLeft: '10px', marginBottom: '30px' }}>
                        <SectionContainer
                            data={sub}
                            onUpdate={(newSubData) => handleSubsectionUpdate(index, newSubData)}
                        />
                    </div>
                ))}
            </div>
        );
    }

    // 7. Checkbox Tables (Section 3, 4, 5, 6, 7, 8, 9.3, 9.4)
    if (data.tipo === 'tabla_checkbox') {
        return <SectionChecklist data={data} onChange={handleChecklistChange} />;
    }

    // 8. Fallback for unhandled types
    return (
        <div style={{ marginBottom: '40px', padding: '20px', border: '1px dashed var(--border-color)', borderRadius: '10px' }}>
            <h3>{data.id} - {data.nombre}</h3>
            <p style={{ opacity: 0.5 }}>Tipo: {data.tipo || 'Desconocido'}</p>
            <pre style={{ overflow: 'auto', maxHeight: '100px', fontSize: '0.8rem', background: 'rgba(0,0,0,0.3)', padding: '10px' }}>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
};

export default SectionContainer;
