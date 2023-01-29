import {View, Text} from 'react-native';
import React from 'react';

export default function GetNews(props) {
  return (
    <View>
      <Text>{props.route.params.category}</Text>
    </View>
  );
}
