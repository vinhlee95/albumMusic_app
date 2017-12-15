import React, { Component } from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {
   //set up initial state
   state = { albums: [] };

   componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}));
   }

   renderAlbum() {
      return this.state.albums.map(album => <AlbumDetail album={album} key={album.title}/>);
   }

   render() {
      return (
         <ScrollView>
            {this.renderAlbum()}
         </ScrollView>
      );
   };
}

export default AlbumList;