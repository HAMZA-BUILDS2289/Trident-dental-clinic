// =====================================================================
//  TRIDENT DENTAL CLINIC — single source of truth for the whole site.
//  Edit text, numbers, services, reviews and blog posts here.
// =====================================================================

export const BUSINESS = {
  name: "Trident Dental Clinic",
  short: "Trident",
  tagline: "A premium health care clinic committed to providing accessible, professional and patient-centered dental care",
  rating: 4.7,
  reviewCount: 15,
  address: "Plot 109, Ahmadu Bello Way, Cadastral zone B09, Kado, Abuja 900108, Federal Capital Territory",
  addressShort: "Plot 109, Ahmadu Bello Way, Kado, Abuja",
  plusCode: "3CQM+P6, Ndawuse, Kado",
  phoneDisplay: "0704 084 8555",
  phoneTel: "+2347040848555",
  whatsappNumber: "2347040848555",
  mission:
    "Trident Dental Clinic is a premium health care clinic committed to providing accessible, professional and patient-centered dental care. From your first consultation to your final treatment, our friendly team welcomes you into a calm, clean and beautifully designed space — wheelchair-accessible, with free on-site parking — so great dental care feels easy.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

/** Build a WhatsApp link with a pre-filled message. Every booking button uses this. */
export function wa(message?: string) {
  const text =
    message ||
    "Hello Trident Dental Clinic, I want to book an appointment. Please let me know the available dates and times.";
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  "Plot 109, Ahmadu Bello Way, Kado, Abuja"
)}&output=embed`;
export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Trident Dental Clinic, Plot 109, Ahmadu Bello Way, Kado, Abuja"
)}`;

// ---------------------------------------------------------------------
// Media (cropped from the clinic's own photos & videos)
// ---------------------------------------------------------------------
export const media = {
  teamVideo: "/videos/team-welcome.mp4",
  teamPoster: "/images/team-welcome-poster.jpg",
  patientVideo: "/videos/happy-patient.mp4",
  patientPoster: "/images/happy-patient-poster.jpg",
  team: ["/images/team-1.jpg", "/images/team-2.jpg", "/images/team-3.jpg", "/images/team-4.jpg"],
};

// ---------------------------------------------------------------------
// Numbers shown in the stats band. All verifiable facts.
// ---------------------------------------------------------------------
export const stats = [
  { value: 4.7, decimals: 1, suffix: "★", label: "Average Google rating" },
  { value: 15, decimals: 0, suffix: "", label: "Google patient reviews" },
  { value: 8, decimals: 0, suffix: "", label: "Specialist treatments" },
  { value: 1, decimals: 0, suffix: "", label: "Roof: consultation to aftercare" },
];

export const attributes = [
  { icon: "building", title: "On-site services", text: "Every treatment is carried out right here in our clinic." },
  { icon: "door", title: "Wheelchair accessible", text: "Accessible car park, entrance and seating for every patient." },
  { icon: "car", title: "Free parking", text: "Free on-site parking — pull in and walk straight in." },
  { icon: "stethoscope", title: "Clean & calm", text: "Patients praise our clean, comfortable, welcoming environment." },
  { icon: "heart", title: "Friendly team", text: "Reviewers call our staff friendly, professional and kind." },
  { icon: "star", title: "4.7★ on Google", text: "Rated 4.7 out of 5 across 15 patient reviews." },
];

export const why = [
  { icon: "heart", title: "Patient-centred care", text: "Your goals, your pace. We listen first, then build a plan around you — never a one-size-fits-all script." },
  { icon: "shield", title: "Professional & kind", text: "Patients describe our staff as friendly, professional and considerate — from consultation to treatment." },
  { icon: "gem", title: "Premium, calming space", text: "A beautifully designed clinic with warm lighting, wooden floors and comfortable lounges. Visitors say it looks “straight out of Pinterest”." },
  { icon: "layers", title: "Aesthetic + clinical", text: "One clinic for both your oral health and your smile — whitening, veneers, braces and implants alongside everyday care." },
  { icon: "siren", title: "Emergency care", text: "Severe toothache, a broken or knocked-out tooth? Call us — we make room for dental emergencies." },
  { icon: "star", title: "4.7★ patient-rated", text: "Rated 4.7 out of 5 on Google, with patients calling us “the best of best in Abuja”." },
];

