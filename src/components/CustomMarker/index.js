import React from 'react';
import {View, Text} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Marker} from 'react-native-maps';

const CustomMarker = (props) => {
  const {coordinate, price, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? '#111' : '#f5f5f5',
          borderRadius: 20,
          padding: 5,
          borderColor: 'grey',
          borderWidth: 0.5,
        }}>
        <Text
          style={{
            color: isSelected ? '#f5f5f5' : '#111',
            fontWeight: 'bold',
            fontSize: RFPercentage(1.7),
          }}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
};
export default CustomMarker;
