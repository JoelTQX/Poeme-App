import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { ArrowLeft, Camera, Check, X } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

// --- NEW IMPORTS ---
// 1. Import your assessment context
import { useAssessment } from '../../../src/context/SmileAssessmentContext';
// 2. Import the Supabase client directly
import { supabase } from '../../../src/lib/supabase'; // <-- Adjust this path if it's wrong

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

const photoSlots = [
  { id: 'front', label: 'Front', example: require('../../../assets/images/smile1.png') },
  { id: 'left', label: 'Left', example: require('../../../assets/images/smile2.png') },
  { id: 'right', label: 'Right', example: require('../../../assets/images/smile3.png') },
  { id: 'upper', label: 'Upper', example: require('../../../assets/images/smile4.png') },
  { id: 'lower', label: 'Lower', example: require('../../../assets/images/smile5.png') },
];

export default function SmilePage2() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Get state from context
  const { photos, setOnePhoto, urgency, description, resetAssessment } = useAssessment();

  // State for the review modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPhotoUri, setCurrentPhotoUri] = useState<string | null>(null);
  const [currentSlotId, setCurrentSlotId] = useState<string | null>(null);
  
  // --- NEW: Loading state for the "Next" button press ---
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if all photos are taken
  const allPhotosTaken = Object.keys(photos).length === photoSlots.length;

  // Function to open camera (unchanged)
  const handleTakePhoto = async (slotId: string) => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("Permission Denied", "We need access to your camera to take photos.");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      quality: 0.8,
      aspect: [1, 1],
    });
    if (!result.canceled) {
      setCurrentPhotoUri(result.assets[0].uri);
      setCurrentSlotId(slotId);
      setIsModalVisible(true);
    }
  };

  // User clicks "Accept" in modal (unchanged)
  const handleAcceptPhoto = () => {
    if (currentPhotoUri && currentSlotId) {
      setOnePhoto(currentSlotId, currentPhotoUri);
    }
    handleCloseModal();
  };

  // User clicks "Retake" in modal (unchanged)
  const handleRetakePhoto = () => {
    if (currentSlotId) {
      const slotIdToRetake = currentSlotId;
      handleCloseModal();
      handleTakePhoto(slotIdToRetake);
    }
  };

  // Close modal (unchanged)
  const handleCloseModal = () => {
    setIsModalVisible(false);
    setCurrentPhotoUri(null);
    setCurrentSlotId(null);
  };

  // --- NEW: Function to handle "Next" button press ---
  const handleNext = async () => {
    if (isSubmitting) return; // Prevent double-press
    setIsSubmitting(true);

    console.log('Testing Save: Got scale =', urgency);
    console.log('Testing Save: Got description =', description);

    try {
      // Save data to Supabase 'smile' table
      const { error } = await supabase
        .from('smile')
        .insert({
          scale: urgency,
          description: description,
          // --- Add placeholder data for other NOT NULL fields ---
          fname: 'Test',
          lname: 'User',
          email: 'test@example.com',
          phone: 12345678,
          status: 'Test Entry',
          // Set booleans to false
          contact_whatsapp: false, 
          contact_email: false,
          // Set photo URLs to a placeholder text
          photo1: 'test_placeholder',
          photo2: 'test_placeholder',
          photo3: 'test_placeholder',
          photo4: 'test_placeholder',
          photo5: 'test_placeholder',
        });

      if (error) {
        throw error; // Throw error to be caught below
      }

      // Success!
      console.log('Test save to Supabase successful!');
      resetAssessment(); // Clear the context
      router.push('../Screens/smileAssessmentPage3'); // Navigate to success page

    } catch (e: any) {
      console.error('Error saving test data:', e);
      Alert.alert('Save Failed', `Could not save test data: ${e.message}`);
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };


  return (
    <View style={styles.root}>
      {/* Backgrounds (unchanged) */}
      <Image
        source={require('../../../assets/images/bg2.png')}
        style={styles.bottomBg2}
        resizeMode="cover"
      />
      <Image
        source={require('../../../assets/images/bg3.png')}
        style={styles.bottomBg3}
        resizeMode="cover"
      />

      {/* Review Photo Modal (unchanged) */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Review Photo</Text>
            {currentPhotoUri && (
              <Image source={{ uri: currentPhotoUri }} style={styles.modalImage} resizeMode="contain" />
            )}
            <View style={styles.modalButtonRow}>
              <TouchableOpacity
                style={[styles.modalButton, styles.retakeButton]}
                onPress={handleRetakePhoto}
              >
                <Text style={styles.retakeButtonText}>Retake</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.acceptButton]}
                onPress={handleAcceptPhoto}
              >
                <Text style={styles.acceptButtonText}>Accept</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.modalCloseButton} onPress={handleCloseModal}>
              <X size={24} color="#6B7280" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* SafeAreaView and ScrollView (unchanged) */}
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header (unchanged) */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <ArrowLeft size={24} color="#000000" />
            </TouchableOpacity>
          </View>

          {/* Content (unchanged) */}
          <View style={styles.content}>
            <Text style={styles.title}>Smile for the Camera!</Text>
            <Text style={styles.subtitle}>Take some picture for us!</Text>

            {/* Dynamic Photo Grid (unchanged) */}
            <View style={styles.photoGrid}>
              {/* Top row */}
              <View style={[styles.row, { marginBottom: TILE_GAP }]}>
                {photoSlots.slice(0, 3).map((slot) => {
                  const savedPhotoUri = photos[slot.id];
                  return (
                    <TouchableOpacity
                      key={slot.id}
                      style={[
                        styles.photoContainer,
                        { width: TILE_SIZE, height: TILE_SIZE },
                      ]}
                      onPress={() => handleTakePhoto(slot.id)}
                    >
                      <Image
                        style={styles.photoImage}
                        source={savedPhotoUri ? { uri: savedPhotoUri } : slot.example}
                        resizeMode="cover"
                      />
                      {savedPhotoUri && (
                        <View style={styles.bigCheck}>
                          <Check
                            size={TILE_SIZE * 0.75}
                            color="#22C55E"
                            strokeWidth={3.5}
                          />
                        </View>
                      )}
                      {!savedPhotoUri && (
                        <View style={styles.cameraIconOverlay}>
                          <Camera size={TILE_SIZE * 0.4} color="#FFFFFF" />
                        </View>
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>

              {/* Bottom row (unchanged) */}
              <View style={styles.row}>
                {photoSlots.slice(3, 5).map((slot, idx) => {
                  const savedPhotoUri = photos[slot.id];
                  return (
                    <TouchableOpacity
                      key={slot.id}
                      style={[
                        styles.photoContainer,
                        {
                          width: TILE_SIZE,
                          height: TILE_SIZE,
                          marginRight: idx === 0 ? TILE_GAP : 0,
                        },
                      ]}
                      onPress={() => handleTakePhoto(slot.id)}
                    >
                      <Image
                        style={styles.photoImage}
                        source={savedPhotoUri ? { uri: savedPhotoUri } : slot.example}
                        resizeMode="cover"
                      />
                      {savedPhotoUri && (
                        <View style={styles.bigCheck}>
                          <Check
                            size={TILE_SIZE * 0.75}
                            color="#22C55E"
                            strokeWidth={3.5}
                          />
                        </View>
                      )}
                      {!savedPhotoUri && (
                        <View style={styles.cameraIconOverlay}>
                          <Camera size={TILE_SIZE * 0.4} color="#FFFFFF" />
                        </View>
                      )}
                    </TouchableOpacity>
                  );
                })}
                <View style={{ width: TILE_SIZE, height: TILE_SIZE }} />
              </View>
            </View>
          </View>

          {/* Card (unchanged) */}
          <View style={styles.card}>
            <Image
              style={styles.dentalChart}
              source={require('../../../assets/images/smile6.png')}
              resizeMode="contain"
            />
          </View>

          {/* --- MODIFIED: Bottom Section / Button --- */}
          <View style={styles.bottomSection}>
            <TouchableOpacity
              style={[
                styles.nextButton,
                // Disable if not all photos are taken OR if submitting
                (!allPhotosTaken || isSubmitting) && styles.nextButtonDisabled,
                { marginBottom: insets.bottom + 8 }
              ]}
              // Add disabled prop
              disabled={!allPhotosTaken || isSubmitting}
              onPress={handleNext} // --- Use the new handleNext function ---
            >
              <Text style={[
                styles.nextButtonText,
                (!allPhotosTaken || isSubmitting) && styles.nextButtonTextDisabled
              ]}>
                {isSubmitting ? 'Saving...' : (allPhotosTaken ? 'Next' : 'Complete all 5 photos')}
              </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

// --- STYLES ---
// (All your styles are unchanged)
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
  },
  bottomBg2: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: 372,
  },
  bottomBg3: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: 268,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
    position: 'relative',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Inter',
    marginBottom: 16,
  },
  modalImage: {
    width: '100%',
    height: SCREEN_W - 48 * 2,
    borderRadius: 12,
    marginBottom: 24,
    backgroundColor: '#F0F0F0',
  },
  modalButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  retakeButton: {
    backgroundColor: '#F3F4F6',
    marginRight: 8,
  },
  retakeButtonText: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
  acceptButton: {
    backgroundColor: '#EA8A47',
    marginLeft: 8,
  },
  acceptButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    borderRadius: 8,
  },
  photoImage: { width: '100%', height: '100%' },
  bigCheck: {
    position: 'absolute',
    inset: 0,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '-25deg' }],
    opacity: 0.95,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  cameraIconOverlay: {
    position: 'absolute',
    inset: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
  nextButtonDisabled: {
    backgroundColor: '#E5E7EB',
    shadowOpacity: 0,
    elevation: 0,
  },
  nextButtonTextDisabled: {
    color: '#9CA3AF',
  },
});

