import {Dimensions, StyleSheet} from 'react-native';

export const searchbarStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    width: Dimensions.get("window").width * 1,
    top: 10,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 0,
    marginLeft: 10,
  },
});

export const cityStyle = StyleSheet.create({
  container: {

  },
  text: {

  },
});

export const detailStyle = StyleSheet.create({
  container: {

  },
  name: {

  },
  address: {

  },
  phone: {

  },
});