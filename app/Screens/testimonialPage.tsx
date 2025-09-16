import { router, useLocalSearchParams } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { testimonials } from "../data/testimonials";

export default function TestimonialScreen() {
const { id } = useLocalSearchParams();
const testimonial = testimonials.find((t) => String(t.id) === String(id));

  const [showAfter, setShowAfter] = useState(false);

  if (!testimonial) {
    return (
      <View style={styles.container}>
        <Text>Testimonial not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Testimonials</Text>
        <View style={{ width: 40 }} /> {/* spacer */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Section title */}
        <Text style={styles.sectionHeading}>
          <Text style={styles.sectionHighlight}>Happy Clients.{"\n"}True Testimonials.</Text>
        </Text>

        {/* Paragraph */}
        <Text style={styles.paragraph}>
          We have helped more than 1,000 individuals to achieve the life-changing
          smile they have always wanted. Our painless teeth-straightening process
          is backed by years of expertise and proven results. We are confident
          that we can help you achieve a smile that brightens the day!
        </Text>

        {/* Before/After toggle */}
          <TouchableOpacity onPress={() => setShowAfter(!showAfter)} style={styles.imageWrapper}>
        <Image
          source={showAfter ? testimonial.afterImage : testimonial.beforeImage}
          style={styles.image}
        />
       
        <Text style={styles.tapHint}>Tap for more</Text>
    
      </TouchableOpacity>

        {/* Testimonial text */}
        <Text style={styles.quote}>
          “{testimonial.text}”
        </Text>
        <Text style={styles.author}>– {testimonial.name}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff"},
  header: {
    backgroundColor: '#FE5000BF',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    height: 100,
  },
  backBtn: { width: 40, height: 40, justifyContent: "center" },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: 'white',
    flex: 1,
    textAlign: 'center',
    letterSpacing: -0.24,
  },
  scrollContent: { paddingLeft: 40, paddingBottom: 40, paddingRight:40,paddingTop:30 },
  sectionHeading: {
    fontSize: 20,
    marginBottom: 12,
  },
  sectionHighlight: {
    color: "#FE5000",
    fontStyle: "italic",
    fontWeight: "500",
    textDecorationLine: "underline",
    fontFamily:'Inter',
    lineHeight:30,
    fontSize:24,
    letterSpacing: -0.24,
  },
  paragraph: {
    textAlign: 'left',
    fontSize: 18,
    lineHeight: 27,
    color: "#000",
    marginBottom: 20,
    fontFamily:'Poppins',
    fontWeight:400,
  },
  image: {
    width: 298,
    height: 298,
    borderRadius: 12,
    marginBottom: 18,
   alignItems: "center",
    
  },
  tapHint: {
    textAlign: "right",
    fontSize: 12,
    color: "#444",
    marginBottom: 20,
  },
  quote: {
    fontSize: 18,
    fontStyle: "italic",
    letterSpacing:-0.24,
    marginBottom: 10,
    fontFamily:'Poppins',
    fontWeight:300,
    lineHeight:27,
  },
  author: {
    fontSize: 18,
    fontWeight: "800",
    color: "#000",
    fontFamily:'Poppins'
  },
    imageWrapper: {
    alignItems: "center",   // centers the image
  },
});
