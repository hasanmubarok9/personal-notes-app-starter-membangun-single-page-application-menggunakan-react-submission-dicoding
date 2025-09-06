import React from 'react';
import { showFormattedDate } from '../utils';

function NoteItem({
  title,
  body,
  createdAt,
}) {
  const formattedCreatedAt = showFormattedDate(createdAt);
  return (
    <article className="note-item">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__createdAt">{formattedCreatedAt}</p>
        <p className="note-item__body">
          {body} 
        </p>
    </article>
  )
}

export default NoteItem;
