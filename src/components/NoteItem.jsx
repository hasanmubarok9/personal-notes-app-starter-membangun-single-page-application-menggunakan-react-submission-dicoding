import React from 'react';

function NoteItem() {
  return (
    <article className="note-item">
        <h3 className="note-item__title">Babel</h3>
        <p className="note-item__createdAt">Kamis, 14 April 2023</p>
        <p className="note-item__body">
          Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMASCRIPT 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.
        </p>
    </article>
  )
}

export default NoteItem;
