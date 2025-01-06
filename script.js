const sections = [
    {
        title: 'Tournament Structure',
        icon: '🏆',
        content: `
            <div class="subsection">
                <div class="subsection-title">Seeding Tournament (Week 1)</div>
                <p>Sharpen your swords (or rather, your chess pieces) in 5-minute matches to claim your spot on the ladder.</p>
            </div>
            <div class="subsection">
                <div class="subsection-title">Ladder Competition</div>
                <p>Challenge opponents ranked up to five positions above you to climb the ranks and prove your worth.</p>
            </div>
            <div class="subsection">
                <div class="subsection-title">Playoffs</div>
                <p>The top eight heroes will face off in a single-elimination showdown.</p>
            </div>
        `
    },
    {
        title: 'Match Rules',
        icon: '⚔️',
        content: `
            <ul class="bullet-list">
                <li>All matches follow standard chess rules (FIDE), with each player wielding a mighty 10-minute clock.</li>
                <li>Report your victories (or defeats) within 24 hours.</li>
                <li>If a match ends in a stalemate, the higher-ranked player retains their position.</li>
            </ul>
        `
    },
    {
        title: 'Ladder Competition Guidelines',
        icon: '📅',
        content: `
            <ul class="bullet-list">
                <li>Challenge opponents ranked up to five positions above you each week.</li>
                <li>Issue your challenges directly, suggesting at least two proposed times.</li>
                <li>Respond to challenges within 48 hours.</li>
                <li>Complete matches within seven days of issuing a challenge.</li>
            </ul>
        `
    },
    {
        title: 'Honor Code and Sportsmanship',
        icon: '🛡️',
        content: `
            <p>The CB Newton Cup is more than just a competition; it's a celebration of values.</p>
            <ul class="bullet-list">
                <li>Play with integrity and report results truthfully.</li>
                <li>Treat opponents with respect and courtesy.</li>
                <li>Foster a positive and supportive atmosphere.</li>
            </ul>
        `
    },
    {
        title: 'Late Registration',
        icon: '👥',
        content: `
            <p>If you're a latecomer to this epic adventure, fear not! You can still join during the first two weeks.</p>
            <ul class="bullet-list">
                <li>Start at the bottom of the ladder and rise through determination.</li>
                <li>Play at least two matches per week during your first two weeks.</li>
            </ul>
        `
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    // Create container
    const container = document.createElement('div');
    container.className = 'container';
    
    // Add header
    const header = document.createElement('div');
    header.className = 'header';
    header.innerHTML = `
        <h1 class="title">CB Newton Cup</h1>
        <p class="subtitle">Your Epic Chess Adventure Awaits!</p>
    `;
    container.appendChild(header);
    
    // Add sections
    sections.forEach((section, index) => {
        const accordionSection = document.createElement('div');
        accordionSection.className = 'accordion-section';
        
        const button = document.createElement('button');
        button.className = 'accordion-header';
        button.innerHTML = `
            <span>
                <span class="section-icon">${section.icon}</span>
                ${section.title}
            </span>
            <span class="chevron">▼</span>
        `;
        
        const content = document.createElement('div');
        content.className = 'accordion-content';
        content.innerHTML = section.content;
        
        accordionSection.appendChild(button);
        accordionSection.appendChild(content);
        
        button.addEventListener('click', () => {
            const isActive = content.classList.contains('active');
            
            // Close all sections
            document.querySelectorAll('.accordion-content').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelectorAll('.chevron').forEach(el => {
                el.classList.remove('active');
            });
            
            // Toggle current section
            if (!isActive) {
                content.classList.add('active');
                button.querySelector('.chevron').classList.add('active');
            }
        });
        
        container.appendChild(accordionSection);
    });
    
    app.appendChild(container);
});