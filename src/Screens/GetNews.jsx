import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

export default function GetNews(props) {
  useEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.category,
    });
  }, []);

  return (
    <View>
      <Text>{props.route.params.category}</Text>
    </View>
  );
}
