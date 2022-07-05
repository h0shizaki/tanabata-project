import { Fragment } from "react";
import Card from "../components/Card";
import './Wish.css';

const Wish = (props) => {


    return (
        <Fragment>
            <div className="card-display">
                <Card color={'yellow'} wishingText={props.wishing} />
                {/* <Card color={'green'} />
                <Card color={'pink'} />
                <Card color={'orange'} /> */}
            </div>
            <h1>THIS IS Your wishing {props.wishing}</h1>
        </Fragment>

    );
}

export default Wish;