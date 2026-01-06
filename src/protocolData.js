export const protocolData = {
    "titulo": "PROTOCOLO DE MASETERO",
    "secciones": [
        {
            "id": "1",
            "nombre": "DATOS DE IDENTIFICACIÓN",
            "campos": [
                { "nombre": "Nombre Del Paciente", "valor": "" },
                { "nombre": "Edad", "valor": "" },
                { "nombre": "Diagnóstico Medico", "valor": "" },
                {
                    "nombre": "Motivo De Evaluación",
                    "valor": "Evaluación Pre-Infiltración De Masetero / Control Post Evaluación De Masetero"
                },
                { "nombre": "Fecha", "valor": "" }
            ]
        },
        {
            "id": "3",
            "nombre": "OBSERVACIÓN CLÍNICA – MASETERO EN REPOSO",
            "subsecciones": [
                {
                    "id": "3.1",
                    "nombre": "Evaluación Simetría Facial",
                    "campos": [
                        {
                            "nombre": "Proporción Facial (Tercio Medio vs Inferior)",
                            "opciones": ["Semejantes", "Tercio Inferior Mayor", "Tercio Inferior Menor"],
                            "seleccion": ""
                        },
                        {
                            "nombre": "Canto Externo Ojo a Comisura Labial (Derecho)",
                            "opciones": ["Semejante", "Asimétrica"],
                            "seleccion": ""
                        },
                        {
                            "nombre": "Canto Externo Ojo a Comisura Labial (Izquierdo)",
                            "opciones": ["Semejante", "Asimétrica"],
                            "seleccion": ""
                        }
                    ],
                    "tipo": "tabla_checkbox",
                    "columnas": ["Región", "Simétrico", "Asimétrico", "Descripción"],
                    "filas": [
                        { "item": "Plano Infraorbitario", "valores": { "Simétrico": false, "Asimétrico": false }, "observaciones": "" },
                        { "item": "Región Cigomática", "valores": { "Simétrico": false, "Asimétrico": false }, "observaciones": "" },
                        { "item": "Alas de la Nariz", "valores": { "Simétrico": false, "Asimétrico": false }, "observaciones": "" },
                        { "item": "Mejillas", "valores": { "Simétrico": false, "Asimétrico": false }, "observaciones": "" },
                        { "item": "Surco Nasolabial", "valores": { "Simétrico": false, "Asimétrico": false }, "observaciones": "" },
                        { "item": "Labio Superior", "valores": { "Simétrico": false, "Asimétrico": false }, "observaciones": "" },
                        { "item": "Comisura Labial", "valores": { "Simétrico": false, "Asimétrico": false }, "observaciones": "" },
                        { "item": "Labio Inferior", "valores": { "Simétrico": false, "Asimétrico": false }, "observaciones": "" },
                        { "item": "Mentón", "valores": { "Simétrico": false, "Asimétrico": false }, "observaciones": "" },
                        { "item": "Mandíbula (Cuerpo y Ramas)", "valores": { "Simétrico": false, "Asimétrico": false }, "observaciones": "" }
                    ]
                },
                {
                    "id": "3.2",
                    "nombre": "Músculo Masetero en Reposo",
                    "campos": [
                        {
                            "nombre": "Estado",
                            "opciones": ["Relajado", "Contraido (Apretamiento Dentario)"],
                            "seleccion": ""
                        },
                        { "nombre": "Descripción", "valor": "" }
                    ],
                    "tipo": "tabla_checkbox",
                    "columnas": ["Hallazgo", "Presente", "Observaciones"],
                    "filas": [
                        { "item": "Contorno Maseterino Visible Derecho", "valores": { "Presente": false }, "observaciones": "" },
                        { "item": "Contorno Maseterino Visible Izquierdo", "valores": { "Presente": false }, "observaciones": "" },
                        { "item": "Simetría de Volumen en Reposo", "valores": { "Presente": false }, "observaciones": "" },
                        { "item": "Prominencia Unilateral Evidente", "valores": { "Presente": false }, "observaciones": "" },
                        { "item": "Asimetría en Tercio Inferior Facial Asociada", "valores": { "Presente": false }, "observaciones": "" }
                    ]
                }
            ]
        },
        {
            "id": "4",
            "nombre": "MÚSCULO MASETERO EN ACCIÓN",
            "campos": [
                {
                    "nombre": "Reclutamiento (Contracción Isométrica)",
                    "opciones": ["Simultáneo", "Primero Lado Derecho", "Primero Lado Izquierdo"],
                    "seleccion": ""
                },
                {
                    "nombre": "Dolor a la Palpación",
                    "opciones": ["Sí", "No", "No Evaluado"],
                    "seleccion": ""
                },
                {
                    "nombre": "Localización del Dolor",
                    "opciones": ["Izquierdo", "Derecho", "Ambos"],
                    "seleccion": ""
                }
            ],
            "tipo": "tabla_checkbox",
            "columnas": ["Hallazgo", "Presente", "Observaciones"],
            "filas": [
                { "item": "Activación Maseterina Bilateral", "valores": { "Presente": false }, "observaciones": "" },
                { "item": "Aumento de Volumen Simétrico", "valores": { "Presente": false }, "observaciones": "" },
                { "item": "Prominencia Aumentada Unilateral", "valores": { "Presente": false }, "observaciones": "" },
                { "item": "Endurecimiento Excesivo Visible", "valores": { "Presente": false }, "observaciones": "" },
                { "item": "Contracción Sostenida Involuntaria", "valores": { "Presente": false }, "observaciones": "" }
            ]
        },
        {
            "id": "5",
            "nombre": "PALPACIÓN DEL MÚSCULO MASETERO",
            "tipo": "tabla_checkbox",
            "columnas": ["Parámetro", "0", "1", "2", "3", "Observaciones"],
            "filas": [
                {
                    "parametro": "Tono Muscular",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": ""
                },
                {
                    "parametro": "Elasticidad",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": ""
                },
                {
                    "parametro": "Presencia De Puntos Gatillo",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": ""
                },
                {
                    "parametro": "Simetría A La Contracción",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": ""
                }
            ]
        },
        {
            "id": "6",
            "nombre": "MOVILIDAD MANDIBULAR",
            "tipo": "tabla_checkbox",
            "columnas": ["Movimiento", "0", "1", "2", "3", "Observaciones"],
            "filas": [
                {
                    "movimiento": "Apertura Bucal",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": "",
                    "campo_extra": { "nombre": "mm", "valor": "" }
                },
                {
                    "movimiento": "Cierre Mandibular",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": ""
                },
                {
                    "movimiento": "Lateralización Derecha",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": ""
                },
                {
                    "movimiento": "Lateralización Izquierda",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": ""
                },
                {
                    "movimiento": "Protrusión",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": ""
                }
            ]
        },
        {
            "id": "7",
            "nombre": "FUERZA Y RESISTENCIA DEL MASETERO",
            "tipo": "tabla_checkbox",
            "columnas": ["Ítem", "0", "1", "2", "3", "Observaciones"],
            "filas": [
                {
                    "item": "Fuerza De Mordida Funcional",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": ""
                },
                {
                    "item": "Mantención De Contracción",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": "",
                    "campo_extra": { "nombre": "seg", "valor": "" }
                },
                {
                    "item": "Fatiga Precoz",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": ""
                }
            ]
        },
        {
            "id": "8",
            "nombre": "FUNCIÓN OROFACIAL",
            "subsecciones": [
                {
                    "id": "8.1",
                    "nombre": "Masticación",
                    "tipo": "tabla_checkbox",
                    "columnas": ["Ítem", "0", "1", "2", "3", "Observaciones"],
                    "filas": [
                        {
                            "item": "Patrón Masticatorio",
                            "valores": { "0": false, "1": false, "2": false, "3": false },
                            "observaciones": ""
                        },
                        {
                            "item": "Alternancia Bilateral",
                            "valores": { "0": false, "1": false, "2": false, "3": false },
                            "observaciones": ""
                        },
                        {
                            "item": "Coordinación Lengua–Masetero",
                            "valores": { "0": false, "1": false, "2": false, "3": false },
                            "observaciones": ""
                        }
                    ]
                },
                {
                    "id": "8.2",
                    "nombre": "Deglución",
                    "tipo": "tabla_checkbox",
                    "columnas": ["Ítem", "0", "1", "2", "3", "Observaciones"],
                    "filas": [
                        {
                            "item": "Activación Maseterina Adecuada",
                            "valores": { "0": false, "1": false, "2": false, "3": false },
                            "observaciones": ""
                        },
                        {
                            "item": "Co-Contracción Patológica",
                            "valores": { "0": false, "1": false, "2": false, "3": false },
                            "observaciones": ""
                        }
                    ]
                }
            ]
        },
        {
            "id": "9",
            "nombre": "ESCALA DE CAUHÉPÉ Y NETTER – EXAMEN MUSCULAR OROFACIAL",
            "subsecciones": [
                {
                    "id": "9.1",
                    "nombre": "Escala De Valoración Muscular",
                    "escala": [
                        { "puntaje": 1, "descripcion": "Contracción Palpable Sin Efecto Motor" },
                        { "puntaje": 2, "descripcion": "Contracción Visible Sin Efecto Motor (Movimiento Posible Solo En Posiciones Donde La Gravedad No Influye)" },
                        { "puntaje": 3, "descripcion": "Efecto Motor Parcial: Capacidad Mínima De Vencer La Fuerza De Gravedad" },
                        { "puntaje": 4, "descripcion": "Efecto Motor Funcional: Vence La Gravedad Y Tolera Leve Resistencia Externa" },
                        { "puntaje": 5, "descripcion": "Efecto Motor Contra Resistencia: Vence O Resiste Fuerza Sin Evidencia De Fatiga" }
                    ]
                },
                {
                    "id": "9.2",
                    "nombre": "Músculos Masticatorios",
                    "items": [
                        {
                            "letra": "a",
                            "nombre": "Elevadores Mandibulares",
                            "orden_evaluacion_funcional": "Boca Abierta. Evaluador Posiciona Dos Dedos Sobre Incisivos Inferiores, Ejerciendo Fuerza Hacia Abajo, Y Solicita Cierre De La Boca Contra Resistencia.",
                            "registro_cauhepe_netter_0_5": ""
                        }
                    ]
                },
                {
                    "id": "9.3",
                    "nombre": "Síntesis Clínica",
                    "tipo": "tabla_checkbox",
                    "columnas": ["Interpretación", "Seleccionado", "Observaciones"],
                    "filas": [
                        { "item": "Afección De Predominio Neurológico (Puntaje 1-2)", "valores": { "Seleccionado": false }, "observaciones": "" },
                        { "item": "Afección De Predominio Miofuncional (Puntaje 3-5)", "valores": { "Seleccionado": false }, "observaciones": "" }
                    ],
                    "comentario_clinico_integrado": ""
                }
            ]
        },
        {
            "id": "10",
            "nombre": "REGISTRO DE TOXINA BOTULÍNICA – MASETERO",
            "campos": [
                { "nombre": "Masetero Derecho", "valor": "___ U – ___ Punto – Guía Ecográfica – Heckmatt N°___" },
                { "nombre": "Masetero Izquierdo", "valor": "__ U – _ Punto – Guía Ecográfica – Heckmatt N°__" }
            ]
        },
        {
            "id": "11",
            "nombre": "POSTURA CEFÁLICA",
            "campos": [
                { "nombre": "Descripción de Postura Cefálica", "valor": "" }
            ]
        },
        {
            "id": "12",
            "nombre": "DIFERENCIACIÓN DE LATERALIDAD MASETERINA",
            "subsecciones": [
                {
                    "lado": "Masetero Derecho",
                    "campos": [
                        { "nombre": "Volumen", "valor": "" },
                        { "nombre": "Tono", "valor": "" },
                        { "nombre": "Dolor", "valor": "" },
                        { "nombre": "Observaciones", "valor": "" }
                    ]
                },
                {
                    "lado": "Masetero Izquierdo",
                    "campos": [
                        { "nombre": "Volumen", "valor": "" },
                        { "nombre": "Tono", "valor": "" },
                        { "nombre": "Dolor", "valor": "" },
                        { "nombre": "Observaciones", "valor": "" }
                    ]
                }
            ]
        },
        {
            "id": "13",
            "nombre": "DESCRIPCIÓN ECOGRÁFICA DEL MASETERO BILATERAL",
            "subsecciones": [
                {
                    "lado": "Derecho",
                    "campos": [
                        { "nombre": "Espesor Muscular (mm)", "valor": "" },
                        { "nombre": "Ecogenicidad", "opciones": ["Normal", "Aumentada", "Disminuida"], "seleccion": "" },
                        { "nombre": "Arquitectura Fibrilar", "opciones": ["Conservada", "Alterada"], "seleccion": "" },
                        { "nombre": "Clasificación Heckmatt", "valor": "" },
                        { "nombre": "Observaciones", "valor": "" }
                    ]
                },
                {
                    "lado": "Izquierdo",
                    "campos": [
                        { "nombre": "Espesor Muscular (mm)", "valor": "" },
                        { "nombre": "Ecogenicidad", "opciones": ["Normal", "Aumentada", "Disminuida"], "seleccion": "" },
                        { "nombre": "Arquitectura Fibrilar", "opciones": ["Conservada", "Alterada"], "seleccion": "" },
                        { "nombre": "Clasificación Heckmatt", "valor": "" },
                        { "nombre": "Observaciones", "valor": "" }
                    ]
                }
            ]
        },
        {
            "id": "14",
            "nombre": "SÍNTESIS DIAGNÓSTICA FINAL",
            "opciones": [
                "OPCIÓN A CANDIDATO A INFILTRACIÓN DE MASETERO",
                "OPCIÓN B NO CANDIDATO A INFILTRACIÓN DE MASETERO"
            ],
            "plantillas_texto": {
                "opcion_a_candidato": "El Músculo Masetero Presenta Un Desempeño Funcional ____________________________ (Conservado / Aumentado), Con Puntaje Cauhépé–Netter ____/5 ____________________________ (Bilateral / Predominio Derecho / Predominio Izquierdo), Asociado A ____________________________ (Hipertonía Basal / Hiperactividad Funcional / Co-Contracción Patológica Durante La Deglución / Patrón Masticatorio Rígido).\\n\\nSe Observan Además ____________________________ (Hallajgos Clínicos Relevantes), Con Impacto Funcional En ____________________________ (Masticación / Deglución / Control Mandibular / Control Salival).\\n\\nEn El Contexto De Una Sialorrea ____________________________ (Leve / Moderada / Severa) ____________________________ (Persistente / Refractaria A Manejo Conservador), Con Puntaje De Impacto De _______/100 Y DQ5 Promedio De _______%, Y Hallazgos Ecográficos ____________________________ (Compatibles / No Compatibles) Con Hiperfunción Maseterina (Heckmatt _______), Se Considera Al Paciente Candidato A Infiltración De Músculo Masetero Con Toxina Botulínica, Como Complemento Al Abordaje Fonoaudiológico Miofuncional, Con El Objetivo De Favorecer La Regulación Del Tono Y Mejorar La Función Orofacial.",
                "opcion_b_no_candidato": "El Músculo Masetero Evidencia Bajo Desempeño Funcional, Con Puntaje Cauhépé–Netter ____/5, Sin Capacidad Efectiva De Vencer La Fuerza De Gravedad Y/O La Resistencia Aplicada, Compatible Con Un Compromiso De Predominio ____________________________ (Neurológico / Mixto).\\n\\nA Nivel Clínico, Se Observa ____________________________ (Hipotonía / Debilidad Mandibular / Dependencia Funcional Del Masetero Para Estabilidad Oral), Con Riesgo De ____________________________ (Deterioro Masticatorio / Alteración De La Deglución / Aumento De Inestabilidad Mandibular) Ante Una Eventual Intervención Inhibitoria.\\n\\nEn Este Contexto, Se Descarta La Infiltración Del Músculo Masetero, Priorizando Un Abordaje Terapéutico Fonoaudiológico Miofuncional Orientado A ____________________________ (Mejorar Activación, Coordinación Y Estabilidad Mandibular), Con Seguimiento Interdisciplinario Y Reevaluación Funcional Según Evolución Clínica."
            }
        }
    ]
};
