import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container:{
    width: "100%",
    height: 200,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#ededed"
  },
  image:{
    width: "100%",
    height: "70%",
    resizeMode: "cover",
    borderRadius: 20
  },
  bottomContainer:{
    width: "100%",
    height: "30%",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoContainer:{
    width: "70%",
    height: "100%",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 5
  },
  title:{
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  location:{
    color: "#000",
    fontSize: 16,
  },
});

export default styles;