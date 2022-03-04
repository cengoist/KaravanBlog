import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import * as ImagePicker from 'react-native-image-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ifIphoneX} from 'react-native-iphone-x-helper';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      imageArray: [],
      qrcodeText: '',
      scanner: {},
      number: '',
      flashMode: false,
      faultLabel: '',
      scooterImei: '',
      scooterUuid: '',
      qrCodeVisible: false,
      faultValue: '',
      messages: '',
      open: false,
    };
  }

  /***
   * Selection photos
   */
  myfun = () => {
    ImagePicker.launchCamera(
      {
        quality: 0.5,
        maxWidth: 500,
        mediaType: 'photo',
        storageOptions: {
          privateDirectory: true,
        },
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelledssd image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          let source = {uri: response.uri};
          let path = response.uri;
          if (Platform.OS === 'ios') {
            path = '~' + path.substring(path.indexOf('/Documents'));
          }
          if (!response.fileName) {
            response.fileName = path.split('/').pop();
          }
          console.log('launchCamera', response);
          this.state.imageArray[this.state.number] = {
            fileName: response.fileName,
            newSource: response.uri,
            avatarSource: source,
            data: response.data,
            type: response.type,
          };
          this.setState({control: !this.state.control});
        }
      },
    );
  };
  /***
   * Selection photos
   */
  takeGalery = () => {
    ImagePicker.launchImageLibrary(
      {
        quality: 0.5,
        maxWidth: 500,
        mediaType: 'photo',
        storageOptions: {
          privateDirectory: true,
        },
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelledssd image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          let source = {uri: response.uri};
          let path = response.uri;
          if (Platform.OS === 'ios') {
            path = '~' + path.substring(path.indexOf('/Documents'));
          }
          if (!response.fileName) {
            response.fileName = path.split('/').pop();
          }
          console.log('launchCamera', response);
          this.state.imageArray[this.state.number] = {
            fileName: response.fileName,
            newSource: response.uri,
            avatarSource: source,
            data: response.data,
            type: response.type,
          };
          this.setState({control: !this.state.control});
        }
      },
    );
  };
  render() {
    return (
      <View>
        <View style={styles.nextiButton}>
          <Text style={styles.ttStyle}>Alanın resimlerini ekleyin</Text>
        </View>
        {this.state.open == true ? (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                this.myfun();
              }}
              style={styles.yugStyle}>
              <Image
                style={{width: 50, height: 50, marginLeft: 10}}
                source={require('../images/camera.png')}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.yugStyle}>
            <View
              style={{
                width: '17%',
              }}>
              {this.state.imageArray[0] != undefined ? (
                <TouchableOpacity
                  style={{marginLeft: 'auto'}}
                  onPress={() => {
                    this.setState({number: 0});
                    this.RBSheet.open();
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 45,
                      height: 45,
                    }}
                    source={this.state.imageArray[0].avatarSource}
                  />
                </TouchableOpacity>
              ) : (
                <View>
                  <TouchableOpacity
                    style={{
                      marginLeft: 'auto',
                    }}
                    onPress={() => {
                      this.setState({number: 0});
                      this.RBSheet.open();
                    }}>
                    <Image
                      style={{
                        width: 45,
                        height: 45,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                      source={require('../images/camera.png')}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View
              style={{
                width: '17%',
                marginLeft: 10,
              }}>
              {this.state.imageArray[1] != undefined ? (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({number: 1});
                    this.RBSheet.open();
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 45,
                      height: 45,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: 'auto',
                      marginBottom: 'auto',
                    }}
                    source={this.state.imageArray[1].avatarSource}
                  />
                </TouchableOpacity>
              ) : (
                <View>
                  <TouchableOpacity
                    style={{
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      borderRadius: 3,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      this.setState({number: 1});
                      this.RBSheet.open();
                    }}>
                    <Image
                      style={{
                        width: 45,
                        height: 45,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                      }}
                      source={require('../images/camera.png')}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View
              style={{
                width: '17%',
              }}>
              {this.state.imageArray[2] != undefined ? (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({number: 2});
                    this.RBSheet.open();
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 45,
                      height: 45,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: 'auto',
                      marginBottom: 'auto',
                    }}
                    source={this.state.imageArray[2].avatarSource}
                  />
                </TouchableOpacity>
              ) : (
                <View>
                  <TouchableOpacity
                    style={{
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      borderRadius: 3,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      this.setState({number: 2});
                      this.RBSheet.open();
                    }}>
                    <Image
                      style={{
                        width: 45,
                        height: 45,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                      }}
                      source={require('../images/camera.png')}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View
              style={{
                width: '17%',
              }}>
              {this.state.imageArray[3] != undefined ? (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({number: 3});
                    this.RBSheet.open();
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 45,
                      height: 45,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: 'auto',
                      marginBottom: 'auto',
                    }}
                    source={this.state.imageArray[3].avatarSource}
                  />
                </TouchableOpacity>
              ) : (
                <View>
                  <TouchableOpacity
                    style={{
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      borderRadius: 3,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      this.setState({number: 3});
                      this.RBSheet.open();
                    }}>
                    <Image
                      style={{
                        width: 45,
                        height: 45,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                      }}
                      source={require('../images/camera.png')}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View
              style={{
                width: '17%',
                marginLeft: 10,
              }}>
              {this.state.imageArray[4] != undefined ? (
                <TouchableOpacity
                  style={{marginRight: 'auto'}}
                  onPress={() => {
                    this.setState({number: 4});
                    this.RBSheet.open();
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 45,
                      height: 45,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: 'auto',
                      marginBottom: 'auto',
                    }}
                    source={this.state.imageArray[4].avatarSource}
                  />
                </TouchableOpacity>
              ) : (
                <View>
                  <TouchableOpacity
                    style={{
                      marginRight: 'auto',
                    }}
                    onPress={() => {
                      this.setState({number: 4});
                      this.RBSheet.open();
                    }}>
                    <Image
                      style={{
                        width: 45,
                        height: 45,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                      source={require('../images/camera.png')}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        )}
        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          height={400}
          closeOnDragDown={true}
          closeOnPressMask={true}
          openDuration={250}>
          <View style={styles.panel}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.panelTitle}>Fotoğraf Çekin</Text>
              <Text style={styles.panelSubtitle}>
                Kamp Alanı Fotoğrafı Ekleyin
              </Text>
            </View>
            <TouchableOpacity
              style={styles.panelButton}
              onPress={() => this.myfun()}>
              <Text style={styles.panelButtonTitle}>Fotoğraf Çek</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.panelButton}
              onPress={() => this.takeGalery()}>
              <Text style={styles.panelButtonTitle}>Galeriden Seç</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.panelButton}
              onPress={() => this.RBSheet.close()}>
              <Text style={styles.panelButtonTitle}>İptal</Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nextiButton: {
    backgroundColor: '#eee',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    height: 50,
  },
  ttStyle: {
    color: '#111111',
    marginLeft: 15,
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: RFPercentage(1.9),
  },
  nextButton: {
    marginTop: 'auto',
    marginBottom: '5%',
    borderRadius: 60,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 50,
    backgroundColor: '#e70407',
    justifyContent: 'center',
    minWidth: 300,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Poppins',
  },
  nStyle: {
    top: 0,
    left: 0,
    right: 0,
    flex: 0,
    width: '100%',
    flexDirection: 'row',
    ...ifIphoneX(
      {
        paddingTop: 40,
      },
      {
        paddingTop: 20,
      },
    ),
  },
  yStyle: {
    textAlign: 'center',
    fontSize: RFPercentage(2),
    color: '#2c2e3e',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  yfStyle: {
    textAlign: 'center',
    fontSize: RFPercentage(2),
    color: '#2c2e3e',
    fontFamily: 'Poppins',
  },
  yugStyle: {
    flexDirection: 'row',
    borderRadius: 5,
    paddingVertical: 15,
    marginTop: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  ytStyle: {
    width: '95%',
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 8,
    borderRadius: 11,
  },
  header: {
    top: 0,
    left: 0,
    right: 0,
    flex: 0,
    paddingBottom: 10,
    backgroundColor: '#e70407',
    flexDirection: 'row',
    ...ifIphoneX(
      {
        paddingTop: 50,
      },
      {
        paddingTop: 30,
      },
    ),
  },
  title: {
    marginTop: 'auto',
    textAlign: 'center',
    color: '#f5f5f5',
    fontFamily: 'Poppins',
    fontSize: RFPercentage(2),
  },
  lockInfoView: {
    marginBottom: 35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  flatIcon: {
    width: 25,
    height: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  loginButton: {
    backgroundColor: '#e70407',
    paddingVertical: 11,
    width: '60%',
    borderRadius: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
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
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: RFPercentage(3.5),
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#453DB3',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
