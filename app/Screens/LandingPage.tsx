import {
    Calendar,
    Clipboard,
    DollarSign,
    Smile,
    Users,
    Workflow,
} from 'lucide-react-native';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useRouter } from 'expo-router';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  imageUrl?: any;
  backgroundColor: string;
}

interface InfoCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  imageUrl?: any;
  onPress?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, imageUrl, backgroundColor }) => (
  <TouchableOpacity style={[styles.serviceCard, { backgroundColor }]}>
    {imageUrl && <Image source={imageUrl} style={styles.fullCardImage} resizeMode="cover" />}
  </TouchableOpacity>
);

const InfoCard: React.FC<InfoCardProps> = ({ title, subtitle, icon, imageUrl, onPress }) => (
  <View style={styles.infoCardContainer}>
    <TouchableOpacity style={styles.infoCard} onPress={onPress}>
      {imageUrl && <Image source={imageUrl} style={styles.fullInfoCardImage} resizeMode="cover" />}
    </TouchableOpacity>
    <Text style={styles.infoCardLabel}>{title}</Text>
  </View>
);

export default function LandingPage() {
  const router = useRouter();

  const handleAboutUsPress = () => {
    router.push('/about-us');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.welcomeText}>Welcome!</Text>
            <Text style={styles.pointsText}>69</Text>
          </View>
          <View style={styles.memberBadge}>
            <Text style={styles.memberText}>Gold Member</Text>
          </View>
          <Text style={styles.pointsLabel}>xx pts</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How can we help you today?</Text>
          
          <View style={styles.servicesGrid}>
            <ServiceCard
              title="Smile Assessment"
              backgroundColor="#F4E6D7"
              imageUrl={require('../../assets/images/smileAssessment.png')}
              icon={<Smile size={24} color="#EA8A47" />}
            />
            <ServiceCard
              title="Aligner Tracker"
              backgroundColor="#F4E6D7"
              imageUrl={require('../../assets/images/alignerTracker.png')}
              icon={<Clipboard size={24} color="#EA8A47" />}
            />
            <ServiceCard
              title="Retainers"
              backgroundColor="#F4E6D7"
              imageUrl={require('../../assets/images/retainer.png')}
              icon={<Smile size={24} color="#EA8A47" />}
            />
            <ServiceCard
              title="Appointments"
              backgroundColor="#F4E6D7"
              imageUrl={require('../../assets/images/appointment.png')}
              icon={<Calendar size={24} color="#EA8A47" />}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Who are we?</Text>
          
          <View style={styles.infoGrid}>
            <InfoCard
              title="About Us"
              subtitle=""
              imageUrl={require('../../assets/images/aboutUs.png')}
              icon={<Users size={20} color="#EA8A47" />}
              onPress={handleAboutUsPress}
              onPress={handleAboutUsPress}
            />
            <InfoCard
              title="The Poème Difference"
              subtitle=""
              imageUrl={require('../../assets/images/difference.png')}
              icon={<Smile size={20} color="#EA8A47" />}
            />
            <InfoCard
              title="Pricing"
              subtitle=""
              imageUrl={require('../../assets/images/pricing.png')}
              icon={<DollarSign size={20} color="#EA8A47" />}
            />
            <InfoCard
              title="Workflow"
              subtitle=""
              imageUrl={require('../../assets/images/workflow.png')}
              icon={<Workflow size={20} color="#EA8A47" />}
            />
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
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#EA8A47',
  },
  pointsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  memberBadge: {
    backgroundColor: '#EA8A47',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  memberText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  pointsLabel: {
    fontSize: 16,
    color: '#1E3A8A',
    fontWeight: '500',
    textAlign: 'right',
    marginTop: -24,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 20,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 20,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  fullCardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  infoCardContainer: {
    width: '48%',
    marginBottom: 16,
  },
  infoCard: {
    width: '100%',
    aspectRatio: 1.2,
    marginBottom: 8,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoCardLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E3A8A',
    textAlign: 'center',
  },
  fullInfoCardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
});