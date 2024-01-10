import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeTiles from './components/HomeTiles/HomeTiles';

import { styles } from './styles';

const App = () => {

  return (
    <View style={{flex: 1,height:"100%",backgroundColor:"red"}}>
        <View style={styles.heroBlock}>
          <Text style={{ ...styles.headerText }}>Tracker</Text>
          <Text style={{}}>Welcome!</Text>
        </View>
        <HomeTiles />
    </View>
  );
};


export default App;
