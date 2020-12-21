import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {style} from './MovieCardStyle';
import {imageBaseUrl} from '../../utils/utils'


const MovieCard = (props) => {
  const {item, likedArr = [], dislikedArr = []} = props;
  const url = `${imageBaseUrl}${item.backdrop_path}`
  return (
    <TouchableOpacity onPress={props.onPress} style={style.container}>
      <View style={style.imageOuterView}>
          <Image
            style={style.image}
            source={{
              uri: url,
            }}
          />
        <Text style={style.titleText}>{item.title}</Text>
      </View>
      <View style={style.bottomView}>
        <View style={style.imgText}>
          <TouchableOpacity onPress={() => props.likeItem(item.id)}>
          <Image
            style={style.vectorIcon}
            source={
              likedArr.includes(item.id)
                ? require('../../assets/like_filled.png')
                : require('../../assets/like.png')
            }
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.dislikeItem(item.id)}>
          <Image
            style={style.vectorIcon}
            source={
              dislikedArr.includes(item.id)
                ? require('../../assets/dislike_filled.png')
                : require('../../assets/dislike.png')
            }
          />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default MovieCard;