import React from 'react'

const Body = (props) => {
    return (
      <main className="grey lighten-2">
        <div className="container">
          {props.children}
        </div>
      </main>
    )
}

export default Body
