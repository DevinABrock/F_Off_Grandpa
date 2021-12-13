// ---------- Key Words and their scores -----------//

const keyWord = [
    // Curse words = 15 points
    {
    word: "ass",
    score: 15
    },
    {
    word: "asshole",
    score: 15
    },
    {
    word: "damn",
    score: 15
    },
    {
    word: "bitch",
    score: 15
    },
    {
    word: "shit",
    score: 15
    },
    {
    word: "fuck",
    score: 15
    },
    {
    word: "fucking",
    score: 15
    },
    {
    word: "fucker",
    score: 15
    },
    {
    word: "motherfucker",
    score: 15
    },
    {
    word: "flip",
    score: 15
    },
    {
    word: "freak",
    score: 15
    },
    {
    word: "frick",
    score: 15
    },

    // Question words = 17 points
    {word: "who",
    score: 17
    },
    {
    word: "what",
    score: 17
    },
    {
    word: "when",
    score: 17
    },
    {
    word: "where",
    score: 17
    },
    {
    word: "why",
    score: 17
    },
    {
    word: "how",
    score: 17
    },
    {
    word: "which",
    score: 17
    },
    {
    word: "whose",
    score: 17
    },
    {
    word: "do",
    score: 17
    },

    // Common words = 12 points
    {word: "the",
    score: 12
    },
    {
    word: "at",
    score: 12
    },
    {
    word: "my",
    score: 12
    },
    {
    word: "of",
    score: 12
    },
    {
    word: "be",
    score: 12
    },
    {
    word: "than",
    score: 12
    },
    {
    word: "and",
    score: 12
    },
    {
    word: "this",
    score: 12
    },
    {
    word: "first",
    score: 12
    },
    {
    word: "a",
    score: 12
    },
    {
    word: "have",
    score: 12
    },
    {
    word: "water",
    score: 12
    },
    {
    word: "to",
    score: 12
    },
    {
    word: "from",
    score: 12
    },
    {
    word: "been",
    score: 12
    },
    {
    word: "there",
    score: 12
    },
    {
    word: "some",
    score: 12
    },
    {
    word: "use",
    score: 12
    },
    {
    word: "like",
    score: 12
    },
    {
    word: "find",
    score: 12
    },
    {
    word: "will",
    score: 12
    },
    {
    word: "look",
    score: 12
    },
    {
    word: "up",
    score: 12
    },
    {
    word: "other",
    score: 12
    },
    {
    word: "for",
    score: 12
    },
    {
    word: "go",
    score: 12
    },
    {
    word: "did",
    score: 12
    },
    {
    word: "day",
    score: 12
    },
    {
    word: "these",
    score: 12
    },
    {
    word: "said",
    score: 12
    },
    {
    word: "you",
    score: 12
    },
    {
    word: "more",
    score: 12
    },
    {
    word: "part",
    score: 12
    },
    {
    word: "all",
    score: 12
    },
    {
    word: "but",
    score: 12
    },
    {
    word: "or",
    score: 12
    },
    {
    word: "smooth",
    score: 12
    },

    // Personal words = 18 points
    {
    word: "bag",
    score: 18
    },
    {
    word: "head",
    score: 18
    },
    {
    word: "arms",
    score: 18
    },
    {
    word: "legs",
    score: 18
    },
    {
    word: "chest",
    score: 18
    },
    {
    word: "back",
    score: 18
    },
    {
    word: "torso",
    score: 18
    },
    {
    word: "face",
    score: 18
    },
    {
    word: "mouth",
    score: 18
    },
    {
    word: "nose",
    score: 18
    },
    {
    word: "ear",
    score: 18
    },
    {
    word: "hair",
    score: 18
    },
    {
    word: "hairline",
    score: 18
    },
    {
    word: "teeth",
    score: 18
    },
    {
    word: "shirt",
    score: 18
    },
    {
    word: "pants",
    score: 18
    },
    {
    word: "shoes",
    score: 18
    },
    {
    word: "feet",
    score: 18
    },
    {
    word: "fat",
    score: 18
    },
    {
    word: "skinny",
    score: 18
    },
    {
    word: "ugly",
    score: 18
    },
    {
    word: "old",
    score: 18
    },
    {
    word: "bald",
    score: 18
    },
    {
    word: "wrinkles",
    score: 18
    },
    {
    word: "up",
    score: 18
    },
    {
    word: "down",
    score: 18
    },
    {
    word: "upper",
    score: 18
    },
    {
    word: "lower",
    score: 18
    },
    {
    word: "body",
    score: 18
    },
    {
    word: "built",
    score: 18
    },
    {
    word: "dumb",
    score: 18
    },
    {
    word: "stupid",
    score: 18
    },
    {
    word: "worthless",
    score: 18
    },
    {
    word: "ignorant",
    score: 18
    },
    {
    word: "dense",
    score: 18
    },
    {
    word: "slow",
    score: 18
    },
    {
    word: "dull",
    score: 18
    },
    {
    word: "empty",
    score: 18
    },
    {
    word: "fool",
    score: 18
    },
    {
    word: "brain",
    score: 18
    },

    // Family words = 16 points
    {
    word: "mom",
    score: 16
    },
    {
    word: "mama",
    score: 16
    },
    {
    word: "mother",
    score: 16
    },
    {
    word: "mommy",
    score: 16
    },
    {
    word: "dad",
    score: 16
    },
    {
    word: "daddy",
    score: 16
    },
    {
    word: "father",
    score: 16
    },
    {
    word: "pops",
    score: 16
    },
    {
    word: "everyone",
    score: 16
    },
    {
    word: "grandparent",
    score: 16
    },
    {
    word: "grandparents",
    score: 16
    },
    {
    word: "grandma",
    score: 16
    },
    {
    word: "grandmother",
    score: 16
    },
    {
    word: "grandpa",
    score: 16
    },
    {
    word: "grandfather",
    score: 16
    },
    {
    word: "family",
    score: 16
    },

    // Cheat Code Phrases
    {
    word: "dougie!",
    score: 100
    },

]

export default keyWord