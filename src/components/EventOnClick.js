import React, {useState} from 'react'

function EventOnClick(props) {

    const [textUpdate, setTextUpdate] = useState('Please click the button');

    const clickHandler = () => {
        console.log('Button got clicked!');
        setTextUpdate('Button clicked!');
    }

  return (
    <>        
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <h5 className='mb-3'>{props.title}</h5>
                    <p>{textUpdate}</p>
                    <button className="btn btn-primary btn-xs" onClick={clickHandler}>Click</button>
                </div>
            </div>
        </div>        
    </>
  )
}

export default EventOnClick;
