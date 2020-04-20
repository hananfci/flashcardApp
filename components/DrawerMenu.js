import React,{ Component } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import NewDeckStack from './NewDeckStack'
import DeckStack from './DeckStack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { purple, white,gray } from '../utils/colors'


const Drawer = createDrawerNavigator();
class DrawerMenu extends Component  {

  render() {
   
    return (
  
        
        <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen
                    name="HomeScreen"
                    component={DeckStack}
                    options={{
                        title: 'Home'}}
                    />
                    <Drawer.Screen
                    name="NewDeckStack"
                    component={NewDeckStack}
                    options={{
                        title: 'Add New Deck'}}
                    />
                </Drawer.Navigator>

 </NavigationContainer>
      


  
    );
  }
}
export default DrawerMenu 
