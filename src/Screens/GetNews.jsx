import {View, Text} from 'react-native';
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
      <Text>{props.route.params.category}</Text>
    </View>
  );
}
