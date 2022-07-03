import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 5,
    paddingVertical: 5,
  },
  image:{
    width: "25%",
    height: 100,
    resizeMode: "cover"
  },
  infoContainer:{
    width: "55%",
    flexDirection:"column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
  },
  title:{
    color: "#000",
    fontSize: 16,
    marginBottom: 10
  },
  price:{
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer:{
    width:"20%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  detailButton:{
    width: 75,
    height: 35,
    borderRadius: 15,
    backgroundColor: "#ccc",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop:20
  },
  detailTitle:{
    color:"#fff",
    marginRight: 5
  }
});

export default styles;