// Enhanced profile.js for JobBridge
class ProfileManager {
    constructor() {
        this.profileDisplay = document.getElementById('profileDisplay');
        this.profileEdit = document.getElementById('profileEdit');
        this.profileForm = document.getElementById('profileForm');
        this.messageContainer = document.getElementById('profileMessage');
        this.isEditMode = false;
        
        this.init();
    }

    init() {
        console.log('ProfileManager initializing...');
        this.loadProfile();
        this.setupEventListeners();
        this.animateCounters();
        console.log('ProfileManager initialized successfully');
    }

    setupEventListeners() {
        // Form submission
        if (this.profileForm) {
            this.profileForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveProfile();
            });
        }

        // Visibility options
        document.querySelectorAll('input[name="visibility"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.updateVisibility(e.target.value);
            });
        });

        // Skills input enhancement
        const skillsInput = document.getElementById('profileSkills');
        if (skillsInput) {
            skillsInput.addEventListener('blur', () => {
                this.previewSkills();
            });
        }

        // Photo upload functionality
        this.setupPhotoUpload();
    }

    setupPhotoUpload() {
        console.log('Setting up photo upload...');
        const photoInput = document.getElementById('photoInput');
        const photoPlaceholder = document.querySelector('.photo-placeholder');
        const uploadBtn = document.querySelector('.upload-btn');
        
        console.log('Photo upload elements found:', {
            photoInput: !!photoInput,
            photoPlaceholder: !!photoPlaceholder,
            uploadBtn: !!uploadBtn
        });
        
        if (photoInput) {
            photoInput.addEventListener('change', (e) => {
                console.log('Photo input change event triggered');
                this.handlePhotoUpload(e);
            });
            console.log('Photo input event listener added');
        } else {
            console.error('Photo input element not found!');
        }
        
        if (photoPlaceholder) {
            photoPlaceholder.addEventListener('click', () => {
                console.log('Photo placeholder clicked');
                if (photoInput) photoInput.click();
            });
            console.log('Photo placeholder event listener added');
        } else {
            console.error('Photo placeholder element not found!');
        }
        
        if (uploadBtn) {
            uploadBtn.addEventListener('click', () => {
                console.log('Upload button clicked');
                if (photoInput) photoInput.click();
            });
            console.log('Upload button event listener added');
        } else {
            console.error('Upload button element not found!');
        }
    }

    handlePhotoUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        console.log('File selected:', file.name, file.type, file.size);

        // Validate file type
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/bmp', 'image/webp', 'image/svg+xml', 'image/tiff', 'image/x-icon'];
        if (!validTypes.includes(file.type.toLowerCase())) {
            console.error('Invalid file type:', file.type);
            this.showMessage('Please select a valid image file (JPG, PNG, GIF, BMP, WEBP, SVG, TIFF, ICO)', 'error');
            return;
        }

        // Validate file size (max 5MB)
        const maxSize = 5 * 1024 * 1024; // 5MB in bytes
        if (file.size > maxSize) {
            console.error('File too large:', file.size);
            this.showMessage('Please select an image smaller than 5MB', 'error');
            return;
        }

        // Show loading state
        this.showMessage('Uploading photo...', 'info');

        // Read and preview the image
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                console.log('File read successfully');
                this.displayPhotoPreview(e.target.result);
                this.savePhotoToProfile(e.target.result);
                this.showMessage('Profile photo uploaded successfully!', 'success');
                
                // Show remove button
                const removeBtn = document.getElementById('removePhotoBtn');
                if (removeBtn) {
                    removeBtn.style.display = 'flex';
                }
            } catch (error) {
                console.error('Error processing photo:', error);
                this.showMessage('Error processing photo. Please try again.', 'error');
            }
        };
        
        reader.onerror = () => {
            console.error('Error reading file');
            this.showMessage('Error reading file. Please try again.', 'error');
        };
        
        reader.readAsDataURL(file);
    }

    displayPhotoPreview(imageSrc) {
        console.log('Displaying photo preview');
        const photoPreview = document.getElementById('photoPreview');
        const photoPlaceholder = document.querySelector('.photo-placeholder');
        
        if (photoPreview && photoPlaceholder) {
            photoPreview.src = imageSrc;
            photoPreview.style.display = 'block';
            photoPlaceholder.style.display = 'none';
            console.log('Photo preview updated in edit mode');
        } else {
            console.error('Photo preview elements not found:', {
                photoPreview: !!photoPreview,
                photoPlaceholder: !!photoPlaceholder
            });
        }

        // Also update the display avatar if it exists
        const displayAvatar = document.getElementById('displayAvatar');
        const avatarText = displayAvatar?.querySelector('.avatar-text');
        const avatarImage = displayAvatar?.querySelector('.avatar-image');
        
        if (displayAvatar && avatarText && avatarImage) {
            avatarImage.src = imageSrc;
            avatarImage.style.display = 'block';
            avatarText.style.display = 'none';
            console.log('Display avatar updated with photo');
        } else {
            console.error('Display avatar elements not found:', {
                displayAvatar: !!displayAvatar,
                avatarText: !!avatarText,
                avatarImage: !!avatarImage
            });
        }
    }

    savePhotoToProfile(imageSrc) {
        const profile = this.getStoredProfile();
        profile.photo = imageSrc;
        localStorage.setItem('jobbridge_profile', JSON.stringify(profile));
    }

    removePhoto() {
        console.log('Removing photo');
        const photoPreview = document.getElementById('photoPreview');
        const photoPlaceholder = document.querySelector('.photo-placeholder');
        const photoInput = document.getElementById('photoInput');
        const removeBtn = document.getElementById('removePhotoBtn');
        
        if (photoPreview && photoPlaceholder) {
            photoPreview.style.display = 'none';
            photoPlaceholder.style.display = 'flex';
        }
        
        if (photoInput) {
            photoInput.value = '';
        }
        
        if (removeBtn) {
            removeBtn.style.display = 'none';
        }

        // Update display avatar
        const displayAvatar = document.getElementById('displayAvatar');
        const avatarText = displayAvatar?.querySelector('.avatar-text');
        const avatarImage = displayAvatar?.querySelector('.avatar-image');
        const profile = this.getStoredProfile();
        
        if (displayAvatar && avatarText && avatarImage) {
            avatarImage.style.display = 'none';
            avatarText.style.display = 'block';
            avatarText.textContent = profile.name ? profile.name.charAt(0).toUpperCase() : 'U';
            console.log('Avatar reverted to text');
        }

        // Remove from profile
        const updatedProfile = this.getStoredProfile();
        delete updatedProfile.photo;
        localStorage.setItem('jobbridge_profile', JSON.stringify(updatedProfile));
        
        this.showMessage('Profile photo removed successfully!', 'success');
    }

    loadProfile() {
        const profile = this.getStoredProfile();
        this.displayProfile(profile);
        this.populateForm(profile);
    }

    getStoredProfile() {
        const stored = localStorage.getItem('jobbridge_profile');
        return stored ? JSON.parse(stored) : this.getDefaultProfile();
    }

    getDefaultProfile() {
        return {
            name: 'John Doe',
            username: 'johndoe',
            email: 'john.doe@email.com',
            title: 'Frontend Developer',
            bio: 'Passionate frontend developer with 5+ years of experience building modern web applications. Specialized in React, TypeScript, and creating exceptional user experiences.',
            skills: 'JavaScript, React, TypeScript, CSS3, Node.js, Git',
            visibility: 'public'
        };
    }

    displayProfile(profile) {
        // Update display elements
        this.updateElement('displayName', profile.name);
        this.updateElement('displayUsername', `@${profile.username}`);
        this.updateElement('displayEmail', profile.email);
        this.updateElement('displayBio', profile.bio);
        
        // Update avatar with first letter or photo
        const avatar = document.getElementById('displayAvatar');
        const avatarText = avatar?.querySelector('.avatar-text');
        const avatarImage = avatar?.querySelector('.avatar-image');
        
        if (avatar && avatarText && avatarImage) {
            if (profile.photo) {
                // Show photo, hide text
                avatarImage.src = profile.photo;
                avatarImage.style.display = 'block';
                avatarText.style.display = 'none';
                console.log('Displaying profile photo in avatar');
            } else {
                // Show text, hide photo
                avatarImage.style.display = 'none';
                avatarText.style.display = 'block';
                avatarText.textContent = profile.name.charAt(0).toUpperCase();
                console.log('Displaying text avatar');
            }
        } else {
            console.error('Avatar elements not found:', {
                avatar: !!avatar,
                avatarText: !!avatarText,
                avatarImage: !!avatarImage
            });
        }

        // Update photo preview in edit mode
        const photoPreview = document.getElementById('photoPreview');
        const photoPlaceholder = document.querySelector('.photo-placeholder');
        const removeBtn = document.getElementById('removePhotoBtn');
        
        if (profile.photo && photoPreview && photoPlaceholder) {
            photoPreview.src = profile.photo;
            photoPreview.style.display = 'block';
            photoPlaceholder.style.display = 'none';
            if (removeBtn) removeBtn.style.display = 'flex';
        } else if (photoPreview && photoPlaceholder) {
            photoPreview.style.display = 'none';
            photoPlaceholder.style.display = 'flex';
            if (removeBtn) removeBtn.style.display = 'none';
        }

        // Update skills display
        this.displaySkills(profile.skills);

        // Update visibility radio
        const visibilityRadio = document.querySelector(`input[name="visibility"][value="${profile.visibility}"]`);
        if (visibilityRadio) {
            visibilityRadio.checked = true;
        }
    }

    updateElement(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value || '-';
        }
    }

    displaySkills(skillsString) {
        const skillsContainer = document.getElementById('displaySkills');
        if (!skillsContainer || !skillsString) return;

        const skills = skillsString.split(',').map(skill => skill.trim()).filter(skill => skill);
        skillsContainer.innerHTML = skills.map(skill => 
            `<span class="skill-tag">${skill}</span>`
        ).join('');
    }

    populateForm(profile) {
        const fields = ['profileName', 'profileUsername', 'profileEmail', 'profileTitle', 'profileBio', 'profileSkills'];
        const mapping = {
            profileName: 'name',
            profileUsername: 'username',
            profileEmail: 'email',
            profileTitle: 'title',
            profileBio: 'bio',
            profileSkills: 'skills'
        };

        fields.forEach(fieldId => {
            const element = document.getElementById(fieldId);
            const profileKey = mapping[fieldId];
            if (element && profile[profileKey]) {
                element.value = profile[profileKey];
            }
        });
    }

    saveProfile() {
        try {
            console.log('Starting profile save...');
            
            // Check if form exists
            if (!this.profileForm) {
                console.error('Profile form not found!');
                this.showMessage('Profile form not found. Please refresh the page.', 'error');
                return;
            }
            
            const formData = new FormData(this.profileForm);
            
            // Get existing profile to preserve photo data
            const existingProfile = this.getStoredProfile();
            
            const profile = {
                name: formData.get('profileName'),
                username: formData.get('profileUsername'),
                email: formData.get('profileEmail'),
                title: formData.get('profileTitle'),
                bio: formData.get('profileBio'),
                skills: formData.get('profileSkills'),
                visibility: document.querySelector('input[name="visibility"]:checked')?.value || 'public',
                // Preserve existing photo if it exists
                photo: existingProfile.photo || undefined
            };

            // Remove undefined photo field if no photo exists
            if (!profile.photo) {
                delete profile.photo;
            }

            // Validate required fields
            if (!profile.name || !profile.username || !profile.email) {
                this.showMessage('Please fill in all required fields.', 'error');
                return;
            }

            console.log('Saving profile:', profile);

            // Save to localStorage with error handling
            try {
                localStorage.setItem('jobbridge_profile', JSON.stringify(profile));
                console.log('Profile saved to localStorage successfully');
            } catch (storageError) {
                console.error('localStorage error:', storageError);
                throw new Error('Failed to save profile data. Storage may be full.');
            }

            // Update display
            this.displayProfile(profile);

            // Switch back to display mode
            toggleEditMode();

            // Show success message
            this.showMessage('Profile updated successfully!', 'success');

        } catch (error) {
            console.error('Profile save error:', error);
            console.error('Error details:', {
                message: error.message,
                stack: error.stack,
                formData: this.profileForm ? 'Form found' : 'Form not found'
            });
            this.showMessage('Error saving profile. Please try again.', 'error');
        }
    }

    previewSkills() {
        const skillsInput = document.getElementById('profileSkills');
        if (!skillsInput || !this.isEditMode) return;

        const skills = skillsInput.value;
        if (skills) {
            this.displaySkills(skills);
        }
    }

    updateVisibility(visibility) {
        const profile = this.getStoredProfile();
        profile.visibility = visibility;
        localStorage.setItem('jobbridge_profile', JSON.stringify(profile));
        
        this.showMessage(`Profile visibility updated to ${visibility}.`, 'success');
    }

    showMessage(message, type = 'info') {
        if (!this.messageContainer) return;

        this.messageContainer.textContent = message;
        this.messageContainer.className = `message-container ${type}`;
        this.messageContainer.style.display = 'block';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            this.messageContainer.style.display = 'none';
        }, 5000);
    }

    // Counter animation for stats
    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseFloat(counter.dataset.target);
                    this.animateCounter(counter, target);
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);

        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    animateCounter(element, target) {
        let current = 0;
        const increment = target / 60;
        const duration = 1500;
        const stepTime = duration / 60;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Handle decimal places for ratings
            if (target % 1 !== 0) {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    }
}

