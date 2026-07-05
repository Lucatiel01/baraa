// ================================================================
//  TRANSLATIONS
// ================================================================

const translations = {
  en: {
    'page-title':           'مخيم البراء — Al-Bara\'a Camp',
    'nav-about':            'About',
    'nav-community':        'Community',
    'nav-aid':              'Aid',
    'nav-needs':            'Needs',
    'nav-contact':          'Contact',
    'hero-sub':             "Al-Bara'a Camp",
    'hero-tagline':         'Dignity. Resilience. Hope. — A community standing together.',
    'hero-cta':             'Partner With Us',
    'stat-residents':       'Residents',
    'stat-youth':           'Children & Youth',
    'stat-families':        'Families',
    'stat-est':             'Established',
    'about-title':          'Who We Are',
    'about-placeholder':    'Your Photo Here',
    'about-p1':             ' — Al-Bara\'a Camp is home to over 756 displaced people living in Gaza. We are farmers, teachers, artisans, and students — a community that refuses to be defined by displacement. Despite limited resources, we run a tight-knit community. Our goal is simple: survive with dignity and build a future for our children while we wait for peace.',
    'community-title':      'Our Community',
    'community-desc':       'Daily life, resilience, and the spirit of Al-Bara\'a. These are the faces and moments that make our camp a home.',
    'gallery-more':         'View All (%s)',
    'testimonials-title':   'Voices From the Camp',
    'testimonials-desc':    'What our community says about life at Al-Bara\'a.',
    'aid-title':            'Aid & Transparency',
    'aid-desc':             'Every delivery, every distribution — documented so you can see exactly how support reaches our community.',
    'needs-title':          'Urgent Needs',
    'needs-desc':           'These are our most critical shortages right now. Any support — large or small — makes a difference.',
    'need-1-title':         'Medical Supplies',
    'need-1-desc':          'Our clinic is out of basic antibiotics, painkillers, and chronic-disease medication. 1 in 3 children has not received routine vaccinations.',
    'need-2-title':         'Winter Tents & Blankets',
    'need-2-desc':          'Winter temperatures drop below freezing. Over 200 families lack proper thermal blankets or waterproof tent sheeting.',
    'need-3-title':         'Education Materials',
    'need-3-desc':          'Our school serves 400+ children but lacks textbooks, notebooks, and basic classroom supplies. Teachers work without salaries.',
    'need-4-title':         'Clean Water Infrastructure',
    'need-4-desc':          'The camp\'s water trucking is inconsistent. A solar-powered well and filtration system would serve the entire camp.',
    'need-5-title':         'Psychosocial Support',
    'need-5-desc':          'War and displacement have taken a heavy toll. We need trained counselors and safe spaces for children and women.',
    'contact-title':        'Partner With Us',
    'contact-desc':         'If your organization can help — or if you want to learn more about our situation — please reach out. Transparency and partnership are our foundation.',
    'contact-rep-label':    'Camp Representative',
    'contact-rep-value':    'Abu Ali Al-Astal',
    'contact-email-label':  'Email',
    'contact-email-value':  'info@albaracamp.org',
    'contact-phone-label':  'Signal / WhatsApp',
    'contact-phone-value':  '+963 9XX XXX XXX',
    'contact-loc-label':    'Location',
    'contact-loc-value':    'Khan Younis, south of Street 5, 50m in',
    'contact-social-label': 'Follow Us',
    'footer-tagline':       'Built by the community, for the community.',
    'map-credit':           'Location: 40m inside the sandy road, after Al-Biko Chalet, opposite Shahd Hall',
  },
  ar: {
    'page-title':           'مخيم البراء',
    'nav-about':            'عن المخيم',
    'nav-community':        'المجتمع',
    'nav-aid':              'المساعدات',
    'nav-needs':            'الاحتياجات',
    'nav-contact':          'اتصل',
    'hero-sub':             'مخيم البراء',
    'hero-tagline':         'كرامة. صمود. أمل. — مجتمع يقف معاً',
    'hero-cta':             'شاركنا',
    'stat-residents':       'نسمة',
    'stat-youth':           'أطفال وشباب',
    'stat-families':        'عائلة',
    'stat-est':             'تأسس',
    'about-title':          'من نحن',
    'about-placeholder':    'ضع صورتك هنا',
    'about-p1':             ' — موطن لأكثر من ٧٥٦ نازحاً في غزة. نحن مزارعون، معلمون، حرفيون، وطلاب — مجتمع يرفض أن يُعرّف بالنزوح. رغم الموارد المحدودة، ندير مجتمعاً متماسكاً. هدفنا بسيط: العيش بكرامة وبناء مستقبل لأطفالنا بينما ننتظر السلام.',
    'community-title':      'مجتمعنا',
    'community-desc':       'الحياة اليومية، الصمود، وروح مخيم البراء. هذه هي الوجوه واللحظات التي تجعل مخيمنا وطناً.',
    'gallery-more':         'عرض الكل',
    'testimonials-title':   'صوت من المخيم',
    'testimonials-desc':    'ما يقوله مجتمعنا عن الحياة في مخيم البراء.',
    'aid-title':            'المساعدات والشفافية',
    'aid-desc':             'كل شحنة، كل توزيع — موثق لترى بالضبط كيف يصل الدعم إلى مجتمعنا.',
    'needs-title':          'احتياجات عاجلة',
    'needs-desc':           'هذه هي أهم النواقص الحرجة حالياً. أي دعم — كبيراً كان أم صغيراً — يُحدث فرقاً.',
    'need-1-title':         'مستلزمات طبية',
    'need-1-desc':          'عيادتنا تفتقر للمضادات الحيوية الأساسية، مسكنات الألم، وأدوية الأمراض المزمنة. طفل من كل ٣ لم يتلق التطعيمات الروتينية.',
    'need-2-title':         'خيام شتوية وبطانيات',
    'need-2-desc':          'درجات الحرارة في الشتاء تنزل تحت الصفر. أكثر من ٢٠٠ عائلة تفتقر إلى بطانيات حرارية أو أغطية خيام مقاومة للماء.',
    'need-3-title':         'مواد تعليمية',
    'need-3-desc':          'مدرستنا تخدم أكثر من ٤٠٠ طفل ولكنها تفتقر إلى الكتب المدرسية والدفاتر واللوازم الصفية الأساسية. المعلمون يعملون بدون رواتب.',
    'need-4-title':         'بنية تحتية للمياه النظيفة',
    'need-4-desc':          'نقل المياه إلى المخيم غير منتظم. بئر يعمل بالطاقة الشمسية ونظام ترشيح يمكن أن يخدم المخيم بأكمله.',
    'need-5-title':         'دعم نفسي واجتماعي',
    'need-5-desc':          'الحرب والنزوح تركا آثاراً عميقة. نحتاج إلى مرشدين مدربين ومساحات آمنة للأطفال والنساء.',
    'contact-title':        'شاركنا',
    'contact-desc':         'إذا كانت مؤسستك تستطيع المساعدة — أو إذا كنت ترغب في معرفة المزيد عن وضعنا — تواصل معنا. الشفافية والشراكة هما أساسنا.',
    'contact-rep-label':    'ممثل المخيم',
    'contact-rep-value':    'أبو علي الاسطل',
    'contact-email-label':  'البريد الإلكتروني',
    'contact-email-value':  'info@albaracamp.org',
    'contact-phone-label':  'سيغنال / واتساب',
    'contact-phone-value':  '+963 9XX XXX XXX',
    'contact-loc-label':    'الموقع',
    'contact-loc-value':    'مواصي خانيونس جنوب شارع خمسة ب50 متر',
    'contact-social-label': 'تابعنا',
    'footer-tagline':       'بُني من قبل المجتمع، لأجل المجتمع.',
    'map-credit':           'الموقع:40 متر داخل الشارع الرملي بعد شاليه البيكو امام صالة شهد',
  },
};

