import * as Immutable from 'seamless-immutable';
import { Days } from '../utils';

import DawnOfTheDead from '../images/backdrops/dawn-of-the-dead.jpg';
import TheAmityvilleHorror from '../images/backdrops/the-amityville-horror.jpg';
import ChildsPlay from '../images/backdrops/childs-play.jpg';
import Maniac from '../images/backdrops/maniac.jpg';
import HouseOf1000Corpses from '../images/backdrops/house-of-1000-corpses.jpg';
import TragedyGirls from '../images/backdrops/tragedy-girls.jpg';
import TheHouseAtTheEndOfTime from '../images/backdrops/the-house-at-the-end-of-time.jpg';
import Zombie from '../images/backdrops/zombie.jpg';
import TheGirlNextDoor from '../images/backdrops/the-girl-next-door.jpg';
import Saw from '../images/backdrops/saw.jpg';
import Hidden from '../images/backdrops/hidden.jpg';
import It from '../images/backdrops/it.jpg';
import Life from '../images/backdrops/life.jpg';
import Session9 from '../images/backdrops/session-9.jpg';
import TheGirlWithAllTheGifts from '../images/backdrops/the-girl-with-all-the-gifts.jpg';
import WolfCreek from '../images/backdrops/wolf-creek.jpg';
import DeadSilence from '../images/backdrops/dead-silence.jpg';
import Pumpkinhead from '../images/backdrops/pumpkinhead.jpg';
import Terrifier from '../images/backdrops/terrifier.jpg';
import TheBeyond from '../images/backdrops/the-beyond.jpg';
import OuijaOriginOfEvil from '../images/backdrops/origin-of-evil.jpg';
import TrainToBusan from '../images/backdrops/train-to-busan.jpg';
import EmilyRose from '../images/backdrops/the-exorcism-of-emily-rose.jpg';
import AnnabelleCreation from '../images/backdrops/annabelle-creation.jpg';
import GhostStories from '../images/backdrops/ghost-stories.jpg';
import HellHouseLLC from '../images/backdrops/hell-house-llc.jpg';
import Hereditary from '../images/backdrops/hereditary.jpg';
import AQuietPlace from '../images/backdrops/a-quiet-place.jpg';
import DaysLater28 from '../images/backdrops/28-days-later.jpg';
import Veronica from '../images/backdrops/veronica.jpg';
import Ghostland from '../images/backdrops/ghostland.jpg';

export const movies = Immutable.from([
  {
    title: 'Dawn of the Dead',
    date: 1,
    day: Days.MONDAY,
    backdrop: DawnOfTheDead,
    movieId: 923,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'The Amityville Horror',
    date: 2,
    day: Days.TUESDAY,
    backdrop: TheAmityvilleHorror,
    movieId: 11449,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Child\'s Play',
    date: 3,
    day: Days.WEDNESDAY,
    backdrop: ChildsPlay,
    movieId: 10585,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Maniac',
    date: 4,
    day: Days.THURSDAY,
    backdrop: Maniac,
    movieId: 103620,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'House of 1000 Corpses',
    date: 5,
    day: Days.FRIDAY,
    backdrop: HouseOf1000Corpses,
    movieId: 2662,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Tragedy Girls',
    date: 6,
    day: Days.SATURDAY,
    backdrop: TragedyGirls,
    movieId: 413857,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'The House at the End of Time',
    date: 7,
    day: Days.SUNDAY,
    backdrop: TheHouseAtTheEndOfTime,
    movieId: 207686,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Zombie',
    date: 8,
    day: Days.MONDAY,
    backdrop: Zombie,
    movieId: 7219,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'The Girl Next Door',
    date: 9,
    day: Days.TUESDAY,
    backdrop: TheGirlNextDoor,
    movieId: 15356,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Dead Silence',
    date: 10,
    day: Days.WEDNESDAY,
    backdrop: DeadSilence,
    movieId: 14001,
    focus: 2,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Hidden',
    date: 11,
    day: Days.THURSDAY,
    backdrop: Hidden,
    movieId: 360784,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'It',
    date: 12,
    day: Days.FRIDAY,
    backdrop: It,
    movieId: 346364,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Life',
    date: 13,
    day: Days.SATURDAY,
    backdrop: Life,
    movieId: 395992,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Session 9',
    date: 14,
    day: Days.SUNDAY,
    backdrop: Session9,
    movieId: 10972,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'The Girl With All the Gifts',
    date: 15,
    day: Days.MONDAY,
    backdrop: TheGirlWithAllTheGifts,
    movieId: 375366,
    focus: 2,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Wolf Creek',
    date: 16,
    day: Days.TUESDAY,
    backdrop: WolfCreek,
    movieId: 9885,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Saw',
    date: 17,
    day: Days.WEDNESDAY,
    backdrop: Saw,
    movieId: 176,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Pumpkinhead',
    date: 18,
    day: Days.THURSDAY,
    backdrop: Pumpkinhead,
    movieId: 26515,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    titler: 'Terrifier',
    date: 19,
    day: Days.FRIDAY,
    backdrop: Terrifier,
    movieId: 420634,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'The Beyond',
    date: 20,
    day: Days.SATURDAY,
    backdrop: TheBeyond,
    movieId: 19204,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Ouija: Origin of Evil',
    date: 21,
    day: Days.SUNDAY,
    backdrop: OuijaOriginOfEvil,
    movieId: 335796,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Train to Busan',
    date: 22,
    day: Days.MONDAY,
    backdrop: TrainToBusan,
    movieId: 396535,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'The Exorcism of Emily Rose',
    date: 23,
    day: Days.TUESDAY,
    backdrop: EmilyRose,
    movieId: 8643,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Annabelle: Creation',
    date: 24,
    day: Days.WEDNESDAY,
    backdrop: AnnabelleCreation,
    movieId: 396422,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Ghost Stories',
    date: 25,
    day: Days.THURSDAY,
    backdrop: GhostStories,
    movieId: 429417,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Hell House LLC',
    date: 26,
    day: Days.FRIDAY,
    backdrop: HellHouseLLC,
    movieId: 359246,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'A Quiet Place',
    date: 27,
    day: Days.SATURDAY,
    backdrop: AQuietPlace,
    movieId: 447332,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Hereditary',
    date: 28,
    day: Days.SUNDAY,
    backdrop: Hereditary,
    movieId: 493922,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: '28 Days Later',
    date: 29,
    day: Days.MONDAY,
    backdrop: DaysLater28,
    movieId: 170,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Veronica',
    date: 30,
    day: Days.TUESDAY,
    backdrop: Veronica,
    movieId: 441701,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  },
  {
    title: 'Ghostland',
    date: 31,
    day: Days.HALLOWEEN,
    backdrop: Ghostland,
    movieId: 476299,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: ''
    }
  }
]);