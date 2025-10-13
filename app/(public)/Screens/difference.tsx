import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import {
  Image, SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export default function DifferenceScreen() {
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
        <Text style={styles.headerTitle}>The Poème Difference</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.textContent}>
          <Text style={styles.mainTitle}>Your Smile, Our Commitment</Text>
          
          <Text style={styles.description}>
            At Poème, we go above and beyond to ensure that your journey to a straighter smile is seamless and enjoyable as possible. Our experienced professionals put utmost focus to craft the best possible solution for you.
          </Text>

          <View style={styles.featuresContainer}>
            <Text style={styles.featuresTitle}>Why Poème ?</Text>
            <Text style={styles.featuresSubtitle}>
              We know that your journey to a beautiful smile is deeply personal. Our brand is designed to offer you affordable and high-quality solutions with exceptional benefits.
            </Text>

            <View style={styles.featureItem}>
              <View style={styles.iconContainer}>
                  <Image 
    source={require('../../../assets/images/tooth1.png')} // adjust path
       style={styles.iconImage}
    resizeMode="contain"
  />
              </View>
              <Text style={styles.featureTitle}>Swift Turnaround</Text>
              <Text style={styles.featureText}>
                Your time is precious. With cutting-edge technology and a skilled team, we have a fast turnaround of time (3 - 5 days* planning, <Text style={styles.boldText}>14 days</Text> fabrication). And, if you ever lose or break your aligners during the course, we can replace them within 3 days.
              </Text>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.iconContainer}>
                <Image 
    source={require('../../../assets/images/tooth2.png')} // adjust path
       style={styles.iconImage}
    resizeMode="contain"
  />
              </View>
              <Text style={styles.featureTitle}>Transparent Pricing</Text>
              <Text style={styles.featureText}>
                We believe in open and honest pricing. Poème is dedicated to providing you with clear, upfront pricing. No hidden costs or surprises – just a straightforward approach to your smile transformation.
              </Text>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.iconContainer}>
               <Image 
    source={require('../../../assets/images/tooth3.png')} // adjust path
       style={styles.iconImage}
    resizeMode="contain"
  />
              </View>
              <Text style={styles.featureTitle}>Expertise at Your Service</Text>
              <Text style={styles.featureText}>
                We have teamed up with a diverse group of local dentists to ensure you receive top-notch dedication to your journey with us.
              </Text>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.iconContainer}>
                <Image 
    source={require('../../../assets/images/tooth4.png')} // adjust path
       style={styles.iconImage}
    resizeMode="contain"
  />
              </View>
              <Text style={styles.featureTitle}>Aligner Assurance</Text>
              <Text style={styles.featureText}>
                We stand by the quality of our aligners. That's why we offer a warranty during your treatment. With Poème, your investment is safeguarded, and we're here to support you every step of the way.
              </Text>
            </View>
          </View>
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
  textContent: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
  },
  mainTitle: {
    
    fontSize: 20,
    
    color: '#00205B',
    marginBottom: 24,
    fontWeight:700,
    fontFamily: 'Poppins',
    letterSpacing: -0.24,
  },
  description: {
    fontSize: 19,
    color: '#000000',
    fontWeight:400,
    marginBottom: 40,
    lineHeight: 24,
    letterSpacing: -0.24,
    fontFamily: 'Poppins_400Regular',
  },
  featuresContainer: {
    backgroundColor: '#E8E9F3',
    borderRadius: 20,
    padding: 24,
  },
  featuresTitle: {
    fontSize: 24,
    color: '#00205B',
    textAlign: 'center',
    fontWeight:700,
    marginBottom: 16,
    fontFamily: 'Poppins_700Bold',
    letterSpacing: -0.24,
  },
  featuresSubtitle: {
    fontSize: 19,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
    letterSpacing: -0.24,
    fontFamily: 'Poppins_400Regular',
  },
  featureItem: {
    marginBottom: 32,
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    fontSize: 28,
  },
  featureTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#00205B',
    textAlign: 'center',
    marginBottom: 12,
    fontFamily: 'Poppins',
    letterSpacing: -0.24,
  },
  featureText: {
    fontSize: 19,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 22,
    fontWeight: '400',
    letterSpacing: -0.24,
    fontFamily: 'Poppins',
  },
  boldText: {
    fontWeight: '700',
  },
  iconImage: {
  width: 55,
  height: 55,
},
});