  import {
    Image,
    KeyboardAvoidingView,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import { AsyncStorage } from 'react-native';
  import { useNavigation } from "@react-navigation/native";

  const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const [failed, setFailed] = useState(null);
    const handleLogin = () => {
      // Replace with your hardcoded dummy email and password
      const dummyEmail = "irshad@gmail.com";
      const dummyPassword = "irshad123";

      // Simulating an API call with setTimeout
      setTimeout(() => {
        if (email === dummyEmail && password === dummyPassword) {
          // Successful login
          const saveDataToStorage = async (key, value) => {
              try {
                await AsyncStorage.setItem(key, value);
                console.log('Data saved successfully!');
              } catch (error) {
                console.log('Error saving data:', error);
              }
            };
          // toast.success('login success')
          navigation.navigate("home");
        } else {
          setFailed("border-b-red-500 bg-red-100 bg-opacity-30 rounded-lg");

          // toast.warning('Invalid email or password');
        }
      }, 1500);
    };
    return (
      <View className="flex-1 bg-white p-10">
        <KeyboardAvoidingView>
          <View className="items-center">
            <Image
              source={require("../assets/tapclone.png")}
              className="w-20 h-20 items-center"
            />
            <Text className="font-bold text-xl text-center mb-1 text-purple-600">
              Sign In
            </Text>
            <Text>Sign In to your Account</Text>
          </View>
          <View className="mt-16">
            <View>
              <Text className="font-bold text-gray-800 text-xl">Email</Text>
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor={"purple"}
                placeholder="Enter your Email"
                className={`border-b mb-3 py-3 w-80 ${failed}`}
              />
            </View>
            <View>
              <Text className="font-bold text-gray-800 text-xl">Password</Text>
              <TextInput
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                }}
                placeholderTextColor={"purple"}
                placeholder="Enter your Password"
                className={`border-b py-3 w-80 ${failed}`}
              />
            </View>
            <Pressable
              className="w-20 bg-purple-600 mx-auto mt-5 px-5 py-2 rounded-lg"
              onPress={handleLogin}
            >
              <Text className="text-white font-bold">Login</Text>
            </Pressable>
            <View className='flex-row mt-3'>
                <Text>Don't have an account?</Text>
                <Pressable className='ml-1' onPress={()=>navigation.navigate('register')}>
                  <Text className='font-bold underline text-purple-600'>Signup</Text>
                </Pressable>
              </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  };

  export default LoginScreen;

  const styles = StyleSheet.create({});
