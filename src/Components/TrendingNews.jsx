import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import config from '../../config/config';

export default function TrendingNews(props) {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${config.API_KEY}`,
    )
      .then(resp => resp.json())
      .then(data => {
        setNews(data.articles);
        // console.log(data.articles);
      })
      .catch(error => {
        setError(true);
        console.log(error);
      });
  }, []);

  return (
    <View>
      {news && news.length && !error ? (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {news.map((news, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                props.navigation.navigate('WebView', {
                  url: news.url,
                })
              }>
              <View style={{margin: 10}}>
                <Image
                  source={
                    news.urlToImage
                      ? {uri: `${news.urlToImage}`}
                      : require('../../assets/noimg.jpg')
                  }
                  style={{height: 200, width: 200, borderRadius: 10}}
                />
                <Text style={{width: 200, textAlign: 'justify'}}>
                  {news.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <ActivityIndicator size={80} color="black" />
      )}
    </View>
  );
}
