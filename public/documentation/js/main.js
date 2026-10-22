/**
 * Verdant Estates Documentation - Interactive Logic & Presentation Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Reading Scroll Progress Bar
  const progressBar = document.getElementById('progressBar');
  const updateProgress = () => {
    if (!progressBar) return;
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTotal > 0 ? (window.scrollY / scrollTotal) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // 2. Theme Management (Dark / Light)
  const themeToggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('doc_theme');

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('doc_theme', theme);
    if (themeToggle) {
      themeToggle.innerHTML = theme === 'dark' 
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    }
  };

  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // 3. Live Preview Navigation Protocol Handling
  const livePreviewBtns = document.querySelectorAll('.preview-btn-link');
  if (window.location.protocol === 'file:') {
    livePreviewBtns.forEach(btn => {
      const currentHref = btn.getAttribute('href');
      if (currentHref && !currentHref.startsWith('http')) {
        btn.setAttribute('href', '../../index.html');
      }
    });
  }

  // 4. Mobile Sidebar Drawer
  const mobileToggle = document.getElementById('mobileToggle');
  const sidebar = document.getElementById('docsSidebar');
  const overlay = document.getElementById('sidebarOverlay');

  const toggleSidebar = () => {
    if (!sidebar || !overlay) return;
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  };

  const closeSidebar = () => {
    if (!sidebar || !overlay) return;
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  };

  if (mobileToggle) mobileToggle.addEventListener('click', toggleSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);

  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) closeSidebar();
    });
  });

  // 5. Copy Code Buttons with Animated Feedback
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const codeBlock = btn.closest('.code-container').querySelector('code');
      if (!codeBlock) return;

      try {
        await navigator.clipboard.writeText(codeBlock.innerText);
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<span>✓ Copied</span>';
        btn.style.color = '#34d399';
        btn.style.borderColor = 'rgba(52, 211, 153, 0.4)';
        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2200);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    });
  });

  // 6. Interactive Visual Showcase Filter Tabs
  const filterButtons = document.querySelectorAll('.filter-btn');
  const mockups = document.querySelectorAll('.preview-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetFilter = btn.getAttribute('data-filter');

      mockups.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (targetFilter === 'all' || itemCategory === targetFilter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 7. Fullscreen Lightbox Modal
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxClose = document.getElementById('lightboxClose');

  const openLightbox = (src, title) => {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxTitle) lightboxTitle.textContent = title || '';
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.browser-screen-wrap').forEach(screen => {
    screen.addEventListener('click', () => {
      const img = screen.querySelector('img');
      const caption = screen.closest('.browser-mockup')?.querySelector('.caption-info strong')?.textContent;
      if (img) {
        openLightbox(img.src, caption);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    // Ctrl+K or Cmd+K quick search focus
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const searchInput = document.getElementById('docsSearch');
      if (searchInput) searchInput.focus();
    }
  });

  // 8. Scrollspy for Table of Contents (TOC)
  const sections = document.querySelectorAll('.doc-section');
  const tocLinks = document.querySelectorAll('.toc-link');

  const onScroll = () => {
    let currentId = '';
    const scrollPos = window.scrollY + 130;

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollPos) {
        currentId = sec.getAttribute('id');
      }
    });

    tocLinks.forEach(link => {
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 9. Sidebar Search Filter
  const searchInput = document.getElementById('docsSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const sidebarLinks = document.querySelectorAll('.sidebar-menu li');

      sidebarLinks.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
});
