export interface ClinicService {
  id: string;
  title: string;
  hindiTitle: string;
  category: 'ortho' | 'general' | 'cosmetic' | 'surgery' | 'preventive';
  description: string;
  hindiDescription: string;
  benefits: string[];
  duration: string;
  painLevel: 'Zero Pain (Local Numb)' | 'Gentle / Minimal' | 'Completely Painless';
  iconName: string;
}

export interface PatientReview {
  id: string;
  name: string;
  rating: number;
  timeAgo: string;
  text: string;
  tag: string;
  treatment: string;
  localGuide?: boolean;
  ownerReply?: string;
}

export const CLINIC_INFO = {
  name: "Muskaan Dental Clinic",
  hindiName: "मुस्कान डेंटल क्लिनिक",
  doctor: {
    name: "Dr. Ankit Mahendru",
    title: "Chief Dental Surgeon & Orthodontist",
    qualifications: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    experience: "10+ Years of Clinical Excellence",
    about: "Dr. Ankit Mahendru is renowned across Bhatapara and surrounding districts for his gentle, patient-first approach. Specializing in advanced orthodontic braces, aligners, and painless root canal treatments, he ensures every patient leaves with a confident, radiant smile.",
    hindiAbout: "डॉ. अंकित महेंद्रू अपने सौम्य और सटीक इलाज के लिए जाने जाते हैं। तार द्वारा दांत सीधे करना, रूट कैनाल और स्माइल मेकओवर में विशेष दक्षता रखते हैं।"
  },
  phone: "+91 88893 33184",
  phoneRaw: "8889333184",
  address: "Baloda Bazar Rd, Matadewalaya Ward, Bhatapara, Chhattisgarh 493118, India",
  hindiAddress: "रेलवे फाटक के पास, बलौदा बाजार रोड, मातादेवालया वार्ड, भाटापारा (छ.ग.)",
  landmark: "Near Railway Crossing (रेलवे फाटक के पास), Baloda Bazar Road",
  plusCode: "PXMC+8G Bhatapara, Chhattisgarh",
  rating: 5.0,
  reviewCount: 77,
  timings: {
    weekdays: "Monday – Saturday: 10:00 AM – 2:00 PM & 4:30 PM – 7:30 PM",
    sunday: "Sunday: 10:30 AM – 1:30 PM (By Appointment Only)",
    status: "Open Daily · Closes 7:30 PM"
  },
  amenities: [
    "Wheelchair-accessible Entrance & Restroom",
    "Digital RVG X-Ray (Minimal Radiation)",
    "Class-B Autoclave 100% Sterilization",
    "Air-Conditioned Waiting Lounge",
    "Digital UPI & Cashless Payments (GPay, PhonePe)",
    "Painless Computerized Rotary RCT Equipment"
  ],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1904374.060705483!2d79.2039143!3d21.2127831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28615e61a58251%3A0x266af77c7d0f274f!2sMuskaan%20Dental%20Clinic!5e0!3m2!1sen!2snp!4v1794215298742!5m2!1sen!2snp",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Muskaan+Dental+Clinic+Bhatapara+Chhattisgarh",
  clinicCoverImg: "/assets/aistudio/image_cb0314cc.png",
  facilitiesBrochureImg: "/assets/aistudio/image_fee8d951.png"
};

