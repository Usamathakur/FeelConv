import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './Components/ChatListItem/index';

const chat ={
  id: 1,
  user:{
    image:'https://img.icons8.com/color/512/user-male-skin-type-1-2.png',
    name: "Usama Thakur"
  },
  lastMessage: {
    text:"Hello every one one",
    createdAt: "07:30",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem chat={chat}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
