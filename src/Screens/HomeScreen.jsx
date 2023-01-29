import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import config from '../../config/config';

export default function HomeScreen() {
  useEffect(() => {
    // console.log(config.API_KEY);
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
