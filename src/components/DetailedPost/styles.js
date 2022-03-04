import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    aspectRatio: 3 / 2,
    borderRadius: 10,
    height: 248.88,
    width: 140,
    resizeMode: 'cover',
  },
  backImage: {
    height: 30,
    width: 30,
    marginBottom: 5,
    marginTop: 10,
  },

  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
  longDescription: {
    marginVertical: 20,
    fontSize: 16,
    lineHeight: 24,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10
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
    width: 25,
    height: 25,
  },
  imgView: {
    marginLeft: '3%',
    marginTop: '4%',
  },
});

export default styles;
