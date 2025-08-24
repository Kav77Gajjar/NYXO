// OTP Verification JavaScript for JobBridge
class OTPVerification {
    constructor() {
        this.inputs = document.querySelectorAll('.otp-input');
        this.verifyBtn = document.getElementById('verifyBtn');
        this.resendBtn = document.getElementById('resendBtn');
        this.resendTimer = document.getElementById('resendTimer');
        this.form = document.getElementById('otpForm');
        this.errorMessage = document.getElementById('errorMessage');
        this.successMessage = document.getElementById('successMessage');
        this.phoneNumber = document.getElementById('phoneNumber');
        
        this.resendCountdown = 30;
        this.correctOTP = '123456'; // Demo OTP - in real app, this comes from server
        this.maxAttempts = 3;
        this.currentAttempts = 0;
        
        this.init();
    }

    init() {
        this.setupInputHandlers();
        this.setupFormHandler();
        this.setupResendHandler();
        this.startResendTimer();
        this.loadPhoneNumber();
        this.showDemoInfo();
    }

    showDemoInfo() {
        // Show demo OTP for testing
        setTimeout(() => {
            this.showSuccess(`Demo Mode: Use OTP ${this.correctOTP} to verify`);
        }, 2000);
    }

    setupInputHandlers() {
        this.inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => this.handleInput(e, index));
            input.addEventListener('keydown', (e) => this.handleKeydown(e, index));
            input.addEventListener('paste', (e) => this.handlePaste(e));
            input.addEventListener('focus', (e) => this.handleFocus(e));
        });
    }

    handleInput(e, index) {
        const value = e.target.value;
        
        // Only allow numbers
        if (!/^\d*$/.test(value)) {
            e.target.value = '';
            return;
        }

        // Add filled class
        if (value) {
            e.target.classList.add('filled');
            e.target.classList.remove('error');
        } else {
            e.target.classList.remove('filled');
        }

        // Move to next input
        if (value && index < this.inputs.length - 1) {
            this.inputs[index + 1].focus();
        }

        // Auto-submit when all fields are filled
        if (this.getOTP().length === 6) {
            setTimeout(() => this.verifyOTP(), 300);
        }

        this.validateComplete();
    }

    handleKeydown(e, index) {
        // Handle backspace
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            this.inputs[index - 1].focus();
            this.inputs[index - 1].value = '';
            this.inputs[index - 1].classList.remove('filled');
        }

        // Handle arrow keys
        if (e.key === 'ArrowLeft' && index > 0) {
            this.inputs[index - 1].focus();
        }
        if (e.key === 'ArrowRight' && index < this.inputs.length - 1) {
            this.inputs[index + 1].focus();
        }

        // Handle Enter key
        if (e.key === 'Enter') {
            e.preventDefault();
            this.verifyOTP();
        }
    }

    handleFocus(e) {
        // Select all text when focusing
        e.target.select();
    }

    handlePaste(e) {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        const digits = pastedData.replace(/\D/g, '').slice(0, 6);
        
        digits.split('').forEach((digit, index) => {
            if (this.inputs[index]) {
                this.inputs[index].value = digit;
                this.inputs[index].classList.add('filled');
            }
        });

        // Focus the next empty input or the last one
        const nextEmptyIndex = digits.length < 6 ? digits.length : 5;
        this.inputs[nextEmptyIndex].focus();

        // Auto-submit if all fields are filled
        if (digits.length === 6) {
            setTimeout(() => this.verifyOTP(), 300);
        }

        this.validateComplete();
    }

    validateComplete() {
        const otp = this.getOTP();
        this.verifyBtn.disabled = otp.length !== 6;
        
        // Update button text based on completion
        if (otp.length === 6) {
            this.verifyBtn.textContent = 'Verify & Continue';
        } else {
            this.verifyBtn.textContent = 'Enter 6-digit Code';
        }
    }

    getOTP() {
        return Array.from(this.inputs).map(input => input.value).join('');
    }

    setupFormHandler() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.verifyOTP();
        });
    }

    verifyOTP() {
        const otp = this.getOTP();
        
        if (otp.length !== 6) {
            this.showError('Please enter the complete 6-digit code.');
            this.inputs[0].focus();
            return;
        }

        // Check attempt limit
        if (this.currentAttempts >= this.maxAttempts) {
            this.showError('Too many failed attempts. Please request a new code.');
            this.clearInputs();
            return;
        }

        // Simulate API call
        this.verifyBtn.disabled = true;
        this.verifyBtn.textContent = 'Verifying...';
        
        // Add loading state to inputs
        this.inputs.forEach(input => input.disabled = true);

        setTimeout(() => {
            if (otp === this.correctOTP) {
                this.showSuccess('✅ Verification successful! Redirecting to dashboard...');
                
                // Mark as verified in localStorage
                localStorage.setItem('otpVerified', 'true');
                localStorage.setItem('verificationTime', new Date().toISOString());
                
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 2000);
            } else {
                this.currentAttempts++;
                const remainingAttempts = this.maxAttempts - this.currentAttempts;
                
                if (remainingAttempts > 0) {
                    this.showError(`❌ Invalid code. ${remainingAttempts} attempt(s) remaining.`);
                } else {
                    this.showError('❌ Maximum attempts exceeded. Please request a new code.');
                }
                
                this.shakeInputs();
                this.clearInputs();
            }
            
            // Reset button and inputs
            this.verifyBtn.disabled = false;
            this.verifyBtn.textContent = 'Verify & Continue';
            this.inputs.forEach(input => input.disabled = false);
            
        }, 1500);
    }

    shakeInputs() {
        this.inputs.forEach(input => {
            input.classList.add('error');
            setTimeout(() => {
                input.classList.remove('error');
            }, 500);
        });
    }

    clearInputs() {
        this.inputs.forEach(input => {
            input.value = '';
            input.classList.remove('filled');
        });
        this.inputs[0].focus();
        this.validateComplete();
    }

    setupResendHandler() {
        this.resendBtn.addEventListener('click', () => {
            this.resendOTP();
        });
    }

    resendOTP() {
        // Generate new OTP (in real app, this would call API)
        this.correctOTP = Math.floor(100000 + Math.random() * 900000).toString();
        this.currentAttempts = 0; // Reset attempts
        
        this.showSuccess(`📱 New verification code sent! Demo OTP: ${this.correctOTP}`);
        this.resendCountdown = 30;
        this.resendBtn.disabled = true;
        this.clearInputs();
        this.startResendTimer();
    }

    startResendTimer() {
        const timer = setInterval(() => {
            this.resendCountdown--;
            this.resendTimer.textContent = `Resend in ${this.resendCountdown}s`;

            if (this.resendCountdown <= 0) {
                clearInterval(timer);
                this.resendTimer.textContent = '';
                this.resendBtn.disabled = false;
                this.resendBtn.textContent = 'Resend Code';
            }
        }, 1000);
    }

    showError(message) {
        this.hideMessages();
        this.errorMessage.textContent = message;
        this.errorMessage.style.display = 'block';
        
        // Auto-hide error after 5 seconds
        setTimeout(() => {
            this.errorMessage.style.display = 'none';
        }, 5000);
    }

    showSuccess(message) {
        this.hideMessages();
        this.successMessage.textContent = message;
        this.successMessage.style.display = 'block';
        
        // Auto-hide success after 8 seconds (longer for demo info)
        setTimeout(() => {
            this.successMessage.style.display = 'none';
        }, 8000);
    }

    hideMessages() {
        this.errorMessage.style.display = 'none';
        this.successMessage.style.display = 'none';
    }

    loadPhoneNumber() {
        // Get phone number from URL parameters or localStorage
        const urlParams = new URLSearchParams(window.location.search);
        let phone = urlParams.get('phone') || localStorage.getItem('verificationPhone');
        
        if (!phone) {
            // Fallback to profile email if available
            const profile = JSON.parse(localStorage.getItem('jobbridge_profile') || '{}');
            phone = profile.email || '+1 (555) 123-4567';
        }
        
        // Format email/phone for display
        if (phone.includes('@')) {
            // It's an email
            this.phoneNumber.textContent = phone;
        } else {
            // It's a phone number, format it
            this.phoneNumber.textContent = this.formatPhoneNumber(phone);
        }
    }

    formatPhoneNumber(phone) {
        // Simple phone number formatting
        const cleaned = phone.replace(/\D/g, '');
        if (cleaned.length === 10) {
            return `+1 (${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6)}`;
        }
        return phone;
    }
}

// Initialize OTP verification when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if user should be on this page
    const profile = localStorage.getItem('jobbridge_profile');
    if (!profile) {
        // No profile found, redirect to signup
        window.location.href = 'signup.html';
        return;
    }
    
    new OTPVerification();
});

// Auto-focus first input when page loads
window.addEventListener('load', () => {
    const firstInput = document.querySelector('.otp-input');
    if (firstInput) {
        firstInput.focus();
    }
});

// Prevent going back to signup/login without completing OTP
window.addEventListener('beforeunload', (e) => {
    const otpVerified = localStorage.getItem('otpVerified');
    if (!otpVerified) {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? You need to verify your account to continue.';
    }
});
