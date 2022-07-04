import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
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
    marginBottom: 10
  },
  filterContainer:{
    width: "100%",
    height: 30,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
  filterItem:{
    width: 100,
    height: 30,
    backgroundColor: "#ededed",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  activeFilter:{
    width: 100,
    height: 30,
    backgroundColor: "#4caf50",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  filterTitle:{
    color: "#000",
    fontSize: 16,
    fontWeight: "bold"
  },
  activeTitle:{
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
});

export default styles;