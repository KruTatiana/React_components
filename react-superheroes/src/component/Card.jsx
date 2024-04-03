function Card(props) {
    return(
      <div className="card">
        <h3 className="card_name">{props.name}</h3>
        <div className="card_universe">Вселенная: {props.universe}</div>
        <div className="card_alterego">Альтер эго: {props.alterego}</div>
        <div className="card_occupation">Род деятельности: {props.occupation}</div>
        <div className="card_friends">Друзья:{props.friends}</div>
        <div className="card_superpowers">Суперсилы: {props.superpowers}</div>
        <div className="card_info">{props.info}</div>
        <img src={props.url} alt={props.name} className="card_img" />
      </div>
    );
  };


export default Card;