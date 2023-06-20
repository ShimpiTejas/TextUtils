import React from 'react'

export const Summarizer = (props) => {

  return (
    <div>


        <h1>Your Text Summary Here :</h1>

        <p>{(props.text).split(" ").lenght} Words and {(props.text).length} Characters</p>
    </div>
  )
}
