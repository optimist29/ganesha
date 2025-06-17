// Script to generate all 32 individual Ganesha pages
const fs = require('fs');

const ganeshaForms = [
    {
        id: 1,
        name: "Bala Ganapathi",
        tagline: "The childlike Ganesha who brings joy and innocence!",
        story: "Once upon a time, there was a very special form of Ganesha called Bala Ganapathi. This young and playful Ganesha loved to dance and play with children. He had the sweetest smile and would help all the little children when they needed guidance.\n\nBala Ganapathi teaches us to keep the wonder and joy of childhood alive in our hearts forever. He reminds us that learning can be fun and that we should always stay curious about the world around us.\n\nWhenever children pray to Bala Ganapathi, he fills their hearts with happiness and helps them see the magic in everyday things. He shows us that being young at heart is a wonderful gift!",
        mantra: "karasthakadalīcūta | panasekṣucamodakaṁ | bālasūryanibhaṁ vaṁde || devaṁ bālagaṇādhipaṁ",
        meaning: "Adorned with a garland of tender flowers, having plantain (banana), mango, jack fruit, sugarcane and sweets (modaka) in His hands and who is effulgent like the rising sun.",
        videoId: "OVIz8M8fva0"
    },
    {
        id: 2,
        name: "Taruna Ganapathi",
        tagline: "The youthful Ganesha full of energy and wisdom!",
        story: "Taruna Ganapathi is the young and energetic form of Ganesha. He represents the time when we are growing up and learning new things every day. This form of Ganesha is always ready for adventure and loves to help young people discover their talents and dreams.\n\nWith his bright red color, Taruna Ganapathi shines like the morning sun, bringing fresh energy and new hope to everyone who prays to him. He teaches us that youth is not just about age, but about keeping our minds open and our hearts full of enthusiasm.\n\nWhen we face new challenges or start new projects, Taruna Ganapathi gives us the courage and energy we need to succeed. He reminds us that every day is a chance to learn something wonderful and new!",
        mantra: "pāshāṁkushāpūpakapitthajaṁbū | svadaṁtaśālīkṣumapi svahastaiḥ | dhatte sadāyastaruṇāruṇābhaḥ | pāyātsa yuṣmāṁstaruṇogaṇeshaḥ",
        meaning: "Carrying in His hands the noose, hook, rice-cake, guava fruit, rose apple, own (broken) tusk, bunch of corn ears (paddy) and sugarcane and who vividly shines forth with His brilliant youthfulness.",
        videoId: "OVIz8M8fva0"
    },
    // Add more forms as needed...
];

// Add remaining forms with placeholder data
for (let i = 3; i <= 32; i++) {
    ganeshaForms.push({
        id: i,
        name: `Ganesha Form ${i}`,
        tagline: `The wonderful Ganesha who brings special blessings!`,
        story: `This is the amazing story of Ganesha Form ${i}. Each form of Ganesha has unique qualities and teaches us important lessons about life, kindness, and wisdom. This particular form shows us how to be better people and helps us on our spiritual journey.\n\nEvery form of Ganesha has something special to teach us. This form reminds us to always be kind to others and to help those who need our support. When we pray with a pure heart, Ganesha always listens and helps us grow into better people.\n\nRemember, Ganesha is always there to guide us and protect us. All we need to do is ask for help with love and respect, and he will show us the right path forward.`,
        mantra: `Sample mantra for form ${i} - Replace with actual content`,
        meaning: `This mantra helps us connect with the special energy and blessings of this form of Ganesha. Please replace with actual meaning from your PDF.`,
        videoId: "OVIz8M8fva0"
    });
}

function generatePageHTML(form) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${form.name}: ${form.tagline} | Kathas with Pooja</title>
    <meta name="description" content="Learn about ${form.name}, ${form.tagline.toLowerCase()} Watch stories and learn the sacred mantra with Pooja.">
    <meta name="keywords" content="${form.name} story, Ganesha for kids, Hindu stories for children, Kathas with Pooja">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One:wght@400&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="nav-container">
                <div class="logo">
                    <h1>Kathas with Pooja</h1>
                    <span class="subtitle">32 Forms of Ganesha</span>
                </div>
                <div class="nav-links">
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="https://www.youtube.com/@kathaswithpooja" target="_blank" class="nav-link youtube-link">
                        YouTube Channel
                    </a>
                </div>
            </div>
        </nav>
    </header>

    <main class="ganesha-page">
        <a href="index.html" class="back-button container">← Back to Gallery</a>
        
        <div class="ganesha-header">
            <div class="container">
                <h1 class="ganesha-name">${form.name}</h1>
                <p class="ganesha-tagline">${form.tagline}</p>
            </div>
        </div>

        <div class="container">
            <div class="ganesha-content">
                <div class="ganesha-illustration-large">
                    ॐ
                </div>
                <div class="ganesha-story">
                    <h2 class="story-title">Story Time with Pooja</h2>
                    <div class="story-content">
                        ${form.story.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('\n                        ')}
                    </div>
                </div>
            </div>

            <div class="video-section">
                <h2 class="story-title">Watch the Story!</h2>
                <div class="video-container">
                    <iframe 
                        src="https://www.youtube.com/embed/${form.videoId}" 
                        title="${form.name} Story - Kathas with Pooja"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <a href="https://www.youtube.com/@kathaswithpooja" target="_blank" class="youtube-button">
                    Watch More & Subscribe on YouTube!
                </a>
            </div>

            <div class="learn-more-section">
                <h2 class="learn-more-title">Let's Learn More!</h2>
                <div class="mantra-section">
                    <div class="mantra-card">
                        <h3>Sacred Mantra</h3>
                        <p class="mantra-text">
                            "${form.mantra}"
                        </p>
                    </div>
                    <div class="meaning-card">
                        <h3>Meaning</h3>
                        <p class="meaning-text">
                            ${form.meaning}
                        </p>
                    </div>
                </div>
            </div>

            <div class="youtube-section">
                <div class="container">
                    <h2 class="section-title">Discover More Amazing Stories!</h2>
                    <p class="section-description">
                        Ready for more adventures? Explore the other ${32 - form.id} forms of Ganesha!
                    </p>
                    <a href="index.html" class="youtube-button">
                        Explore More Forms
                    </a>
                </div>
            </div>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-text">
                    <p>&copy; 2024 Pooja. All rights reserved.</p>
                </div>
                <div class="footer-links">
                    <a href="https://www.youtube.com/@kathaswithpooja" target="_blank" class="footer-link">
                        YouTube
                    </a>
                    <a href="https://instagram.com/kathaswithpooja/" target="_blank" class="footer-link">
                        Instagram
                    </a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>`;
}

// Generate all pages
ganeshaForms.forEach(form => {
    const html = generatePageHTML(form);
    const filename = `ganesha-${form.id}.html`;
    
    try {
        fs.writeFileSync(filename, html);
        console.log(`Generated ${filename}`);
    } catch (error) {
        console.error(`Error generating ${filename}:`, error);
    }
});

console.log('All pages generated successfully!');