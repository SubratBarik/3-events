import React, {useState} from 'react'

function EventOnChange(props) {

    const [textUpdate, setTextUpdate] = useState('');
    const [opt, setOpt] = useState('');
    const [task, setTask] = useState('Pick Up');

    const changeHandler = (event) => {
        //console.log(textUpdate);
        setTextUpdate(event.target.value)
    }

    const handleSelect = (event) => {
        setOpt(event.target.value);
    }

    const handleRadio = (event) => {
        setTask(event.target.value);
    }

    return (
        <>
            <div className="container mt-5 mb-3">
                <div className="row">
                    <div className='col-md-12'>
                        <h5 className='mb-3'>{props.title}</h5>
                    </div>
                    <div className="col-md-6">
                        <input value={textUpdate} onChange={changeHandler}  className='form-control mb-2'/>
                        <p>{textUpdate}</p>
                    </div>
                    <div className="col-md-6">
                        <select value={opt} onChange={handleSelect} className='form-control mb-2'>
                            <option value="">Select Option</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>
                        <p>{opt}</p>
                    </div>
                    <div className='col-md-6'>
                        <label>
                            <input type='radio' value="Pick Up" checked={task === "Pick Up"} onChange={handleRadio}/>&nbsp; 
                            Pick Up&nbsp;
                        </label>
                        <label>
                             <input type='radio' value="Delivery" checked={task === "Delivery"} onChange={handleRadio}/>&nbsp;
                            Delivery
                        </label>
                        <p>{task}</p>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default EventOnChange;
