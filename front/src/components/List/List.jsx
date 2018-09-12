import React, { Component } from 'react';

// Components
import Nav from '../Nav/Nav';

// CSS
import "./list.css"

class List extends Component {
  constructor(props) {
      super(props);
      this.state = {
          list: []
      };
    }

  componentDidMount() {
    fetch('http://localhost:3001/get_all_images')
    .then(res => res.json())
    .then((result) => {
      this.setState({
        list: result.list
      })
    })
  }

  render() {
    return (
      <section>
        <Nav/>
        <div className='row_box'>
          <div className='column_box'>
            {this.state.list.map((list, i) => (
              <div className='cat_rating_box' key={i}>
                Position: {i}
                <img className='rating_image' src={list.url} alt="chat1"></img>
                Nombre de votes: {list.rating}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default List;