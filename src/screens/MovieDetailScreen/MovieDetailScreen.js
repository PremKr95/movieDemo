import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native';
import {styles} from './MovieDetailScreenStyle';
import {imageBaseUrl} from '../../utils/utils'

const MovieDetailScreen = props => {

    const navigateToPreviousScreen = () => props.navigation.goBack();
    const navigationProps = props.navigation.getParam('navigationProps') || {};
    const { item, likedArr, dislikedArr } = navigationProps;    
    const url = `${imageBaseUrl}${item.poster_path}`

    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageOuterView}>
          <TouchableOpacity
            onPress={navigateToPreviousScreen}
            style={styles.backArrow}>
            <Image
              style={styles.backImg}
              source={require('../../assets/back.png')}
            />
          </TouchableOpacity>
            <Image source={{uri: url}} style={styles.img} />
        </View>
        <View style={styles.bottomView}>
          <View style={styles.smallIconOuterView}>
            <View style={styles.whiteCircle}>
              <Image
                style={styles.icon}
                source={
                  likedArr.includes(item.id)
                    ? require('../../assets/like_filled.png')
                    : require('../../assets/like.png')
                }
              />
            </View>
            <View style={styles.whiteCircle}>
              <Image
                style={styles.icon}
                source={
                  dislikedArr.includes(item.id)
                    ? require('../../assets/dislike_filled.png')
                    : require('../../assets/dislike.png')
                }
              />
            </View>
          </View> 
          <Text style={styles.titleText}>
            {item.title}
          </Text>
          <Text style={styles.description}>
            {item.overview}
          </Text>
          <View style={styles.releaseContainer}>
            <Text style={styles.releaseText}>Release Date:</Text>
            <Text style={styles.releaseDate}>{item.release_date}</Text>
          </View>
        </View>
      </View>
    );
}

export default MovieDetailScreen;