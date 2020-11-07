import React from 'react';
import {View, TextInput} from 'react-native';
import {searchbarStyle} from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = (props) => {
  return (
    <View style={searchbarStyle.container}>
      <Icon name="magnify" size={20} color="gray"/>
      <TextInput
        style={searchbarStyle.input}
        placeholder="Search a city"
      />
    </View>
  );
};

export {SearchBar};
