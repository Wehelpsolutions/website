const serviceDetails = {
    'drip-irrigation': {
        title: 'Drip Irrigation Systems',
        description: 'Our drip irrigation systems provide efficient water delivery directly to plant roots, reducing water waste and improving crop yields.',
        features: [
            'Water-efficient delivery system',
            'Customizable for different crops',
            'Automated timing controls',
            'Fertilizer injection capability',
            'Pressure regulation systems'
        ],
        benefits: [
            'Reduces water consumption by 30-50%',
            'Increases crop yield and quality',
            'Minimizes weed growth',
            'Prevents soil erosion',
            'Suitable for all terrain types'
        ],
        image: 'dripirrigation.jpg'
    },
    'irrigation-automation': {
        title: 'Irrigation Automation',
        description: 'Smart irrigation systems with sensors, timers, and automated controls for optimal water management.',
        features: [
            'Soil moisture sensors',
            'Weather-based scheduling',
            'Remote monitoring capability',
            'Mobile app integration',
            'Energy-efficient operations'
        ],
        benefits: [
            'Reduces manual labor',
            'Optimizes water usage',
            'Prevents over/under watering',
            'Increases convenience',
            'Scalable for any size'
        ],
        image: 'irrigationautomation.jpeg'
    },
    'electrical': {
    title: 'Electrical Works',
    description: 'Comprehensive electrical solutions with licensed professionals—ideal for smart home retrofits, EV charger points, and emergency wiring in Kerala homes.',
    features: [
      'New installations and rewiring',
      'Emergency repair services',
      'Lighting and power upgrades',
      'Panel board installation',
      'Safety inspections',
      'Emergency repairs & fault finding',
      'EV charger installation support',
      'Smart switchboard integration',
      'Electrical load optimization',
    ],
    benefits: [
      'Faster fix-ups during monsoon emergencies',
      'Smart home-ready infrastructure',
      'Reduced electricity bills through optimized circuits',
      'High reliability and warranty-backed service',
      'Ensures electrical safety',
      'Prevents potential hazards',
      'Professional installation',
      'Reliable and timely service',
      'Energy-efficient solutions'
    ],
    image: 'electrical.jpg'
    },
    'plumbing': {
        title: 'Plumbing Services',
        description: 'Expert plumbing installation, repair, and maintenance—covering everything from smart leak detectors to eco-friendly trenchless pipe upgrades.',
        features: [
        'Leak detection & repair',
        'Pipe installation and replacement',
        'Bathroom and kitchen fitting',
        'Drainage solutions',
        'Water tank and pump setups',
        'Smart sensor-based water meters',
        'Emergency drain cleaning',
        'Water tank system upgrades',
        ],
        benefits: [
        'Prevents waterlogging during heavy Kerala rains',
        'Prevents water damage',
        'Reliable plumbing network',
        'Quick and efficient repairs',
        'Affordable service plans',
        'Better water pressure and flow',
        'Faster service response time'
        ],
        image: 'plumbing.jpg'
    },
    'inverter': {
    title: 'Inverter Works',
    description: 'Reliable inverter setup & maintenance with top brands like Luminous, Exide & Microtek—ensuring power backup during frequent Kerala outages.',
    features: [
      'Brands : Luminous, Exide, Microtek, etc...',
      'Pure sine wave inverters',
      'Battery bank installations',
      'Load calculation and optimization',
      'Maintenance services',
      'Backup power configuration',
      'Battery health checks',
      'Backup load management',
      'Switch-over timer optimization',
      'Annual servicing & upgrades'
    ],
    benefits: [
      'Longer backup hours during outages',
      'Power during outages',
      'Protects appliances',
      'Improved backup efficiency',
      'Long-lasting solutions',
      'Energy-efficient systems',
      'Trusted brand performance',
      'Improved battery life and safety',
      'Peace of mind with professional service'
    ],
    image: 'inverter.jpg'
    },
    'solar': {
        title: 'Solar Installation',
        description: 'Professional on-grid and off-grid solar systems for homes & businesses—embracing Kerala’s shift toward sustainable, eco-friendly energy',
        features: [
        'On‑grid, off‑grid and hybrid installations',
        'High-efficiency panels',
        'Battery storage integration',
        'Government subsidy assistance',
        'Solar panel + battery combos',
        'Net-metering setups',
        'Monitoring & performance tracking'
        ],
        benefits: [
        'Lower electricity bills & green living',
        'Eco-friendly power',
        'Long-term investment',
        'Sustainable energy',
        'Increases property value',
        'Backup power during load-shedding',
        ],
        image: 'solar.jpg'
    },
    'cctv': {
        title: 'CCTV Installation',
        description: 'Secure your property with advanced CCTV systems—covering bullet, dome, PTZ, & turret cameras from Dahua, Hikvision, and more.',
        features: [
        'Bullet, dome, PTZ & turret cameras',
        'HD/4K surveillance cameras',
        'Night vision & motion sensors',
        'Remote access monitoring',
        'DVR/NVR setup',
        'Indoor and outdoor solutions',
        'Dahua & Hikvision systems',
        'Motion detection & alerts',
        'Weatherproofing'
        ],
        benefits: [
        '24/7 surveillance for peace of mind',
        'Improves security',
        'Deters theft and vandalism',
        'Real-time monitoring',
        'Easy evidence access',
        '24/7 surveillance coverage',
        'Real-time alerts to your phone',
        'Robust Kerala weather protection',
        'Scalable for home/business needs'
        ],
        image: 'cctv.webp'
    },
    'welding': {
        title: 'Welding Services',
        description: 'Light welding services for household structures—such as gates, grills, solar panel frames and shed repairs.',
        features: [
        'Custom gates and grills',
        'On-site welding services',
        'Solar frame assembly',
        'Sheet-metal repairs',
        'Light structural tweaks',
        'Portable on-site welding'
        ],
        benefits: [
        'Fast home-grade welding service',
        'Strengthens domestic structures',
        'Affordable for routine needs',
        'Custom design options',
        'Useful in emergencies & DIY support'
        ],
        image: 'welding.png'
    },
    'renovation-works': {
        title: 'Renovation Works',
        description: 'Complete home renovation—designing, planning, electrical & plumbing integration—perfect for Kerala‑style sustainable homes.',
        features: [
        'Interior design & space planning',
        'Partitioning and tiling',
        'Electrical and plumbing upgrades',
        'Modular kitchen & bathroom fit-outs',
        'Eco-friendly material sourcing',
        'Project management from start to finish'
        ],
        benefits: [
        'Modern Kerala‑style aesthetics',
        'Modernized living/working space',
        'Improved space utility',
        'Increased property value',
        'Tailored design options',
        'End-to-end service',
        'Efficient layout & utility use',
        'Single-provider convenience',
        'Sustainable, future-proof homes'
        ],
        image: 'renovation.webp'
    }
};

function getServiceKeyFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("service");
}

function renderServiceDetails() {
    const key = getServiceKeyFromURL();
    const data = serviceDetails[key];

    if (!data) {
        document.getElementById("serviceDetails").innerHTML = `<h2>Service Not Found</h2>`;
        return;
    }

    const html = `
        <div class="whs-modal-content" style="margin: 2rem auto;">
            <h2>${data.title}</h2>
            <img src="${data.image}" alt="${data.title}" style="width:100%; border-radius: 0.5rem; margin-bottom: 1rem;">
            <p class="whs-service-modal-description">${data.description}</p>
            <div class="whs-service-modal-features">
                <h4>Key Features</h4>
                <ul>${data.features.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
            <div class="whs-service-modal-features">
                <h4>Benefits</h4>
                <ul>${data.benefits.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
        </div>
    `;

    document.getElementById("serviceDetails").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderServiceDetails);
