import {View, Text, ActivityIndicator, Dimensions} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {WebView} from 'react-native-webview';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function WebViewComponent(props) {
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    setLoading(false);
  }, []);
  return loading ? (
    <ActivityIndicator
      size={80}
      color="black"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth,
        height: deviceHeight,
      }}
    />
  ) : (
    <WebView source={{uri: `${props.route.params.url}`}} />
  );
}
