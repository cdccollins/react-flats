import React from 'react'
import Flat from './flat'

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map(flat => <Flat flat={flat} key={flat} getFlat={props.getFlat}/>)}
    </div>
  )
}

export default FlatList;
