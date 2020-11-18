import {Dimensions, StyleSheet} from 'react-native';

export const searchbarStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    width: Dimensions.get("window").width * 0.8,
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
    backgroundColor: "white",
    padding: 5,
    margin: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontWeight: "bold",
    color: "#424242",
    marginLeft: 5,
  },
});

export const detail = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  line: {
    borderWidth: 1,
    width: Dimensions.get("window").width / 4,
    alignSelf: 'center',
    borderColor: '#e0e0e0',
    marginVertical: 2
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#424242',
  },
  address: {
    fontSize: 12,
  },
  phone: {
    fontWeight: 'bold',
    marginLeft: 5
  },
});