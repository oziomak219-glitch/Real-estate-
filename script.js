/**
 * HAVEN LIVING REAL ESTATE - JAVASCRIPT ENGINE
 * Pure Vanilla JavaScript (ES6+) - No external libraries
 */

// ==========================================================================
// 1. DATASET: Luxury Properties
// ==========================================================================
const PROPERTIES = [
  {
    id: 1,
    title: "The Bel Air Horizon Villa",
    type: "Villa",
    category: "featured",
    price: 14500000,
    address: "1048 Stradella Road",
    neighborhood: "Bel Air, Los Angeles, CA",
    beds: 6,
    baths: 8,
    sqft: 9800,
    yearBuilt: 2024,
    garage: "4 Cars",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    badge: "Featured",
    badgeType: "badge-gold",
    description: "An extraordinary modern architectural masterpiece perched above the hills of Bel Air. Features floor-to-ceiling motorized Fleetwood glass walls, a 75ft zero-edge infinity pool with panoramic city-to-ocean vistas, custom Italian Poliform kitchen, wellness wing with sauna and cold plunge, and private temperature-controlled wine room.",
    amenities: ["Infinity Pool", "Ocean Views", "Wine Cellar", "Private Spa & Sauna", "Home Cinema", "Smart Home Automation", "Private Security Gate", "Outdoor Kitchen"],
    agent: {
      name: "Victoria Montgomery",
      title: "Senior Luxury Director",
      phone: "(310) 555-0198",
      email: "v.montgomery@havenliving.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: 2,
    title: "The Skyview Glass Penthouse",
    type: "Penthouse",
    category: "penthouse",
    price: 8900000,
    address: "432 Park Avenue, Penthouse 68B",
    neighborhood: "Manhattan, New York, NY",
    beds: 4,
    baths: 5,
    sqft: 5200,
    yearBuilt: 2023,
    garage: "Valet Service",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    badge: "New Listing",
    badgeType: "badge-emerald",
    description: "Towering above Central Park, this full-floor duplex penthouse offers 360-degree skyline views through soaring 14-foot wrap-around windows. Finished in Calacatta marble, herringbone French white oak, private key-locked elevator landing, and bespoke bronze architectural details.",
    amenities: ["Central Park Views", "Private Elevator", "24/7 Concierge", "Private Wine Storage", "Doorman & Valet", "Fitness Center", "Heated Indoor Pool", "Terrace"],
    agent: {
      name: "Alexander Vance",
      title: "Executive Vice President",
      phone: "(212) 555-0143",
      email: "a.vance@havenliving.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: 3,
    title: "Seagrove Coastal Sanctuary",
    type: "Coastal",
    category: "for-sale",
    price: 11200000,
    address: "3100 Ocean Boulevard",
    neighborhood: "Palm Beach, Miami, FL",
    beds: 5,
    baths: 6,
    sqft: 7400,
    yearBuilt: 2022,
    garage: "3 Cars",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    badge: "Exclusive",
    badgeType: "badge-dark",
    description: "Direct beachfront living at its absolute pinnacle. Enjoy 120 feet of private Atlantic shoreline with custom yacht dockage, lush tropical landscape architecture by Raymond Jungles, expansive covered loggias, and resort-style limestone pool deck.",
    amenities: ["Private Beach Access", "Deepwater Yacht Dock", "Infinity Edge Pool", "Outdoor Firepit", "Designer Furnishings", "Hurricane-Impact Glass", "Guest Casita", "Summer Kitchen"],
    agent: {
      name: "Camilla Rodriguez",
      title: "Coastal Portfolio Specialist",
      phone: "(305) 555-0812",
      email: "c.rodriguez@havenliving.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: 4,
    title: "The Aspen Ridge Chalet",
    type: "Mountain",
    category: "featured",
    price: 16800000,
    address: "740 Red Mountain Road",
    neighborhood: "Aspen, CO",
    beds: 6,
    baths: 7,
    sqft: 8600,
    yearBuilt: 2023,
    garage: "3 Heated Bays",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    badge: "Just Listed",
    badgeType: "badge-gold",
    description: "Ski-in/ski-out luxury on Aspen's coveted Red Mountain. Timber-framed architectural grandeur paired with bespoke steel trusses, dual master suites, radiant heated quartzite stone floors, exterior heated hot tub looking over Ajax mountain, and heated driveway.",
    amenities: ["Ski-in / Ski-out", "Mountain Panorama", "Heated Driveway", "Outdoor Heated Spa", "Oxygen-Enriched Suite", "Ski Locker & Boot Room", "Custom Stone Fireplaces", "Billiards Lounge"],
    agent: {
      name: "Alexander Vance",
      title: "Executive Vice President",
      phone: "(212) 555-0143",
      email: "a.vance@havenliving.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: 5,
    title: "Tribeca Cast-Iron Loft",
    type: "Loft",
    category: "for-sale",
    price: 4750000,
    address: "68 Franklin Street, 4th Floor",
    neighborhood: "Tribeca, New York, NY",
    beds: 3,
    baths: 3,
    sqft: 3400,
    yearBuilt: 2021,
    garage: "Dedicated Parking",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    badge: "Rare Find",
    badgeType: "badge-dark",
    description: "Authentic historic Tribeca cast-iron architecture re-imagined with modern minimalism. Boasting 13-foot beamed ceilings, exposed brick, original Corinthian columns, a chef's Boffi kitchen with Gaggenau appliances, and a lavish primary bathroom in Nero Marquina marble.",
    amenities: ["Original Columns", "13-ft Ceilings", "Private Keyed Elevator", "Boffi Kitchen", "Nero Marquina Marble", "Custom Lighting", "Storage Unit", "Wine Fridge"],
    agent: {
      name: "Victoria Montgomery",
      title: "Senior Luxury Director",
      phone: "(310) 555-0198",
      email: "v.montgomery@havenliving.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: 6,
    title: "Austin Hill Country Modernist Estate",
    type: "Villa",
    category: "new-construction",
    price: 6200000,
    address: "4900 Westlake Drive",
    neighborhood: "Westlake Hills, Austin, TX",
    beds: 5,
    baths: 6,
    sqft: 6800,
    yearBuilt: 2025,
    garage: "3 Cars",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    badge: "New Construction",
    badgeType: "badge-emerald",
    description: "Clean organic lines meet warm Texas limestone in this newly completed Westlake estate. cantilevered living spaces gaze upon Lake Austin, accompanied by an outdoor pavilion with steel fire hearth and zero-edge saltwater pool.",
    amenities: ["Lake Views", "Saltwater Pool", "Texas Limestone Walls", "Solar + Powerwall", "Guest Suite", "Outdoor Kitchen", "Motorized Screens", "Security Suite"],
    agent: {
      name: "Camilla Rodriguez",
      title: "Coastal Portfolio Specialist",
      phone: "(305) 555-0812",
      email: "c.rodriguez@havenliving.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: 7,
    title: "The Pacific Palisades Compound",
    type: "Villa",
    category: "featured",
    price: 18900000,
    address: "14800 Corona Del Mar",
    neighborhood: "Pacific Palisades, CA",
    beds: 7,
    baths: 9,
    sqft: 11200,
    yearBuilt: 2024,
    garage: "6 Cars + Auto Gallery",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    badge: "Trophy Asset",
    badgeType: "badge-gold",
    description: "An unrepeatable trophy compound offering uninterrupted views of the Pacific Ocean and coastline. Includes a multi-level subterranean gallery for classic automobiles, private championship tennis court, infinity lap pool, and separate staff quarters.",
    amenities: ["Tennis Court", "Automobile Gallery", "Ocean Frontage", "Staff Quarters", "Commercial Elevator", "Security Compound", "Cigar Lounge", "Wine Vault"],
    agent: {
      name: "Victoria Montgomery",
      title: "Senior Luxury Director",
      phone: "(310) 555-0198",
      email: "v.montgomery@havenliving.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: 8,
    title: "Paradise Valley Desert Pavilion",
    type: "Villa",
    category: "for-sale",
    price: 7950000,
    address: "6200 Camelback Vista Drive",
    neighborhood: "Paradise Valley, Phoenix, AZ",
    beds: 4,
    baths: 5,
    sqft: 5900,
    yearBuilt: 2023,
    garage: "4 Cars",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    badge: "Price Drop",
    badgeType: "badge-dark",
    description: "Framing iconic Camelback Mountain, this desert modernist masterpiece seamlessly dissolves indoor and outdoor boundaries with pocketing glass walls, rammed earth architecture, fire features, and a resort lap pool.",
    amenities: ["Camelback Views", "Rammed Earth Design", "Desert Zen Courtyard", "Negative-Edge Pool", "Outdoor Fire Lounge", "Wine Room", "Chef's Scullery", "Solar System"],
    agent: {
      name: "Alexander Vance",
      title: "Executive Vice President",
      phone: "(212) 555-0143",
      email: "a.vance@havenliving.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: 9,
    title: "Biscayne Bay Waterfront Villa",
    type: "Coastal",
    category: "new-construction",
    price: 13200000,
    address: "440 North Venetian Drive",
    neighborhood: "Venetian Islands, Miami, FL",
    beds: 6,
    baths: 7,
    sqft: 8100,
    yearBuilt: 2025,
    garage: "2 Cars + Boat Slip",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    badge: "New Construction",
    badgeType: "badge-emerald",
    description: "Unrivaled Venetian Islands modern estate facing westward for vibrant Miami skyline sunsets. Features private Ipe wood dock accommodating vessels up to 80 feet, rooftop terrace with plunge pool, and custom millwork throughout.",
    amenities: ["Private 80ft Dock", "Rooftop Plunge Pool", "Sunset Views", "Private Elevator", "Outdoor Summer Kitchen", "Sub-Zero & Wolf Appliances", "Smart Security", "Lush Courtyard"],
    agent: {
      name: "Camilla Rodriguez",
      title: "Coastal Portfolio Specialist",
      phone: "(305) 555-0812",
      email: "c.rodriguez@havenliving.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    }
  }
];

// ==========================================================================
// 2. STATE MANAGEMENT & SAVED FAVORITES
// ==========================================================================
const State = {
  activeCategory: 'all',
  searchQuery: '',
  propertyType: 'all',
  maxPrice: 0,
  minBeds: 0,
  sortBy: 'featured',
  savedIds: JSON.parse(localStorage.getItem('haven_saved_properties') || '[]')
};

// ==========================================================================
// 3. HELPER UTILITIES
// ==========================================================================
function formatCurrency(num) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(num);
}

function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(num);
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = type === 'success' 
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

  toast.innerHTML = `
    <span>${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ==========================================================================
// 4. PROPERTY RENDERING & FILTER ENGINE
// ==========================================================================
function renderPropertyListings() {
  const grid = document.getElementById('propertyGrid');
  const countEl = document.getElementById('resultsCount');
  if (!grid) return;

  // Filter listings
  let filtered = PROPERTIES.filter(p => {
    // Category tab filter
    if (State.activeCategory === 'saved') {
      if (!State.savedIds.includes(p.id)) return false;
    } else if (State.activeCategory !== 'all') {
      if (p.category !== State.activeCategory) return false;
    }

    // Property Type
    if (State.propertyType !== 'all' && p.type.toLowerCase() !== State.propertyType.toLowerCase()) {
      return false;
    }

    // Max Price
    if (State.maxPrice > 0 && p.price > State.maxPrice) {
      return false;
    }

    // Min Beds
    if (State.minBeds > 0 && p.beds < State.minBeds) {
      return false;
    }

    // Search Query (title, address, neighborhood, type)
    if (State.searchQuery.trim() !== '') {
      const q = State.searchQuery.toLowerCase().trim();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchAddress = p.address.toLowerCase().includes(q);
      const matchNeigh = p.neighborhood.toLowerCase().includes(q);
      const matchType = p.type.toLowerCase().includes(q);
      if (!matchTitle && !matchAddress && !matchNeigh && !matchType) {
        return false;
      }
    }

    return true;
  });

  // Sort listings
  if (State.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (State.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (State.sortBy === 'sqft-desc') {
    filtered.sort((a, b) => b.sqft - a.sqft);
  } else if (State.sortBy === 'beds-desc') {
    filtered.sort((a, b) => b.beds - a.beds);
  }

  // Update counter
  if (countEl) {
    countEl.textContent = `${filtered.length} Exclusive ${filtered.length === 1 ? 'Property' : 'Properties'}`;
  }

  // Update navbar saved count
  updateSavedBadge();

  // Render cards or empty state
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" id="emptyState">
        <div class="empty-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
        <h3 class="empty-title">No Matching Properties Found</h3>
        <p class="empty-text">We couldn't find any luxury residences matching your exact filter criteria. Try broadening your search or resetting filters.</p>
        <button class="btn btn-primary btn-sm" id="resetFiltersBtn" onclick="resetAllFilters()">
          Reset Search Filters
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(property => {
    const isSaved = State.savedIds.includes(property.id);
    return `
      <article class="property-card" id="property-card-${property.id}">
        <div class="card-image-wrap">
          <img src="${property.image}" alt="${property.title}" class="card-img" loading="lazy" />
          <div class="card-badges">
            <span class="badge ${property.badgeType}">${property.badge}</span>
            <span class="badge badge-dark">${property.type}</span>
          </div>
          <button 
            class="card-favorite-btn ${isSaved ? 'saved' : ''}" 
            id="fav-btn-${property.id}"
            title="${isSaved ? 'Remove from Saved' : 'Save to Favorites'}"
            onclick="toggleFavorite(${property.id})"
            aria-label="Save ${property.title}"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <div class="card-body">
          <div class="card-price-text">${formatCurrency(property.price)}</div>
          <h3 class="card-title">${property.title}</h3>
          <div class="card-address-text">${property.neighborhood}</div>

          <div class="card-specs">
            <span class="spec-item"><strong>${property.beds}</strong> Bed</span>
            <span class="spec-item"><strong>${property.baths}</strong> Bath</span>
            <span class="spec-item"><strong>${formatNumber(property.sqft)}</strong> sqft</span>
          </div>
        </div>

        <div class="card-footer">
          <button 
            class="calc-link-btn" 
            onclick="prefillMortgage(${property.price})"
            title="Estimate monthly payment for this property"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="4" y="2" width="16" height="20" rx="2"></rect>
              <line x1="8" y1="6" x2="16" y2="6"></line>
              <line x1="16" y1="14" x2="16" y2="18"></line>
              <line x1="8" y1="10" x2="8" y2="10.01"></line>
              <line x1="12" y1="10" x2="12" y2="10.01"></line>
              <line x1="16" y1="10" x2="16" y2="10.01"></line>
            </svg>
            Calc
          </button>
          <button 
            class="btn btn-sm" 
            id="view-details-btn-${property.id}"
            onclick="openPropertyModal(${property.id})"
          >
            View Details
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================================================
// 5. FAVORITES MANAGEMENT
// ==========================================================================
function toggleFavorite(id) {
  const index = State.savedIds.indexOf(id);
  const property = PROPERTIES.find(p => p.id === id);
  const name = property ? property.title : 'Property';

  if (index > -1) {
    State.savedIds.splice(index, 1);
    showToast(`Removed "${name}" from your saved residences.`, 'error');
  } else {
    State.savedIds.push(id);
    showToast(`Added "${name}" to your saved portfolio!`, 'success');
  }

  localStorage.setItem('haven_saved_properties', JSON.stringify(State.savedIds));
  renderPropertyListings();
}

function updateSavedBadge() {
  const badge = document.getElementById('savedCountBadge');
  if (badge) {
    badge.textContent = State.savedIds.length;
  }
}

function showSavedProperties() {
  // Activate saved tab
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'saved');
  });
  State.activeCategory = 'saved';
  renderPropertyListings();
  
  const listingsSection = document.getElementById('listings');
  if (listingsSection) {
    listingsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================================================================
// 6. INTERACTIVE MORTGAGE CALCULATOR
// ==========================================================================
function calculateMortgage() {
  const priceInput = document.getElementById('calcHomePrice');
  const downPaymentInput = document.getElementById('calcDownPayment');
  const downPaymentSlider = document.getElementById('calcDownPercentSlider');
  const interestInput = document.getElementById('calcInterestRate');
  const termButtons = document.querySelectorAll('.term-btn.active');
  const taxToggle = document.getElementById('calcIncludeTax');

  if (!priceInput || !downPaymentInput || !interestInput) return;

  const homePrice = parseFloat(priceInput.value) || 0;
  const downPayment = parseFloat(downPaymentInput.value) || 0;
  const interestRate = (parseFloat(interestInput.value) || 0) / 100;
  
  let termYears = 30;
  if (termButtons.length > 0) {
    termYears = parseInt(termButtons[0].dataset.years) || 30;
  }

  const principal = Math.max(0, homePrice - downPayment);
  const monthlyRate = interestRate / 12;
  const totalPayments = termYears * 12;

  let monthlyPrincipalInterest = 0;
  if (monthlyRate > 0 && principal > 0) {
    monthlyPrincipalInterest = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
  } else if (principal > 0) {
    monthlyPrincipalInterest = principal / totalPayments;
  }

  // Taxes and insurances based on typical luxury rates
  const includeTaxes = taxToggle ? taxToggle.checked : true;
  const monthlyTaxes = includeTaxes ? (homePrice * 0.011) / 12 : 0; // ~1.1% property tax
  const monthlyInsurance = includeTaxes ? 160 : 0;                   // ~$160/mo
  const monthlyHOA = includeTaxes ? 250 : 0;                         // ~$250/mo

  const totalMonthly = monthlyPrincipalInterest + monthlyTaxes + monthlyInsurance + monthlyHOA;

  // DOM Updates
  const totalEl = document.getElementById('calcTotalPayment');
  const piEl = document.getElementById('calcValPI');
  const taxEl = document.getElementById('calcValTax');
  const insEl = document.getElementById('calcValIns');
  const hoaEl = document.getElementById('calcValHOA');
  const downPercentLabel = document.getElementById('calcDownPercentVal');

  if (totalEl) totalEl.textContent = formatCurrency(Math.round(totalMonthly));
  if (piEl) piEl.textContent = formatCurrency(Math.round(monthlyPrincipalInterest));
  if (taxEl) taxEl.textContent = formatCurrency(Math.round(monthlyTaxes));
  if (insEl) insEl.textContent = formatCurrency(Math.round(monthlyInsurance));
  if (hoaEl) hoaEl.textContent = formatCurrency(Math.round(monthlyHOA));

  if (downPercentLabel && homePrice > 0) {
    const percent = Math.round((downPayment / homePrice) * 100);
    downPercentLabel.textContent = `${percent}%`;
  }

  // Update visual breakdown bar segments
  if (totalMonthly > 0) {
    const pPct = (monthlyPrincipalInterest / totalMonthly) * 100;
    const tPct = (monthlyTaxes / totalMonthly) * 100;
    const iPct = (monthlyInsurance / totalMonthly) * 100;
    const hPct = (monthlyHOA / totalMonthly) * 100;

    const barP = document.getElementById('barPrincipal');
    const barT = document.getElementById('barTaxes');
    const barI = document.getElementById('barInsurance');
    const barH = document.getElementById('barHOA');

    if (barP) barP.style.width = `${pPct}%`;
    if (barT) barT.style.width = `${tPct}%`;
    if (barI) barI.style.width = `${iPct}%`;
    if (barH) barH.style.width = `${hPct}%`;
  }
}

function prefillMortgage(price) {
  const priceInput = document.getElementById('calcHomePrice');
  const downPaymentInput = document.getElementById('calcDownPayment');
  const downSlider = document.getElementById('calcDownPercentSlider');

  if (priceInput && downPaymentInput) {
    priceInput.value = price;
    const standardDown = Math.round(price * 0.20);
    downPaymentInput.value = standardDown;
    if (downSlider) downSlider.value = 20;
    calculateMortgage();
  }

  const calcSection = document.getElementById('mortgage-calculator');
  if (calcSection) {
    calcSection.scrollIntoView({ behavior: 'smooth' });
  }
  showToast(`Mortgage calculator loaded with ${formatCurrency(price)}.`, 'success');
}

// ==========================================================================
// 7. MODALS (PROPERTY DETAILS & TOUR SCHEDULING)
// ==========================================================================
let currentSelectedProperty = null;

function openPropertyModal(id) {
  const property = PROPERTIES.find(p => p.id === id);
  if (!property) return;
  currentSelectedProperty = property;

  const modal = document.getElementById('propertyModal');
  const content = document.getElementById('propertyModalContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="modal-gallery-main">
      <img src="${property.image}" alt="${property.title}" class="modal-gallery-img" />
    </div>
    
    <div class="modal-body">
      <div class="modal-header-flex">
        <div>
          <span class="card-type-tag">${property.neighborhood} • ${property.type}</span>
          <h2 class="modal-prop-title">${property.title}</h2>
          <p class="modal-prop-address">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${property.address}
          </p>
        </div>
        <div style="text-align: right;">
          <div class="modal-prop-price">${formatCurrency(property.price)}</div>
          <span class="badge ${property.badgeType}" style="margin-top: 4px;">${property.badge}</span>
        </div>
      </div>

      <div class="modal-specs-bar">
        <div class="modal-spec-cell">
          <div class="modal-spec-title">Bedrooms</div>
          <div class="modal-spec-val">${property.beds} Suites</div>
        </div>
        <div class="modal-spec-cell">
          <div class="modal-spec-title">Bathrooms</div>
          <div class="modal-spec-val">${property.baths} Baths</div>
        </div>
        <div class="modal-spec-cell">
          <div class="modal-spec-title">Living Space</div>
          <div class="modal-spec-val">${formatNumber(property.sqft)} Sq Ft</div>
        </div>
        <div class="modal-spec-cell">
          <div class="modal-spec-title">Garage</div>
          <div class="modal-spec-val">${property.garage}</div>
        </div>
      </div>

      <h3 class="modal-section-title">Architectural Overview</h3>
      <p class="modal-description">${property.description}</p>

      <h3 class="modal-section-title">Bespoke Amenities & Features</h3>
      <div class="modal-amenities-list">
        ${property.amenities.map(item => `
          <div class="amenity-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            ${item}
          </div>
        `).join('')}
      </div>

      <div class="modal-agent-box">
        <div class="modal-agent-info">
          <img src="${property.agent.image}" alt="${property.agent.name}" class="modal-agent-avatar" />
          <div>
            <h4 style="font-weight: 700; color: var(--text-main);">${property.agent.name}</h4>
            <p style="font-size: 0.8125rem; color: var(--text-muted);">${property.agent.title}</p>
            <p style="font-size: 0.8125rem; color: var(--accent-color); font-weight: 600;">${property.agent.phone}</p>
          </div>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn btn-primary btn-sm" onclick="openTourModalForProperty('${property.title}')">
            Schedule Private Tour
          </button>
          <button class="btn btn-outline btn-sm" onclick="inquireAboutProperty('${property.title}')">
            Inquire Details
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function openTourModal(defaultPropTitle = '') {
  const modal = document.getElementById('tourModal');
  const propSelect = document.getElementById('tourPropertySelect');
  
  if (propSelect) {
    propSelect.innerHTML = `
      <option value="general">General Advisory / Multiple Properties</option>
      ${PROPERTIES.map(p => `
        <option value="${p.title}" ${p.title === defaultPropTitle ? 'selected' : ''}>
          ${p.title} (${formatCurrency(p.price)})
        </option>
      `).join('')}
    `;
  }

  // Set minimum date to tomorrow
  const dateInput = document.getElementById('tourDate');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function openTourModalForProperty(title) {
  closeModal('propertyModal');
  openTourModal(title);
}

function inquireAboutProperty(title) {
  closeModal('propertyModal');
  const messageInput = document.getElementById('contactMessage');
  if (messageInput) {
    messageInput.value = `Hello, I am interested in scheduling a private discussion regarding "${title}". Please send over the architectural dossier and availability.`;
  }
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    const nameInput = document.getElementById('contactName');
    if (nameInput) nameInput.focus();
  }
}

// ==========================================================================
// 8. FORM VALIDATION & SUBMISSION
// ==========================================================================
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return phone.trim().length >= 7;
}

function setupForms() {
  // Contact Section Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const phoneInput = document.getElementById('contactPhone');
      const messageInput = document.getElementById('contactMessage');
      
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('is-invalid');
        isValid = false;
      } else {
        nameInput.classList.remove('is-invalid');
      }

      // Validate Email
      if (!validateEmail(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else {
        emailInput.classList.remove('is-invalid');
      }

      // Validate Phone
      if (!validatePhone(phoneInput.value)) {
        phoneInput.classList.add('is-invalid');
        isValid = false;
      } else {
        phoneInput.classList.remove('is-invalid');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.classList.add('is-invalid');
        isValid = false;
      } else {
        messageInput.classList.remove('is-invalid');
      }

      if (isValid) {
        showToast(`Thank you, ${nameInput.value}! Your inquiry has been sent to our luxury advisory desk.`, 'success');
        contactForm.reset();
      } else {
        showToast('Please correct the highlighted fields before submitting.', 'error');
      }
    });

    // Clear validation error on input
    ['contactName', 'contactEmail', 'contactPhone', 'contactMessage'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => el.classList.remove('is-invalid'));
      }
    });
  }

  // Schedule Tour Form
  const tourForm = document.getElementById('scheduleTourForm');
  if (tourForm) {
    tourForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('tourName').value.trim();
      const email = document.getElementById('tourEmail').value.trim();
      const phone = document.getElementById('tourPhone').value.trim();
      const prop = document.getElementById('tourPropertySelect').value;
      const date = document.getElementById('tourDate').value;
      const time = document.getElementById('tourTime').value;

      if (!name || !validateEmail(email) || !validatePhone(phone) || !date) {
        showToast('Please provide your complete contact and date details.', 'error');
        return;
      }

      closeModal('tourModal');
      showToast(`Private tour request confirmed for ${name} on ${date} at ${time}. Our agent will contact you shortly!`, 'success');
      tourForm.reset();
    });
  }

  // Newsletter Form
  const newsForm = document.getElementById('newsletterForm');
  if (newsForm) {
    newsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      if (validateEmail(email)) {
        showToast('You have been subscribed to Haven Private Acquisitions journal.', 'success');
        newsForm.reset();
      } else {
        showToast('Please enter a valid email address.', 'error');
      }
    });
  }
}