export const CLINIC_SERVICES: ClinicService[] = [
  {
    id: "braces-ortho",
    title: "Braces & Invisible Aligners",
    hindiTitle: "तार व ब्रैकेट द्वारा टेढ़े-मेढ़े दांत सीधे करना",
    category: "ortho",
    description: "Correction of crooked, overlapping, or spaced teeth using modern metallic, ceramic braces, and custom clear aligners for kids, teens, and adults.",
    hindiDescription: "उन्नत मैटेलिक, सेरेमिक ब्रेसेस और पारदर्शी एलाइनर्स द्वारा दांतों को सही आकार और प्राकृतिक सीध देना।",
    benefits: [
      "Customized orthodontic treatment planning",
      "Metal & clear ceramic brackets available",
      "Invisible aligners without food restrictions",
      "Noticeable improvement within 4-6 months"
    ],
    duration: "Treatment customized (6 to 18 months)",
    painLevel: "Gentle / Minimal",
    iconName: "Smile"
  },
  {
    id: "root-canal",
    title: "Advanced Root Canal (RCT)",
    hindiTitle: "आधुनिक मशीनों द्वारा दर्द-रहित रूट कैनाल",
    category: "general",
    description: "Save deeply decayed or infected teeth without pain using computer-guided rotary endodontics and single-sitting or two-sitting procedures.",
    hindiDescription: "आधुनिक रोटरी तकनीक से बिना किसी दर्द के संक्रमित दांत को बचाएं।",
    benefits: [
      "Painless local anesthesia technique",
      "Modern rotary instruments for rapid relief",
      "Preserves your natural chewing tooth",
      "Digital X-ray confirmation at every step"
    ],
    duration: "Single or dual sitting (45 mins per session)",
    painLevel: "Completely Painless",
    iconName: "ShieldAlert"
  },
  {
    id: "implants-crowns",
    title: "Dental Implants & Zirconia Crowns",
    hindiTitle: "फिक्स दांत एवं मजबूत जिरकोनिया कैप",
    category: "general",
    description: "Permanent replacement for missing teeth using world-class titanium implants, bridges, and natural-looking ceramic or CAD-CAM Zirconia caps.",
    hindiDescription: "मजबूत टाइटेनियम इम्प्लांट और प्राकृतिक जैसे दिखने वाले जिरकोनिया क्राउन से स्थायी नए दांत।",
    benefits: [
      "Lifetime durability and natural appearance",
      "Chew apples, nuts, and normal food with confidence",
      "Zero harm to adjacent teeth",
      "Computerized color match to your smile"
    ],
    duration: "Consultation + customized placement",
    painLevel: "Zero Pain (Local Numb)",
    iconName: "Crown"
  },
  {
    id: "teeth-cleaning",
    title: "Ultrasonic Cleaning & Teeth Whitening",
    hindiTitle: "दांतों की सफाई व सफेदी (Scaling & Bleaching)",
    category: "cosmetic",
    description: "Remove tough tobacco/tea stains, tartar, and plaque with gentle ultrasonic waves, followed by professional polishing for sparkling white teeth.",
    hindiDescription: "अल्ट्रासोनिक स्केलिंग द्वारा दांतों पर जमा पीलापन, गुटखा/चाय के दाग हटाना और दांतों को चमकाना।",
    benefits: [
      "Eliminates bad breath and stops gum bleeding",
      "Restores natural brightness in just 30 minutes",
      "Safe on tooth enamel, zero enamel thinning",
      "Immediate noticeable results before events"
    ],
    duration: "30 – 45 minutes",
    painLevel: "Completely Painless",
    iconName: "Sparkles"
  },
  {
    id: "smile-makeover",
    title: "Cosmetic Dentistry & Smile Makeover",
    hindiTitle: "मुस्कान डिजाइनिंग / स्माइल मेकओवर",
    category: "cosmetic",
    description: "Transform chipped, spaced, or discolored teeth with porcelain veneers, composite bonding, and gum contouring for picture-perfect smiles.",
    hindiDescription: "टूटे या गैप वाले दांतों को वेनीर व बॉन्डिंग द्वारा एक खूबसूरत और मनमोहक मुस्कान देना।",
    benefits: [
      "Close gaps between front teeth seamlessly",
      "Fix chipped or worn-down edges",
      "Custom shade crafted to complement your face",
      "Quick transformation with lasting results"
    ],
    duration: "1 – 2 appointments",
    painLevel: "Completely Painless",
    iconName: "HeartHandshake"
  },
  {
    id: "tooth-extraction",
    title: "Painless Tooth & Wisdom Extraction",
    hindiTitle: "दर्द रहित दांत निकालना (Wisdom Extraction)",
    category: "surgery",
    description: "Gentle extraction of damaged or impacted third molars (wisdom teeth) with atraumatic techniques, minimal recovery time, and zero stress.",
    hindiDescription: "आधुनिक तकनीकों से बिना दर्द व बिना डर के अक्ल दाढ़ या खराब दांत सुरक्षित निकालना।",
    benefits: [
      "Gentle localized numbing so you feel zero sharp pain",
      "Atraumatic surgical instruments for fast healing",
      "Detailed post-care kit and prescription",
      "Quick relief from swollen jaws and migraine pain"
    ],
    duration: "20 – 40 minutes",
    painLevel: "Zero Pain (Local Numb)",
    iconName: "Activity"
  },
  {
    id: "composite-filling",
    title: "Tooth-Colored Laser / Light Fillings",
    hindiTitle: "लेज़र / लाइट क्योर फिलिंग",
    category: "general",
    description: "Aesthetic tooth-matching composite resin fillings that blend invisibly with your natural enamel to stop early cavities in their tracks.",
    hindiDescription: "दांत के रंग जैसी लेजर लाइट क्योर फिलिंग, जो दिखने में बिल्कुल प्राकृतिक लगे।",
    benefits: [
      "Invisibly matches natural tooth color",
      "Bonds strongly to prevent future decay",
      "Mercury-free and 100% bio-compatible",
      "Cured instantly under blue light"
    ],
    duration: "20 – 30 minutes per tooth",
    painLevel: "Completely Painless",
    iconName: "Zap"
  },
  {
    id: "dentures",
    title: "Complete & Flexible Dentures",
    hindiTitle: "फिक्स बत्तीसी एवं लचीली बत्तीसी (Dentures)",
    category: "general",
    description: "Comfortable, lightweight complete and partial dentures allowing seniors to eat, speak, and laugh without slips or sore spots.",
    hindiDescription: "बुजुर्गों के लिए आरामदायक, हल्के और फिट बैठने वाले पूर्ण और आंशिक कृत्रिम बत्तीसी।",
    benefits: [
      "Break-resistant flexible denture materials available",
      "Custom precision impressions for snug suction fit",
      "Restores speech clarity and facial youthful contour",
      "Easy to clean and maintain"
    ],
    duration: "3 – 4 precision fitting visits",
    painLevel: "Completely Painless",
    iconName: "Layers"
  },
  {
    id: "pediatric-care",
    title: "Pediatric Kids Dentistry & Fluoride",
    hindiTitle: "बच्चों के दांतों का संपूर्ण इलाज व फ्लोराइड",
    category: "preventive",
    description: "Friendly, fear-free dental visits for children including preventive fluoride varnish, cavity sealants, and gentle milk-teeth restorations.",
    hindiDescription: "बच्चों के लिए दोस्ताना माहौल में फ्लोराइड कोटिंग, कीड़ा लगने से बचाव व दर्द-रहित इलाज।",
    benefits: [
      "Gentle, playful approach to eliminate doctor fear",
      "Cavity prevention with deep pit sealants",
      "Habit-breaking counseling (thumb sucking, tongue thrust)",
      "Protects developing permanent adult teeth"
    ],
    duration: "20 – 30 minutes",
    painLevel: "Completely Painless",
    iconName: "Baby"
  },
  {
    id: "gum-care",
    title: "Pyorrhea & Bleeding Gum Treatment",
    hindiTitle: "मसूड़ों से खून आना एवं पायरिया का इलाज",
    category: "preventive",
    description: "Specialized deep root cleaning, pocket curettage, and antibacterial therapy to stop bleeding gums, loose teeth, and persistent bad odor.",
    hindiDescription: "मसूड़ों की सूजन, खून आना और पायरिया की आधुनिक दवाइयों व डीप स्केलिंग से रोकथाम।",
    benefits: [
      "Stops gum bleeding and tenderness",
      "Tightens loosened teeth before permanent bone loss",
      "Freshens breath permanently",
      "Complete home oral hygiene guidance"
    ],
    duration: "1 – 2 sessions",
    painLevel: "Gentle / Minimal",
    iconName: "CheckCircle"
  },
  {
    id: "osmf-mouth-care",
    title: "Mouth Opening & Oral Lesion Care (OSMF)",
    hindiTitle: "मुख न खुलना, मुंह में जलन, छाले एवं घाव का उपचार",
    category: "preventive",
    description: "Specialized clinical therapy for restricted mouth opening (Trismus / Oral Submucous Fibrosis from gutkha/areca nut), persistent mouth burning, recurrent ulcers, and oral cancer early screening.",
    hindiDescription: "गुटखा/सुपारी के कारण मुंह कम खुलने, मुंह में जलन, छाले और मुख कैंसर की प्राथमिक जांच व उपचार।",
    benefits: [
      "Improve restricted mouth opening gradually",
      "Relief from burning sensation when eating spicy food",
      "Early screening for suspicious oral lesions & cancer",
      "Medications and habit cessation support"
    ],
    duration: "Clinical evaluation + medication course",
    painLevel: "Completely Painless",
    iconName: "Activity"
  },
  {
    id: "fracture-trauma",
    title: "Jaw Fracture & Trauma Management",
    hindiTitle: "टूटे हुये जबड़े को तार लगाकर ठीक करना व आपातकालीन उपचार",
    category: "surgery",
    description: "Emergency fixation of jaw bone fractures using intermaxillary fixation (wiring), and restoration of half-broken front teeth to natural appearance.",
    hindiDescription: "चोट या दुर्घटना में टूटे जबड़े का तार लगाकर इलाज और टूटे दांतों को प्राकृतिक आकार देना।",
    benefits: [
      "Urgent emergency stabilization of jaw fractures",
      "Restores normal chewing and facial symmetry",
      "Aesthetic repair of broken or chipped teeth",
      "Expert surgical care in Bhatapara"
    ],
    duration: "Emergency procedure & follow-up",
    painLevel: "Zero Pain (Local Numb)",
    iconName: "ShieldAlert"
  }
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: "rev-1",
    name: "Roshni Dayalani",
    rating: 5,
    timeAgo: "3 months ago",
    text: "We truly appreciated the excellent service, gentle approach and attention to detail. The treatment was handled very smoothly, and we were completely satisfied with the results.",
    tag: "Gentle Care",
    treatment: "Complete Dental Care",
    ownerReply: "Thank you so much for your kind words! We are delighted to keep your smile healthy and bright."
  },
  {
    id: "rev-2",
    name: "Vibha Armo",
    rating: 5,
    timeAgo: "3 months ago",
    text: "My braces treatment went very smoothly, and I am very satisfied with the outcome. The doctor is highly skilled and always answered my questions patiently. The entire team was supportive throughout the treatment. Thank you for giving me a confident smile!",
    tag: "Orthodontics",
    treatment: "Braces & Smile Alignment",
    ownerReply: "Thank you Vibha! It was a pleasure crafting your beautiful confident smile."
  },
  {
    id: "rev-3",
    name: "Kishan Kumar",
    rating: 5,
    timeAgo: "A year ago",
    localGuide: true,
    text: "Very professional and skilled doctor, top to bottom. I recommend them more highly, Dr. Ankit Mahendru is so thorough and informative, and lets you know every step of the way what's going on so there are no surprises. Very caring staff as well. Thanks Dr. and the entire team!",
    tag: "Top Professional",
    treatment: "Dental Consultation & Procedure",
    ownerReply: "Thank you Kishan ji! Glad our transparent guidance made your visit comfortable."
  },
  {
    id: "rev-4",
    name: "Shweta Shobhwani",
    rating: 5,
    timeAgo: "3 months ago",
    text: "Had a wonderful experience of root canal! Great doctor, great services, kind and gentle behaviour. No pain at all during the entire process.",
    tag: "Root Canal",
    treatment: "Painless Rotary RCT",
    ownerReply: "Thank you Shweta! Ensuring pain-free root canals is always our highest priority."
  },
  {
    id: "rev-5",
    name: "Vanshita Verma",
    rating: 5,
    timeAgo: "2 weeks ago",
    text: "Had a great experience. Doctor and staff are really good... Must visit for anyone having dental problems in Bhatapara!",
    tag: "Highly Recommended",
    treatment: "Consultation & Cleaning"
  },
  {
    id: "rev-6",
    name: "Saraswati Sen",
    rating: 5,
    timeAgo: "7 months ago",
    text: "I am really thankful to Dr. He is so sweet and kind. I got my teeth back! I am so happy now thank you so much doctor.",
    tag: "Teeth Restoration",
    treatment: "Tooth Replacement & Crown",
    ownerReply: "Thank you Saraswati ji, your happy smile brings joy to our entire clinic team."
  },
  {
    id: "rev-7",
    name: "Prerna Sen",
    rating: 5,
    timeAgo: "11 months ago",
    text: "The doctor was so polite and treated me so well... I am very happy after visiting here. I advise you all to definitely visit here if you have any kind of dental problems.",
    tag: "Polite Doctor",
    treatment: "Dental Care"
  },
  {
    id: "rev-8",
    name: "Sapna Shobhwani",
    rating: 5,
    timeAgo: "10 months ago",
    text: "Had my orthodontics done from here, very satisfied with the services! Love my new smile 😊 Dr. Ankit is truly the best in Bhatapara.",
    tag: "Smile Makeover",
    treatment: "Orthodontic Realignment"
  },
  {
    id: "rev-9",
    name: "Jaiprakash Panjwani",
    rating: 5,
    timeAgo: "11 months ago",
    localGuide: true,
    text: "Very polite and great doctor. He talks and explains everything to patient regarding their situation with great patience.",
    tag: "Clear Explanation",
    treatment: "Patient Consultation"
  }
];

