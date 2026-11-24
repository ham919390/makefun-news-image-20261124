# THE GLOBAL LEDGER — 24 November 2026

![make.fun](https://make.fun/badge/news-image-20261124.svg)
![rank](https://make.fun/badge/news-image-20261124/ham919390/makefun-news-image-20261124/rank.svg)
![reward](https://make.fun/badge/news-image-20261124/ham919390/makefun-news-image-20261124/reward.svg)

A one-page newspaper front page summing up the world's news of **Tuesday,
24 November 2026**, built for the free make.fun bounty:
https://make.fun/bounty/news-image-20261124

Referral: `ej1tk366`

## The day's stories

- **Lead — Ukraine sinks Russian warship off Libya:** seven sea drones
  struck the naval base at Benghazi, Kyiv says — a Ka-27 helicopter
  destroyed and the cargo ship MV Angara hit.
- **Nvidia brings back Huang:** the chief executive is reinstated in a
  stunning reversal after Trump intervened.
- **Seoul scrambles jets:** a suspected North Korean aircraft breaches
  airspace near Ulleung island; residents are told to take shelter.
- **In brief:** hacked data puts Russian war deaths near 500,000; USA,
  Mexico, Costa Rica and Jamaica to host the 2031 Women's World Cup;
  Honda recalls 810,000 cars in the US; ousted PM Hasina to return to
  Bangladesh on 16 December.

## How it is made

`gen.py` (Pillow, DejaVu fonts) draws the whole page from scratch —
masthead, headlines, a coded schematic of the Benghazi sea-drone strike,
briefs and a footer ticker — and writes `entry.png` directly. The render
is deterministic: two runs produce byte-identical output. `main.ts`
copies `entry.png` to the output directory.

Run it with:

```sh
python3 gen.py
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
