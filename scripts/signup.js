// signup.js for JobBridge
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const signupTab = document.getElementById('signupTab');
const loginTab = document.getElementById('loginTab');
const signupSection = document.getElementById('signupSection');
const loginSection = document.getElementById('loginSection');

// Tab switching
if (signupTab && loginTab && signupSection && loginSection) {
    signupTab.addEventListener('click', function() {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupSection.style.display = '';
        loginSection.style.display = 'none';
    });
    loginTab.addEventListener('click', function() {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginSection.style.display = '';
        signupSection.style.display = 'none';
    });
}

// Signup form logic
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        // Save user info to localStorage (for demo)
        localStorage.setItem('jobbridge_profile', JSON.stringify({
            name,
            username,
            email,
            skills: '',
            bio: ''
        }));
        alert('Signup successful! (Demo)');
        window.location.href = 'dashboard.html';
    });
}

// Login form logic (demo only)
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value;
        // Demo: just check if username matches what's in localStorage
        const profile = JSON.parse(localStorage.getItem('jobbridge_profile'));
        if (profile && profile.username === username) {
            alert('Login successful! (Demo)');
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid credentials! (Demo)');
        }
    });
}

// Forgot password link
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Password reset link sent! (Demo)');
    });
}
