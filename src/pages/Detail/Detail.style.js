import { StyleSheet,Dimensions } from "react-native";

const styles=StyleSheet.create({
  loadingContainer:{
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  container:{
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent:"space-between",
    flexGrow: 1
  },
  imageContainer:{
    width:"100%",
    height: 250,
    backgroundColor: "#ededed",
  },
  image:{
    width: "100%",
    height: "100%",
    alignSelf: "center",
    resizeMode: "cover"
  },
  titleBox:{
    width: "100%",
    height: 50,
    backgroundColor: "#000",
    position:'absolute',
    bottom:0,
    opacity:0.7,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopmRightRadius: 15,
  },
  title:{
    position:'absolute',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    bottom: 12,
    left:0
  },
  infoContainer:{
    paddingHorizontal: 15,
  },
  infoItem:{
    width: "100%",
    height: 40,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  info:{
    color: "#666",
    fontSize: 16,
    marginLeft: 10,
  },
  divider:{
    width:"100%",
    borderBottomColor:"#bbb",
    borderBottomWidth: 1,
    marginTop: 10
  },
  menuName:{
    color: "#666",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10
  },
  menuDesc:{
    color: "#666",
    fontSize: 16,
    marginBottom: 15
  },
  menuImage:{
    width: "100%",
    height: 200,
    alignSelf: "center",
    resizeMode: "cover",
    marginBottom: 15,
    borderRadius: 25
  }
});

export default styles;