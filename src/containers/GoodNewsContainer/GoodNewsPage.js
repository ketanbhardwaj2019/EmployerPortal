import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators} from 'redux';

class GoodNewsPage extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        books: []
      };
    }
  
    componentDidMount() {
      fetch('https://learn-co-curriculum.github.io/books-json-example-api/books.json')
        .then(response => response.json())
        .then(bookData => this.setState({ books: bookData.books }))
    }
  
    renderBooks = () => {
      return this.state.books.map(book => {
        return (
          <div className="book">
            <img src={ book.img_url } />
            <h3>{ book.title }</h3>
          </div>
        )
      })
    }
  
    render() {
      return (
        <div className="book-list">
          { this.renderBooks() }
        </div>
      )
    }
  }

export default GoodNewsPage;
