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
    smallText: {
        padding: 5,
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    inputText: {
        width: 150,
        padding: 10,
        fontWeight: 'bold',
        color: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    touchable : {
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: '#FF0800',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    exerciseContainer: {
        flex: 1,
        alignContent: 'flex-start',
    },

    smallBotton: {
        flex: 1,
        width: 100,
        height: 50,
        margin: 10
    }
});
  