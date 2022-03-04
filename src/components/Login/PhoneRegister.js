import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  KeyboardAvoidingView,
  SafeAreaView,
  Animated,
  Platform,
} from 'react-native';

import {RFPercentage} from 'react-native-responsive-fontsize';
const {Value, Text: AnimatedText} = Animated;
import LinearGradient from 'react-native-linear-gradient';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const CELL_COUNT = 4;
const CELL_SIZE = 70;
const CELL_BORDER_RADIUS = 12;
const DEFAULT_CELL_BG_COLOR = '#fff';
const NOT_EMPTY_CELL_BG_COLOR = '#50D5A4';
const ACTIVE_CELL_BG_COLOR = '#f7fafe';
const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'PhoneCodes',
      timerStart: true,
      phone: '',
      code: '',
      userStatus: '',
      expired: false,
      visible: false,
      value: '',
      ref: null,
    };
  }
  renderCell = ({index, symbol, isFocused}) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };
    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);

    return (
      <AnimatedText key={index} style={[styles.cell, animatedCellStyle]}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };
  render() {
    return (
      <LinearGradient
        colors={['#51D2A8', '#55C1C3']}
        style={{
          flex: 1,
        }}>
        <StatusBar backgroundColor="#51D1AA" barStyle="light-content" />
        <KeyboardAwareScrollView
          onKeyboardWillShow={(frames: Object) => {
            console.log('Keyboard event', frames);
          }}>
          <Image style={styles.uStyle} source={require('../images/logo.png')} />
          <SafeAreaView style={styles.root}>
            <Text style={styles.title}>DOĞRULAMA KODU</Text>
            <Image
              style={styles.icon}
              source={require('../images/verified.png')}
            />
            <Text style={styles.subTitle}>
              +90{this.state.phone}5438374731 numaralı telefonuna gelen SMS
              {'\n'}
              kodunu aşağıdaki alana girin.
            </Text>
            <CodeField
              ref={this.state.ref}
              {...this.props}
              value={this.state.code}
              onChangeText={(value) => {
                this.setState({code: value});
              }}
              cellCount={4}
              autoFocusOnLoad
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={this.renderCell}
            />
            <TouchableOpacity
              // onPress={() => this.props.navigation.navigate('ForgotPassword')}
              style={{
                marginLeft: 'auto',
                marginRight: '5%',
                marginTop: 15,
                flexDirection: 'row',
              }}>
              <Text
                style={[styles.container, {marginRight: 5, color: '#111111'}]}>
                Kod gelmedi mi ?
              </Text>
              <Text style={styles.container}>Tekrar Gönder</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Tabar')} style={styles.nexButton}>
              <View style={{width: '60%', marginLeft: 'auto'}}>
                <Text style={styles.obStyle}>Doğrula</Text>
              </View>
              <View style={styles.slide1}>
                <Image
                  style={styles.content}
                  source={require('../images/right-arrow.png')}
                />
              </View>
            </TouchableOpacity>
          </SafeAreaView>
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
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: '#3759b8',
    backgroundColor: '#fff',
    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    // Android
    elevation: 3,
  },
  root: {
    height: 590,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
    padding: 5,
  },
  title: {
    paddingTop: 40,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },
  nexButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
    backgroundColor: '#50D5A4',
    width: '85%',
    height: 65,
    borderRadius: 100,
    flexDirection: 'row',
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
  obStyle: {
    color: '#FFFFFF',
    fontSize: RFPercentage(1.8),
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '27%',
  },
  icon: {
    width: 95,
    height: 95,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    paddingTop: 30,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
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
  uStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 312.95,
    height: 85,
    marginTop: '15%',
  },
});
