import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';

function DetailPageWrapper() {
  const { id } = useParams();
  console.log('nilai param id: ', id);
  return <DetailPage id={id}/>
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id)
    }
  }

  render() {
    const {
      id,
      title,
      body,
      createdAt,
      archived
    } = this.state.note;
    const formattedCreatedAt = showFormattedDate(createdAt);
    return (
      <section className="detail-page">
        <h3 className="detail-page__title">{title}</h3>
        <p>{formattedCreatedAt}</p>
        <div className="detail-page__body">
          {body}
        </div>
        <div className="detail-page__action">
          <button className="action" type="button" title="Arsipkan">
            Arsipkan
          </button>
          <button className="action" type="button" title="Hapus">
            Hapus
          </button>
        </div>
      </section>
    )
  }
}

export default DetailPageWrapper;
