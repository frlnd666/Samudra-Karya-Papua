// ===== RENDER DINAMIS DARI content.js =====

function renderHero() {
  const d = SITE_CONTENT.hero;
  document.querySelector('[data-hero-eyebrow]').textContent = d.eyebrow;
  document.querySelector('[data-hero-title]').innerHTML =
    d.title_line1 + '<br><em>' + d.title_line2_italic + '</em>';
  document.querySelector('[data-hero-desc]').textContent = d.description;

  const statsWrap = document.querySelector('[data-hero-stats]');
  statsWrap.innerHTML = d.stats.map(s => `
    <div class="stat">
      <div class="num">${s.number}</div>
      <div class="lab">${s.label}</div>
    </div>
  `).join('');
}

function renderAbout() {
  const d = SITE_CONTENT.about;
  document.querySelector('[data-about-year]').textContent = d.year_founded;
  document.querySelector('[data-about-title]').textContent = d.title;
  document.querySelector('[data-about-desc]').textContent = d.description;

  const list = document.querySelector('[data-about-list]');
  list.innerHTML = d.points.map(p => `<li><span class="ic">✓</span>${p}</li>`).join('');
}

function renderServices() {
  const wrap = document.querySelector('[data-services]');
  wrap.innerHTML = SITE_CONTENT.services.map(s => `
    <div class="serv-card">
      <span class="serv-num">${s.number}</span>
      <h3>${s.title}</h3>
      <p>${s.description}</p>
      <div class="tags">${s.tags.map(t => `<span>${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

function renderProcess() {
  const wrap = document.querySelector('[data-process]');
  wrap.innerHTML = SITE_CONTENT.process.map(p => `
    <div class="proc-step">
      <div class="dot">${p.step}</div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
    </div>
  `).join('');
}

function renderQuote() {
  const d = SITE_CONTENT.quote;
  document.querySelector('[data-quote-text]').textContent = d.text;
  document.querySelector('[data-quote-author]').textContent = d.author;
  document.querySelector('[data-quote-role]').textContent = d.role;
}

function renderClients() {
  const wrap = document.querySelector('[data-clients]');
  wrap.innerHTML = SITE_CONTENT.clients.map(c => `<div class="client-item">${c}</div>`).join('');
}

function renderContact() {
  const d = SITE_CONTENT.contact;
  document.querySelector('[data-contact-address]').textContent = d.address;
  document.querySelector('[data-contact-phone]').textContent = d.phone;
  document.querySelector('[data-contact-email]').textContent = d.email;
  document.querySelector('[data-contact-hours]').textContent = d.hours;
}

function renderFooter() {
  const d = SITE_CONTENT.footer;
  document.querySelector('[data-footer-desc]').textContent = d.description;
  document.querySelector('[data-footer-copyright]').textContent = d.copyright;
}

// ===== RENDER BLOG =====

function renderBlogList() {
  const wrap = document.querySelector('[data-blog-list]');
  if (!wrap) return;

  if (!BLOG_POSTS || BLOG_POSTS.length === 0) {
    wrap.innerHTML = '<p class="blog-empty">Belum ada artikel yang dipublikasikan.</p>';
    return;
  }

  wrap.innerHTML = BLOG_POSTS.map(post => `
    <div class="blog-card" data-post-id="${post.id}">
      <div class="thumb" style="background-image:url('${post.cover}')"></div>
      <div class="body">
        <div class="date">${post.date}</div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
      </div>
    </div>
  `).join('');

  wrap.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => openBlogModal(card.dataset.postId));
  });
}

function openBlogModal(postId) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) return;

  const overlay = document.getElementById('blogModalOverlay');
  const modal = document.getElementById('blogModal');

  modal.innerHTML = `
    <button class="close-btn" id="closeBlogModal">✕</button>
    <div class="date">${post.date}</div>
    <h2>${post.title}</h2>
    <img class="thumb" src="${post.cover}" alt="${post.title}">
    <div class="content">
      ${post.content.map(p => `<p>${p}</p>`).join('')}
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  document.getElementById('closeBlogModal').addEventListener('click', closeBlogModal);
}

function closeBlogModal() {
  document.getElementById('blogModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== INTERAKSI UI =====

function setupHeaderScroll() {
  const header = document.getElementById('siteHeader');
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    if (window.scrollY > 500) toTop.classList.add('show');
    else toTop.classList.remove('show');
  });

  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function setupMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

function setupScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));
}

function setupModalOverlayClose() {
  const overlay = document.getElementById('blogModalOverlay');
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeBlogModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBlogModal();
  });
}

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Terima kasih! Permintaan Anda telah diterima. Tim kami akan segera menghubungi Anda.');
    form.reset();
  });
}

// ===== INIT =====

document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAbout();
  renderServices();
  renderProcess();
  renderQuote();
  renderClients();
  renderBlogList();
  renderContact();
  renderFooter();

  setupHeaderScroll();
  setupMobileNav();
  setupScrollReveal();
  setupModalOverlayClose();
  setupContactForm();
});
