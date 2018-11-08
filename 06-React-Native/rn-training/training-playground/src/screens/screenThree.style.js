import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: 'column',
      ...Platform.select({
            ios: {
            backgroundColor: 'grey',
            },
            android: {
            backgroundColor: '#E6E5E6',
            }
        })
    },
    text: {
        padding: 5,
        fontSize: 50,
        color: '#FF1654',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    exerciseContainer: {
        flex: 1,
        alignContent: 'flex-start',
    }
});
  