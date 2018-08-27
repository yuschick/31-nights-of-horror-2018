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

import DawnOfTheDeadSM from '../images/backdrops/dawn-of-the-dead-sm.jpg';
import TheAmityvilleHorrorSM from '../images/backdrops/the-amityville-horror-sm.jpg';
import ChildsPlaySM from '../images/backdrops/childs-play-sm.jpg';
import ManiacSM from '../images/backdrops/maniac-sm.jpg';
import HouseOf1000CorpsesSM from '../images/backdrops/house-of-1000-corpses-sm.jpg';
import TragedyGirlsSM from '../images/backdrops/tragedy-girls-sm.jpg';
import TheHouseAtTheEndOfTimeSM from '../images/backdrops/the-house-at-the-end-of-time-sm.jpg';
import ZombieSM from '../images/backdrops/zombie-sm.jpg';
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
import EmilyRoseSM from '../images/backdrops/the-exorcism-of-emily-rose-sm.jpg';
import AnnabelleCreationSM from '../images/backdrops/annabelle-creation-sm.jpg';
import GhostStoriesSM from '../images/backdrops/ghost-stories-sm.jpg';
import HellHouseLLCSM from '../images/backdrops/hell-house-llc-sm.jpg';
import HereditarySM from '../images/backdrops/hereditary-sm.jpg';
import AQuietPlaceSM from '../images/backdrops/a-quiet-place-sm.jpg';
import DaysLater28SM from '../images/backdrops/28-days-later-sm.jpg';
import VeronicaSM from '../images/backdrops/veronica-sm.jpg';
import GhostlandSM from '../images/backdrops/ghostland-sm.jpg';

export const movies = Immutable.from([
  {
    title: 'Dawn of the Dead',
    date: 1,
    day: Days.MONDAY,
    backdrop: DawnOfTheDead,
    backdropSM: DawnOfTheDeadSM,
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
    backdropSM: TheAmityvilleHorrorSM,
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
    backdropSM: ChildsPlaySM,
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
    backdropSM: ManiacSM,
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
    backdropSM: HouseOf1000CorpsesSM,
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
    backdropSM: TragedyGirlsSM,
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
    backdropSM: TheHouseAtTheEndOfTimeSM,
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
    backdropSM: ZombieSM,
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
    backdropSM: TheGirlNextDoorSM,
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
    backdropSM: DeadSilenceSM,
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
    backdropSM: HiddenSM,
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
    backdropSM: ItSM,
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
    backdropSM: LifeSM,
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
    backdropSM: Session9SM,
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
    backdropSM: TheGirlWithAllTheGiftsSM,
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
    backdropSM: WolfCreekSM,
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
    backdropSM: SawSM,
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
    backdropSM: PumpkinheadSM,
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
    backdropSM: TerrifierSM,
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
    backdropSM: TheBeyondSM,
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
    backdropSM: OuijaOriginOfEvilSM,
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
    backdropSM: TrainToBusanSM,
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
    backdropSM: EmilyRoseSM,
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
    backdropSM: AnnabelleCreationSM,
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
    backdropSM: GhostStoriesSM,
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
    backdropSM: HellHouseLLCSM,
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
    backdropSM: AQuietPlaceSM,
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
    backdropSM: HereditarySM,
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
    backdropSM: DaysLater28SM,
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
    backdropSM: VeronicaSM,
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
    backdropSM: GhostlandSM,
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