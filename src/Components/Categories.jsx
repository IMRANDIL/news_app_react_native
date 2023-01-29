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
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <View key={index}>
          <Text
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 10,
              margin: 10,
              fontSize: 19,
            }}>
            {category}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
