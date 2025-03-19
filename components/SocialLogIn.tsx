import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { Href, Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Google from '@/assets/images/google-logo.svg'
import { Colors } from '@/constants/Colors'

type Props = {
    emailHref: Href;
};

const SocialLogInButton = (props: Props) => {
    const { emailHref } = props;
    return (
        <View>
            <View style={styles.socialLoginWrapper}>
                {/* Continue with Email button */}
                <Animated.View entering={FadeInDown.delay(300).duration(500).springify()}>
                    <Link href={emailHref} asChild>
                        <TouchableOpacity style={styles.button}>
                            <Ionicons
                                name="mail-outline" size={20} color={Colors.black}
                            />
                            <Text style={styles.btnText}>Continue with Email</Text>
                        </TouchableOpacity>
                    </Link>
                </Animated.View>
                {/* Continue with google button */}
                <Animated.View entering={FadeInDown.delay(700).duration(500).springify()}>
                    <TouchableOpacity style={styles.button}>
                        <Google
                            width={20} height={20}
                        />
                        <Text style={styles.btnText}>Continue with Google</Text>
                    </TouchableOpacity>
                </Animated.View>
                {/* Continue with apple button */}
                <Animated.View entering={FadeInDown.delay(1100).duration(500).springify()}>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons
                            name="logo-apple" size={20} color={Colors.black}
                        />
                        <Text style={styles.btnText}>Continue with Apple</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    )
}

export default SocialLogInButton

const styles = StyleSheet.create({
    socialLoginWrapper: {
        alignSelf: 'stretch'
    },
    button: {
        flexDirection: 'row',
        padding: 10,
        borderColor: Colors.gray,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginBottom: 15
    },
    btnText: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
    },
})