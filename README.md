# The Boyzzzz

Vi är The Boyzzzz, ett lag på fyra personer som bygger vår egen lagsida
under ChasHack for Rookies. Vi började med tre tomma filer och slutade med
en publicerad webbplats.

**Se sidan live:** [devios01.github.io/chashack-starter](https://devios01.github.io/chashack-starter/)

## Laget

- Angus - [@Koalanharry07](https://github.com/Koalanharry07)
- Julian - [@15juga](https://github.com/15juga)
- Bryan - [@BryanRanchber](https://github.com/BryanRanchber)
- Shubham - [@DevIos01](https://github.com/DevIos01)

## Om sidan

Lagets egen hemsida, byggd med bara HTML, CSS och JavaScript:

- `index.html` - innehållet: rubrik, pitch, laget, loggan, knappen och sidfoten
- `style.css` - mörkt tema i rött och svart som matchar loggan, egna typsnitt
  från Google Fonts, och en layout som funkar i mobilen
- `script.js` - det som händer när man klickar på knappen

## Kör sidan lokalt

1. Klona repot och öppna mappen i VS Code.
2. Högerklicka i `index.html` och välj **Open with Live Server**.

## Sidan minns er

Antalet laserskott sparas i webbläsarens `localStorage` under nyckeln
`antalSkott`. Klicka på knappen några gånger och ladda om sidan med F5,
siffran finns kvar.

## Ljud vid klick

Klicka på lagets logga, så spelas ljudet "Fahh" (`fahh.mp3`). Loggan är en
knapp, så det går också att tabba dit och trycka Enter.

## Dagens skämt

Sidan hämtar ett slumpat skämt från det öppna API:et
[icanhazdadjoke.com](https://icanhazdadjoke.com/) när den laddas och när man
klickar på **Nytt skämt**. Om anropet misslyckas, till exempel utan internet,
visas texten "Kunde inte hämta ett skämt just nu. Testa igen om en stund."

## Kontrast

Vi bytte från svart text på knallröd bakgrund till ljus text på nästan svart
bakgrund. Kontrasten mätt enligt WCAG:

| Vad | Färger | Kontrast |
| --- | --- | --- |
| Brödtext | `#f2f2f2` på `#0b0b0f` | 17.5:1 |
| Text i kortet | `#f2f2f2` på `#16161d` | 16.1:1 |
| Sidfot | `#b8b8c0` på `#0b0b0f` | 10.0:1 |
| Knapptext | `#ffffff` på `#e11d2e` | 4.8:1 |
| Röd rubrik (stor text) | `#e11d2e` på `#0b0b0f` | 4.1:1 |

All brödtext klarar minst 4.5:1. Den röda rubriken är stor text, där kravet
är 3:1.

## LinkedIn
