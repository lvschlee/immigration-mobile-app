import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 350,
    width: '100%',
    marginBottom: 20,
    borderRadius: 5,
    alignSelf: 'center'
  },
  card: {
    width: '80%',
    marginBottom: 15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  description: {
    textAlign: 'justify'
  },
  footer: {
    width: '80%'
  }
});
