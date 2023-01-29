import {View, Text, ScrollView} from 'react-native';
import React from 'react';

export default function Categories() {
  const categories = [
    'Entertainment',
    'Business',
    'Politics',
    'Health',
    'Technology',
    'Sports',
  ];

  return (
    <ScrollView horizontal={true}>
      {categories.map((category, index) => (
        <View key={index}>
          <Text style={{padding: 10, borderWidth: 1, borderColor: 'black'}}>
            {category}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