// ================================================================
//  EDIT YOUR GALLERY PHOTOS HERE
//  { src: '', caption: { en: '...', ar: '...' } }
// ================================================================

const communityPhotos = [
  { src: ['images/volly.jpg'], caption: { en: 'the youth playing vollyball', ar: 'كرة الطائرة' } },
  { src: ['images/kids.jpg'], caption: { en: 'kids and teens', ar: 'اطفال و شباب' } },
  { src: [], caption: { en: 'Children playing in the common area', ar: 'أطفال يلعبون في الساحة المشتركة' } },
  { src: [], caption: { en: 'Harvesting olives on the outskirts', ar: 'قطف الزيتون في أطراف المخيم' } },
  { src: [], caption: { en: 'Eid celebration with the whole camp', ar: 'احتفال العيد مع المخيم كاملاً' } },
  { src: [], caption: { en: 'Teenagers at the community library', ar: 'شباب في مكتبة المجتمع' } },
];

const aidDeliveries = [
  { src: ['images/bread.jpeg', 'images/bread2.jpeg'], caption: { en: 'Bread distribution to families', ar: 'توزيع الخبز على العائلات' }, date: '26/6/2026' },
  { src: [], caption: { en: 'Medical supplies delivered to the camp clinic — antibiotics & first-aid kits', ar: 'وصول مستلزمات طبية إلى عيادة المخيم — مضادات حيوية وحقائب إسعاف أولي' }, date: 'May 2026' },
  { src: ['images/kids-teens guidence lecture .jpeg','images/guide2.jpg'], caption: { en: 'Guidence lecture given to childern and teens by We World ORG staff', ar: 'محاضرة إرشادية مقدمة للأطفال واليافعين من قِبل طاقم منظمة We World' }, date: '29/6/2026' },
  { src: ['images/water.jpg', 'images/water2.jpg', 'images/water3.jpg'], caption: { en: 'Water trucking: 15,000L of clean drinking water delivered', ar: 'توزيع ١٥٠٠٠ لتر من مياه الشرب النظيفة' }, date: 'Mar 2026' },
];

