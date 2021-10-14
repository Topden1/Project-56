import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}> 
    
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}


class DJButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: this.props.uri, 
        },
      {
        shouldPlay: true,
        }
     );
  }

  render() {
  return (
    <TouchableOpacity
   style={[styles.soundButton,
   {backgroundColor:this.props.bgcolor}]}
     onPress={this.playSound}>
    <Text style={styles.soundButtonText}>
    {this.props.text}
    </Text>
    </TouchableOpacity>
  );
 }

 
}

class AppHeader extends React.Component {
  <AppHeader />
  <View style = {{marginTop:0}}>
  <DJButton
    uri ="http://d1490kh19dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y168rd_NWM.mp3"
    text="Press Me"
    bgcolor="purple"
    />
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
