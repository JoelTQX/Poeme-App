import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function AboutUsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About Us</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/aboutUsPage.png')}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.textContent}>
          <Text style={styles.quote}>
            "The Poetry of{'\n'}perfecting smiles"
          </Text>

          <Text style={styles.description}>
            Comparable to the art of literary poetry, Poème believes in the life-changing smile – creating beauty and spreading happiness.
          </Text>

          <Text style={styles.bodyText}>
            At Poème, each case is uniquely tailored using the latest technology providing you with affordable, painless and high quality solutions. We access, customise, fabricated and supply the aligners making it an easy journey to the smile you want to achieve.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#FE5000BF',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    height: 100,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Poppins',
    color: 'white',
    flex: 1,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  imageContainer: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
  },
  heroImage: {
    width: 382,
    height: 365,
    borderRadius: 32,
  },
  textContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  quote: {
    fontSize: 36,
    fontWeight: '400',
    color: '#FE5000BF',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 44,
    fontFamily: 'Georgia', // Serif font similar to Palatino
    fontStyle: 'italic',
  },
  description: {
    fontSize: 19,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: -0.24,
    fontFamily: 'Poppins',
  },
  bodyText: {
    fontSize: 17,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: -0.24,
    fontFamily: 'Poppins',
  },
});