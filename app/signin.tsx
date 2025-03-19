import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router, Stack } from 'expo-router'
import InputField from '@/components/InputField'
import { Colors } from '@/constants/Colors'
import SocialLogInButton from '@/components/SocialLogIn'
import { Ionicons } from '@expo/vector-icons'

type Props = {}

const SignInScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen
        options={{ 
          headerTitle: 'Sign Up',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name='close' size={24} color={Colors.black} />
            </TouchableOpacity>
          )
        }}
      />
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Create an Account</Text>

          <InputField
            placeholder="Enter email address"
            placeholderTextColor={Colors.gray}
            autoCapitalize='none'
            keyboardType='email-address'
          />

          <InputField
            placeholder="Password"
            placeholderTextColor={Colors.gray}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button} onPress={() => {
            router.dismissAll();
            router.push('/(tabs)');
          }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.loginTxt}>Login to Your account?{" "}</Text>
            <Link href={"/signup"} asChild>
              <TouchableOpacity>
                <Text style={styles.loginTxtSpan}>SignUp</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.divider} />

          <SocialLogInButton emailHref={'/signin'} />
        </View>
      </View>
    </>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.background
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1.2,
    marginBottom: 50,
    color: Colors.black
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600'
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
  loginTxt: {
    fontSize: 14,
    color: Colors.black,
  },
  loginTxtSpan: {
    color: Colors.primary,
    fontWeight: '600',
  },
  divider: {
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: '30%',
    marginBottom: 10,
  }
})