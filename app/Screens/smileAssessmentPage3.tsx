import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: SCREEN_W } = Dimensions.get('window');

/** ---- PNG aspect ratios (use your actual image sizes) ----
 * bg4.png preview ~ 430×201, bg5.png preview ~ 429×316
 */
const BG4_W = 430, BG4_H = 201;           // crest
const BG5_W = 429, BG5_H = 316;           // valley
const BG4_ASPECT = BG4_W / BG4_H;         // ~2.139
const BG5_ASPECT = BG5_W / BG5_H;         // ~1.358

// Rendered heights based on device width
const BG4_HEIGHT = SCREEN_W / BG4_ASPECT; // shorter (sits on top)
const BG5_HEIGHT = SCREEN_W / BG5_ASPECT; // taller base

// How much bg4 should overlap bg5 (tweak 0.22–0.34 to taste)
const OVERLAP = 1;

export default function SmileAssessmentPage3() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleHomePress = () => router.push('/tabs');

  return (
    <View style={styles.root}>
      {/* Layered bottom backgrounds (two PNGs) */}
      <View pointerEvents="none" style={styles.bottomLayer}>
        {/* Base wave pinned to real bottom */}
        <Image
          source={require('../../assets/images/bg5.png')}
          style={[styles.bgBase, { height: BG5_HEIGHT }]}
          resizeMode="cover"
        />
        {/* Top wave lifted to overlap the base */}
        <Image
          source={require('../../assets/images/bg4.png')}
          style={[styles.bgTop, { height: BG4_HEIGHT, bottom: OVERLAP }]}
          resizeMode="cover"
        />
      </View>

      {/* Only pad the TOP safe area */}
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: insets.bottom + 88 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Hang tight!</Text>
            <Text style={styles.subtitle}>We are working on it!</Text>

            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/images/workingOnIt.png')}
                style={styles.doctorsImage}
                resizeMode="cover"
              />
            </View>

            <Text style={styles.description}>
              Our team is currently evaluating your case.
            </Text>
            <Text style={styles.timeframe}>We'll be in touch in 24 hours.</Text>

            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Why the need for a review?</Text>
              <Text style={styles.infoText}>
                Our team of doctors are assessing your eligibility for Clear
                Aligners! You will receive a notification once we are done
                reviewing!
              </Text>
            </View>

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                style={[styles.homeButton, { marginBottom: insets.bottom + 12 }]}
                onPress={handleHomePress}
              >
                <Text style={styles.homeButtonText}>Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1 },

  /* --------- Background layering --------- */
  bottomLayer: {
    position: 'absolute',
    left: 0, right: 0, bottom: 0,
    width: '100%',
    zIndex: 0,
  },
  bgBase: {
    position: 'absolute',
    left: 0, 
    right: 0, 
    bottom: 0,
    width: '100%',
    height:201,
    zIndex: 1,
  },
  bgTop: {
    position: 'absolute',
    left: 0, 
    right: 0,
    bottom: 0,
    width: '100%',
    height:315,
    zIndex: 2,
  },

  /* --------- Content --------- */
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 40 },
  title: { fontSize: 20, fontWeight: '400', color: '#000', marginBottom: 20, fontFamily: 'Inter',marginTop:35 },
  subtitle: { fontSize: 20, fontWeight: '400', color: '#000', marginBottom: 20, fontFamily: 'Poppins' },
  imageContainer: {
    marginBottom: 10, borderRadius: 5, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1, shadowRadius: 8, elevation: 4,
  },
  doctorsImage: { width: '100%', height: 200 },
  description: { fontSize: 15, color: '#383636', marginBottom: 24, lineHeight: 21, fontFamily: 'Inter',letterSpacing:-0.32 },
  timeframe: { fontSize: 20, fontWeight: '400', color: '#000', marginBottom: 40, fontFamily: 'Inter',letterSpacing:-0.32 },
  infoBox: {
    backgroundColor: '#FFFFFF', borderRadius: 0, padding: 20,
    borderWidth: 1, borderColor: '#000000', marginBottom: 40,
  },
  infoTitle: { fontSize: 15, fontWeight: '400', color: '#000', marginBottom: 12, fontFamily: 'Inter',letterSpacing:-0.32 },
  infoText: { fontSize:12, fontWeight: '400', color: '#000', marginBottom: 12, fontFamily: 'Inter',letterSpacing:-0.32,lineHeight:21 },

  homeButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    marginTop: 25,
    paddingHorizontal: 32,
    borderRadius: 10,
    width: 327,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 1,
  },
  homeButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    fontFamily: 'Inter',
  },
});