// ==========================================================================
// 9. QUICK SEARCH BAR & FILTER HANDLERS
// ==========================================================================
function setupFiltersAndSearch() {
  // Quick Search Form (Hero)
  const quickSearchForm = document.getElementById('quickSearchForm');
  if (quickSearchForm) {
    quickSearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const locInput = document.getElementById('searchLocation');
      const typeSelect = document.getElementById('searchType');
      const priceSelect = document.getElementById('searchPrice');
      const bedsSelect = document.getElementById('searchBeds');

      State.searchQuery = locInput ? locInput.value : '';
      State.propertyType = typeSelect ? typeSelect.value : 'all';
      State.maxPrice = priceSelect ? parseFloat(priceSelect.value) || 0 : 0;
      State.minBeds = bedsSelect ? parseInt(bedsSelect.value) || 0 : 0;
      State.activeCategory = 'all';

      // Update category tab UI
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'all');
      });

      renderPropertyListings();

      const listingsSection = document.getElementById('listings');
      if (listingsSection) {
        listingsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Category Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      State.activeCategory = this.dataset.category;
      renderPropertyListings();
    });
  });

  // Sort Select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      State.sortBy = this.value;
      renderPropertyListings();
    });
  }
}

function resetAllFilters() {
  State.searchQuery = '';
  State.propertyType = 'all';
  State.maxPrice = 0;
  State.minBeds = 0;
  State.activeCategory = 'all';
  State.sortBy = 'featured';

  const locInput = document.getElementById('searchLocation');
  const typeSelect = document.getElementById('searchType');
  const priceSelect = document.getElementById('searchPrice');
  const bedsSelect = document.getElementById('searchBeds');
  const sortSelect = document.getElementById('sortSelect');

  if (locInput) locInput.value = '';
  if (typeSelect) typeSelect.value = 'all';
  if (priceSelect) priceSelect.value = '0';
  if (bedsSelect) bedsSelect.value = '0';
  if (sortSelect) sortSelect.value = 'featured';

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });

  renderPropertyListings();
  showToast('Filters reset to show all residences.', 'success');
}

