import type { TravelData, GolfCourse } from './types';
import { getCoursesByCity } from './courses';

function getTopCoursesForCities(citySlugs: string[], limit: number = 8): GolfCourse[] {
  return citySlugs
    .flatMap(slug => getCoursesByCity(slug))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

export const travelDestinations: TravelData[] = [
  {
    destination: 'Scottsdale Golf Trip',
    slug: 'scottsdale-arizona',
    metaTitle: 'Scottsdale Golf Trip Guide — Best Courses, Where to Stay & Tips (2026)',
    metaDescription: 'Plan the ultimate Scottsdale golf trip. Top desert courses, luxury resorts, best time to visit, and insider tips for Arizona\'s golf capital.',
    heroIntro: 'Scottsdale is the undisputed golf capital of the American Southwest, with over 200 courses within driving distance, world-class resorts, and nearly 300 days of sunshine per year.',
    overview: 'A Scottsdale golf trip offers an unmatched combination of championship desert courses, five-star resort accommodations, and a vibrant dining and nightlife scene along the Scottsdale Waterfront and Old Town. The area\'s courses range from bucket-list desert experiences like Troon North and We-Ko-Pa to PGA Tour venues like TPC Scottsdale. Most resorts offer stay-and-play packages that represent excellent value, especially during the shoulder seasons. The dramatic Sonoran Desert landscape — saguaro cacti, red rock formations, and mountain views — makes every round a visual feast.',
    bestTimeToVisit: 'October through April is prime golf season with comfortable temperatures between 65°F and 85°F. Peak season runs January through March with the highest rates. November and early December offer the best value with ideal playing weather. Summer temperatures exceed 110°F, making golf impractical for most visitors.',
    gettingThere: 'Phoenix Sky Harbor International Airport (PHX) is the primary gateway, located 15-20 minutes from central Scottsdale. Direct flights from all major U.S. hubs. Scottsdale Airport (SDL) handles private aviation. A rental car is essential — courses are spread across the Valley.',
    whereToStay: 'The Phoenician offers luxury with its own 18-hole course. The Boulders Resort provides a desert immersion experience with two Fazio courses. For a central location, stay along Scottsdale Road near Old Town for easy access to restaurants, nightlife, and multiple courses within 20 minutes.',
    topCourses: getTopCoursesForCities(['scottsdale-arizona', 'phoenix-arizona']),
    cities: [
      { name: 'Scottsdale', slug: 'scottsdale-arizona' },
      { name: 'Phoenix', slug: 'phoenix-arizona' },
    ],
    faqs: [
      { question: 'When is the cheapest time to play golf in Scottsdale?', answer: 'Late May through September offers the lowest green fees (often 50-70% off peak rates), but temperatures regularly exceed 110°F. The best value with comfortable weather is November through mid-December or late March through April.' },
      { question: 'How many rounds should I plan for a Scottsdale golf trip?', answer: 'Most visitors play 3-4 rounds over a 4-5 day trip. The desert heat and walking courses can be physically demanding, so build in rest days for spa time, dining, and exploring Old Town Scottsdale.' },
      { question: 'Do I need a car in Scottsdale?', answer: 'Yes — a rental car is essential. Courses are spread across the Valley, with drives of 20-45 minutes between them. Ride-sharing is available but expensive for daily golf commutes.' },
    ],
    relatedDestinations: [
      { name: 'Austin & Texas Hill Country', slug: 'austin-texas-hill-country' },
      { name: 'Southern California Golf', slug: 'southern-california' },
    ],
  },
  {
    destination: 'Pinehurst & NC Sandhills',
    slug: 'pinehurst-nc-sandhills',
    metaTitle: 'Pinehurst Golf Trip Guide — Best Courses & Travel Tips (2026)',
    metaDescription: 'Plan your Pinehurst & NC Sandhills golf trip. Home of Pinehurst No. 2, Pine Needles, and Tobacco Road — America\'s cradle of golf.',
    heroIntro: 'The Sandhills of North Carolina are hallowed ground in American golf, home to more than 40 courses including the legendary Pinehurst Resort and some of the finest designs in the country.',
    overview: 'A golf trip to the Pinehurst area is a pilgrimage to the heart of American golf. Pinehurst Resort alone offers nine courses, including the iconic No. 2 course that has hosted U.S. Opens, U.S. Women\'s Opens, and Ryder Cups. Beyond the resort, the Sandhills region features Pine Needles, Mid Pines, Tobacco Road, and dozens of other exceptional layouts. The sandy soil ensures excellent drainage and year-round playability, while the moderate Carolina climate allows golf in every season.',
    bestTimeToVisit: 'March through May and September through November offer ideal temperatures in the 60s-80s°F. Spring brings blooming dogwoods and azaleas. Fall provides crisp mornings and warm afternoons. Summer is hot and humid but playable, especially in mornings. Winter offers value with temperatures in the 40s-60s°F.',
    gettingThere: 'Raleigh-Durham International Airport (RDU) is the closest major airport, about 70 miles northeast. Charlotte Douglas International (CLT) is 100 miles southwest. Piedmont Triad International (GSO) in Greensboro is 80 miles north. A rental car is necessary.',
    whereToStay: 'Pinehurst Resort is the obvious choice for immersive convenience — stay on property and walk to multiple courses. Pine Needles Lodge offers a more intimate, boutique experience. For budget travelers, Southern Pines and Aberdeen have quality hotels within 10 minutes of most courses.',
    topCourses: getTopCoursesForCities(['pinehurst-north-carolina']),
    cities: [
      { name: 'Pinehurst', slug: 'pinehurst-north-carolina' },
      { name: 'Charlotte', slug: 'charlotte-north-carolina' },
    ],
    faqs: [
      { question: 'How many courses are in the Pinehurst area?', answer: 'The Sandhills region has over 40 golf courses within a 30-minute radius, including nine courses at Pinehurst Resort alone. It is one of the highest concentrations of quality golf in the world.' },
      { question: 'Is Pinehurst No. 2 open to the public?', answer: 'Pinehurst No. 2 is a resort course accessible to guests staying at Pinehurst Resort. You do not need to be a member, but you must book a resort stay-and-play package to access the course.' },
      { question: 'What is Tobacco Road like?', answer: 'Tobacco Road is a wildly creative Mike Strantz design with dramatic elevation changes, massive bunkers, and blind shots. It\'s a love-it-or-hate-it experience and one of the most unique courses in America.' },
    ],
    relatedDestinations: [
      { name: 'South Florida Golf', slug: 'south-florida' },
      { name: 'Scottsdale Golf Trip', slug: 'scottsdale-arizona' },
    ],
  },
  {
    destination: 'South Florida Golf',
    slug: 'south-florida',
    metaTitle: 'South Florida Golf Trip Guide — Miami, Palm Beach & Beyond (2026)',
    metaDescription: 'Plan the ultimate South Florida golf trip. From Doral to Palm Beach, discover the best courses, resorts, and travel tips for Florida\'s Gold Coast.',
    heroIntro: 'South Florida combines world-class resort golf with year-round tropical weather, vibrant nightlife, and stunning Atlantic coastline — making it one of America\'s top golf destinations.',
    overview: 'From the iconic Blue Monster at Trump National Doral to the exclusive private clubs of Palm Beach, South Florida offers a diverse golf landscape that satisfies every taste. The region\'s flat terrain is offset by creative routing, extensive water features, and immaculate tropical landscaping. January through April brings perfect weather and the return of Northern snowbirds, creating a festive golf atmosphere. Beyond the courses, South Florida delivers world-class dining in Miami\'s Wynwood and South Beach, luxury shopping on Worth Avenue in Palm Beach, and the Everglades for eco-adventures.',
    bestTimeToVisit: 'November through April is prime season with low humidity and temperatures in the 70s-80s°F. This is also peak pricing season. May, June, and early July offer great value with slightly higher humidity. August through October is hurricane season with frequent afternoon thunderstorms.',
    gettingThere: 'Miami International Airport (MIA) and Fort Lauderdale-Hollywood International (FLL) are the primary gateways. Palm Beach International (PBI) serves the northern Gold Coast. All three have direct flights from major U.S. cities. A rental car is recommended for course-hopping.',
    whereToStay: 'Trump National Doral offers four on-site courses and convenient Miami access. The Breakers Palm Beach provides ultra-luxury with an Ocean Course. For a central base, Fort Lauderdale puts you within 45 minutes of both Miami and Palm Beach courses.',
    topCourses: getTopCoursesForCities(['miami-florida']),
    cities: [
      { name: 'Miami', slug: 'miami-florida' },
    ],
    faqs: [
      { question: 'When is the cheapest time to golf in South Florida?', answer: 'May through early October offers the lowest green fees, often 40-60% below peak season rates. The tradeoff is higher humidity and afternoon thunderstorms, though mornings are usually clear.' },
      { question: 'Are there good public courses in South Florida?', answer: 'Yes — Crandon Golf at Key Biscayne, the Biltmore in Coral Gables, and several Palm Beach County municipal courses offer excellent public golf. Resort courses at Doral and PGA National are also accessible.' },
    ],
    relatedDestinations: [
      { name: 'Orlando & Central Florida', slug: 'orlando-central-florida' },
      { name: 'Pinehurst & NC Sandhills', slug: 'pinehurst-nc-sandhills' },
    ],
  },
  {
    destination: 'Orlando & Central Florida',
    slug: 'orlando-central-florida',
    metaTitle: 'Orlando Golf Trip Guide — Best Courses & Resort Golf (2026)',
    metaDescription: 'Plan an Orlando golf trip combining world-class resort courses with theme park fun. Bay Hill, Grand Cypress, Reunion Resort, and more.',
    heroIntro: 'Orlando is a year-round golf destination with over 170 courses in the greater metro area, anchored by iconic resort properties and PGA Tour history.',
    overview: 'Orlando\'s golf scene extends far beyond its famous theme parks. Bay Hill Club hosts the Arnold Palmer Invitational, Grand Cypress offers a Nicklaus-designed tribute to St. Andrews, and Reunion Resort provides three signature courses by Palmer, Watson, and Nicklaus. The region\'s abundance of resort courses means easy access without club memberships, and stay-and-play packages deliver strong value. Rolling terrain, Florida native landscaping, and year-round green fairways create an appealing setting. Orlando also offers Streamsong Resort just 90 minutes south — a destination-within-a-destination featuring three of America\'s top-rated courses.',
    bestTimeToVisit: 'October through May is ideal golf weather with temperatures in the 65°F-85°F range. February through April is peak season with the highest demand. Summer is hot and humid (90°F+) with daily afternoon thunderstorms, but morning tee times are available at heavily discounted rates.',
    gettingThere: 'Orlando International Airport (MCO) is one of the busiest in the U.S. with direct flights from virtually every American city and many international destinations. Most resort courses are 20-40 minutes from the airport.',
    whereToStay: 'Reunion Resort offers three championship courses on property. Omni Orlando Resort at ChampionsGate provides two Greg Norman courses and family amenities. Bay Hill Club & Lodge offers an intimate, golf-first experience. For theme park + golf combos, the Bonnet Creek area puts you near Disney and multiple courses.',
    topCourses: getTopCoursesForCities(['orlando-florida', 'tampa-florida']),
    cities: [
      { name: 'Orlando', slug: 'orlando-florida' },
      { name: 'Tampa', slug: 'tampa-florida' },
    ],
    faqs: [
      { question: 'Can you combine a golf trip with theme parks in Orlando?', answer: 'Absolutely — it\'s one of Orlando\'s biggest advantages. Many golfers play morning rounds and spend afternoons at Disney, Universal, or the new EPIC Universe. Resort stay-and-play packages often include theme park perks.' },
      { question: 'Is Streamsong worth the drive from Orlando?', answer: 'Yes — the 90-minute drive to Streamsong Resort is well worth it. The three courses (Red, Blue, and Black) are ranked among the best in America and offer a totally different, inland links-style experience.' },
    ],
    relatedDestinations: [
      { name: 'South Florida Golf', slug: 'south-florida' },
      { name: 'Pinehurst & NC Sandhills', slug: 'pinehurst-nc-sandhills' },
    ],
  },
  {
    destination: 'Austin & Texas Hill Country',
    slug: 'austin-texas-hill-country',
    metaTitle: 'Austin Golf Trip Guide — Hill Country Courses & Travel Tips (2026)',
    metaDescription: 'Plan an Austin and Texas Hill Country golf trip. Top courses from Barton Creek to Wolfdancer, plus live music, BBQ, and outdoor adventures.',
    heroIntro: 'Austin combines a vibrant live-music scene and legendary BBQ culture with surprisingly excellent golf on dramatic Hill Country terrain — creating one of America\'s most unique golf trip destinations.',
    overview: 'The Texas Hill Country offers some of the most scenic and geologically dramatic golf in the South. Courses wind through limestone bluffs, ancient live oaks, and along spring-fed creeks and rivers. Barton Creek Resort anchors the region with four courses, while Wolfdancer at Hyatt Lost Pines offers a Colorado River experience unlike anything else in Texas. Austin\'s legendary 6th Street and South Congress food-and-music scene make evenings as memorable as the golf. The city also hosts the Dell Technologies Match Play at Austin Country Club each spring, bringing PGA Tour star power.',
    bestTimeToVisit: 'March through May and October through November are ideal with temperatures in the 70s-80s°F. Spring wildflower season (March-April) is spectacular. Summer temperatures regularly exceed 100°F. Fall offers excellent weather and lower rates as peak travel season winds down.',
    gettingThere: 'Austin-Bergstrom International Airport (AUS) has direct flights from most major U.S. cities. San Antonio International (SAT) is 80 miles south with additional flight options. A rental car is essential for reaching Hill Country courses.',
    whereToStay: 'Omni Barton Creek Resort offers four on-site courses and a central Hill Country location. Hyatt Regency Lost Pines provides a resort-and-nature experience with Wolfdancer Golf. Downtown Austin hotels on South Congress or Rainey Street put you in the heart of the food and music scene.',
    topCourses: getTopCoursesForCities(['austin-texas']),
    cities: [
      { name: 'Austin', slug: 'austin-texas' },
    ],
    faqs: [
      { question: 'What makes Hill Country golf unique?', answer: 'The Texas Hill Country features dramatic limestone terrain with 100+ foot elevation changes, ancient live oak canopies, spring-fed creeks, and panoramic views — creating golf experiences more reminiscent of mountain courses than typical Texas flatland layouts.' },
      { question: 'Can I combine a golf trip with Austin\'s food and music scene?', answer: 'Absolutely — that\'s Austin\'s biggest advantage as a golf destination. Play morning rounds, then enjoy legendary BBQ (Franklin, la Barbecue), live music on 6th Street or South Congress, and a thriving craft cocktail scene.' },
    ],
    relatedDestinations: [
      { name: 'Scottsdale Golf Trip', slug: 'scottsdale-arizona' },
      { name: 'South Florida Golf', slug: 'south-florida' },
    ],
  },
  {
    destination: 'Southern California Golf',
    slug: 'southern-california',
    metaTitle: 'Southern California Golf Trip Guide — Best Courses & Tips (2026)',
    metaDescription: 'Plan a SoCal golf trip from San Diego to LA. Torrey Pines, Pelican Hill, Riviera, and more — year-round golf under Pacific blue skies.',
    heroIntro: 'Southern California delivers year-round golf under Pacific blue skies, from ocean-cliff courses in San Diego to canyon layouts in Los Angeles — all set against one of America\'s most enviable lifestyles.',
    overview: 'A Southern California golf trip offers an unmatched variety of landscapes and playing experiences. Torrey Pines in La Jolla offers U.S. Open-tested clifftop golf overlooking the Pacific. Pelican Hill in Newport Beach provides a luxury resort experience on Orange County\'s stunning coastline. In Los Angeles, the legendary Riviera Country Club (when accessible) and hidden gems like Rustic Canyon deliver championship-caliber golf. San Diego\'s favorable climate — even milder than LA — makes it the ideal home base for a multi-day trip. Between rounds, enjoy world-class beaches, farm-to-table dining, and the SoCal lifestyle.',
    bestTimeToVisit: 'Year-round destination, but September through November offers the best weather with warm, dry conditions and fewer crowds. May through July brings marine layer ("June Gloom") mornings that burn off by midday. Winter is mild (60s°F) with occasional rain.',
    gettingThere: 'San Diego International (SAN) and Los Angeles International (LAX) are the primary airports. John Wayne Airport (SNA) in Orange County splits the difference. A rental car is essential for a multi-city trip — the I-5 corridor connects SD, OC, and LA in about 2 hours.',
    whereToStay: 'The Lodge at Torrey Pines offers luxury overlooking the courses and Pacific. Pelican Hill Resort in Newport Beach is the ultimate Orange County base. In LA, stay in Santa Monica for beach access and proximity to Riviera and Bel-Air areas.',
    topCourses: getTopCoursesForCities(['san-diego-california', 'los-angeles-california']),
    cities: [
      { name: 'San Diego', slug: 'san-diego-california' },
      { name: 'Los Angeles', slug: 'los-angeles-california' },
    ],
    faqs: [
      { question: 'Can I play Torrey Pines as a tourist?', answer: 'Yes — Torrey Pines is a public municipal course open to all. Non-San Diego residents pay higher rates ($175-$250), and booking can be competitive. Reserve tee times online as early as possible, especially for the South Course.' },
      { question: 'Is it worth combining San Diego and LA golf?', answer: 'Yes — the two cities are about 2 hours apart on I-5. A 5-day trip allows 2 rounds in each city with a travel day. Orange County courses (Pelican Hill, Monarch Beach) make a great stopover between the two.' },
    ],
    relatedDestinations: [
      { name: 'Scottsdale Golf Trip', slug: 'scottsdale-arizona' },
      { name: 'Austin & Texas Hill Country', slug: 'austin-texas-hill-country' },
    ],
  },
  {
    destination: 'Chicago & Midwest Golf',
    slug: 'chicago-midwest',
    metaTitle: 'Chicago Golf Trip Guide — Best Courses & Midwest Golf (2026)',
    metaDescription: 'Plan a Chicago-area golf trip. From historic private clubs to top-ranked public tracks, the Midwest offers world-class golf May through October.',
    heroIntro: 'Chicago sits at the epicenter of Midwest golf, surrounded by more Top 100 courses per capita than almost anywhere in America — including the birthplace of American golf.',
    overview: 'The Chicago area boasts an extraordinary concentration of elite golf courses. Chicago Golf Club in Wheaton is the first 18-hole golf course in the United States (1893). Medinah Country Club has hosted three U.S. Opens, two PGA Championships, and a Ryder Cup. For accessible golf, Cog Hill Dubsdread offers championship-caliber public golf at municipal prices. The flat Midwest terrain is offset by creative routing, mature trees, and courses shaped by legends from C.B. Macdonald to Dick Wilson. Beyond golf, Chicago offers world-class dining, architecture tours, and one of America\'s great urban waterfronts.',
    bestTimeToVisit: 'May through October is the golf season, with June through September offering the best weather (70s-80s°F). May and October can be cool but offer lower rates and stunning fall colors. The season is short — courses close from late November through March.',
    gettingThere: 'O\'Hare International Airport (ORD) and Chicago Midway (MDW) provide extensive domestic and international connections. Most top courses are 30-60 minutes from downtown in the western and southern suburbs. A rental car is essential.',
    whereToStay: 'Downtown Chicago offers the best dining and nightlife access — stay in the Loop, River North, or Gold Coast and commute to suburban courses. For a golf-focused trip, Eaglewood Resort in Itasca or the Hilton Chicago/Oak Brook Hills provide proximity to western suburb courses.',
    topCourses: getTopCoursesForCities(['chicago-illinois']),
    cities: [
      { name: 'Chicago', slug: 'chicago-illinois' },
    ],
    faqs: [
      { question: 'What is the golf season in Chicago?', answer: 'The golf season runs roughly from May through October, with June through September offering the most reliable weather. April and late October golf is possible but weather-dependent. Courses are closed November through March.' },
      { question: 'Are there good public courses near Chicago?', answer: 'Yes — Cog Hill Dubsdread is one of America\'s great public courses and a former PGA Tour venue. Harborside in south Chicago, Cantigny in Wheaton, and several forest preserve courses offer excellent public golf.' },
    ],
    relatedDestinations: [
      { name: 'Pinehurst & NC Sandhills', slug: 'pinehurst-nc-sandhills' },
      { name: 'Scottsdale Golf Trip', slug: 'scottsdale-arizona' },
    ],
  },
  {
    destination: 'Lowcountry South Carolina',
    slug: 'lowcountry-south-carolina',
    metaTitle: 'Lowcountry Golf Trip Guide — Hilton Head, Myrtle Beach & SC Golf (2026)',
    metaDescription: 'Plan a Lowcountry South Carolina golf trip. From Harbour Town\'s lighthouse to Caledonia\'s plantation setting, discover the Grand Strand and Sea Islands.',
    heroIntro: 'South Carolina\'s Lowcountry is one of golf\'s most romantic settings — live oaks draped in Spanish moss, salt marshes teeming with wildlife, and iconic courses like Harbour Town Golf Links where Pete Dye and Jack Nicklaus created a masterpiece.',
    overview: 'The South Carolina coast offers two distinct golf corridors. Hilton Head Island and the surrounding Lowcountry deliver refined, upscale resort golf anchored by Harbour Town and private gems like May River and Colleton River. Two hours north, the Myrtle Beach Grand Strand is America\'s most concentrated golf destination with 80+ courses offering outstanding value. Mike Strantz\'s Caledonia and True Blue in Pawleys Island are the Grand Strand\'s crown jewels. Together, these two regions offer a South Carolina golf trip that covers luxury, value, history, and architectural variety.',
    bestTimeToVisit: 'March through May and September through November. Spring brings azalea and dogwood blooms across the Lowcountry. Fall offers warm temperatures with less humidity. Summer is playable but hot and humid. Winter is mild with the lowest rates.',
    gettingThere: 'For Hilton Head: fly into Savannah/Hilton Head International Airport (SAV), 45 minutes away. For Myrtle Beach: fly directly into Myrtle Beach International Airport (MYR). Combining both requires a 4-hour drive via I-95.',
    whereToStay: 'On Hilton Head, Sea Pines Resort puts you closest to Harbour Town. Palmetto Dunes offers a central island location with its own courses. In Myrtle Beach, Pawleys Island is the quieter, more upscale base near Caledonia and True Blue. North Myrtle Beach has the most lodging options and nightlife.',
    topCourses: getTopCoursesForCities(['hilton-head-south-carolina', 'myrtle-beach-south-carolina']),
    cities: [
      { name: 'Hilton Head', slug: 'hilton-head-south-carolina' },
      { name: 'Myrtle Beach', slug: 'myrtle-beach-south-carolina' },
    ],
    faqs: [
      { question: 'Should I choose Hilton Head or Myrtle Beach?', answer: 'Hilton Head is more upscale, relaxed, and family-oriented with premium resort courses. Myrtle Beach offers more courses, more nightlife, and better value. Serious golfers seeking architecture often prefer Hilton Head (Harbour Town, May River) plus a day trip to Pawleys Island for Caledonia.' },
      { question: 'What is the best course in the Lowcountry?', answer: 'Harbour Town Golf Links on Hilton Head is the most iconic (PGA Tour host). Caledonia Golf & Fish Club in Pawleys Island is arguably the most beautiful public course in the Southeast. Both are bucket-list experiences.' },
    ],
    relatedDestinations: [
      { name: 'Pinehurst & NC Sandhills', slug: 'pinehurst-nc-sandhills' },
      { name: 'South Florida Golf', slug: 'south-florida' },
    ],
  },
  {
    destination: 'Las Vegas & Desert West',
    slug: 'las-vegas-desert-west',
    metaTitle: 'Las Vegas Golf Trip Guide — Best Desert Courses & Planning (2026)',
    metaDescription: 'Plan a Las Vegas golf trip. From the $60M Shadow Creek to Pete Dye\'s Paiute, discover desert golf paired with world-class entertainment.',
    heroIntro: 'Las Vegas offers a golf trip experience unlike anywhere else — play Shadow Creek in the morning, dine at a world-class restaurant at night, and tee it up at Cascata\'s desert canyon the next day. It\'s golf and entertainment fused at the highest level.',
    overview: 'Las Vegas has evolved from a golf afterthought to a legitimate destination course market. Shadow Creek ($60M Tom Fazio creation) is universally ranked among America\'s best resort courses. Cascata\'s 418-foot waterfall and desert canyon setting is visually unmatched. TPC Las Vegas hosts the PGA Tour\'s Shriners Open. And Pete Dye\'s Paiute Wolf Course stretches to 7,604 yards of desert challenge at public pricing. The non-golf portfolio — dining, shows, nightlife — is arguably the strongest of any golf destination in America.',
    bestTimeToVisit: 'October through May for ideal golf weather. Peak season is February through April with the best balance of warm days and cool nights. Summer exceeds 110°F — only dawn rounds are tolerable, but green fees drop 50-70%.',
    gettingThere: 'Harry Reid International Airport (LAS) has nonstop service from virtually every U.S. city. Most courses are 15-30 minutes from the Strip. Shadow Creek provides limo transportation. Cascata is 30 minutes southeast in Boulder City.',
    whereToStay: 'Stay on the Strip at an MGM Resorts property (Bellagio, Aria) for Shadow Creek access. Wynn/Encore for Wynn Golf Club. Red Rock Casino in Summerlin for proximity to TPC Las Vegas and Paiute. Downtown Las Vegas has emerged as a hipper, more affordable alternative.',
    topCourses: getTopCoursesForCities(['las-vegas-nevada']),
    cities: [
      { name: 'Las Vegas', slug: 'las-vegas-nevada' },
    ],
    faqs: [
      { question: 'How much does it cost to play golf in Las Vegas?', answer: 'The range is enormous: $75-$175 for quality public courses (Paiute, Bear\'s Best), $200-$400 for premium resort experiences (Cascata, Rio Secco), and $500-$750 for ultra-premium (Shadow Creek, Wynn). Many courses offer afternoon twilight rates at significant discounts.' },
      { question: 'Is a Las Vegas golf trip good for groups?', answer: 'Las Vegas is arguably the best group golf trip destination in America. The combination of quality courses, world-class dining and entertainment, convenient flights, and abundant lodging makes it ideal for buddy trips and corporate outings.' },
    ],
    relatedDestinations: [
      { name: 'Scottsdale Golf Trip', slug: 'scottsdale-arizona' },
      { name: 'Southern California Golf', slug: 'southern-california' },
    ],
  },
  {
    destination: 'Colorado Front Range Golf',
    slug: 'colorado-front-range',
    metaTitle: 'Colorado Golf Trip Guide — Denver, Front Range & Mountain Courses (2026)',
    metaDescription: 'Plan a Colorado golf trip. From Cherry Hills to Arrowhead\'s red rocks, discover mile-high golf with Rocky Mountain views and 10-15% extra distance.',
    heroIntro: 'Colorado golf is defined by its extraordinary setting. Play through 300-million-year-old red rock formations at Arrowhead. Hit drives that fly 15% farther at mile-high elevation. Stand on elevated tees with 100-mile Rocky Mountain views. This is golf with a view — and a physics lesson.',
    overview: 'The Front Range corridor from Castle Rock to Boulder is Colorado\'s golf hub, offering a mix of elite private clubs (Cherry Hills, Castle Pines, Colorado Golf Club), creative public courses (Arrowhead, CommonGround, Fossil Trace, Bear Dance), and stunning mountain scenery. The altitude adds 10-15% distance at Denver elevation and 15-20% at mountain resort courses, creating a uniquely Colorado golf experience. The state\'s 300+ annual days of sunshine and dramatic afternoon thunderstorms (which pass quickly) define the summer golf season.',
    bestTimeToVisit: 'Late May through September for Front Range courses. Mountain resort courses open mid-June through mid-October. June and September offer the most reliable weather. July and August bring daily afternoon thunderstorms that usually clear by 4 PM.',
    gettingThere: 'Denver International Airport (DEN) has extensive domestic and international service. Most courses are 20-60 minutes from the airport along the I-25 and I-70 corridors. A rental car is essential. Mountain resort courses (Vail, Beaver Creek) are 90-120 minutes west on I-70.',
    whereToStay: 'Stay in downtown Denver for restaurants and nightlife, commuting 20-40 minutes to courses. For a golf-focused trip, Castle Rock or Larkspur (between Denver and Colorado Springs) provide proximity to Bear Dance, Castle Pines area courses, and Arrowhead. Mountain resort towns (Vail, Beaver Creek) offer premium summer golf-and-dining packages.',
    topCourses: getTopCoursesForCities(['denver-colorado']),
    cities: [
      { name: 'Denver', slug: 'denver-colorado' },
    ],
    faqs: [
      { question: 'How much farther does the ball fly at altitude in Colorado?', answer: 'At Denver elevation (5,280 feet), expect 10-15% more distance. At mountain resort courses (7,000-9,000 feet), add 15-20%. A sea-level 150-yard shot plays about 170 yards in Denver. This affects all shots — drives, irons, and especially wedges. Club selection adjustments are essential.' },
      { question: 'What is the best public course near Denver?', answer: 'Arrowhead (red rock formations) offers the most stunning visual experience. CommonGround (Tom Doak municipal) offers the best architecture. Bear Dance (7,750 yards) offers the most challenging test. Fossil Trace (65-million-year-old fossils) offers the most unique experience.' },
    ],
    relatedDestinations: [
      { name: 'Scottsdale Golf Trip', slug: 'scottsdale-arizona' },
      { name: 'Las Vegas & Desert West', slug: 'las-vegas-desert-west' },
    ],
  },
];

/** Get travel destination by slug */
export function getTravelBySlug(slug: string): TravelData | undefined {
  return travelDestinations.find(t => t.slug === slug);
}

/** Get all travel destination slugs */
export function getAllTravelSlugs(): string[] {
  return travelDestinations.map(t => t.slug);
}
