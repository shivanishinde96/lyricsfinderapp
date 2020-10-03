import React, { Component } from 'react'
import {Consumer} from '../../context'
import Track from './Track'
import Spinner from '../Layout/Spinner'
class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value=>{
                   // console.log(value)
                   if(value.track_list===undefined||value.track_list.length===0){
                       return <h1>Sorry</h1>
                   }
                   else{
                       return(
                    <><h3 className='text-center mb-4'>{value.heading}</h3>
                    <div className='row'>
                        {value.track_list.map(item=><Track key={item.track.track_id} track={item.track}/>)}
                    </div></>)
                   }
                }}
            </Consumer>
        )
    }
}

export default Tracks