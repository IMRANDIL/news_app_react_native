import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import config from '../../config/config';
import Categories from '../Components/Categories';
import TrendingNews from '../Components/TrendingNews';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function HomeScreen(props) {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.API_KEY}`,
    )
      .then(resp => resp.json())
      .then(data => {
        setNews(data.articles);
      })
      .catch(error => {
        setError(true);
        console.log(error);
      });
  }, []);
  return (
    <View>
      <Categories navigation={props.navigation} />
      <TrendingNews navigation={props.navigation} />
      <View style={{alignItems: 'center', marginTop: 10}}>
        {news && news.length && !error ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {news.map((news, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  props.navigation.navigate('WebView', {
                    url: news.url,
                  })
                }>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    //   elevation: 2,
                    width: deviceWidth - 30,
                    marginBottom: 10,
                  }}>
                  <Image
                    source={
                      news.urlToImage
                        ? {uri: `${news.urlToImage}`}
                        : require('../../assets/noimg.jpg')
                    }
                    style={{height: 100, width: 100, borderRadius: 10}}
                  />
                  <Text
                    style={{
                      width: deviceWidth - 130,
                      textAlign: 'justify',
                      padding: 15,
                    }}>
                    {news.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <ActivityIndicator
            size={50}
            color="black"
            style={{
              width: deviceWidth,
              height: deviceHeight,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        )}
      </View>
    </View>
  );
}
