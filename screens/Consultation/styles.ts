import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 30
  },
  form: {},
  formGroup: {
    marginBottom: 20
  },
  label: {
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  input: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#aaaaaa',
  }
});