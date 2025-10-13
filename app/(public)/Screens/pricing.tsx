import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
interface CompetitorCardProps {
  brand: string;
  price: string;
  description: string;
  isPoeme?: boolean;
}

interface PackageCardProps {
  title: string;
  price: string;
  duration: string;
  percentage: string;
}

const CompetitorCard: React.FC<CompetitorCardProps> = ({
  brand,
  price,
  description,
  isPoeme = false,
}) => {
  if (isPoeme) {
    return (
      <>
        <LinearGradient
          colors={["#FE500080", "#FE5000CC"]} // adjust to match your Figma stops
          locations={[0, 1]}
          style={[styles.competitorCard, styles.poemeCard]}
        >
          <View style={styles.bestValueBadge}>
            <Text style={styles.bestValueText}>BEST VALUE</Text>
          </View>

          <View style={styles.poemeHeader}>
            {/* LEFT COLUMN */}
            <View style={styles.poemeLeftCol}>
              <Text style={styles.poemeTitle}>Poème Aligners</Text>
              <Text style={styles.poemePrice}>S$1,688 - 4288</Text>

              <View style={styles.poemeFeatureRow}>
                <Image
                  source={require("../../../assets/images/check.png")}
                  style={styles.checkIcon}
                  resizeMode="contain"
                />
                <Text style={styles.poemeFeature}>Simple & Complex Cases</Text>
              </View>

              <View style={styles.poemeFeatureRow}>
                <Image
                  source={require("../../../assets/images/check.png")}
                  style={styles.checkIcon}
                  resizeMode="contain"
                />
                <Text style={styles.poemeFeature}>Honest Pricing</Text>
              </View>

              <View style={styles.poemeFeatureRow}>
                <Image
                  source={require("../../../assets/images/check.png")}
                  style={styles.checkIcon}
                  resizeMode="contain"
                />
                <Text style={styles.poemeFeature}>Excellent Reviews</Text>
              </View>
            </View>

            {/* RIGHT IMAGE */}
            <Image
              source={require("../../../assets/images/aligners.png")}
              style={styles.alignersImage}
              resizeMode="contain"
            />
          </View>
        </LinearGradient>

        {/* Paragraph AFTER the orange card */}
        <View style={styles.poemeDescriptionContainer}>
          <Text style={styles.poemeDescriptionOutside}>
            <Text style={styles.boldText}>Poème Clear Aligners</Text> is more
            than just a brand; we are a committed team to help you achieve your
            dream smile faster, honestly and of the best quality. Our aligners
            are effective and medically certified to be BPA-free, which is safe
            for everyday use. Most importantly, our services are affordable –
            everyone is deserving of a better smile!
          </Text>
        </View>
      </>
    );
  }

  // non-Poème brands (single white card)
  // Inside CompetitorCard (non-Poème return part)
  return (
    <View style={styles.competitorCard}>
      <View style={styles.competitorRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.brandName}>{brand}</Text>
          <Text style={styles.brandDescription}>{description}</Text>
          <Text style={styles.brandPrice}>{price}</Text>
        </View>

        {/* Teeth image on the right */}
        <Image
          source={require("../../../assets/images/teeth.png")}
          style={styles.teethImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  price,
  duration,
  percentage,
}) => (
  <LinearGradient
    colors={["#FE500080", "#FE5000CC"]}
    locations={[0, 1]}
    style={styles.packageCard}
  >
    <Text style={styles.packageTitle}>{title}</Text>
    <Text style={styles.packagePrice}>{price}</Text>
    <Text style={styles.packageDuration}>{duration}</Text>
    <Text style={styles.packagePercentage}>({percentage})</Text>
  </LinearGradient>
);

export default function PricingScreen() {
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
        <Text style={styles.headerTitle}>Pricing</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Poème vs Other Brands</Text>

          <CompetitorCard
            brand="Poème Aligners"
            price="S$1,688 - 4288"
            description=""
            isPoeme={true}
          />

          <CompetitorCard
            brand="Brand A"
            price="S$3,288 & Above"
            description="Simple & Complex Cases"
          />

          <CompetitorCard
            brand="Brand B"
            price="S$1,950 - 6,000"
            description="Simple & Complex Cases"
          />

          <CompetitorCard
            brand="Brand C"
            price="S$2,650 - 4,490"
            description="Simple Cases Only"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Poème Packages</Text>

          <PackageCard
            title="Poème Lite"
            price="$1,688"
            duration="3 to 5 months"
            percentage="10% of Poème cases"
          />

          <PackageCard
            title="Poème Lite Plus"
            price="$1,898"
            duration="6 to 9 months"
            percentage="40% of Poème cases"
          />

          <PackageCard
            title="Poème Standard"
            price="$2,288"
            duration="10 to 12 months"
            percentage="40% of Poème cases"
          />

          <PackageCard
            title="Poème Complex"
            price="$2,998"
            duration="13 to 17 months"
            percentage="8% of Poème cases"
          />

          <PackageCard
            title="Poème Complex Plus"
            price="$4,288"
            duration="22 months and above"
            percentage="2% of Poème cases"
          />

          <LinearGradient
            colors={["#FE5000CC", "#FE5000CC"]}
            locations={[0, 1]}
            style={styles.ctaButton}
          >
            <TouchableOpacity
              style={styles.ctaButtonInner}
              onPress={() => router.push("../Screens/smileAssessmentPage1")}
            >
              <Text style={styles.ctaButtonText}>
                Take Your Free Smile Assessment
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          <Text style={styles.disclaimer}>
            * Please note that the treatment durations mentioned are typical
            timelines and individual cases may vary.
          </Text>

          <Text style={styles.footerText}>
            Take your first step towards your radiant smile today and submit
            your smile assessment. Our experienced team are here to make your
            dream smile a reality.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  poemeDescriptionOutside: {
    fontSize: 14,
    color: "#111827", // dark text
    lineHeight: 20,
    fontFamily: "Poppins",
    letterSpacing: -0.24,
  },
  container: {
    flex: 1,
    backgroundColor: "#E5E7EB",
  },
  header: {
    backgroundColor: "#FE5000BF",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    height: 100,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    fontFamily: "Poppins",
    color: "white",
    flex: 1,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    paddingHorizontal: 17,
  },
  section: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#00205B",
    marginBottom: 10,
    fontFamily: "Poppins",
    letterSpacing: -0.24,
  },
  alignersImage: {
    width: 114, // make bigger
    height: 71,
    marginLeft: 12, // spacing from text
    alignSelf: "flex-end", // align bottom of card
  },
  competitorCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  poemeCard: {
    borderRadius: 16,
    position: "relative",
    padding: 20,
    marginBottom: 16,
  },
  bestValueBadge: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#00205B",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  bestValueText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Poppins",
  },
  poemeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  poemeTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "black",
    marginBottom: 8,
    fontFamily: "Manrope",
  },
  poemePrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 12,
    fontFamily: "Poppins",
  },
  poemeFeature: {
    fontSize: 14,
    color: "white",
    marginBottom: 4,
    fontFamily: "Manrope",
  },
  toothImageContainer: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  toothImage: {
    width: 40,
    height: 40,
  },
  poemeDescription: {
    fontSize: 14,
    color: "white",
    lineHeight: 20,
    fontFamily: "Poppins",
    letterSpacing: -0.24,
  },
  boldText: {
    fontWeight: "700",
    color: "#FE5000BF",
  },
  brandName: {
    fontSize: 18,
    fontWeight: "400",
    color: "#1F2937",
    marginBottom: 8,
    fontFamily: "Manrope",
  },
  brandDescription: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 12,
    fontFamily: "Manrope",
  },
  brandPrice: {
    fontSize: 20,
    fontWeight: "regular",
    color: "#1F2937",
    fontFamily: "Manrope",
  },
  packageCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  packageTitle: {
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    marginBottom: 8,
  },
  packagePrice: {
    fontSize: 30,
    fontWeight: "700",
    color: "#FFEDD5",
    marginBottom: 8,
    fontFamily: "Inter",
  },
  packageDuration: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    marginBottom: 4,
    fontFamily: "Inter",
  },
  packagePercentage: {
    fontSize: 14,
    color: "#FFEDD5",
    fontFamily: "Inter",
  },
  ctaButton: {
    borderRadius: 30,
    marginTop: 8,
    marginBottom: 24,
  },
  ctaButtonInner: {
    padding: 20,
    alignItems: "center",
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    fontFamily: "Poppins",
  },
  disclaimer: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 16,
    fontFamily: "Poppins",
    letterSpacing: -0.24,
  },
  footerText: {
    fontSize: 12,
    color: "#6B7280",
    lineHeight: 20,
    fontFamily: "Poppins",
    letterSpacing: -0.24,
  },
  poemeLeftCol: {
    flex: 1,
    paddingRight: 12,
  },

  poemeFeatureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },

  checkIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    tintColor: "lightgreen", // keeps the check white; remove if your PNG is already colored
  },
  competitorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  teethImage: {
    width: 74,
    height: 74,
    marginLeft: 40,
  },
  poemeDescriptionContainer: {
    marginTop: 5,
    marginBottom: 20,
    paddingHorizontal: 4, // keeps alignment with rest of text
  },
});
