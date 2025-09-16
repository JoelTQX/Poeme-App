import { Href, router } from 'expo-router';
import { ArrowLeft, ChevronDown, Facebook, Globe, Instagram, MessageCircle } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { testimonials } from '../data/testimonials';
  const handlePress1=() => {
    router.push('../Screens/about-us');
  };
/**
 * NOTE:
 * - This file has been refactored to exclusively use local image assets via `require(...)`.
 * - Update the require paths to match your actual project structure.
 * - Example folder structure assumed:
 *   ../../assets/images/
 *     ├── testimonials/
 *     │   ├── sarah.png
 *     │   ├── michael.png
 *     │   ├── emma.png
 *     │   ├── james.png
 *     │   ├── lisa.png
 *     │   └── david.png
 *     └── blog/
 *         ├── cleaning-aligners.png
 *         └── maintain-aligners.png
 */

interface TestimonialProps {
  source: ImageSourcePropType;
  name: string;
}

interface BlogPostProps {
  id:number;
  title: string;
  category: string;
  date: string;
  source: ImageSourcePropType;
  isLarge?: boolean;
 onPress?: () => void;
 route: Href;
}

interface FAQItemProps {
  question: string;
  answer: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ source }) => (
  <TouchableOpacity style={styles.testimonialCard}>
    <Image source={source} style={styles.testimonialImage} resizeMode="cover" />
  </TouchableOpacity>
);

const BlogPostCard: React.FC<BlogPostProps> = ({ title, category, date, source, isLarge = false,onPress}) => (
  <TouchableOpacity style={[styles.blogCard, isLarge && styles.largeBlogCard]} onPress={onPress}>
    <Image source={source} style={[styles.blogImage, isLarge && styles.largeBlogImage]} resizeMode="cover" />
    <View style={styles.blogContent}>
      <Text style={styles.blogTitle}>{title}</Text>
      <Text style={styles.blogCategory}>{category}</Text>
      <View style={styles.blogFooter}>
        <Text style={styles.blogDate}>{date}</Text>
        <TouchableOpacity style={styles.readMoreButton} onPress={onPress}>
          <Text style={styles.readMoreText}>Tap to Read more</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isExpanded, onToggle }) => (
  <TouchableOpacity style={styles.faqItem} onPress={onToggle}>
    <View style={styles.faqHeader}>
      <Text style={styles.faqQuestion}>{question}</Text>
      <ChevronDown
        size={20}
        color="#666"
        style={[styles.faqIcon, isExpanded && styles.faqIconExpanded]}
      />
    </View>
    {isExpanded && (
      <Text style={styles.faqAnswer}>{answer}</Text>
    )}
  </TouchableOpacity>
);

