import SEO from '../components/SEO';
import ShopHero from '../components/shop/ShopHero';
import ShopProductsSection from '../components/shop/ShopProductsSection';
import ShopWhyChooseUs from '../components/shop/ShopWhyChooseUs';
import ShopProcessSteps from '../components/shop/ShopProcessSteps';
import ShopPlanningGuide from '../components/shop/ShopPlanningGuide';
import ShopChandigarhLocal from '../components/shop/ShopChandigarhLocal';
import ShopContactSection from '../components/shop/ShopContactSection';

export default function Home() {
  return (
    <>
      <SEO 
        title="नई दुकान के लिए शॉप रैक और काउंटर – Dilip Wood Works, चंडीगढ़"
        description="नई दुकान खोल रहे हैं? सही रैक और काउंटर के साथ करें शुरुआत। किराना स्टोर, ग्रोसरी शॉप, जनरल स्टोर और रिटेल दुकानों के लिए उपयोगी शॉप रैक और काउंटर। Dilip Wood Works, सरंगपुर, चंडीगढ़। फोन: +91 9872703528"
        canonical="/"
      />

      {/* 1. मुख्य शीर्षक, उप-शीर्षक व परिचय */}
      <ShopHero />

      {/* 2. नई दुकानों के लिए हमारे प्रोडक्ट (किराना, ग्रोसरी, बिलिंग काउंटर, जनरल स्टोर) */}
      <ShopProductsSection />

      {/* 3. Dilip Wood Works को क्यों चुनें? (5 मुख्य कारण) */}
      <ShopWhyChooseUs />

      {/* 4. नई दुकान के लिए रैक और काउंटर कैसे बनवाएं? (3 चरण) */}
      <ShopProcessSteps />

      {/* 5. नई दुकान की तैयारी को बनाएं आसान (योजना व टिप्स) */}
      <ShopPlanningGuide />

      {/* 6. चंडीगढ़ और आसपास के दुकानदारों के लिए (वर्कशॉप विवरण व फोटो शेयरिंग) */}
      <ShopChandigarhLocal />

      {/* 7. नई दुकान खोल रहे हैं? रैक और काउंटर के लिए संपर्क करें (संपर्क, पता, समय व कॉल टू एक्शन) */}
      <ShopContactSection />
    </>
  );
}
