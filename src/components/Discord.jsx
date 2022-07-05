import './Discord.css'
const Discord = (props) => {
    return (
        <div className="discord-div mt-3">
            <img src={props.img} alt={props.name} className="discord-img" />
            <span className="discord-name h4 ">  {props.name}</span>
        </div>
    );

}

export default Discord;