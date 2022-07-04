import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4caf50",
  },
  upperContainer:{
    flex:1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer:{
    flex:1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title:{
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold"
  },
  buttons:{
    width: "100%",
    marginTop:10,
  },
});

export default styles;