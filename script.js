/* ==========================================================================
   Xpero+ - Interactive Logic & E-Commerce / Export Engine
   ========================================================================== */

// 6 Signature Lamps Product Dataset
const signatureLamps = [
  {
    id: 1,
    number: "1",
    name: "Monstera Leaf Sculptural Lamp",
    tagline: "Layered Natural Birch Leaves & Sculpted Wood Fin Base",
    price: 195,
    exportFob: "$85 - $110 / unit (MOQ 15)",
    moq: "15 Units",
    image: "assets/images/lamp-1.jpg",
    description: "An organic biophilic light sculpture inspired by tropical monstera foliage. Precision-sculpted wooden leaves diffuse glowing warm ambient light from within, casting mesmerizing botanical light and shadow silhouettes across tabletops.",
    specs: {
      "Dimensions": "H: 52cm × Dia: 38cm (Base Dia: 26cm)",
      "Materials": "Laser-Sculpted Birch Wood Veneer, Natural Walnut Core",
      "Bulb / Socket": "E26 / E27 Warm LED Edison (Included)",
      "Color Temp": "2700K Soft Amber (Inline Rotary Dimmer)",
      "Voltage / Plug": "110V - 240V Multi-Market UL/CE/RoHS Compliant",
      "Packaging": "Double-wall export master carton (ISTA 3A drop tested)",
      "Gross Weight": "4.2 kg | 0.048 CBM"
    }
  },
  {
    id: 2,
    number: "2",
    name: "Crystal Statement Chandelier",
    tagline: "Hand-Cut Multi-Tier K9 Crystal & Brushed Champagne Gold Ring",
    price: 849,
    exportFob: "$420 - $480 / unit (MOQ 5)",
    moq: "5 Units",
    image: "assets/images/lamp-2.jpg",
    description: "Architectural grandeur meets intimate warmth. Hundreds of precision-faceted K9 optical crystal prisms refract light into hypnotic golden patterns across dining rooms, foyers, and hospitality suites.",
    specs: {
      "Dimensions": "Dia: 90cm × H: 80cm (Adjustable 150cm brass chain)",
      "Materials": "Optic Grade K9 Crystal, Forged Steel & Brushed Gold",
      "Bulb / Socket": "12 × E12 / E14 Dimmable LED Warm Glow",
      "Color Temp": "2700K - 3000K Architectural Warmth",
      "Voltage / Plug": "110V - 240V Certified for US / UK / EU / GCC",
      "Packaging": "Custom high-density molded EPE foam & reinforced crate",
      "Gross Weight": "24.8 kg | 0.165 CBM"
    }
  },
  {
    id: 3,
    number: "3",
    name: "Textured Ceramic Lamp Pair",
    tagline: "Hand-Turned Ribbed Earthenware & Textured Linen Drums (Set of 2)",
    price: 320,
    exportFob: "$160 - $185 / pair (MOQ 15 pairs)",
    moq: "15 Pairs",
    image: "assets/images/lamp-3.jpg",
    description: "Sculpted by master ceramicists using natural stoneware clay with subtle fluted ridging. Paired symmetrically on consoles or credenzas to establish serene, balanced ambient illumination.",
    specs: {
      "Dimensions": "H: 62cm × Dia: 36cm (Each)",
      "Materials": "Artisanal Textured Stoneware, Oatmeal Linen Drum",
      "Bulb / Socket": "2 × E26 / E27 Medium Base",
      "Color Temp": "2700K Warm Glow with rotary brass dimmer",
      "Voltage / Plug": "Custom cord wiring & plug type per export market",
      "Packaging": "Individual nested inner boxes inside palletized carton",
      "Gross Weight": "9.2 kg (Pair) | 0.095 CBM"
    }
  },
  {
    id: 4,
    number: "4",
    name: "Ribbed Ceramic Table Lamp",
    tagline: "Artisan Ivory Glaze & Natural Oatmeal Fabric Shade",
    price: 165,
    exportFob: "$78 - $92 / unit (MOQ 20)",
    moq: "20 Units",
    image: "assets/images/lamp-4.jpg",
    description: "An intimate bedside or entryway companion. Features a tactile ribbed ceramic base with warm tactile ivory glaze, paired with an oatmeal fabric shade that diffuses overhead glare into comforting warmth.",
    specs: {
      "Dimensions": "H: 52cm × Dia: 32cm",
      "Materials": "Matte Ribbed Ceramic, Linen Fabric, Brass Fittings",
      "Bulb / Socket": "E26 / E27 Max 60W Equivalent LED",
      "Color Temp": "2700K Warm White (3-Way Touch Dimming)",
      "Voltage / Plug": "Universal 110V - 240V Adapter Available",
      "Packaging": "Reinforced 5-ply export carton",
      "Gross Weight": "4.8 kg | 0.045 CBM"
    }
  },
  {
    id: 5,
    number: "5",
    name: "Ambient Sculptural Lamp",
    tagline: "Organic Twisted Swirl Spiral Illuminating Light Sculpture",
    price: 210,
    exportFob: "$105 - $120 / unit (MOQ 15)",
    moq: "15 Units",
    image: "assets/images/lamp-5.jpg",
    description: "A conversation-starting sculptural masterpiece. The biophilic twisted spiral silhouette conceals an internal 360-degree LED core that radiates an ethereal flame-like ambient glow across tabletops.",
    specs: {
      "Dimensions": "H: 48cm × Dia: 24cm",
      "Materials": "Textured Mineral Polymer Composite, Anodized Base",
      "Bulb / Socket": "Integrated Long-Life Epistar LED Ribbon (50,000 hrs)",
      "Color Temp": "Stepless 2200K - 3200K Magnetic Slider",
      "Voltage / Plug": "USB-C Rechargeable + Direct AC Plug Option",
      "Packaging": "Velvet protective slipcase & shock-absorbing box",
      "Gross Weight": "3.6 kg | 0.038 CBM"
    }
  },
  {
    id: 6,
    number: "6",
    name: "Adjustable Candle Warmer Lamp",
    tagline: "Vintage Brushed Brass Neck, White Bell Shade & Italian Marble Base",
    price: 125,
    exportFob: "$58 - $68 / unit (MOQ 25)",
    moq: "25 Units",
    image: "assets/images/lamp-6.jpg",
    description: "The modern, flame-free way to enjoy home fragrances while enjoying soothing bedtime light. Gentle downward halogen heat warms scented candles cleanly, releasing fragrance without open flame or soot.",
    specs: {
      "Dimensions": "H: 36cm (Adjustable) × Base Dia: 16cm",
      "Materials": "Heavy White Veined Marble, Brushed Brass, Matte Steel",
      "Bulb / Socket": "2 × 50W GU10 Thermal Halogen Warming Bulbs",
      "Color Temp": "Warm 2400K Candlelight Glow (Built-in 2/4/8hr Timer)",
      "Voltage / Plug": "110V or 220V configuration according to destination",
      "Packaging": "Retail presentation gift box + Master shipping carton",
      "Gross Weight": "2.9 kg | 0.022 CBM"
    }
  }
];

