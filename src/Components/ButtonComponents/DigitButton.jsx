import { ACTIONS } from "./../Calculator"

function DigitButton({digit, dispatch}) {
    return (
        <button 
            onClick={()=> dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}
        >
            {digit}
        </button>
    ) 
}

export default DigitButton;