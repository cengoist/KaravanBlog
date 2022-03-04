import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  BackHandler,
  StatusBar,
} from 'react-native';

import {RFPercentage} from 'react-native-responsive-fontsize';
import Swiper from 'react-native-swiper';
import Info2 from '../Info/Info2';


export default class Info extends Component {
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
      <Swiper
        dotColor="#C4ECDE"
        activeDotColor="#50D5A4"
        showsButtons={false}
        autoplay={false}
        loop={false}>
        <View style={styles.slide1}>
          <StatusBar backgroundColor="#F6F6F6" barStyle="dark-content" />
          <View style={{marginTop: '25%'}}>
            <Image
              style={{
                marginRight: 'auto',
                marginLeft: 'auto',
                width: 312.95,
                height: 85,
              }}
              source={require('../images/logo.png')}
            />
          </View>
          <View style={{marginTop: '5%'}}>
            <Image
              style={{marginRight: 'auto', marginLeft: 'auto'}}
              source={require('../images/Info.png')}
            />
          </View>
          <View style={{marginTop: 25, flexDirection: 'column'}}>
            <Text style={styles.obStyle}>KAYIT OL</Text>
            <Text style={styles.boStyle}>
              ⛺ Kamp yerleri ve alanları görmek için kayıt olun ⛺
            </Text>
          </View>
        </View>
        <View style={styles.slide1}>
          <StatusBar backgroundColor="#F6F6F6" barStyle="dark-content" />
          <View style={{marginTop: '25%'}}>
            <Image
              style={{
                marginRight: 'auto',
                marginLeft: 'auto',
                width: 312.95,
                height: 85,
              }}
              source={require('../images/logo.png')}
            />
          </View>
          <View style={{marginTop: '5%'}}>
            <Image
              style={{marginRight: 'auto', marginLeft: 'auto'}}
              source={require('../images/Info2.png')}
            />
          </View>
          <View style={{marginTop: 25, flexDirection: 'column'}}>
            <Text style={styles.uStyle}>Kamp Yerlerini Bulun</Text>
            <Text style={styles.nexButton}>
              ⛺ Harita üzerinde Kamp yerlerini seç ⛺
            </Text>
          </View>
        </View>
        <View style={styles.slide1}>
          <StatusBar backgroundColor="#F6F6F6" barStyle="dark-content" />
          <View style={{marginTop: '25%'}}>
            <Image
              style={styles.botStyle}
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
            <Text style={styles.uuStyle}>Kamp Yeri İşaretle</Text>
            <Text style={styles.nexButton}>
              ⛺ Basit bir şekilde Kamp alanları işaretle ⛺
            </Text>
          </View>
        </View>
        <View style={styles.slide1}>
          <StatusBar backgroundColor="#F6F6F6" barStyle="dark-content" />
          <View style={{marginTop: '25%'}}>
            <Image
              style={styles.botStyle}
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
            <Text style={styles.uuStyle}>Yorumlar Resimler</Text>
            <Text style={styles.nexButton}>
              ⛺ Yorum Ekle, resim ekle ve sana uygun yeri bul ⛺
            </Text>
          </View>
        </View>
        <Info2 navigation={this.props.navigation} />
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
    color: '#111111',
    fontSize: RFPercentage(1.9),
    textAlign: 'center',
    marginTop: 8,
  },
  obStyle: {
    color: '#111111',
    fontSize: RFPercentage(2.7),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nexButton: {
    color: '#111111',
    fontSize: RFPercentage(1.7),
    textAlign: 'center',
    marginTop: 8,
  },
  uStyle: {
    color: '#111111',
    fontSize: RFPercentage(2.7),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botStyle: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 312.95,
    height: 85,
  },
  obuStyle: {
    color: '#111111',
    fontSize: RFPercentage(1.7),
    textAlign: 'center',
    marginTop: 8,
  },
  nexuButton: {
    color: '#24D4A4',
    fontSize: RFPercentage(2.7),
    textAlign: 'center',
  },
  uuStyle: {
    color: '#111111',
    fontSize: RFPercentage(2.7),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
