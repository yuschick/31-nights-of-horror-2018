import * as Immutable from 'seamless-immutable';
import { Days } from '../utils';

import DawnOfTheDead from '../images/backdrops/dawn-of-the-dead.jpg';
import TheAmityvilleHorror from '../images/backdrops/the-amityville-horror.jpg';
import ChildsPlay from '../images/backdrops/childs-play.jpg';
import Maniac from '../images/backdrops/maniac.jpg';
import HouseOf1000Corpses from '../images/backdrops/house-of-1000-corpses.jpg';
import Split from '../images/backdrops/split.jpg';
import TheHouseAtTheEndOfTime from '../images/backdrops/the-house-at-the-end-of-time.jpg';
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
import Ravenous from '../images/backdrops/ravenous.jpg';
import AnnabelleCreation from '../images/backdrops/annabelle-creation.jpg';
import GhostStories from '../images/backdrops/ghost-stories.jpg';
import HellHouseLLC from '../images/backdrops/hell-house-llc.jpg';
import Hereditary from '../images/backdrops/hereditary.jpg';
import AQuietPlace from '../images/backdrops/a-quiet-place.jpg';
import DaysLater28 from '../images/backdrops/28-days-later.jpg';
import Veronica from '../images/backdrops/veronica.jpg';
import Ghostland from '../images/backdrops/ghostland.jpg';
import StirOfEchoes from '../images/backdrops/stir-of-echoes.jpg';

import DawnOfTheDeadSM from '../images/backdrops/dawn-of-the-dead-sm.jpg';
import TheAmityvilleHorrorSM from '../images/backdrops/the-amityville-horror-sm.jpg';
import ChildsPlaySM from '../images/backdrops/childs-play-sm.jpg';
import ManiacSM from '../images/backdrops/maniac-sm.jpg';
import HouseOf1000CorpsesSM from '../images/backdrops/house-of-1000-corpses-sm.jpg';
import SplitSM from '../images/backdrops/split-sm.jpg';
import TheHouseAtTheEndOfTimeSM from '../images/backdrops/the-house-at-the-end-of-time-sm.jpg';
import TheGirlNextDoorSM from '../images/backdrops/the-girl-next-door-sm.jpg';
import SawSM from '../images/backdrops/saw-sm.jpg';
import HiddenSM from '../images/backdrops/hidden-sm.jpg';
import ItSM from '../images/backdrops/it-sm.jpg';
import LifeSM from '../images/backdrops/life-sm.jpg';
import Session9SM from '../images/backdrops/session-9-sm.jpg';
import TheGirlWithAllTheGiftsSM from '../images/backdrops/the-girl-with-all-the-gifts-sm.jpg';
import WolfCreekSM from '../images/backdrops/wolf-creek-sm.jpg';
import DeadSilenceSM from '../images/backdrops/dead-silence-sm.jpg';
import PumpkinheadSM from '../images/backdrops/pumpkinhead-sm.jpg';
import TerrifierSM from '../images/backdrops/terrifier-sm.jpg';
import TheBeyondSM from '../images/backdrops/the-beyond-sm.jpg';
import OuijaOriginOfEvilSM from '../images/backdrops/origin-of-evil-sm.jpg';
import TrainToBusanSM from '../images/backdrops/train-to-busan-sm.jpg';
import RavenousSM from '../images/backdrops/ravenous-sm.jpg';
import AnnabelleCreationSM from '../images/backdrops/annabelle-creation-sm.jpg';
import GhostStoriesSM from '../images/backdrops/ghost-stories-sm.jpg';
import HellHouseLLCSM from '../images/backdrops/hell-house-llc-sm.jpg';
import HereditarySM from '../images/backdrops/hereditary-sm.jpg';
import AQuietPlaceSM from '../images/backdrops/a-quiet-place-sm.jpg';
import DaysLater28SM from '../images/backdrops/28-days-later-sm.jpg';
import VeronicaSM from '../images/backdrops/veronica-sm.jpg';
import GhostlandSM from '../images/backdrops/ghostland-sm.jpg';
import StirOfEchoesSM from '../images/backdrops/stir-of-echoes-sm.jpg';

