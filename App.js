

import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { View,  Text,StatusBar,SafeAreaView } from 'react-native';
import MainStyle from './styles/MainStyle';
import Navigator from './components/Navigator'
import DrawerMenu from './components/DrawerMenu'
import DeckList from './components/DeckList';
import Constants from 'expo-constants';
import { purple, white } from './utils/colors'
import {setLocalNotification} from './utils/helpers'
export default class App extends React.Component { 
 
  componentDidMount(){
   setLocalNotification();
  }
  render(){
    
  return (
    <Provider store={createStore(reducer)}>
      <View  style={{flex:1}} >  
      <View style={{ height: Constants.statusBarHeight }}>
              <StatusBar
              translucent
              backgroundColor={purple}
                barStyle="light-content" />
              </View>
      <Navigator/>
     {/*  <DrawerMenu/> */}
    </View >
    </Provider>
   
  );
}
}
