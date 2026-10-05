import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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
        name="about"
        options={{
          title: 'En savoir plus',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />

 <Tabs.Screen
        name="360"
        options={{
          title: 'B360',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="rotate-360" size={24} color="black" />
          ),
        }}
      />


       <Tabs.Screen
        name="voyage"
        options={{
          title: 'Voyage',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'airplane' : 'airplane-outline'} color={color} size={24}/>
            
        
          ),
        }}
      />

    </Tabs>
    
  );
}