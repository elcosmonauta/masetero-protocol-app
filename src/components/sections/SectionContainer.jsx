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
    if (data.opciones && data.plantillas_texto) {
        return <SectionDiagnosis data={data} onUpdate={onUpdate} />;
    }

    // 2. Subsections Container (Recursion)
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
                <div style={{ borderLeft: '2px solid rgba(255,255,255,0.05)', paddingLeft: '20px' }}>
                    {data.subsecciones.map((sub, index) => (
                        <div key={index} style={{ marginBottom: '30px' }}>
                            <SectionContainer
                                data={sub}
                                onUpdate={(newSubData) => handleSubsectionUpdate(index, newSubData)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // 3. Composite or Single Section
    return (
        <div style={{ marginBottom: '40px' }}>
            {/* Header for the individual section if it's not a subsection parent */}
            {(data.nombre || data.lado) && (
                <h3 style={{
                    color: 'var(--color-pistachio)',
                    borderBottom: '1px solid var(--border-color)',
                    paddingBottom: '10px',
                    marginBottom: '20px'
                }}>
                    {data.id ? `${data.id}. ` : ''}{data.nombre || data.lado}
                </h3>
            )}

            {/* 3a. Items Section (Section 9.2) */}
            {data.items && <SectionItems data={data} onUpdate={onUpdate} />}

            {/* 3b. Mixed Blocks (Section 12A - ATM) */}
            {data.tipo === 'bloque_mixto' && <SectionMixed data={data} onUpdate={onUpdate} />}

            {/* 3c. Generic Fields Section */}
            {data.campos && !data.componentes && (
                <SectionFields data={{ ...data, nombre: "" }} onChange={handleFieldsChange} />
            )}

            {/* 3d. Checkbox Tables */}
            {data.tipo === 'tabla_checkbox' && (
                <SectionChecklist data={{ ...data, nombre: "" }} onChange={handleChecklistChange} />
            )}

            {/* 3e. Scale Section */}
            {data.escala && <SectionScale data={data} />}

            {/* Fallback for empty or unknown sections */}
            {!data.items && !data.subsecciones && data.tipo !== 'bloque_mixto' && !data.campos && !data.escala && data.tipo !== 'tabla_checkbox' && (
                <div style={{ opacity: 0.5, fontStyle: 'italic' }}>Sección sin contenido definido.</div>
            )}
        </div>
    );
};

export default SectionContainer;
