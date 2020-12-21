import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  AsyncStorage
} from 'react-native';
import {styles} from './MovieScreenStyle';
import ListHeader from '../../components/ListHeader/ListHeader';
import MovieCard from '../../components/MovieCard/MovieCard';
import { connect } from 'react-redux';
import { fetchMovieList, fetchMovieListLoader } from "../../redux/action/action";
import { ASYNC_STORAGE_KEYS } from '../../utils/utils';

let page = 1;

class MovieScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        likedArr: [],
        dislikedArr: []
    };
  }

  componentDidMount() {
      page = 1;
      this.props.fetchMovieList(page)
  }

  likeItem = id => {
    const { likedArr, dislikedArr } = {...this.state};
    const _likedArr = likedArr.filter(it => it !== id)
    const _dislikedArr = dislikedArr.filter(it => it !== id)
    _likedArr.push(id);
    this.setState({likedArr: _likedArr, dislikedArr: _dislikedArr})
  }

  dislikeItem = id => {
    const { likedArr, dislikedArr } = {...this.state};
    const _likedArr = likedArr.filter(it => it !== id)
    const _dislikedArr = dislikedArr.filter(it => it !== id)
    _dislikedArr.push(id);
    this.setState({likedArr: _likedArr, dislikedArr: _dislikedArr})
  }

  loadMore = () => {
    this.props.fetchMovieListLoader()
    this.props.fetchMovieList(page++)
  }

  renderFooter = () => (
    <>
    <TouchableOpacity onPress={this.loadMore} style={styles.bottomView}>
      <Text style={styles.loadMoreText}>{this.props.isLoading ? 'Loading' : 'Load More'}</Text>
    </TouchableOpacity>
    <View style={styles.footer}/>
    </>
  )

  navigateToMovieDetails = item => {
    const {likedArr, dislikedArr} = this.state;
    const {navigation} = this.props;
    const navigationProps = {
      item,
      likedArr,
      dislikedArr
    }
    navigation.navigate('MovieDetailScreen', {navigationProps});
  }

  renderEmptyView = () => (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{height: '20%', width: '100%'}}/>
      <Image source={require('../../assets/empty.png')}/>
       <Text style={{fontSize: 20, fontWeight: '500',  marginTop: 50}}>No Movies Found</Text>
       <TouchableOpacity
        style={{ 
        backgroundColor: '#009387',
        width: 120,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24}}
        onPress={() => this.props.fetchMovieList(1)}>
        <Text style={styles.cartText}>Retry</Text>
      </TouchableOpacity>
    </View>
  )

  logout = () => {
    AsyncStorage.setItem(ASYNC_STORAGE_KEYS.IS_LOGGEDIN, "false")
    this.props.navigation.navigate('Login')
  }

  render() {
    const { movieArr = [], cartArr = [] } = this.props;
    const { likedArr, dislikedArr } = this.state;
    return (
      <View style={styles.MainContainer}>
        <ListHeader
          onPress={this.logout}
        />
        <FlatList
          data={movieArr}
          style={styles.listPadding}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={4}
          onEndReached={this.loadMore}
          renderItem={({item, index}) => {
            const arr = cartArr.filter(
              (it) => it.name === item.name,
            );
            return (
              <MovieCard
                onPress={() => this.navigateToMovieDetails(item)}
                item={item}
                likedArr={likedArr}
                dislikedArr={dislikedArr}
                likeItem={this.likeItem}
                dislikeItem={this.dislikeItem}
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
          ListEmptyComponent={this.renderEmptyView}
        />
      </View>
    );
  }
}

const mapStateFromProps = state => {
console.log("state", state)
  return {
    movieArr: state.movieArr,
    cartArr: state.cartArr,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = {
  fetchMovieList,
  fetchMovieListLoader
}

export default connect(mapStateFromProps, mapDispatchToProps)(MovieScreen);
