# Irish Position Practice

A small offline browser game for practicing Irish position phrases, noun forms, and mutations.

Open `index.html` in a browser to play.

## How It Works

The app randomly chooses:

- a moving object, such as `an peann luaidhe`
- a reference object, such as `bord`
- a position phrase, such as `ar an`

It then draws the scene and checks the sentence you type.

Example:

```text
Tá an peann luaidhe ar an mbord.
```

The checker accepts exact answers and also gives a gentler pass when the only issue is a missing fada.

## Editing The Lists

The practice data lives near the top of `app.js`:

- `movers`: objects that move around the scene
- `anchors`: objects used as the reference point
- `positions`: Irish position snippets and the grammar rule attached to them

Each anchor stores forms such as:

```js
{
  irish: "bord",
  gender: "masculine",
  nominative: "bord",
  genitive: "boird",
  eclipsed: "mbord",
  lenited: "bhord",
  genitiveArticle: "bhoird"
}
```

Each position chooses which form it needs:

```js
{
  english: "above",
  irish: "os cionn",
  phrase: "os cionn an",
  phraseByGender: { feminine: "os cionn na" },
  objectForm: "genitiveArticle"
}
```

This is intentionally a starter grammar model. Irish has exceptions and dialect variation, so add trusted forms directly to the noun records when you want the checker to be stricter.
