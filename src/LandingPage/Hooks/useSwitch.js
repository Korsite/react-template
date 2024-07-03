
import {useState} from "react";

export const useSwitch = (initialForm = {}) => {
    const [state, setState] = useState( initialForm )

    const onInputChange = ({ name, value }) => {
        setState({
            ...state,
            [ name ]: value
        })
    }

    const onResetState = () => {
        setState( initialForm )
    }

    const onAcceptAll = () => {
        const newState = Object.keys(state).reduce((acc, key) => {
            acc[key] = true;
            return acc;
        }, {});

        setState(newState);
    }

    return {
        ...state,
        state,
        onInputChange,
        onResetState,
        onAcceptAll
    }
}