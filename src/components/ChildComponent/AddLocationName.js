import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Hoshi} from 'react-native-textinput-effects';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class AddLocationName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: 'AddLocationName',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollView>
            <KeyboardAwareScrollView behavior="position" enabled>
              <View style={styles.viev}>
                <Image
                  style={styles.imggView}
                  source={require('../images/bg.png')}
                />
              </View>
              <View style={styles.viev}>
                <Text style={styles.texti}>
                  Beğendiğiniz kamp noktasını ekleyin. Topluluğa
                </Text>
                <Text style={[styles.texti, {marginTop: 5}]}>
                  katkıda bulunmak için eklenen nokta ile ilgili tüm
                </Text>
                <Text style={[styles.texti, {marginTop: 5}]}>
                  detayları belirtin.
                </Text>
              </View>
              <View
                style={{
                  width: '95%',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  marginTop: '3%',
                }}>
                <Hoshi
                  label={'Kamp Alanına İsim Verin'}
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
                  inputPadding={15}
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
                  width: '95%',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  marginTop: '3%',
                }}>
                <Hoshi
                  label={'Telefon Numarası Girin'}
                  borderColor={'#55C1C3'}
                  autoCapitalize={'words'}
                  returnKeyType="done"
                  borderHeight={3}
                  keyboardType="number-pad"
                  maxLength={10}
                  labelStyle={{color: '#B7B7B7'}}
                  inputStyle={{
                    width: '100%',
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
                  value={this.state.phone}
                  onChangeText={(phone) => this.setState({phone: phone})}
                />
              </View>
            </KeyboardAwareScrollView>
            <TouchableOpacity style={styles.nexButton}>
              <Text style={styles.textStyle}>Konum Belirleyin</Text>
            </TouchableOpacity>
          </ScrollView>
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
  view: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
  },
  imggView: {
    width: '100%',
    height: 251,
  },
  viev: {
    marginTop: 15,
  },
  texti: {
    textAlign: 'center',
    color: '#929292',
    fontSize: RFPercentage(1.9),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  nexButton: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    borderRadius: 15,
    height: 50,
    backgroundColor: '#24D4A4',
  },
  textStyle: {
    color: '#f5f5f5',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: RFPercentage(2.1),
  },
});