// ==========================================================================
// 10. MORTGAGE CALCULATOR EVENT LISTENERS
// ==========================================================================
function setupMortgageCalculatorEvents() {
  const priceInput = document.getElementById('calcHomePrice');
  const downPaymentInput = document.getElementById('calcDownPayment');
  const downSlider = document.getElementById('calcDownPercentSlider');
  const interestInput = document.getElementById('calcInterestRate');
  const taxToggle = document.getElementById('calcIncludeTax');

  if (priceInput) {
    priceInput.addEventListener('input', function() {
      const price = parseFloat(this.value) || 0;
      const pct = parseFloat(downSlider ? downSlider.value : 20) / 100;
      if (downPaymentInput) {
        downPaymentInput.value = Math.round(price * pct);
      }
      calculateMortgage();
    });
  }

  if (downPaymentInput) {
    downPaymentInput.addEventListener('input', function() {
      const down = parseFloat(this.value) || 0;
      const price = parseFloat(priceInput ? priceInput.value : 0) || 1;
      const pct = Math.min(100, Math.max(0, Math.round((down / price) * 100)));
      if (downSlider) downSlider.value = pct;
      calculateMortgage();
    });
  }

  if (downSlider) {
    downSlider.addEventListener('input', function() {
      const pct = parseFloat(this.value) / 100;
      const price = parseFloat(priceInput ? priceInput.value : 0) || 0;
      if (downPaymentInput) {
        downPaymentInput.value = Math.round(price * pct);
      }
      calculateMortgage();
    });
  }

  if (interestInput) {
    interestInput.addEventListener('input', calculateMortgage);
  }

  if (taxToggle) {
    taxToggle.addEventListener('change', calculateMortgage);
  }

  // Loan Term Switchers (15, 20, 30 years)
  document.querySelectorAll('.term-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.term-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      calculateMortgage();
    });
  });
}