export default function DiscoverScreen() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // ===== Local images via require(...) =====
  
  const blogImages = {
    cleaningAligners: require('../../assets/images/blog1.png'),
    maintainAligners: require('../../assets/images/blog2.png'),
  } as const;


  const blogPosts: BlogPostProps[] = [
    {
      id:1,
      title: 'Cleaning Aligners Instructions',
      category: 'Advice, Guides, Tips',
      date: '01 Nov 2023',
      source: blogImages.cleaningAligners,
      isLarge: true,
      route:"../Screens/blog1"
  
    },
    {
      id:2,
      title: 'How to Maintain Your Aligners',
      category: 'Care, Maintenance',
      date: '28 Oct 2023',
      source: blogImages.maintainAligners,
      isLarge: false,
      route:'../Screens/about-us'
  
    },
  ];

  const faqs = [
    {
      question: 'How does it work?',
      answer:
        'Our clear aligners work by gradually shifting your teeth into the desired position using a series of custom-made, removable aligners. Each set is worn for about 2 weeks before moving to the next set in the series.',
    },
    {
      question: 'Are there hidden fees?',
      answer:
        'No, we believe in transparent pricing. All costs are clearly outlined upfront with no hidden fees. Your treatment plan will include all aligners, check-ups, and any necessary adjustments.',
    },
    {
      question: 'What if my teeth is really bad?',
      answer:
        'We can treat a wide range of cases, from simple to complex. During your consultation, our dentists will assess your specific situation and determine if clear aligners are right for you, or if alternative treatments might be more suitable.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Discover</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Filter Section */}
        <View style={styles.filterSection}>
          <Text style={styles.filterLabel}>Filter</Text>
          <View style={styles.filterButtons}>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Category</Text>
              <ChevronDown size={16} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Most Popular</Text>
              <ChevronDown size={16} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Date</Text>
              <ChevronDown size={16} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Testimonials Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Testimonials</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.testimonialsScroll}
            contentContainerStyle={styles.testimonialsContent}
          >
            {testimonials.map((t: { id: React.Key | null | undefined; thumbnail: ImageSourcePropType | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
              <TouchableOpacity
                key={t.id}
                style={styles.testimonialCard}
                onPress={() =>
                  router.push(`/Screens/testimonialPage?id=${t.id}`)
                }
              >
                <Image source={t.thumbnail} style={styles.testimonialImage} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Blog Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Blog</Text>
          {blogPosts.map((post, index) => (
           <BlogPostCard
              key={post.id}
              title={post.title}
              category={post.category}
              date={post.date}
              source={post.source}
              isLarge={post.isLarge}
              onPress={() => router.push(post.route)} id={0}/>
          ))}
        </View>

        {/* FAQs Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FAQs</Text>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isExpanded={expandedFAQ === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </View>

        {/* Social Media Links */}
        <View style={styles.socialSection}>
          <View style={styles.socialIcons}>
            <TouchableOpacity style={styles.socialIcon}>
              <Globe size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Facebook size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <MessageCircle size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Instagram size={24} color="#666" />
            </TouchableOpacity>
          </View>
          <Text style={styles.termsText}>Terms and Conditions</Text>
          <Text style={styles.privacyText}>Privacy Policy</Text>
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
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: 'white',
    flex: 1,
    textAlign: 'center',
    letterSpacing: -0.24,
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 16,
  },
  filterSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  filterLabel: {
    fontSize: 12,
    lineHeight:24,
    fontWeight: '500',
    color: '#000',
    marginBottom: 3,
    fontFamily: 'Inter',
  },
  filterButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  filterButton: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  filterButtonText: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Inter',
    lineHeight:24,
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#00205B',
    marginBottom: 8,
    fontFamily: 'Inter',
    letterSpacing:-0.24,
  },
  testimonialsScroll: {
    marginLeft: -20,
  },
  testimonialsContent: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  testimonialCard: {
    width: 130,
    height: 130,
    borderRadius: 20,
    marginRight: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  testimonialImage: {
    width: '100%',
    height: '100%',
  },
  blogCard: {
    backgroundColor: 'white',
    width:355,
    
    borderRadius: 16,
    marginBottom: 10,
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
  largeBlogCard: {
    marginBottom: 18,
  },
  blogImage: {
    width: '100%',
    height: 120,
  },
  largeBlogImage: {
    height: 137,
  },
  blogContent: {
    padding: 16,
  },
  blogTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#00205B',
    marginBottom: 8,
    fontFamily: 'Inter',
    letterSpacing:-0.24,
  },
  blogCategory: {
    fontSize: 12,
    color: '#00205B',
    fontWeight:400,
    marginBottom: 12,
    fontFamily: 'Inter',
    letterSpacing:-0.24,
  },
  blogFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blogDate: {
    fontSize: 12,
    color: '#00205B',
    fontFamily: 'Inter',
    letterSpacing:-0.24,
  },
  readMoreButton: {
    backgroundColor: '#FE5000BF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  readMoreText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  faqItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    flex: 1,
    fontFamily: 'Poppins',
  },
  faqIcon: {
    marginLeft: 12,
  },
  faqIconExpanded: {
    transform: [{ rotate: '180deg' }],
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
    marginTop: 12,
    lineHeight: 20,
    fontFamily: 'Poppins',
  },
  socialSection: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingBottom: 100,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 24,
  },
  socialIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  termsText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontFamily: 'Poppins',
  },
  privacyText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins',
  },
});
