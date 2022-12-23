import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations={} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidaton, setFormValidaton] = useState({})

    useEffect(() => {
      createValidators();
    }, [formState]);

    const isFormValid = useMemo( ()=>{

        for(const formValue of Object.keys( formValidaton )){
            if( formValidaton[formValue] !== null ) return false;
        }

        return true;
    }, [formValidaton])
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const createValidators =()=>{

        const formCheckValues = { };

        for(const formField of Object.keys(formValidations)){

            const [fn, errorMessage] = formValidations[formField];

            formCheckValues[`${formField}Valid`] = fn(formState[formField] ) ? null : errorMessage;
        }

        setFormValidaton(formCheckValues);

    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidaton,
        isFormValid
    }
}