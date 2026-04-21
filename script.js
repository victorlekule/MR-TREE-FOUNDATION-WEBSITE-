// tailwind-config.js
tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Custom brand colors for Mr Tree Foundation
                'tree-green': '#16a34a',  // Primary Green
                'dark-green': '#15803d',  // Hover State Green
                'lake-blue': '#2563eb',   // Accent Blue (inspired by Lake Victoria)
                'deep-black': '#111827',  // Text Black
                'pure-white': '#ffffff',  // Background White
                'light-gray': '#f9fafb'   // Subtle background for sections
            },
            fontFamily: {
                // Set Poppins as the primary font
                'poppins': ['Poppins', 'sans-serif'],
            }
        }
    }
}
// header.js
document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('main-header');

    const navHTML = `
        <div class="fixed top-0 left-0 w-full pl-[24px] pr-4 sm:pr-8 bg-pure-white z-[9999] shadow-md transition-all duration-300">
            <div class="flex justify-between items-center h-24">
                
                <div class="flex-shrink-0 flex items-center">
                    <a href="index.html" class="flex items-center">
                        <span class="text-2xl font-bold text-tree-green tracking-wide">Mr Tree Foundation</span>
                    </a>
                </div>

                <nav id="desktop-nav" class="hidden 2xl:flex space-x-6 items-center">
                    <a href="index.html" class="nav-link text-deep-black hover:text-tree-green hover:underline decoration-2 underline-offset-8 font-medium transition-all duration-200">Home</a>
                    <a href="about.html" class="nav-link text-deep-black hover:text-tree-green hover:underline decoration-2 underline-offset-8 font-medium transition-all duration-200">About Us</a>
                    <a href="thems.html" class="nav-link text-deep-black hover:text-tree-green hover:underline decoration-2 underline-offset-8 font-medium transition-all duration-200">Our Themes</a>
                    <a href="program.html" class="nav-link text-deep-black hover:text-tree-green hover:underline decoration-2 underline-offset-8 font-medium transition-all duration-200">Programs</a>
                    <a href="gallery.html" class="nav-link text-deep-black hover:text-tree-green hover:underline decoration-2 underline-offset-8 font-medium transition-all duration-200">Gallery</a>
                    <a href="involve.html" class="nav-link text-deep-black hover:text-tree-green hover:underline decoration-2 underline-offset-8 font-medium transition-all duration-200">Get Involved</a>
                    <a href="news.html" class="nav-link text-deep-black hover:text-tree-green hover:underline decoration-2 underline-offset-8 font-medium transition-all duration-200">News & Updates</a>
                    <a href="contact.html" class="nav-link text-deep-black hover:text-tree-green hover:underline decoration-2 underline-offset-8 font-medium transition-all duration-200">Contact Us</a>
                    <a href="donate.html" class="bg-tree-green text-pure-white px-7 py-2.5 rounded-full hover:bg-dark-green font-medium transition-colors duration-200 shadow-sm">Donate Now</a>
                </nav>

                <div class="2xl:hidden flex items-center">
                    <button id="mobile-menu-btn" class="text-deep-black hover:text-tree-green focus:outline-none">
                        <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div id="mobile-overlay" class="hidden 2xl:hidden fixed inset-0 top-24 bg-deep-black/20 backdrop-blur-sm z-40 cursor-pointer"></div>

        <div id="mobile-menu" class="hidden 2xl:hidden fixed left-[10px] top-[101px] bg-pure-white shadow-xl w-max rounded-md border border-gray-100 z-50 p-[10px]">
            <div class="flex flex-col space-y-1">
                <a href="index.html" class="mobile-nav-link block px-6 py-2 rounded-md text-base font-medium text-deep-black hover:text-tree-green hover:bg-light-gray">Home</a>
                <a href="about.html" class="mobile-nav-link block px-6 py-2 rounded-md text-base font-medium text-deep-black hover:text-tree-green hover:bg-light-gray">About Us</a>
                <a href="thems.html" class="mobile-nav-link block px-6 py-2 rounded-md text-base font-medium text-deep-black hover:text-tree-green hover:bg-light-gray">Our Themes</a>
                <a href="program.html" class="mobile-nav-link block px-6 py-2 rounded-md text-base font-medium text-deep-black hover:text-tree-green hover:bg-light-gray">Programs</a>
                <a href="gallery.html" class="mobile-nav-link block px-6 py-2 rounded-md text-base font-medium text-deep-black hover:text-tree-green hover:bg-light-gray">Gallery</a>
                <a href="involve.html" class="mobile-nav-link block px-6 py-2 rounded-md text-base font-medium text-deep-black hover:text-tree-green hover:bg-light-gray">Get Involved</a>
                <a href="news.html" class="mobile-nav-link block px-6 py-2 rounded-md text-base font-medium text-deep-black hover:text-tree-green hover:bg-light-gray">News & Updates</a>
                <a href="contact.html" class="mobile-nav-link block px-6 py-2 rounded-md text-base font-medium text-deep-black hover:text-tree-green hover:bg-light-gray">Contact Us</a>
                 <a href="donate.html" class="block px-6 py-2 rounded-md text-base font-medium text-pure-white bg-tree-green text-center mt-1">Donate now</a>
            </div>
        </div>
    `;

    if (headerContainer) {
        headerContainer.innerHTML = navHTML;
    }

    // --- LOGIC TO SET ACTIVE NAV LINK ---
    let currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '') currentPath = 'index.html';

    const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    allNavLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.remove('text-deep-black');
            link.classList.add('text-tree-green', 'underline', 'decoration-2', 'underline-offset-8');
        }
    });

    // --- MOBILE MENU & BLUR TOGGLE LOGIC ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');

    // Function to open/close the menu and blur
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden');
        mobileOverlay.classList.toggle('hidden');
        
        // Optional: Stops the background from scrolling when menu is open
        document.body.classList.toggle('overflow-hidden');
    }

    if (mobileBtn && mobileMenu && mobileOverlay) {
        // Toggle when clicking the hamburger icon
        mobileBtn.addEventListener('click', toggleMobileMenu);
        
        // Close the menu if the user clicks on the blurred background
        mobileOverlay.addEventListener('click', toggleMobileMenu);
    }
});

