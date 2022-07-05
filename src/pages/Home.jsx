import './Home.css';

import { Fragment, useState, useContext } from "react";
import Input from "../components/form-components/Input";
import { Context } from '../lib/Provider';
import { Link } from 'react-router-dom';

const Home = () => {

    const [wishing, setWishing] = useState('');
    const [state, dispatch] = useContext(Context);

    function hanldeWishing(evt) {
        setWishing(evt.target.value);
    }

    return (
        <Fragment>
            <div className="input-form mt-5">
                <Input
                    name={'wishing'}
                    title={'Write your wish'}
                    type={'text'}
                    value={wishing}
                    placeholder={'Type your wish here'}
                    handleChange={hanldeWishing}
                />
                <Link to={"/wish"}>
                    <button className="btn btn-primary" onClick={() => {
                        dispatch({
                            payload: wishing
                        })
                        setWishing('')
                    }}>
                        Submit
                    </button>
                </Link>

            </div>
        </Fragment>
    );
}

export default Home;