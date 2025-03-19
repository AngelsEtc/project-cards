export interface ImageData {
  id: string;
  name: string;
  link: string;
  photo: string;
  tags: string[];
  description: string;
}

export const imageCategories: Record<string, ImageData[]> = {
  purple: [
    { id: "chick404", name: "Chick404", link: "https://example.com/chick404", photo: "image/chick404.jpg", tags: ["cute", "purple"], description: "A cute purple chick." },
    { id: "hanako-awing", name: "Hanako Awing", link: "https://example.com/hanakoawing", photo: "image/hanakoawing.jpg", tags: ["anime", "wings"], description: "A character with wings." },
    { id: "racoona", name: "Racoona", link: "https://example.com/racoona", photo: "image/racoona.jpg", tags: ["raccoon", "purple"], description: "A purple raccoon character." }
  ],
  pink: [
    { id: "okami-vt", name: "Okami VT", link: "https://example.com/okamivt", photo: "image/okamivt.jpg", tags: ["wolf", "pink"], description: "A pink-themed wolf character." },
    { id: "jessikirby", name: "Jessikirby", link: "https://example.com/jessikirby", photo: "image/jessikirby.jpg", tags: ["anime", "pink"], description: "A cute pink anime girl." },
    { id: "faerisami", name: "Faerisami", link: "https://example.com/faerisami", photo: "image/faerisami.jpg", tags: ["fae", "pink"], description: "A pink fairy character." }
  ],
  green: [
    { id: "kurobamio", name: "Kurobamio", link: "https://example.com/kurobamio", photo: "image/kurobamio.jpg", tags: ["green", "shadow"], description: "A dark green character." },
    { id: "jinkoshirou", name: "Jinkoshirou", link: "https://example.com/jinkoshirou", photo: "image/jinkoshirou.jpg", tags: ["anime", "green"], description: "A green-themed anime character." },
    { id: "melkhill", name: "Melkhill", link: "https://example.com/melkhill", photo: "image/melkhill.jpg", tags: ["forest", "green"], description: "A nature-inspired character." }
  ],
  blue: [
    { id: "choconekomenta", name: "Choconekomenta", link: "https://example.com/choconekomenta", photo: "image/choconekomenta.jpg", tags: ["blue", "choco"], description: "A blue choco-themed character." },
    { id: "naota", name: "Naota", link: "https://example.com/naota", photo: "image/naota.jpg", tags: ["anime", "blue"], description: "A blue-haired anime protagonist." },
    { id: "akayton", name: "Akayton", link: "https://example.com/akayton", photo: "image/akayton.jpg", tags: ["blue", "ice"], description: "An icy blue warrior." }
  ],
  yellow: [
    { id: "arderianlun", name: "Arderianlun", link: "https://example.com/arderianlun", photo: "image/arderianlun.jpg", tags: ["yellow", "gold"], description: "A golden warrior." },
    { id: "omurice", name: "Omurice", link: "https://example.com/omurice", photo: "image/omurice.jpg", tags: ["food", "yellow"], description: "A delicious omurice-inspired character." },
    { id: "mijorin", name: "Mijorin", link: "https://example.com/mijorin", photo: "image/mijorin.jpg", tags: ["anime", "yellow"], description: "A cheerful yellow-themed character." }
  ]
};
