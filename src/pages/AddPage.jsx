import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddPage() {

  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    navigate('/');
  }

  return (
    <section>
      <h2>Tambah Catatan</h2>
      // TODO: Note Input
    </section>
  )
}

export default AddPage;
