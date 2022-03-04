import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

import {
  Text,
  Container,
  List,
  ListItem,
  Content,
  Left,
  Body,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
const routes = [
  ['Ana Sayfa', 'md-home', 'Home'],
  ['Günün Haberleri', 'md-clock', 'NewsCategory'],
  ['Kategoriler', 'md-apps', 'CategoryList'],
  ['Bugün Çok Okunanlar', 'md-trending-up'],
  ['Haber Ara', 'md-search', 'Search'],
  ['Yazarlar', 'md-people', 'Authors'],
  ['Foto Galeri', 'md-photos', 'GallerySlider'],
  ['Video Galeri', 'md-play', 'VideoSlider'],
  ['Ayarlar', 'md-settings', 'Settings'],
  ['Geri Bildirim Gönder', 'md-warning', 'Feedback'],
  ['Uygulamayı Paylaş', 'md-share'],
];

export default function SideBar(props) {
  const theme = useSelector(state => state.themeReducer.theme);
  // const dispatch = useDispatch();
  const PRIMARY_BACKGROUND_COLOR = theme.PRIMARY_BACKGROUND_COLOR;
  const PRIMARY_TEXT_COLOR = theme.PRIMARY_TEXT_COLOR;
  const styles = StyleSheet.create({
    header: {
      backgroundColor:
        theme.mode === 'light' ? 'white' : PRIMARY_BACKGROUND_COLOR,
    },
    headerText: {
      color: PRIMARY_TEXT_COLOR,
      fontWeight: '500',
    },
  });
  const logoUri =
    'http://jupiter.onemsoft.com/images/genel/e-dergi-yazilimi-logo-1544350986.png';
  return (
    <Container style={styles.header}>
      <Content>
        <Content
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Image style={{width: 120, height: 45}} source={{uri: logoUri}} />
        </Content>
        <List
          dataArray={routes}
          contentContainerStyle={{marginTop: 0}}
          keyExtractor={(item, index) => index.toString()}
          renderRow={data => {
            return (
              <ListItem
                icon
                button
                onPress={() => props.navigation.navigate(data[2])}
                style={{marginRight: 20}}>
                <Left style={{width: '17%'}}>
                  <Icon active size={20} color={'#606060'} name={data[1]} />
                </Left>
                <Body>
                  <Text style={styles.headerText}>{data[0]}</Text>
                </Body>
              </ListItem>
            );
          }}
        />
      </Content>
    </Container>
  );
}
