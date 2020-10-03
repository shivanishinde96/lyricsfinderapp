import React, { Component } from 'react'
import axios from 'axios'
import {Consumer} from '../../context'
class Search extends Component {
    state={
        trackTitle:''
    }
    
    findTrack=(dispatch,e)=>{
        e.preventDefault()
        axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res=>{console.log(res)
            dispatch({
                type:'SEARCH_TRACKS',
                payload:res.data.message.body.track_list
            })
            this.setState({trackTitle:''})
        })
        .catch(err=>console.log(err))
    }
    onChangeInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
           <Consumer>
               {value=>{
                   return (
                       <div className='card card-body mb-4 p-4'>
                           <h1 className='display-4 text-center'>
                               <i className='fa fa-music'></i>
                               Search For A Song
                           </h1>
                           <p className='lead text-center'>
                               Get the Lyrics for any song
                           </p>
                           <form onSubmit={this.findTrack.bind(this,value.dispatch)}>
                               <div className="form-group">
                                   <input type="text" className="form-control form-control-lg"
                                   placeholder='Song Title' name='trackTitle' value={this.state.trackTitle}
                                   onChange={this.onChangeInput} autoComplete='off'/>
                                   <button className='btn btn-primary btn-lg
                                   btn-block mb-5' type='submit'>
                                   Get Track Lyrics
                                   </button>
                               </div>
                           </form>
                       </div>
                   )
                }}
           </Consumer>
        )
    }
}

export default Search