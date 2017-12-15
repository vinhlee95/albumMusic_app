import React from 'react';
import {View, Text, Image, Linking} from 'react-native'
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({album}) => {
   //destructuring album object
   const {title, artist, image, thumbnail_image, url} = album;
   //destructuring styles object
   const { headerStyle, titleNameStyle, thumbnailStyle, headerTextStyle, imageStyle } = styles;
   return( 
      <Card>
         <CardItem style={headerStyle}>
            <View>
               <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
            </View>
            <View style={headerTextStyle}>
               <Text style={titleNameStyle}>{title}</Text>
               <Text>{artist}</Text>
            </View>
         </CardItem>
         <CardItem>
            <Image source={{ uri: image }} style={imageStyle} />
         </CardItem>
         <CardItem>
            <Button onPress={() => Linking.openURL(url)}>
               Buy Now
            </Button>
         </CardItem>
      </Card>
   );
};

const styles = {
   headerStyle: {
      flexDirection: "row"
   },
   headerTextStyle: {
      flexDirection: "column",
      justifyContent: "center"
   },
   titleStyle: {
      fontSize: 18,
      fontWeight: 'bold'
   },
   thumbnailStyle: {
      width: 50,
      height: 50,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 2
   },
   imageStyle: {
      flex: 1,
      height: 300,
      width: null
   }
};

export default AlbumDetail;