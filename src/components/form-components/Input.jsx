import './Input.css';
const Input = (props) => {
    return (
        <div className="mb-3 input-box">
            <label htmlFor={props.name} className='form-label'>
                <p className='h2  mt-3'>{props.title}</p>
            </label>
            <input
                type= {props.type}
                className= {`form-control input-width`}
                id= {props.name}
                name= {props.name}
                value= {props.value}
                onChange= {props.handleChange}
                placeholder= {props.placeholder}
                
            />
        </div>
    );
};

export default Input ;