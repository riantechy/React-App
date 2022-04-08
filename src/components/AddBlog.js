import React, { Component } from 'react'

export class AddBlog extends Component {
  state ={
    pName: '',
    msg: ''
}
//method to handle the submit button
onSubmit =(e) =>{
  e.preventDefault();
  this.props.addBlog(this.state.pName, this.state.msg);
  this.setState({msg: '', pName: ''});
}

//method to handle the message keyin on the form
onChange = (e) => this.setState({[e.target.name]: e.target.value})
  render() {
    return (
      <div>
          <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
              <input 
                type="text" 
                name ="pName"
                placeholder = "Enter Your Name..."
                style={{flex: '10', padding: '5px'}}
                value={this.state.pName}
                onChange={this.onChange}
              /><br/>
              <input 
                type="text" 
                name ="msg"
                placeholder = "Add Bogs..."
                style={{flex: '10', padding: '5px'}}
                value={this.state.msg}
                onChange={this.onChange}
              />
              <input type ="submit"
                value ="Submit" 
                className = "btn"
                style={{flex:'1'}}
              />
          </form>
      </div>
    )
  }
} 

export default AddBlog