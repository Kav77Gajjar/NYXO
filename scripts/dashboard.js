// Enhanced Dashboard functionality
class DashboardManager {
    constructor() {
        this.jobs = [];
        this.currentFilter = 'all';
        this.jobsPerPage = 6;
        this.currentPage = 1;
        this.init();
    }

    init() {
        this.loadJobs();
        this.setupEventListeners();
        this.animateCounters();
        this.setupProgressBar();
    }

    // Sample job data with more realistic content
    getSampleJobs() {
        return [
            {
                id: 1,
                title: "Senior Frontend Developer",
                company: "TechCorp Inc.",
                companyLogo: "TC",
                location: "San Francisco, CA",
                type: "Full-time",
                salary: "$120k - $150k",
                posted: "2 days ago",
                tags: ["React", "TypeScript", "Remote"],
                saved: false
            },
            {
                id: 2,
                title: "UX/UI Designer",
                company: "DesignStudio",
                companyLogo: "DS",
                location: "New York, NY",
                type: "Full-time",
                salary: "$90k - $120k",
                posted: "1 day ago",
                tags: ["Figma", "Adobe XD", "Hybrid"],
                saved: true
            },
            {
                id: 3,
                title: "Full Stack Engineer",
                company: "StartupXYZ",
                companyLogo: "SX",
                location: "Austin, TX",
                type: "Full-time",
                salary: "$100k - $130k",
                posted: "3 days ago",
                tags: ["Node.js", "React", "MongoDB"],
                saved: false
            },
            {
                id: 4,
                title: "Product Manager",
                company: "InnovateCorp",
                companyLogo: "IC",
                location: "Seattle, WA",
                type: "Full-time",
                salary: "$130k - $160k",
                posted: "1 week ago",
                tags: ["Strategy", "Analytics", "Remote"],
                saved: false
            },
            {
                id: 5,
                title: "Data Scientist",
                company: "DataFlow",
                companyLogo: "DF",
                location: "Boston, MA",
                type: "Full-time",
                salary: "$110k - $140k",
                posted: "4 days ago",
                tags: ["Python", "ML", "SQL"],
                saved: true
            },
            {
                id: 6,
                title: "DevOps Engineer",
                company: "CloudTech",
                companyLogo: "CT",
                location: "Denver, CO",
                type: "Full-time",
                salary: "$105k - $135k",
                posted: "5 days ago",
                tags: ["AWS", "Docker", "Kubernetes"],
                saved: false
            },
            {
                id: 7,
                title: "Mobile App Developer",
                company: "AppGenius",
                companyLogo: "AG",
                location: "Los Angeles, CA",
                type: "Contract",
                salary: "$80k - $100k",
                posted: "1 week ago",
                tags: ["React Native", "iOS", "Android"],
                saved: false
            },
            {
                id: 8,
                title: "Backend Engineer",
                company: "ServerSide",
                companyLogo: "SS",
                location: "Chicago, IL",
                type: "Full-time",
                salary: "$95k - $125k",
                posted: "6 days ago",
                tags: ["Java", "Spring", "Microservices"],
                saved: true
            }
        ];
    }

    loadJobs() {
        this.jobs = this.getSampleJobs();
        this.renderJobs();
    }

