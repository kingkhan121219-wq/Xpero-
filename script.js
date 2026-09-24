/* ==========================================================================
   Xpero+ - Interactive Logic & E-Commerce / Export Engine
   ========================================================================== */

// 6 Signature Lamps Product Dataset
const signatureLamps = [
  {
    id: 1,
    number: "1",
    name: "Decorative Leaf Shape MDF Table Lamp (33 × 40 cm)",
    shortName: "Decorative Leaf Shape Table Lamp",
    model: "ASXZ96",
    asin: "B0GC67J113",
    amazonUrl: "https://amzn.in/d/0jknCFlE",
    tagline: "Fine MDF Leaf-Layered Silhouette • 4W E27 Bulb Included • Moradabad Handicraft",
    price: 27, // ~$27 USD
    inrPrice: 2219, // ₹2,219 on Amazon India
    exportFob: "$14 - $18 / unit (MOQ 15) • Amazon Retail: ₹2,219",
    moq: "15 Units",
    image: "assets/images/lamp-1.jpg",
    description: "Featured on Amazon (ASIN: B0GC67J113). An elegant decorative table lamp crafted from premium fine MDF wood with a biophilic leaf-layered structure and flared fluted base. Emits a soft, soothing warm white ambient glow that casts mesmerizing botanical leaf shadows across bedrooms, living rooms, center tables, and cafes. Completely ready to use with an energy-efficient 4W E27 warm LED bulb, sturdy table stand, and corded push-button switch included.",
    specs: {
      "Brand / Model": "XPERO+ • Model ASXZ96 (ASIN: B0GC67J113)",
      "Dimensions": "33 cm (Dia) × 40 cm (Height)",
      "Materials": "Premium Fine MDF Wood & Engineered Metal Accents",
      "Bulb & Socket": "E27 Standard Base • 4W Warm LED Bulb Included",
      "Color & Finish": "Natural Wood Brown (Warm White 2700K Ambient Glow)",
      "Switch / Control": "Corded Electric with Push Button Switch (Plug & Play)",
      "Item Weight": "1,493 Grams (1.49 kg)",
      "Application": "Bedroom Bedside, Living Room, Office Desk, Cafe Decor",
      "Origin": "Handcrafted by XPERO+, Moradabad, Uttar Pradesh, India"
    }
  },
  {
    id: 2,
    number: "2",
    name: "Spherical Wooden Pendant Lamp (52 × 52 × 33 cm)",
    shortName: "Spherical Wooden Pendant Lamp",
    model: "ASXZ_865",
    asin: "B0GJCXWHW5",
    amazonUrl: "https://amzn.in/d/0bb2YuIl",
    tagline: "Sweeping Interlocking Wood Ribbons • E14 4W Bulb Included • Ceiling Pendant",
    price: 29, // ~$29 USD
    inrPrice: 2399, // ₹2,399 on Amazon India
    exportFob: "$16 - $22 / unit (MOQ 10) • Amazon Retail: ₹2,399",
    moq: "10 Units",
    image: "assets/images/lamp-2-spherical.jpg",
    description: "Featured on Amazon (ASIN: B0GJCXWHW5). An exquisite sculptural spherical wooden pendant lamp crafted from premium smooth-finished wood in a fluid, interlocking ribbon design. The open-slat structure evenly diffuses soft, warm white light, creating a comforting, high-end ambiance over dining tables, living rooms, hotel lounges, and cafes. Equipped with a heat-resistant E14 socket, ceiling canopy, and 4W warm LED bulb.",
    specs: {
      "Brand / Model": "XPERO+ • Model ASXZ_865 (ASIN: B0GJCXWHW5)",
      "Dimensions": "52 cm (L) × 52 cm (W) × 33 cm (H)",
      "Materials": "Premium Smooth Finished Wood & Powder-Coated Metal",
      "Bulb & Socket": "E14 Standard Base • 4W Warm LED Bulb Included",
      "Color & Finish": "Natural Wood Brown (Warm White Ambient Downlight)",
      "Mounting Type": "Ceiling Mount Pendant with Heat-Resistant Canopy",
      "Item Weight": "1,480 Grams (1.48 kg)",
      "Application": "Dining Table Centerpiece, Living Room, Hotel & Cafe Decor",
      "Origin": "Handcrafted by XPERO+, Moradabad, Uttar Pradesh, India"
    }
  },
  {
    id: 3,
    number: "3",
    name: "Cylindrical Wavy Wooden Pendant",
    shortName: "Cylindrical Wavy Wooden Pendant",
    model: "ASXZ_254",
    asin: "B0GHNZ3WMZ",
    amazonUrl: "https://amzn.in/d/0jajNNNz",
    tagline: "Fine MDF Undulating Wood Slats • E27 4W Bulb Included • 1.14m Adjustable Cord",
    price: 19, // ~$19 USD
    inrPrice: 1589, // ₹1,589 on Amazon India
    exportFob: "$10 - $14 / unit (MOQ 15) • Amazon Retail: ₹1,589",
    moq: "15 Units",
    image: "assets/images/lamp-3-cylindrical.jpg",
    description: "Featured on Amazon (ASIN: B0GHNZ3WMZ). An exquisite cylindrical hanging pendant light crafted from fine MDF wood with undulating wavy vertical slats and an antique brown finish. The open-slat geometry projects captivating vertical light streaks and ambient warmth, ideal for living rooms, dining spaces, cafe tables, and bedrooms. Includes a heat-resistant E27 socket, 4W warm LED bulb, 1.14m adjustable suspension cord, and sturdy black ceiling mount.",
    specs: {
      "Brand / Model": "XPERO+ • Model ASXZ_254 (ASIN: B0GHNZ3WMZ)",
      "Dimensions": "37 cm (L) × 18 cm (W) × 37 cm (H)",
      "Materials": "Premium Fine MDF Wood & Powder-Coated Metal Hardware",
      "Bulb & Socket": "E27 Universal Base • 4W Warm LED Bulb Included",
      "Hanging Cord": "1.14 Meter Adjustable Cord for Custom Drop Heights",
      "Color & Finish": "Antique Brown Wood (Warm White 2700K Ambient Downlight)",
      "Mounting Type": "Ceiling Mount / Flush Mount with Black Canopy Plate",
      "Item Weight": "470 Grams",
      "Application": "Living Room, Dining Area, Bedroom, Cafe, Restaurant, Hotel Decor",
      "Origin": "Handcrafted by XPERO+, Moradabad, Uttar Pradesh, India"
    }
  },
  {
    id: 4,
    number: "4",
    name: "Spherical Ribbed Wooden Pendant",
    shortName: "Spherical Ribbed Wooden Pendant",
    model: "ASXZ_9963",
    asin: "B0GC5GKHJM",
    amazonUrl: "https://amzn.in/d/0baG7P7l",
    tagline: "Fine MDF Modern Cut-Pattern Shade • E27 4W Bulb Included • 1.02m Adjustable Cord",
    price: 18, // ~$18 USD
    inrPrice: 1499, // ₹1,499 on Amazon India
    exportFob: "$9 - $13 / unit (MOQ 15) • Amazon Retail: ₹1,499",
    moq: "15 Units",
    image: "assets/images/lamp-4-ribbed.jpg",
    description: "Featured on Amazon (ASIN: B0GC5GKHJM). A striking spherical ribbed hanging pendant light crafted from fine-quality MDF wood with a modern cut-pattern shade and antique brown finish. Casts warm radial patterns and soothing ambient downlight across living rooms, dining tables, cafe counters, and bedrooms. Complete with a heat-resistant E27 holder, 4W warm LED bulb, 1.02m adjustable suspension cord, and black ceiling mount plate.",
    specs: {
      "Brand / Model": "XPERO+ • Model ASXZ_9963 (ASIN: B0GC5GKHJM)",
      "Dimensions": "25 cm (L) × 20 cm (W) × 25 cm (H)",
      "Materials": "Premium Fine MDF Wood & Powder-Coated Metal Hardware",
      "Bulb & Socket": "E27 Standard Base • 4W Warm LED Bulb Included",
      "Hanging Cord": "1.02 Meter Adjustable Cord for Custom Drop Heights",
      "Color & Finish": "Antique Brown Wood (Warm White 2700K Ambient Downlight)",
      "Mounting Type": "Ceiling Mount / Flush Mount with Canopy Plate",
      "Item Weight": "450 Grams",
      "Application": "Living Room, Dining Area, Bedroom, Cafe, Restaurant, Kitchen Bar",
      "Origin": "Handcrafted by XPERO+, Moradabad, Uttar Pradesh, India"
    }
  },
  {
    id: 5,
    number: "5",
    name: "Artisanal Tulip Wooden Table Lamp",
    shortName: "Artisanal Tulip Wooden Table Lamp",
    model: "ASX596",
    asin: "B0GK72LC7J",
    amazonUrl: "https://amzn.in/d/0f9HJvLJ",
    tagline: "Pine MDF Sculptural Goblet Shade • E27 4W Bulb Included • Tabletop Night Lamp",
    price: 23, // ~$23 USD
    inrPrice: 1899, // ₹1,899 on Amazon India
    exportFob: "$12 - $16 / unit (MOQ 15) • Amazon Retail: ₹1,899",
    moq: "15 Units",
    image: "assets/images/lamp-5-tulip.jpg",
    description: "Featured on Amazon (ASIN: B0GK72LC7J). An organic sculptural table lamp crafted from fine Pine MDF wood in a modern tulip-inspired goblet silhouette. Radiates a comforting, warm white ambient uplight that casts mesmerizing geometric shadows across side tables, bedroom bedside stands, study desks, and cafe tables. Comes complete with a 4W E27 energy-efficient LED bulb, corded electric power switch, and stable weighted base.",
    specs: {
      "Brand / Model": "XPERO+ • Model ASX596 (ASIN: B0GK72LC7J)",
      "Dimensions": "22.5 cm (Dia) × 42 cm (Height)",
      "Materials": "High-Quality Pine MDF Wood & Powder-Coated Metal Hardware",
      "Bulb & Socket": "E27 Universal Base • 4W Warm LED Bulb Included",
      "Lighting Method": "Uplight Ambient Warm Glow (2700K Warm White)",
      "Switch / Control": "Corded Electric with Push Button Switch (Plug & Play)",
      "Item Weight": "855 Grams",
      "Mounting Type": "Tabletop / Desk Stand",
      "Application": "Bedside Night Lamp, Office Desk, Center Table, Living Room & Cafe Decor",
      "Origin": "Handcrafted by XPERO+, Moradabad, Uttar Pradesh, India"
    }
  },
  {
    id: 6,
    number: "6",
    name: "Teardrop Slatted Wooden Pendant",
    shortName: "Teardrop Slatted Wooden Pendant",
    model: "ASXZ_296",
    asin: "B0GHN86JTF",
    amazonUrl: "https://amzn.in/d/0eo1vlnf",
    tagline: "Fine MDF Contoured Wood Drop • E27 4W Bulb Included • 1.12m Adjustable Cord",
    price: 19, // ~$19 USD
    inrPrice: 1589, // ₹1,589 on Amazon India
    exportFob: "$10 - $14 / unit (MOQ 15) • Amazon Retail: ₹1,589",
    moq: "15 Units",
    image: "assets/images/lamp-6-teardrop.jpg",
    description: "Featured on Amazon (ASIN: B0GHN86JTF). An elegant teardrop-shaped hanging ceiling pendant crafted from fine MDF wood with smooth natural antique brown finish and sweeping curved vertical slats. Diffuses soothing warm white light, projecting artistic linear shadows and inviting warmth across dining rooms, bedside spaces, cafes, and living areas. Comes with a heat-resistant E27 socket, 4W warm LED bulb, 1.12m adjustable hanging cord, and durable black ceiling plate.",
    specs: {
      "Brand / Model": "XPERO+ • Model ASXZ_296 (ASIN: B0GHN86JTF)",
      "Dimensions": "28 cm (L) × 28 cm (W) × 30.5 cm (H)",
      "Materials": "Premium Fine MDF Wood & Powder-Coated Metal Hardware",
      "Bulb & Socket": "E27 Universal Base • 4W Warm LED Bulb Included",
      "Hanging Cord": "1.12 Meter Adjustable Cord for Custom Drop Heights",
      "Color & Finish": "Antique Brown Wood (Warm White 2700K Ambient Downlight)",
      "Mounting Type": "Ceiling Mount / Flush Mount with Black Canopy Plate",
      "Item Weight": "524 Grams",
      "Application": "Living Room, Dining Area, Bedroom, Cafe, Restaurant, Balcony Decor",
      "Origin": "Handcrafted by XPERO+, Moradabad, Uttar Pradesh, India"
    }
  }
];

