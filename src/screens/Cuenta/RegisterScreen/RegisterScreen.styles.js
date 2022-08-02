import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container: {
        backgroundColor:"#fff",
        height: "100%",
    },

    Image: {
        resizeMode: "contain",
        width: "100%",
        height: 150,
        marginTop:20,
    },
    Content: {
        marginHorizontal: 40,
        
    },

    Image2: {
        flex: 1,
        justifyContent: "center",
        resizeMode: "cover",
    },
})