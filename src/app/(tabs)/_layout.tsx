import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native';

import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
   <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
      backgroundColor:  "#F2E8DA",
    },
    headerShadowVisible: false,
    headerTintColor: '#ffd33d',
    tabBarStyle: {
      backgroundColor:  "#F2E8DA",
    },
      headerRight: () => (
          <Image
            source={require('../image2/bissima1.png')}
            style={{ width: 50, height: 50, marginRight: 18 }}

          />
        ),
  }}
>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accuiel',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      

 <Tabs.Screen
        name="360"
        options={{
          title: 'Bissima Horizon 360',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="rotate-360" size={24} color="black" />
          ),
        }}
      />


       <Tabs.Screen
        name="voyage"
        options={{
          title: 'Bissima international',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'earth' : 'earth-outline'} color={color} size={24}/>
            
        
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: 'profil',
          tabBarIcon: ({ color, focused }) => (
            <Feather name="user" size={24} color="black" />
          ),
        }}
      />

    </Tabs>
    
  );
}