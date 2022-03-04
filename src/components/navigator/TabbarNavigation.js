import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//SearchStackScreen
import Home from '../Home/Home';
import {Image, StyleSheet} from 'react-native';
const Tab = createBottomTabNavigator();
const StackNavigator = createStackNavigator();
import {createStackNavigator} from '@react-navigation/stack';

//const Drawer = createDrawerNavigator();
import LocationDetail from '../Home/LocationDetail';
import Places from '../Home/Places';
import AddLocation from '../Home/AddLocation';
import PostScreen from '../PostScreen';
import FavScreen from '../FavComponent';
const HomeStackScreen = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        gesturesEnabled: false,
        swipeEnabled: false,
      }}
      gestureHandlerProps={{
        maxPointers: 1,
        swipeEnabled: false,
      }}
      navigationOptions={{
        cardStack: {
          gesturesEnabled: false,
          swipeEnabled: false,
        },
      }}
      options={{
        gestureEnabled: false,
      }}
      initialRouteName="Home">
      <StackNavigator.Screen
        navigationOptions={{
          drawerLockMode: 'locked-closed',
          cardStack: {
            gesturesEnabled: false,
            swipeEnabled: false,
            header: null,
          },
        }}
        options={{
          gestureEnabled: false,
          swipeEnabled: false,
        }}
        name="Home"
        component={Home}
      />
      <StackNavigator.Screen
        navigationOptions={{
          drawerLockMode: 'locked-closed',
          cardStack: {
            gesturesEnabled: false,
            swipeEnabled: false,
            header: null,
          },
        }}
        options={{
          gestureEnabled: false,
          swipeEnabled: false,
        }}
        name="LocationDetail"
        component={LocationDetail}
      />
      <StackNavigator.Screen
        navigationOptions={{
          drawerLockMode: 'locked-closed',
          cardStack: {
            gesturesEnabled: false,
            swipeEnabled: false,
            header: null,
          },
        }}
        options={{
          gestureEnabled: false,
          swipeEnabled: false,
        }}
        name="PostScreen"
        component={PostScreen}
      />
    </StackNavigator.Navigator>
  );
};
const HomeDetailStackScreen = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        gesturesEnabled: false,
        swipeEnabled: false,
      }}
      gestureHandlerProps={{
        maxPointers: 1,
        swipeEnabled: false,
      }}
      navigationOptions={{
        cardStack: {
          gesturesEnabled: false,
          swipeEnabled: false,
        },
      }}
      options={{
        gestureEnabled: false,
      }}
      initialRouteName="Places">
      <StackNavigator.Screen
        navigationOptions={{
          drawerLockMode: 'locked-closed',
          cardStack: {
            gesturesEnabled: false,
            swipeEnabled: false,
            header: null,
          },
        }}
        options={{
          gestureEnabled: false,
          swipeEnabled: false,
        }}
        name="Places"
        component={Places}
      />
      <StackNavigator.Screen
        navigationOptions={{
          drawerLockMode: 'locked-closed',
          cardStack: {
            gesturesEnabled: false,
            swipeEnabled: false,
            header: null,
          },
        }}
        options={{
          gestureEnabled: false,
          swipeEnabled: false,
        }}
        name="PostScreen"
        component={PostScreen}
      />
    </StackNavigator.Navigator>
  );
};
const AddLocationStackScreen = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        gesturesEnabled: false,
        swipeEnabled: false,
      }}
      gestureHandlerProps={{
        maxPointers: 1,
        swipeEnabled: false,
      }}
      navigationOptions={{
        cardStack: {
          gesturesEnabled: false,
          swipeEnabled: false,
        },
      }}
      options={{
        gestureEnabled: false,
      }}
      initialRouteName="AddLocation">
      <StackNavigator.Screen
        navigationOptions={{
          drawerLockMode: 'locked-closed',
          cardStack: {
            gesturesEnabled: false,
            swipeEnabled: false,
            header: null,
          },
        }}
        options={{
          gestureEnabled: false,
          swipeEnabled: false,
        }}
        name="AddLocation"
        component={AddLocation}
      />
    </StackNavigator.Navigator>
  );
};
const FavStackScreen = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        gesturesEnabled: false,
        swipeEnabled: false,
      }}
      gestureHandlerProps={{
        maxPointers: 1,
        swipeEnabled: false,
      }}
      navigationOptions={{
        cardStack: {
          gesturesEnabled: false,
          swipeEnabled: false,
        },
      }}
      options={{
        gestureEnabled: false,
      }}
      initialRouteName="FavScreen">
      <StackNavigator.Screen
        navigationOptions={{
          drawerLockMode: 'locked-closed',
          cardStack: {
            gesturesEnabled: false,
            swipeEnabled: false,
            header: null,
          },
        }}
        options={{
          gestureEnabled: false,
          swipeEnabled: false,
        }}
        name="FavScreen"
        component={FavScreen}
      />
    </StackNavigator.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Anasayfa') {
            iconName = focused
              ? require('../images/home1.png')
              : require('../images/home.png');
          } else if (route.name === 'Bölgeler') {
            iconName = focused
              ? require('../images/camp1.png')
              : require('../images/camp.png');
          } else if (route.name === 'Alan Ekle') {
            iconName = focused
              ? require('../images/add1.png')
              : require('../images/add.png');
          } else if (route.name === 'Sana Yakın') {
            iconName = focused
              ? require('../images/location1.png')
              : require('../images/location.png');
          } else if (route.name === 'Favoriler') {
            iconName = focused
              ? require('../images/healthcare.png')
              : require('../images/love.png');
          }
          // You can return any component that you like here!
          return <Image source={iconName} style={{width: 30, height: 30}} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#08432e',
        inactiveTintColor: 'gray',
        style: {
          elevation: 0,
          backgroundColor: '#ffffff',
          height: 55,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen name="Anasayfa" component={HomeStackScreen} />
      <Tab.Screen name="Bölgeler" component={HomeDetailStackScreen} />
      <Tab.Screen name="Alan Ekle" component={AddLocationStackScreen} />
      <Tab.Screen name="Sana Yakın" component={HomeStackScreen} />
      <Tab.Screen name="Favoriler" component={FavStackScreen} />
    </Tab.Navigator>
  );
};
export default SearchStackScreen;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