// ==========================================================================
// 11. NAVBAR, SCROLL & MOBILE MENU HANDLERS
// ==========================================================================
function toggleMobileMenu(e) {
  if (e) {
    if (typeof e.stopPropagation === 'function') e.stopPropagation();
    if (typeof e.preventDefault === 'function') e.preventDefault();
  }
  const drawer = document.getElementById('mobileNavDrawer');
  const toggle = document.getElementById('mobileMenuToggle');
  if (drawer) {
    const isOpen = drawer.classList.toggle('open');
    if (toggle) {
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobileNavDrawer');
  const toggle = document.getElementById('mobileMenuToggle');
  if (drawer) {
    drawer.classList.remove('open');
  }
  if (toggle) {
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  }
  document.body.style.overflow = '';
}

function setupNavigation() {
  const navbar = document.getElementById('mainNavbar');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle button listener
  if (mobileToggle) {
    mobileToggle.removeEventListener('click', toggleMobileMenu);
    mobileToggle.addEventListener('click', toggleMobileMenu);
  }

  // Close mobile drawer when clicking any link
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.removeEventListener('click', closeMobileMenu);
    link.addEventListener('click', closeMobileMenu);
  });

  // Close mobile drawer when clicking outside
  document.addEventListener('click', (e) => {
    const drawer = document.getElementById('mobileNavDrawer');
    const toggle = document.getElementById('mobileMenuToggle');
    if (drawer && drawer.classList.contains('open')) {
      if (!drawer.contains(e.target) && !toggle.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });

  // Close modals with Escape key & backdrop clicks
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal('propertyModal');
      closeModal('tourModal');
      closeMobileMenu();
    }
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal(this.id);
      }
    });
  });
}

