import React from 'react';
import { Button, View, Image, SafeAreaView, Text, StyleSheet, Platform, StatusBar, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { HomeParamList } from '../types';

// icons list = https://icons.expo.fyi/
import { Feather } from '@expo/vector-icons';
const logo = require('../assets/images/logo.png');

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();


function CustomHeader(props: { onPress: any; title?: "Save" | undefined; }) {
    return (
        <SafeAreaView style={styles.androidSafeAreaView}>
            <View
                style={{
                    margin: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottomColor: 'lightgrey',
                }}>
                <View style={{ justifyContent: 'flex-start', borderWidth: 1, borderRadius: 25, borderColor: 'lightgrey', padding: 5, marginStart: 5 }}>
                    <Feather name="menu" size={20} color="lightgrey" />
                </View>
                <Image resizeMode="contain" style={{ width: 150, height: 50, alignItems: 'center', justifyContent: 'center' }} source={logo} />
                <Pressable style={styles.button} onPress={() => alert('Direction vers l\'abonnement')}>
                    <Text style={styles.text}>s'abonner</Text>
                </Pressable>
            </View>
            <View>
                <HomeScreen />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    androidSafeAreaView: {
        flex: 1,
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'white',
    },
    title: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 10,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#FEF064',
    },
    text: {
        fontSize: 16,
        lineHeight: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
});

export default CustomHeader