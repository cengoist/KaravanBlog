import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.imgView}>
            <Image style={styles.img} source={require('../images/menu.png')} />
          </TouchableOpacity>
          <View style={styles.view}>
            <Text style={styles.text}>Çanakkale</Text>
          </View>
          <TouchableOpacity style={[styles.imgView, {marginRight: '3%'}]}>
            <Image
              style={styles.img}
              source={require('../images/search.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
            <ScrollView>
                <View style={styles.locationView}>

                </View>
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
  },
  assos: {
    resizeMode: 'cover',
    height: 'auto',
    width: 'auto',
    flex: 1,
  },
  text: {
    color: '#111111',
    fontSize: RFPercentage(2.2),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  view: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
  },
  locationView: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 140,
    borderRadius: 11,
    backgroundColor: '#eee',
    marginTop: '8%',
    flexDirection: 'column',
  },
  img: {
    marginTop: '5%',
    width: 35,
    height: 35,
  },
  imgView: {
    marginLeft: '3%',
    marginTop: '4%',
  },
});
