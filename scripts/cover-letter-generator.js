// cover-letter-generator.js for JobBridge
const coverLetterForm = document.getElementById('coverLetterForm');
const coverLetterOutput = document.getElementById('coverLetterOutput');
if (coverLetterForm) {
    coverLetterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const position = document.getElementById('position').value;
        const company = document.getElementById('company').value;
        const highlights = document.getElementById('highlights').value;
        coverLetterOutput.innerHTML = `
            <h3>Generated Cover Letter</h3>
            <p>Dear Hiring Manager,</p>
            <p>I am excited to apply for the position of <strong>${position}</strong> at <strong>${company}</strong>. ${highlights}</p>
            <p>Thank you for considering my application.</p>
        `;
    });
}
