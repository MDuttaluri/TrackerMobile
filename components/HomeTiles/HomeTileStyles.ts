import { StyleSheet } from "react-native";

export const HomeTileStyles = StyleSheet.create({
    tile : {
        width : '50%',
        height : '50%',
        backgroundColor : '#fff',
        elevation : 5,
        textAlignVertical : "center",
        borderColor : "black",
        borderStyle : "solid"
    },
    tileText:{
        fontSize : 30,
    },
    tilesOuter :{
        flex : 1
    },
    tilesRow : {
        flex: 1,
        flexDirection : 'row'
    }
})