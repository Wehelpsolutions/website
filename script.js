// ===================== We Help Solutions - Home Page Script =====================

// ========== Firebase Configuration ==========









// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



// Service Details Data
function redirectToService(serviceKey) {
    window.location.href = `service.html?service=${serviceKey}`;
}





// Send Us a Message

document.addEventListener("DOMContentLoaded", function () {
    if (!window.location.pathname.endsWith("index.html") && window.location.pathname !== "/") return;

    emailjs.init("NsufDWBTc4fQ-OaLg");

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return; // Prevent error if form doesn't exist

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("contactName").value;
        const email = document.getElementById("contactEmail").value;
        const phone = document.getElementById("contactPhone").value;
        const service = document.getElementById("contactService").value;
        const message = document.getElementById("contactMessage").value;

        const params = {
            name,
            email,
            phone,
            service,
            message
        };

        emailjs.send("service_wehelpsolutions", "template_587xctf", params)
            .then(function () {
                showToast("Message sent successfully!", "success");
                contactForm.reset();
            }, function (error) {
                showToast("Failed to send message. Please try again.", "error");
                console.error("EmailJS Error:", error);
            });
    });

    function showToast(message, type = "success") {
        const toast = document.getElementById("whs-toast");
        if (!toast) return;

        toast.textContent = message;
        toast.className = `whs-toast ${type} show`;

        setTimeout(() => {
            toast.classList.remove("show");
        }, 4000);
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("whsNavToggle");
    const navMenu = document.getElementById("navMenu");

    if (toggleBtn && navMenu) {
        // Toggle menu open/close
        toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleBtn.classList.toggle("whs-active");
            navMenu.classList.toggle("whs-active");
        });

        // Prevent closing when clicking inside the nav menu
        navMenu.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        // Close menu when clicking outside
        document.addEventListener("click", () => {
            if (navMenu.classList.contains("whs-active")) {
                navMenu.classList.remove("whs-active");
                toggleBtn.classList.remove("whs-active");
            }
        });

        // Close menu on nav link click
        const navLinks = navMenu.querySelectorAll(".whs-nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("whs-active");
                toggleBtn.classList.remove("whs-active");
            });
        });
    }
});
























// // Modal Functions
// function openBookingModal() {
//     bookingModal.style.display = 'block';
//     document.body.style.overflow = 'hidden';
// }

// function closeBookingModal() {
//     bookingModal.style.display = 'none';
//     document.body.style.overflow = 'auto';
// }

// function openServiceModal(serviceId) {
//     const service = serviceDetails[serviceId];
//     if (service) {
//         const modalContent = document.getElementById('serviceModalContent');
//         modalContent.innerHTML = `
//             <h2>${service.title}</h2>
//             <img src="${service.image}" alt="${service.title}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 0.5rem; margin-bottom: 1rem;">
//             <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">${service.description}</p>
            
//             <h3>Key Features:</h3>
//             <ul style="margin-bottom: 1.5rem;">
//                 ${service.features.map(feature => `<li style="margin-bottom: 0.5rem;">${feature}</li>`).join('')}
//             </ul>
            
//             <h3>Benefits:</h3>
//             <ul style="margin-bottom: 2rem;">
//                 ${service.benefits.map(benefit => `<li style="margin-bottom: 0.5rem;">${benefit}</li>`).join('')}
//             </ul>
            
//             <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
//                 <button class="whs-btn whs-btn-primary" onclick="closeServiceModal(); openBookingModal();">Book This Service</button>
//                 <a href="tel:+1234567890" class="whs-btn whs-btn-secondary">Call Now</a>
//                 <a href="https://wa.me/1234567890" class="whs-btn whs-btn-outline" target="_blank">WhatsApp</a>
//             </div>
//         `;
//         serviceModal.style.display = 'block';
//         document.body.style.overflow = 'hidden';
//     }
// }

// function closeServiceModal() {
//     serviceModal.style.display = 'none';
//     document.body.style.overflow = 'auto';
// }

// // Close modals when clicking outside
// window.addEventListener('click', (e) => {
//     if (e.target === bookingModal) {
//         closeBookingModal();
//     }
//     if (e.target === serviceModal) {
//         closeServiceModal();
//     }
// });

  