// State Management
let cart = JSON.parse(localStorage.getItem('xpero_cart') || '[]');

// DOM Elements
const ambientToggleBtn = document.getElementById('ambientToggleBtn');
const heroAmbientSlider = document.getElementById('heroAmbientSlider');
const heroSliderValue = document.getElementById('heroSliderValue');
const heroImage = document.getElementById('heroImage');
const cartCountBadge = document.getElementById('cartCountBadge');
const cartBtn = document.getElementById('cartBtn');
const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
const closeCartDrawer = document.getElementById('closeCartDrawer');
const drawerItemsList = document.getElementById('drawerItemsList');
const drawerSubtotal = document.getElementById('drawerSubtotal');
const drawerTotalItems = document.getElementById('drawerTotalItems');
const btnShopAllMaster = document.getElementById('btnShopAllMaster');

// Quick View Modal Elements
const quickViewBackdrop = document.getElementById('quickViewBackdrop');
const closeQuickView = document.getElementById('closeQuickView');
const modalProductNumber = document.getElementById('modalProductNumber');
const modalProductTitle = document.getElementById('modalProductTitle');
const modalProductTagline = document.getElementById('modalProductTagline');
const modalProductRetail = document.getElementById('modalProductRetail');
const modalProductExport = document.getElementById('modalProductExport');
const modalProductDesc = document.getElementById('modalProductDesc');
const modalSpecTableBody = document.getElementById('modalSpecTableBody');
const modalImage = document.getElementById('modalImage');
const modalDimmerSlider = document.getElementById('modalDimmerSlider');
const modalTempDisplay = document.getElementById('modalTempDisplay');
const btnModalAddQuote = document.getElementById('btnModalAddQuote');
let currentActiveProduct = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  setupEventListeners();
});

