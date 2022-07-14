import { Fragment, useState } from "react";
import ReactjsAlert from "reactjs-alert";
import "./Card.css";

const Card = (props) => {

    const [status, setStatus] = useState(false);

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
            />

        </Fragment>
    );
}
export default Card;