//hero section home//
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('slider-track');
    const slides = document.querySelectorAll('.hero-slide');
    
    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalRealSlides = slides.length;
    let autoPlayInterval;

    // 1. Create the invisible "Clone" slide at the end
    const firstSlideClone = slides[0].cloneNode(true);
    track.appendChild(firstSlideClone);

    // 2. The Push Animation
    function nextSlide() {
        // Prevent going past the clone
        if (currentIndex >= totalRealSlides) return; 
        
        currentIndex++;
        
        // Apply the smooth slide animation
        track.style.transition = 'transform 1s cubic-bezier(0.87, 0, 0.13, 1)';
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // 3. The BULLETPROOF Seamless Loop Fix
    track.addEventListener('transitionend', (e) => {
        // Only trigger this logic when the sliding (transform) is completely finished
        if (e.propertyName !== 'transform') return;

        // If we just slid onto the Cloned slide...
        if (currentIndex === totalRealSlides) {
            
            // 1. Turn OFF animations instantly
            track.style.transition = 'none';
            
            // 2. Reset our mathematical index to the true first slide
            currentIndex = 0;
            
            // 3. Teleport the track back to the start (because transitions are off, this is invisible)
            track.style.transform = `translateX(0)`;
            
            // 4. Force the browser to render this teleport immediately before the next frame
            void track.offsetWidth; 
        }
    });

    // 4. Start the Engine (Push every 6 seconds)
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 6000); 
    }

    startAutoPlay();
});