export const steps = [
  { n: "01", title: "Message us on WhatsApp", text: "Tap any Book Appointment button. Your message is pre-written — just hit send and we’ll reply with available times." },
  { n: "02", title: "Visit the clinic", text: "Come in for a gentle, thorough consultation. We explain what we see in plain language, with no pressure." },
  { n: "03", title: "Get your personal plan", text: "Receive a treatment plan built around your teeth, your budget and your goals — then relax, we’ve got you." },
];

export const packages = [
  {
    name: "Smile Check",
    badge: "Start here",
    items: ["Full dental consultation", "Scaling & polishing", "Personal oral-health plan", "Home-care guidance"],
    message: "Hello Trident Dental Clinic, I'd like a quote for the Smile Check package (consultation + scaling & polishing).",
  },
  {
    name: "Radiant Smile",
    badge: "Most popular",
    items: ["Professional teeth whitening", "Scaling & polishing", "Shade-match consultation", "Aftercare advice"],
    message: "Hello Trident Dental Clinic, I'd like a quote for the Radiant Smile package (teeth whitening + scaling & polishing).",
    featured: true,
  },
  {
    name: "Smile Makeover",
    badge: "Complete",
    items: ["Veneers consultation", "Braces & implants assessment", "Step-by-step treatment roadmap", "Priority scheduling"],
    message: "Hello Trident Dental Clinic, I'd like a quote for the Smile Makeover package (veneers / braces / implants consultation).",
  },
];

export type Review = { name: string; text: string; stars: number };

export const reviews: Review[] = [
  { name: "fauziya yahya", stars: 5, text: "I had a great experience at trident dental clinic. The staff are friendly, professional, and welcoming, and the environment is clean and comfortable." },
  { name: "Chidiogo Agu", stars: 5, text: "Wonderful experience. Staff were very kind and considerate I would recommend their services" },
  { name: "Adoronke Eniola", stars: 5, text: "I had a really good experience at this dental clinic From consultation to treatment the staff were friendly and welcoming. Best dental clinic" },
  { name: "Jisola Solomon", stars: 5, text: "The best of best in Abuja" },
  { name: "Baba Sunday Timothy", stars: 5, text: "The exceptional clinic all there service is super good you to will testify when visit them" },
  { name: "Maris Amadi", stars: 3, text: "Excellent clinical and aesthetic clinic. Staffs are very professional and kind" },
];

export const faqs = [
  { q: "How do I book an appointment?", a: "Tap any Book Appointment button and your WhatsApp opens with a pre-filled message to us (0704 084 8555). Send it and we’ll confirm a date and time." },
  { q: "Do you handle dental emergencies?", a: "Yes. Emergency care is part of what we do. For severe pain, swelling, a broken tooth or a knocked-out tooth, call us immediately on 0704 084 8555. If swelling affects your breathing or swallowing, go to the nearest hospital emergency unit." },
  { q: "I’m afraid of the dentist — can you help?", a: "You’re not alone, and our team is used to it. Tell us about your worries when you book and we’ll plan a gentle, unhurried visit around them." },
  { q: "Do you treat children?", a: "Yes — pediatric dentistry is one of our services. We keep visits short, friendly and positive so children build healthy habits from the very first appointment." },
  { q: "Is the clinic wheelchair accessible?", a: "Yes. We have a wheelchair-accessible car park, entrance and seating, and an on-site toilet." },
  { q: "Is there parking?", a: "Yes — free on-site parking is available at the clinic on Ahmadu Bello Way, Kado." },
  { q: "How much will my treatment cost?", a: "Every mouth is different, so we quote after a short consultation. Message us on WhatsApp to get started and we’ll guide you on what to expect." },
  { q: "Where are you located?", a: "Plot 109, Ahmadu Bello Way, Cadastral zone B09, Kado, Abuja. Tap Get Directions on the Contact page to open the map." },
];

