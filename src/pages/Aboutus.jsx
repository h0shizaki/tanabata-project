import Discord from '../components/Discord';
import './About.css';
import Bamboo from '../components/Bamboo'
const Aboutus = () => {
    const id = [
        ["ax", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#5279"],
        ["qry", "Query#1976"],
        ["k", "! [K]#5205"],
        ["wei", "ชื่อ สนาม#4832"]
    ]

    return (
        <div className='text-container' >
            <h1>
                Created by
            </h1>

            {id.map((m) => (
                <Discord key={m[1]} img={m[0]} name={m[1]} />
            ))}
            <div className='creditContainer'>
                <div className='warp'>
                    <a href='https://github.com/h0shizaki/tanabata-project'>
                        <button className='btn btn-primary '>
                            Repository
                        </button>
                    </a>
                </div>
                <div className='warp'>
                    <a href="https://www.ac-illust.com/">
                        <button className='btn btn-danger '>
                            Image source
                        </button>
                    </a>
                </div>
            </div>
        <Bamboo></Bamboo>
        </div>
    );
}

export default Aboutus;