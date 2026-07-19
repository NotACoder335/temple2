// Initial Language State
let currentLang = localStorage.getItem('temple_lang') || 'en';

// Define the Navbar HTML
const navbarHTML = `
<nav class="bg-temple-maroon text-temple-bg shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
            <!-- Logo -->
            <div class="flex items-center gap-2 md:gap-3 min-w-0">
                <div class="w-10 h-10 bg-temple-gold rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                    <img src="assets/images/deity_icon.webp" alt="Deity Logo" class="w-full h-full object-cover">
                </div>
                <a href="index.html" class="font-bold text-xs md:text-sm tracking-wide uppercase whitespace-normal break-words leading-tight max-w-[180px] xs:max-w-[220px] sm:max-w-[350px] md:max-w-none">Pulikkathara Sree Vishnu Maya-Bhadrakali Temple</a>
            </div>
            
            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
                <a href="index.html" class="hover:text-temple-gold transition-colors font-medium" data-i18n="nav_home">Home</a>
                <a href="about.html" class="hover:text-temple-gold transition-colors font-medium" data-i18n="nav_about">About</a>
                <a href="gallery.html" class="hover:text-temple-gold transition-colors font-medium" data-i18n="nav_gallery">Gallery</a>
                <a href="poojas.html" class="hover:text-temple-gold transition-colors font-medium" data-i18n="nav_poojas">Poojas & Events</a>
                <a href="#" onclick="return false;" class="hover:text-temple-gold transition-colors font-medium" data-i18n="nav_donations">Donations</a>
                <a href="contact.html" class="bg-temple-gold text-temple-maroon px-4 py-2 rounded-md font-bold hover:bg-white transition-colors" data-i18n="nav_contact">Contact</a>
                
                <!-- Language Toggle Desktop -->
                <button id="langToggleDesktop" class="text-sm border border-temple-gold text-temple-gold px-2 py-1 rounded hover:bg-temple-gold hover:text-temple-maroon transition-colors">
                    ${currentLang === 'en' ? 'മലയാളം' : 'English'}
                </button>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center gap-4">
                 <!-- Language Toggle Mobile -->
                <button id="langToggleMobile" class="text-xs border border-temple-gold text-temple-gold px-2 py-1 rounded">
                     ${currentLang === 'en' ? 'ML' : 'EN'}
                </button>
                <button id="mobileMenuBtn" class="text-temple-bg hover:text-temple-gold focus:outline-none p-2" aria-label="Toggle menu">
                    <svg class="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div id="mobileMenu" class="fixed inset-0 bg-temple-maroon/95 z-40 transform translate-x-full transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8 text-2xl">
        <button id="closeMenuBtn" class="absolute top-6 right-6 text-temple-gold p-2">
             <svg class="h-10 w-10" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <a href="index.html" class="hover:text-temple-gold transition-colors font-medium" data-i18n="nav_home">Home</a>
        <a href="about.html" class="hover:text-temple-gold transition-colors font-medium" data-i18n="nav_about">About</a>
        <a href="gallery.html" class="hover:text-temple-gold transition-colors font-medium" data-i18n="nav_gallery">Gallery</a>
        <a href="poojas.html" class="hover:text-temple-gold transition-colors font-medium" data-i18n="nav_poojas">Poojas & Events</a>
        <a href="#" onclick="return false;" class="hover:text-temple-gold transition-colors font-medium" data-i18n="nav_donations">Donations</a>
        <a href="contact.html" class="text-temple-gold font-bold" data-i18n="nav_contact">Contact</a>
    </div>
</nav>
`;

