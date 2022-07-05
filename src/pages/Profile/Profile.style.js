import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  loadingContainer:{
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  container:{
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    paddingBottom: 0,
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20
  },
  infoItem:{
    width: "100%",
    height: 50,
    paddingLeft: 20,
    marginBottom: 15,
    backgroundColor:"#ededed",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  infoTitle:{
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    marginRight: 5
  },
  infoValue:{
    fontSize: 16,
    color: "#000",
  }
});

export default styles;