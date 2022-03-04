import React, {useState} from 'react';
import {
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

const FavoriteButton = (props) => {
  const checkFalseImage = require('../images/heart.png');
  const checkTrueImage = require('../images/heart_red.png');
  const [visible, setVisible] = useState(true);
  const post = props.post;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('FavScreen', {postId: post.id}, setVisible(false));
  };

  return (
    <TouchableOpacity
      onPress={() => {
        if (visible === true) {
          Alert.alert(
            'Uyarı !',
            'Favorilere eklemek istiyor musunuz ?',
            [
              {
                text: 'Tamam',
                onPress: {goToPostPage},
              },
              {
                text: 'İptal',
              },
            ],
            {cancelable: false},
          );
        } else {
          Alert.alert(
            'Uyarı !',
            'Favorilerden cikarmak istiyor musunuz ?',
            [
              {
                text: 'Tamam',
                onPress: () => setVisible(true),
              },
              {
                text: 'İptal',
              },
            ],
            {cancelable: false},
          );
        }
      }}
      style={styles.imgT}>
      <Image
        style={styles.img}
        source={visible == true ? checkFalseImage : checkTrueImage}
      />
    </TouchableOpacity>
  );
};

export default FavoriteButton;
