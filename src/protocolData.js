export const protocolData = {
    "titulo": "PROTOCOLO INTERDISCIPLINARIO DE EVALUACIÓN DEL MÚSCULO MASETERO BILATERAL",
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
            "id": "2",
            "nombre": "ESCALA DE PUNTUACIÓN FUNCIONAL (APLICABLE A TODOS LOS ÍTEMS)",
            "escala": [
                { "puntaje": 0, "descripcion": "Función Ausente / Patología Severa" },
                { "puntaje": 1, "descripcion": "Alteración Marcada" },
                { "puntaje": 2, "descripcion": "Alteración Leve / Compensada" },
                { "puntaje": 3, "descripcion": "Función Dentro De Parámetros Funcionales" }
            ]
        },
        {
            "id": "3",
            "nombre": "OBSERVACIÓN CLÍNICA – MASETERO EN REPOSO",
            "tipo": "tabla_checkbox",
            "columnas": ["Ítem", "0", "1", "2", "3", "Observaciones"],
            "filas": [
                {
                    "item": "Simetría Facial",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": ""
                },
                {
                    "item": "Volumen Masetero Bilateral",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": ""
                },
                {
                    "item": "Tensión Visible En Reposo",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": ""
                },
                {
                    "item": "Contacto Dentario En Reposo",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": ""
                },
                {
                    "item": "Postura Cefálica Funcional",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": ""
                }
            ]
        },
        {
            "id": "4",
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
                    "parametro": "Dolor A La Palpación",
                    "valores": { "0": false, "1": false, "2": false, "3": false },
                    "observaciones": "",
                    "campo_extra": { "nombre": "EVA", "valor": "" }
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
            "id": "5",
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
            "id": "6",
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
            "id": "7",
            "nombre": "FUNCIÓN OROFACIAL",
            "subsecciones": [
                {
                    "id": "7.1",
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
                    "id": "7.2",
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
            "id": "8",
            "nombre": "MUSCULATURA ACCESORIA (REGISTRO DE COMPENSACIONES)",
            "tipo": "tabla_checkbox",
            "columnas": ["Músculo", "Hiper", "Hipo", "Compensa", "Observaciones"],
            "filas": [
                { "musculo": "Temporal", "hiper": false, "hipo": false, "compensa": false, "observaciones": "" },
                { "musculo": "ECM", "hiper": false, "hipo": false, "compensa": false, "observaciones": "" },
                { "musculo": "Trapecio Superior", "hiper": false, "hipo": false, "compensa": false, "observaciones": "" },
                { "musculo": "Otros", "hiper": false, "hipo": false, "compensa": false, "observaciones": "" }
            ]
        },
        {
            "id": "9",
            "nombre": "ESCALA DE CAUHÉPÉ Y NETTER – EXAMEN MUSCULAR OROFACIAL",
            "objetivo": "Evaluar El Desempeño Muscular Orofacial Mediante Palpación Y Función Activa.",
            "subsecciones": [
                {
                    "id": "9.1",
                    "nombre": "Escala De Valoración Muscular (0 A 5)",
                    "escala": [
                        { "puntaje": 0, "descripcion": "Sin Contracción Muscular" },
                        { "puntaje": 1, "descripcion": "Contracción Palpable Sin Efecto Motor" },
                        {
                            "puntaje": 2,
                            "descripcion": "Contracción Visible Sin Efecto Motor (Movimiento Posible Solo En Posiciones Donde La Gravedad No Influye)"
                        },
                        { "puntaje": 3, "descripcion": "Efecto Motor Parcial: Capacidad Mínima De Vencer La Fuerza De Gravedad" },
                        { "puntaje": 4, "descripcion": "Efecto Motor Funcional: Vence La Gravedad Y Tolera Leve Resistencia Externa" },
                        { "puntaje": 5, "descripcion": "Efecto Motor Contra Resistencia: Vence O Resiste Fuerza Sin Evidencia De Fatiga" }
                    ],
                    "criterio_interpretativo": [
                        { "rango": "0–2", "interpretacion": "Afección De Predominio Neurológico" },
                        { "rango": "3–5", "interpretacion": "Afección De Predominio Miofuncional" }
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
                        },
                        {
                            "letra": "b",
                            "nombre": "Depresores Mandibulares",
                            "orden_evaluacion_funcional": "Boca Cerrada. Evaluador Posiciona Dos Dedos Bajo El Mentón, Ejerciendo Fuerza Suave Hacia Arriba, Y Solicita Apertura De La Boca Contra Resistencia.",
                            "registro_cauhepe_netter_0_5": ""
                        },
                        {
                            "letra": "c",
                            "nombre": "Propulsores Mandibulares",
                            "orden_evaluacion_funcional": "Solicitar Adelantamiento De La Mandíbula Mientras El Evaluador Ejerce Fuerza Contraria A Nivel Del Mentón.",
                            "registro_cauhepe_netter_0_5": ""
                        },
                        {
                            "letra": "d",
                            "nombre": "Diductores Mandibulares",
                            "orden_evaluacion_funcional": "Solicitar Lateralización Mandibular Mientras El Evaluador Ejerce Fuerza Opuesta A Nivel Del Cuerpo Mandibular.",
                            "registro_cauhepe_netter_0_5": ""
                        }
                    ]
                },
                {
                    "id": "9.3",
                    "nombre": "Músculos Peribucales",
                    "tipo": "tabla_checkbox",
                    "columnas": ["Músculo", "0", "1", "2", "3", "4", "5", "Observaciones"],
                    "filas": [
                        {
                            "musculo": "Orbicular De Los Labios",
                            "valores": { "0": false, "1": false, "2": false, "3": false, "4": false, "5": false },
                            "observaciones": ""
                        },
                        {
                            "musculo": "Buccinadores",
                            "valores": { "0": false, "1": false, "2": false, "3": false, "4": false, "5": false },
                            "observaciones": ""
                        }
                    ]
                },
                {
                    "id": "9.4",
                    "nombre": "Músculos Linguales",
                    "tipo": "tabla_checkbox",
                    "columnas": ["Función", "0", "1", "2", "3", "4", "5", "Observaciones"],
                    "filas": [
                        {
                            "funcion": "Protrusión Lingual",
                            "valores": { "0": false, "1": false, "2": false, "3": false, "4": false, "5": false },
                            "observaciones": ""
                        },
                        {
                            "funcion": "Retracción Lingual",
                            "valores": { "0": false, "1": false, "2": false, "3": false, "4": false, "5": false },
                            "observaciones": ""
                        },
                        {
                            "funcion": "Elevación Lingual",
                            "valores": { "0": false, "1": false, "2": false, "3": false, "4": false, "5": false },
                            "observaciones": ""
                        },
                        {
                            "funcion": "Depresión Lingual",
                            "valores": { "0": false, "1": false, "2": false, "3": false, "4": false, "5": false },
                            "observaciones": ""
                        }
                    ]
                },
                {
                    "id": "9.5",
                    "nombre": "Síntesis Cauhépé–Netter",
                    "predominio": { "neurologico_0_2": false, "miofuncional_3_5": false },
                    "comentario_clinico_integrado": ""
                }
            ]
        },
        {
            "id": "9b",
            "nombre": "PERFIL FUNCIONAL RESULTANTE",
            "perfiles": [
                { "perfil": "A", "lado": "DERECHO", "descripcion": "Masetero En Hipertonía / Hiperfunción" },
                { "perfil": "B", "lado": "IZQUIERDO", "descripcion": "Masetero En Hipotonía / Hipofunción" }
            ]
        },
        {
            "id": "10",
            "nombre": "REGISTRO DE TOXINA BOTULÍNICA – MASETERO",
            "nota": "Completar Dosis, Número De Puntos Y Clasificación Ecográfica Según Control Clínico",
            "campos": [
                { "nombre": "Masetero Derecho", "valor": "___ U – ___ Punto – Guía Ecográfica – Heckmatt N°___" },
                { "nombre": "Masetero Izquierdo", "valor": "__ U – _ Punto – Guía Ecográfica – Heckmatt N°__" }
            ]
        },
        {
            "id": "12",
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
            "id": "12A",
            "nombre": "OBSERVACIONES DE LA EVALUACIÓN DE LA ARTICULACIÓN TEMPOROMANDIBULAR (ATM)",
            "objetivo": "Registrar Hallazgos Clínicos Relevantes De La ATM Para Contextualizar La Función Mandibular Y La Actividad Del Masetero.",
            "tipo": "bloque_mixto",
            "componentes": [
                {
                    "tipo": "anamnesis_dirigida",
                    "campos": [
                        { "nombre": "Dolor En ATM (Derecha)", "valor": "", "formato": "EVA 0–10" },
                        { "nombre": "Dolor En ATM (Izquierda)", "valor": "", "formato": "EVA 0–10" },
                        { "nombre": "Sensación De Bloqueo", "valor": "", "opciones": ["No", "Sí"] },
                        { "nombre": "Episodios De Traba (Frecuencia)", "valor": "" },
                        { "nombre": "Cefalea Asociada", "valor": "", "opciones": ["No", "Sí"] },
                        { "nombre": "Dolor Cervical Asociado", "valor": "", "opciones": ["No", "Sí"] },
                        { "nombre": "Bruxismo Referido", "valor": "", "opciones": ["No", "Sí"] },
                        { "nombre": "Hábitos Orales Relevantes", "valor": "" }
                    ]
                },
                {
                    "tipo": "inspeccion_movimiento",
                    "columnas": ["Ítem", "Presente", "Ausente", "Observaciones"],
                    "filas": [
                        { "item": "Desviación En Apertura", "presente": false, "ausente": false, "observaciones": "" },
                        { "item": "Deflexión En Apertura", "presente": false, "ausente": false, "observaciones": "" },
                        { "item": "Limitación De Apertura", "presente": false, "ausente": false, "observaciones": "" },
                        { "item": "Limitación En Lateralización", "presente": false, "ausente": false, "observaciones": "" },
                        { "item": "Limitación En Protrusión", "presente": false, "ausente": false, "observaciones": "" }
                    ],
                    "mediciones": [
                        { "nombre": "Apertura Máxima (mm)", "valor": "" },
                        { "nombre": "Lateralización Derecha (mm)", "valor": "" },
                        { "nombre": "Lateralización Izquierda (mm)", "valor": "" },
                        { "nombre": "Protrusión (mm)", "valor": "" }
                    ]
                },
                {
                    "tipo": "ruidos_articulares",
                    "columnas": ["Ítem", "Derecha", "Izquierda", "Observaciones"],
                    "filas": [
                        { "item": "Click", "derecha": false, "izquierda": false, "observaciones": "" },
                        { "item": "Crepitación", "derecha": false, "izquierda": false, "observaciones": "" }
                    ],
                    "momento": {
                        "nombre": "Momento Del Ruido",
                        "opciones": ["Apertura", "Cierre", "Ambos", "No Aplica"],
                        "seleccion": ""
                    }
                },
                {
                    "tipo": "palpacion_atm_y_estructuras",
                    "columnas": ["Estructura", "Dolor (D)", "Dolor (I)", "0", "1", "2", "3", "Observaciones"],
                    "nota": "Registrar Dolor A La Palpación Y Puntuar Con La Escala Funcional (0–3) Cuando Corresponda.",
                    "filas": [
                        { "estructura": "ATM Preauricular", "dolor_d": false, "dolor_i": false, "valores": { "0": false, "1": false, "2": false, "3": false }, "observaciones": "" },
                        { "estructura": "Polo Lateral Condilar", "dolor_d": false, "dolor_i": false, "valores": { "0": false, "1": false, "2": false, "3": false }, "observaciones": "" },
                        { "estructura": "Temporal (Porción Anterior)", "dolor_d": false, "dolor_i": false, "valores": { "0": false, "1": false, "2": false, "3": false }, "observaciones": "" },
                        { "estructura": "Pterigoideo Medial (Signos Indirectos)", "dolor_d": false, "dolor_i": false, "valores": { "0": false, "1": false, "2": false, "3": false }, "observaciones": "" }
                    ]
                },
                {
                    "tipo": "sintesis_atm",
                    "campos": [
                        { "nombre": "Impresión Clínica ATM", "valor": "" },
                        { "nombre": "Relación Con Función Mandibular Y Masetero", "valor": "" },
                        { "nombre": "Recomendaciones / Derivación (Si Corresponde)", "valor": "" }
                    ]
                }
            ]
        },
        {
            "id": "13",
            "nombre": "CONCLUSIÓN CLÍNICA INTEGRADA",
            "campos": [
                { "nombre": "Perfil Predominante", "valor": "" },
                { "nombre": "Presencia De Sialorrea / Relación Con Masetero", "valor": "" },
                { "nombre": "Respuesta A Toxina (Si Aplica)", "valor": "" }
            ],
            "criterio_infiltracion_cauhepe_netter": [
                { "rango": "0–2", "decision": "NO Infiltrar" },
                { "rango": "3", "decision": "Evaluar Con Cautela" },
                { "rango": "4–5", "decision": "Candidato A Infiltración" }
            ],
            "puntaje_registrado_sobre_5": "",
            "checklists": {
                "clinica_funcional_asociada": [
                    "Hipertonía Maseterina En Reposo",
                    "Co-Contracción Patológica En Deglución",
                    "Patrón Masticatorio Rígido O Poco Disociado",
                    "Bruxismo / Trismus Funcional",
                    "Dolor Orofacial O Puntos Gatillo",
                    "Uso Compensatorio Del Masetero Para Estabilidad Oral"
                ],
                "relacion_con_sialorrea": [
                    "Sialorrea Moderada O Severa Persistente",
                    "Escala De Impacto De Sialorrea ≥ 50%",
                    "DQ5 Elevado Para Edad Y Condición",
                    "Babeo Activo En Sedente Y/O Bipedestación",
                    "Dificultad De Control Mandibular–Labial"
                ],
                "hallazgos_ecograficos_si_disponible": [
                    "Engrosamiento Maseterino",
                    "Aumento De Ecogenicidad",
                    "Arquitectura Fibrilar Alterada",
                    "Clasificación Heckmatt ≥ 3"
                ]
            },
            "sintesis_diagnostic_fonoaudiologica": ""
        },
        {
            "id": "14",
            "nombre": "SÍNTESIS DIAGNÓSTICA FINAL",
            "opciones": [
                "OPCIÓN A CANDIDATO A INFILTRACIÓN DE MASETERO",
                "OPCIÓN B NO CANDIDATO A INFILTRACIÓN DE MASETERO"
            ],
            "plantillas_texto": {
                "opcion_a_candidato": "El Músculo Masetero Presenta Un Desempeño Funcional ____________________________ (Conservado / Aumentado), Con Puntaje Cauhépé–Netter ____/5 ____________________________ (Bilateral / Predominio Derecho / Predominio Izquierdo), Asociado A ____________________________ (Hipertonía Basal / Hiperactividad Funcional / Co-Contracción Patológica Durante La Deglución / Patrón Masticatorio Rígido).\\n\\nSe Observan Además ____________________________ (Hallazgos Clínicos Relevantes), Con Impacto Funcional En ____________________________ (Masticación / Deglución / Control Mandibular / Control Salival).\\n\\nEn El Contexto De Una Sialorrea ____________________________ (Leve / Moderada / Severa) ____________________________ (Persistente / Refractaria A Manejo Conservador), Con Puntaje De Impacto De _______/100 Y DQ5 Promedio De _______%, Y Hallazgos Ecográficos ____________________________ (Compatibles / No Compatibles) Con Hiperfunción Maseterina (Heckmatt _______), Se Considera Al Paciente Candidato A Infiltración De Músculo Masetero Con Toxina Botulínica, Como Complemento Al Abordaje Fonoaudiológico Miofuncional, Con El Objetivo De Favorecer La Regulación Del Tono Y Mejorar La Función Orofacial.",
                "opcion_b_no_candidato": "El Músculo Masetero Evidencia Bajo Desempeño Funcional, Con Puntaje Cauhépé–Netter ____/5, Sin Capacidad Efectiva De Vencer La Fuerza De Gravedad Y/O La Resistencia Aplicada, Compatible Con Un Compromiso De Predominio ____________________________ (Neurológico / Mixto).\\n\\nA Nivel Clínico, Se Observa ____________________________ (Hipotonía / Debilidad Mandibular / Dependencia Funcional Del Masetero Para Estabilidad Oral), Con Riesgo De ____________________________ (Deterioro Masticatorio / Alteración De La Deglución / Aumento De Inestabilidad Mandibular) Ante Una Eventual Intervención Inhibitoria.\\n\\nEn Este Contexto, Se Descarta La Infiltración Del Músculo Masetero, Priorizando Un Abordaje Terapéutico Fonoaudiológico Miofuncional Orientado A ____________________________ (Mejorar Activación, Coordinación Y Estabilidad Mandibular), Con Seguimiento Interdisciplinario Y Reevaluación Funcional Según Evolución Clínica."
            }
        }
    ]
};
