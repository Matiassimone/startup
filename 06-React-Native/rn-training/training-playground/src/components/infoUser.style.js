import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    flexBoxUser: {
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between",
        backgroundColor: "#f3f3f3",
        margin: 5,
        padding: 8
    },
    flexBoxLeft : {
        flex: 1,
        flexGrow: 70,
        width: "auto",
        height: "auto",
        flexDirection: "column",
        alignContent: "flex-start",
        alignItems: "flex-start"
    },
    flexBoxRight: {
        flex: 1,
        flexGrow: 30,
        width: "auto",
        height: "auto",
        flexDirection: "row",
        alignContent: "flex-end",
        alignItems: "flex-end",
        alignSelf: "flex-end"
    },

    flexBoxTitle: {
        flexGrow: 20,
        flexDirection: "row",
        alignContent: "flex-start",
        alignItems: "flex-start"
    },
    textTitle: {
        fontSize: 20,
        fontWeight: "bold"
    },

    flexBoxQuote: {
        flexGrow: 10,
        flexDirection: "row",
        alignContent: "flex-start",
        alignItems: "flex-start"
    },
    textQuote: {
        fontSize: 10,
        fontWeight: "bold",
        fontStyle: "italic"
    }
  });
  