import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
class Lyrics extends Component {
    state={
        track:{},
        lyrics:{}
    }
    componentDidMount(){
        console.log('componentDidMount from Lyrics')
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(results=>{
            console.log('lyrics',results.data)
            this.setState({
            lyrics:results.data.message.body.lyrics
        })})
        return axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(results=>{
            console.log(results.data)
            this.setState({
            track:results.data.message.body.track
        })
    })
        .catch(err=>console.log(err))
    }
    render() {
        console.log('Lyric finder')
        return (
            <div>
                <h1>Lyrics</h1>
                <Link to='/' className='btn btn-dark btn-sm mb-4'>Go Back</Link>
                <div className="card">
                    <div className="card-header">
                        {this.state.track.track_name} by {' '}
                        <span className='text-secondary'>{this.state.track.artist_name}</span>
                        <div className='card-body'>
                            <p className='card-text'>
                                {this.state.lyrics.lyrics_body}
                            </p>
                        </div>
                    </div>
                </div>
                <ul className='list-group mt-3'>
                    <li className='list-group-item'>
                        <strong>Album ID</strong>:{this.state.track.album_id}
                    </li>
                    {/*<li className='list-group-item'>
                        <strong>Song Genre</strong>:{this.state.track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                    </li>*/}
                    <li className='list-group-item'>
                        <strong>Release Date</strong>:<Moment format='MM/DD/YYYY'>{this.state.track.first_release_date}</Moment>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Lyrics