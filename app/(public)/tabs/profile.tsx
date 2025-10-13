import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to signUpPage1 when profile tab is accessed
    router.replace('../Screens/signUpPage1');
    // router.push('../../sign-in');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* This content won't be visible as we redirect immediately */}
      <View style={styles.content} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});