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
import Swiper from 'react-native-swiper';

export default class Info2 extends Component {
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
      <Swiper  showsButtons={false} autoplay={false} loop={false}>
        <View style={styles.slide1}>
          <StatusBar backgroundColor="#F6F6F6" barStyle="dark-content" />
          <View style={{marginTop: '25%'}}>
            <Image
              style={styles.boStyle}
              source={require('../images/logo.png')}
            />
          </View>
          <View style={{marginTop: '5%'}}>
            <Image
              style={{marginRight: 'auto', marginLeft: 'auto'}}
              source={require('../images/Info3.png')}
            />
          </View>
          <View style={{marginTop: 25, flexDirection: 'column'}}>
            <Text style={styles.uStyle}>Haydi Başlayalım</Text>
            <Text style={styles.obStyle}>
              ⛺ Beklemeyelim ! Minumum tüketim Maksimum Hayat ! ⛺
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={{marginLeft: 'auto', marginRight: 35, marginTop: 25}}>
            <Text style={styles.nexButton}>İlerle</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
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
  slide1: {
    flex: 1,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
  },
  bStyle: {
    width: 50,
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
  },
  boStyle: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 312.95,
    height: 85,
  },
  obStyle: {
    color: '#111111',
    fontSize: RFPercentage(1.7),
    textAlign: 'center',
    marginTop: 8,
  },
  nexButton: {
    color: '#24D4A4',
    fontSize: RFPercentage(2.7),
    textAlign: 'center',
  },
  uStyle: {
    color: '#111111',
    fontSize: RFPercentage(2.7),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
