import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Hoshi} from 'react-native-textinput-effects';
import {RFPercentage} from 'react-native-responsive-fontsize';

export default class CampDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      phone: '',
      className: 'CampDetail',
      open: false,
      modalVisible: false,
      imageId: 0,
    };
  }
  render() {
    return (
      <View>
        <View
          style={{
            width: '90%',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: '9%',
          }}>
          <Hoshi
            label={'Kamp alanı hakkında detay verin'}
            borderColor={'#55C1C3'}
            autoCapitalize={'words'}
            returnKeyType="done"
            borderHeight={3}
            multiline={true}
            numberOfLines={4}
            labelStyle={{color: '#B7B7B7'}}
            inputStyle={{
              width: '95%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            autoCorrect={false}
            placeholderTextColor="#9A9A9A"
            inputPadding={16}
            style={{
              color: 'red',
              width: '100%',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
            type={'custom'}
            value={this.state.name}
            onChangeText={(name) => this.setState({name: name})}
          />
        </View>
        <TouchableOpacity style={styles.nexButton}>
          <Text style={styles.textStyle}>Gönder</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nexButton: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
    borderRadius: 15,
    height: 50,
    backgroundColor: '#24D4A4',
    marginBottom: '5%',
  },
  textStyle: {
    color: '#f5f5f5',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: RFPercentage(2.1),
  },
});
