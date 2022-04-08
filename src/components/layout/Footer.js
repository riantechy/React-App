import React from 'react'

export default function Footer() {
  return (
    <div>
        <p style={footerStyle}>This Blog app was designed  by Riantechy &copy; 2022</p>
    </div>
  )
 
}
const footerStyle ={
    boxSizing: 'border',
    display: 'flex',
    backgroundColor: '#565',
    textAlig: 'center',
    color: 'white',
    width: '100%',
    padding: '20px',
}

