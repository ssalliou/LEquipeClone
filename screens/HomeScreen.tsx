import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { View as DefaultView } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <DefaultView style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <Text style={{
        color: "blue",
        fontSize: 24,
        marginTop: 200,
        marginStart: 20,
        fontWeight: 'bold',
      }}>screens/HomeScreen</Text>
      <Text style={{
        color: "blue",
        fontWeight: 'bold',
      }}>clone de l'app L'Equipe par Sylvain</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderTopWidth: 2,
    borderTopColor: "lightgrey"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
