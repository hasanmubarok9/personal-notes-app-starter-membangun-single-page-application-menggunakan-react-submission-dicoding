import React from 'react';
import NoteItem from './NoteItem';

function NoteList() {
  return (
    <section className="notes-list">
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </section>
  )
}

export default NoteList;
