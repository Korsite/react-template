
import {useEffect, useRef} from "react";

/**
 * Este hook sirve para observar un componente y agregarle una animación cuando entra en la vista,
 * se elimina la animación cuando el componente sale de la vista. y se reinicia la animación cuando
 * el componente vuelve a entrar en la vista.
 * @param animacionDeAnimateCss {string} - La clase de animación de animate.css que se le agregará al componente
 * @returns {{referencia: React.MutableRefObject<null>}}
 * @constructor
 */
export const UseObserve = (
    animacionDeAnimateCss = 'animate__fadeIn'
) => {
    const referencia = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Forzar un reflow para asegurar que la animación se reinicie
                    void entry.target.offsetWidth;

                    // Agregar la clase de animación
                    entry.target.classList.add('animate__animated', animacionDeAnimateCss);

                    // Remover la animación después de que termine
                    const handleAnimationEnd = () => {
                        entry.target.classList.remove('animate__animated', animacionDeAnimateCss);
                        entry.target.removeEventListener('animationend', handleAnimationEnd);
                    };

                    entry.target.addEventListener('animationend', handleAnimationEnd);
                } else {
                    // Preparar el componente para la próxima vez que entre en la vista
                    entry.target.classList.remove('animate__animated', animacionDeAnimateCss);
                }
            });
        });

        if (referencia.current) {
            observer.observe(referencia.current);
        }

        return () => {
            if (referencia.current) {
                observer.unobserve(referencia.current);
            }
        };
    }, []);

    return { referencia };
};