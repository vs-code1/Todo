import {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';

function Todos({item, handleDeleteTodo, handleSavaText}) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('');

  const handleCencel = () => setIsEditing(!isEditing);
  const handleEditText = item => {
    setIsEditing(!isEditing);
    setText(item.name);
  };

  const editingTemplate = (
    <View style={styles.listBox}>
      <TextInput value={text} onChangeText={setText} style={styles.input} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleCencel(item)}>
          <Text style={styles.deleteText}>Cencel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() =>
            handleSavaText(item.id, text, isEditing, setIsEditing)
          }>
          <Text style={styles.editText}>save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const viewTemplate = (
    <View style={styles.listBox}>
      <Text style={styles.todoText}>{item.name}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEditText(item)}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteTodo(item.id)}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return isEditing ? editingTemplate : viewTemplate;
}

const styles = StyleSheet.create({
  listBox: {
    padding: 10,
    width: '95%',
    marginTop: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccff33',
    borderRadius: 5
  },
  todoText: {
    textAlign: 'center',
    color: '#ecf39e',
    padding: 10,
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    marginTop: 10
  },
  editButton: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#9ef01a',
    borderRadius: 20
  },
  editText: {
    color: '#ccff33'
  },
  deleteButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#d00000',
    borderRadius: 20
  },
  deleteText: {
    color: '#fff3b0'
  },
  input: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccff33',
    paddingVertical: 10,
    fontSize: 16,
    color: '#ccff33'
  }
});

export default Todos;
