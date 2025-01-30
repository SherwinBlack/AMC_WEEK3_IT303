import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangename] = React.useState('');
  const [age, onChangeage] = React.useState('');
  const [address, onChangeaddress] = React.useState('');
  const [school, onChangeschool] = React.useState('');
  const [course, onChangecourse] = React.useState('');
  const [email, onChangeemail] = React.useState('');
  const [contact, onChangcontact] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/010/056/184/large_2x/people-icon-sign-symbol-design-free-png.png' }} style={styles.image} />
          <TextInput
            style={styles.input}
            onChangeText={onChangename}
            value={name}
            placeholder="Name:"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://as2.ftcdn.net/v2/jpg/00/89/06/29/1000_F_89062950_j0D7XXprsIKbQ7ao4FLoQwPirLZnLdNv.jpg' }} style={styles.image} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeage}
            value={age}
            placeholder="Age:"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://icon-library.com/images/home-address-icon/home-address-icon-1.jpg' }} style={styles.image} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeaddress}
            value={address}
            placeholder="Address:"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://www.freeiconspng.com/uploads/high-school-icon-png-8.png' }} style={styles.image} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeschool}
            value={school}
            placeholder="School:"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.Uhjkr0e7N2hXO7ywj_V96AHaHa?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <TextInput
            style={styles.input}
            onChangeText={onChangecourse}
            value={course}
            placeholder="Course:"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/010/160/528/original/email-and-mail-icon-sign-symbol-design-free-png.png' }} style={styles.image} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeemail}
            value={email}
            placeholder="Email:"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://tse1.explicit.bing.net/th/id/OIP.LLaRzVwFMo8V85Jj9wIgzgHaHa?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <TextInput
            style={styles.input}
            onChangeText={onChangcontact}
            value={contact}
            placeholder="Contact # :"
            keyboardType="numeric"
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default TextInputExample;