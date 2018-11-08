import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    flexBoxPost: {
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between",
        backgroundColor: "#f3f3f3",
        margin: 5,
        padding: 8
    },
    flexBoxPostLeft : {
        flex: 1,
        flexGrow: 70,
        width: "auto",
        height: "auto",
        flexDirection: "column",
        alignContent: "flex-start",
        alignItems: "flex-start"
    },
    flexBoxPostRight: {
        flex: 1,
        flexGrow: 30,
        width: "auto",
        height: "auto",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    boxImgPost: {
        width: 100,
        height: 100,
        margin: 3,
        padding: 3
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
    },
    colorBlue: {
        color: "blue"
    },


    flexBoxArticle: {
        flexGrow: 50,
        flexDirection: "row",
        alignContent: "flex-start",
        alignItems: "flex-start"
    },
    textArticle: {
        fontSize: 10
    },


    flexBoxMediaIcon: {
        flexGrow: 10,
        flexDirection: "row",
        alignContent: "flex-start",
        alignItems: "flex-start"
    },
    boxImgIcon: {
        width: 20,
        height: 20,
        margin: 3,
        padding: 3
    }
  });
  