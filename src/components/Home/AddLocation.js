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
import CheckBoxes from '../ChildComponent/CheckBoxes';
import AddLocationName from '../ChildComponent/AddLocationName';
import AddPhoto from '../ChildComponent/AddPhoto';
import SeaInformation from '../ChildComponent/SeaInformation';
import CampDetail from '../ChildComponent/CampDetail';

export default class AddLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      phone: '',
      className: 'AddLocation',
      open: false,
      modalVisible: false,
      imageId: 0,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.imgView}>
            <Image style={styles.img} source={require('../images/back.png')} />
          </TouchableOpacity>
          <View style={styles.view}>
            <Text style={[styles.text, {color: '#111'}]}>
              Kamp Noktası Ekleyin
            </Text>
          </View>
          <TouchableOpacity style={[styles.imgView, {marginRight: '3%'}]} />
        </View>
        <View style={styles.content}>
          <ScrollView>
            <AddLocationName />
            <CheckBoxes />
            <AddPhoto />
            <SeaInformation />
            <CampDetail />
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
  header: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },
  text: {
    color: '#929292',
    fontSize: RFPercentage(2.2),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  view: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
  },
  img: {
    marginTop: '5%',
    width: 30,
    height: 30,
  },
  imgView: {
    marginLeft: '3%',
    marginTop: '4%',
  },
  touch: {
    flexDirection: 'column',
    width: '50%',
  },
  tStyle: {
    flexDirection: 'column',
    width: '17%',
    marginLeft: 10,
  },
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
