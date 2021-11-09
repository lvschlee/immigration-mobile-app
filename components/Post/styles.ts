import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginLeft:20,
    marginRight: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 5,
    overflow: 'hidden'
  },
  thumb: {
    height: 135
  },
  body: {
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 15,
  },
  description: {
    textAlign: 'justify'
  }
});