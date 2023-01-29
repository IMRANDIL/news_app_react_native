import {View, Text, ActivityIndicator, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function WebViewComponent(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000); // 5 seconds
  }, []);

  if (loading) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: deviceWidth,
          height: deviceHeight,
        }}>
        <ActivityIndicator size={80} color="black" />
      </View>
    );
  }

  return <WebView source={{uri: props.route.params.url}} />;
}
