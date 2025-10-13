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

interface WorkflowStepProps {
  id: number;
  title: string;
  description: string;
  price: string;
  priceColor: string;
  backgroundColor?: string;
  imageUrl: any;
}

const workflowSteps = [
  {
    id: 1,
    title: "Send Us your photos",
    description: "Our team will assess your smile and determine if clear aligners are right for you.",
    price: "FREE",
    priceColor: "#10B981",
    backgroundColor: "#FE50004C",
    imageUrl: require('../../../assets/images/workflow1.png'),
  },
  {
    id: 2,
    title: "Visit our dentist",
    description: "Get a comprehensive exam and digital scan to create your personalized treatment plan.",
    price: "$120",
    priceColor: "#3B82F6",
    imageUrl: require('../../../assets/images/workflow2.png'),
  },
  {
    id: 3,
    title: "3D Simulation & plan",
    description: "Review your custom treatment plan, including a 3D simulation of your smile transformation.",
    price: "FREE",
    priceColor: "#10B981",
    backgroundColor: "#FE50004C",
    imageUrl: require('../../../assets/images/workflow3.png'),
  },
  {
    id: 4,
    title: "Aligner fabrication",
    description: "Your custom aligners are fabricated with precision and care, ensuring a comfortable fit.",
    price: "$1688",
    priceColor: "#3B82F6",
    imageUrl: require('../../../assets/images/workflow4.png'),
  },
  {
    id: 5,
    title: "Progress tracking",
    description: "Monitor your progress with regular check-ins and adjustments as needed.",
    price: "FREE",
    priceColor: "#10B981",
    backgroundColor: "#FE50004C",
    imageUrl: require('../../../assets/images/workflow5.png'),
  },
];

const WorkflowStep: React.FC<WorkflowStepProps & { hasBackground?: boolean }> = ({
  id, title, description, price, priceColor, imageUrl, hasBackground
}) => (
  <View style={[styles.stepRow, hasBackground && styles.stepWithBackground]}>
    {/* LEFT COLUMN: number */}
    <View style={styles.leftCol}>
      <View style={styles.stepNumber}>
        <Text style={styles.stepNumberText}>{id}</Text>
      </View>
    </View>

    {/* RIGHT COLUMN: card */}
    <View style={styles.rightCol}>
      <View style={styles.stepCard}>
        <View style={styles.stepContent}>
          <View style={styles.textCol}>
            <Text style={styles.stepTitle}>{title}</Text>
            <Text style={styles.stepDescription}>{description}</Text>
          </View>

          <View style={styles.imageCol}>
            <Image source={imageUrl} style={styles.stepImage} resizeMode="cover" />
            <View style={[styles.priceBadge, { backgroundColor: priceColor }]}>
              <Text style={styles.priceText}>{price}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
);


export default function WorkflowScreen() {
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
        <Text style={styles.headerTitle}>Workflow</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>
            Beautiful Smile in 5 Steps with{' '}
            <Text style={styles.brandText}>Poème Clear Aligners</Text>
          </Text>
        </View>

        <View style={styles.stepsContainer}>
          {workflowSteps.map((step, index) => (
            <WorkflowStep
              key={step.id}
              {...step}
              hasBackground={!!step.backgroundColor}
            />
          ))}
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
  textCol: {
  flex: 1,
  paddingRight: 16,
},

imageCol: {
  width: 80,
  alignItems: 'flex-end',
  position: 'relative',
  flexShrink: 0,            // 👈 prevents image from shrinking when text wraps
},
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    paddingHorizontal: 40,
    paddingTop: 13,
    paddingBottom: 13,
  },
  stepContent: {
  flexDirection: 'row',
  alignItems: 'flex-start',  // keep image pinned to the top
},
  mainTitle: {
    fontSize: 19,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 26,
    fontFamily: 'Poppins',
    letterSpacing: -0.24,
  },
  brandText: {
    color: '#FE5000CC',
    fontWeight: '400',
  },
  stepsContainer: {
    paddingBottom: 40,
  },
  stepContainer: {
    marginBottom: 40,
    paddingHorizontal: 20,
    position: 'relative',
  },
  stepWithBackground: {
    backgroundColor: '#FE50004C',
    marginHorizontal: 0,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
leftCol: {
  width: 50,
  justifyContent: 'flex-start',
  alignItems: 'center',
   marginRight: 12,       
  
},

stepNumber: {
  width: 40,
  height: 40,
  backgroundColor: '#FE5000CC',
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
},
  stepNumberText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
  },
stepCard: {
  flex: 1,
  alignSelf: 'stretch',
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  padding: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 15,
  elevation: 8,
  minHeight: 230, // 👈 adjust until all cards look balanced
},
  textContent: {
    flex: 1,
    paddingRight: 16,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 16,
    fontFamily: 'Poppins',
    lineHeight: 28,
  },
  stepDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#4B5563',
    lineHeight: 23,
    fontFamily: 'Poppins',
  },
  imageContainer: {
    width: 80,
    height: 64,
    position: 'relative',
  },
  stepImage: {
    width: 80,
    height: 64,
    borderRadius: 8,
  },
  priceBadge: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    minWidth: 42,
    alignItems: 'center',
  },
  priceText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
  },
  stepRow: {
  flexDirection: 'row',
  paddingHorizontal: 20,
  marginBottom: 24,
},

rightCol: {
  flex: 1,
  marginRight: 22,  
},

});