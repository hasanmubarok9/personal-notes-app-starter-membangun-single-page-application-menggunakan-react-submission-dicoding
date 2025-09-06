import React from 'react';
import { useSearchParams } from 'react-router-dom';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return  <HomePage defaultKeyword={keyword} keywordChange={changeSearchPrams} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      keyword: propd.defaultKeyword || ''
    };
  }

  render() {
    return (
      <main>
        <section>
          <h2>Catatan Aktif</h2>
          // TODO: search bar
          // TODO: notes list
          <div className="homepage__action">
            <button className="action" type="button" title="Tambah">
              // TODO: plus icon
              Plus
            <button>
          </div>
        </section>
      </main>
    )
  }
}

export default HomePageWrapper;