// about us section goals animation//
document.addEventListener('DOMContentLoaded', () => {
    
    const aboutImages = document.querySelectorAll('.about-img');
    if(aboutImages.length > 0) {
        let currentImgIndex = 0;
        setInterval(() => {
            // Fade out current image
            aboutImages[currentImgIndex].classList.remove('opacity-100');
            aboutImages[currentImgIndex].classList.add('opacity-0');
            
            // Move to next image
            currentImgIndex = (currentImgIndex + 1) % aboutImages.length;
            
            // Fade in new image
            aboutImages[currentImgIndex].classList.remove('opacity-0');
            aboutImages[currentImgIndex].classList.add('opacity-100');
        }, 4000); // Crossfades every 4 seconds
    }

    // 2. OUR GOALS SLIDER (INFINITE LOOP WITHOUT REVERSE)
    const goalTrack = document.getElementById('goals-track');
    if (goalTrack) {
        const goalSlides = goalTrack.querySelectorAll('.goal-slide');
        if (goalSlides.length > 0) {
            let currentGoalIndex = 0;
            const totalRealGoals = goalSlides.length;

            // Clone first slide for the seamless infinite loop
            const firstGoalClone = goalSlides[0].cloneNode(true);
            goalTrack.appendChild(firstGoalClone);

            // Push animation
            function nextGoal() {
                currentGoalIndex++;
                goalTrack.style.transition = 'transform 0.8s ease-in-out';
                goalTrack.style.transform = `translateX(-${currentGoalIndex * 100}%)`;
            }

            // Invisible rewind to prevent snapping back
            goalTrack.addEventListener('transitionend', (e) => {
                if (e.propertyName !== 'transform') return;
                
                if (currentGoalIndex === totalRealGoals) {
                    // Disable transition temporarily
                    goalTrack.style.transition = 'none';
                    
                    // Reset to the beginning
                    currentGoalIndex = 0;
                    goalTrack.style.transform = `translateX(0)`;
                    
                    // Force browser reflow to apply the change instantly
                    void goalTrack.offsetWidth;
                    
                    // Re-enable transition for next slide
                    goalTrack.style.transition = 'transform 0.8s ease-in-out';
                }
            });

            // Run every 4 seconds
            setInterval(nextGoal, 4000);
        }
    }
});



// --- 2. PROGRAM DATABASE ---
const programs = {
    nishati1: {
        title: "Nishati Safi Season I",
        reached: "1,200 Households",
        images: ["img/1.jpeg", "img/8.jpeg"],
        objectives: ["Introduction of ethanol cookstoves.", "Forest protection training.", "Community health workshops."],
        advantages: "Improves respiratory health for mothers and children while saving forest cover.",
        results: "Successfully transitioned 500+ homes away from charcoal dependency."
    },
    nishati2: {
        title: "Nishati Safi Season II",
        reached: "3,500 Households",
        images: ["img/3.jpeg","img/4.jpeg"],
        objectives: ["Solar power for off-grid schools.", "Youth renewable energy training.", "Scaling biogas digesters."],
        advantages: "Provides clean energy 24/7 and creates green career paths for Tanzanian youth.",
        results: "Established 10 biogas units and powered 5 rural schools."
    },
    ziwa: {
        title: "Ziwa Letu Project",
        reached: "10,000+ Members",
        images: ["img/4.jpeg", "img/2.jpeg"],
        objectives: ["Removing shoreline plastics.", "Reforesting riparian zones.", "Community water monitoring."],
        advantages: "Restores the biodiversity of Lake Victoria and ensures cleaner water for fishing communities.",
        results: "15 Tons of plastic removed and 5,000 native trees planted along the shore."
    },
    mining: {
        title: "Green Mining Restoration",
        reached: "45 Sites",
        images: ["img/7.jpeg", "img/10.jpeg"],
        objectives: ["Educating on mercury-free mining.", "Mandatory land rehabilitation.", "Planting agro-forestry trees."],
        advantages: "Stops chemical runoff into local rivers and returns dead mining land to agricultural use.",
        results: "Rehabilitated 20 sites and trained 200 miners in sustainable techniques."
    }
};

// --- 3. MODAL LOGIC ---
let currentModalImages = [];
let modalImgIdx = 0;

