import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform, ScrollView, FlatList } from 'react-native';
import Todo from './ToDo.js'

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newTodo: ""
  };

  render() {
    const { newTodo } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Todo-App</Text>
        <View style={styles.card}>
          <TextInput style={styles.input}
            placeholder={"New To do"}
            placeholderTextColor={"#999"}
            value={newTodo}
            returnKeyType={"done"}
            onChangeText={this._contolNewToDo} />
          <ScrollView contentContainerStyle={styles.toDos}>
          {/* ScrollView는 style을 직접 지정하지 못하고 contentContainerStyle로 prop시켜야 함 */}
            <Todo />
          </ScrollView>
        </View>
      </View>
    );
  }

  _contolNewToDo = text => this.setState({newTodo : text})
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    marginBottom: 30,
    color : "white",
    fontSize : 30,
    fontWeight : "200"
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor:"rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  },
  toDos: {
    alignItems: "center"
  }

})
