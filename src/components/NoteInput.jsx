import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value
      }
    })
  };

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      }
    })
  }

  onSubmitEventHandler() {
    this.props.addNote(this.state);
  }

  render() {
    const {
      title,
      body
    } = this.state;

    return (
      <>
        <div className="add-new-page__input">
          <input className="add-new-page__input__title" placeholder="Catatan rahasia" value={title} onChange={this.onTitleChangeEventHandler}/>
          <textarea className="add-new-page__input__body" placeholder="Sebenarnya saya adalah ...." onChange={this.onBodyChangeEventHandler} />
        </div>
        <div className="add-new-page__action">
          <button className="action" type="button" title="Simpan" onClick={this.onSubmitEventHandler}>
            Simpan
          </button>
        </div>
      </>
    )
  }
}

export default NoteInput;