function openProgram(id) {
    const data = programs[id];
    if (!data) return;

    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalReached').innerText = data.reached;
    document.getElementById('modalAdvantages').innerText = data.advantages;
    document.getElementById('modalResults').innerText = data.results;
    document.getElementById('modalObjectives').innerHTML = data.objectives.map(o => `<li>${o}</li>`).join('');
    
    currentModalImages = data.images;
    modalImgIdx = 0;
    updateModalCarousel();
    
    document.getElementById('programModal').classList.remove('hidden');
    document.body.classList.add('no-scroll');
}

function updateModalCarousel() {
    const track = document.getElementById('modalCarouselTrack');
    track.innerHTML = currentModalImages.map((src, i) => `<img src="${src}" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === modalImgIdx ? 'opacity-100' : 'opacity-0'}">`).join('');
}

function moveModalImg(dir) {
    modalImgIdx = (modalImgIdx + dir + currentModalImages.length) % currentModalImages.length;
    updateModalCarousel();
}

function closeModal() {
    document.getElementById('programModal').classList.add('hidden');
    document.body.classList.remove('no-scroll');
}

// Close modal when clicking on the dark background
window.onclick = (e) => {
    if (e.target.id === 'programModal') closeModal();
}

//get involved page logic//
// --- GET INVOLVED FORM LOGIC ---
function openFormModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
    document.body.classList.add('no-scroll');
}

function closeFormModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    document.body.classList.remove('no-scroll');
}

// Ensure clicking outside the form closes it
window.addEventListener('click', (e) => {
    if (e.target.id === 'donateModal') closeFormModal('donateModal');
    if (e.target.id === 'volunteerModal') closeFormModal('volunteerModal');
});

// --- GET INVOLVED FORM: DYNAMIC FIELDS LOGIC ---

// 1. Toggle Custom Amount Field
function toggleCustomAmount() {
    const isOtherSelected = document.getElementById('radio-other').checked;
    const customDiv = document.getElementById('custom-amount-div');
    const customInput = document.getElementById('custom-amount-input');

    if (isOtherSelected) {
        customDiv.classList.remove('hidden');
        customDiv.classList.add('block');
        customInput.setAttribute('required', 'true');
        customInput.focus();
    } else {
        customDiv.classList.remove('block');
        customDiv.classList.add('hidden');
        customInput.removeAttribute('required');
        customInput.value = ''; // clear it if they switch back
    }
}

// 2. Dynamic Button Text Updater
function updateSubmitButton() {
    const isOtherSelected = document.getElementById('radio-other').checked;
    let amount = "$20"; // default fallback

    if (isOtherSelected) {
        // Get whatever number they type in the custom box
        const customVal = document.getElementById('custom-amount-input').value;
        amount = customVal ? "$" + customVal : "$0";
    } else {
        // Read the value of the clicked radio button
        const amountRadios = document.getElementsByName('amount');
        for (const radio of amountRadios) {
            if (radio.checked && radio.value !== 'other') {
                amount = "$" + radio.value;
                break;
            }
        }
    }
    
    // Change the text inside the button
    document.getElementById('submit-btn-text').innerText = `DONATE ${amount} TO MR TREE FOUNDATION`;
}

// 3. Toggle Payment Method Panels
function togglePaymentInfo() {
    const paymentRadios = document.getElementsByName('payment');
    let selectedMethod = 'credit'; 

    for (const radio of paymentRadios) {
        if (radio.checked) {
            selectedMethod = radio.value;
            break;
        }
    }

    // Hide all panels
    document.getElementById('panel-card').classList.add('hidden');
    document.getElementById('panel-paypal').classList.add('hidden');

    // Show active panel (Both Credit and MasterCard use the Card panel)
    if (selectedMethod === 'credit' || selectedMethod === 'mastercard') {
        document.getElementById('panel-card').classList.remove('hidden');
        document.getElementById('panel-card').classList.add('block');
    } else if (selectedMethod === 'paypal') {
        document.getElementById('panel-paypal').classList.remove('hidden');
        document.getElementById('panel-paypal').classList.add('block');
    }
}


