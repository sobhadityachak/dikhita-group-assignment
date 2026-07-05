export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Businesses', href: '#businesses' },
  { label: 'Impact', href: '#impact' },
  { label: 'Inquiry', href: '#inquiry' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  {
    value: 'Rs. 900 CR',
    label: 'Approx. group turnover',
    note: 'Across diversified business operations',
  },
  {
    value: '120',
    label: 'Current employees',
    note: 'A growing team across Assam',
  },
  {
    value: '250',
    label: 'FY-end payroll goal',
    note: 'Planned employee strength',
  },
  {
    value: '6',
    label: 'Core business sectors',
    note: 'One group, multiple growth engines',
  },
];

export const values = [
  {
    title: 'Integrity',
    text: 'Trust, commitment, and long-term relationships guide how the group works with customers, partners, and communities.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Innovation',
    text: 'Modern thinking, digital practices, and a Gen Z workforce help the group adapt across fast-changing industries.',
    icon: 'Zap',
  },
  {
    title: 'Opportunity',
    text: 'The group is committed to income generation, livelihood opportunities, and sustainable community progress across Assam.',
    icon: 'Handshake',
  },
  {
    title: 'Responsibility',
    text: 'Every division is built around customer satisfaction, professional operations, and meaningful value creation.',
    icon: 'Target',
  },
];