// Event Listeners Setup
function setupEventListeners() {
  // Ambient Mode Toggle
  if (ambientToggleBtn) {
    ambientToggleBtn.addEventListener('click', toggleCozyMode);
  }

  // Hero Room Ambient Dimmer Slider
  if (heroAmbientSlider) {
    heroAmbientSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      heroSliderValue.textContent = `${val}%`;
      // Adjust hero visual atmosphere
      if (heroImage) {
        const brightness = 0.6 + (val / 100) * 0.55; // 0.6 to 1.15
        const warmGlow = 1 + (val / 100) * 0.35;
        heroImage.style.filter = `brightness(${brightness}) contrast(${warmGlow}) saturate(1.15)`;
      }
    });
  }

  // Quick View Dimmer Slider
  if (modalDimmerSlider) {
    modalDimmerSlider.addEventListener('input', (e) => {
      const tempK = e.target.value;
      modalTempDisplay.textContent = `${tempK}K`;
      if (modalImage) {
        // Calculate warm sepia / amber filter based on temperature
        const warmthRatio = (4000 - tempK) / 1800; // 0 (4000K) to 1 (2200K)
        modalImage.style.filter = `sepia(${warmthRatio * 0.45}) saturate(${1 + warmthRatio * 0.4}) brightness(${0.85 + warmthRatio * 0.25})`;
      }
    });
  }

  // Cart Drawer open/close
  if (cartBtn) {
    cartBtn.addEventListener('click', openCart);
  }
  if (closeCartDrawer) {
    closeCartDrawer.addEventListener('click', closeCart);
  }
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) closeCart();
    });
  }

  // Quick View Modal close
  if (closeQuickView) {
    closeQuickView.addEventListener('click', closeModal);
  }
  if (quickViewBackdrop) {
    quickViewBackdrop.addEventListener('click', (e) => {
      if (e.target === quickViewBackdrop) closeModal();
    });
  }

  // Modal Add To Quote
  if (btnModalAddQuote) {
    btnModalAddQuote.addEventListener('click', () => {
      if (currentActiveProduct) {
        addToCart(currentActiveProduct.id);
        closeModal();
      }
    });
  }

  // Master CTA Button: "Shop All Lamps & Transform Your Space"
  if (btnShopAllMaster) {
    btnShopAllMaster.addEventListener('click', () => {
      addAllLampsToCart();
    });
  }

  // RFQ Form Submit Handler
  const rfqForm = document.getElementById('rfqForm');
  if (rfqForm) {
    rfqForm.addEventListener('submit', handleRfqSubmit);
  }

  // Catalog Download Buttons
  const catalogBtns = document.querySelectorAll('.trigger-catalog');
  catalogBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      triggerCatalogDownload();
    });
  });

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeCart();
    }
  });
}

// Toggle Ambient Cozy Mode
function toggleCozyMode() {
  document.body.classList.toggle('cozy-mode-active');
  const isCozy = document.body.classList.contains('cozy-mode-active');
  
  if (ambientToggleBtn) {
    ambientToggleBtn.innerHTML = isCozy 
      ? `<span class="btn-text-full">✨ Cozy Evening Mode</span><span class="btn-text-short">✨ Night</span>`
      : `<span class="btn-text-full">💡 Ambient Warmth</span><span class="btn-text-short">💡 Cozy</span>`;
  }
  showToast(isCozy ? '🌙 Switched to Cozy Evening Ambiance (2400K Warm Glow)' : '☀️ Switched to Natural Daylight Mode');
}

