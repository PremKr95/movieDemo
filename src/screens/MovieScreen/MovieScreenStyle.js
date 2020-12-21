import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  listPadding: {padding: 16},
  seperator: {
    height: 10,
    width: '100%'
  },
  footer: {height: 60, width: '100%'},
  bottomView: { alignSelf: 'center', width: 70, backgroundColor: '#0065FF', marginTop: 16, paddingVertical: 12, width: 100, justifyContent: 'center', alignItems: 'center' },
  loadMoreText: {color: '#FFF'}
});
