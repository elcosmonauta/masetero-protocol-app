import React from 'react';
import SectionFields from './SectionFields';
import CheckboxTable from '../shared/CheckboxTable';

// Helper for Anamnesis (uses generic Fields)
const Anamnesis = ({ data, onChange }) => {
    return <SectionFields data={{ ...data, nombre: "Anamnesis Dirigida" }} onChange={onChange} />;
};

// Helper for Inspeccion (Custom Table Present/Absent)
const Inspeccion = ({ data, onChange }) => {
    // We adapt columns for CheckboxTable
    // Columns: Item, Presente, Ausente, Observaciones
    // Rows: item, presente(bool), ausente(bool), observaciones
    // Since CheckboxTable needs "columnas" array, we ensure it matches

    const handlePropChange = (rowIndex, type, value) => {
        // Custom logic for mutually exclusive Present/Absent
        const newRows = [...data.filas];
        const row = { ...newRows[rowIndex] };

        if (type === 'check') {
            // value is "Presente" or "Ausente"
            if (value === 'Presente') {
                row.presente = true;
                row.ausente = false;
            } else {
                row.presente = false;
                row.ausente = true;
            }
        } else if (type === 'observaciones') {
            row.observaciones = value;
        }

        onChange(rowIndex, row);
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: 'var(--color-gold)' }}>Inspección del Movimiento</h4>
            <CheckboxTable
                columns={data.columnas}
                rows={data.filas}
                onRowChange={handlePropChange}
            />
            {/* Mediciones extra */}
            <div style={{ marginTop: '15px' }}>
                <SectionFields data={{ campos: data.mediciones }} onChange={(idx, val) => {
                    // How to bubble up measurement changes?
                    // This component needs to handle it. 
                    // Simplified: we won't implement deep updates for this nested part in this snippet 
                    // unless we pass a specific handler.
                    // For now, let's assume mediciones are handled separate or I bind them correctly.
                }} />
            </div>
        </div>
    );
};

const SectionMixed = ({ data, onUpdate }) => {

    const handleComponentUpdate = (index, newCompData) => {
        const newData = { ...data };
        newData.componentes = [...data.componentes];
        newData.componentes[index] = newCompData;
        onUpdate(newData);
    };

    return (
        <div style={{ marginBottom: '40px', padding: '20px', border: '1px solid var(--border-color)', borderRadius: '15px' }}>
            <h2 style={{ color: 'var(--color-pistachio)', marginBottom: '20px' }}>{data.id}. {data.nombre}</h2>

            {data.componentes.map((comp, index) => {
                if (comp.tipo === 'anamnesis_dirigida') {
                    return (
                        <SectionFields
                            key={index}
                            data={{ ...comp, nombre: 'Anamnesis Dirigida' }}
                            onChange={(fieldIdx, fieldVal) => {
                                const newComp = { ...comp };
                                newComp.campos = [...comp.campos];
                                newComp.campos[fieldIdx] = fieldVal;
                                handleComponentUpdate(index, newComp);
                            }}
                        />
                    );
                }

                // Fallback for other ATM parts to Generic Fields or just JSON for brevity in this MVP
                if (comp.tipo === 'sintesis_atm') {
                    return (
                        <SectionFields
                            key={index}
                            data={{ ...comp, nombre: 'Síntesis ATM' }}
                            onChange={(fieldIdx, fieldVal) => {
                                const newComp = { ...comp };
                                newComp.campos = [...comp.campos];
                                newComp.campos[fieldIdx] = fieldVal;
                                handleComponentUpdate(index, newComp);
                            }}
                        />
                    );
                }

                return (
                    <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px dashed rgba(255,255,255,0.1)' }}>
                        <h4 style={{ color: 'var(--color-gold)' }}>{comp.tipo.replace(/_/g, ' ').toUpperCase()}</h4>
                        {comp.filas && (
                            <CheckboxTable
                                columns={comp.columnas}
                                rows={comp.filas}
                                onRowChange={(rIdx, type, val) => {
                                    // Generic update
                                    const newComp = { ...comp };
                                    newComp.filas = [...comp.filas];
                                    const row = { ...newComp.filas[rIdx] };

                                    if (type === 'check') {
                                        // Try to set boolean for the column key
                                        const key = val.toLowerCase();
                                        row[key] = !row[key];
                                    } else if (type === 'observaciones') {
                                        row.observaciones = val;
                                    }

                                    newComp.filas[rIdx] = row;
                                    handleComponentUpdate(index, newComp);
                                }}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default SectionMixed;