// ================================================================
//  EDIT TESTIMONIALS (add or remove quotes)
// ================================================================

const testimonials = [
  { quote: { en: 'Before the school opened, my children had nowhere to go. Now they learn, play, and dream again.', ar: 'قبل افتتاح المدرسة، لم يكن لأطفالي مكان يذهبون إليه. الآن يتعلمون ويلعبون ويحلمون من جديد.' }, name: { en: 'Umm Khalid', ar: 'أم خالد' }, role: { en: 'Mother of four', ar: 'أم لأربعة أطفال' } },
  { quote: { en: 'The women\'s cooperative gave us a way to earn and support our families with dignity.', ar: 'التعاونية النسائية أعطتنا وسيلة لكسب العيش ودعم عائلاتنا بكرامة.' }, name: { en: 'Layla', ar: 'ليلى' }, role: { en: 'Cooperative member', ar: 'عضوة في التعاونية' } },
  { quote: { en: 'When the aid trucks arrive, you see hope on every face. It reminds us we are not forgotten.', ar: 'عندما تصل شاحنات المساعدات، ترى الأمل على كل وجه. يذكرنا أننا لسنا منسيين.' }, name: { en: 'Abu Ahmad', ar: 'أبو أحمد' }, role: { en: 'Camp elder', ar: 'شيخ المخيم' } },
];

// ================================================================
//  EDIT NEEDS PROGRESS (percent covered for each urgent need)
// ================================================================

const needsProgress = [
  { pct: 15, label: { en: 'covered', ar: 'مغطى' } },
  { pct: 8,  label: { en: 'covered', ar: 'مغطى' } },
  { pct: 20, label: { en: 'covered', ar: 'مغطى' } },
  { pct: 5,  label: { en: 'covered', ar: 'مغطى' } },
  { pct: 3,  label: { en: 'covered', ar: 'مغطى' } },
];

// ================================================================
//  LANGUAGE STATE
// ================================================================

let currentLang = localStorage.getItem('albarra-lang') || 'en';

// ================================================================
//  HELPERS
// ================================================================

function placeholderGradient(index) {
  const hues = [20, 30, 40, 350, 10, 25];
  const h = hues[index % hues.length];
  return `linear-gradient(135deg, hsl(${h}, 40%, 55%), hsl(${h + 15}, 35%, 45%))`;
}

