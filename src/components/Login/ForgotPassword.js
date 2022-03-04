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

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      className: 'Swiper1',
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
  render() {
    return (
      <LinearGradient
        colors={['#51D2A8', '#55C1C3']}
        style={{
          flex: 1,
        }}>
        <StatusBar backgroundColor="#51D1AA" barStyle="light-content" />
        <Image style={styles.uStyle} source={require('../images/logo.png')} />
        <View style={styles.bStyle}>
          <View style={{marginTop: 25}}>
            <Text style={styles.boStyle}>Şifremi Unuttum</Text>
          </View>
          <View
            style={{
              width: '90%',
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: '5%',
            }}>
            <Hoshi
              label={'Email adresinizi giriniz'}
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
          <TouchableOpacity   onPress={() => this.props.navigation.navigate('Register')} style={{marginTop: '8%'}}>
            <Text style={styles.container}>
              {' '}
              <Text style={[styles.container, {color: '#111'}]}>
                Hesabın yok mu ?
              </Text>{' '}
              Kayıt Ol
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nexButton}>
            <View style={{width: '60%', marginLeft: 'auto'}}>
              <Text style={styles.obStyle}>Gönder</Text>
            </View>
            <View style={styles.slide1}>
              <Image
                style={styles.content}
                source={require('../images/right-arrow.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
          style={styles.fStyle}>
          <Text style={styles.lStyle}>
            Bir sorunla mı karşılaştın ? Yardım al
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    color: '#50D5A4',
    fontSize: RFPercentage(1.7),
    textAlign: 'center',
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
    height: 300,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '15%',
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
    marginBottom: 11,
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
    marginTop: 'auto',
    marginBottom: 18,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  lStyle: {
    color: '#FFF',
    fontSize: RFPercentage(1.7),
  },
});
