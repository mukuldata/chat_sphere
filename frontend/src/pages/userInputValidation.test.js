import { useInputValidation } from '6pp';
import {useState} from 'react';

// Custom hook:

const inputValidation=(initValue, validator)=>{

    const [value,setValue]=useState(initValue);
    const [error,setError]=useState('');

    let newValue;

      const changeHandler=(e)=>{

        if(typeof (value)=="number"){
            newValue=Number(e.target.value);
        }else{
           newValue=e.target.value;
        }

        setValue(newValue);

        const validationResult=validator(newValue);
        if(validationResult){
          setError(validationResult.errorMessage);
        }
        else{
            setError("");
        }
      }

      return {
        error,
        changeHandler,
        value
      }

}


// This above function returns current value, validator function to call, error 

const {value,changeHandler,error}= useInputValidation("",validator);

// To check in username:
const username= useInputValidation("",validator);

username.value   
username.changeHandler
username.error





