window.practiceData = window.practiceData || {};

window.practiceData.positions = [
  {
    id: "on",
    english: "on",
    irish: "ar",
    phrase: "ar an",
    objectForm: "eclipsed",
    rule: "After ar an, many consonants take urú/eclipsis: bord becomes mbord.",
    audioPath: null,
    layout: { mover: [50, 43], anchor: [50, 67], moverScale: 0.9, anchorScale: 1 }
  },
  {
    id: "on-top-of",
    english: "on top of",
    irish: "ar bharr",
    phrase: "ar bharr an",
    phraseByGender: { feminine: "ar bharr na" },
    objectForm: "genitiveArticle",
    rule: "Ar bharr uses the genitive after the article: bord becomes an bhoird; feminine nouns use na.",
    audioPath: "data/audio/positions/barr.mp3",
    layout: { mover: [50, 33], anchor: [50, 68], moverScale: 0.9, anchorScale: 1 }
  },
  {
    id: "under",
    english: "under",
    irish: "faoi",
    phrase: "faoin",
    objectForm: "eclipsed",
    rule: "Faoi + an contracts to faoin, and the following noun can take urú/eclipsis.",
    audioPath: null,
    layout: { mover: [50, 83], anchor: [50, 58], moverScale: 0.82, anchorScale: 1 }
  },
  {
    id: "at-bottom-of",
    english: "at the bottom of",
    irish: "ag bun",
    phrase: "ag bun an",
    phraseByGender: { feminine: "ag bun na" },
    objectForm: "genitiveArticle",
    rule: "Ag bun uses the genitive after the article: bord becomes an bhoird; feminine nouns use na.",
    audioPath: "data/audio/positions/bun.mp3",
    layout: { mover: [50, 84], anchor: [50, 56], moverScale: 0.78, anchorScale: 1 }
  },
  {
    id: "above",
    english: "above",
    irish: "os cionn",
    phrase: "os cionn an",
    phraseByGender: { feminine: "os cionn na" },
    objectForm: "genitiveArticle",
    rule: "Os cionn takes the genitive after the article: bord becomes an bhoird; feminine nouns use na, as in na cathaoireach.",
    audioPath: "data/audio/positions/os_cionn.mp3",
    layout: { mover: [50, 28], anchor: [50, 72], moverScale: 0.95, anchorScale: 1 }
  },
  {
    id: "in-middle-of",
    english: "in the middle of",
    irish: "i lár",
    phrase: "i lár an",
    phraseByGender: { feminine: "i lár na" },
    objectForm: "genitiveArticle",
    rule: "I lár uses the genitive after the article: bord becomes an bhoird; feminine nouns use na.",
    audioPath: "data/audio/positions/i_lar.mp3",
    layout: { mover: [50, 62], anchor: [50, 62], moverScale: 0.62, anchorScale: 1.06 }
  },
  {
    id: "beside",
    english: "beside",
    irish: "in aice le",
    phrase: "in aice leis an",
    objectForm: "eclipsed",
    rule: "Leis an often puts the following noun into urú/eclipsis: bord becomes mbord.",
    audioPath: null,
    layout: { mover: [28, 67], anchor: [64, 67], moverScale: 0.92, anchorScale: 1 }
  },
  {
    id: "opposite",
    english: "opposite",
    irish: "in aghaidh",
    phrase: "in aghaidh an",
    phraseByGender: { feminine: "in aghaidh na" },
    objectForm: "genitiveArticle",
    rule: "In aghaidh uses the genitive after the article: bord becomes an bhoird; feminine nouns use na.",
    audioPath: "data/audio/positions/in_aghaidh.mp3",
    layout: { mover: [34, 60], anchor: [66, 60], moverScale: 0.9, anchorScale: 1 }
  },
  {
    id: "across",
    english: "across",
    irish: "treasna",
    phrase: "treasna an",
    phraseByGender: { feminine: "treasna na" },
    objectForm: "genitiveArticle",
    rule: "Treasna uses the genitive after the article: bord becomes an bhoird; feminine nouns use na.",
    audioPath: "data/audio/positions/treasna.mp3",
    layout: { mover: [50, 61], anchor: [50, 67], moverScale: 1.02, anchorScale: 1 }
  },
  {
    id: "behind",
    english: "behind",
    irish: "ar chúla",
    phrase: "ar chúla an",
    phraseByGender: { feminine: "ar chúla na" },
    objectForm: "genitiveArticle",
    rule: "This regional form uses ar chúla with the genitive after the article: bord becomes an bhoird; feminine nouns use na.",
    audioPath: "data/audio/positions/ar_chula.mp3",
    layout: { mover: [57, 62], anchor: [47, 66], moverScale: 0.72, anchorScale: 1.04, behind: true }
  },
  {
    id: "in-front-of",
    english: "in front of",
    irish: "os comhair",
    phrase: "os comhair an",
    phraseByGender: { feminine: "os comhair na" },
    objectForm: "genitiveArticle",
    rule: "Os comhair uses the genitive after the article: doras becomes an dorais; feminine nouns use na.",
    audioPath: "data/audio/positions/os_comhair.mp3",
    layout: { mover: [54, 74], anchor: [46, 62], moverScale: 1, anchorScale: 0.94 }
  }
];
