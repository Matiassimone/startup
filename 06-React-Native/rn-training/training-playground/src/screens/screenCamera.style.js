import { StyleSheet} from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
    },
    cameraView: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    buttomFlip: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18, 
        marginBottom: 10,
        color: 'white'
    }
});
  