// ==========================================================================
// 12. EXPORT FUNCTIONS TO GLOBAL WINDOW
// (Ensures inline HTML onclick attributes work seamlessly in ES module builds on Vercel)
// ==========================================================================
if (typeof window !== 'undefined') {
  window.toggleMobileMenu = toggleMobileMenu;
  window.closeMobileMenu = closeMobileMenu;
  window.openPropertyModal = openPropertyModal;
  window.closeModal = closeModal;
  window.openTourModal = openTourModal;
  window.openTourModalForProperty = openTourModalForProperty;
  window.inquireAboutProperty = inquireAboutProperty;
  window.prefillMortgage = prefillMortgage;
  window.calculateMortgage = calculateMortgage;
  window.showSavedProperties = showSavedProperties;
  window.toggleFavorite = toggleFavorite;
  window.updateSavedBadge = updateSavedBadge;
  window.resetAllFilters = resetAllFilters;
  window.renderPropertyListings = renderPropertyListings;
  window.showToast = showToast;
}

// ==========================================================================
// 13. INITIALIZATION ON DOM READY
// ==========================================================================
function initApp() {
  renderPropertyListings();
  setupFiltersAndSearch();
  setupMortgageCalculatorEvents();
  calculateMortgage();
  setupForms();
  setupNavigation();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  // If DOM is already interactive or complete (e.g. deferred module on production CDN / Vercel)
  initApp();
}
