import React from 'react';

const SectionItems = ({ data, onUpdate }) => {
    const handleItemChange = (index, val) => {
        // Determine key to update. 
        // The items have 'registro_cauhepe_netter_0_5' usually empty string.
        const newItem = { ...data.items[index], registro_cauhepe_netter_0_5: val };

        const newData = { ...data };
        newData.items = [...data.items];
        newData.items[index] = newItem;
        onUpdate(newData);
    };

    return (
        <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: 'var(--color-pistachio)', marginBottom: '15px' }}>{data.nombre}</h3>
            <div style={{ display: 'grid', gap: '20px' }}>
                {data.items.map((item, index) => (
                    <div key={index} style={{
                        padding: '15px',
                        background: 'var(--input-bg)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '10px'
                    }}>
                        <div style={{ marginBottom: '10px' }}>
                            <strong style={{ color: 'var(--color-gold)' }}>{item.letra}) {item.nombre}</strong>
                        </div>
                        <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '10px' }}>
                            {item.orden_evaluacion_funcional}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <label>Registro (0-5):</label>
                            <input
                                type="number"
                                min="0" max="5"
                                value={item.registro_cauhepe_netter_0_5}
                                onChange={(e) => handleItemChange(index, e.target.value)}
                                style={{
                                    padding: '8px',
                                    borderRadius: '5px',
                                    border: '1px solid var(--border-color)',
                                    background: 'transparent',
                                    color: 'var(--text-color)',
                                    width: '60px'
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionItems;
