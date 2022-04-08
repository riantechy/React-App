import { render } from "@testing-library/react";
import React, { Component } from "react";
import Blogitems from "./Blogitems";
import PropTypes  from "prop-types";

class Blogapp extends Component{
    getStyle = () =>{
        return{
            backgroundColor: '#f4f4f4f4',
            width: '31%',
            padding: '10px',
            margin: '10px',
            float: 'left'
        }
    }

    render() {
        return this.props.blogs.map((blog) => (
            <div style={ this.getStyle() }>
                <Blogitems key={blog.id} blog={blog} 
                delBlog={this.props.delBlog}/>
                
            </div>   
        )); 
      }
}

//protypes
Blogapp.propTypes ={
    blogs: PropTypes.array.isRequired
}


export default Blogapp;