    renderJobs() {
        const container = document.getElementById('jobsContainer');
        if (!container) return;

        const filteredJobs = this.getFilteredJobs();
        const jobsToShow = filteredJobs.slice(0, this.currentPage * this.jobsPerPage);

        container.innerHTML = jobsToShow.map(job => this.createJobCard(job)).join('');
        
        // Add staggered animation delay
        const jobCards = container.querySelectorAll('.job-card');
        jobCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });

        this.updateLoadMoreButton(filteredJobs.length, jobsToShow.length);
    }

    createJobCard(job) {
        return `
            <div class="job-card" data-job-id="${job.id}">
                <div class="job-header">
                    <div class="job-company">
                        <div class="company-logo">${job.companyLogo}</div>
                        <div class="company-info">
                            <h3>${job.company}</h3>
                            <p>${job.location}</p>
                        </div>
                    </div>
                    <div class="job-actions">
                        <button class="action-icon save-btn ${job.saved ? 'saved' : ''}" 
                                onclick="dashboard.toggleSave(${job.id})" 
                                title="${job.saved ? 'Remove from saved' : 'Save job'}">
                            ${job.saved ? '❤️' : '🤍'}
                        </button>
                        <button class="action-icon share-btn" 
                                onclick="dashboard.shareJob(${job.id})" 
                                title="Share job">
                            📤
                        </button>
                    </div>
                </div>
                
                <h2 class="job-title">${job.title}</h2>
                
                <div class="job-details">
                    <span class="job-tag">${job.type}</span>
                    <span class="job-tag salary">${job.salary}</span>
                    <span class="job-tag location">${job.location}</span>
                    ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
                </div>
                
                <div class="job-footer">
                    <span class="job-posted">Posted ${job.posted}</span>
                    <button class="apply-btn" onclick="dashboard.applyToJob(${job.id})">
                        Apply Now
                    </button>
                </div>
            </div>
        `;
    }

    getFilteredJobs() {
        switch (this.currentFilter) {
            case 'recent':
                return this.jobs.filter(job => 
                    job.posted.includes('day') || job.posted.includes('hour')
                );
            case 'saved':
                return this.jobs.filter(job => job.saved);
            default:
                return this.jobs;
        }
    }

    updateLoadMoreButton(totalJobs, shownJobs) {
        const loadMoreContainer = document.querySelector('.load-more-container');
        const loadMoreBtn = document.querySelector('.load-more-btn');
        
        if (loadMoreContainer && loadMoreBtn) {
            if (shownJobs < totalJobs) {
                loadMoreContainer.style.display = 'block';
                loadMoreBtn.textContent = `Load More (${totalJobs - shownJobs} remaining)`;
            } else {
                loadMoreContainer.style.display = 'none';
            }
        }
    }

    setupEventListeners() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.currentPage = 1;
                this.renderJobs();
            });
        });

        // Load more button
        const loadMoreBtn = document.querySelector('.load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.currentPage++;
                this.renderJobs();
            });
        }

        // Job card click handlers
        document.addEventListener('click', (e) => {
            if (e.target.closest('.job-card') && !e.target.closest('.job-actions') && !e.target.closest('.apply-btn')) {
                const jobCard = e.target.closest('.job-card');
                const jobId = jobCard.dataset.jobId;
                this.viewJobDetails(jobId);
            }
        });
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
                    const target = parseInt(counter.dataset.target);
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
        const increment = target / 60; // 60 frames for 1 second at 60fps
        const duration = 1500; // 1.5 seconds
        const stepTime = duration / 60;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, stepTime);
    }

    setupProgressBar() {
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            // Animate progress bar after a delay
            setTimeout(() => {
                progressFill.style.width = '85%';
            }, 1000);
        }
    }

    // Job interaction methods
    toggleSave(jobId) {
        const job = this.jobs.find(j => j.id === jobId);
        if (job) {
            job.saved = !job.saved;
            
            // Update the button
            const saveBtn = document.querySelector(`[data-job-id="${jobId}"] .save-btn`);
            if (saveBtn) {
                saveBtn.classList.toggle('saved');
                saveBtn.innerHTML = job.saved ? '❤️' : '🤍';
                saveBtn.title = job.saved ? 'Remove from saved' : 'Save job';
            }

            // Show feedback
            this.showFeedback(job.saved ? 'Job saved!' : 'Job removed from saved', 'success');
            
            // Update saved count if visible
            this.updateSavedCount();
        }
    }

    shareJob(jobId) {
        const job = this.jobs.find(j => j.id === jobId);
        if (job) {
            // Simple share functionality
            if (navigator.share) {
                navigator.share({
                    title: job.title,
                    text: `Check out this job opportunity: ${job.title} at ${job.company}`,
                    url: window.location.href
                });
            } else {
                // Fallback - copy to clipboard
                const shareText = `${job.title} at ${job.company} - ${window.location.href}`;
                navigator.clipboard.writeText(shareText).then(() => {
                    this.showFeedback('Job link copied to clipboard!', 'success');
                });
            }
        }
    }

    applyToJob(jobId) {
        const job = this.jobs.find(j => j.id === jobId);
        if (job) {
            // Simulate application process
            this.showFeedback(`Application started for ${job.title}!`, 'success');
            
            // You could redirect to an application page or open a modal
            setTimeout(() => {
                // window.location.href = `apply.html?job=${jobId}`;
                alert(`This would redirect to the application page for: ${job.title}`);
            }, 1000);
        }
    }

    viewJobDetails(jobId) {
        const job = this.jobs.find(j => j.id === jobId);
        if (job) {
            // You could open a modal or redirect to a details page
            console.log('Viewing job details for:', job);
            // window.location.href = `job-details.html?id=${jobId}`;
        }
    }

    updateSavedCount() {
        const savedCount = this.jobs.filter(job => job.saved).length;
        const savedCountElement = document.getElementById('savedCount');
        if (savedCountElement) {
            savedCountElement.textContent = savedCount;
        }
    }

    showFeedback(message, type = 'info') {
        // Create a simple feedback notification
        const feedback = document.createElement('div');
        feedback.className = `feedback-notification ${type}`;
        feedback.textContent = message;
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-weight: 500;
        `;

        document.body.appendChild(feedback);

        // Animate in
        setTimeout(() => {
            feedback.style.transform = 'translateX(0)';
        }, 10);

        // Remove after delay
        setTimeout(() => {
            feedback.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(feedback);
            }, 300);
        }, 3000);
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new DashboardManager();
});

// Legacy compatibility for existing calls
function updateProfileProgress() {
    const progressBar = document.getElementById('profileProgressBar');
    const completionText = document.getElementById('profileCompletionText');
    
    if (progressBar && completionText) {
        progressBar.style.width = '85%';
        completionText.textContent = '85%';
    }
}
