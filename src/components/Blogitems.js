import { render } from "@testing-library/react";
import React, { Component } from "react";
import PropTypes from "prop-types";

class Blogitems extends Component{

    render() {
        const { id, pName ,msg } = this.props.blog;
        return  (
            <div>
                <h3>{pName}</h3>
                <p>{msg}</p>
                <button onClick={this.props.delBlog.bind(id)} 
                style={btnStyle}>Delete</button>
            </div>   
        ); 
      }
}
//protypes
Blogitems.propTypes ={
    blog: PropTypes.object.isRequired
}
const btnStyle ={
    background: 'red',
    color: 'fff',
    border: 'none',
    borderRadius: '50%',
    padding: '5px 8px',
    textAlign: 'center',
    margin: 'auto',
    cursor: 'pointer',
    
}

export default Blogitems;
