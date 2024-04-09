import React, {useReducer} from 'react';
import Context from "./Context.jsx";
import Reducer, {initState} from "./Reducer.jsx";

function Provider({children}) {
    const [state, dispatch] = useReducer(Reducer, initState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
}

export default Provider;