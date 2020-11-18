import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {detail} from '../styles';

const RestaurantDetail = (props) => {
  return (
    <Modal isVisible={props.isVisible}>
      <View style={detail.container}>
        <Text style={detail.name}>{props.restaurant.name}</Text>
        <Text style={detail.adress}>
          {props.restaurant.area} {props.restaurant.adress}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View style={{flexDirection: 'row'}}>
            <Icon name="phone" size={20} />
            <Text style={detail.phone}>+{props.restaurant.phone}</Text>
          </View>
          {/* <View style={{flexDirection: 'row'}}>
            {showPrice(props.restaurant.price)}
          </View> */}
        </View>
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in
          scelerisque nibh, nec condimentum arcu. Integer tincidunt ullamcorper
          dapibus. Etiam viverra tellus lectus, non faucibus sem lobortis
          varius. Etiam ut gravida nunc, in eleifend elit. Morbi laoreet
          elementum tellus, et mattis dui ultrices a. Aliquam erat volutpat.
          Donec luctus ac augue non ultricies. Praesent efficitur vitae odio nec
          euismod. Curabitur eget nibh ultrices, tempus tortor id, volutpat
          odio. Nullam vel est eget felis fermentum venenatis. Donec sed felis
          quis leo rutrum viverra vitae quis sapien. Duis tincidunt, ante et
          bibendum lacinia, libero nisi malesuada dolor, nec venenatis ligula
          diam quis velit.
        </Text>
      </View>
    </Modal>
  );
};

export {RestaurantDetail};
