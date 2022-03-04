import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


//HomeStackScreen
//import DrawerMenu from './DrawerMenu';

//SearchStackScreen
import Info from '../Info/Info';
import Info2 from '../Info/Info2';
import Login from '../Login/Login';
import PhoneRegister from '../Login/PhoneRegister';
import Register from '../Login/Register';
import ForgotPassword from '../Login/ForgotPassword';
import TabbarNavigation from '../navigator/TabbarNavigation';

//const Drawer = createDrawerNavigator();
const StackNavigator = createStackNavigator();

/*const HomeStackScreen = () => {
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
        </StackNavigator.Navigator>
    );
};*/
const LoginStackScreen = () => {
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
      initialRouteName="Info">
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
        name="Info"
        component={Info}
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
        name="Info2"
        component={Info2}
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
        name="Login"
        component={Login}
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
        name="PhoneRegister"
        component={PhoneRegister}
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
        name="Register"
        component={Register}
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
        name="Tabar"
        component={TabbarNavigation}
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
        name="ForgotPassword"
        component={ForgotPassword}
      />
    </StackNavigator.Navigator>
  );
};
/*const SearchStackScreen = () => {
  return (
      <Tab.Navigator
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
          }}>
          <Tab.Screen name="Anasayfa" component={HomeStackScreen} />
          <Tab.Screen name="Bölgeler" component={HomeStackScreen} />
          <Tab.Screen name="Alan Ekle" component={HomeStackScreen} />
          <Tab.Screen name="Sana Yakın" component={HomeStackScreen} />
          <Tab.Screen name="Favoriler" component={HomeStackScreen} />
      </Tab.Navigator>
  );
};*/

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <LoginStackScreen />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
