import { useState } from "react";
import React from "react";
import styles from "./BooksCard.module.css";
import { AiFillHeart } from "react-icons/ai";

function BooksCard({ data, handlelLikedList }) {
  const { title, author, image, language, pages } = data;
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handlelLikedList(data, like);
    setLike((like) => !like);
  };
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>

        <div>
          <span>{language}</span>
          <span>{pages}</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <AiFillHeart fontSize="1.8rem" color={like ? "red" : "#e0e0e0"} />
      </button>
    </div>
  );
}

export default BooksCard;