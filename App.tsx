import React, { Component } from 'react';
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';


function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'https://www.google.com/' }}
        />
    </SafeAreaView>
  );
}

export default App;
