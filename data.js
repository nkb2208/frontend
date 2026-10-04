const CONTENT_DATABASE = [
  {
    id: "hair_001",
    name: "Korean C-Curl Bob",
    category: "hair",
    description: "A chin-length bob with ends gently curled inwards, creating a soft and youthful look.",
    tags: ["round face", "v-line face", "thin hair"],
    imageUrl: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Prep", desc: "Start with damp hair. Apply a heat protectant." },
        { title: "Blow-dry", desc: "Use a round brush to blow-dry the ends inwards." },
        { title: "Set", desc: "Use a flat iron to gently curve the very ends inwards for a lasting C-curl." }
      ],
      videoId: "mD1oA7wO59o"
    }
  },
  {
    id: "hair_002",
    name: "Soft Long Layers",
    category: "hair",
    description: "Long flowing hair with soft layers to add movement and volume without losing length.",
    tags: ["round face", "square face", "thick hair"],
    imageUrl: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Sectioning", desc: "Divide hair into horizontal sections starting from the bottom." },
        { title: "Curling", desc: "Use a large barrel curling iron (32mm) away from the face." },
        { title: "Brushing", desc: "Let curls cool, then brush out gently with a wide-tooth comb for soft waves." }
      ],
      videoId: "1r_2-sV0g3Y"
    }
  },
  {
    id: "hair_003",
    name: "Curtain Bangs",
    category: "hair",
    description: "Face-framing fringe parted in the middle, sweeping outwards to highlight cheekbones.",
    tags: ["round face", "high forehead", "v-line face"],
    imageUrl: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Dampen Bangs", desc: "Wet the bangs slightly." },
        { title: "Round Brush", desc: "Blow dry the bangs forward with a round brush, then roll backwards." },
        { title: "Split", desc: "Part in the middle and swoop the sides away from the face." }
      ],
      videoId: "gJzMlCB0w5k"
    }
  },
  {
    id: "hair_004",
    name: "Sleek Straight Glass Hair",
    category: "hair",
    description: "Ultra-shiny, perfectly straight hair with no frizz or flyaways.",
    tags: ["v-line face", "frizzy hair", "thick hair"],
    imageUrl: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Smoothing Cream", desc: "Apply anti-frizz smoothing cream to damp hair." },
        { title: "Blowout", desc: "Blow dry pointing the nozzle downwards to seal the cuticle." },
        { title: "Flat Iron", desc: "Flat iron small sections at a time for maximum sleekness, finish with shine spray." }
      ],
      videoId: "SlPO2jUYTCM"
    }
  },
  {
    id: "hair_005",
    name: "Voluminous Wavy Lob",
    category: "hair",
    description: "A shoulder-grazing long bob with messy, beachy waves for an effortless vibe.",
    tags: ["square face", "thin hair", "v-line face"],
    imageUrl: "https://images.unsplash.com/photo-1620023472535-64bcbdc30cbf?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Texturizing", desc: "Apply sea salt spray or texturizing mousse." },
        { title: "Waving", desc: "Use a flat iron to create S-waves by bending the iron back and forth." },
        { title: "Mess It Up", desc: "Scrunch the hair with your hands and flip your head upside down for volume." }
      ],
      videoId: "TCFG61E-Rjk"
    }
  },
  {
    id: "hair_006",
    name: "Low Messy Bun",
    category: "hair",
    description: "An elegant yet relaxed bun sitting at the nape of the neck with loose face-framing pieces.",
    tags: ["round face", "frizzy hair", "thin hair"],
    imageUrl: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Gather", desc: "Pull hair into a low ponytail, leaving front pieces out." },
        { title: "Twist", desc: "Twist the ponytail loosely and wrap it around the base." },
        { title: "Pin", desc: "Secure with bobby pins and pull out pieces slightly to add texture." }
      ],
      videoId: "qD0hlzKasdM"
    }
  },
  {
    id: "hair_007",
    name: "Butterfly Cut",
    category: "hair",
    description: "Heavily layered cut with shorter top layers that blend into longer bottom layers.",
    tags: ["thick hair", "round face", "v-line face"],
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Sectioning", desc: "Separate the shorter top layers from the longer bottom." },
        { title: "Flipping", desc: "Blow-dry the top layers away from the face to create wings." },
        { title: "Blending", desc: "Use a large round brush to blend the sections seamlessly." }
      ],
      videoId: "M-vlGrR4ssI"
    }
  },
  {
    id: "hair_008",
    name: "Hippie Curls",
    category: "hair",
    description: "Tight, voluminous, and slightly messy curls from root to tip.",
    tags: ["thin hair", "frizzy hair", "square face"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Curl Cream", desc: "Apply curl defining cream to very wet hair." },
        { title: "Scrunch", desc: "Scrunch upwards to encourage natural curl patterns." },
        { title: "Diffuse", desc: "Use a diffuser on medium heat until 80% dry." }
      ],
      videoId: "qa2Bkiv-rTg"
    }
  },
  
  {
    id: "makeup_001",
    name: "Soft Everyday Glow",
    category: "makeup",
    description: "Lightweight, dewy foundation with natural tones for a fresh, everyday look.",
    tags: ["natural", "daytime", "dry skin"],
    imageUrl: "https://images.unsplash.com/photo-1512496015851-a1c8f4807491?w=500&q=80",
    tutorial: { steps: [], videoId: "y46hvE9JAXo" }
  },
  {
    id: "makeup_002",
    name: "Korean Natural Makeup",
    category: "makeup",
    description: "Straight brows, puppy eyeliner, and gradient lips for a youthful, innocent vibe.",
    tags: ["korean", "youthful", "monolid"],
    imageUrl: "https://images.unsplash.com/photo-1617066922906-81498b3f4db0?w=500&q=80",
    tutorial: { steps: [], videoId: "wE08NnJzC_8" }
  },
  {
    id: "makeup_003",
    name: "Peach Makeup",
    category: "makeup",
    description: "Warm, coral-toned monochromatic look that brightens the complexion.",
    tags: ["warm tone", "spring", "cute"],
    imageUrl: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=500&q=80",
    tutorial: { steps: [], videoId: "Zq1fFv0f2Y4" }
  },
  {
    id: "makeup_004",
    name: "Clean Girl Makeup",
    category: "makeup",
    description: "Minimalist aesthetic focusing on flawless, glowing skin and groomed brows.",
    tags: ["minimalist", "glowing", "trendy"],
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80",
    tutorial: { steps: [], videoId: "oF0c5q_qC0c" }
  },
  {
    id: "makeup_005",
    name: "Romantic Makeup",
    category: "makeup",
    description: "Soft pink tones, smudged eyeliner, and fluttery lashes for a dreamy look.",
    tags: ["date night", "pink tone", "soft"],
    imageUrl: "https://images.unsplash.com/photo-1516975080661-460f384faeb4?w=500&q=80",
    tutorial: { steps: [], videoId: "1r_2-sV0g3Y" }
  },
  {
    id: "makeup_006",
    name: "Soft Glam",
    category: "makeup",
    description: "Flawless matte base, neutral cut crease, and defined features without being too harsh.",
    tags: ["party", "evening", "glam"],
    imageUrl: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&q=80",
    tutorial: { steps: [], videoId: "b5D3n4fV7yA" }
  },
  {
    id: "makeup_007",
    name: "Latte Makeup",
    category: "makeup",
    description: "Warm, bronzey, caramel tones dominating the eyes, cheeks, and lips.",
    tags: ["bronze", "warm tone", "trendy"],
    imageUrl: "https://images.unsplash.com/photo-1615809796856-1cb7a5b32607?w=500&q=80",
    tutorial: { steps: [], videoId: "Zq1fFv0f2Y4" }
  },
  {
    id: "makeup_008",
    name: "Date Night Makeup",
    category: "makeup",
    description: "Seductive look featuring a classic bold red lip and sharp winged eyeliner.",
    tags: ["classic", "bold", "evening"],
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80",
    tutorial: { steps: [], videoId: "dQw4w9WgXcQ" }
  },
  
  // Outfit placeholder
  {
    id: "outfit_001", category: "outfit", name: "Chic Office Outfit", description: "Flattering, hides flaws.",
    tags: ["elegant", "casual"],
    imageUrl: "https://images2.thanhnien.vn/528068263637045248/2024/2/15/thoi-trang-cong-so8-1707978494595580799841.jpg",
    tutorial: { steps: [], videoId: "RcOgnCde8NU" }
  }
];

function getAllContent() {
  return CONTENT_DATABASE;
}