// State Management
let cart = [];
try {
  const saved = localStorage.getItem('xpero_cart');
  if (saved) {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) cart = parsed;
  }
} catch (err) {
  console.warn('Failed to parse cart from localStorage:', err);
  cart = [];
}

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
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

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
  if (heroAmbientSlider) {
    applyHeroAmbient(heroAmbientSlider.value);
  }
});

// Ambient helpers
function applyHeroAmbient(val) {
  if (heroSliderValue) heroSliderValue.textContent = `${val}%`;
  if (heroImage) {
    const brightness = 0.6 + (val / 100) * 0.55; // 0.6 to 1.15
    const warmGlow = 1 + (val / 100) * 0.35;
    heroImage.style.filter = `brightness(${brightness}) contrast(${warmGlow}) saturate(1.15)`;
  }
}

function applyModalDimmer(tempK) {
  if (modalTempDisplay) modalTempDisplay.textContent = `${tempK}K`;
  if (modalImage) {
    const warmthRatio = (4000 - tempK) / 1800; // 0 (4000K) to 1 (2200K)
    modalImage.style.filter = `sepia(${warmthRatio * 0.45}) saturate(${1 + warmthRatio * 0.4}) brightness(${0.85 + warmthRatio * 0.25})`;
  }
}

// Event Listeners Setup
function setupEventListeners() {
  // Mobile Navigation Menu Toggle
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('mobile-open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // Ambient Mode Toggle
  if (ambientToggleBtn) {
    ambientToggleBtn.addEventListener('click', toggleCozyMode);
  }

  // Hero Room Ambient Dimmer Slider
  if (heroAmbientSlider) {
    heroAmbientSlider.addEventListener('input', (e) => {
      applyHeroAmbient(e.target.value);
    });
  }

  // Quick View Dimmer Slider
  if (modalDimmerSlider) {
    modalDimmerSlider.addEventListener('input', (e) => {
      applyModalDimmer(e.target.value);
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
      if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('mobile-open');
      }
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
  modalProductRetail.textContent = product.inrPrice ? `₹${product.inrPrice.toLocaleString('en-IN')} INR ($${product.price} USD)` : `$${product.price} USD`;
  modalProductExport.textContent = `Export FOB: ${product.exportFob}`;
  modalProductDesc.textContent = product.description;
  modalImage.src = product.image;
  modalImage.alt = product.name;
  
  if (modalDimmerSlider) {
    modalDimmerSlider.value = 2700;
    applyModalDimmer(2700);
  }

  // Render Specifications Table
  modalSpecTableBody.innerHTML = '';
  for (const [key, value] of Object.entries(product.specs)) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${key}</td><td>${value}</td>`;
    modalSpecTableBody.appendChild(tr);
  }

  // Render Amazon Link Button if available
  const amazonBox = document.getElementById('modalAmazonLinkContainer');
  if (amazonBox) {
    if (product.amazonUrl) {
      amazonBox.innerHTML = `
        <a href="${product.amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn-amazon-buy">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.93 17.09c-2.68 1.98-6.57 2.4-9.84.81-1.39-.68-2.6-1.74-3.56-3.02-.13-.18-.08-.43.1-.56.17-.12.4-.08.54.09.84 1.13 1.91 2.06 3.14 2.66 2.87 1.39 6.27 1.02 8.62-.71.18-.13.43-.09.56.09.13.18.09.43-.09.56l.53.08zm1.09-2.09c-.23-.29-.91-.14-1.26-.06-.11.02-.13-.08-.03-.15.65-.47 1.72-.34 1.98.01.27.35-.07 1.43-.7 1.92-.09.07-.18.04-.15-.06.12-.34.39-1.37.16-1.66zm5.83 5.4c-1.34 1.05-3.32 1.63-5.38 1.63-3.66 0-6.93-1.84-8.85-4.72-.12-.18-.08-.42.09-.54.17-.12.41-.08.53.1 1.74 2.6 4.69 4.26 8.23 4.26 1.86 0 3.65-.52 4.86-1.47.16-.13.41-.09.54.07.13.17.09.41-.07.54l.05-.07z"/></svg>
          Buy Now on Amazon.in (${product.inrPrice ? '₹' + product.inrPrice.toLocaleString('en-IN') : '$' + product.price + ' USD'})
        </a>
      `;
      amazonBox.style.display = 'block';
    } else {
      amazonBox.innerHTML = '';
      amazonBox.style.display = 'none';
    }
  }

  quickViewBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
  if (quickViewBackdrop) {
    quickViewBackdrop.classList.remove('open');
  }
  document.body.style.overflow = '';
};

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

window.updateCartQty = function(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
    showToast(`Removed "${item.name}" from quote.`);
  }
  saveCart();
  renderCart();
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
  const item = cart.find(i => i.id === productId);
  const name = item ? item.name : 'Item';
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  renderCart();
  showToast(`Removed "${name}" from quotation.`);
};

function saveCart() {
  try {
    localStorage.setItem('xpero_cart', JSON.stringify(cart));
  } catch (e) {
    console.warn('Could not save cart to localStorage:', e);
  }
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
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
        <p style="font-size: 2.5rem; margin-bottom: 0.8rem;">🕯️</p>
        <p style="font-weight: 600; font-size: 1.1rem; color: var(--text-main);">Your cart is empty</p>
        <p style="font-size: 0.85rem; margin-top: 0.4rem; margin-bottom: 1.2rem; line-height: 1.5;">Select lamps from our collection or click below to add all 6 signature pieces to buy in 1-click on Amazon.</p>
        <button class="btn-overlay-action" style="position: static; display: inline-flex;" onclick="addAllLampsToCart()">+ Add All 6 Signature Lamps</button>
      </div>
    `;
    if (drawerSubtotal) drawerSubtotal.textContent = '₹0 / $0';
    if (drawerTotalItems) drawerTotalItems.textContent = '0 items selected';
    return;
  }

  let subtotal = 0;
  let inrSubtotal = 0;
  drawerItemsList.innerHTML = cart.map(item => {
    const lamp = signatureLamps.find(l => l.id === item.id) || item;
    const itemTotal = (lamp.price || item.price || 0) * item.qty;
    const itemInrTotal = (lamp.inrPrice || 0) * item.qty;
    subtotal += itemTotal;
    inrSubtotal += itemInrTotal;
    return `
      <div class="cart-item-card">
        <img src="${item.image || lamp.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-price">
            ₹${itemInrTotal.toLocaleString('en-IN')}
            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 400;">(~$${itemTotal} USD)</span>
          </div>
          <div class="cart-item-actions-row">
            <div class="cart-qty-stepper">
              <button type="button" class="btn-qty-step" onclick="updateCartQty(${item.id}, -1)" title="Decrease quantity">&minus;</button>
              <span class="cart-qty-value">${item.qty}</span>
              <button type="button" class="btn-qty-step" onclick="updateCartQty(${item.id}, 1)" title="Increase quantity">&plus;</button>
            </div>
            ${lamp.amazonUrl ? `
              <a href="${lamp.amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn-item-amazon-direct" title="Buy this lamp on Amazon India">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M15.93 17.09c-2.68 1.98-6.57 2.4-9.84.81-1.39-.68-2.6-1.74-3.56-3.02-.13-.18-.08-.43.1-.56.17-.12.4-.08.54.09.84 1.13 1.91 2.06 3.14 2.66 2.87 1.39 6.27 1.02 8.62-.71.18-.13.43-.09.56.09.13.18.09.43-.09.56l.53.08zm1.09-2.09c-.23-.29-.91-.14-1.26-.06-.11.02-.13-.08-.03-.15.65-.47 1.72-.34 1.98.01.27.35-.07 1.43-.7 1.92-.09.07-.18.04-.15-.06.12-.34.39-1.37.16-1.66zm5.83 5.4c-1.34 1.05-3.32 1.63-5.38 1.63-3.66 0-6.93-1.84-8.85-4.72-.12-.18-.08-.42.09-.54.17-.12.41-.08.53.1 1.74 2.6 4.69 4.26 8.23 4.26 1.86 0 3.65-.52 4.86-1.47.16-.13.41-.09.54.07.13.17.09.41-.07.54l.05-.07z"/></svg>
                <span>Buy on Amazon</span> ↗
              </a>
            ` : ''}
          </div>
        </div>
        <button class="btn-remove-item" onclick="removeFromCart(${item.id})" title="Remove item">&times;</button>
      </div>
    `;
  }).join('');

  if (drawerSubtotal) {
    drawerSubtotal.innerHTML = `₹${inrSubtotal.toLocaleString('en-IN')} <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 400;">(~$${subtotal.toLocaleString()} USD)</span>`;
  }
  if (drawerTotalItems) {
    drawerTotalItems.textContent = `${totalCount} item${totalCount > 1 ? 's' : ''} ready to buy on Amazon`;
  }
}

window.openCart = function() {
  if (cartDrawerOverlay) {
    cartDrawerOverlay.classList.add('open');
  }
  document.body.style.overflow = 'hidden';
};

window.closeCart = function() {
  if (cartDrawerOverlay) {
    cartDrawerOverlay.classList.remove('open');
  }
  document.body.style.overflow = '';
};

// Buy All Selected Lamps on Amazon India
window.buyAllOnAmazon = function() {
  if (!cart || cart.length === 0) {
    // If no lamps are selected yet, automatically add all 6 signature lamps
    addAllLampsToCart();
  }

  const selectedItems = cart.map(item => {
    const lamp = signatureLamps.find(l => l.id === item.id) || item;
    return {
      id: item.id,
      name: item.name,
      qty: item.qty,
      url: lamp.amazonUrl || (lamp.asin ? `https://www.amazon.in/dp/${lamp.asin}` : null),
      price: lamp.inrPrice || 0
    };
  }).filter(item => item.url);

  if (selectedItems.length === 0) {
    showToast('No valid Amazon listings found for selected items.');
    return;
  }

  // Open the first selected product page immediately in a new tab
  showToast(`🛒 Opening ${selectedItems[0].name} on Amazon India...`);
  window.open(selectedItems[0].url, '_blank', 'noopener,noreferrer');

  // If multiple items are selected, open subsequent items in separate tabs with a staggered delay
  if (selectedItems.length > 1) {
    for (let i = 1; i < selectedItems.length; i++) {
      const item = selectedItems[i];
      setTimeout(() => {
        window.open(item.url, '_blank', 'noopener,noreferrer');
      }, i * 250);
    }
    showToast(`🛒 Opened ${selectedItems.length} selected lamps on Amazon India! Click "Buy Now" on Amazon.`);
  }
};

// Generate & Dispatch Export Quote to WhatsApp
window.dispatchWhatsAppQuote = function() {
  if (cart.length === 0) {
    showToast('Please add lamps to your quote first.');
    return;
  }

  let message = `Hello Xpero+ Team! I am interested in placing an export/wholesale order for the following signature lamps:\n\n`;
  cart.forEach((item, idx) => {
    const lamp = signatureLamps.find(l => l.id === item.id) || item;
    const inr = (lamp.inrPrice || 0) * item.qty;
    message += `${idx + 1}. ${item.name} - Qty: ${item.qty} (₹${inr.toLocaleString('en-IN')} / $${(item.price * item.qty).toLocaleString()} USD)\n`;
  });
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  message += `\nEstimated Value: $${subtotal.toLocaleString()} USD`;
  message += `\nPlease provide shipping FOB quote, container CBM estimates, and lead time. Thank you!`;

  const encoded = encodeURIComponent(message);
  window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${encoded}`, '_blank', 'noopener,noreferrer');
  showToast('Opening WhatsApp with your generated export quotation...');
};

// Handle RFQ Form Submission
function handleRfqSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get('name') || '';
  const company = formData.get('company') || 'Client';
  const email = formData.get('email') || '';
  const country = formData.get('country') || 'International';
  const lampInterest = formData.get('lamp_interest') || 'All Signature Lamps';
  const quantity = formData.get('quantity') || 'Commercial Batch';
  const notes = formData.get('notes') || '';

  showToast(`✅ Thank you, ${name}! Export RFQ for ${company} (${country}) submitted. Opening WhatsApp Export Desk...`);

  const rfqMsg = `*XPERO+ WHOLESALE RFQ INQUIRY*\n` +
    `👤 *Name:* ${name}\n` +
    `🏢 *Company:* ${company}\n` +
    `📧 *Email:* ${email}\n` +
    `🌍 *Destination Country:* ${country}\n` +
    `💡 *Lamp Selection:* ${lampInterest}\n` +
    `📦 *Order Volume:* ${quantity}\n` +
    (notes ? `📝 *Specifications / Port:* ${notes}\n` : '') +
    `\nPlease provide our B2B trade catalog and quotation.`;

  const encoded = encodeURIComponent(rfqMsg);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=919876543210&text=${encoded}`;

  setTimeout(() => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, 1000);

  e.target.reset();
}

// Trigger Catalog Lookbook Download
function triggerCatalogDownload() {
  showToast('📥 Generating Xpero+ 2026 Lighting Lookbook...');
  
  const catalogHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Xpero+ Lighting Lookbook 2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 20px; background: #fdfbf7; color: #271d17; max-width: 900px; margin: 0 auto; line-height: 1.6; }
    .header { text-align: center; border-bottom: 2px solid #df8f3b; padding-bottom: 24px; margin-bottom: 32px; }
    h1 { font-family: Georgia, serif; font-size: 32px; letter-spacing: 0.05em; text-transform: uppercase; margin: 0 0 8px 0; color: #271d17; }
    .sub { color: #df8f3b; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.15em; margin: 0; }
    .intro { font-size: 14px; color: #6e5e54; margin-top: 12px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
    .card { background: #ffffff; border: 1px solid #e6dacd; border-radius: 8px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.04); }
    .pill { display: inline-block; background: #df8f3b; color: #fff; font-size: 11px; font-weight: bold; border-radius: 999px; padding: 2px 8px; margin-bottom: 8px; }
    .card h3 { font-family: Georgia, serif; font-size: 18px; margin: 0 0 6px 0; color: #271d17; }
    .tagline { font-size: 12px; color: #9c8a7e; font-style: italic; margin-bottom: 10px; }
    .desc { font-size: 13px; color: #6e5e54; margin-bottom: 12px; }
    .price-box { border-top: 1px solid #f0e6dc; padding-top: 10px; font-size: 13px; font-weight: 600; display: flex; justify-content: space-between; }
    .footer { margin-top: 40px; border-top: 1px solid #e6dacd; padding-top: 20px; text-align: center; font-size: 12px; color: #9c8a7e; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Xpero+</h1>
    <p class="sub">Artisanal Lighting & Export Portfolio 2026</p>
    <p class="intro">Multi-Market UL/CE/RoHS Certified | Worldwide Container Freight | export@xperoplus.com</p>
  </div>
  <div class="grid">
    ${signatureLamps.map(l => `
      <div class="card">
        <span class="pill">Piece #${l.number}</span>
        <h3>${l.name}</h3>
        <div class="tagline">${l.tagline}</div>
        <p class="desc">${l.description}</p>
        <div class="price-box">
          <span>Retail: ${l.inrPrice ? '₹' + l.inrPrice.toLocaleString('en-IN') + ' ($' + l.price + ' USD)' : '$' + l.price}</span>
          <span style="color: #df8f3b;">FOB: ${l.exportFob}</span>
        </div>
      </div>
    `).join('')}
  </div>
  <div class="footer">
    © 2026 Xpero+. All Rights Reserved. Official Export Desk: +91 98765 43210 | export@xperoplus.com
  </div>
</body>
</html>`;

  const blob = new Blob([catalogHtml], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Xpero_Plus_Export_Lookbook_2026.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 10000);

  setTimeout(() => {
    showToast('✨ Lookbook 2026 downloaded! Double-click to view or print as PDF.');
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

// Global window bindings
window.toggleCozyMode = toggleCozyMode;
window.triggerCatalogDownload = triggerCatalogDownload;

