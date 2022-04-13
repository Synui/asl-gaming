function Card({sign, id, handleClick}){
    const signClass = sign.stat ? " active " + sign.stat : ""

    return (
        <div className={"card" + signClass} onClick={() => handleClick(id)}>
            <img src={sign.img} alt="" />
        </div>
    )
}


export default Card;