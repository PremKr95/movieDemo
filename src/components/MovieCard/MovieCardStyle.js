import React from 'react';
import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
  },
  imageOuterView: {height: '80%', width: '100%'},
  image: {
    flex: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  titleText: {
    position: 'absolute',
    bottom: 8,
    left: 6,
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
  },
  bottomView: {
    height: '20%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgText: {flex: 1, flexDirection: 'row', justifyContent: 'center', position:'absolute', right: 0 },
  vectorIcon: {height: 18, width: 18, marginTop: 1, marginRight: 16},
  vectorText: {fontSize: 16, marginLeft: 6}
});