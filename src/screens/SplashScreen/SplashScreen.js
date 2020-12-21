import React, {useRef, useEffect} from 'react';
import {SafeAreaView, Text, View, Dimensions, Animated, AsyncStorage} from 'react-native';
import {styles} from './SplashScreenStyle';
import {StackActions, NavigationActions} from 'react-navigation';
import { ASYNC_STORAGE_KEYS } from '../../utils/utils';
const SpalshScreen = (props) => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2000,
      useNativeDriver: false,
    }).start();
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [moveAnim, fadeAnim, scaleAnim]);

  useEffect(() => {
    navigateToMovieScreen();
  }, []);

  const navigateToMovieScreen = async() => {
    const loggedIn = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.UID)
    setTimeout(() => {
      const route = loggedIn === "true" ? 'MovieScreen' : 'Login'
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: route})],
      });
      props.navigation.dispatch(resetAction);
    }, 5000);
  };

  const scale = scaleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [3, 1],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Animated.Image
          style={[
            styles.image,
            {
              transform: [
                {
                  scale,
                },
              ],
            },
          ]}
          source={require('../../assets/splash.png')}
        />
        <Animated.View style={[styles.logoContainer, {marginLeft: moveAnim}]}>
          <Text style={[styles.logoText]}>M</Text>
          <Animated.Text style={[styles.logoText, {opacity: fadeAnim}]}>
            ovies
          </Animated.Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SpalshScreen;
