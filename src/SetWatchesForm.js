import { useState } from "react";
import "./SetWatchesForm.css"

function SetWatchesForm(props) {
    const [inputName, setInputName] = useState('');
    const [inputHoursDifference, setInputHoursDifference] = useState('');

    const nameChangeNandler = (e) => {
        setInputName(e.target.value);
    }
    const hoursDifferenceChangeHandler = (e) => {
        setInputHoursDifference(e.target.value);
    }

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (inputName === '') {
            return;
        }

        const watchData = {
            name: inputName,
            hoursDifference: inputHoursDifference
        }

        
        setInputName('');
        setInputHoursDifference('');
        props.onSaveWatchData(watchData);
    }

    return (
        <form className="SetWatchesForm" onSubmit={SubmitHandler} >
            <div className="wrap wrap-input">
                <label htmlFor="name">Название</label>
                <input type="name" name="name" id="name" onChange={nameChangeNandler} value={inputName} />
            </div>
            <div className="wrap wrap-input">
                <label htmlFor="hoursdifference">Разница в часах</label>
                <input type="number" name="hoursdifference" id="hoursdifference" onChange={hoursDifferenceChangeHandler} value={inputHoursDifference} />
            </div>
            <div className="wrap wrap-btn">                
                    <button type="submit" >Добавить</button>
            </div>
        </form>
    )
}

export default SetWatchesForm;