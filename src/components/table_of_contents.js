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
        <button className='btn btn-warning journal-button'>
          My Journal
        </button>
      </Link>
      </div>
      <div className='index-button'>
      <Link to='/posts/recovery'>
        <button className='btn btn-warning'>Recovery</button>
      </Link>
      <Link to='/posts/fitness'>
        <button className='btn btn-warning'>Fitness</button>
      </Link>
      <Link to='/posts/sleep'>
        <button className='btn btn-warning'>Sleep</button>
      </Link>
      <Link to='/posts/mindfulness'>
        <button className='btn btn-warning'>Mindfulness</button>
      </Link>
      <Link to='/posts/reading'>
        <button className='btn btn-warning'>Reading</button>
      </Link>
      <Link to='/posts/writing'>
        <button className='btn btn-warning'>Writing</button>
      </Link>
      <Link to='/posts/mhealth'>
        <button className='btn btn-warning'>Mental Health</button>
      </Link>
      </div>
      </div>
      </div>
    );
  };
};

export default TableOfContents;