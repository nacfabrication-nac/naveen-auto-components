import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, 'dist');

const routesMeta = [
  {
    path: '/',
    title: 'Heavy Engineering Fabrication & Storage Tank Manufacturer in Chennai | Naveen Auto Components',
    desc: 'Naveen Auto Components — ISO 9001:2015 certified heavy engineering fabrication company with 2 manufacturing units in Chennai & Cuddalore. Storage Tanks, Steam Pipeline Ducts, PEB Structural Fabrication, Rail Coach Components, Air Ducts & Material Handling Bins.',
    keywords: 'heavy engineering fabrication Chennai, storage tank manufacturer Tamil Nadu, PEB structural fabrication Chennai, steam pipeline fabrication, pressure vessel manufacturer Tamil Nadu'
  },
  {
    path: '/about',
    title: 'About Naveen Auto Components | ISO 9001:2015 Heavy Fabrication Manufacturer',
    desc: 'Learn about Naveen Auto Components, an ISO 9001:2015 certified heavy engineering fabrication company with 2 plants in Chennai & Cuddalore.',
    keywords: 'About Naveen Auto Components, NAC company profile, heavy engineering manufacturer Chennai, heavy fabrication Cuddalore, ISO 9001:2015 metal fabrication'
  },
  {
    path: '/services',
    title: 'Heavy Fabrication Products & Manufacturing Capabilities | Naveen Auto Components',
    desc: 'Explore heavy engineering fabrication products by Naveen Auto Components: Storage tanks, steam pipeline ducts, PEB structural steel, rail coach parts, air blowers & material handling bins.',
    keywords: 'heavy fabrication services Chennai, metal fabrication capabilities Tamil Nadu, storage tank fabrication, steam pipeline ducting, PEB structural steelwork'
  },
  {
    path: '/services/storage-tanks',
    title: 'Storage Tank Manufacturer in Chennai & Tamil Nadu | Heavy Fabrication',
    desc: 'ISO 9001:2015 certified storage tank manufacturer in Chennai & Cuddalore. Custom MS/SS tanks for water, condensate, flash tanks & pressure vessels. IS 2825 compliant.',
    keywords: 'storage tank manufacturer Chennai, pressure vessel fabrication Tamil Nadu, MS SS storage tank fabrication, IS 2825 pressure vessel, condensate tank manufacturer'
  },
  {
    path: '/services/pipeline-ducts',
    title: 'Steam Pipeline Duct & Header Pipeline Fabrication in Chennai | NAC',
    desc: 'Expert steam distribution pipeline duct and header pipeline fabrication in Chennai & Cuddalore. IS 3589 / IS 1239 compliant.',
    keywords: 'steam distribution pipeline duct fabrication Chennai, header pipeline manufacturer Tamil Nadu, steam pipeline fabrication, IS 3589 pipe fabrication'
  },
  {
    path: '/services/peb-structural',
    title: 'PEB Structural Steel Fabrication in Chennai & Cuddalore | IS 2062 Certified',
    desc: 'Expert Pre-Engineered Building (PEB) structural steel fabrication in Chennai & Cuddalore. IS 2062 Grade steel beams, columns, handrails & cooling fan guards.',
    keywords: 'PEB structural fabrication Chennai, Pre-Engineered Building steel manufacturer Tamil Nadu, IS 2062 structural steel fabrication'
  },
  {
    path: '/services/rail-bus-coach',
    title: 'Rail & Bus Coach Component Fabrication in Chennai | Sheet Metal Parts',
    desc: 'Precision rail and bus coach component fabrication in Chennai & Cuddalore. CNC laser cutting & press brake folding for Indian railways and coach builders.',
    keywords: 'rail coach component fabrication Chennai, bus body sheet metal parts Tamil Nadu, railway coach parts manufacturer Chennai'
  },
  {
    path: '/services/air-duct-blower',
    title: 'Industrial Air Duct & Blower Housing Fabrication in Chennai | NAC',
    desc: 'High-capacity industrial air duct and centrifugal blower housing fabrication in Chennai & Cuddalore. OEM partner for Airflow & NADI Industrial Fans.',
    keywords: 'air duct fabrication Chennai, industrial blower housing manufacturer Tamil Nadu, centrifugal blower fabrication, IS 655 sheet metal ductwork'
  },
  {
    path: '/services/heavy-handling-logistics',
    title: 'Material Handling Bins & EOT Crane Fabrication in Chennai | NAC',
    desc: 'Turnkey material handling bins and heat treatment bins fabrication in Chennai & Cuddalore. 10 MT EOT overhead crane capacity & 1 Lakh sq.ft open staging yards.',
    keywords: 'material handling bins fabrication Chennai, heat treatment bins manufacturer Tamil Nadu, EOT crane fabrication Chennai, heavy product logistics'
  },
  {
    path: '/heavy-fabrication-thirumullaivoyal-chennai',
    title: 'Heavy Engineering Fabrication in Thirumullaivoyal, Chennai | NAC',
    desc: 'ISO 9001:2015 heavy engineering fabrication unit in SIDCO Women\'s Industrial Park, Thirumullaivoyal, Chennai. 10 MT EOT crane, 6kW laser cutting, 16mm plate rolling.',
    keywords: 'heavy fabrication Thirumullaivoyal Chennai, SIDCO Women Industrial Park fabrication, metal plate rolling Thirumullaivoyal'
  },
  {
    path: '/storage-tank-manufacturer-tamil-nadu',
    title: 'Storage Tank Manufacturer in Tamil Nadu | MS & SS Vessels | NAC',
    desc: 'ISO 9001:2015 storage tank manufacturer supplying Tamil Nadu industries — Chennai, Cuddalore, SIPCOT, Hosur, Trichy. MS & SS storage tanks to IS 2825 / ASME Sec VIII.',
    keywords: 'storage tank manufacturer Tamil Nadu, pressure vessel fabrication Tamil Nadu, MS storage tank Chennai, SS 316 storage tank Cuddalore'
  },
  {
    path: '/facilities',
    title: 'Factory Machinery Specs & Infrastructure | Naveen Auto Components',
    desc: 'State-of-the-art CNC machinery specs at Naveen Auto Components: 6kW Fiber Laser (2.5m x 6.5m), 16mm Plate Rolling, 8m Press Brake, and 10 MT EOT Overhead Crane.',
    keywords: 'machinery specs Naveen Auto Components, CNC laser cutting Chennai SIDCO, heavy plate rolling machine 16mm, press brake 8m, EOT crane 10 MT'
  },
  {
    path: '/projects',
    title: 'Executed Engineering Projects & Client Works | Naveen Auto Components',
    desc: 'Browse executed heavy fabrication projects by Naveen Auto Components for AIRFLOW, ENEXIO POWER COOLING, C.DOCTOR, ON LOAD GEARS, and Ability Enterprises.',
    keywords: 'heavy engineering project gallery, executed fabrication works Chennai, storage tank projects Tamil Nadu, steam pipeline duct projects'
  },
  {
    path: '/clients',
    title: 'Institutional Clients & Key Partners | Naveen Auto Components',
    desc: 'Trusted manufacturing and fabrication partner for AIRFLOW, C.DOCTOR, ENEXIO POWER COOLING, ON LOAD GEARS, and NADI INDUSTRIAL FANS.',
    keywords: 'Naveen Auto Components clients, AIRFLOW supplier, ENEXIO power cooling fabrication partner, C Doctor company vendor'
  },
  {
    path: '/blog',
    title: 'Heavy Fabrication News & Engineering Insights | Naveen Auto Components',
    desc: 'Technical articles and heavy engineering fabrication insights from Naveen Auto Components in Chennai & Cuddalore.',
    keywords: 'Naveen Auto Components blog, heavy engineering articles Chennai, metal fabrication news Cuddalore'
  },
  {
    path: '/blog/guide-to-industrial-storage-tank-fabrication-chennai',
    title: 'Ultimate Guide to Industrial Storage Tank & Pressure Vessel Fabrication in Tamil Nadu',
    desc: 'Comprehensive guide to industrial storage tank Heavy Fabrication in Chennai and Cuddalore. Learn about plate rolling, dish head forming & hydrostatic testing.',
    keywords: 'storage tank fabrication guide Chennai, pressure vessel plate rolling, dish head forming Tamil Nadu'
  },
  {
    path: '/blog/steam-distribution-pipeline-duct-manufacturing',
    title: 'Manufacturing Steam Distribution Pipeline Ducts & Header Pipelines for Power Plants',
    desc: 'Discover how steam distribution ducts, header pipelines, and bracing stands undergo Heavy Fabrication in Chennai and Cuddalore for power cooling plants.',
    keywords: 'steam distribution duct manufacturing, header pipeline fabrication, power plant ducting'
  },
  {
    path: '/blog/peb-structural-steel-fabrication-standards',
    title: 'PEB Structural Steel Fabrication: Standards, Tolerances & Crane Logistics in Ambattur & Cuddalore',
    desc: 'Overview of PEB structural steel Heavy Fabrication in Chennai and Cuddalore. Built-up H-beams, support columns, fan guards & safety handrails built to ISO 9001 standards.',
    keywords: 'PEB structural steel standards, built up H beam fabrication, cooling tower fan guard manufacturing'
  },
  {
    path: '/blog/pressure-vessel-fabrication-standards-india',
    title: 'IS 2825 vs ASME Section VIII: Pressure Vessel Fabrication Standards in India',
    desc: 'Expert guide on IS 2825 and ASME Section VIII pressure vessel fabrication standards for Tamil Nadu industrial buyers. Learn what certifications to demand.',
    keywords: 'IS 2825 pressure vessel standard, ASME Section VIII compliance, pressure vessel testing India'
  },
  {
    path: '/blog/rail-bus-coach-component-manufacturing-materials-process',
    title: 'Rail & Bus Coach Component Manufacturing – Materials & Process',
    desc: 'Guide to rail coach and bus body sheet metal component manufacturing in Chennai. Stainless steel SS 304, aluminum, CNC laser profiling, and press brake folding process.',
    keywords: 'rail coach component manufacturing, bus body sheet metal process, press brake coach panel bending'
  },
  {
    path: '/blog/eot-crane-material-handling-heavy-fabrication-chennai',
    title: 'EOT Crane Fabrication & Material Handling Logistics in Chennai — 10 MT Capacity',
    desc: 'Naveen Auto Components — 10 MT EOT crane capacity for heavy fabricated product handling, staging, and dispatch in Chennai (Thirumullaivoyal) and Cuddalore.',
    keywords: '10 MT EOT crane Chennai, heavy material handling yard, flatbed loading logistics Tamil Nadu'
  },
  {
    path: '/contact',
    title: 'Contact Naveen Auto Components | Heavy Fabrication Quotes & RFQ',
    desc: 'Contact Naveen Auto Components for heavy engineering inquiries, RFQ proposals, and plant visits in Chennai (SIDCO Thirumullaivoyal) & Cuddalore.',
    keywords: 'Contact Naveen Auto Components, heavy fabrication RFQ Chennai, quotation Cuddalore plant'
  }
];

