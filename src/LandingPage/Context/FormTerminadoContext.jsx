

import React, {createContext, useState, useEffect, useRef} from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formTerminado, setFormTerminado] = useState(localStorage.getItem('formTerminado') || 'false');
    const [vistaFinal, setVistaFinal] = useState(localStorage.getItem('vistaFinal') || 'false');

    // referencia para scrollear al formulario
    const formReferencia = useRef(null);

    useEffect(() => {
        const handleStorageChange = () => {
            setFormTerminado(localStorage.getItem('formTerminado') || 'false');
            setVistaFinal(localStorage.getItem('vistaFinal') || 'false');
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    useEffect(() => {
        if (formTerminado === 'true' || formTerminado === 'false') {
            localStorage.setItem('formTerminado', formTerminado);
        }
    }, [formTerminado]);

    useEffect(() => {
        if (vistaFinal === 'true' || vistaFinal === 'false') {
            localStorage.setItem('vistaFinal', vistaFinal);
        }
    }, [vistaFinal]);

    return (
        <FormContext.Provider value={{ formTerminado, setFormTerminado, vistaFinal, setVistaFinal, formReferencia }}>
            {children}
        </FormContext.Provider>
    );
};
