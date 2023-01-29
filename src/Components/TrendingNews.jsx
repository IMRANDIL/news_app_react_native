import {View, Text, ScrollView, ActivityIndicator, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import config from '../../config/config';

export default function TrendingNews() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${config.API_KEY}`,
    )
      .then(resp => resp.json())
      .then(data => {
        setNews(data.articles);
        console.log(data.articles);
      })
      .catch(error => {
        setError(true);
        console.log(error);
      });
  }, []);

  return (
    <View>
      {news && news.length ? (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {news.map((news, index) => (
            <View key={index}>
              <Image
                source={{uri: `${news.urlToImage}`}}
                style={{height: 200, width: 200, borderRadius: 10}}
              />
            </View>
          ))}
        </ScrollView>
      ) : (
        <ActivityIndicator size={80} color="black" />
      )}
    </View>
  );
}
