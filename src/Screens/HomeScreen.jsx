import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import config from '../../config/config';
import Categories from '../Components/Categories';
import TrendingNews from '../Components/TrendingNews';

export default function HomeScreen(props) {
  useEffect(() => {
    // console.log(config.API_KEY);
  }, []);

  return (
    <View>
      <Categories navigation={props.navigation} />
      <TrendingNews />
    </View>
  );
}
