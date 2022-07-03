import { StyleSheet,Dimensions } from "react-native";

const styles=StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  errorTitle:{
    color: "#ba68c8",
    marginTop: 20,
    fontSize: 18
  },
  container:{
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent:"space-between",
    flexGrow: 1
  },
  imageContainer:{
    width:"100%",
    height: 275,
    backgroundColor: "#ededed",
    paddingBottom: 25
  },
  image:{
    width: Dimensions.get("window").width / 2,
    height: "100%",
    alignSelf: "center",
    resizeMode: "cover"
  },
  imageBottom:{
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff"
  },
  infoContainer:{
    paddingHorizontal: 15,
  },
  title:{
    color: "#000",
    fontSize: 20,
    fontWeight: "bold"
  },
  author:{
    color: "#666",
    fontSize: 16,
    marginTop: 10,
  },
  desc:{
    color: "#666",
    fontSize: 16,
    marginTop: 20,
  },
  bottomContainer:{
    marginTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  priceContainer:{
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  priceTitle:{
    color: "#000",
    fontSize: 18,
    fontWeight: "bold"
  },
  price:{
    color: "#000",
    fontSize: 18,
    fontWeight: "bold"
  },
});

export default styles;