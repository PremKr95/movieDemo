import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './ListHeaderStyle';

const ListHeader = ({onPress}) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.productTitle}>Movie Screen</Text>
        <TouchableOpacity onPress={onPress} style={{position: 'absolute', right: 20, alignSelf: 'flex-end', bottom: 10}}>
          <Image style={{height: 20, width: 20}} source={require('../../assets/logout.png')}/>
        </TouchableOpacity>
      </View>
    );
}

export default ListHeader;
