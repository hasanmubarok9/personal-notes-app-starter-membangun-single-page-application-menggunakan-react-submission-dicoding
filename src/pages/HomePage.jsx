import React from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import { getActiveNotes, getArchivedNotes } from '../utils/local-data';

function HomePageWrapper() {
  const { name } = useParams();
  console.log("di homepage, nilai param name: ", name);
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return  <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} pathParamName={name ?? ''} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    console.log("nilai props pathParamName: ", props.pathParamName)
    this.state = {
      notes: props.pathParamName === 'archives' ? getArchivedNotes() : getActiveNotes(), 
      keyword: props.defaultKeyword || ''
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword
      }
    })

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      )
    });

    const isArchivedPage = this.props.pathParamName === 'archives';

    return (
      <main>
        <section className="homepage">
          <h2>Catatan {isArchivedPage ? "Arsip" : "Aktif"}</h2>
          <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
          <NoteList notes={notes} />
          <div className="homepage__action">
            <button className="action" type="button" title="Tambah">
              // TODO: plus icon
              Plus
            </button>
          </div>
        </section>
      </main>
    )
  }
}

export default HomePageWrapper;