// // ==================================================
// // Gallery Functions
// // ==================================================
// class GalleryManager {
//     constructor() {
//         this.gallery = [];
//         this.isAdmin = false;
//     }
    
//     async loadGallery() {
//         try {
//             const snapshot = await db.collection('galleryURLs').orderBy('timestamp', 'desc').get();
//             this.gallery = snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
            
//             this.renderGallery();
//         } catch (error) {
//             console.error('Error loading gallery:', error);
//         }
//     }
    
//     renderGallery() {
//         const galleryContainer = document.getElementById('whsGalleryContainer');
//         if (!galleryContainer) return;
        
//         if (this.gallery.length === 0) {
//             galleryContainer.innerHTML = '<p class="whs-gallery-empty">No images available yet.</p>';
//             return;
//         }
        
//         galleryContainer.innerHTML = this.gallery.map(item => `
//             <div class="whs-gallery-item" data-id="${item.id}">
//                 <img src="${item.url}" alt="${item.title || 'Gallery Image'}" loading="lazy">
//                 <div class="whs-gallery-overlay">
//                     <h4>${item.title || 'Untitled'}</h4>
//                     <p>${item.description || ''}</p>
//                     <span class="whs-gallery-service">${item.service || 'General'}</span>
//                     ${this.isAdmin ? `<button class="whs-btn whs-btn-danger whs-btn-sm" onclick="galleryManager.deleteImage('${item.id}')">Delete</button>` : ''}
//                 </div>
//             </div>
//         `).join('');
//     }
    
//     async uploadImage(file, title, description, service) {
//         try {
//             const formData = new FormData();
//             formData.append('file', file);
//             formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
            
//             const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`, {
//                 method: 'POST',
//                 body: formData
//             });
            
//             const data = await response.json();
            
//             if (data.secure_url) {
//                 // Store in Firestore
//                 await db.collection('galleryURLs').add({
//                     url: data.secure_url,
//                     title,
//                     description,
//                     service,
//                     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//                     cloudinaryId: data.public_id
//                 });
                
//                 this.loadGallery();
//                 return true;
//             }
            
//             return false;
//         } catch (error) {
//             console.error('Error uploading image:', error);
//             return false;
//         }
//     }
    
//     async deleteImage(id) {
//         if (!confirm('Are you sure you want to delete this image?')) return;
        
//         try {
//             await db.collection('galleryURLs').doc(id).delete();
//             this.loadGallery();
//             showNotification('Image deleted successfully', 'success');
//         } catch (error) {
//             console.error('Error deleting image:', error);
//             showNotification('Error deleting image', 'error');
//         }
//     }
// }

// // ==================================================
// // Admin Functions
// // ==================================================
// class AdminManager {
//     constructor() {
//         this.isLoggedIn = false;
//         this.currentUser = null;
//     }
    
//     async login(email, password) {
//         try {
//             const userCredential = await auth.signInWithEmailAndPassword(email, password);
//             this.currentUser = userCredential.user;
//             this.isLoggedIn = true;
//             this.showAdminPanel();
//             return true;
//         } catch (error) {
//             console.error('Login error:', error);
//             throw error;
//         }
//     }
    
//     async logout() {
//         try {
//             await auth.signOut();
//             this.currentUser = null;
//             this.isLoggedIn = false;
//             this.hideAdminPanel();
//         } catch (error) {
//             console.error('Logout error:', error);
//         }
//     }
    
//     showAdminPanel() {
//         const adminPanel = document.getElementById('whsAdminPanel');
//         const loginForm = document.getElementById('whsLoginForm');
        
//         if (adminPanel) adminPanel.style.display = 'block';
//         if (loginForm) loginForm.style.display = 'none';
        
//         galleryManager.isAdmin = true;
//         galleryManager.renderGallery();
//     }
    
//     hideAdminPanel() {
//         const adminPanel = document.getElementById('whsAdminPanel');
//         const loginForm = document.getElementById('whsLoginForm');
        
//         if (adminPanel) adminPanel.style.display = 'none';
//         if (loginForm) loginForm.style.display = 'block';
        
//         galleryManager.isAdmin = false;
//         galleryManager.renderGallery();
//     }
    