export const businesses = [
  {
    id: 'telecom',
    title: 'Telecom',
    company: 'Dikhita Infocom Private Limited',
    icon: 'RadioTower',
    tagline: 'Reliable communication distribution across Assam.',
    description:
      'The telecom arm of Dikhita Group delivers communication solutions, SIM distribution, digital recharge support, and connectivity services across Assam.',
    overview: [
      'Since 2019, Dikhita Infocom Private Limited has operated as an authorized trade partner for renowned telecom brands including Jio Infocom, VI Ltd, Airtel, and Tata Play.',
      'The division focuses on essential services such as internet connectivity and voice communication while supporting employees, vendors, trade partners, and customers through dependable operations.',
      'Its service mantra, "Speed, Sure, Smile", reflects a culture of prompt, reliable, and customer-friendly support.',
    ],
    services: [
      'SIM and telecom product distribution',
      'Digital recharge and plan support',
      'Connectivity solutions for customers and trade partners',
      'AI-ready and digital-first telecom transformation planning',
    ],
    locations: ['State-wide Assam operations', 'Trade partner network across multiple local markets'],
    partners: [
      { name: 'Jio', href: 'https://www.jio.com/' },
      { name: 'VI', href: 'https://www.myvi.in/' },
      { name: 'Airtel', href: 'https://www.airtel.in/' },
      { name: 'Tata Play', href: 'https://www.tataplay.com/' },
    ],
    gallery: ['Trade partner counters', 'Recharge support desks', 'Connectivity service points'],
    accent: 'teal',
  },
  {
    id: 'automobile',
    title: 'Automobile',
    company: 'Dikhita Automobile Private Limited',
    icon: 'Car',
    tagline: 'Premium mobility experiences and future-ready automobile operations.',
    description:
      'The automotive division delivers quality sales, service, and ownership experiences through trusted mobility brands in Assam.',
    overview: [
      'Dikhita Automobile Private Limited has quickly built a strong footprint in a competitive industry through experienced professionals and a customer-centric operating model.',
      'The division currently operates authorized dealership businesses of MG Motors and Renault in Dibrugarh, Assam.',
      'A Jawa Motorcycle showroom is set to open in Guwahati, with dealership partnerships for brands such as Hyundai, Ultraviolette Bikes, and Mahindra in the pipeline.',
    ],
    services: [
      'Authorized dealership sales operations',
      'Passenger vehicle service and mechanical repairs',
      'Advanced bodyshop repair support',
      'EV-focused mobility planning and customer education',
    ],
    locations: ['Dibrugarh, Assam', 'Upcoming showroom presence in Guwahati'],
    partners: [
      { name: 'MG Motor', href: 'https://www.mgmotor.co.in/' },
      { name: 'Renault', href: 'https://www.renault.co.in/' },
      { name: 'Jawa Motorcycles', href: 'https://www.jawamotorcycles.com/' },
      { name: 'Hyundai', href: 'https://www.hyundai.com/in/en' },
      { name: 'Mahindra', href: 'https://auto.mahindra.com/' },
      { name: 'Ultraviolette', href: 'https://www.ultraviolette.com/' },
    ],
    gallery: ['Showroom floors', 'Customer lounge areas', 'Workshop and service bays'],
    accent: 'gold',
  },
  {
    id: 'jewellery',
    title: 'Jewellery',
    company: 'Dikhita Retail Private Limited',
    icon: 'Gem',
    tagline: 'Elegance, celebration, and trusted craftsmanship.',
    description:
      'The jewellery venture is being built to make premium design, trusted quality, and meaningful celebration accessible to customers across Assam.',
    overview: [
      'Dikhita Retail Private Limited is entering the jewellery industry with a focus on elegance, craftsmanship, trusted quality, and price accessibility.',
      'An exclusive KISNA Diamond & Jewellery showroom is set to open at Six Mile, Guwahati.',
      'The venture aims to serve weddings, festivals, personal milestones, and gifting moments with a wide range of design and pricing options.',
    ],
    services: [
      'Diamond and gold jewellery retail',
      'Design-led collections for multiple budgets',
      'Festival, wedding, and milestone gifting support',
      'Future franchise partnerships with national jewellery brands',
    ],
    locations: ['Six Mile, Guwahati'],
    partners: [{ name: 'KISNA Diamond & Jewellery', href: 'https://www.kisna.com/' }],
    gallery: ['Jewellery display zones', 'Consultation counters', 'Festive collection showcases'],
    accent: 'rose',
  },
  {
    id: 'food-beverage',
    title: 'Food & Beverage',
    company: 'Dikhita Retail Private Limited',
    icon: 'CupSoda',
    tagline: 'Quality products, trusted distribution, and modern consumer experiences.',
    description:
      'The Food & Beverage division is expanding through beverage distribution and future franchise partnerships with recognized food brands.',
    overview: [
      'Dikhita Retail Private Limited is active in Coca-Cola soft drink, beverage, and associated product distribution in Guwahati.',
      'The business is supported by operational discipline, timely supply management, and a growing distribution network.',
      'Future plans include franchise outlets and partnerships with globally recognized food and beverage brands.',
    ],
    services: [
      'Beverage and associated product distribution',
      'Retail partner supply management',
      'Future cafe and quick-service food concepts',
      'Consumer experience and hospitality expansion',
    ],
    locations: ['Guwahati, Assam'],
    partners: [{ name: 'Coca-Cola India', href: 'https://www.coca-cola.com/in/en' }],
    gallery: ['Distribution hubs', 'Retail partner supply points', 'Future food experience concepts'],
    accent: 'coral',
  },
  {
    id: 'retail-mart',
    title: 'Retail Mart',
    company: 'Dikhita Retail Private Limited',
    icon: 'ShoppingCart',
    tagline: 'Convenient, affordable, and quality shopping experiences.',
    description:
      'The Retail Mart business operates DSupermarket stores with a balanced portfolio of daily essentials, value products, and premium categories.',
    overview: [
      'Dikhita Retail Private Limited is building an organized retail presence through DSupermarket stores in Rani Area, Guwahati and Bangali Para, Kamrup Rural.',
      'The stores serve groceries, beverages, household essentials, packaged foods, personal care, lifestyle products, and everyday consumer needs.',
      'The group is planning four new locations before the end of the year and is preparing to engage with FirstCry as an authorized franchisee in Assam.',
    ],
    services: [
      'Daily essentials and grocery retail',
      'Economic, value, premium, and branded product categories',
      'Customer-friendly organized store experience',
      'Expansion planning and franchise-led retail growth',
    ],
    locations: ['Rani Area, Guwahati', 'Bangali Para, Kamrup Rural'],
    partners: [{ name: 'FirstCry', href: 'https://www.firstcry.com/' }],
    gallery: ['Store aisles', 'Checkout counters', 'Everyday essentials displays'],
    accent: 'green',
  },
  {
    id: 'construction',
    title: 'Construction',
    company: 'Dikhita Construction Private Limited',
    icon: 'HardHat',
    tagline: 'Durable infrastructure and progressive regional development.',
    description:
      'The construction venture contributes to modernization, infrastructure growth, and livelihood creation through disciplined project execution.',
    overview: [
      'Dikhita Construction Private Limited is comparatively new, but it is growing through dedication, operational discipline, and continuous learning.',
      'Its current focus areas include the Irrigation Sector, PWD Sector, and Real Estate Sector.',
      'The company aims to create quality infrastructure while generating employment, income, and stronger communities across Assam.',
    ],
    services: [
      'Infrastructure and development project execution',
      'Irrigation sector participation',
      'PWD sector participation',
      'Real estate and modernization-focused construction',
    ],
    locations: ['Assam project presence', 'Irrigation, PWD, and real estate sector opportunities'],
    partners: [],
    gallery: ['Project sites', 'Technical team activity', 'Infrastructure progress zones'],
    accent: 'blue',
  },
];

export const contact = {
  email: 'support@dikhita.com',
  phone: '+91 84861 61999',
  address:
    '1st & 2nd Floor, Dikhita Corporate Office, Dharapur, Near ITBP & BSNL HQ, Kamrup(M), Assam, Pin-781014',
  cin: 'U72900AS2023PTC024175',
  domain: 'www.dikhita.com',
};
