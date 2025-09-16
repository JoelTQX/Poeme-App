import { useRouter } from 'expo-router';
import { Eye, EyeOff } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SignUpPage1() {
  const router = useRouter();
  const [email, setEmail] = useState('12345@gmail.com');
  const [password, setPassword] = useState('*******');
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    const handleLogIn = () => {
    router.push('../Screens/signUpPage2');
  };

  const handleSignUp = () => {
    console.log('Navigate to Sign Up');
  };


  const handleForgotPassword = () => {
    console.log('Forgot Password pressed');
  };

  const handleEmailFocus = () => {
    if (!emailFocused) {
      setEmail('');
      setEmailFocused(true);
    }
  };

  const handlePasswordFocus = () => {
    if (!passwordFocused) {
      setPassword('');
      setPasswordFocused(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Sign In Form */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign in to your{'\n'}Account</Text>
          <Text style={styles.subtitle}>
            Enter your email and password to log in
          </Text>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
              onFocus={handleEmailFocus}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                value={password}
                onChangeText={setPassword}
                onFocus={handlePasswordFocus}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOff size={20} color="#9CA3AF" />
                ) : (
                  <Eye size={20} color="#9CA3AF" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot Password ?</Text>
          </TouchableOpacity>

          {/* Log In Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogIn}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 40, // 40px padding on both sides
    paddingTop: 40,
  },
  logoContainer: {
    marginBottom: 32,

  },
  logo: {
    marginTop: 35,
    width: 275,
    height: 159,
    marginBottom: 10,
  },
  formContainer: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#00205B',
    marginBottom: 12,
    fontFamily: 'Times New Roman',
    letterSpacing:-0.64
  },
  subtitle: {
    fontSize: 14,
    color: '#6C7278',
    marginBottom: 20,
    fontFamily: 'Inter',
    lineHeight: 18.2,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 16,
    color: '#6C7278',
    marginBottom: 8,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    fontFamily: 'Poppins',
    backgroundColor: '#F9FAFB',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    fontFamily: 'Poppins',
    color: 'rgba(0, 0, 0, 0.15)',
  },
  eyeButton: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  forgotPassword: {
    fontSize: 12,
    color: '#4D81E7',
    textAlign: 'right',
    fontWeight: '600',
    lineHeight: 19.6,
    marginBottom: 20,
    fontFamily: 'Inter',
  },
  loginButton: {
    backgroundColor: '#FE5000BF',
    borderRadius: 50,
    borderColor: '#FE5000',
    height: 48,
    justifyContent: 'center', // vertical centering
    alignItems: 'center', // horizontal centering
    marginBottom: 20,
    shadowColor: '#FE5000BF',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 9,
    elevation: 3,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    textAlign: 'center', // ensures text is centered
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: '#6B7280',
    fontFamily: 'Poppins',
  },
  signUpLink: {
    fontSize: 16,
    color: '#3B82F6',
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
});
