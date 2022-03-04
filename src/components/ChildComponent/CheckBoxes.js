import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import CheckBox from '@react-native-community/checkbox';
import images from '../CustomMarker/images';
import checkbox from '../CustomMarker/checkBox';

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
          {checkbox.map((check) => (
            <View key={check.id}>
              <View style={styles.nextiButton}>
                <Text style={styles.ttStyle}>{check.checkName}</Text>
              </View>
              <View style={styles.touschStyle}>
                {check.checkBox.map((checkx) => (
                  <View style={styles.touch}>
                    <View
                      key={checkx.id}
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                        padding: 3,
                      }}>
                      <CheckBox disabled={false} />
                      <Text style={styles.checkboxStyle}>{checkx}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}
          <View style={styles.nextiButton}>
            <Text style={styles.ttStyle}>Aktviteleri belirleyin</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {images.map((image) => (
              <TouchableOpacity
                key={image.id}
                onPress={() => {
                  this.setState({
                    imageId: image.id,
                  });

                  this.setModalVisible(!this.state.open);
                }}
                style={styles.tStyle}>
                <Image
                  style={styles.imaStyle}
                  source={
                    this.state.imageId == image.id
                      ? image.ChooseImage
                      : image.image
                  }
                />
                <Text style={{marginTop: 5, marginLeft: 5}}>
                  {image.imageName}
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
    marginLeft: 8,
  },
  tStyle: {
    flexDirection: 'column',
    width: '17%',
    marginLeft: 10,
  },
  imaStyle: {
    width: 45,
    height: 45,
    marginTop: 10,
    marginLeft: 10,
  },
  touschStyle: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 15,
    width: '100%',
    flexWrap: 'wrap',
  },
});