export const FAQS = [
  {
    q: "Is root canal treatment (RCT) really painless at Muskaan Dental Clinic?",
    a: "Yes, completely! With modern computerized rotary instruments, digital X-rays, and advanced localized numbness, you will not feel sharp pain during the procedure. Most patients in our reviews mention they felt relaxed and had zero pain throughout."
  },
  {
    q: "What are the clinic timings, and do I need prior appointment?",
    a: "We are open Monday through Saturday from 10:00 AM to 2:00 PM (Morning) and 4:30 PM to 7:30 PM (Evening). On Sunday, we are available from 10:30 AM to 1:30 PM for scheduled appointments. While walk-in patients are always attended to, booking an appointment via WhatsApp or phone avoids waiting time."
  },
  {
    q: "What types of braces does Dr. Ankit Mahendru offer?",
    a: "Dr. Ankit specializes in traditional high-precision metal brackets, tooth-colored clear ceramic brackets (less noticeable), and modern invisible clear aligners (removable trays). During your initial consultation, Dr. Ankit will examine your bite and recommend the optimal timeline."
  },
  {
    q: "How can I book an appointment through WhatsApp?",
    a: "You can click any 'Book on WhatsApp' button on this website, or use the quick scheduler form. It will create a ready-to-send message with your name and preferred time directly to +91 88893 33184. Dr. Ankit's team confirms the slot immediately."
  },
  {
    q: "What payment methods are accepted at the clinic?",
    a: "We accept all digital payment options including Google Pay (GPay), PhonePe, Paytm, UPI QR codes, Debit/Credit Cards, and Cash."
  },
  {
    q: "Is the clinic accessible for senior citizens or wheelchair users?",
    a: "Yes! Muskaan Dental Clinic features a wheelchair-accessible entrance, ground floor easy access, hygienic accessible washrooms, and comfortable waiting lounge chairs tailored for senior citizens."
  }
];
