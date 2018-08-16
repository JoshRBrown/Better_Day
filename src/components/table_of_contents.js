import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class TableOfContents extends Component {
  render() {
    return (
      <div className='full'>
      <div className='centered'>
      <div><h1>WHERE TO?</h1></div>
      <div className='index-button'>
      <Link to='/journal'>
        <button className='btn btn-warning'>
          My Journal
        </button>
      </Link>
      </div>
      <div className='index-button'>
      <Link to='/posts'>
        <button className='btn btn-warning'>Browse Entries</button>
      </Link>
      </div>
      </div>
      </div>
    );
  };
};

export default TableOfContents;