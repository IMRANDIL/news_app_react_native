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
    <ScrollView horizontal>
      {categories.map((category, index) => (
        <View key={index}>
          <Text>{category}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
