import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import config from '../../config/config';

export default function TrendingNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${config.API_KEY}`,
    )
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <Text>TrendingNews</Text>
    </View>
  );
}
