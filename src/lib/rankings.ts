import type { RankingData, GolfCourse } from './types';
import { allCourses } from './courses';

function gatherTopCourses(type?: string, limit = 20): GolfCourse[] {
  const all = Object.values(allCourses).flat();
  const filtered = type ? all.filter(c => c.type === type) : all;
  return filtered.sort((a, b) => b.rating - a.rating).slice(0, limit);
}

export const rankings: Record<string, RankingData> = {
  'best-golf-courses-in-america': {
    title: 'Best Golf Courses in America 2026',
    slug: 'best-golf-courses-in-america',
    metaTitle: 'Best Golf Courses in America 2026 | Top 20 Ranked',
    metaDescription: 'Our definitive ranking of the best golf courses in America for 2026. Expert-evaluated courses ranked by design, conditioning, challenge, and overall experience.',
    intro: 'American golf has never been stronger. From restored Golden Age masterpieces to bold modern designs built on former phosphate mines and landfills, the breadth and quality of golf courses across the United States is staggering. Our 2026 ranking celebrates the courses that define excellence in the game — the layouts that every serious golfer should experience.',
    methodology: 'Our rankings are compiled through a combination of expert panel evaluations, on-course assessments, architectural significance, conditioning standards, and overall experience quality. We evaluate courses holistically, weighing design intelligence, visual presentation, strategic interest, and the intangible "wow factor" that separates great courses from merely good ones. Private and public courses are evaluated together on merit.',
    courses: gatherTopCourses(undefined, 20),
    faqs: [
      { question: 'How are courses ranked?', answer: 'Courses are ranked by an expert panel evaluating design quality, conditioning, challenge, aesthetics, and overall experience. Both private and public courses are considered on equal footing.' },
      { question: 'How often are the rankings updated?', answer: 'Rankings are updated annually with on-course evaluations throughout the year.' },
      { question: 'Why are private courses included?', answer: 'Private courses are included because they represent the pinnacle of the game. While access is limited, their design influence and architectural significance merit recognition.' },
    ],
    relatedRankings: [
      { name: 'Best Public Golf Courses', slug: 'best-public-golf-courses' },
      { name: 'Best Private Golf Courses', slug: 'best-private-golf-courses' },
    ],
    relatedDestinations: [
      { name: 'Scottsdale, Arizona', slug: 'scottsdale-arizona' },
      { name: 'Pinehurst, North Carolina', slug: 'pinehurst-north-carolina' },
    ],
  },
  'best-public-golf-courses': {
    title: 'Best Public Golf Courses in America 2026',
    slug: 'best-public-golf-courses',
    metaTitle: 'Best Public Golf Courses in America 2026 | Top 20',
    metaDescription: 'The top-ranked public golf courses in America for 2026. Courses you can play, ranked by design quality, conditioning, value, and overall experience.',
    intro: 'The golden age of public golf is here. Tom Doak\'s Memorial Park, Coore & Crenshaw\'s Streamsong Red, Gil Hanse\'s Rustic Canyon — today\'s best public courses rival their private counterparts in design intelligence while welcoming all comers. These are the courses that prove great golf doesn\'t require a membership.',
    methodology: 'Public courses are ranked by design quality, conditioning standards, value proposition, accessibility, and overall experience. We define "public" broadly to include municipal, daily-fee, resort, and semi-private courses accessible to non-members.',
    courses: gatherTopCourses('public', 15).concat(gatherTopCourses('resort', 5)),
    faqs: [
      { question: 'What qualifies as a public course?', answer: 'We include municipal, daily-fee, resort, and semi-private courses where non-members can book tee times, even if seasonal or at premium rates.' },
      { question: 'What is the best value public course?', answer: 'Stevens Park in Dallas (a restored Tillinghast design under $65) and Rustic Canyon in Moorpark, CA (Gil Hanse design under $75) offer exceptional architecture at very accessible prices.' },
    ],
    relatedRankings: [
      { name: 'Best Golf Courses in America', slug: 'best-golf-courses-in-america' },
      { name: 'Best Private Golf Courses', slug: 'best-private-golf-courses' },
    ],
    relatedDestinations: [
      { name: 'Orlando, Florida', slug: 'orlando-florida' },
      { name: 'San Diego, California', slug: 'san-diego-california' },
    ],
  },
  'best-private-golf-courses': {
    title: 'Best Private Golf Courses in America 2026',
    slug: 'best-private-golf-courses',
    metaTitle: 'Best Private Golf Courses in America 2026 | Top 15',
    metaDescription: 'The top-ranked private golf courses in America for 2026. From Shinnecock Hills to Whisper Rock, the nation\'s most exclusive and acclaimed clubs.',
    intro: 'America\'s private clubs represent the pinnacle of golf course design, conditioning, and experience. These are the courses that set the standard — the layouts where architecture, nature, and meticulous maintenance converge to create golf at its absolute finest.',
    methodology: 'Private courses are ranked by design excellence, conditioning standards, architectural significance, challenge, and the overall member experience. Historical importance and championship pedigree are considered but don\'t automatically elevate a course above one with superior modern design.',
    courses: gatherTopCourses('private', 15),
    faqs: [
      { question: 'Can I play any of these private courses?', answer: 'Most require a member invitation. However, some clubs have reciprocal agreements with other private clubs, and a few offer limited guest access through concierge services or charity events.' },
    ],
    relatedRankings: [
      { name: 'Best Golf Courses in America', slug: 'best-golf-courses-in-america' },
      { name: 'Best Public Golf Courses', slug: 'best-public-golf-courses' },
    ],
    relatedDestinations: [
      { name: 'Dallas, Texas', slug: 'dallas-texas' },
      { name: 'New York City Area', slug: 'new-york-new-york' },
    ],
  },
};

export function getRankingData(slug: string): RankingData | undefined {
  return rankings[slug];
}

export function getAllRankings(): { title: string; slug: string }[] {
  return Object.values(rankings).map(r => ({ title: r.title, slug: r.slug }));
}
