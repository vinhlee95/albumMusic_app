import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
   //set up initial state
   state = {
      album: [

      ]
   }
   componentWillMount() {
      axios.get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({album: response.data}))
   }

   render() {
      return (
         <View>
            <Text style={styles.textStyle}>
               Album lists will be shown here!
            </Text>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   textStyle: {
      padding: 10
   }
});

export default AlbumList;