
import { render } from '@testing-library/react';
import React, { Component } from 'react';

import Header from './components/layout/Header';
import './App.css';
import Footer from './components/layout/Footer';
import Blogapp from './components/Blogapp';
import AddBlog from './components/AddBlog';
import Home from './components/layout/pages/Home';
// import uuid from 'v5';

  
class App extends Component{
  state = {
    blogs: [
    {
      id: 1,
      pName: 'Iantechy',
      msg: 'I learned programming while in campus and its sweet'
  
    },
    {
      id: 2,
      pName: 'Riantechy',
      msg: 'Foor me I learned programming while in highschol and its sweet'
    },
    {
      id: 3,
      pName: 'Chir',
      msg: 'I learned programming while in campus and its sweet'
    }
    ]
  }

  //delete bog
  delBlog =(id) =>{
    this.setState ({ blogs: [...this.state.blogs.filter( blog => blog.id !==id)] });
  }

  //add Blog
  addBlog = ([pName], [msg]) => {
    const newBlog = {
      pName,
      msg
    }
    this.setState({blogs: [...this.state.blogs, newBlog ]});
  }

  render() {
    return (
     
        <div className="App">
          <div className='container'>
            <Header />
            <Home />
            <AddBlog addBlog={this.addBlog} />
            <Blogapp blogs={ this.state.blogs } 
            delBlog={this.delBlog}/>
            <Footer />
          </div>
        </div>
      
    );
  }
}

export default App;
