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
        this.loadProfile();
        this.setupEventListeners();
        this.animateCounters();
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
        
        // Update avatar with first letter
        const avatar = document.getElementById('displayAvatar');
        if (avatar) {
            avatar.textContent = profile.name.charAt(0).toUpperCase();
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
            const formData = new FormData(this.profileForm);
            const profile = {
                name: formData.get('profileName'),
                username: formData.get('profileUsername'),
                email: formData.get('profileEmail'),
                title: formData.get('profileTitle'),
                bio: formData.get('profileBio'),
                skills: formData.get('profileSkills'),
                visibility: document.querySelector('input[name="visibility"]:checked')?.value || 'public'
            };

            // Validate required fields
            if (!profile.name || !profile.username || !profile.email) {
                this.showMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Save to localStorage
            localStorage.setItem('jobbridge_profile', JSON.stringify(profile));

            // Update display
            this.displayProfile(profile);

            // Switch back to display mode
            this.toggleEditMode();

            // Show success message
            this.showMessage('Profile updated successfully!', 'success');

        } catch (error) {
            this.showMessage('Error saving profile. Please try again.', 'error');
            console.error('Profile save error:', error);
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.profileManager = new ProfileManager();
});

// Legacy compatibility
window.onload = function() {
    if (!window.profileManager) {
        window.profileManager = new ProfileManager();
    }
};