function prerender() {
  console.log('Starting static HTML pre-rendering for Google crawlability...');
  
  if (!fs.existsSync(DIST_DIR)) {
    console.error('dist directory does not exist! Run vite build first.');
    process.exit(1);
  }

  const baseHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(baseHtmlPath)) {
    console.error('dist/index.html not found!');
    process.exit(1);
  }

  const template = fs.readFileSync(baseHtmlPath, 'utf8');

  let count = 0;
  routesMeta.forEach((route) => {
    const canonicalUrl = `https://www.naveenautocomponents.com${route.path === '/' ? '/' : route.path}`;
    
    // Inject page-specific title, description, keywords, canonical into HTML template
    let pageHtml = template
      .replace(/<title>.*?<\/title>/gi, `<title>${route.title}</title>`)
      .replace(/<meta name="description" content=".*?" \/>/gi, `<meta name="description" content="${route.desc}" />`)
      .replace(/<meta name="keywords" content=".*?" \/>/gi, `<meta name="keywords" content="${route.keywords}" />`)
      .replace(/<link rel="canonical" href=".*?" \/>/gi, `<link rel="canonical" href="${canonicalUrl}" />`);

    if (route.path === '/') {
      fs.writeFileSync(baseHtmlPath, pageHtml, 'utf8');
      count++;
      return;
    }

    const routeDir = path.join(DIST_DIR, route.path.replace(/^\//, ''));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    const targetHtmlFile = path.join(routeDir, 'index.html');
    fs.writeFileSync(targetHtmlFile, pageHtml, 'utf8');
    count++;
  });

  console.log(`Pre-rendered ${count} static HTML pages successfully into dist/ directory!`);
}

prerender();
