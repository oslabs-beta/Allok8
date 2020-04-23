import { useState } from 'react';

function useInputs(initialState) {
    const [inputs, setInputs] = useState(initialState);
  
    return {
        inputs, 
        setInputs,
        reset: () => setInputs(''),
        bind: {
            inputs,
            onChange: event => {
                setInputs(event.target.value) 
            }
        }
    }    
};

export default useInputs