//footer//
function injectFooter() {
    const footerContainer = document.getElementById("footer-placeholder");
    
    // If the page doesn't have the placeholder, stop running the function
    if (!footerContainer) return; 

    // 1. AUTO-LOAD ICONS
    if (!document.getElementById('font-awesome-css')) {
        const link = document.createElement('link');
        link.id = 'font-awesome-css';
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
        document.head.appendChild(link);
    }

    // 2. INJECT FOOTER (Optimized Mobile Grid)
    footerContainer.innerHTML = `
        <footer class="w-full bg-deep-black text-gray-400 py-10 lg:py-12 font-poppins text-sm border-t border-gray-800 mt-auto">
            <div class="w-full px-6 md:px-12 lg:px-20 xl:px-24 mx-auto">
                
                <div class="grid grid-cols-2 lg:grid-cols-5 gap-x-4 sm:gap-x-6 gap-y-10 lg:gap-10 items-start mb-10">
                    
                    <div class="col-span-2 lg:col-span-1 space-y-4 lg:pr-10">
                        <h3 class="text-xl font-black text-pure-white mb-2">Mr Tree Foundation</h3>
                        <p class="leading-relaxed text-left text-gray-400 pr-2 lg:pr-0 font-light">
                            We are dedicated to transforming the Lake Zone environment through community-led reforestation, clean energy initiatives, and sustainable waste management across Tanzania.
                        </p>
                    </div>

                    <div class="col-span-1">
                        <h3 class="text-base lg:text-lg font-bold text-pure-white mb-4">Quick Links</h3>
                        <ul class="space-y-2">
                            <li><a href="index.html" class="text-gray-400 hover:text-tree-green hover:translate-x-1 transition-all duration-300 block">Home</a></li>
                            <li><a href="about.html" class="text-gray-400 hover:text-tree-green hover:translate-x-1 transition-all duration-300 block">About Us</a></li>
                            <li><a href="programs.html" class="text-gray-400 hover:text-tree-green hover:translate-x-1 transition-all duration-300 block">Our Programs</a></li>
                            <li><a href="get-involved.html" class="text-gray-400 hover:text-tree-green hover:translate-x-1 transition-all duration-300 block">Get Involved</a></li>
                            <li><a href="contact.html" class="text-gray-400 hover:text-tree-green hover:translate-x-1 transition-all duration-300 block">Contact Us</a></li>
                        </ul>
                    </div>

                    <div class="col-span-1">
                        <h3 class="text-base lg:text-lg font-bold text-pure-white mb-4">Partners</h3>
                        <ul class="space-y-2">
                            <li><a href="#" target="_blank" class="text-gray-400 hover:text-lake-blue hover:translate-x-1 transition-all duration-300 flex items-center"><i class="fa-solid fa-link mr-2 text-xs text-lake-blue"></i> NEMC</a></li>
                            <li><a href="#" target="_blank" class="text-gray-400 hover:text-lake-blue hover:translate-x-1 transition-all duration-300 flex items-center"><i class="fa-solid fa-link mr-2 text-xs text-lake-blue"></i> Tanzania Forest</a></li>
                            <li><a href="#" target="_blank" class="text-gray-400 hover:text-lake-blue hover:translate-x-1 transition-all duration-300 flex items-center"><i class="fa-solid fa-link mr-2 text-xs text-lake-blue"></i> Lake Vic Basin</a></li>
                            <li><a href="#" target="_blank" class="text-gray-400 hover:text-lake-blue hover:translate-x-1 transition-all duration-300 flex items-center"><i class="fa-solid fa-link mr-2 text-xs text-lake-blue"></i> Ministry of Env</a></li>
                        </ul>
                    </div>

                    <div class="col-span-1">
                        <h3 class="text-base lg:text-lg font-bold text-pure-white mb-4">Social Media</h3>
                        <div class="flex flex-col gap-3">
                            <a href="#" target="_blank" class="text-gray-400 flex items-center gap-2 hover:text-tree-green transition-all duration-300 group">
                                <i class="fa-brands fa-instagram text-xl lg:text-lg w-5 transform group-hover:scale-110 transition-transform text-white group-hover:text-tree-green"></i> 
                                <span class="group-hover:translate-x-1 transition-transform">Instagram</span>
                            </a>
                            <a href="#" target="_blank" class="text-gray-400 flex items-center gap-2 hover:text-lake-blue transition-all duration-300 group">
                                <i class="fa-brands fa-facebook-f text-xl lg:text-lg w-5 transform group-hover:scale-110 transition-transform text-white group-hover:text-lake-blue"></i> 
                                <span class="group-hover:translate-x-1 transition-transform">Facebook</span>
                            </a>
                            <a href="#" target="_blank" class="text-gray-400 flex items-center gap-2 hover:text-tree-green transition-all duration-300 group">
                                <i class="fa-brands fa-x-twitter text-xl lg:text-lg w-5 transform group-hover:scale-110 transition-transform text-white group-hover:text-tree-green"></i> 
                                <span class="group-hover:translate-x-1 transition-transform">X (Twitter)</span>
                            </a>
                            <a href="#" target="_blank" class="text-gray-400 flex items-center gap-2 hover:text-lake-blue transition-all duration-300 group">
                                <i class="fa-brands fa-linkedin-in text-xl lg:text-lg w-5 transform group-hover:scale-110 transition-transform text-white group-hover:text-lake-blue"></i> 
                                <span class="group-hover:translate-x-1 transition-transform">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    <div class="col-span-1">
                        <h3 class="text-base lg:text-lg font-bold text-pure-white mb-4">Get In Touch</h3>
                        <div class="flex flex-col gap-4">
                            <a href="https://wa.me/255769395738" target="_blank" class="flex items-start sm:items-center gap-2 group cursor-pointer rounded transition-all duration-300">
                                <div class="w-8 h-8 rounded-lg bg-white/10 flex-shrink-0 flex items-center justify-center text-tree-green text-sm shadow-md transform group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                                    <i class="fa-brands fa-whatsapp"></i>
                                </div>
                                <div class="overflow-hidden">
                                    <div class="text-[9px] font-bold text-tree-green uppercase tracking-widest truncate">WhatsApp</div>
                                    <div class="text-white font-medium text-[10px] sm:text-xs group-hover:text-tree-green transition-colors truncate">(+255)769395738</div>
                                </div>
                            </a>

                            <a href="mailto:hello@mrtreefoundation.org" class="flex items-start sm:items-center gap-2 group cursor-pointer rounded transition-all duration-300">
                                <div class="w-8 h-8 rounded-lg bg-white/10 flex-shrink-0 flex items-center justify-center text-lake-blue text-sm shadow-md transform group-hover:scale-110 group-hover:bg-lake-blue group-hover:text-white transition-all duration-300">
                                    <i class="fa-regular fa-envelope"></i>
                                </div>
                                <div class="overflow-hidden">
                                    <div class="text-[9px] font-bold text-lake-blue uppercase tracking-widest truncate">Email Us</div>
                                    <div class="text-white font-medium text-[10px] sm:text-xs group-hover:text-lake-blue transition-colors truncate">mrtree.foundation@gmail.com</div>
                                </div>
                            </a>

                            <div class="flex items-start sm:items-center gap-2 group rounded transition-all duration-300">
                                <div class="w-8 h-8 rounded-lg bg-white/10 flex-shrink-0 flex items-center justify-center text-white text-sm shadow-md transform group-hover:scale-110 group-hover:bg-white group-hover:text-deep-black transition-all duration-300">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <div class="overflow-hidden">
                                    <div class="text-[9px] font-bold text-gray-400 uppercase tracking-widest truncate">Location</div>
                                    <div class="text-white font-medium text-[10px] sm:text-xs truncate">Mwanza</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div class="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto text-center md:text-left">
                        <p class="text-xs text-gray-500 whitespace-nowrap">&copy; 2026 Mr Tree Foundation. All rights reserved.</p>                                               
                    </div>
                    <p class="text-xs text-gray-500 font-medium whitespace-nowrap text-center md:text-right">Transforming the Lake Zone, one tree at a time.</p>
                </div>
                
            </div>
        </footer>
    `;
}

// Automatically call the function when the page loads
document.addEventListener("DOMContentLoaded", function() {
    injectFooter();
});