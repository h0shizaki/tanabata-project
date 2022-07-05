import { Fragment, useState } from "react";
import ReactjsAlert from "reactjs-alert";
import "./Card.css";

const Card = (props) => {

    const [status, setStatus] = useState(false);

    const handleMouseOver = () => {
        console.log(props.wishingText);
    }

    const handleMouseOut = () => {

    }

    // const handleClick = 

    // Should pass color , wish , *positionX , *positionY
    // * for not sure

    return (
        <Fragment>

            <ReactjsAlert
                status={status} 
                type={"info"} 
                title={"Wishing"}
                quotes={true}
                quote={props.wishingText}
                Close={() => setStatus(false)}
            />
            <img
                src={require(`../static/img/card/${props.color}.png`)}
                alt="wishing-card"
                className="card"
                onClick={() => {
                    setStatus(true);
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            />

        </Fragment>
    );
}
export default Card;