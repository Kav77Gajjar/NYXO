// profile.js for JobBridge
const profileForm = document.getElementById('profileForm');
const profileMessage = document.getElementById('profileMessage');
const updateBtn = document.getElementById('updateProfileBtn');
const cancelBtn = document.getElementById('cancelUpdateBtn');

function displayProfile() {
    const profile = JSON.parse(localStorage.getItem('jobbridge_profile'));
    document.getElementById('displayName').textContent = profile?.name || '-';
    document.getElementById('displayUsername').textContent = profile?.username || '-';
    document.getElementById('displayEmail').textContent = profile?.email || '-';
    document.getElementById('displaySkills').textContent = profile?.skills || '-';
    document.getElementById('displayBio').textContent = profile?.bio || '-';
}

window.onload = function() {
    displayProfile();
    // Pre-fill form if profile exists
    const profile = JSON.parse(localStorage.getItem('jobbridge_profile'));
    if (profile) {
        document.getElementById('profileName').value = profile.name || '';
        document.getElementById('profileUsername').value = profile.username || '';
        document.getElementById('profileEmail').value = profile.email || '';
        document.getElementById('profileSkills').value = profile.skills || '';
        document.getElementById('profileBio').value = profile.bio || '';
    }
};

if (updateBtn) {
    updateBtn.addEventListener('click', function() {
        profileForm.style.display = 'block';
        updateBtn.style.display = 'none';
    });
}

if (cancelBtn) {
    cancelBtn.addEventListener('click', function() {
        profileForm.style.display = 'none';
        updateBtn.style.display = 'block';
        profileMessage.textContent = '';
    });
}

if (profileForm) {
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const profile = {
            name: document.getElementById('profileName').value,
            username: document.getElementById('profileUsername').value,
            email: document.getElementById('profileEmail').value,
            skills: document.getElementById('profileSkills').value,
            bio: document.getElementById('profileBio').value
        };
        localStorage.setItem('jobbridge_profile', JSON.stringify(profile));
        displayProfile();
        profileForm.style.display = 'none';
        updateBtn.style.display = 'block';
        profileMessage.textContent = 'Profile updated successfully!';
        profileMessage.style.color = '#10B981';
    });
}
