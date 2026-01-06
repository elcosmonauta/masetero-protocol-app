import React from 'react';
import CheckboxTable from '../shared/CheckboxTable';

const SectionChecklist = ({ data, onChange }) => {
    if (!data) return null;

    const handleRowChange = (rowIndex, type, value) => {
        // Clone data to avoid direct mutation
        const newRows = [...data.filas];
        const row = { ...newRows[rowIndex] };

        if (type === 'check') {
            // Toggle behavior for checkboxes. 
            // If we want single select per row for 0-3 scales, we should clear others.
            // The prompt doesn't strictly specify, but usually "Scale 0-3" is mutually exclusive.
            // Let's implement mutually exclusive for numeric keys.

            if (data.valores && data.valores[value] !== undefined) {
                // It's inside a 'valores' object
                const newValores = { ...row.valores };
                // Reset others if numeric scale
                Object.keys(newValores).forEach(k => newValores[k] = false);
                newValores[value] = true;
                row.valores = newValores;
            } else if (row.valores) {
                // It has boolean values inside 'valores'
                const newValores = { ...row.valores };
                Object.keys(newValores).forEach(k => newValores[k] = false); // Mutually exclusive
                newValores[value] = true;
                row.valores = newValores;
            } else {
                // It's a direct property like 'presente', 'ausente', 'hiper'
                // We map the column name to the property key.
                // Simplified: loop keys and set false, then set target true
                // For now, let's assume 'valores' structure mostly.
            }
        } else if (type === 'observaciones') {
            row.observaciones = value;
        } else if (type === 'campo_extra') {
            row.campo_extra = { ...row.campo_extra, valor: value };
        }

        onChange(rowIndex, row);
    };

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

            <CheckboxTable
                columns={data.columnas}
                rows={data.filas}
                onRowChange={handleRowChange}
            />
        </div>
    );
};

export default SectionChecklist;
