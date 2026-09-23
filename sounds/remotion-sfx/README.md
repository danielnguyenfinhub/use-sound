# Remotion sound effects

The 7 sound effects from Remotion's [`@remotion/sfx`](https://www.remotion.dev/docs/sfx) package that are released under CC0 (public domain). You can use them in any project, commercial or not, without asking permission or giving credit.

They are copied unchanged from [`packages/remotion-media`](https://github.com/remotion-dev/remotion/tree/main/packages/remotion-media) in the Remotion repository, which is where Remotion publishes them to `https://remotion.media/<file>`. `catalog.json` lists each file with its `@remotion/sfx` export name, source URL, licence and attribution.

The other 25 sounds in `@remotion/sfx` are left out on purpose. Remotion's docs say they are "not explicitly released under a free license".

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

## Sounds

CC0 does not require credit, but the original authors are listed here anyway.

| Name | File | Original | Docs |
|---|---|---|---|
| `whip` | [`whip.wav`](./whip.wav) | SWSH_Badminton Racquet_Recording_01_JW Audio by JW_Audio, [freesound.org/s/838766](https://freesound.org/s/838766/) | [docs](https://www.remotion.dev/docs/sfx/whip) |
| `whoosh` | [`whoosh.wav`](./whoosh.wav) | Woosh by 1bob, [freesound.org/s/831936](https://freesound.org/s/831936/) | [docs](https://www.remotion.dev/docs/sfx/whoosh) |
| `pageTurn` | [`page-turn.wav`](./page-turn.wav) | Draw Knife 1 by [kenney.nl](https://kenney.nl) | [docs](https://www.remotion.dev/docs/sfx/page-turn) |
| `uiSwitch` | [`switch.wav`](./switch.wav) | UI Audio - Switch 35 by [kenney.nl](https://kenney.nl) | [docs](https://www.remotion.dev/docs/sfx/ui-switch) |
| `mouseClick` | [`mouse-click.wav`](./mouse-click.wav) | Mouse Click Sound.mp3 by Pixeliota, [freesound.org/s/678248](https://freesound.org/s/678248/) | [docs](https://www.remotion.dev/docs/sfx/mouse-click) |
| `shutterModern` | [`shutter-modern.wav`](./shutter-modern.wav) | DSLR Shutter fast 006.wav by ristooooo1, [freesound.org/s/539136](https://freesound.org/s/539136/) | [docs](https://www.remotion.dev/docs/sfx/shutter-modern) |
| `shutterOld` | [`shutter-old.wav`](./shutter-old.wav) | Werra.wav by hmilleo, [freesound.org/s/409093](https://freesound.org/s/409093/) | [docs](https://www.remotion.dev/docs/sfx/shutter-old) |
