import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4caf50",
  },
  upperContainer:{
    height: "30%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer:{
    height: "70%",
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
    marginTop:30,
  },
});

export default styles;