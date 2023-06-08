import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

var index = 4;

function Details({handleTextSubmit, text, setText}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>Add Your todo</Text>

      <TextInput value={text} onChangeText={setText} style={styles.input} />

      <TouchableOpacity onPress={handleTextSubmit}>
        <Text style={styles.inputButton}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputButton: {
    textAlign: 'center',
    marginTop: 5,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    fontWeight: 'bold'
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    margin: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccff33',
    paddingVertical: 10,
    fontSize: 16,
    color: '#ccff33'
  },
  inputText: {
    color: '#ccff33',
    fontSize: 16
  }
});

export default Details;