//     async handleImageUpload(event) {
//         event.preventDefault();
        
//         const form = event.target;
//         const formData = new FormData(form);
//         const file = formData.get('image');
//         const title = formData.get('title');
//         const description = formData.get('description');
//         const service = formData.get('service');
        
//         if (!file || !title) {
//             showNotification('Please select an image and provide a title', 'error');
//             return;
//         }
        
//         const submitBtn = form.querySelector('button[type="submit"]');
//         submitBtn.textContent = 'Uploading...';
//         submitBtn.disabled = true;
        
//         try {
//             const success = await galleryManager.uploadImage(file, title, description, service);
            
//             if (success) {
//                 showNotification('Image uploaded successfully', 'success');
//                 form.reset();
//             } else {
//                 showNotification('Failed to upload image', 'error');
//             }
//         } catch (error) {
//             console.error('Upload error:', error);
//             showNotification('Error uploading image', 'error');
//         } finally {
//             submitBtn.textContent = 'Upload Image';
//             submitBtn.disabled = false;
//         }
//     }
    
//     async loadBookings() {
//         try {
//             const snapshot = await db.collection('bookings').orderBy('timestamp', 'desc').get();
//             const bookings = snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
            
//             this.renderBookings(bookings);
//         } catch (error) {
//             console.error('Error loading bookings:', error);
//         }
//     }
    
//     renderBookings(bookings) {
//         const bookingsContainer = document.getElementById('whsBookingsContainer');
//         if (!bookingsContainer) return;
        
//         if (bookings.length === 0) {
//             bookingsContainer.innerHTML = '<p>No bookings found.</p>';
//             return;
//         }
        
//         bookingsContainer.innerHTML = bookings.map(booking => {
//             const date = booking.timestamp ? booking.timestamp.toDate().toLocaleDateString() : 'N/A';
//             return `
//                 <div class="whs-booking-item">
//                     <h4>Booking #${booking.bookingId}</h4>
//                     <p><strong>Name:</strong> ${booking.name}</p>
//                     <p><strong>Email:</strong> ${booking.email}</p>
//                     <p><strong>Phone:</strong> ${booking.phone}</p>
//                     <p><strong>Service:</strong> ${booking.service}</p>
//                     <p><strong>Date:</strong> ${booking.date}</p>
//                     <p><strong>Status:</strong> ${booking.status}</p>
//                     <p><strong>Submitted:</strong> ${date}</p>
//                     <div class="whs-booking-actions">
//                         <button class="whs-btn whs-btn-sm whs-btn-primary" onclick="adminManager.updateBookingStatus('${booking.id}', 'confirmed')">Confirm</button>
//                         <button class="whs-btn whs-btn-sm whs-btn-secondary" onclick="adminManager.updateBookingStatus('${booking.id}', 'completed')">Complete</button>
//                         <button class="whs-btn whs-btn-sm whs-btn-danger" onclick="adminManager.updateBookingStatus('${booking.id}', 'cancelled')">Cancel</button>
//                     </div>
//                 </div>
//             `;
//         }).join('');
//     }
    
//     async updateBookingStatus(bookingId, status) {
//         try {
//             await db.collection('bookings').doc(bookingId).update({
//                 status,
//                 updatedAt: firebase.firestore.FieldValue.serverTimestamp()
//             });
            
//             this.loadBookings();
//             showNotification(`Booking ${status} successfully`, 'success');
//         } catch (error) {
//             console.error('Error updating booking:', error);
//             showNotification('Error updating booking', 'error');
//         }
//     }
// }

// // ==================================================
// // Initialize Global Managers
// // ==================================================
// const galleryManager = new GalleryManager();
// const adminManager = new AdminManager();

// // ==================================================
// // Page-specific Functions
// // ==================================================
// function initializeGalleryPage() {
//     galleryManager.loadGallery();
// }

// function initializeAdminPage() {
//     const loginForm = document.getElementById('whsAdminLoginForm');
//     const uploadForm = document.getElementById('whsImageUploadForm');
    
//     if (loginForm) {
//         loginForm.addEventListener('submit', async (e) => {
//             e.preventDefault();
            
