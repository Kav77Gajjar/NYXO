// resume-builder.js for JobBridge
const resumeForm = document.getElementById('resumeForm');
const resumeOutput = document.getElementById('resumeOutput');
if (resumeForm) {
    resumeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const skills = document.getElementById('skills').value;
        const experience = document.getElementById('experience').value;
        resumeOutput.innerHTML = `
            <h3>Preview Resume</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Skills:</strong> ${skills}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <button onclick="window.print()">Print/Save as PDF</button>
        `;
    });
}
