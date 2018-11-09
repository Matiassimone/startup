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
    centerOfTheScreenRow: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "center",
        padding: 30
      }
  });
  