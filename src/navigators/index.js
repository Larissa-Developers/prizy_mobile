import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/login/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import AuthLoadingScreen from '../screens/splash/AuthLoadingScreen';
import AddEventScreen from '../screens/event/AddEventScreen';
import WinnerScreen from '../screens/winner/WinnerScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import AboutScreen from '../screens/about/AboutScreen';

export const AppStack = createStackNavigator({
  Home: HomeScreen,
  AddEvent: AddEventScreen,
  Winner: WinnerScreen,
  Profile: ProfileScreen,
  About: AboutScreen,
});

export const AuthStack = createStackNavigator({ Login: LoginScreen });

export const AppLaunchStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
