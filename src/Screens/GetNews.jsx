import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import config from '../../config/config';

export default function GetNews(props) {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.category,
    });

    fetch(
      `https://newsapi.org/v2/top-headlines?category=${props.route.params.category}&country=in&apiKey=${config.API_KEY}`,
    )
      .then(resp => resp.json())
      .then(data => {
        setNews(data.articles);
        console.log(data);
      })
      .catch(error => {
        setError(true);
        console.log(error);
      });
  }, [props.route.params.category]);

  return (
    <View>
      {news && news.length && !error ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {news.map((news, index) => (
            <View
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingVertical: 10,
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 4,
                margin: 10,
              }}>
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
          ))}
        </ScrollView>
      ) : (
        <ActivityIndicator size={80} color="black" />
      )}
    </View>
  );
}
