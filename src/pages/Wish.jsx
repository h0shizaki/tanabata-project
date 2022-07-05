import { Fragment } from "react";
import Bamboo from "../components/Bamboo";
import Card from "../components/Card";
import './Wish.css';

const mockData = require('../static/mockData.json');

const Wish = (props) => {


    return (
        <Fragment>
            <Bamboo />

            <div className="card-pos-2">
                <Card color={'green'} wishingText={mockData[0].text} />
            </div>
            <div className="card-pos-1">
                <Card color={'pink'} wishingText={mockData[1].text} />
            </div>
            <div className="card-pos-3">
                <Card color={'orange'} wishingText={mockData[2].text} />
            </div> 
             <div className="card-pos-4">
                <Card color={'yellow'} wishingText={props.wishing} />
            </div>


        </Fragment>

    );
}

export default Wish;