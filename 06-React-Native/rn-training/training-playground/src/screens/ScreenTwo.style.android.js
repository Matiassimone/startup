import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#2196F3'
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
    },

    smallBox: {
        flex: 1,
        width: 50,
        height: 50,
        margin: 10
    },
    mediumBox: {
        flex: 1,
        width: 100,
        height: 100,
        margin: 10
    },
    bigBox: {
        flex: 1,
        width: 200,
        height: 200,
        margin: 10
    },

    colorRedOrange: {
        backgroundColor: '#F44336'
    },
    colorDarkPurple: {
        backgroundColor: '#673AB7'
    },
    colorWrite: {
        backgroundColor: '#FFFFFF'
    }
  });
  