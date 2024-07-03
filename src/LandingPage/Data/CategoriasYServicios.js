
import axios from "axios";

export const obtenerCategorias = async () => {
    try {
        const response = await axios.get('http://localhost:5000/categorias');
        const categoriasResult = response.data;
        const categorias = [];

        for(let i = 0; i < categoriasResult.length; i++) {
            categorias.push({
                value: categoriasResult[i].nombre_categoria,
                label: categoriasResult[i].nombre_categoria,
                id_categoria: categoriasResult[i].id_categoria
            })
        }

        return categorias;
    } catch (error) {
        console.error(error);
        return []
    }
};

export const obtenerServicios = async () => {
    try {
        const response = await axios.get('http://localhost:5000/servicios');
        
        return response.data
    } catch (error) {
        console.error(error);
        return []
    }
};