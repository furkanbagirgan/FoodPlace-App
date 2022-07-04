import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    paddingHorizontal: 15,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 25
  },
  input:{
    marginLeft: 10,
    flex: 1,
  }
});

export default styles;