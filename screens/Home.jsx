import {useState, useCallBack} from 'react';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import Todos from '../components/Todos';
import Details from './Details';

var index = 4;
const TODO = [
  {name: 'Eat', id: 1},
  {name: 'Morning Walk', id: 2},
  {name: 'Bath', id: 3}
];

function Home({navigation}) {
  const [Todo, setTodo] = useState(TODO);
  const [text, setText] = useState('');
  const handleTextSubmit = () => {
    if (!text) {
      Alert.alert('Please Enter text');
    } else {
      const newTodo = [{name: text, id: ++index}, ...Todo];
      setTodo(newTodo);
      setText('');
    }
  };

  const handleSavaText = (id, text, isEditing, setIsEditing) => {
    if (!text) {
      Alert.alert('Please Enter todo.');
    } else {
      const editSave = Todo.map(item => {
        if (item.id === id) {
          return (item.name = text);
        }
        return item;
      });
      setText(editSave);
      setIsEditing(!isEditing);
    }
  };

  const handleDeleteTodo = id => {
    const filtredTodo = Todo.filter(item => id !== item.id);
    setTodo(filtredTodo);
  };
  return (
    <View style={styles.homeContainer}>
      <Details
        handleTextSubmit={handleTextSubmit}
        text={text}
        setText={setText}
      />
      <Text style={styles.heading}>Your Todo List</Text>
      <FlatList
        data={Todo}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Todos
            item={item}
            handleDeleteTodo={handleDeleteTodo}
            handleSavaText={handleSavaText}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  heading: {
    marginVertical: 10,
    paddingBottom: 5,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ccff33',
    borderBottomColor: '#ccff33',
    borderWidth: 1
  }
});

export default Home;
