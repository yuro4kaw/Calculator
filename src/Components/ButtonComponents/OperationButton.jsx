import { ACTIONS } from "./../Calculator"

function OperationButton({operation, dispatch}) {
    return (
        <button 
            onClick={()=> dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}
        >
            {operation}
        </button>
    ) 
}

export default OperationButton;