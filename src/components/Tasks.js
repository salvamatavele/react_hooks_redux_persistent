import React from 'react'

function Tasks(props) {
    return (
        <>
         <div uk-grid="true">
          {props.tasks.map((item) => (
          <div key={item.id} className="uk-box-shadow-bottom uk-box-shadow-small uk-width-1-1">
            <div className="uk-background-default uk-padding-small">
              {item.title}
            </div>
          </div>
          ))}
        </div>   
        </>
    )
}

export default Tasks
