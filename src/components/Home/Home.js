import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import locations from '../CustomMarker/locations';
import FavoriteButton from '../PostCarauselItem/FavoriteButton';
export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F6F6F6" barStyle="dark-content" />
        <View style={styles.header}>
          <TouchableOpacity style={styles.imgView}>
            <Image style={styles.img} source={require('../images/menu.png')} />
          </TouchableOpacity>
          <View style={styles.view}>
            <Text style={styles.text}>LOKASYON SEÇ</Text>
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
            {locations.map((location) => (
              <TouchableOpacity
                key={location.id}
                onPress={() =>
                  this.props.navigation.navigate('PostScreen', {
                    postId: location.id,
                  })
                }
                style={styles.locationView}>
                <ImageBackground
                  imageStyle={{borderRadius: 11}}
                  style={styles.assos}
                  source={location.image}>
                  <View style={styles.favBtn}>
                    <FavoriteButton />
                  </View>
                  <Text style={styles.lctView}>{location.locationName}</Text>
                  <Text style={styles.kmpText}>
                    {location.campCount} Kamp Noktası
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
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
    marginTop: '7%',
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
  favBtn: {
    marginRight: 8,
    padding: 3,
    backgroundColor: '#f5f5f5',
    width: 31,
    height: 31,
    marginTop: 8,
    borderRadius: 50,
    marginLeft: 'auto',
  },
  lctView: {
    marginTop: 'auto',
    marginLeft: '2%',
    color: '#eee',
    fontSize: RFPercentage(2.9),
    fontWeight: 'bold',
  },
  kmpText: {
    marginLeft: '2%',
    marginBottom: '2%',
    color: '#eee',
    fontSize: RFPercentage(2.7),
  },
});
