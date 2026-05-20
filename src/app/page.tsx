"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, Star, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Shop",
          id: "#products",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Velzix"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="Clutches That Define Your Style"
      description="Velzix crafts premium ladies clutches designed for the modern woman who refuses to compromise on elegance or quality. Carry confidence to every occasion."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@sarahj",
          testimonial: "The perfect accessory for my gala. Absolutely stunning.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-transgender-person-looking-into-mirror-front-view_23-2148827032.jpg?_wi=1",
          imageAlt: "elegant lady holding clutch",
        },
        {
          name: "Elena M.",
          handle: "@elenam",
          testimonial: "Exquisite quality and timeless design.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/bag-hanging-from-furniture-item-indoors_23-2151073521.jpg",
          imageAlt: "elegant lady holding clutch",
        },
        {
          name: "Chloe B.",
          handle: "@chloeb",
          testimonial: "Velzix clutches always turn heads at social events.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/back-view-artisan-holding-tools_23-2150104789.jpg?_wi=1",
          imageAlt: "elegant lady holding clutch",
        },
        {
          name: "Maya K.",
          handle: "@mayak",
          testimonial: "Sophisticated, durable, and truly elegant.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-beautiful-woman-sea-cafe-eating-pancakes-cocktail-smoothie-sunglasses-flirty-resort-style-fashionable-outfit-smiling-marine-colors-dress_285396-4237.jpg?_wi=1",
          imageAlt: "elegant lady holding clutch",
        },
        {
          name: "Sophia R.",
          handle: "@sophiar",
          testimonial: "Unmatched craftsmanship. Love my clutch!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/leather-red-texture_1388-745.jpg?_wi=1",
          imageAlt: "elegant lady holding clutch",
        },
      ]}
      buttons={[
        {
          text: "Shop Clutches Now",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-transgender-person-looking-into-mirror-front-view_23-2148827032.jpg?_wi=2"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-stylish-blonde-woman-posing-near-palm-trees-winter-time-wearing-leather-jacket-retro-trendy-sunglasses-cap-long-earrings-soft-colors_291049-579.jpg",
          alt: "Sarah J.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/tanned-woman-stylish-glasses-is-smiling-covering-her-mouth-portrait-girl-with-red-lipstick-dressed-trendy-oversized-sweater_197531-26557.jpg",
          alt: "Elena M.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/studio-close-up-fashion-portrait-pretty-blond-woman-stylish-top-linen-shorts-posing-purple-background_273443-5388.jpg",
          alt: "Chloe B.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-sexy-stylish-woman-walking-street-blue-suit-wearing-sunglasses-sunny-summer-day_285396-7819.jpg",
          alt: "Maya K.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/blonde-woman-talking-phone_23-2148660693.jpg",
          alt: "Sophia R.",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Luxury Craftsmanship",
        },
        {
          type: "text",
          text: "Timeless Design",
        },
        {
          type: "text",
          text: "Premium Materials",
        },
        {
          type: "text",
          text: "Exclusive Edition",
        },
        {
          type: "text",
          text: "Modern Elegance",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Crafted for Confidence"
      metrics={[
        {
          icon: Award,
          label: "Luxury Standard",
          value: "100%",
        },
        {
          icon: Star,
          label: "Happy Clients",
          value: "10k+",
        },
        {
          icon: Zap,
          label: "Design Years",
          value: "15",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Premium Materials",
          tags: [
            "Leather",
            "Craftsmanship",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/back-view-artisan-holding-tools_23-2150104789.jpg?_wi=2",
        },
        {
          id: "f2",
          title: "Versatile Elegance",
          tags: [
            "Modern",
            "Style",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-beautiful-woman-sea-cafe-eating-pancakes-cocktail-smoothie-sunglasses-flirty-resort-style-fashionable-outfit-smiling-marine-colors-dress_285396-4237.jpg?_wi=2",
        },
        {
          id: "f3",
          title: "Timeless Design",
          tags: [
            "Classic",
            "Durable",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/leather-red-texture_1388-745.jpg?_wi=2",
        },
      ]}
      title="Why Choose Velzix?"
      description="Excellence in every stitch for the modern, elegant woman."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Classic Evening Clutch",
          price: "$295",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-luxurious-arrangement-table_23-2148229209.jpg",
        },
        {
          id: "p2",
          name: "Satin Gold Clutch",
          price: "$345",
          imageSrc: "http://img.b2bpic.net/free-photo/clutch-with-ghost_23-2147680167.jpg",
        },
        {
          id: "p3",
          name: "Velvet Noir Clutch",
          price: "$275",
          imageSrc: "http://img.b2bpic.net/free-photo/antique-hand-bag-layout-with-place-text-jewellery-background-mockup-banner-fashion-accessories_460848-12976.jpg",
        },
        {
          id: "p4",
          name: "Crystal Embellished Clutch",
          price: "$450",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-elegant-beautiful-woman-sitting-vintage-cafe-black-velvet-dress-evening-gown-rich-stylish-lady-elegant-fashion-trend-holding-golden-purse-hands_285396-7234.jpg",
        },
        {
          id: "p5",
          name: "Suede Minimal Clutch",
          price: "$310",
          imageSrc: "http://img.b2bpic.net/free-photo/gold-chain-beautiful-flower-arrangement_23-2149836474.jpg",
        },
        {
          id: "p6",
          name: "Silk Floral Clutch",
          price: "$290",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-minimalistic-bowls_23-2149483975.jpg",
        },
      ]}
      title="Our Collection"
      description="Explore our curated selection of luxury clutches."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Vogue",
        "Harper's Bazaar",
        "Elle",
        "Glamour",
        "Cosmopolitan",
        "Marie Claire",
        "InStyle",
      ]}
      title="Seen in Top Magazines"
      description="As featured in global fashion publications."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Velzix redefined what a clutch means for my daily style. Truly exceptional piece that blends utility with pure luxury."
      rating={5}
      author="Isabella Rossi"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-fashion-stylish-brunette-woman-model-with-evening-makeup-red-lips-white-jacket_158538-11533.jpg",
          alt: "Isabella",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-woman-paying-with-nfc-device_23-2150689991.jpg",
          alt: "Maria",
        },
        {
          src: "http://img.b2bpic.net/free-photo/human-modern-technology-concept-portrait-handsome-young-caucasian-student-black-hat-white-shirt-surfing-internet-his-smart-phone-enjoying-free-wireless-connection-lunch_273609-1933.jpg",
          alt: "Claire",
        },
        {
          src: "http://img.b2bpic.net/free-photo/attractive-happy-young-bearded-man-trendy-hat-texting-messages-via-social-networks-browsing-internet-using-free-wifi-his-electronic-device-coffee-break-restaurant_273609-1934.jpg",
          alt: "Liza",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-excited-woman-holding-credit-card_171337-4087.jpg",
          alt: "Anna",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you ship worldwide?",
          content: "Yes, we ship globally.",
        },
        {
          id: "q2",
          title: "What is the return policy?",
          content: "We offer a 30-day hassle-free return window.",
        },
        {
          id: "q3",
          title: "Are materials sustainable?",
          content: "We prioritize eco-conscious and high-quality leather sources.",
        },
      ]}
      sideTitle="Questions? We're Here."
      sideDescription="Find answers to our most common queries below."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-animated",
      }}
      text="Ready to own your next statement piece? Contact our concierge team for personal shopping assistance."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Velzix"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Clutches",
              href: "#products",
            },
            {
              label: "New Arrivals",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#",
            },
            {
              label: "Shipping",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Velzix Luxury Accessories."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
