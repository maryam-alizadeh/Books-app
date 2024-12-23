import React from "react";
import { useState } from "react";
import { books } from "../constants/mockData.js";
import BooksCard from "./BooksCard.jsx";
import SideCard from "./SideCard.jsx";
import styles from "./Books.module.css";

function Books() {
  const [liked, setLiked] = useState([]);
  const handlelLikedList = (book, status) => {
    if (status) {
      const newLikeList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikeList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {books.map((book) => (
          <BooksCard key={book.id} data={book} handlelLikedList={handlelLikedList} />
        ))}
      </div>
      {!!liked.length && (
        <div className={styles.favorite}>
          <h4>Favorites</h4>
          {liked.map((book) => (
            <SideCard key={book.id} data={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;
