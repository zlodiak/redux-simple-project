import React from 'react';
import styles from './Messages.module.css';

function Messages(props) {
  const messages = props.messages.map((item, i) => {
    return (
      <li className={styles.item} key={ i }>
        <div className={styles.date}>date: { item.date.toString() }</div>
        <div className={styles.name}>name: { item.name }</div>
        <div className={styles.gender}>gender: { item.gender }</div>
        <div className={styles.subject}>subject: { item.subject }</div>
        <div className={styles.text}>text: { item.text }</div>
      </li> 
    )
  });
  return (
    <ul className={styles.messages}>
      { messages }
    </ul>     
  );
}

export default Messages;
