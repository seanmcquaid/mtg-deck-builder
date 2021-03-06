import React from "react";
import styles from "./Card.module.css";
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <div className={styles.cardContainer}>
            <h5>{props.cardName}</h5>
            <Link to={`/cardInfo/${props.cardId}`}>
                <img src={props.imageUrl} alt={props.cardName} className={styles.cardImage}/>
            </Link>
            <div className={styles.buttonContainer}>
                <Link className={styles.viewCardLink} to={`/cardInfo/${props.cardId}`}>View Card</Link>
                <button className={styles.deckButton} onClick={props.clicked}>{props.buttonText}</button>
            </div>
        </div>
    )
}

export default Card;