// Global functions for HTML onclick handlers
function toggleEditMode() {
    const profileDisplay = document.getElementById('profileDisplay');
    const profileEdit = document.getElementById('profileEdit');
    
    if (profileDisplay && profileEdit) {
        if (profileDisplay.style.display === 'none') {
            // Switching back to display mode
            profileDisplay.style.display = 'block';
            profileEdit.style.display = 'none';
            window.profileManager.isEditMode = false;
        } else {
            // Switching to edit mode
            profileDisplay.style.display = 'none';
            profileEdit.style.display = 'block';
            window.profileManager.isEditMode = true;
            
            // Smooth scroll to the edit section
            setTimeout(() => {
                profileEdit.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }, 100); // Small delay to ensure the element is visible before scrolling
        }
    }
}

function cancelEdit() {
    toggleEditMode();
    if (window.profileManager) {
        window.profileManager.loadProfile(); // Reset form
    }
}

function removePhoto() {
    if (window.profileManager) {
        window.profileManager.removePhoto();
    }
}

// Debug function for manual testing
function debugPhotoUpload() {
    console.log('=== Photo Upload Debug Info ===');
    console.log('ProfileManager exists:', !!window.profileManager);
    console.log('Photo input element:', !!document.getElementById('photoInput'));
    console.log('Photo placeholder element:', !!document.querySelector('.photo-placeholder'));
    console.log('Upload button element:', !!document.querySelector('.upload-btn'));
    console.log('Remove button element:', !!document.getElementById('removePhotoBtn'));
    console.log('Photo preview element:', !!document.getElementById('photoPreview'));
    
    if (window.profileManager) {
        console.log('Attempting to re-setup photo upload...');
        window.profileManager.setupPhotoUpload();
    }
}

