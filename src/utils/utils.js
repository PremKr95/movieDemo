import database from '@react-native-firebase/database';
export const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
export const POPULAR_MOVIE = 'https://api.themoviedb.org/3/movie/popular'
export const movieDbRef = database().ref('/movies');

export const ASYNC_STORAGE_KEYS = {
  IS_LOGGEDIN: "IS_LOGGEDIN",
  UID: "UID"
}

export function isEmpty(value) {
    var isValue = false;
    if (value && value.toString) {
      value = value.toString();
    }
    if (
      value == null ||
      value == '' ||
      value == '.' ||
      value == 'null' ||
      value == undefined ||
      value.trim().length == 0
    ) {
      isValue = true;
    }
    return isValue;
  }