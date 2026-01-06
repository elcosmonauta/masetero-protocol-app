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

            if (row.valores && row.valores[value] !== undefined) {
                const newValores = { ...row.valores };
                const isCurrentlyChecked = newValores[value];

                // Mutually exclusive: if we check one, we uncheck others
                // But if we click the same one, we toggle it off
                if (isCurrentlyChecked) {
                    newValores[value] = false;
                } else {
                    Object.keys(newValores).forEach(k => newValores[k] = false);
                    newValores[value] = true;
                }
                row.valores = newValores;
            } else if (row.valores) {
                // If it has 'valores' but the key doesn't match exactly? 
                // Should not happen with current data, but let's be safe.
                const newValores = { ...row.valores };
                if (newValores[value]) {
                    newValores[value] = false;
                } else {
                    Object.keys(newValores).forEach(k => newValores[k] = false);
                    newValores[value] = true;
                }
                row.valores = newValores;
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
            {data.nombre && (
                <h3 style={{
                    color: 'var(--color-pistachio)',
                    borderBottom: '1px solid var(--border-color)',
                    paddingBottom: '10px',
                    marginBottom: '20px'
                }}>
                    {data.id ? `${data.id}. ` : ''}{data.nombre}
                </h3>
            )}


            <CheckboxTable
                columns={data.columnas}
                rows={data.filas}
                onRowChange={handleRowChange}
            />
        </div>
    );
};

export default SectionChecklist;
