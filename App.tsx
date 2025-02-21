/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';


var num = Math.round(Math.random()*100)
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [name,setname] = React.useState('')
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


const styles = StyleSheet.create({
  input:{
    margin:66,
    width:300,
    height:48,
    borderWidth:2,
    borderColor:'skyblue',
  }
})
function setContent(){
  if(Number(name)>num){
    Alert.alert('大了')
  }else if(Number(name)<num){
    Alert.alert('小了')
  }else{
    Alert.alert('猜对了')
  }
        
}

React.useEffect(()=>{
  InitNum()
},[])
function InitNum(){
  num = Math.round(Math.random()*100)
}
  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView></ScrollView>
      <TextInput value={name} style={styles.input} onChangeText={setname} ></TextInput>
      <Button title='猜' onPress={setContent}></Button>
    </View>
  );
}



export default App;
