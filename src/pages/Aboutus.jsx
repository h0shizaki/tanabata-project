import Discord from '../components/Discord';
import './About.css';

const Aboutus = () => {
    const id = [
        ["https://cdn.discordapp.com/avatars/123002824232665088/db7df1363c008238040bbf8ed113fd5f.webp", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#5279"],
        ["https://cdn.discordapp.com/avatars/254899949077135360/06a4d4cab6ad99f8af4f3aea41b68b51.webp", "Query#1976"],
        ["https://cdn.discordapp.com/avatars/303505838369144834/19bffe036dde09fbde6b86b22777248e.webp", "! [K]#5205"],
        ["https://cdn.discordapp.com/avatars/777500136162983946/5b643034ee383d723846109337cec663.webp", "ชื่อ สนาม#4832"]
    ]

    return (
        <div className='text-container' >
            <h1>
                Created by
            </h1>

            {id.map((m) => (
                <Discord img={m[0]} name={m[1]} />
            ))}
            <div className='creditContainer'>
                <div className='warp'>
                    <a href='https://github.com/h0shizaki/tanabata-project'>
                        <button class='btn btn-primary '>
                            Repository
                        </button>
                    </a>
                </div>
                <div className='warp'>
                    <a href="https://www.ac-illust.com/">
                        <button class='btn btn-danger '>
                            イラスト AC
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;