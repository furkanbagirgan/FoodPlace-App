import { StyleSheet } from "react-native";

const basicStyles=StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10
  },
  title:{
    fontSize: 16,
    fontWeight: "bold"
  }
});

const styles={
  primaryWhite:StyleSheet.create({
    ...basicStyles,
    container: {
      ...basicStyles.container,
      backgroundColor: "#388e3c",
    },
    title:{
      ...basicStyles.title,
      color: "#fff"
    }
  }),
  primaryOrange:StyleSheet.create({
    ...basicStyles,
    container: {
      ...basicStyles.container,
      backgroundColor: "#4caf50",
    },
    title:{
      ...basicStyles.title,
      color: "#FFF"
    }
  }),
  secondary:StyleSheet.create({
    ...basicStyles,
    container: {
      ...basicStyles.container,
      backgroundColor: "#fff",
    },
    title:{
      ...basicStyles.title,
      color: "#388e3c"
    }
  }),
};

export default styles;