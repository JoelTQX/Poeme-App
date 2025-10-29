import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAssessment } from '../../../src/context/SmileAssessmentContext';

const { width } = Dimensions.get('window');

export default function SmileAssessmentPage1() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // 3. REPLACE useState with useAssessment()
   //const [urgencyValue, setUrgencyValue] = useState(5);
  // const [description, setDescription] = useState('');
  const { urgency, setUrgencyValue, description, setDescription } = useAssessment();

  const handleSliderChange = (value: number) => {
    setUrgencyValue(Math.round(value));
  };

  return (
    <View style={styles.root}>
      {/* peach background pinned to the real bottom */}
      <Image
        source={require('../../../assets/images/bg1.png')}
        style={styles.bottomBg}
        resizeMode="cover"
      />

      {/* Only apply safe-area to the TOP so the bottom can be full-bleed */}
      <SafeAreaView style={styles.container} edges={['top']}>
        {/* header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <ArrowLeft size={24} color="#000000" />
          </TouchableOpacity>
        </View>

        {/* content */}
        <View style={styles.content}>
          <Text style={styles.title}>Tell us more about you!</Text>

          <View style={styles.questionSection}>
            <Text style={styles.questionText}>
              On the scale of 1 to 10, how urgent do you want your teeth aligned?
            </Text>

            <View style={styles.sliderContainer}>
              <View style={styles.sliderLabels}>
                <Text style={styles.sliderLabel}>1</Text>
                <Text style={styles.sliderLabel}>10</Text>
              </View>

              <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={10}
                value={urgency}
                onValueChange={handleSliderChange}
                step={1}
                minimumTrackTintColor="#EA8A47"
                maximumTrackTintColor="#E5E7EB"
              />
            </View>
          </View>

          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionLabel}>Description of Wishes (Optional)</Text>
            <TextInput
              style={styles.textInput}
              multiline
              numberOfLines={8}
              value={description}
              onChangeText={setDescription}
              placeholder=""
              textAlignVertical="top"
            />
          </View>
        </View>

        {/* next button floats above the home indicator */}
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={[styles.nextButton, { marginBottom: insets.bottom + 8 }]}
            onPress={() => router.push('../Screens/smileAssessmentPage2')}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    paddingHorizontal: 20,
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
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 40,
    fontFamily: 'Inter',
  },
  questionSection: {
    marginBottom: 40,
  },
  questionText: {
    fontSize: 12,
    color: '#000000',
    marginBottom: 30,
    lineHeight: 19.2,
    fontFamily: 'Inter',
  },
  sliderContainer: {
    paddingHorizontal: 10,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sliderLabel: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  descriptionSection: {
    flex: 1,
  },
  descriptionLabel: {
    fontSize: 12,
    color: '#0A0A0A',
    marginBottom: 16,
    lineHeight: 19.2,
    fontFamily: 'Inter',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    fontFamily: 'Poppins',
    minHeight: 120,
    backgroundColor: '#FFFFFF',
  },
  bottomBg: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,         // <— covers the real bottom, no safe-area gap
    width: '100%',
    height:375,       // pick a height that shows the curve you want
  },
  nextButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    marginTop:25,
    paddingHorizontal: 32,
    borderRadius: 10,
    width:327,
    height:40,
    alignItems: 'center',
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