// ================================================================
//  RENDER GALLERIES
// ================================================================

function renderGalleries(lang) {
  // --- Community Gallery ---
  const commContainer = document.getElementById('communityGallery');
  if (commContainer) {
    const items = communityPhotos.map((photo, i) => {
      const caption = photo.caption[lang] || photo.caption.en;
      const images = Array.isArray(photo.src) ? photo.src : (photo.src ? [photo.src] : []);
      let img;
      if (images.length === 0) {
        img = `<div class="gallery-placeholder" style="background:${placeholderGradient(i)}">${translations[lang]['about-placeholder'] || 'Your Photo'}</div>`;
      } else {
        const badge = images.length > 1 ? `<span class="gallery-badge">+${images.length - 1}</span>` : '';
        img = `<div class="gallery-img-wrap"><img src="${images[0]}" alt="${caption}" loading="lazy">${badge}</div>`;
      }
      return `<div class="gallery-item${i > 1 ? ' gallery-hidden' : ''}" data-gallery-index="${i}" tabindex="0">${img}<div class="gallery-caption">${caption}</div></div>`;
    }).join('');
    const total = communityPhotos.length;
    const moreLabel = translations[lang]['gallery-more'] || 'View All';
    const moreBtn = total > 2 ? `<button class="gallery-more">${moreLabel} (${total})</button>` : '';
    commContainer.innerHTML = `<div class="gallery-grid-inner">${items}</div>${moreBtn}`;
    const moreBtns = commContainer.querySelectorAll('.gallery-more');
    moreBtns.forEach(btn => {
      btn.onclick = () => {
        const inner = commContainer.querySelector('.gallery-grid-inner');
        if (inner) inner.classList.add('expanded');
        btn.style.display = 'none';
      };
    });
  }

  // --- Aid & Transparency Tracker ---
  const aidContainer = document.getElementById('aidGallery');
  if (aidContainer) {
    aidContainer.innerHTML = aidDeliveries.map((item, i) => {
      const caption = item.caption[lang] || item.caption.en;
      const images = Array.isArray(item.src) ? item.src : (item.src ? [item.src] : []);
      let img;
      if (images.length === 0) {
        img = `<div class="aid-placeholder" style="background:${placeholderGradient(i + 10)}">${translations[lang]['about-placeholder'] || 'Your Photo'}</div>`;
      } else {
        const badge = images.length > 1 ? `<span class="aid-badge">+${images.length - 1}</span>` : '';
        img = `<div class="aid-img-wrap"><img class="aid-card-img" src="${images[0]}" alt="${caption}" loading="lazy">${badge}</div>`;
      }
      return `<div class="aid-card" data-aid-index="${i}">${img}<div class="aid-card-body"><span class="aid-card-date">${item.date}</span><p>${caption}</p></div></div>`;
    }).join('');
  }
}

// ================================================================
//  RENDER PROGRESS BARS
// ================================================================

function renderProgressBars(lang) {
  document.querySelectorAll('.progress-wrap').forEach(el => {
    const idx = parseInt(el.dataset.need);
    const prog = needsProgress[idx];
    if (!prog) return;
    const fill = el.querySelector('.progress-fill');
    const label = el.querySelector('.progress-label');
    fill.dataset.target = prog.pct;
    fill.style.width = '0';
    label.textContent = `${prog.pct}% ${prog.label[lang] || prog.label.en}`;
  });
}

// ================================================================
//  RENDER TESTIMONIALS
// ================================================================

