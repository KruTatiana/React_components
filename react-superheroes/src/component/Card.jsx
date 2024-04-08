function Card({
  name,
  universe,
  alterego,
  occupation,
  friends,
  superpowers,
  info,
  url
}) {
    return(
      <div className="card">
        <h3 className="card_name">{name}</h3>
        <div className="card_universe">Вселенная: {universe}</div>
        <div className="card_alterego">Альтер эго: {alterego}</div>
        <div className="card_occupation">Род деятельности: {occupation}</div>
        <div className="card_friends">Друзья:{friends}</div>
        <div className="card_superpowers">Суперсилы: {superpowers}</div>
        <div className="card_info">{info}</div>
        <img src={url} alt={name} className="card_img" />
      </div>
    );
  };


export default Card;