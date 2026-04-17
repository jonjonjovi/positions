window.practiceData = window.practiceData || {};

window.practiceData.positions = [
  {
    id: "on",
    english: "on",
    irish: "ar",
    phrase: "ar an",
    objectForm: "eclipsed",
    rule: "After ar an, many consonants take urú/eclipsis: bord becomes mbord.",
    layout: { mover: [50, 43], anchor: [50, 67], moverScale: 0.9, anchorScale: 1 }
  },
  {
    id: "under",
    english: "under",
    irish: "faoi",
    phrase: "faoin",
    objectForm: "eclipsed",
    rule: "Faoi + an contracts to faoin, and the following noun can take urú/eclipsis.",
    layout: { mover: [50, 83], anchor: [50, 58], moverScale: 0.82, anchorScale: 1 }
  },
  {
    id: "above",
    english: "above",
    irish: "os cionn",
    phrase: "os cionn an",
    phraseByGender: { feminine: "os cionn na" },
    objectForm: "genitiveArticle",
    rule: "Os cionn takes the genitive after the article: bord becomes an bhoird; feminine nouns use na, as in na cathaoireach.",
    layout: { mover: [50, 28], anchor: [50, 72], moverScale: 0.95, anchorScale: 1 }
  },
  {
    id: "beside",
    english: "beside",
    irish: "in aice le",
    phrase: "in aice leis an",
    objectForm: "eclipsed",
    rule: "Leis an often puts the following noun into urú/eclipsis: bord becomes mbord.",
    layout: { mover: [28, 67], anchor: [64, 67], moverScale: 0.92, anchorScale: 1 }
  },
  {
    id: "behind",
    english: "behind",
    irish: "taobh thiar de",
    phrase: "taobh thiar den",
    objectForm: "lenited",
    rule: "De + an becomes den, and the following noun is often lenited: bord becomes bhord.",
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
    layout: { mover: [54, 74], anchor: [46, 62], moverScale: 1, anchorScale: 0.94 }
  }
];
