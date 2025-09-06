import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return  <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      keyword: props.defaultKeyword || ''
    };
  }

  render() {
    return (
      <main>
        <section className="homepage">
          <h2>Catatan Aktif</h2>
          <SearchBar />
          <NoteList />
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