//             const email = document.getElementById('whsAdminEmail').value;
//             const password = document.getElementById('whsAdminPassword').value;
            
//             try {
//                 await adminManager.login(email, password);
//                 showNotification('Logged in successfully', 'success');
//                 adminManager.loadBookings();
//             } catch (error) {
//                 showNotification('Login failed: ' + error.message, 'error');
//             }
//         });
//     }
    
//     if (uploadForm) {
//         uploadForm.addEventListener('submit', adminManager.handleImageUpload.bind(adminManager));
//     }
    
//     const logoutBtn = document.getElementById('whsLogoutBtn');
//     if (logoutBtn) {
//         logoutBtn.addEventListener('click', () => {
//             adminManager.logout();
//             showNotification('Logged out successfully', 'success');
//         });
//     }
    
//     // Check if user is already logged in
//     auth.onAuthStateChanged(user => {
//         if (user) {
//             adminManager.currentUser = user;
//             adminManager.isLoggedIn = true;
//             adminManager.showAdminPanel();
//             adminManager.loadBookings();
//         }
//     });
// }

// // ==================================================
// // Animations and Effects
// // ==================================================
// function initializeAnimations() {
//     // Fade in animation for service cards
//     const observerOptions = {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     };
    
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('whs-fade-in');
//             }
//         });
//     }, observerOptions);
    
//     // Observe service cards
//     document.querySelectorAll('.whs-service-card').forEach(card => {
//         observer.observe(card);
//     });
    
//     // Navbar scroll effect
//     window.addEventListener('scroll', () => {
//         const navbar = document.querySelector('.whs-navbar');
//         if (window.scrollY > 50) {
//             navbar.classList.add('scrolled');
//         } else {
//             navbar.classList.remove('scrolled');
//         }
//     });
// }

// // ==================================================
// // Utility Functions
// // ==================================================
// function formatDate(date) {
//     return new Date(date).toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//     });
// }

// function formatTime(date) {
//     return new Date(date).toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit'
//     });
// }

// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// }

// function validatePhone(phone) {
//     const re = /^[\+]?[1-9][\d]{0,15}$/;
//     return re.test(phone.replace(/\s/g, ''));
// }

// // ==================================================
// // Firebase Analytics
// // ==================================================
// function trackEvent(eventName, eventParams = {}) {
//     if (typeof analytics !== 'undefined') {
//         analytics.logEvent(eventName, eventParams);
//     }
// }

// // Track page views
// function trackPageView(pageName) {
//     trackEvent('page_view', {
//         page_title: pageName,
//         page_location: window.location.href
//     });
// }

// // Track service inquiries
// function trackServiceInquiry(serviceName) {
//     trackEvent('service_inquiry', {
//         service_name: serviceName
//     });
// }

// // Track bookings
// function trackBooking(serviceName) {
//     trackEvent('booking_created', {
//         service_name: serviceName
//     });
// }

// // ==================================================
// // SEO and Performance
// // ==================================================
// function lazyLoadImages() {
//     const images = document.querySelectorAll('img[data-src]');
    
//     const imageObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.dataset.src;
//                 img.classList.remove('lazy');
//                 imageObserver.unobserve(img);
//             }
//         });
//     });
    
//     images.forEach(img => {
//         imageObserver.observe(img);
//     });
// }

// // ==================================================
// // Error Handling
// // ==================================================
// window.addEventListener('error', (event) => {
//     console.error('JavaScript error:', event.error);
    
//     // You can send error reports to Firebase or another service
//     trackEvent('javascript_error', {
//         error_message: event.error.message,
//         error_filename: event.filename,
//         error_lineno: event.lineno
//     });
// });

// // ==================================================
// // Initialization
// // ==================================================
// document.addEventListener('DOMContentLoaded', () => {
//     // Initialize common functionality
//     initializeNavigation();
//     initializeForms();
//     initializeAnimations();
//     lazyLoadImages();
    
//     // Page-specific initialization
//     const currentPage = window.location.pathname.split('/').pop();
    
//     switch (currentPage) {
//         case 'gallery.html':
//             initializeGalleryPage();
//             trackPageView('Gallery');
//             break;
//         case 'admin.html':
//             initializeAdminPage();
//             trackPageView('Admin');
//             break;
//         default:
//             trackPageView('Home');
//     }
    