export const movies = Immutable.from([
  {
    title: 'Dawn of the Dead',
    date: 1,
    day: Days.MONDAY,
    backdrop: DawnOfTheDead,
    backdropSM: DawnOfTheDeadSM,
    movieId: 923,
    jwId: 16957,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: 'https://www.youtube.com/watch?v=jV_xEwb0ZiQ'
    }
  },
  {
    title: 'The Amityville Horror',
    date: 2,
    day: Days.TUESDAY,
    backdrop: TheAmityvilleHorror,
    backdropSM: TheAmityvilleHorrorSM,
    movieId: 11449,
    jwId: 70020,
    focus: 1,
    services: {
      netflix: '',
      // hulu: 'https://www.hulu.com/movie/the-amityville-horror-f1b7dfea-6678-49a7-8e45-758e8bad119e',
      shudder: '',
      amazon: 'https://www.amazon.com/dp/B001NV3ZVG',
      youtube: ''
    }
  },
  {
    title: 'Child\'s Play',
    date: 3,
    day: Days.WEDNESDAY,
    backdrop: ChildsPlay,
    backdropSM: ChildsPlaySM,
    movieId: 10585,
    jwId: 60248,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: 'https://www.amazon.com/dp/B000IZ21BS',
      youtube: 'https://www.youtube.com/watch?v=QDqSIsuRDxc'
    }
  },
  {
    title: 'Maniac',
    date: 4,
    day: Days.THURSDAY,
    backdrop: Maniac,
    backdropSM: ManiacSM,
    movieId: 103620,
    jwId: 167066,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: 'https://www.amazon.com/dp/B00F7H1SDY',
      youtube: ''
    }
  },
  {
    title: 'House of 1000 Corpses',
    date: 5,
    day: Days.FRIDAY,
    backdrop: HouseOf1000Corpses,
    backdropSM: HouseOf1000CorpsesSM,
    movieId: 2662,
    jwId: 129616,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      // shudder: 'https://www.shudder.com/movies/watch/house-of-1000-corpses/2445663',
      // amazon: 'https://www.amazon.com/dp/B000JNQ1HE',
      youtube: 'https://www.youtube.com/watch?v=Kg6-E2KNOso'
    }
  },
  {
    title: 'Split',
    date: 6,
    day: Days.SATURDAY,
    backdrop: Split,
    backdropSM: SplitSM,
    movieId: 381288,
    jwId: 236706,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: 'https://www.amazon.com/dp/B01MYFLG5H',
      youtube: 'https://www.youtube.com/watch?v=fRXxlS48pkQ'
    }
  },
  {
    title: 'The House at the End of Time',
    date: 7,
    day: Days.SUNDAY,
    backdrop: TheHouseAtTheEndOfTime,
    backdropSM: TheHouseAtTheEndOfTimeSM,
    movieId: 207686,
    jwId: 171108,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      // amazon: 'https://www.amazon.com/dp/B00O7HNDLU',
      youtube: ''
    }
  },
  {
    title: 'The Girl With All the Gifts',
    date: 6,
    day: Days.MONDAY,
    backdrop: TheGirlWithAllTheGifts,
    backdropSM: TheGirlWithAllTheGiftsSM,
    movieId: 375366,
    jwId: 244535,
    focus: 2,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      // amazon: 'https://www.amazon.com/dp/B06VXZJ4CJ',
      youtube: 'https://www.youtube.com/watch?v=odLorGwE9EQ'
    }
  },
  {
    title: 'The Girl Next Door',
    date: 9,
    day: Days.TUESDAY,
    backdrop: TheGirlNextDoor,
    backdropSM: TheGirlNextDoorSM,
    movieId: 15356,
    jwId: 78067,
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
    backdropSM: DeadSilenceSM,
    movieId: 14001,
    jwId: 72167,
    focus: 2,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      // amazon: 'https://www.amazon.com/dp/B000T2NATC',
      youtube: ''
    }
  },
  {
    title: 'Hidden',
    date: 11,
    day: Days.THURSDAY,
    backdrop: Hidden,
    backdropSM: HiddenSM,
    movieId: 360784,
    jwId: 225920,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      // amazon: 'https://www.amazon.com/dp/B0143H1RHU',
      youtube: 'https://www.youtube.com/watch?v=bZI0j94LRhg'
    }
  },
  {
    title: 'It',
    date: 12,
    day: Days.FRIDAY,
    backdrop: It,
    backdropSM: ItSM,
    movieId: 346364,
    jwId: 244208,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      // amazon: 'https://www.amazon.com/dp/B0756VMDV5',
      youtube: 'https://www.youtube.com/watch?v=NKYqOT2xMGE'
    }
  },
  {
    title: 'Life',
    date: 13,
    day: Days.SATURDAY,
    backdrop: Life,
    backdropSM: LifeSM,
    movieId: 395992,
    jwId: 244205,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: 'https://www.youtube.com/watch?v=7csml5A7Ciw'
    }
  },
  {
    title: 'Session 9',
    date: 14,
    day: Days.SUNDAY,
    backdrop: Session9,
    backdropSM: Session9SM,
    movieId: 10972,
    jwId: 34071,
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
    title: 'The Beyond',
    date: 15,
    day: Days.MONDAY,
    backdrop: TheBeyond,
    backdropSM: TheBeyondSM,
    movieId: 19204,
    jwId: 126123,
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
    title: 'Ravenouse',
    date: 16,
    day: Days.TUESDAY,
    backdrop: Ravenous,
    backdropSM: RavenousSM,
    movieId: 10212,
    jwId: 60255,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: 'https://www.youtube.com/watch?v=WkPCOeY5aW0'
    }
  },
  {
    title: 'Saw',
    date: 17,
    day: Days.WEDNESDAY,
    backdrop: Saw,
    backdropSM: SawSM,
    movieId: 176,
    jwId: 79923,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: 'https://www.youtube.com/watch?v=Rvf_PfVd7dU'
    }
  },
  {
    title: 'Pumpkinhead',
    date: 18,
    day: Days.THURSDAY,
    backdrop: Pumpkinhead,
    backdropSM: PumpkinheadSM,
    movieId: 26515,
    jwId: 49887,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: 'https://www.youtube.com/watch?v=7YR9xq5ZWzI'
    }
  },
  {
    titler: 'Terrifier',
    date: 19,
    day: Days.FRIDAY,
    backdrop: Terrifier,
    backdropSM: TerrifierSM,
    movieId: 420634,
    jwId: 271367,
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
    title: 'Stir of Echoes',
    date: 20,
    day: Days.SATURDAY,
    backdrop: StirOfEchoes,
    backdropSM: StirOfEchoesSM,
    movieId: 11601,
    jwId: 49083,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: 'https://www.youtube.com/watch?v=8NC0S8fDlJo'
    }
  },
  {
    title: 'Ouija: Origin of Evil',
    date: 21,
    day: Days.SUNDAY,
    backdrop: OuijaOriginOfEvil,
    backdropSM: OuijaOriginOfEvilSM,
    movieId: 335796,
    jwId: 206698,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: 'https://www.youtube.com/watch?v=yLV2deHatsw'
    }
  },
  {
    title: 'Train to Busan',
    date: 22,
    day: Days.MONDAY,
    backdrop: TrainToBusan,
    backdropSM: TrainToBusanSM,
    movieId: 396535,
    jwId: 243955,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: 'https://www.youtube.com/watch?v=Dpm5fvZJtaA'
    }
  },
  {
    title: 'Wolf Creek',
    date: 23,
    day: Days.TUESDAY,
    backdrop: WolfCreek,
    backdropSM: WolfCreekSM,
    movieId: 9885,
    jwId: 176743,
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
    backdropSM: AnnabelleCreationSM,
    movieId: 396422,
    jwId: 244192,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: 'https://www.youtube.com/watch?v=jkQ9khXS65s'
    }
  },
  {
    title: 'Ghost Stories',
    date: 25,
    day: Days.THURSDAY,
    backdrop: GhostStories,
    backdropSM: GhostStoriesSM,
    movieId: 429417,
    jwId: 335630,
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
    backdropSM: HellHouseLLCSM,
    movieId: 359246,
    jwId: 224498,
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
    backdropSM: AQuietPlaceSM,
    movieId: 447332,
    jwId: 312979,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: 'https://www.youtube.com/watch?v=A31oH-EN9dU'
    }
  },
  {
    title: 'Hereditary',
    date: 28,
    day: Days.SUNDAY,
    backdrop: Hereditary,
    backdropSM: HereditarySM,
    movieId: 493922,
    jwId: 364165,
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
    backdropSM: DaysLater28SM,
    movieId: 170,
    jwId: 110638,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: 'https://www.youtube.com/watch?v=xL7CMLz3PTo'
    }
  },
  {
    title: 'Veronica',
    date: 30,
    day: Days.TUESDAY,
    backdrop: Veronica,
    backdropSM: VeronicaSM,
    movieId: 441701,
    jwId: 313683,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: 'https://www.youtube.com/watch?v=Pv-UkJ3y5dE'
    }
  },
  {
    title: 'Ghostland',
    date: 31,
    day: Days.HALLOWEEN,
    backdrop: Ghostland,
    backdropSM: GhostlandSM,
    movieId: 476299,
    jwId: 350379,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: 'https://www.youtube.com/watch?v=lkCg4MiVcvQ'
    }
  }
]);