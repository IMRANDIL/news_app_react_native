import {View, Text} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

export default function WebViewComponent(props) {
  return <WebView source={{uri: `${props.route.params.url}`}} />;
}