// Open Quick View Modal for a Lamp
window.openQuickView = function(productId) {
  const product = signatureLamps.find(p => p.id === productId);
  if (!product) return;
  currentActiveProduct = product;

  modalProductNumber.textContent = `Piece No. ${product.number} of 6`;
  modalProductTitle.textContent = product.name;
  modalProductTagline.textContent = product.tagline;
  modalProductRetail.textContent = `$${product.price}`;
  modalProductExport.textContent = `Export FOB: ${product.exportFob}`;
  modalProductDesc.textContent = product.description;
  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalImage.style.filter = 'none';
  if (modalDimmerSlider) {
    modalDimmerSlider.value = 2700;
    modalTempDisplay.textContent = '2700K';
  }

  // Render Specifications Table
  modalSpecTableBody.innerHTML = '';
  for (const [key, value] of Object.entries(product.specs)) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${key}</td><td>${value}</td>`;
    modalSpecTableBody.appendChild(tr);
  }

  quickViewBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  quickViewBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// Cart & Quote Functions
window.addToCart = function(productId) {
  const product = signatureLamps.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      moq: product.moq,
      qty: 1
    });
  }

  saveCart();
  renderCart();
  showToast(`Added "${product.name}" to your Export Order / Cart`);
};

function addAllLampsToCart() {
  signatureLamps.forEach(lamp => {
    const existing = cart.find(item => item.id === lamp.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: lamp.id,
        name: lamp.name,
        price: lamp.price,
        image: lamp.image,
        moq: lamp.moq,
        qty: 1
      });
    }
  });

  saveCart();
  renderCart();
  openCart();
  showToast('🎉 All 6 Signature Lamps added to your Curated Collection!');
}

window.removeFromCart = function(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
  showToast('Item removed from quotation.');
};

function saveCart() {
  localStorage.setItem('xpero_cart', JSON.stringify(cart));
}

function renderCart() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartCountBadge) {
    cartCountBadge.textContent = totalCount;
    cartCountBadge.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  if (!drawerItemsList) return;

  if (cart.length === 0) {
    drawerItemsList.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-size: 2.5rem; margin-bottom: 0.8rem;">🕯️</p>
        <p style="font-weight: 600; font-size: 1.1rem; color: var(--text-main);">Your quote list is empty</p>
        <p style="font-size: 0.85rem; margin-top: 0.4rem;">Select from our 6 signature lamps to build your bespoke wholesale or retail order.</p>
      </div>
    `;
    if (drawerSubtotal) drawerSubtotal.textContent = '$0';
    if (drawerTotalItems) drawerTotalItems.textContent = '0 items';
    return;
  }

  let subtotal = 0;
  drawerItemsList.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-sub">MOQ: ${item.moq} | Qty: ${item.qty}</span>
          <div class="cart-item-price">$${itemTotal.toLocaleString()} <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 400;">($${item.price} each)</span></div>
        </div>
        <button class="btn-remove-item" onclick="removeFromCart(${item.id})" title="Remove item">&times;</button>
      </div>
    `;
  }).join('');

  if (drawerSubtotal) drawerSubtotal.textContent = `$${subtotal.toLocaleString()}`;
  if (drawerTotalItems) drawerTotalItems.textContent = `${totalCount} item${totalCount > 1 ? 's' : ''}`;
}

function openCart() {
  cartDrawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartDrawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Generate & Dispatch Export Quote to WhatsApp
window.dispatchWhatsAppQuote = function() {
  if (cart.length === 0) {
    showToast('Please add lamps to your quote first.');
    return;
  }

  let message = `Hello Xpero+ Team! I am interested in placing an export/wholesale order for the following signature lamps:\n\n`;
  cart.forEach((item, idx) => {
    message += `${idx + 1}. ${item.name} - Qty: ${item.qty} (Est. $${(item.price * item.qty).toLocaleString()})\n`;
  });
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  message += `\nEstimated Value: $${subtotal.toLocaleString()} USD`;
  message += `\nPlease provide shipping FOB quote, container CBM estimates, and lead time. Thank you!`;

  const encoded = encodeURIComponent(message);
  window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  showToast('Opening WhatsApp with your generated export quotation...');
};

// Handle RFQ Form Submission
function handleRfqSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const company = formData.get('company') || 'Client';
  const country = formData.get('country') || 'International';

  showToast(`✅ Thank you! Export RFQ for ${company} (${country}) submitted successfully. Our export desk will reply within 4 hours.`);
  e.target.reset();
}

// Trigger Catalog Download Simulation
function triggerCatalogDownload() {
  showToast('📥 Preparing Xpero+ 2026 Lighting Catalog (PDF)...');
  setTimeout(() => {
    // Generate simulated download
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Xpero_Plus_Lighting_Catalog_2026.pdf');
    showToast('✨ Catalog ready! For bulk spec sheets, contact export@xperoplus.com');
  }, 1000);
}

// Toast Notification System
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3800);
}
