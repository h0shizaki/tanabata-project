import './Home.css';

import { Fragment, useState, useContext } from "react";
import Input from "../components/form-components/Input";
import { Context } from '../lib/Provider';
import { Link } from 'react-router-dom';
import Bamboo from '../components/Bamboo';

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
                {wishing.length > 3 &&
                    <Fragment>

                        <Link to={"/wish"}>
                            <button className="btn btn-primary" onClick={() => {
                                if (wishing.length !== 0) {
                                    dispatch({
                                        payload: wishing
                                    })
                                    setWishing('')
                                } else {

                                }
                            }}>
                                Submit
                            </button>
                        </Link>
                    </Fragment>
                } {wishing.length <= 3 &&
                    <Fragment>
                        <p style={{ 'color': 'red' }}>You must type at least 4 text</p>
                        <button className="btn btn-primary" disabled>Submit</button>
                    </Fragment>
                }
            </div>
            <Bamboo />
        </Fragment>
    );
}

export default Home;