//     // Set minimum date for booking form
//     const today = new Date().toISOString().split('T')[0];
//     const bookingDateInput = document.getElementById('bookingDate');
//     if (bookingDateInput) {
//         bookingDateInput.min = today;
//     }
// });

// // // ==================================================
// // // Service Worker Registration (for PWA)
// // // ==================================================
// // if ('serviceWorker' in navigator) {
// //     window.addEventListener('load', () => {
// //         navigator.serviceWorker.register('/sw.js')
// //             .then(registration => {
// //                 console.log('SW registered: ', registration);
// //             })
// //             .catch(registrationError => {
// //                 console.log('SW registration failed: ', registrationError);
// //             });
// //     });
// // }

// // ==================================================
// // Export functions for global access
// // ==================================================
// window.openBookingModal = openBookingModal;
// window.closeBookingModal = closeBookingModal;
// window.openServiceModal = openServiceModal;
// window.closeServiceModal = closeServiceModal;
// window.closeNotification = closeNotification;
// window.galleryManager = galleryManager;
// window.adminManager = adminManager;





// // admin dashboard


// if (window.location.pathname.endsWith("admin.html")) {
// const WhsAdmin = {
//     init: function () {
//         this.cacheElements();
//         this.bindEvents();
//         this.checkAuthState();
//     },

//     cacheElements: function () {
//         this.loader = document.getElementById('whs-admin-loader');
//         this.loginContainer = document.getElementById('whs-admin-login');
//         this.dashboard = document.getElementById('whs-admin-dashboard');
//         this.loginForm = document.getElementById('whs-admin-login-form');
//         this.emailInput = document.getElementById('whs-admin-email');
//         this.passwordInput = document.getElementById('whs-admin-password');
//         this.loginError = document.getElementById('whs-admin-login-error');
//         this.logoutBtn = document.getElementById('whs-admin-logout-btn');
//         this.userEmailDisplay = document.getElementById('whs-admin-user-email');

//         this.navButtons = document.querySelectorAll('.whs-admin-nav-btn');
//         this.tabContents = document.querySelectorAll('.whs-admin-tab-content');
//     },

//     bindEvents: function () {
//         this.loginForm.addEventListener('submit', this.handleLogin.bind(this));
//         this.logoutBtn.addEventListener('click', this.handleLogout.bind(this));

//         this.navButtons.forEach(button => {
//             button.addEventListener('click', (e) => {
//                 this.switchTab(e.target.closest('button').dataset.tab);
//             });
//         });
//     },

//     handleLogin: function (e) {
//         e.preventDefault();
//         const email = this.emailInput.value.trim();
//         const password = this.passwordInput.value;

//         this.loginError.textContent = '';
//         this.loader.style.display = 'flex';

//         auth.signInWithEmailAndPassword(email, password)
//             .then(() => {
//                 this.loader.style.display = 'none';
//                 this.showDashboard();
//             })
//             .catch(error => {
//                 this.loader.style.display = 'none';
//                 this.loginError.textContent = error.message;
//             });
//     },

//     handleLogout: function () {
//         auth.signOut().then(() => {
//             this.showLogin();
//         });
//     },

//     checkAuthState: function () {
//         auth.onAuthStateChanged(user => {
//             this.loader.style.display = 'none';
//             if (user) {
//                 this.userEmailDisplay.textContent = user.email;
//                 this.showDashboard();
//             } else {
//                 this.showLogin();
//             }
//         });
//     },

//     showLogin: function () {
//         this.loginContainer.style.display = 'flex';
//         this.dashboard.style.display = 'none';
//     },

//     showDashboard: function () {
//         this.loginContainer.style.display = 'none';
//         this.dashboard.style.display = 'block';
//         this.switchTab('posts'); // default tab
//     },

//     switchTab: function (tabId) {
//         this.navButtons.forEach(btn => btn.classList.remove('active'));
//         this.tabContents.forEach(tab => tab.classList.remove('active'));

//         document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
//         document.getElementById(`whs-admin-${tabId}-tab`).classList.add('active');
//     },
// };
// }