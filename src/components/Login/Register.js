import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  BackHandler,
  StatusBar,
} from 'react-native';

import {RFPercentage} from 'react-native-responsive-fontsize';
import {Hoshi} from 'react-native-textinput-effects';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


let checkFalseImage = require('../images/tick.png');
let checkTrueImage = require('../images/tick1.png');
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      className: 'Swiper1',
      checkRead: false,
      modalVisible: false,
    };
  }
  /***
   *
   * @returns {boolean}
   */
  onBackPress = () => {
    if (this.state.className == 'Swiper1') {
      this.props.navigation.navigate('Home');
    }
    return true;
  };
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  /***
   *
   * @param visible
   */
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <LinearGradient
        colors={['#51D2A8', '#55C1C3']}
        style={{
          flex: 1,
        }}>
        <StatusBar backgroundColor="#51D1AA" barStyle="light-content" />
        <KeyboardAwareScrollView behavior="position" enabled>
          <Image style={styles.uStyle} source={require('../images/logo.png')} />
          <View style={styles.bStyle}>
            <View style={{marginTop: 25}}>
              <Text style={styles.boStyle}>Kayıt Ol</Text>
            </View>
            <View
              style={{
                width: '90%',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: '3%',
              }}>
              <Hoshi
                label={'İsim giriniz'}
                borderColor={'#55C1C3'}
                autoCapitalize={'words'}
                returnKeyType="done"
                borderHeight={3}
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
                  width: '95%',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
                type={'custom'}
                value={this.state.name}
                onChangeText={(name) => this.setState({name: name})}
              />
            </View>
            <View
              style={{
                width: '90%',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: '3%',
              }}>
              <Hoshi
                label={'Email giriniz'}
                borderColor={'#55C1C3'}
                autoCapitalize={'words'}
                returnKeyType="done"
                borderHeight={3}
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
                  width: '95%',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
                type={'custom'}
                value={this.state.name}
                onChangeText={(name) => this.setState({name: name})}
              />
            </View>
            <View
              style={{
                width: '90%',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: '3%',
              }}>
              <Hoshi
                label={'Şifre giriniz'}
                borderColor={'#55C1C3'}
                autoCapitalize={'words'}
                returnKeyType="done"
                secureTextEntry={true}
                borderHeight={3}
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
                  width: '95%',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
                type={'custom'}
                value={this.state.name}
                onChangeText={(name) => this.setState({name: name})}
              />
            </View>
            <View
              style={{
                width: '90%',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: '3%',
              }}>
              <Hoshi
                label={'Telefon numarası giriniz'}
                borderColor={'#55C1C3'}
                autoCapitalize={'words'}
                returnKeyType="done"
                borderHeight={3}
                labelStyle={{color: '#B7B7B7'}}
                inputStyle={{
                  width: '95%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                autoCorrect={false}
                placeholderTextColor="#9A9A9A"
                inputPadding={16}
                keyboardType="number-pad"
                maxLength={10}
                style={{
                  color: 'red',
                  width: '95%',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
                type={'custom'}
                value={this.state.name}
                onChangeText={(name) => this.setState({name: name})}
              />
            </View>
            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({checkRead: !this.state.checkRead});
                }}>
                <Image
                  style={styles.checkReadImage}
                  source={
                    this.state.checkRead == false
                      ? checkFalseImage
                      : checkTrueImage
                  }
                />
              </TouchableOpacity>
              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={{marginTop: 5}}>
                    <Text
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}
                      style={styles.acceptStyle}>
                      Kullanım Şartlarını
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginTop: 5, marginLeft: 5}}>
                    <Text style={styles.acceptStyle}>
                      Gizlilik Politikasını
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 5}}>
                  <Text style={[styles.acceptStyle, {color: '#111'}]}>
                    Kabul Ediyorum.
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.nexButton}>
              <View style={{width: '60%', marginLeft: 'auto'}}>
                <Text style={styles.obStyle}>Kayıt Ol</Text>
              </View>
              <View style={styles.slide1}>
                <Image
                  style={styles.content}
                  source={require('../images/right-arrow.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={styles.fStyle}>
            <Text style={styles.lStyle}>Zaten hesabın var mı ? Giriş Yap</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    color: '#50D5A4',
    fontSize: RFPercentage(1.7),
  },
  content: {
    width: 30,
    height: 30,
    marginBottom: 'auto',
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  slide1: {
    backgroundColor: '#55DBB2',
    width: 70,
    borderRadius: 100,
    marginLeft: 'auto',
    marginRight: -15,
  },
  bStyle: {
    width: 350,
    height: 510,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '8%',
  },
  boStyle: {
    fontWeight: 'bold',
    fontSize: RFPercentage(2.4),
    color: '#111111',
    textAlign: 'center',
  },
  obStyle: {
    color: '#FFFFFF',
    fontSize: RFPercentage(1.8),
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '27%',
  },
  nexButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 10,
    backgroundColor: '#50D5A4',
    width: '85%',
    height: 65,
    borderRadius: 100,
    flexDirection: 'row',
  },
  uStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 312.95,
    height: 85,
    marginTop: '25%',
  },
  fStyle: {
    marginTop: 25,
    marginBottom: 18,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  lStyle: {
    color: '#FFF',
    fontSize: RFPercentage(1.7),
  },
  View: {
    flexDirection: 'column',
    marginTop: 'auto',
    marginBottom: 10,
    marginRight: 'auto',
    marginLeft: 15,
  },
  TextStyle: {
    color: '#f5f5f5',
    fontSize: RFPercentage(2.8),
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  hayStyle: {
    marginTop: 5,
    color: '#f5f5f5',
    fontSize: RFPercentage(1.7),
    fontFamily: 'Poppins',
  },
  Vstyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  TStyle: {
    backgroundColor: '#e70407',
    borderRadius: 65,
    height: 60,
    width: 60,
    marginLeft: 'auto',
    marginRight: 30,
    marginTop: 35,
  },
  IStyle: {
    width: 25,
    height: 25,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  tStyle: {
    fontSize: RFPercentage(7),
    color: '#f5f5f5',
    fontWeight: 'bold',
  },
  checkReadImage: {
    width: 25,
    height: 25,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 10,
    marginLeft: 15,
  },
  catStyle: {
    width: 144.69,
    height: 150,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  hoshiStyle: {
    color: 'red',
    marginTop: 25,
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  acceptStyle: {
    fontSize: RFPercentage(1.6),
    color: '#50D5A4',
  },
});