// Debug function for profile saving
function debugProfileSave() {
    console.log('=== Profile Save Debug Info ===');
    console.log('ProfileManager exists:', !!window.profileManager);
    console.log('Profile form exists:', !!document.getElementById('profileForm'));
    
    if (window.profileManager) {
        console.log('Form reference in manager:', !!window.profileManager.profileForm);
        console.log('Attempting manual save...');
        window.profileManager.saveProfile();
    }
}

// Debug function for avatar display
function debugAvatar() {
    console.log('=== Avatar Debug Info ===');
    const avatar = document.getElementById('displayAvatar');
    const avatarText = avatar?.querySelector('.avatar-text');
    const avatarImage = avatar?.querySelector('.avatar-image');
    
    console.log('Avatar container:', !!avatar);
    console.log('Avatar text element:', !!avatarText);
    console.log('Avatar image element:', !!avatarImage);
    
    if (avatarImage) {
        console.log('Image src:', avatarImage.src);
        console.log('Image display:', avatarImage.style.display);
    }
    
    if (avatarText) {
        console.log('Text content:', avatarText.textContent);
        console.log('Text display:', avatarText.style.display);
    }
    
    // Test with stored profile
    const profile = localStorage.getItem('jobbridge_profile');
    if (profile) {
        const parsed = JSON.parse(profile);
        console.log('Stored profile has photo:', !!parsed.photo);
        if (parsed.photo) {
            console.log('Photo data length:', parsed.photo.length);
            console.log('Photo starts with:', parsed.photo.substring(0, 50));
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing ProfileManager...');
    window.profileManager = new ProfileManager();
});

// Legacy compatibility with additional fallback
window.onload = function() {
    console.log('Window loaded, checking ProfileManager...');
    if (!window.profileManager) {
        console.log('ProfileManager not found, creating new instance...');
        window.profileManager = new ProfileManager();
    }
};

// Additional fallback for immediate initialization
setTimeout(() => {
    if (!window.profileManager) {
        console.log('Fallback initialization of ProfileManager...');
        window.profileManager = new ProfileManager();
    }
}, 1000);
