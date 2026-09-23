# Remotion sound effects

The 32 sound effects from Remotion's [`@remotion/sfx`](https://www.remotion.dev/docs/sfx) package, copied from where Remotion hosts them (`https://remotion.media/<file>`). `catalog.json` lists each file with its `@remotion/sfx` export name, source URL, licence and attribution.

To download them again, or after the list changes:

```bash
node scripts/download-remotion-sfx.mjs
```

The script checks that every file is a real WAV and exits with an error if any download fails.

## Usage

```jsx
import useSound from 'use-sound';
import whoosh from '../sounds/remotion-sfx/whoosh.wav';

const Button = () => {
  const [play] = useSound(whoosh);
  return <button onClick={play}>Go</button>;
};
```

Importing a `.wav` file needs a bundler that handles audio files (most do, e.g. webpack's asset modules, Vite, Parcel). These files are not part of the published npm package, which only ships `dist/`.

## Licence

**Only 7 of the 32 sounds have a known free licence** (CC0, public domain): `whip.wav`, `whoosh.wav`, `page-turn.wav`, `switch.wav`, `mouse-click.wav`, `shutter-modern.wav`, `shutter-old.wav`.

For the other 25, Remotion's own documentation says: *"This sound is not explicitly released under a free license, but it is probably fine to use given its widespread use."* They are mostly well-known meme and TV sound clips. Treat them as unlicensed: using them in a video you publish, or keeping this repository public, is at your own risk.

| Name | File | Licence | Source |
|---|---|---|---|
| `whip` | [`whip.wav`](./whip.wav) | CC0 | SWSH_Badminton Racquet_Recording_01_JW Audio by JW_Audio - [freesound.org/s/838766](https://freesound.org/s/838766/) - License: Creative Commons 0 ([docs](https://www.remotion.dev/docs/sfx/whip)) |
| `whoosh` | [`whoosh.wav`](./whoosh.wav) | CC0 | Woosh by 1bob - [freesound.org/s/831936](https://freesound.org/s/831936/) - License: Creative Commons 0 ([docs](https://www.remotion.dev/docs/sfx/whoosh)) |
| `pageTurn` | [`page-turn.wav`](./page-turn.wav) | CC0 | Draw Knife 1 by kenney.nl - [kenney.nl](https://kenney.nl) - License: Creative Commons 0 ([docs](https://www.remotion.dev/docs/sfx/page-turn)) |
| `uiSwitch` | [`switch.wav`](./switch.wav) | CC0 | UI Audio - Switch 35 by kenney.nl - [kenney.nl](https://kenney.nl) - License: Creative Commons 0 ([docs](https://www.remotion.dev/docs/sfx/ui-switch)) |
| `mouseClick` | [`mouse-click.wav`](./mouse-click.wav) | CC0 | Mouse Click Sound.mp3 by Pixeliota - [freesound.org/s/678248](https://freesound.org/s/678248/) - License: Creative Commons 0 ([docs](https://www.remotion.dev/docs/sfx/mouse-click)) |
| `shutterModern` | [`shutter-modern.wav`](./shutter-modern.wav) | CC0 | DSLR Shutter fast 006.wav by ristooooo1 - [freesound.org/s/539136](https://freesound.org/s/539136/) - License: Creative Commons 0 ([docs](https://www.remotion.dev/docs/sfx/shutter-modern)) |
| `shutterOld` | [`shutter-old.wav`](./shutter-old.wav) | CC0 | Werra.wav by hmilleo - [freesound.org/s/409093](https://freesound.org/s/409093/) - License: Creative Commons 0 ([docs](https://www.remotion.dev/docs/sfx/shutter-old)) |
| `ding` | [`ding.wav`](./ding.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/ding)) |
| `bruh` | [`bruh.wav`](./bruh.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/bruh)) |
| `vineBoom` | [`vine-boom.wav`](./vine-boom.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/vine-boom)) |
| `windowsXpError` | [`windows-xp-error.wav`](./windows-xp-error.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/windows-xp-error)) |
| `fah` | [`fah.wav`](./fah.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/fah)) |
| `spongebobFail` | [`spongebob-fail.wav`](./spongebob-fail.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/spongebob-fail)) |
| `omgHellNah` | [`omg-hell-nah.wav`](./omg-hell-nah.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/omg-hell-nah)) |
| `priceIsRightFail` | [`price-is-right-fail.wav`](./price-is-right-fail.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/price-is-right-fail)) |
| `romanceMeme` | [`romance-meme.wav`](./romance-meme.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/romance-meme)) |
| `boneCrack` | [`bone-crack.wav`](./bone-crack.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/bone-crack)) |
| `animeWow` | [`anime-wow.wav`](./anime-wow.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/anime-wow)) |
| `yippee` | [`yippee.wav`](./yippee.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/yippee)) |
| `loadingLag` | [`loading-lag.wav`](./loading-lag.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/loading-lag)) |
| `wilhelmScream` | [`wilhelm-scream.wav`](./wilhelm-scream.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/wilhelm-scream)) |
| `macQuack` | [`mac-quack.wav`](./mac-quack.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/mac-quack)) |
| `skedaddle` | [`skedaddle.wav`](./skedaddle.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/skedaddle)) |
| `snapchatNotification` | [`snapchat-notification.wav`](./snapchat-notification.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/snapchat-notification)) |
| `nellyAhh` | [`nelly-ahh.wav`](./nelly-ahh.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/nelly-ahh)) |
| `sanctuaryGuardianWhat` | [`sanctuary-guardian-what.wav`](./sanctuary-guardian-what.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/sanctuary-guardian-what)) |
| `minecraftHurt` | [`minecraft-hurt.wav`](./minecraft-hurt.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/minecraft-hurt)) |
| `ohMyGodVine` | [`oh-my-god-vine.wav`](./oh-my-god-vine.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/oh-my-god-vine)) |
| `illuminatiConfirmed` | [`illuminati-confirmed.wav`](./illuminati-confirmed.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/illuminati-confirmed)) |
| `dramaticBoomer` | [`dramatic-boomer.wav`](./dramatic-boomer.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/dramatic-boomer)) |
| `triggered` | [`triggered.wav`](./triggered.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/triggered)) |
| `recordScratch` | [`record-scratch.wav`](./record-scratch.wav) | not explicitly licensed | see Remotion's docs page ([docs](https://www.remotion.dev/docs/sfx/record-scratch)) |