// ---------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------
export type Service = {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  short: string;
  overview: string;
  goodFor: string[];
  steps: { title: string; text: string }[];
  benefits: string[];
  visits: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    icon: "sparkles",
    tagline: "Brighter, whiter, camera-ready.",
    short: "Lift years of tea, coffee and everyday staining for a visibly brighter smile.",
    overview:
      "Professional teeth whitening lifts stains that brushing alone can’t touch. Done under dental supervision, it brightens your natural teeth evenly after we’ve checked that your teeth and gums are healthy enough for it.",
    goodFor: [
      "Stains from tea, coffee, cola or red wine",
      "Teeth that have gradually darkened with age",
      "A confidence boost before a wedding, interview or big event",
      "Anyone with healthy teeth and gums who wants a brighter shade",
    ],
    steps: [
      { title: "Check & shade match", text: "We examine your teeth and gums and record your starting shade." },
      { title: "Protect & whiten", text: "Your gums are protected while a professional whitening agent is applied to your teeth." },
      { title: "Aftercare plan", text: "We show you how to keep your results looking fresh for as long as possible." },
    ],
    benefits: ["Noticeably brighter teeth", "Supervised by a dental professional", "Evenly applied for a natural look", "Pairs well with scaling & polishing"],
    visits: "Discussed at your consultation",
    faqs: [
      { q: "Does whitening damage teeth?", a: "When done professionally on healthy teeth, whitening is considered safe. Some people notice temporary sensitivity, which we’ll help you manage." },
      { q: "Will it whiten crowns, veneers or fillings?", a: "No — whitening works on natural tooth enamel only. We’ll talk through how existing restorations may affect the final colour match." },
    ],
  },
  {
    slug: "scaling-and-polishing",
    title: "Scaling & Polishing",
    icon: "droplets",
    tagline: "A deep clean your toothbrush can’t give you.",
    short: "Remove hardened tartar and surface stains, and leave your teeth smooth and fresh.",
    overview:
      "Even excellent brushing can’t remove tartar (hardened plaque). Scaling removes it from above and just below the gumline, and polishing smooths the tooth surface so stains and plaque find it harder to stick.",
    goodFor: ["Bleeding or puffy gums", "Persistent bad breath", "Visible yellow or brown build-up near the gumline", "A regular six-monthly dental clean"],
    steps: [
      { title: "Examine", text: "We check your teeth and gums and show you where build-up is hiding." },
      { title: "Scale", text: "Tartar and plaque are carefully removed from your teeth and along the gumline." },
      { title: "Polish & advise", text: "Your teeth are polished smooth and we share simple tips for keeping them clean at home." },
    ],
    benefits: ["Fresher breath", "Healthier, calmer gums", "A smoother, brighter-looking smile", "Helps prevent bigger problems later"],
    visits: "Discussed at your consultation",
    faqs: [
      { q: "How often should I have a scale and polish?", a: "Many people benefit from one every six months, but we’ll advise on what suits your gums and habits." },
      { q: "Does it hurt?", a: "Most patients find it comfortable. Tell us if you’re sensitive and we’ll adapt how we work." },
    ],
  },
  {
    slug: "braces",
    title: "Braces",
    icon: "ruler",
    tagline: "Straighter teeth, a smile you’re proud of.",
    short: "Correct crowding, gaps and bite problems for a straighter, healthier, more confident smile.",
    overview:
      "Braces gently move teeth into better positions over time. Beyond looks, straighter teeth are easier to clean and can improve how your bite works. We begin with a thorough assessment and explain the options that suit you.",
    goodFor: ["Crowded or overlapping teeth", "Gaps between teeth", "Bite problems such as overbite or underbite", "Teens and adults who want straighter teeth"],
    steps: [
      { title: "Assessment", text: "We examine your teeth and bite and talk through what you’d like to change." },
      { title: "Your plan", text: "We explain the treatment options, the expected process and what it involves." },
      { title: "Fitting & reviews", text: "Braces are fitted, then adjusted at regular reviews until your teeth are in position." },
    ],
    benefits: ["Straighter, more even smile", "Easier cleaning between teeth", "Improved bite", "Plan tailored to you"],
    visits: "Ongoing treatment with regular reviews",
    faqs: [
      { q: "Am I too old for braces?", a: "Not necessarily — many adults have orthodontic treatment. An assessment will tell us what’s possible." },
      { q: "How long does treatment take?", a: "It varies from person to person. We’ll give you an idea after your assessment." },
    ],
  },
  {
    slug: "dental-implants",
    title: "Implants",
    icon: "puzzle",
    tagline: "Replace missing teeth, restore your smile.",
    short: "A long-term way to replace missing teeth so you can bite, speak and smile with confidence.",
    overview:
      "A dental implant replaces the root of a missing tooth, holding a replacement tooth firmly in place. We’ll assess your gums and jawbone, explain whether implants suit you, and discuss alternatives such as bridges or dentures.",
    goodFor: ["One or several missing teeth", "Gaps affecting chewing or confidence", "People who want a fixed, natural-looking replacement", "Anyone unhappy with loose dentures"],
    steps: [
      { title: "Consultation", text: "We examine your mouth, review your health and talk through your options." },
      { title: "Planning", text: "We plan your treatment step by step so you know exactly what to expect." },
      { title: "Placement & restoration", text: "The implant is placed and, once healed, topped with your replacement tooth." },
    ],
    benefits: ["Natural look and feel", "Helps restore chewing and speech", "Does not rely on neighbouring teeth", "Planned around you"],
    visits: "Staged treatment over several visits",
    faqs: [
      { q: "Is everyone suitable for implants?", a: "Not always. Gum health, jawbone and general health all matter, which is why we start with a full assessment." },
      { q: "What are the alternatives?", a: "Bridges and dentures can also replace missing teeth. We’ll explain the pros and cons of each." },
    ],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal",
    icon: "heartpulse",
    tagline: "Save your tooth, end the pain.",
    short: "Treat an infected or badly damaged tooth from the inside so you can keep your natural tooth.",
    overview:
      "When the inside of a tooth becomes infected or inflamed, a root canal removes the damaged tissue, cleans and seals the tooth, and usually allows you to keep it. Saving a natural tooth is almost always better than losing it.",
    goodFor: ["Severe or lingering toothache", "Pain with hot or cold that doesn’t settle", "Swelling or a gum boil near a tooth", "A deeply decayed or cracked tooth"],
    steps: [
      { title: "Diagnose & numb", text: "We confirm the problem and make sure the area is comfortably numb." },
      { title: "Clean & shape", text: "The infected tissue is removed and the inside of the tooth is carefully cleaned." },
      { title: "Seal & restore", text: "The tooth is sealed and then protected with a filling or crown." },
    ],
    benefits: ["Relieves tooth pain", "Keeps your natural tooth", "Prevents infection spreading", "Comfortable with proper numbing"],
    visits: "One or more visits depending on the tooth",
    faqs: [
      { q: "Is a root canal painful?", a: "With modern anaesthesia it should feel similar to having a filling. The pain people fear usually comes from the infection, not the treatment." },
      { q: "Do I need a crown afterwards?", a: "Often yes, to protect the tooth. We’ll advise based on how much of your tooth remains." },
    ],
  },
  {
    slug: "veneers",
    title: "Veneers",
    icon: "gem",
    tagline: "The smile makeover, shaped to you.",
    short: "Thin, tooth-coloured shells that reshape and brighten the front of your teeth.",
    overview:
      "Veneers are thin, custom shells bonded to the front of your teeth to change their colour, shape, size or alignment. They’re a popular cosmetic option for chipped, stained, uneven or gapped front teeth, and we’ll help you decide whether they’re right for you.",
    goodFor: ["Chipped or worn front teeth", "Stains that whitening can’t shift", "Small gaps or uneven teeth", "A complete smile makeover"],
    steps: [
      { title: "Smile consultation", text: "We discuss the look you want and check your teeth are suitable." },
      { title: "Prepare & design", text: "Your teeth are prepared and your veneers are designed to suit your face and smile." },
      { title: "Fit & finish", text: "Your veneers are bonded, adjusted and polished for a natural finish." },
    ],
    benefits: ["Transforms shape, colour and symmetry", "Natural-looking result", "Tailored to your face", "Boosts confidence"],
    visits: "Usually two or more visits",
    faqs: [
      { q: "Are veneers reversible?", a: "Preparing the tooth usually removes a little enamel, so veneers are considered a long-term commitment. We’ll explain this clearly beforehand." },
      { q: "How do I look after them?", a: "Brush, floss and have regular check-ups as you would for natural teeth. We’ll give you specific advice at your fitting." },
    ],
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    icon: "baby",
    tagline: "Happy visits, healthy little smiles.",
    short: "Gentle, friendly dental care that helps children feel safe and build lifelong healthy habits.",
    overview:
      "Good habits start young. Our approach to children’s dentistry is calm, playful and unhurried, so your child learns that the dentist is nothing to fear. We check growth, spot problems early and teach brushing the fun way.",
    goodFor: ["A child’s first dental visit", "Toothache or cavities in baby or adult teeth", "Children who are nervous", "Regular check-ups and cleaning"],
    steps: [
      { title: "Say hello", text: "We let your child get used to the clinic and meet the team before anything happens." },
      { title: "Gentle check", text: "A quick, gentle look at their teeth and gums, explained in kid-friendly words." },
      { title: "Home-care tips", text: "We show your child — and you — how to brush and what to eat for strong teeth." },
    ],
    benefits: ["Positive first experiences", "Early detection of problems", "Builds good habits", "Calm, child-friendly approach"],
    visits: "Short, friendly visits",
    faqs: [
      { q: "When should my child first see a dentist?", a: "Many dentists suggest around the time the first teeth appear or by the first birthday. Ask us and we’ll guide you." },
      { q: "My child is scared. What can I do?", a: "Stay positive, avoid scary words and let us know in advance. We’ll take things slowly." },
    ],
  },
  {
    slug: "emergency-care",
    title: "Emergency Care",
    icon: "siren",
    tagline: "Pain can’t wait — neither do we.",
    short: "Fast help for severe toothache, swelling, broken or knocked-out teeth.",
    overview:
      "A dental emergency is stressful. If you have severe pain, swelling, a broken or knocked-out tooth, or a lost filling or crown, call us right away on 0704 084 8555 and we’ll do our best to see you as soon as possible.",
    goodFor: ["Severe or sudden toothache", "Facial or gum swelling", "A broken, cracked or knocked-out tooth", "Bleeding that won’t stop after a dental procedure"],
    steps: [
      { title: "Call us", text: "Phone 0704 084 8555 and tell us what’s happened." },
      { title: "Quick advice", text: "We’ll tell you what to do on the way — for example, how to keep a knocked-out tooth safe." },
      { title: "Relief & plan", text: "We relieve your pain, treat the problem and explain any follow-up care." },
    ],
    benefits: ["Fast pain relief", "Clear step-by-step advice", "Protects the tooth where possible", "Follow-up care planned"],
    visits: "Call to arrange as soon as possible",
    faqs: [
      { q: "What if my tooth is knocked out?", a: "Hold it by the crown (not the root), rinse gently without scrubbing, keep it moist — in milk or inside your cheek — and call us immediately." },
      { q: "When should I go to hospital instead?", a: "If swelling affects your breathing or swallowing, or after a serious head or facial injury, go to the nearest hospital emergency unit straight away." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

// ---------------------------------------------------------------------
// BLOG
// ---------------------------------------------------------------------
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  icon: string;
  from: string;
  to: string;
  related: string; // service slug
  body: { h?: string; p: string }[];
};

export const posts: Post[] = [
  {
    slug: "5-ways-to-keep-your-teeth-white",
    title: "5 Ways To Keep Your Teeth White",
    excerpt: "Simple daily habits — and one professional treatment — that keep your smile bright for longer.",
    category: "Whitening",
    date: "2026-10-02",
    readTime: "4 min read",
    icon: "sparkles",
    from: "#00AEEF",
    to: "#0B4DA2",
    related: "teeth-whitening",
    body: [
      { p: "A bright smile isn’t about luck — it’s mostly about habits. Here are five practical ways to keep your teeth looking their whitest." },
      { h: "1. Brush properly, twice a day", p: "Brush for two minutes, morning and night, with a soft brush and fluoride toothpaste. Plaque and surface stains build up daily, and consistent brushing is your first defence." },
      { h: "2. Rinse after stain-heavy drinks", p: "Tea, coffee, red wine and cola can all stain enamel. You don’t have to give them up — rinse your mouth with water afterwards, and consider using a straw for cold drinks." },
      { h: "3. Don’t skip professional cleaning", p: "Tartar and deep surface stains can’t be brushed away. Scaling and polishing every six months or so removes them and leaves teeth looking noticeably brighter." },
      { h: "4. Avoid tobacco", p: "Smoking and chewing tobacco are among the fastest ways to stain teeth — and they harm your gums too." },
      { h: "5. Consider professional whitening", p: "When you want a bigger change, dentist-supervised whitening is more controlled and even than DIY products. We first check your teeth and gums are healthy, and explain what to expect — for example, whitening won’t change the colour of fillings, crowns or veneers." },
    ],
  },
  {
    slug: "dental-implants-what-to-know",
    title: "Dental Implants: What You Should Know First",
    excerpt: "Thinking about replacing a missing tooth? Here’s how implants work and what to ask your dentist.",
    category: "Implants",
    date: "2026-09-26",
    readTime: "5 min read",
    icon: "puzzle",
    from: "#0B4DA2",
    to: "#082C5E",
    related: "dental-implants",
    body: [
      { p: "Losing a tooth affects more than your smile — it can change how you chew, speak and feel about yourself. Dental implants are one way to replace it." },
      { h: "What is a dental implant?", p: "An implant is a small post that replaces the root of a missing tooth. Once it has healed in the jaw, a replacement tooth is attached on top." },
      { h: "Who is a good candidate?", p: "You need reasonably healthy gums and enough supporting bone, and your general health matters too. That’s why an assessment always comes first." },
      { h: "What are the alternatives?", p: "Bridges and dentures can also replace missing teeth. Each has advantages and drawbacks in comfort, cost and how they affect neighbouring teeth." },
      { h: "Questions to ask", p: "Ask how many visits to expect, how long healing takes, how the final tooth will be matched to your smile, and how to care for it. A good dentist will answer every question clearly." },
    ],
  },
  {
    slug: "veneers-vs-whitening",
    title: "Veneers vs Whitening: Which Is Right for You?",
    excerpt: "Both brighten a smile — but they work very differently. Here’s how to choose.",
    category: "Cosmetic",
    date: "2026-09-19",
    readTime: "4 min read",
    icon: "gem",
    from: "#C8A95B",
    to: "#0B4DA2",
    related: "veneers",
    body: [
      { p: "Both whitening and veneers can transform how your smile looks, but they solve different problems." },
      { h: "Whitening: for colour", p: "Whitening lightens natural enamel. It’s a good choice if your teeth are healthy and well-shaped but stained or dull." },
      { h: "Veneers: for colour and shape", p: "Veneers are thin shells bonded to the front of teeth. They can change colour, shape, length and small alignment issues in one treatment." },
      { h: "Things to consider", p: "Whitening is less invasive and doesn’t change tooth shape. Veneers involve preparing the tooth and are a longer-term commitment. Whitening also can’t lighten existing veneers or crowns." },
      { h: "Not sure? Start with a consultation", p: "The best answer depends on your teeth, your goals and your budget. A consultation lets us show you what’s realistic." },
    ],
  },
  {
    slug: "your-childs-first-dental-visit",
    title: "Your Child’s First Dental Visit: A Parent’s Guide",
    excerpt: "How to prepare your little one for a calm, positive first appointment.",
    category: "Pediatric",
    date: "2026-09-12",
    readTime: "4 min read",
    icon: "baby",
    from: "#4DC8F4",
    to: "#0A3F85",
    related: "pediatric-dentistry",
    body: [
      { p: "A child’s first dental visit sets the tone for years of oral health. With a little preparation, it can be fun." },
      { h: "Start early", p: "Many dentists suggest a first visit around the time the first teeth appear, or by the first birthday." },
      { h: "Keep it positive", p: "Avoid words like “hurt” or “needle”. Talk about the dentist as someone who counts teeth and keeps them strong." },
      { h: "Play pretend", p: "Take turns being the dentist at home with a soft toy and a toothbrush." },
      { h: "What happens at the visit", p: "We say hello, let your child explore, take a gentle look at their teeth and show them how to brush. Short and friendly is the goal." },
    ],
  },
  {
    slug: "dental-emergency-what-to-do-first",
    title: "Dental Emergency: What To Do First",
    excerpt: "Toothache, broken tooth or knocked-out tooth? Quick steps that can save your smile.",
    category: "Emergency",
    date: "2026-09-05",
    readTime: "3 min read",
    icon: "siren",
    from: "#00AEEF",
    to: "#082C5E",
    related: "emergency-care",
    body: [
      { p: "Dental emergencies are stressful, but knowing the first steps helps. Call us on 0704 084 8555 as early as you can." },
      { h: "Severe toothache", p: "Rinse your mouth with warm water and gently floss to remove any trapped food. Don’t put aspirin directly on the gum. Then call us." },
      { h: "Knocked-out tooth", p: "Pick it up by the crown, not the root. Rinse gently without scrubbing, keep it moist in milk or inside your cheek, and see a dentist immediately." },
      { h: "Broken or cracked tooth", p: "Rinse your mouth and save any pieces. A cold compress on the outside of the cheek can ease swelling." },
      { h: "When to go to hospital", p: "If swelling affects your breathing or swallowing, or after serious head or facial injury, go to the nearest hospital emergency unit." },
    ],
  },
  {
    slug: "overcoming-dental-anxiety",
    title: "Afraid of the Dentist? You’re Not Alone",
    excerpt: "Practical ways to feel calmer — and what a comfortable clinic can do to help.",
    category: "Comfort",
    date: "2026-08-29",
    readTime: "4 min read",
    icon: "heart",
    from: "#0B4DA2",
    to: "#00AEEF",
    related: "scaling-and-polishing",
    body: [
      { p: "“I’m afraid of the dental clinic” is something dentists hear every day. The good news is that fear can be managed." },
      { h: "Tell us how you feel", p: "Let your dentist know before you sit down. A good team will slow down, explain each step and agree a signal for breaks." },
      { h: "Choose a calm environment", p: "A clean, quiet, welcoming space really helps. Patients often tell us the clinic feels more like a lounge than a surgery." },
      { h: "Breathe and bring comfort", p: "Slow breathing, music in headphones or bringing a friend can all help." },
      { h: "Start small", p: "A simple check-up or clean is a gentle way to rebuild trust before any bigger treatment." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

// ---------------------------------------------------------------------
// GALLERY — add more photos by dropping files in /public/images and listing them here.
// ---------------------------------------------------------------------
export type GalleryCategory = "Reception & Lounge" | "Surgery & Equipment" | "Smile Results";
export type GalleryItem = { src: string; title: string; category: GalleryCategory };

export const galleryCategories = ["All", "Reception & Lounge", "Surgery & Equipment", "Smile Results"] as const;

export const gallery: GalleryItem[] = [
  { src: "/images/reception-lounge.jpg", title: "Reception & curved lounge sofa", category: "Reception & Lounge" },
  { src: "/images/tv-wall.jpg", title: "Feature wall and waiting lounge", category: "Reception & Lounge" },
  { src: "/images/front-desk.jpg", title: "The front desk", category: "Reception & Lounge" },
  { src: "/images/waiting-area.jpg", title: "Quiet seating area", category: "Reception & Lounge" },
  { src: "/images/lobby-entrance.jpg", title: "Lobby with natural light", category: "Reception & Lounge" },
  { src: "/images/lounge-armchair.jpg", title: "Comfortable lounge seating", category: "Reception & Lounge" },
  { src: "/images/restroom.jpg", title: "Our designer restroom", category: "Reception & Lounge" },
  { src: "/images/dental-chair.jpg", title: "Treatment chair and delivery unit", category: "Surgery & Equipment" },
  { src: "/images/surgery-room.jpg", title: "Our surgery, bright with natural light", category: "Surgery & Equipment" },
  { src: "/images/happy-patient-smile.jpg", title: "A happy Trident patient", category: "Smile Results" },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
