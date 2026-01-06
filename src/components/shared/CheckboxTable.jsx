import React from 'react';

const CheckboxTable = ({ columns, rows, onRowChange }) => {
    return (
        <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} style={{
                                textAlign: index === 0 ? 'left' : 'center',
                                padding: '10px',
                                color: 'var(--color-gold)',
                                borderBottom: '1px solid var(--border-color)',
                                width: index === 0 ? '40%' : 'auto'
                            }}>
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} style={{ borderBottom: '1px solid var(--border-color)' }}>
                            {/* Item Name */}
                            <td style={{ padding: '15px 10px' }}>
                                {row.item || row.parametro || row.movimiento || row.musculo || row.funcion || row.estructura}
                                {row.campo_extra && (
                                    <div style={{ marginTop: '5px' }}>
                                        <input
                                            type="text"
                                            placeholder={row.campo_extra.nombre}
                                            value={row.campo_extra.valor}
                                            onChange={(e) => onRowChange(rowIndex, 'campo_extra', e.target.value)}
                                            style={{
                                                background: 'var(--input-bg)',
                                                border: '1px solid var(--border-color)',
                                                color: 'var(--text-color)',
                                                padding: '5px',
                                                borderRadius: '4px',
                                                width: '80%'
                                            }}
                                        />
                                    </div>
                                )}
                            </td>

                            {/* Checkboxes for 0, 1, 2, 3 (or whatever keys are in values) */}
                            {columns.slice(1, columns.length - 1).map((colKey, colIndex) => {
                                // Determine the key in 'valores' that matches the column header (e.g., "0", "1")
                                // Sometimes headers are "Hiper", "Hipo".
                                const valKey = colKey.toLowerCase();
                                // We need to map exact key from inputs if possible, or use the col name.
                                // The JSON uses exact strings matching keys in 'valores' usually, or 0,1,2,3.
                                // Let's assume the column header text matches the key in 'valores'
                                const isChecked = row.valores?.[colKey] || row[colKey.toLowerCase()] === true;

                                // For 'valores' object
                                const handleCheck = () => {
                                    onRowChange(rowIndex, 'check', colKey);
                                };

                                return (
                                    <td key={colIndex} style={{ textAlign: 'center' }}>
                                        <div
                                            onClick={handleCheck}
                                            style={{
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '50%',
                                                border: isChecked ? '2px solid var(--color-purple)' : '2px solid var(--border-color)',
                                                background: isChecked ? 'var(--color-purple)' : 'transparent',
                                                boxShadow: isChecked ? '0 0 10px var(--glow-color)' : 'none',
                                                margin: '0 auto',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            {isChecked && <span style={{ fontSize: '12px', color: '#fff' }}>✓</span>}
                                        </div>
                                    </td>
                                );
                            })}

                            {/* Observations */}
                            <td style={{ padding: '10px' }}>
                                <textarea
                                    value={row.observaciones || ""}
                                    onChange={(e) => onRowChange(rowIndex, 'observaciones', e.target.value)}
                                    style={{
                                        width: '100%',
                                        background: 'var(--input-bg)',
                                        border: '1px solid var(--border-color)',
                                        color: 'var(--text-color)',
                                        padding: '8px',
                                        borderRadius: '4px',
                                        resize: 'vertical',
                                        minHeight: '40px'
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CheckboxTable;
