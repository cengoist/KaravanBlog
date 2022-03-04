import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import FavoriteButton from './FavoriteButton';

const Post = (props) => {
  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('PostScreen', {postId: post.id});
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={post.image} />

        <View style={{flex: 1, marginHorizontal: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.bedrooms}>
              {post.place} / {post.placeTitle}
            </Text>
            <FavoriteButton />
          </View>
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.price}>₺{post.newPrice} </Text>/ gece
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Post;
