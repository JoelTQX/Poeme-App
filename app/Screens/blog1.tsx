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

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletGlyph}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

export default function Blog1Screen() {
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
        <Text style={styles.headerTitle}>Blog</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/blog1_im1.png')}
          style={styles.initialImage}
          resizeMode="cover"
        />

        <Text style={styles.blogTitle}>
          Cleaning Aligners Instructions: Essential Tips for a Brighter Smile
        </Text>

        <Text style={styles.introText}>
          Your journey to a straighter smile is an exciting one, and maintaining
          the cleanliness of your aligners is a crucial part of the process.
          Aligners, such as other clear orthodontic trays, can accumulate
          plaque, bacteria, and odors if not cleaned properly. In this blog
          article, we will provide you with essential instructions for cleaning
          your aligners, ensuring your treatment remains effective, hygienic,
          and odor-free.
        </Text>

        <Image
          source={require('../../assets/images/blog1_img2.png')}
          style={styles.blogImage}
          resizeMode="cover"
        />

        <Text style={styles.sectionTitle}>
          Three rules to treatment with clear aligners:
        </Text>

        <BulletItem>
          Wear them 20 to 22 hours a day and change to the new set every 2
          weeks.
        </BulletItem>
        <BulletItem>
          Don&apos;t eat or drink anything other than flat water with aligners
          in.
        </BulletItem>
        <BulletItem>
          Brush or at least rinse with water after eating/drinking before
          putting aligners back in.
        </BulletItem>

        <Image
          source={require('../../assets/images/blog1_img3.png')}
          style={styles.blogImage}
          resizeMode="cover"
        />

        <Text style={styles.sectionTitle}>Cleaning aligners:</Text>

        <BulletItem>
          Always clean the aligner before putting it on and after removing it.
          Always rinse it thoroughly with water and keep it in a box when you
          are not wearing it.
        </BulletItem>
        <BulletItem>
          Clean them with liquid soap (dish or hand), a soft toothbrush, and
          cool water (Do{' '}
          <Text style={styles.boldText}>NOT</Text> use hot water as it will
          deform the aligners).
        </BulletItem>
        <BulletItem>
          You can also use a toothbrush and toothpaste for cleaning. However, if
          you choose toothpaste with abrasive particles, it can leave scratches
          on the surface of the aligner. For hygienic reasons, you should use a
          different toothbrush to clean the aligner than your teeth.
          Alternatively, you can also clean the aligner with dishwashing liquid (
          <Text style={styles.boldText}>Attention: Do not use hot water!</Text>)
        </BulletItem>

        <Image
          source={require('../../assets/images/blog1_img4.png')}
          style={styles.blogImage}
          resizeMode="cover"
        />

        <Text style={styles.sectionTitle}>Caring for your aligners:</Text>

        <BulletItem>
          When not in your mouth, your aligners should be in your protective
          case. Avoid putting them anywhere else as the possibility of them
          getting misplaced/damaged or thrown away is very high.
        </BulletItem>
        <BulletItem>Keep aligners away from pets and children!</BulletItem>
        <BulletItem>
          Keep your aligners away from heat; they will deform because they are
          plastic.
        </BulletItem>

        <Image
          source={require('../../assets/images/blog1_img5.png')}
          style={styles.blogImage}
          resizeMode="cover"
        />

        <Text style={styles.sectionTitle}>Use chewies:</Text>

        <BulletItem>
          Do the chewing exercises every day for 5–10 minutes to help your
          aligners fully seat around your teeth.
        </BulletItem>
        <BulletItem>
          Bite on the chewie, holding 3–5 seconds. Then move to a different area
          of the mouth and bite and hold again for 3–5 seconds.
        </BulletItem>

        <Image
          source={require('../../assets/images/blog1_img6.png')}
          style={styles.blogImage}
          resizeMode="cover"
        />

        <Text style={styles.sectionTitle}>Keep your previous aligners:</Text>

        <BulletItem>
          Sometimes aligners get lost, and you go a few days without wearing
          them. Your teeth may shift back and you may need to find the
          best-fitting previous aligner to move on from there.
        </BulletItem>

        <Image
          source={require('../../assets/images/blog1_img6.png')}
          style={styles.blogImage}
          resizeMode="cover"
        />

        <Text style={styles.sectionTitle}>
          Contact your Poème Align consultant immediately
        </Text>

        <BulletItem>If you lose your clear aligners.</BulletItem>
        <BulletItem>If a clear aligner attachment(s) comes off.</BulletItem>

        <Image
          source={require('../../assets/images/blog1_img7.png')}
          style={styles.blogImage}
          resizeMode="cover"
        />

        <Text style={styles.sectionTitle}>
          How to correctly put on and take off aligner
        </Text>

        <Text style={styles.bodyText}>
          <Text style={styles.boldText}>To put on</Text>: Place the aligner
          over your front teeth. Then press the aligner firmly against your
          teeth with your fingertips, starting from the front, all the way to
          the molars.{'\n\n'}
          <Text style={styles.boldText}>To take off</Text>: Use your fingertips
          to remove the aligner, starting from the molars. Tip: Reach under the
          aligner from behind your teeth (the side of your teeth facing the
          tongue). If necessary, you can use the enclosed aligner-removal hook.
        </Text>

        <View style={styles.bottomPadding} />
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
    height: 80,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
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
    backgroundColor: '#FFFFFF',
    paddingLeft: 5,
    paddingRight: 5,
  },
  blogTitle: {
    fontSize: 22,
    fontWeight: '400',
    color: '#FE5000',
    marginHorizontal: 35,
    marginTop: 20,
    marginBottom: 20,
    lineHeight: 28,
    fontFamily: 'Inter',
    textDecorationLine: 'underline',
    letterSpacing: -0.24,
  },
  introText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
    marginHorizontal: 35,
    marginBottom: 30,
    lineHeight: 24,
    fontFamily: 'Inter',
    letterSpacing: -0.24,
  },
  blogImage: {
    width: 360,
    height: 360,
    borderRadius: 15,
    marginHorizontal: 35,
    marginBottom: 30,
  },
  initialImage: {
    width: 360,
    height: 180,
    borderRadius: 15,
    marginHorizontal: 35,
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#00205B',
    marginHorizontal: 35,
    marginBottom: 16,
    lineHeight: 24,
    fontFamily: 'Poppins',
    letterSpacing: -0.24,
  },
  bodyText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
    marginHorizontal: 35,
    marginBottom: 30,
    lineHeight: 24,
    fontFamily: 'Inter',
    letterSpacing: -0.24,
  },
  boldText: {
    fontWeight: '600',
  },
  bottomPadding: {
    height: 40,
  },

  /* Bullet list styles */
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 35,
    marginBottom: 10,
  },
  bulletGlyph: {
    fontSize: 18,
    lineHeight: 24,
    marginRight: 8,
  },
  bulletText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 24,
    fontFamily: 'Inter',
    letterSpacing: -0.24,
  },
});
