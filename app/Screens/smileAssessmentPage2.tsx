import { useRouter } from 'expo-router';
import { ArrowLeft, Check } from 'lucide-react-native';
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
const H_PADDING = 24;
const TILE_GAP = 20;
const COLS = 3;

function calcTileSize() {
  const gridWidth = SCREEN_W - H_PADDING * 2;
  const gapTotal = TILE_GAP * (COLS - 1);
  return Math.floor((gridWidth - gapTotal) / COLS);
}
const TILE_SIZE = calcTileSize();

const photoExamples = [
  { src: require('../../assets/images/smile1.png'), hasCheckIcon: true },
  { src: require('../../assets/images/smile2.png'), hasCheckIcon: false },
  { src: require('../../assets/images/smile3.png'), hasCheckIcon: false },
  { src: require('../../assets/images/smile4.png'), hasCheckIcon: false },
  { src: require('../../assets/images/smile5.png'), hasCheckIcon: false },
];

export default function SmilePage2() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      {/* Backgrounds pinned to the real bottom (stacked PNGs) */}
      <Image
        source={require('../../assets/images/bg2.png')}
        style={styles.bottomBg2}
        resizeMode="cover"
      />
      <Image
        source={require('../../assets/images/bg3.png')}
        style={styles.bottomBg3}
        resizeMode="cover"
      />

      {/* Only pad the TOP safe-area so the backgrounds can be full-bleed */}
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{ paddingBottom: 20 }}
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
            <Text style={styles.title}>Smile for the Camera!</Text>
            <Text style={styles.subtitle}>Take some picture for us!</Text>

            <View style={styles.photoGrid}>
              {/* Top row */}
              <View style={[styles.row, { marginBottom: TILE_GAP }]}>
                {photoExamples.slice(0, 3).map((photo, idx) => (
                  <View
                    key={idx}
                    style={[
                      styles.photoContainer,
                      { width: TILE_SIZE, height: TILE_SIZE },
                    ]}
                  >
                    <Image
                      style={styles.photoImage}
                      source={photo.src}
                      resizeMode="cover"
                    />
                    {photo.hasCheckIcon && (
                      <View style={styles.bigCheck}>
                        <Check
                          size={TILE_SIZE * 0.75}
                          color="#22C55E"
                          strokeWidth={3.5}
                        />
                      </View>
                    )}
                  </View>
                ))}
              </View>

              {/* Bottom row */}
              <View style={styles.row}>
                {photoExamples.slice(3, 5).map((photo, idx) => (
                  <View
                    key={idx + 3}
                    style={[
                      styles.photoContainer,
                      {
                        width: TILE_SIZE,
                        height: TILE_SIZE,
                        marginRight: idx === 0 ? TILE_GAP : 0,
                      },
                    ]}
                  >
                    <Image
                      style={styles.photoImage}
                      source={photo.src}
                      resizeMode="cover"
                    />
                  </View>
                ))}
                {/* empty tile for spacing */}
                <View style={{ width: TILE_SIZE, height: TILE_SIZE }} />
              </View>
            </View>
          </View>

          {/* Card */}
          <View style={styles.card}>
            <Image
              style={styles.dentalChart}
              source={require('../../assets/images/smile6.png')}
              resizeMode="contain"
            />
          </View>

          {/* Bottom Section / Button */}
          <View style={styles.bottomSection}>
            <TouchableOpacity
              style={[styles.nextButton, { marginBottom: insets.bottom + 8 }]}
              onPress={() => {
               router.push('../Screens/smileAssessmentPage3')
              }}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
  },

  /* ----- Backgrounds ----- */
  bottomBg2: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,    // pinned to real bottom
    width: '100%',
    height: 372,  // adjust to taste to show enough orange
  },
  bottomBg3: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom:0,  // sits ON TOP of bg2 (raise/lower as needed)
    width: '100%',
    height: 268,  // adjust based on the art you want visible
  },

  /* ----- UI ----- */
  scrollView: { flex: 1 },
  header: {
    paddingHorizontal: H_PADDING,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
    paddingHorizontal: H_PADDING,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 16,
    fontFamily: 'Inter',
    letterSpacing: -0.32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 26,
    fontFamily: 'Inter',
    letterSpacing: -0.32,
  },
  photoGrid: { marginBottom: 15 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photoContainer: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  photoImage: { width: '100%', height: '100%' },
  bigCheck: {
    position: 'absolute',
    inset: 0,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '-25deg' }],
    opacity: 0.95,
  },

  card: {
    alignSelf: 'center',
    width: SCREEN_W - H_PADDING * 2,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
    marginTop: 20,
  },
  dentalChart: {
    width: '100%',
    height: 220,
  },

  bottomSection: {
    justifyContent: 'flex-end',
    paddingHorizontal: H_PADDING,
    // no bottom padding here; button uses safe-area inset
  },
  nextButton: {
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
  nextButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    fontFamily: 'Inter',
  },
});
