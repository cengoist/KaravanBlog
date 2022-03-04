import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import sea from '../CustomMarker/sea';

export default class CheckBoxes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      phone: '',
      className: 'CheckBoxes',
      open: false,
      modalVisible: false,
      imageId: 0,
    };
  }
  setModalVisible(open) {
    this.setState({open: open});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.nextiButton}>
            <Text style={styles.ttStyle}>
              Deniz durumu hakkında bilgi verin
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {sea.map((seas) => (
              <TouchableOpacity
                key={seas.id}
                onPress={() => {
                  this.setState({
                    imageId: seas.id,
                  });

                  this.setModalVisible(!this.state.open);
                }}
                style={styles.tStyle}>
                <Image
                  style={styles.imaStyle}
                  source={
                    this.state.imageId == seas.id
                      ? seas.ChooseSeaImage
                      : seas.SeaImage
                  }
                />
                <Text style={{marginTop: 5, marginLeft: 5}}>
                  {seas.seaDetail}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  content: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  ttStyle: {
    color: '#111111',
    marginLeft: 15,
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: RFPercentage(1.9),
  },
  nextiButton: {
    backgroundColor: '#eee',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    height: 50,
  },
  touch: {
    flexDirection: 'column',
    width: '50%',
  },
  checkboxStyle: {
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: RFPercentage(1.9),
    color: '#111',
  },
  tStyle: {
    flexDirection: 'column',
    width: '14%',
    marginLeft: 10,
  },
  imaStyle: {
    width: 45,
    height: 45,
    marginTop: 10,
    marginLeft: 1,
  },
  touschStyle: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 15,
    width: '100%',
    flexWrap: 'wrap',
  },
});
