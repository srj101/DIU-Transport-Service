import React from 'react';
import {
  useColorScheme,
  SafeAreaView
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './Components/BottomTabs';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
          <BottomTabs/>
      </NavigationContainer>
    </SafeAreaView>
  );
};


export default App;