const footerHTML = `
<footer class="bg-black text-white pt-12 pb-6 border-t-4 border-temple-gold">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
                 <div class="flex items-center gap-3 mb-4">
                    <div class="w-8 h-8 bg-temple-gold rounded-full overflow-hidden flex items-center justify-center">
                        <img src="assets/images/deity_icon.webp" alt="Deity Logo" class="w-full h-full object-cover">
                    </div>
                    <span class="font-bold text-sm uppercase text-temple-gold">Pulikkathara Sree Vishnu Maya-Bhadrakali Temple</span>
                </div>
                <p class="text-gray-400 text-sm whitespace-pre-line" data-i18n="footer_desc">Owned and operated by the Pulikkathara Family Trust
Register no: 94/2005 
Thathapilly</p>
            </div>
            <div>
                <h3 class="text-lg font-semibold text-temple-gold mb-4" data-i18n="footer_links">Quick Links</h3>
                <ul class="space-y-2 text-sm text-gray-400">
                    <li><a href="about.html" class="hover:text-white transition" data-i18n="nav_about">About</a></li>
                    <li><a href="poojas.html" class="hover:text-white transition" data-i18n="nav_poojas">Poojas</a></li>
                    <li><a href="#" onclick="return false;" class="hover:text-white transition" data-i18n="nav_donations">Donations</a></li>
                </ul>
            </div>
             <div>
                <h3 class="text-lg font-semibold text-temple-gold mb-4" data-i18n="footer_contact">Contact Us</h3>
                <ul class="space-y-2 text-sm text-gray-400">
                    <li>Thathappilly P.O, Kerala 683520</li>
                    <li>pulikkathara.sreevishnumaya@gmail.com</li>
                    <li>+91 9947776113</li>
                    <li>+91 9446666113</li>
                </ul>
            </div>
        </div>
        <div class="text-center text-xs text-gray-600 border-t border-gray-800 pt-6">
            <span data-i18n="footer_copyright">© 2026 Pulikkathara Sree Vishnu Maya-Bhadrakali Temple. All Rights Reserved.</span>
        </div>
    </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Inject Navbar and Footer
    const navContainer = document.getElementById('navbar-container');
    if(navContainer) navContainer.innerHTML = navbarHTML;
    
    const footerContainer = document.getElementById('footer-container');
    if(footerContainer) footerContainer.innerHTML = footerHTML;

    // Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if(mobileMenuBtn && closeMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        });
    }

    // Language Toggle Logic
    const toggleDesktop = document.getElementById('langToggleDesktop');
    const toggleMobile = document.getElementById('langToggleMobile');

    const updateLanguageUI = () => {
        if(toggleDesktop) toggleDesktop.textContent = currentLang === 'en' ? 'മലയാളം' : 'English';
        if(toggleMobile) toggleMobile.textContent = currentLang === 'en' ? 'ML' : 'EN';
        
        // Change global font class based on language
        if(currentLang === 'ml') {
            document.body.classList.remove('font-sans');
            document.body.classList.add('font-malayalam');
        } else {
            document.body.classList.remove('font-malayalam');
            document.body.classList.add('font-sans');
        }
    };

    const templeEvents = {
        JAN: {},
        FEB: {},
        MAR: {},
        APR: {},
        MAY: {},
        JUN: {},
        JUL: {
            SATURDAY: "11-07-2026"
        },
        AUG: {
            SATURDAY: "15-08-2026"
        },
        SEPT: {
            SATURDAY: "12-09-2026"
        },
        OCT: {
            SATURDAY: "17-10-2026"
        },
        NOV: {
            SATURDAY: "14-11-2026"
        },
        DEC: {
            SATURDAY: "12-12-2026"
        }
    };

    const updateOpeningText = () => {
        const openingContainer = document.getElementById('calendar-opening-text');
        if (!openingContainer) return;

        const eventKeys = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
        const currentEventKey = eventKeys[new Date().getMonth()];
        const monthEvent = templeEvents[currentEventKey];

        if (monthEvent && monthEvent.SATURDAY) {
            if (currentLang === 'ml') {
                openingContainer.textContent = `നട തുറപ്പ്: ശനിയാഴ്ച (${monthEvent.SATURDAY})`;
            } else {
                openingContainer.textContent = `Opening: SATURDAY (${monthEvent.SATURDAY})`;
            }
            openingContainer.className = "mt-4 text-center font-bold text-temple-maroon bg-temple-gold/10 border border-temple-gold/30 py-2 px-4 rounded-xl text-base";
        } else {
            if (currentLang === 'ml') {
                openingContainer.textContent = `ഈ മാസം മറ്റ് ദർശന സമയങ്ങൾ ലഭ്യമല്ല`;
            } else {
                openingContainer.textContent = `No scheduled openings this month`;
            }
            openingContainer.className = "mt-4 text-center text-sm font-medium text-gray-400 bg-gray-50 border border-gray-100 py-2 px-4 rounded-xl";
        }
    };

    const applyTranslations = () => {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang] && translations[currentLang][key]) {
                if (el.tagName === 'INPUT' && el.type === 'submit') {
                    el.value = translations[currentLang][key];
                } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[currentLang][key];
                } else {
                    el.textContent = translations[currentLang][key];
                }
            }
        });
        updateOpeningText();
    };

    const switchLanguage = () => {
        currentLang = currentLang === 'en' ? 'ml' : 'en';
        localStorage.setItem('temple_lang', currentLang);
        updateLanguageUI();
        applyTranslations();
    };

    if(toggleDesktop) toggleDesktop.addEventListener('click', switchLanguage);
    if(toggleMobile) toggleMobile.addEventListener('click', switchLanguage);

    // Initial Apply
    updateLanguageUI();
    applyTranslations();

    // Dynamic Pooja Calendar Loading
    const calendarImg = document.getElementById('current-month-calendar');
    const calendarLink = document.getElementById('calendar-link');
    if (calendarImg) {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const currentMonth = monthNames[new Date().getMonth()];
        const imgSrc = `assets/calender/${currentMonth}.jpg`;
        calendarImg.src = imgSrc;
        calendarImg.alt = `${currentMonth} Pooja Calendar`;
        if (calendarLink) {
            calendarLink.href = imgSrc;
        }
    }
});
