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
    focus: 1,
    services: {
      netflix: '',
      hulu: 'https://www.hulu.com/movie/the-amityville-horror-f1b7dfea-6678-49a7-8e45-758e8bad119e',
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
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: 'https://www.amazon.com/dp/B000IZ21BS',
      youtube: 'https://www.youtube.com/watch?v=QDqSIsuRDxc',
      itunes: 'https://itunes.apple.com/us/movie/childs-play/id220251867?uo=4&at=1000l3V2'
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
      amazon: 'https://www.amazon.com/dp/B00F7H1SDY',
      youtube: '',
      itunes: 'https://itunes.apple.com/us/movie/maniac/id658109926?uo=4&at=1000l3V2'
    }
  },
  {
    title: 'House of 1000 Corpses',
    date: 5,
    day: Days.FRIDAY,
    backdrop: HouseOf1000Corpses,
    backdropSM: HouseOf1000CorpsesSM,
    movieId: 2662,
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: 'https://www.amazon.com/dp/B000JNQ1HE',
      youtube: 'https://www.youtube.com/watch?v=Kg6-E2KNOso',
      itunes: 'https://itunes.apple.com/us/movie/house-of-1000-corpses/id219953731?uo=4&at=1000l3V2'
    }
  },
  {
    title: 'Split',
    date: 6,
    day: Days.SATURDAY,
    backdrop: Split,
    backdropSM: SplitSM,
    movieId: 381288,
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
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: 'https://www.amazon.com/dp/B00O7HNDLU',
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
    focus: 2,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: 'https://www.amazon.com/dp/B06VXZJ4CJ',
      youtube: 'https://www.youtube.com/watch?v=odLorGwE9EQ',
      itunes: 'https://itunes.apple.com/us/movie/the-girl-with-all-the-gifts/id1199019294?uo=4&at=1000l3V2'
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
      amazon: 'https://www.amazon.com/dp/B000T2NATC',
      youtube: '',
      itunes: 'https://itunes.apple.com/us/movie/dead-silence-unrated-2007/id315045965?uo=4&at=1000l3V2'
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
      amazon: 'https://www.amazon.com/dp/B0143H1RHU',
      youtube: 'https://www.youtube.com/watch?v=bZI0j94LRhg',
      itunes: 'https://itunes.apple.com/us/movie/hidden/id1030976725?uo=4&at=1000l3V2'
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
      amazon: 'https://www.amazon.com/dp/B0756VMDV5',
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
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: 'https://www.shudder.com/watch/the-beyond/2325608/1',
      amazon: 'https://www.amazon.com/gp/product/B075KMR3W8?camp=1789&creativeASIN=B075KMR3W8&ie=UTF8&linkCode=xm2&tag=justwatch09-20',
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
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: 'https://www.amazon.com/gp/product/B000I9U8K0?camp=1789&creativeASIN=B000I9U8K0&ie=UTF8&linkCode=xm2&tag=justwatch09-20',
      youtube: 'https://www.youtube.com/watch?v=WkPCOeY5aW0',
      itunes: 'https://itunes.apple.com/us/movie/ravenous/id280626622?uo=4&at=1000l3V2'
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
      amazon: 'https://www.amazon.com/gp/product/B000XSEPYQ?camp=1789&creativeASIN=B000XSEPYQ&ie=UTF8&linkCode=xm2&tag=justwatch09-20',
      youtube: 'https://www.youtube.com/watch?v=Rvf_PfVd7dU',
      itunes: 'https://itunes.apple.com/us/movie/saw/id265727087?uo=4&at=1000l3V2'
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
      hulu: 'http://www.hulu.com/watch/15153',
      shudder: '',
      amazon: 'https://www.amazon.com/gp/product/B000VEPL4U?camp=1789&creativeASIN=B000VEPL4U&ie=UTF8&linkCode=xm2&tag=justwatch09-20',
      youtube: 'https://www.youtube.com/watch?v=7YR9xq5ZWzI',
      itunes: 'https://itunes.apple.com/us/movie/pumpkinhead/id258692590?uo=4&at=1000l3V2'
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
      netflix: 'http://www.netflix.com/title/81004223',
      hulu: '',
      shudder: '',
      amazon: '',
      youtube: '',
      itunes: 'https://itunes.apple.com/us/movie/terrifier/id1343789417?uo=4&at=1000l3V2'
    }
  },
  {
    title: 'Stir of Echoes',
    date: 20,
    day: Days.SATURDAY,
    backdrop: StirOfEchoes,
    backdropSM: StirOfEchoesSM,
    movieId: 11601,
    focus: 3,
    services: {
      netflix: '',
      hulu: 'http://www.hulu.com/watch/795802',
      shudder: '',
      amazon: 'https://www.amazon.com/gp/product/B07G1YV6HD?camp=1789&creativeASIN=B07G1YV6HD&ie=UTF8&linkCode=xm2&tag=justwatch09-20',
      youtube: 'https://www.youtube.com/watch?v=8NC0S8fDlJo',
      itunes: 'https://itunes.apple.com/us/movie/stir-of-echoes/id265725786?uo=4&at=1000l3V2'
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
    focus: 1,
    services: {
      netflix: 'http://www.netflix.com/title/80117824',
      hulu: '',
      shudder: '',
      amazon: 'https://www.amazon.com/gp/product/B01N2POCJX?camp=1789&creativeASIN=B01N2POCJX&ie=UTF8&linkCode=xm2&tag=justwatch09-20',
      youtube: 'https://www.youtube.com/watch?v=Dpm5fvZJtaA',
      itunes: 'https://itunes.apple.com/us/movie/train-to-busan/id1163982660?uo=4&at=1000l3V2'
    }
  },
  {
    title: 'Wolf Creek',
    date: 23,
    day: Days.TUESDAY,
    backdrop: WolfCreek,
    backdropSM: WolfCreekSM,
    movieId: 9885,
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: 'https://www.amazon.com/gp/product/B002HU5KII?camp=1789&creativeASIN=B002HU5KII&ie=UTF8&linkCode=xm2&tag=justwatch09-20',
      youtube: '',
      itunes: 'https://itunes.apple.com/us/movie/wolf-creek/id307017019?uo=4&at=1000l3V2'
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
    focus: 3,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: 'https://www.amazon.com/gp/product/B07FKXYPX3?camp=1789&creativeASIN=B07FKXYPX3&ie=UTF8&linkCode=xm2&tag=justwatch09-20',
      youtube: '',
      itunes: 'https://itunes.apple.com/us/movie/ghost-stories/id1401813378?uo=4&at=1000l3V2'
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
      amazon: 'https://www.amazon.com/gp/product/B01LYLJBQF?camp=1789&creativeASIN=B01LYLJBQF&ie=UTF8&linkCode=xm2&tag=justwatch09-20',
      youtube: '',
      itunes: 'https://itunes.apple.com/us/movie/hell-house-llc/id1150208694?uo=4&at=1000l3V2'
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
      amazon: 'https://www.amazon.com/gp/product/B07BZ2YYPF?camp=1789&creativeASIN=B07BZ2YYPF&ie=UTF8&linkCode=xm2&tag=justwatch09-20',
      youtube: 'https://www.youtube.com/watch?v=A31oH-EN9dU',
      itunes: 'https://itunes.apple.com/us/movie/a-quiet-place/id1356850151?uo=4&at=1000l3V2'
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
      amazon: 'https://www.amazon.com/gp/product/B07DHYZF7H?camp=1789&creativeASIN=B07DHYZF7H&ie=UTF8&linkCode=xm2&tag=justwatch09-20',
      youtube: '',
      itunes: 'https://itunes.apple.com/us/movie/hereditary/id1382447562?uo=4&at=1000l3V2'
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
      amazon: 'https://www.amazon.com/gp/product/B00C4QIFBO?camp=1789&creativeASIN=B00C4QIFBO&ie=UTF8&linkCode=xm2&tag=justwatch09-20',
      youtube: 'https://www.youtube.com/watch?v=xL7CMLz3PTo',
      itunes: 'https://itunes.apple.com/us/movie/28-days-later/id569220589?uo=4&at=1000l3V2'
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
      netflix: 'http://www.netflix.com/title/80109295',
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
    focus: 1,
    services: {
      netflix: '',
      hulu: '',
      shudder: '',
      amazon: 'https://www.amazon.com/gp/product/B07DPW8VP1?camp=1789&creativeASIN=B07DPW8VP1&ie=UTF8&linkCode=xm2&tag=justwatch09-20',
      youtube: 'https://www.youtube.com/watch?v=lkCg4MiVcvQ',
      itunes: 'https://itunes.apple.com/us/movie/incident-in-a-ghostland/id1389640628?uo=4&at=1000l3V2'
    }
  }
]);
