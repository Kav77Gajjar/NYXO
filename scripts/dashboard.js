// dashboard.js for JobBridge
const jobs = [
    {
        title: 'Frontend Developer',
        company: 'Tech Innovators',
        location: 'Remote',
        type: 'Full-time',
        match: 95,
        logo: 'https://img.icons8.com/color/48/000000/source-code.png',
        details: 'React, CSS, JavaScript. 2+ years experience.',
        link: 'https://jobplatform.com/job/1234'
    },
    {
        title: 'Backend Engineer',
        company: 'Cloud Solutions',
        location: 'Bangalore, India',
        type: 'Remote',
        match: 89,
        logo: 'https://img.icons8.com/color/48/000000/cloud.png',
        details: 'Node.js, Express, MongoDB. 3+ years experience.',
        link: 'https://jobplatform.com/job/5678'
    },
    {
        title: 'UI/UX Designer',
        company: 'DesignPro',
        location: 'Delhi, India',
        type: 'Contract',
        match: 82,
        logo: 'https://img.icons8.com/color/48/000000/design.png',
        details: 'Figma, Adobe XD, Portfolio required.',
        link: 'https://jobplatform.com/job/9101'
    }
];

function renderJobs() {
    const container = document.getElementById('jobsContainer');
    if (!container) return;
    container.innerHTML = '';
    jobs.forEach((job, i) => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.style.animation = `fadeInCard 0.7s ${i * 0.12 + 0.2}s cubic-bezier(.68,-0.55,.27,1.55) both`;
        card.innerHTML = `
            <img src="${job.logo}" alt="logo" class="job-logo" />
            <div class="job-content">
                <div class="job-title">${job.title}</div>
                <div class="job-company">${job.company}</div>
                <div class="job-tags">
                    <span class="job-tag">${job.type}</span>
                    <span class="job-tag">${job.location}</span>
                </div>
                <div class="job-location">${job.details}</div>
                <div class="job-actions">
                    <button class="icon-btn" title="Save"><span>💾</span></button>
                    <button class="icon-btn" title="Hide"><span>🙈</span></button>
                </div>
            </div>
            <span class="match-score">${job.match}% Match</span>
            <button class="apply-btn" onclick="window.open('${job.link}', '_blank')">Apply</button>
        `;
        container.appendChild(card);
    });
}

// Animate profile completion bar
function animateProfileBar() {
    const bar = document.getElementById('profileProgressBar');
    const label = document.getElementById('profileCompletionText');
    let percent = 0;
    const target = 80;
    if (!bar || !label) return;
    const interval = setInterval(() => {
        if (percent >= target) {
            clearInterval(interval);
        } else {
            percent++;
            bar.style.width = percent + '%';
            label.textContent = percent + '%';
        }
    }, 12);
    // Set initial width for smooth animation
    bar.style.width = '0%';
}

// Add card animation keyframes
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeInCard {
    0% { opacity: 0; transform: translateY(30px) scale(0.95); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
}`;
document.head.appendChild(style);

renderJobs();
animateProfileBar();
