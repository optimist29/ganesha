export interface GaneshaForm {
  id: number;
  name: string;
  tagline: string;
  story: string;
  mantra: string;
  meaning: string;
  videoId: string;
}

export const ganeshaForms: GaneshaForm[] = [
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
  {
    id: 3,
    name: "Bhakti Ganapathi",
    tagline: "The devoted Ganesha who teaches us love and faith!",
    story: "Bhakti Ganapathi is all about love and devotion. This gentle form of Ganesha shows us how to love with all our heart and be kind to everyone around us. When we pray to Bhakti Ganapathi, we learn to be grateful for all the beautiful things in our life.\n\nThis wonderful form teaches us that true happiness comes from caring for others and showing kindness wherever we go. Bhakti Ganapathi has a warm, loving smile that makes everyone feel welcome and loved.\n\nWhen children learn about Bhakti Ganapathi, they discover the joy of sharing, helping friends, and being thankful for their families. He shows us that love is the most powerful force in the world!",
    mantra: "nArikELAmrakadaLI | guDapAyasadhAriNaM | sharaccaMdrAbhavapuShaM | bhajE bhaktagaNAdhipaM",
    meaning: "The Ganesha of devotees, who shines like the autumn moon, with coconut, mango, plantain (banana), jaggery and sweets in his hands.",
    videoId: "OVIz8M8fva0"
  },
  {
    id: 4,
    name: "Vira Ganapathi",
    tagline: "The brave warrior who protects us from fear!",
    story: "Vira Ganapathi is the brave and courageous form of Ganesha. He teaches us to be strong and face our fears with confidence. Whenever we feel scared or worried, we can think of Vira Ganapathi and find the courage inside ourselves to overcome any challenge.\n\nThis mighty form of Ganesha shows us that being brave doesn't mean we're never afraid - it means we do the right thing even when we feel scared. Vira Ganapathi protects all children and helps them feel safe and strong.\n\nWhen we pray to Vira Ganapathi, we learn that we all have a brave warrior inside us. He teaches us to stand up for what's right, help our friends, and never give up on our dreams, no matter how difficult things might seem!",
    mantra: "vīraṁ vikrāntaṁ vighnāntakaṁ śrīgaṇeśaṁ | vighnāvasānaṁ varenyaṁ vareṇyaṁ || vande viśveśaṁ ||",
    meaning: "I bow to the brave, valiant, destroyer of obstacles, prosperous Ganesha, who ends all obstacles, who is most excellent and worthy of choice, who is the lord of the universe.",
    videoId: "OVIz8M8fva0"
  },
  {
    id: 5,
    name: "Shakti Ganapathi",
    tagline: "The powerful Ganesha who gives us inner strength!",
    story: "Shakti Ganapathi represents inner power and strength. This amazing form of Ganesha shows us that true power comes from being kind, helping others, and believing in ourselves. Shakti Ganapathi reminds us that we all have special powers within us.\n\nThis powerful form teaches children that real strength isn't about being the biggest or loudest - it's about having a good heart, being honest, and using our talents to make the world a better place. Shakti Ganapathi glows with divine energy that inspires everyone around him.\n\nWhen we connect with Shakti Ganapathi, we discover our own inner strength. He helps us realize that we can achieve amazing things when we believe in ourselves and work hard with a pure heart!",
    mantra: "śaktiṁ gajānanasya dhīmahi | vighneśvarāya dhīmahi || tanno gajānakaḥ pracodayāt ||",
    meaning: "We meditate on the power of the elephant-faced one, we meditate on the lord of obstacles. May that elephant-faced one inspire us.",
    videoId: "OVIz8M8fva0"
  }
];

// Add remaining forms (6-32) with placeholder data
for (let i = 6; i <= 32; i++) {
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