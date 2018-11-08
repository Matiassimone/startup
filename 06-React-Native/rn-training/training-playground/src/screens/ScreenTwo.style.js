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
            backgroundColor: 'green',
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

    exerciseContainer: {
        flex: 1,
        alignContent: 'flex-start',
    },
    exerciseContainerBetweenRow: {
        flexDirection: 'row',
        flex: 1,
        alignContent: 'flex-start',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    exerciseContainerBetweenColumn: {
        flexDirection: 'column',
        flex: 1,
        alignContent: 'flex-start',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    exerciseContainerSmall: {
        flex: 1,
        width: 500,
        height: 500
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
    xsmallBox: {
        width: 25,
        height: 25,
        margin: 10
    },
    box50: {
        flex: 1,
        width: 50,
        flexGrow: 50
    },
    box30: {
        flex: 1,
        width: 50,
        flexGrow: 30
    },
    box20: {
        flex: 1,
        width: 50,
        flexGrow: 20
    },
    boxSelfStart: {
        alignSelf: 'flex-start'
    },
    boxSelfCenter: {
        alignSelf: 'center'
    },
    boxSelfEnd: {
        alignSelf: 'flex-end'
    },

    colorRedOrange: {
        backgroundColor: '#F44336'
    },
    colorDarkPurple: {
        backgroundColor: '#673AB7'
    },
    colorWrite: {
        backgroundColor: '#FFFFFF'
    },

    borderRadius: {
        borderRadius: 10
    }
  });
  