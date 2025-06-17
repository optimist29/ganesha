// 32 Forms of Ganesha data
const ganeshaForms = [
    {
        id: 1,
        name: "Bala Ganapathi",
        tagline: "The childlike Ganesha who brings joy and innocence!",
        icon: "ॐ",
        story: "Once upon a time, there was a very special form of Ganesha called Bala Ganapathi. This young and playful Ganesha loved to dance and play with children. He had the sweetest smile and would help all the little children when they needed guidance. Bala Ganapathi teaches us to keep the wonder and joy of childhood alive in our hearts forever.",
        mantra: "karasthakadalīcūta | panasekṣucamodakaṁ | bālasūryanibhaṁ vaṁde || devaṁ bālagaṇādhipaṁ",
        meaning: "Adorned with a garland of tender flowers, having plantain (banana), mango, jack fruit, sugarcane and sweets (modaka) in His hands and who is effulgent like the rising sun.",
        videoId: "OVIz8M8fva0"
    },
    {
        id: 2,
        name: "Taruna Ganapathi",
        tagline: "The youthful Ganesha full of energy and wisdom!",
        icon: "गं",
        story: "Taruna Ganapathi is the young and energetic form of Ganesha. He represents the time when we are growing up and learning new things every day. This form of Ganesha is always ready for adventure and loves to help young people discover their talents and dreams.",
        mantra: "pāshāṁkushāpūpakapitthajaṁbū | svadaṁtaśālīkṣumapi svahastaiḥ | dhatte sadāyastaruṇāruṇābhaḥ | pāyātsa yuṣmāṁstaruṇogaṇeshaḥ",
        meaning: "Carrying in His hands the noose, hook, rice-cake, guava fruit, rose apple, own (broken) tusk, bunch of corn ears (paddy) and sugarcane and who vividly shines forth with His brilliant youthfulness.",
        videoId: "OVIz8M8fva0"
    },
    {
        id: 3,
        name: "Bhakti Ganapathi",
        tagline: "The devoted Ganesha who teaches us love and faith!",
        icon: "गण",
        story: "Bhakti Ganapathi is all about love and devotion. This gentle form of Ganesha shows us how to love with all our heart and be kind to everyone around us. When we pray to Bhakti Ganapathi, we learn to be grateful for all the beautiful things in our life.",
        mantra: "nArikELAmrakadaLI | guDapAyasadhAriNaM | sharaccaMdrAbhavapuShaM | bhajE bhaktagaNAdhipaM",
        meaning: "The Ganesha of devotees, who shines like the autumn moon, with coconut, mango, plantain (banana), jaggery and sweets in his hands.",
        videoId: "OVIz8M8fva0"
    },
    {
        id: 4,
        name: "Vira Ganapathi",
        tagline: "The brave warrior who protects us from fear!",
        icon: "पति",
        story: "Vira Ganapathi is the brave and courageous form of Ganesha. He teaches us to be strong and face our fears with confidence. Whenever we feel scared or worried, we can think of Vira Ganapathi and find the courage inside ourselves to overcome any challenge.",
        mantra: "vīraṁ vikrāntaṁ vighnāntakaṁ śrīgaṇeśaṁ | vighnāvasānaṁ varenyaṁ vareṇyaṁ || vande viśveśaṁ ||",
        meaning: "I bow to the brave, valiant, destroyer of obstacles, prosperous Ganesha, who ends all obstacles, who is most excellent and worthy of choice, who is the lord of the universe.",
        videoId: "OVIz8M8fva0"
    },
    {
        id: 5,
        name: "Shakti Ganapathi",
        tagline: "The powerful Ganesha who gives us inner strength!",
        icon: "शक्ति",
        story: "Shakti Ganapathi represents inner power and strength. This amazing form of Ganesha shows us that true power comes from being kind, helping others, and believing in ourselves. Shakti Ganapathi reminds us that we all have special powers within us.",
        mantra: "śaktiṁ gajānanasya dhīmahi | vighneśvarāya dhīmahi || tanno gajānakaḥ pracodayāt ||",
        meaning: "We meditate on the power of the elephant-faced one, we meditate on the lord of obstacles. May that elephant-faced one inspire us.",
        videoId: "OVIz8M8fva0"
    }
    // Continue with remaining 27 forms...
];

// Add the remaining 27 forms with placeholder data
for (let i = 6; i <= 32; i++) {
    ganeshaForms.push({
        id: i,
        name: `Ganesha Form ${i}`,
        tagline: `The wonderful Ganesha who brings special blessings!`,
        icon: "ॐ",
        story: `This is the amazing story of Ganesha Form ${i}. Each form of Ganesha has unique qualities and teaches us important lessons about life, kindness, and wisdom. This particular form shows us how to be better people and helps us on our spiritual journey.`,
        mantra: `Sample mantra for form ${i}`,
        meaning: `This mantra helps us connect with the special energy and blessings of this form of Ganesha.`,
        videoId: "OVIz8M8fva0"
    });
}

// Generate gallery items
function generateGallery() {
    const gallery = document.getElementById('ganeshaGrid');
    if (!gallery) return;
    
    gallery.innerHTML = '';
    
    ganeshaForms.forEach(form => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.onclick = () => navigateToForm(form.id);
        
        item.innerHTML = `
            <div class="gallery-icon">${form.icon}</div>
            <h3 class="gallery-title">${form.name}</h3>
            <p class="gallery-subtitle">${form.tagline}</p>
        `;
        
        gallery.appendChild(item);
    });
}

// Navigate to individual form page
function navigateToForm(id) {
    window.location.href = `ganesha-${id}.html`;
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Generate gallery
    generateGallery();
    
    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe gallery items for scroll animations
    setTimeout(() => {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            observer.observe(item);
        });
    }, 100);
});

// Export for use in individual pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ganeshaForms };
}