function renderTestimonials(lang) {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;
  grid.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <p class="testimonial-quote">${t.quote[lang] || t.quote.en}</p>
      <div class="testimonial-author">${t.name[lang] || t.name.en}</div>
      <div class="testimonial-role">${t.role[lang] || t.role.en}</div>
    </div>
  `).join('');
}

// ================================================================
//  ANIMATE STAT COUNTERS
// ================================================================

let statsAnimated = false;

function animateStats() {
  if (statsAnimated) return;
  statsAnimated = true;
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    if (isNaN(target)) return;

    // Year stat: show instantly
    if (target > 1000) {
      el.textContent = target + suffix;
      return;
    }

    const duration = 1500;
    const start = performance.now();
    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

function animateProgressBars() {
  document.querySelectorAll('.progress-fill').forEach(fill => {
    if (fill.dataset.target) {
      fill.style.width = fill.dataset.target + '%';
    }
  });
}

// ================================================================
//  SET LANGUAGE
// ================================================================

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('albarra-lang', lang);

  const html = document.documentElement;
  html.lang = lang === 'ar' ? 'ar' : 'en';
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Translate static elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Translate the about-img placeholder label
  const aboutImg = document.querySelector('.about-img');
  if (aboutImg) {
    const label = translations[lang]['about-placeholder'];
    aboutImg.dataset.label = label;
  }

  // Update language toggle text
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'en' ? 'AR' : 'EN';

  // Re-render galleries with new language
  renderGalleries(lang);

  // Re-render testimonials with new language
  renderTestimonials(lang);

  // Update progress bars
  renderProgressBars(lang);
}

// ================================================================
//  INIT
// ================================================================

setLanguage(currentLang);

// --- Language toggle ---
document.getElementById('langToggle').addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'ar' : 'en');
});

// ================================================================
//  LIGHTBOX
// ================================================================

(function setupLightbox() {
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `
    <button class="lb-close">&times;</button>
    <button class="lb-nav lb-prev">&#8249;</button>
    <div class="lb-slide"><img alt=""><p class="lb-caption"></p></div>
    <button class="lb-nav lb-next">&#8250;</button>
    <div class="lb-dots"></div>
  `;
  document.body.appendChild(lb);

  const imgEl = lb.querySelector('img');
  const captionEl = lb.querySelector('.lb-caption');
  const dotsEl = lb.querySelector('.lb-dots');
  const prevBtn = lb.querySelector('.lb-prev');
  const nextBtn = lb.querySelector('.lb-next');
  const closeBtn = lb.querySelector('.lb-close');

  let currentImages = [];
  let currentIndex = 0;
  let currentCaptions = { en: '', ar: '' };

  function showImage(index) {
    currentIndex = index;
    imgEl.classList.add('lb-loading');
    imgEl.src = currentImages[index] || '';
    // If image is cached, onload might not fire reliably; remove class after a short delay
    const clearLoad = () => imgEl.classList.remove('lb-loading');
    imgEl.onload = clearLoad;
    imgEl.onerror = clearLoad;
    setTimeout(clearLoad, 3000);
    const cap = currentCaptions[currentLang] || currentCaptions.en;
    captionEl.textContent = (currentImages.length > 1 ? `${index + 1}/${currentImages.length} — ` : '') + cap;
    dotsEl.innerHTML = currentImages.map((_, d) =>
      `<span class="lb-dot${d === index ? ' active' : ''}" data-index="${d}"></span>`
    ).join('');
    prevBtn.style.display = currentImages.length > 1 ? '' : 'none';
    nextBtn.style.display = currentImages.length > 1 ? '' : 'none';
  }

  document.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    const idx = parseInt(item.dataset.galleryIndex);
    const photo = communityPhotos[idx];
    if (!photo) return;
    const images = Array.isArray(photo.src) ? photo.src : (photo.src ? [photo.src] : []);
    if (images.length === 0) return;
    currentImages = images;
    currentCaptions = photo.caption;
    showImage(0);
    lb.classList.add('open');
  });

  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showImage((currentIndex - 1 + currentImages.length) % currentImages.length); });
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showImage((currentIndex + 1) % currentImages.length); });
  dotsEl.addEventListener('click', (e) => { const dot = e.target.closest('.lb-dot'); if (dot) showImage(parseInt(dot.dataset.index)); });
  closeBtn.addEventListener('click', () => lb.classList.remove('open'));
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.classList.remove('open'); });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') lb.classList.remove('open');
    if (e.key === 'ArrowLeft') showImage((currentIndex - 1 + currentImages.length) % currentImages.length);
    if (e.key === 'ArrowRight') showImage((currentIndex + 1) % currentImages.length);
  });
})();

// ================================================================
//  AID LIGHTBOX (multi-image)
// ================================================================

(function setupAidLightbox() {
  const lb = document.createElement('div');
  lb.className = 'aid-lb';
  lb.innerHTML = `
    <button class="aid-lb-close">&times;</button>
    <button class="aid-lb-nav aid-lb-prev">&#8249;</button>
    <div class="aid-lb-slide"><img alt=""><p class="aid-lb-caption"></p></div>
    <button class="aid-lb-nav aid-lb-next">&#8250;</button>
    <div class="aid-lb-dots"></div>
  `;
  document.body.appendChild(lb);

  const imgEl = lb.querySelector('img');
  const captionEl = lb.querySelector('.aid-lb-caption');
  const dotsEl = lb.querySelector('.aid-lb-dots');
  const prevBtn = lb.querySelector('.aid-lb-prev');
  const nextBtn = lb.querySelector('.aid-lb-next');
  const closeBtn = lb.querySelector('.aid-lb-close');

  let currentImages = [];
  let currentIndex = 0;
  let currentCaptions = { en: '', ar: '' };

  function showImage(index) {
    currentIndex = index;
    imgEl.classList.add('lb-loading');
    imgEl.src = currentImages[index] || '';
    const clearLoad = () => imgEl.classList.remove('lb-loading');
    imgEl.onload = clearLoad;
    imgEl.onerror = clearLoad;
    setTimeout(clearLoad, 3000);
    const cap = currentCaptions[currentLang] || currentCaptions.en;
    captionEl.textContent = (currentImages.length > 1 ? `${index + 1}/${currentImages.length} — ` : '') + cap;
    dotsEl.innerHTML = currentImages.map((_, d) =>
      `<span class="aid-lb-dot${d === index ? ' active' : ''}" data-index="${d}"></span>`
    ).join('');
    prevBtn.style.display = currentImages.length > 1 ? '' : 'none';
    nextBtn.style.display = currentImages.length > 1 ? '' : 'none';
  }

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.aid-card');
    if (!card) return;
    const idx = parseInt(card.dataset.aidIndex);
    const item = aidDeliveries[idx];
    if (!item) return;
    const images = Array.isArray(item.src) ? item.src : (item.src ? [item.src] : []);
    if (images.length === 0) return;
    currentImages = images;
    currentCaptions = item.caption;
    showImage(0);
    lb.classList.add('open');
  });

  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showImage((currentIndex - 1 + currentImages.length) % currentImages.length); });
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showImage((currentIndex + 1) % currentImages.length); });
  dotsEl.addEventListener('click', (e) => { const dot = e.target.closest('.aid-lb-dot'); if (dot) showImage(parseInt(dot.dataset.index)); });
  closeBtn.addEventListener('click', () => lb.classList.remove('open'));
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.classList.remove('open'); });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') lb.classList.remove('open');
    if (e.key === 'ArrowLeft') showImage((currentIndex - 1 + currentImages.length) % currentImages.length);
    if (e.key === 'ArrowRight') showImage((currentIndex + 1) % currentImages.length);
  });
})();

// ================================================================
//  MAP
// ================================================================

(function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl || typeof L === 'undefined') return;

  // Northwest Syria (general area — adjust coordinates as needed)
  const lat = 31.3757;
  const lng = 34.2839;

  const map = L.map(mapEl, {
    center: [lat, lng],
    zoom: 8,
    scrollWheelZoom: false,
    zoomControl: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup('مخيم البراء · Al-Bara\'a Camp');

  // Ensure map renders correctly after section scroll-reveal
  setTimeout(() => map.invalidateSize(), 500);
})();

// ================================================================
//  BACK TO TOP
// ================================================================

(function setupBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '↑';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// ================================================================
//  SCROLL REVEAL
// ================================================================

(function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        if (entry.target.id === 'needs') {
          animateProgressBars();
        }
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
  });

  // Trigger stat counters when hero is visible
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) animateStats();
    });
  }, { threshold: 0.3 });
  heroObserver.observe(document.getElementById('hero'));
})();
