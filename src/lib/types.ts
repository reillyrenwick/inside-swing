export interface SignatureHole {
  hole: number;
  par: number;
  yardage: number;
  description: string;
}

export interface GolfCourse {
  id: string;
  name: string;
  slug: string;
  city: string;
  state: string;
  type: 'public' | 'private' | 'resort' | 'semi-private';
  rating: number;
  greensFee: string;
  architect: string;
  yearBuilt: number;
  holes: number;
  par: number;
  yardage: number;
  description: string;
  highlights: string[];
  imageAlt: string;
  // Rich content — optional, pages render gracefully without these
  history?: string;
  signatureHoles?: SignatureHole[];
  whatToExpect?: string;
  playingTips?: string;
  faqs?: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CityData {
  city: string;
  state: string;
  stateAbbr: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  overview: string;
  bestTimeToPlay: string;
  travelTips: string;
  airport: string;
  courses: GolfCourse[];
  publicCourses: GolfCourse[];
  privateCourses: GolfCourse[];
  resortCourses: GolfCourse[];
  nearbyDestinations: { name: string; slug: string }[];
  faqs: FAQ[];
  relatedStates: string[];
}

export interface StateData {
  state: string;
  stateAbbr: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  overview: string;
  topCities: { name: string; slug: string }[];
  topCourses: GolfCourse[];
  bestTimeToPlay: string;
  golfRegions: { name: string; description: string }[];
  faqs: FAQ[];
  relatedStates: { name: string; slug: string }[];
}

export interface RankingData {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  methodology: string;
  courses: GolfCourse[];
  faqs: FAQ[];
  relatedRankings: { name: string; slug: string }[];
  relatedDestinations: { name: string; slug: string }[];
}

export interface TravelData {
  destination: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  overview: string;
  bestTimeToVisit: string;
  gettingThere: string;
  whereToStay: string;
  topCourses: GolfCourse[];
  cities: { name: string; slug: string }[];
  faqs: FAQ[];
  relatedDestinations: { name: string; slug: string }[];
}

export interface ArchitectData {
  name: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  bio: string;
  philosophy: string;
  notableCourses: { name: string; slug: string; city: string; state: string }[];
  faqs: FAQ[];
}
