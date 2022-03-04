import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

const Post = (props) => {
  const post = props.post;
  const navigation = useNavigation();

  return (
    <ScrollView>
      <StatusBar backgroundColor="#f55524" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.imgView}>
          <Image style={styles.img} source={require('../images/back.png')} />
        </TouchableOpacity>
        <View style={styles.view}>
          <Text style={styles.text}>
            {post.place} ({post.placeTitle})
          </Text>
        </View>
        <TouchableOpacity style={[styles.imgView, {marginRight: '3%'}]} />
      </View>
      <View style={styles.container}>
        <Image style={styles.image} source={post.image} />
        <Text style={styles.bedrooms}>
          {post.place} {post.placeTitle}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {post.type}. {post.title}
        </Text>
        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>₺{post.oldPrice}</Text>
          <Text style={styles.price}> ₺{post.newPrice} </Text>/ gece
        </Text>
        <Text style={styles.totalPrice}>₺{post.totalPrice} toplam</Text>

        <Text style={styles.longDescription}>{post.description}</Text>
      </View>
    </ScrollView>
  );
};

export default Post;
