import './Discord.css'
const Discord = (props) => {
    return (
        <div className="discord-div mt-3">
            <picture>
                <img src={require(`../static/img/contributor/${props.img}.webp`)} alt={props.name} className="discord-img" />
            </picture>
            <span className="discord-name ">  {props.name}</span>
        </div>
    );

}

export default Discord;