// Unified data access layer
export { allCourses, getCoursesByCity, getPublicCourses, getPrivateCourses, getResortCourses } from './courses';
export { getCityData, getAllCities, cityMeta } from './cities';
export { getStateData, getAllStates, stateData } from './states';
export { getRankingData, getAllRankings, rankings } from './rankings';
export { architects, getArchitectBySlug, getAllArchitectSlugs } from './architects';
export { travelDestinations, getTravelBySlug, getAllTravelSlugs } from './travel';
export type { GolfCourse, CityData, StateData, RankingData, FAQ, TravelData, ArchitectData } from './types';

import { allCourses } from './courses';
import type { GolfCourse } from './types';

/** Get all courses as a flat array */
export function getAllCourses(): GolfCourse[] {
  return Object.values(allCourses).flat();
}

/** Get a single course by slug */
export function getCourseBySlug(slug: string): GolfCourse | undefined {
  return getAllCourses().find(c => c.slug === slug);
}

/** Get all unique architects from course data */
export function getAllArchitects(): { name: string; slug: string; courseCount: number }[] {
  const coursesByArchitect = new Map<string, number>();
  for (const course of getAllCourses()) {
    const count = coursesByArchitect.get(course.architect) || 0;
    coursesByArchitect.set(course.architect, count + 1);
  }
  return Array.from(coursesByArchitect.entries())
    .map(([name, courseCount]) => ({
      name,
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      courseCount,
    }))
    .sort((a, b) => b.courseCount - a.courseCount);
}

/** Get courses by architect name */
export function getCoursesByArchitect(architectName: string): GolfCourse[] {
  return getAllCourses().filter(c => c.architect === architectName);
}

/** Get all unique states from course data */
export function getAllCourseStates(): string[] {
  const states = new Set<string>();
  for (const course of getAllCourses()) {
    states.add(course.state);
  }
  return Array.from(states).sort();
}

/** Get courses by state */
export function getCoursesByState(state: string): GolfCourse[] {
  return getAllCourses().filter(c => c.state === state);
}

/** Get courses by type */
export function getCoursesByType(type: GolfCourse['type']): GolfCourse[] {
  return getAllCourses().filter(c => c.type === type).sort((a, b) => b.rating - a.rating);
}

/** Get courses by state and type */
export function getCoursesByStateAndType(state: string, type: GolfCourse['type']): GolfCourse[] {
  return getAllCourses().filter(c => c.state === state && c.type === type).sort((a, b) => b.rating - a.rating);
}

/** Get all state+type combos that have at least 3 courses */
export function getStateTypeCombos(): { state: string; type: GolfCourse['type']; slug: string; count: number }[] {
  const combos: { state: string; type: GolfCourse['type']; slug: string; count: number }[] = [];
  const types: GolfCourse['type'][] = ['public', 'private', 'resort'];
  for (const state of getAllCourseStates()) {
    for (const type of types) {
      const courses = getCoursesByStateAndType(state, type);
      if (courses.length >= 3) {
        const stateSlug = state.toLowerCase().replace(/\s+/g, '-');
        combos.push({ state, type, slug: `${type}-courses-in-${stateSlug}`, count: courses.length });
      }
    }
  }
  return combos;
}

/** Monthly golf destination data */
export const monthlyGuides = [
  { month: 'January', slug: 'january', bestStates: ['Arizona', 'Florida', 'California', 'Hawaii', 'Nevada'], avoid: ['New York', 'Illinois', 'Minnesota', 'Michigan'], description: 'January is peak season for warm-weather golf destinations. Arizona and Florida offer ideal conditions, while most northern courses are closed.' },
  { month: 'February', slug: 'february', bestStates: ['Arizona', 'Florida', 'California', 'Hawaii', 'Nevada'], avoid: ['New York', 'Illinois', 'Minnesota', 'Michigan'], description: 'February remains prime time for desert and tropical golf. Scottsdale and Palm Springs are at their best, and Florida courses are in peak condition.' },
  { month: 'March', slug: 'march', bestStates: ['Arizona', 'Florida', 'California', 'North Carolina', 'South Carolina', 'Georgia', 'Texas'], avoid: ['Minnesota', 'Michigan'], description: 'March marks the start of spring golf in the Southeast. The Sandhills, Lowcountry, and Hill Country come alive while desert destinations remain perfect.' },
  { month: 'April', slug: 'april', bestStates: ['North Carolina', 'South Carolina', 'Georgia', 'Texas', 'California', 'Arizona', 'Tennessee'], avoid: [], description: 'April is Masters month and one of the best months for golf nationwide. Spring blooms brighten courses across the Southeast, and nearly every region is in play.' },
  { month: 'May', slug: 'may', bestStates: ['North Carolina', 'South Carolina', 'Oregon', 'California', 'Colorado', 'New York', 'Illinois'], avoid: [], description: 'May opens the golf season in the North and Pacific Northwest. Oregon, Colorado, and the Great Lakes states come online while southern courses remain excellent.' },
  { month: 'June', slug: 'june', bestStates: ['Oregon', 'Colorado', 'New York', 'Illinois', 'Michigan', 'Minnesota', 'California'], avoid: ['Arizona', 'Nevada'], description: 'June is peak season for northern and mountain golf. Pacific Northwest courses are lush, Colorado offers long days at altitude, and the Great Lakes region shines.' },
  { month: 'July', slug: 'july', bestStates: ['Oregon', 'Colorado', 'New York', 'Michigan', 'Minnesota', 'California'], avoid: ['Arizona', 'Nevada', 'Texas'], description: 'July brings the longest days and best conditions to northern courses. Mountain resort golf in Colorado and Oregon is at its peak.' },
  { month: 'August', slug: 'august', bestStates: ['Oregon', 'Colorado', 'California', 'New York', 'Michigan'], avoid: ['Arizona', 'Nevada', 'Texas', 'Florida'], description: 'August completes the summer peak in the North. San Francisco clears its fog, Bandon Dunes is warm, and mountain golf remains excellent.' },
  { month: 'September', slug: 'september', bestStates: ['California', 'Oregon', 'Colorado', 'New York', 'North Carolina', 'Illinois'], avoid: ['Florida'], description: 'September is arguably the best month for golf nationwide. Northern courses enjoy warm days and lighter crowds, while shoulder-season pricing kicks in at many destinations.' },
  { month: 'October', slug: 'october', bestStates: ['North Carolina', 'South Carolina', 'California', 'Arizona', 'Texas', 'Georgia', 'Tennessee'], avoid: ['Minnesota', 'Michigan'], description: 'October brings fall foliage to eastern courses and the return of ideal weather in the desert and Deep South. It\'s one of the best months for a golf trip anywhere.' },
  { month: 'November', slug: 'november', bestStates: ['Arizona', 'Florida', 'California', 'Texas', 'South Carolina', 'Nevada'], avoid: ['New York', 'Illinois', 'Oregon'], description: 'November shifts the golf calendar back to warm-weather destinations. Scottsdale and Florida enter peak season as northern courses begin to close.' },
  { month: 'December', slug: 'december', bestStates: ['Arizona', 'Florida', 'California', 'Hawaii', 'Nevada', 'Texas'], avoid: ['New York', 'Illinois', 'Minnesota', 'Michigan', 'Oregon'], description: 'December is prime time for winter golf escapes. Arizona, Florida, and Hawaii offer holiday golf packages, and desert courses are in perfect condition.' },
];
