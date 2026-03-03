/* ==========================================================================
   STILL HERE! STILL QUEER! NOW WHAT?
   Main JS — Mobile nav toggle + email form handling
   ========================================================================== */

(function () {
  'use strict';

  // --- Mobile Navigation ---

  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavClose = document.querySelector('.mobile-nav-close');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      mobileNav.classList.add('is-open');
      mobileNavClose?.focus();
      document.body.style.overflow = 'hidden';
    });

    mobileNavClose?.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      navToggle.focus();
      document.body.style.overflow = '';
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        mobileNav.classList.remove('is-open');
        navToggle.focus();
        document.body.style.overflow = '';
      }
    });
  }

  // --- Email Capture Form ---

  document.querySelectorAll('.email-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const email = input?.value.trim();

      if (!email) return;

      // Placeholder: replace with actual email service integration
      const btn = form.querySelector('.btn');
      const originalText = btn.textContent;
      btn.textContent = 'Thank you!';
      btn.disabled = true;
      input.disabled = true;

      // Reset after a moment so it's clear it worked
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        input.disabled = false;
        input.value = '';
      }, 3000);
    });
  });

  // --- Set aria-current on nav links ---

  const currentPath = window.location.pathname;
  document.querySelectorAll('.site-nav a, .mobile-nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // --- Sticky Header (transparent → sand on scroll) ---

  const siteHeader = document.querySelector('.site-header');
  const hero = document.querySelector('.hero');

  if (siteHeader && hero) {
    const onScroll = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      siteHeader.classList.toggle('is-scrolled', heroBottom <= 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Voices Carousel ---

  const carousel = document.querySelector('.voices-carousel');
  if (carousel) {
    const slides = carousel.querySelectorAll('.voices-carousel-slide');
    const dots = carousel.querySelectorAll('.voices-carousel-dot');
    let currentSlide = 0;
    let autoplayInterval;

    function goToSlide(index) {
      slides[currentSlide].classList.remove('is-active');
      dots[currentSlide].classList.remove('is-active');
      currentSlide = index;
      slides[currentSlide].classList.add('is-active');
      dots[currentSlide].classList.add('is-active');
    }

    function nextSlide() {
      goToSlide((currentSlide + 1) % slides.length);
    }

    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 6000);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        stopAutoplay();
        goToSlide(i);
        startAutoplay();
      });
    });

    startAutoplay();
  }

  // --- Scroll Reveal (IntersectionObserver) ---

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      revealElements.forEach((el) => observer.observe(el));
    }
  } else {
    // If reduced motion is preferred, show everything immediately
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('is-visible');
    });
  }
})();
