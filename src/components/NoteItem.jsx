import React from 'react';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import { showFormattedDate } from '../utils';

function NoteItem({
  id,
  title,
  body,
  createdAt,
}) {
  const formattedCreatedAt = showFormattedDate(createdAt);
  return (
    <article className="note-item">
        <h3 className="note-item__title"><Link to={`/notes/${id}`}>{title}</Link></h3>
        <p className="note-item__createdAt">{formattedCreatedAt}</p>
        <p className="note-item__body">
          {parser(body)} 
        </p>
    </article>
  )
}

export default NoteItem;
