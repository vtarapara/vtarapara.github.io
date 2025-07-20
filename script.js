// Work details data
const workDetails = {
    'mitre-current': {
        title: 'The MITRE Corporation',
        position: 'Software Engineer',
        dates: 'Jan 2025 - Current',
        logo: 'MIT',
        description: 'Building scalable ETL pipelines and architecting LLM workflows for enterprise applications.',
        results: [
            'Designed and implemented ETL pipelines for processing large-scale datasets',
            'Architected LLM workflows for natural language processing applications',
            'Developed FastAPI backend services with high performance and reliability',
            'Collaborated with cross-functional teams to deliver production-ready solutions'
        ],
        technologies: ['Python', 'FastAPI', 'ETL', 'LLMs', 'SQL', 'Docker']
    },
    'mitre-intern': {
        title: 'The MITRE Corporation',
        position: 'Software Engineer Intern',
        dates: 'May 2024 - Aug 2024',
        logo: 'MIT',
        description: 'Developed secure communication systems and database solutions deployed on AWS infrastructure.',
        results: [
            'Built secure SMS systems with end-to-end encryption',
            'Designed and implemented robust database architectures',
            'Deployed applications on AWS with proper security configurations',
            'Participated in code reviews and agile development processes'
        ],
        technologies: ['Python', 'AWS', 'Database Design', 'Security', 'SMS APIs']
    },
    'gdm': {
        title: 'GDM Electronic & Medical',
        position: 'Product & Test Engineering Intern',
        dates: 'Jun 2023 - Aug 2023',
        logo: 'GDM',
        description: 'Optimized medical device assembly processes and developed automation solutions.',
        results: [
            'Optimized medical device assembly line efficiency by 25%',
            'Developed automation solutions for quality testing procedures',
            'Analyzed manufacturing data to identify process improvements',
            'Collaborated with engineering teams on product development'
        ],
        technologies: ['Process Optimization', 'Automation', 'Data Analysis', 'Medical Devices']
    },
    'cern': {
        title: 'CERN',
        position: 'Software Research Intern',
        dates: 'May 2022 - Sep 2022',
        logo: 'CRN',
        description: 'Developed particle flow algorithms and optimized ATLAS detector performance using machine learning.',
        results: [
            'Implemented particle flow algorithms for jet reconstruction',
            'Optimized ATLAS detector performance using ML techniques',
            'Processed and analyzed large-scale particle physics datasets',
            'Contributed to research publications and technical documentation'
        ],
        technologies: ['Python', 'Machine Learning', 'ROOT', 'Data Analysis', 'Physics Simulation']
    }
};

// Modal functions
function openWorkDetails(workId) {
    const modal = document.getElementById('workModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    const work = workDetails[workId];
    
    modalTitle.textContent = 'Details';
    
    modalContent.innerHTML = `
        <div class="modal-company-info">
            <div class="modal-company-logo">${work.logo}</div>
            <div>
                <div class="modal-position">${work.position}</div>
                <div class="modal-dates">${work.dates}</div>
            </div>
        </div>
        
        <div class="modal-description">${work.description}</div>
        
        <div class="modal-section">
            <h4>Key Achievements</h4>
            <ul>
                ${work.results.map(result => `<li>${result}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h4>Technologies Used</h4>
            <div class="modal-tech-tags">
                ${work.technologies.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeWorkDetails() {
    const modal = document.getElementById('workModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('workModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Add some interactive particle creation on mouse movement
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.position = 'fixed';
        particle.style.pointerEvents = 'none';
        particle.style.animation = 'floatParticle 3s linear forwards';
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }
});

// Add stagger animation to work items
const workItems = document.querySelectorAll('.work-item, .project-item');
workItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    setTimeout(() => {
        item.style.transition = 'all 0.6s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    }, index * 100);
});