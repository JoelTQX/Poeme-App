import { useRouter } from 'expo-router';
import { ArrowLeft, ChevronDown, Eye, EyeOff } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAuthActions } from "../../../src/hooks/useAuthActions";

export default function SignUpPage2() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [password, setPassword] = useState('*******');
  const [confirmPassword, setConfirmPassword] = useState('*******');
  const [email, setEmail] = useState('12345@gmail.com');
  const [mobileNumber, setMobileNumber] = useState('12345678');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Focus states
  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [mobileNumberFocused, setMobileNumberFocused] = useState(false);

  const { loading, signUp } = useAuthActions();

  const handleFirstNameFocus = () => {
    if (!firstNameFocused) {
      setFirstName('');
      setFirstNameFocused(true);
    }
  };

  const handleLastNameFocus = () => {
    if (!lastNameFocused) {
      setLastName('');
      setLastNameFocused(true);
    }
  };

  const handlePasswordFocus = () => {
    if (!passwordFocused) {
      setPassword('');
      setPasswordFocused(true);
    }
  };

  const handleConfirmPasswordFocus = () => {
    if (!confirmPasswordFocused) {
      setConfirmPassword('');
      setConfirmPasswordFocused(true);
    }
  };

  const handleEmailFocus = () => {
    if (!emailFocused) {
      setEmail('');
      setEmailFocused(true);
    }
  };

  const handleMobileNumberFocus = () => {
    if (!mobileNumberFocused) {
      setMobileNumber('');
      setMobileNumberFocused(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = async () => {
    console.log('Sign Up pressed');
    try {
      await signUp(email, password, firstName, lastName, mobileNumber, age, gender) ;
      router.replace('/'); // or your redirectPath
    } catch (e: any) {
      Alert.alert('Sign up failed', e?.message ?? String(e));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} color="#000000" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Just a few details!</Text>

          {/* Name Row */}
          <View style={styles.nameRow}>
            <View style={styles.nameInputContainer}>
              <Text style={styles.inputLabel}>First Name</Text>
              <TextInput
                style={[styles.textInput, { color: 'rgba(0, 0, 0, 0.15)' }]}
                value={firstName}
                onChangeText={setFirstName}
                onFocus={handleFirstNameFocus}
                placeholder="First Name"
              />
            </View>
            <View style={styles.nameInputContainer}>
              <Text style={styles.inputLabel}>Last Name</Text>
              <TextInput
                style={[styles.textInput, { color: 'rgba(0, 0, 0, 0.15)' }]}
                value={lastName}
                onChangeText={setLastName}
                onFocus={handleLastNameFocus}
                placeholder="Last Name"
              />
            </View>
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.passwordInput, { color: 'rgba(0, 0, 0, 0.15)' }]}
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

          {/* Confirm Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.passwordInput, { color: 'rgba(0, 0, 0, 0.15)' }]}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                onFocus={handleConfirmPasswordFocus}
                placeholder="Confirm your password"
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} color="#9CA3AF" />
                ) : (
                  <Eye size={20} color="#9CA3AF" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Email */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={[styles.textInput, { color: 'rgba(0, 0, 0, 0.15)' }]}
              value={email}
              onChangeText={setEmail}
              onFocus={handleEmailFocus}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Mobile Number */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Mobile Number</Text>
            <TextInput
              style={[styles.textInput, { color: 'rgba(0, 0, 0, 0.15)' }]}
              value={mobileNumber}
              onChangeText={setMobileNumber}
              onFocus={handleMobileNumberFocus}
              placeholder="Enter your mobile number"
              keyboardType="phone-pad"
            />
          </View>

          {/* Age and Gender Row */}
          <View style={styles.ageGenderRow}>
            <View style={styles.ageContainer}>
              <Text style={styles.inputLabel}>Age</Text>
              <TextInput
                style={styles.textInput}
                value={age}
                onChangeText={setAge}
                placeholder=""
                keyboardType="numeric"
              />
            </View>
            <View style={styles.genderContainer}>
              <Text style={styles.inputLabel}>Gender</Text>
              <TouchableOpacity style={styles.dropdownContainer}>
                <Text style={styles.dropdownText}>{gender || ''}</Text>
                <ChevronDown size={20} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Terms and Conditions */}
          <View style={styles.termsContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setAgreeToTerms(!agreeToTerms)}
            >
              <View
                style={[
                  styles.checkboxInner,
                  agreeToTerms && styles.checkboxChecked,
                ]}
              />
            </TouchableOpacity>
            <Text style={styles.termsText}>
              I agree to the terms and conditions
            </Text>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24, // tighter padding
    paddingBottom: 20,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
    flex: 1,
    paddingTop: 10,
    padding:50
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000', // Primary
    marginBottom: 20,
    lineHeight:31.2,
    letterSpacing:-0.48,
    fontFamily: 'Times New Roman',
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  nameInputContainer: {
    width: '48%',
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 12,
    color: '#6C7278', // Grey 800
    marginBottom: 6,
    fontFamily: 'Sans',
    fontWeight: '600',
    lineHeight:19.2,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB', // Stroke
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#111827', // Grey 900 (normal text)
    backgroundColor: '#FFFFFF',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#111827',
  },
  eyeButton: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  ageGenderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  ageContainer: {
    width: '48%',
  },
  genderContainer: {
    width: '48%',
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
  },
  dropdownText: {
    fontSize: 16,
    color: '#9CA3AF', // Secondary 500
    fontFamily: 'Poppins',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
  },
  checkboxChecked: {
    backgroundColor: '#FE5000BF', // Accent
  },
  termsText: {
    fontSize: 14,
    color: '#374151',
    fontFamily: 'Poppins',
    flex: 1,
  },
  signUpButton: {
    backgroundColor: '#FE5000BF',
    borderRadius: 50,
    borderColor: '#FE5000',
    height: 48,
    justifyContent: 'center', // vertical centering
    alignItems: 'center', // horizontal centering
    marginBottom: 32,
    shadowColor: '#FE5000BF',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 9,
    elevation: 3,
  },
  signUpButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    textAlign: 'center', // ensures text is centered
  },
});
