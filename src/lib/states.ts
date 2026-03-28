import type { StateData } from './types';

export const stateData: Record<string, StateData> = {
  'texas': {
    state: 'Texas', stateAbbr: 'TX', slug: 'texas',
    metaTitle: 'Best Golf Courses in Texas (2026) | Rankings & Guide',
    metaDescription: 'Explore the best golf courses in Texas for 2026. From Hill Country gems to championship DFW clubs, discover the Lone Star State\'s finest golf.',
    heroIntro: 'Texas golf is as big and bold as the state itself. From the limestone bluffs of the Hill Country to the piney woods of East Texas and the rolling blackland prairies of North Texas, the Lone Star State delivers world-class golf in distinctly Texan settings.',
    overview: 'With over 800 golf courses across its vast terrain, Texas offers an extraordinary diversity of golf experiences. The state has produced legends (Ben Hogan, Byron Nelson, Ben Crenshaw, Tom Kite, Jordan Spieth) and hosts multiple PGA Tour events. Year-round playability in most regions makes Texas one of America\'s most active golf markets.',
    topCities: [
      { name: 'Austin', slug: 'austin-texas' }, { name: 'Dallas', slug: 'dallas-texas' }, { name: 'Houston', slug: 'houston-texas' },
    ],
    topCourses: [],
    bestTimeToPlay: 'October through May across most of the state. The Hill Country and DFW are pleasant in fall and spring, while Houston and the Gulf Coast are best November through April.',
    golfRegions: [
      { name: 'Hill Country', description: 'Dramatic elevation changes, limestone outcroppings, and scenic beauty around Austin and San Antonio.' },
      { name: 'DFW Metroplex', description: 'The state\'s deepest collection of elite private and public courses across rolling blackland prairie.' },
      { name: 'Houston & East Texas', description: 'Piney woods, Gulf Coast influences, and a rapidly evolving golf scene anchored by Memorial Park.' },
    ],
    faqs: [
      { question: 'What is the best golf course in Texas?', answer: 'Dallas National (Tom Fazio) and Bluejack National (Tiger Woods/TGR Design) consistently rank at the top. Among public courses, Memorial Park in Houston (Tom Doak renovation) is the crown jewel.' },
      { question: 'How many golf courses are in Texas?', answer: 'Texas has over 800 golf courses, making it one of the largest golf markets in the United States by sheer volume.' },
    ],
    relatedStates: [
      { name: 'Arizona', slug: 'arizona' }, { name: 'Florida', slug: 'florida' },
    ],
  },
  'florida': {
    state: 'Florida', stateAbbr: 'FL', slug: 'florida',
    metaTitle: 'Best Golf Courses in Florida (2026) | Rankings & Guide',
    metaDescription: 'Discover the best golf courses in Florida for 2026. From Streamsong to TPC Sawgrass, explore the Sunshine State\'s top courses by region.',
    heroIntro: 'Florida is America\'s year-round golf paradise. With more courses than any other state, perpetual sunshine, and a golf culture that permeates every corner from the Panhandle to the Keys, the Sunshine State is where America plays golf.',
    overview: 'Florida\'s flat terrain might seem limiting, but creative architects have turned it into an advantage — from Streamsong\'s moonscape former phosphate mines to Pete Dye\'s island greens. The state hosts multiple PGA Tour events, serves as home base for countless touring professionals, and offers golf at every price point.',
    topCities: [
      { name: 'Orlando', slug: 'orlando-florida' }, { name: 'Tampa', slug: 'tampa-florida' }, { name: 'Miami', slug: 'miami-florida' },
    ],
    topCourses: [],
    bestTimeToPlay: 'October through April is peak season statewide. Summer brings afternoon thunderstorms but dramatic price drops. South Florida is warmest in winter; North Florida can get cool December through February.',
    golfRegions: [
      { name: 'Central Florida', description: 'Orlando\'s resort corridor and the revolutionary Streamsong Resort put Central Florida on the serious golf map.' },
      { name: 'Tampa Bay', description: 'Innisbrook, World Woods, and proximity to Streamsong make Tampa Bay a diverse golf region.' },
      { name: 'South Florida', description: 'Miami, Naples, and Palm Beach offer tropical golf with historic courses and luxury resorts.' },
      { name: 'Northeast Florida', description: 'TPC Sawgrass and the World Golf Village anchor the Jacksonville/St. Augustine golf corridor.' },
    ],
    faqs: [
      { question: 'What is the best golf course in Florida?', answer: 'Streamsong Resort\'s three courses (Red, Blue, and Black) are collectively the most acclaimed golf destination in Florida. Seminole Golf Club in Juno Beach is the most revered private club.' },
      { question: 'How many golf courses are in Florida?', answer: 'Florida has approximately 1,300 golf courses — more than any other state in the country — spread across virtually every region.' },
    ],
    relatedStates: [
      { name: 'North Carolina', slug: 'north-carolina' }, { name: 'South Carolina', slug: 'south-carolina' },
    ],
  },
  'california': {
    state: 'California', stateAbbr: 'CA', slug: 'california',
    metaTitle: 'Best Golf Courses in California (2026) | Rankings & Guide',
    metaDescription: 'Explore the best golf courses in California for 2026. From Pebble Beach to Riviera, discover the Golden State\'s legendary courses and hidden gems.',
    heroIntro: 'California is golf\'s dreamland. From the legendary clifftop drama of Pebble Beach to the architectural genius of Cypress Point, and from Riviera\'s Hollywood glamour to the desert splendor of the Coachella Valley, the Golden State offers golf experiences that span the full spectrum of beauty and challenge.',
    overview: 'California\'s diverse geography — coastline, deserts, mountains, valleys — creates an unmatched variety of golf settings. The state is home to arguably the most famous course in the world (Pebble Beach), the most exclusive (Cypress Point), and some of the best public values (Rustic Canyon, Pacific Grove). Year-round play is possible in most regions.',
    topCities: [
      { name: 'San Diego', slug: 'san-diego-california' }, { name: 'Los Angeles', slug: 'los-angeles-california' }, { name: 'San Francisco', slug: 'san-francisco-california' }, { name: 'Palm Springs', slug: 'palm-springs-california' },
    ],
    topCourses: [],
    bestTimeToPlay: 'Year-round in Southern California. Central Coast (Pebble Beach area) is best May through October. Desert courses (Palm Springs) are seasonal — October through April.',
    golfRegions: [
      { name: 'Monterey Peninsula', description: 'Pebble Beach, Cypress Point, and Spyglass Hill form golf\'s most famous coastline.' },
      { name: 'Los Angeles', description: 'Riviera, LACC, and a deep collection of diverse courses across the sprawling metro.' },
      { name: 'San Diego', description: 'Torrey Pines and year-round perfect weather define America\'s finest golf city.' },
      { name: 'Desert', description: 'Palm Springs, La Quinta, and the Coachella Valley offer winter desert golf perfection.' },
    ],
    faqs: [
      { question: 'What is the best golf course in California?', answer: 'Cypress Point Club is generally considered the finest, though it\'s extremely private. Pebble Beach Golf Links is the most famous and is open to the public (at a premium price). For value, Rustic Canyon and Pacific Grove are exceptional.' },
    ],
    relatedStates: [
      { name: 'Arizona', slug: 'arizona' },
    ],
  },
  'arizona': {
    state: 'Arizona', stateAbbr: 'AZ', slug: 'arizona',
    metaTitle: 'Best Golf Courses in Arizona (2026) | Rankings & Guide',
    metaDescription: 'Discover the best golf courses in Arizona for 2026. From Scottsdale\'s desert masterpieces to Tucson\'s hidden gems, explore Arizona golf.',
    heroIntro: 'Arizona is the desert golf capital of the world. The Sonoran Desert\'s dramatic saguaro-studded landscapes, more than 300 days of annual sunshine, and an extraordinary concentration of quality courses make the Grand Canyon State a top-tier golf destination.',
    overview: 'With over 300 courses concentrated primarily in the Phoenix/Scottsdale corridor and Tucson, Arizona offers one of America\'s densest and most distinctive golf markets. The desert aesthetic — towering saguaros, red rock formations, mountain backdrops — creates visually stunning courses unlike anything else in the game.',
    topCities: [
      { name: 'Scottsdale', slug: 'scottsdale-arizona' }, { name: 'Phoenix', slug: 'phoenix-arizona' }, { name: 'Tucson', slug: 'tucson-arizona' },
    ],
    topCourses: [],
    bestTimeToPlay: 'November through April is peak season with ideal weather. Summer prices drop dramatically (50-70%) but temperatures regularly exceed 110°F.',
    golfRegions: [
      { name: 'Scottsdale', description: 'The epicenter of Arizona golf with the highest concentration of resort, public, and private courses.' },
      { name: 'Phoenix', description: 'More affordable alternatives to Scottsdale with outstanding public and resort options.' },
      { name: 'Tucson', description: 'A quieter, more affordable desert golf scene with dramatic mountain-framed courses.' },
    ],
    faqs: [
      { question: 'What is the best public golf course in Arizona?', answer: 'We-Ko-Pa\'s Saguaro Course (Coore & Crenshaw) and Troon North\'s Monument Course are generally considered the top public courses. Quintero, Ak-Chin Southern Dunes, and TPC Scottsdale are also outstanding options.' },
    ],
    relatedStates: [
      { name: 'California', slug: 'california' }, { name: 'Texas', slug: 'texas' },
    ],
  },
  'north-carolina': {
    state: 'North Carolina', stateAbbr: 'NC', slug: 'north-carolina',
    metaTitle: 'Best Golf Courses in North Carolina (2026) | Rankings & Guide',
    metaDescription: 'Explore the best golf courses in North Carolina for 2026. From Pinehurst No. 2 to Quail Hollow, discover the Tar Heel State\'s legendary golf.',
    heroIntro: 'North Carolina is the cradle of American golf in many ways. Pinehurst No. 2 has hosted more championships than any course in the country, the Sandhills region is a pilgrimage site for golf purists, and Charlotte\'s Quail Hollow has emerged as one of the PGA Tour\'s premier venues.',
    overview: 'From the Sandhills to the Blue Ridge Mountains, North Carolina offers diverse and distinguished golf. The state\'s golf heritage runs deep, with Donald Ross\'s Pinehurst legacy as the crown jewel and modern developments in Charlotte and the mountains adding new chapters to the story.',
    topCities: [
      { name: 'Pinehurst', slug: 'pinehurst-north-carolina' }, { name: 'Charlotte', slug: 'charlotte-north-carolina' },
    ],
    topCourses: [],
    bestTimeToPlay: 'March through May and September through November are ideal. The Sandhills\' sandy soil provides excellent drainage, making it playable year-round. Mountain courses have shorter seasons (April–October).',
    golfRegions: [
      { name: 'Sandhills', description: 'Pinehurst, Southern Pines, and the densest collection of quality golf in the eastern U.S.' },
      { name: 'Charlotte', description: 'Quail Hollow and a growing collection of private and public courses in the Queen City.' },
      { name: 'Blue Ridge Mountains', description: 'Mountain golf with dramatic elevation and cooler summer temperatures.' },
    ],
    faqs: [
      { question: 'Is Pinehurst worth the trip?', answer: 'For any serious golfer, Pinehurst is a must-visit. No. 2 is a once-in-a-lifetime experience, and the surrounding Sandhills courses (Pine Needles, Tobacco Road, Mid Pines) offer incredible variety.' },
    ],
    relatedStates: [
      { name: 'South Carolina', slug: 'south-carolina' }, { name: 'Florida', slug: 'florida' },
    ],
  },
  'south-carolina': {
    state: 'South Carolina', stateAbbr: 'SC', slug: 'south-carolina',
    metaTitle: 'Best Golf Courses in South Carolina (2026) | Rankings & Guide',
    metaDescription: 'Discover the best golf courses in South Carolina for 2026. From Kiawah Island to Hilton Head, explore the Palmetto State\'s Lowcountry golf.',
    heroIntro: 'South Carolina\'s Lowcountry is one of golf\'s most romantic settings. Kiawah Island\'s Ocean Course, Harbour Town\'s iconic lighthouse finish, and the moss-draped beauty of the Lowcountry create a golf experience steeped in Southern charm and world-class architecture.',
    overview: 'From the windswept dunes of Kiawah to the resort paradise of Hilton Head and the growth along the Grand Strand, South Carolina delivers resort golf at the highest level. The state\'s mild climate and Lowcountry aesthetics make it a perennial favorite for golf travelers.',
    topCities: [
      { name: 'Hilton Head', slug: 'hilton-head-south-carolina' }, { name: 'Myrtle Beach', slug: 'myrtle-beach-south-carolina' },
    ],
    topCourses: [],
    bestTimeToPlay: 'March through May and September through November. Spring in the Lowcountry is particularly beautiful with azaleas and dogwoods in bloom.',
    golfRegions: [
      { name: 'Kiawah Island', description: 'Home of the Ocean Course, one of the most dramatic seaside layouts in the world.' },
      { name: 'Hilton Head Island', description: 'Harbour Town and a dense collection of quality resort courses in a family-friendly setting.' },
      { name: 'Myrtle Beach', description: 'The Grand Strand offers exceptional value with over 80 courses in a concentrated area.' },
    ],
    faqs: [
      { question: 'What is the best golf course in South Carolina?', answer: 'Kiawah Island\'s Ocean Course, host of the 2021 PGA Championship and the unforgettable 1991 Ryder Cup, is widely considered the state\'s finest. Harbour Town Golf Links at Hilton Head is the most iconic.' },
    ],
    relatedStates: [
      { name: 'North Carolina', slug: 'north-carolina' }, { name: 'Florida', slug: 'florida' },
    ],
  },
  'nevada': {
    state: 'Nevada', stateAbbr: 'NV', slug: 'nevada',
    metaTitle: 'Best Golf Courses in Nevada (2026) | Rankings & Guide',
    metaDescription: 'Discover the best golf courses in Nevada for 2026. From Shadow Creek to Cascata, explore the Silver State\'s desert golf scene centered on Las Vegas.',
    heroIntro: 'Nevada golf is synonymous with Las Vegas — and the city has built a golf portfolio that rivals its entertainment reputation. Shadow Creek, the $60 million Tom Fazio oasis, is universally ranked among America\'s best, while Pete Dye\'s Paiute Resort courses and the dramatic Cascata canyon layout prove the desert can produce extraordinary golf.',
    overview: 'While Las Vegas dominates Nevada\'s golf landscape, the state also offers courses in Reno, Lake Tahoe, and Mesquite. The desert climate provides year-round play (with summer heat caveats), and the thin desert air adds noticeable distance. From ultra-premium resort experiences to accessible public desert designs, Nevada\'s golf scene has matured dramatically in the past two decades.',
    topCities: [
      { name: 'Las Vegas', slug: 'las-vegas-nevada' },
    ],
    topCourses: [],
    bestTimeToPlay: 'October through May for Las Vegas. Summer exceeds 110°F. Northern Nevada (Reno/Tahoe) plays May through October.',
    golfRegions: [
      { name: 'Las Vegas', description: 'The desert golf capital with ultra-premium resorts, PGA Tour venues, and accessible public courses.' },
      { name: 'Reno/Lake Tahoe', description: 'Mountain golf at elevation with stunning Sierra Nevada scenery and cooler summer temperatures.' },
      { name: 'Mesquite', description: 'Budget-friendly desert golf hub 80 miles northeast of Las Vegas with notable Wolf Creek Golf Club.' },
    ],
    faqs: [
      { question: 'What is the best golf course in Nevada?', answer: 'Shadow Creek, a Tom Fazio design built for Steve Wynn at a cost of $60 million, is unanimously ranked as the best course in Nevada. It\'s accessible exclusively through MGM Resorts properties.' },
    ],
    relatedStates: [
      { name: 'Arizona', slug: 'arizona' }, { name: 'California', slug: 'california' },
    ],
  },
  'colorado': {
    state: 'Colorado', stateAbbr: 'CO', slug: 'colorado',
    metaTitle: 'Best Golf Courses in Colorado (2026) | Rankings & Guide',
    metaDescription: 'Explore the best golf courses in Colorado for 2026. From Cherry Hills to Arrowhead\'s red rocks, discover mile-high golf with Rocky Mountain views.',
    heroIntro: 'Colorado golf combines Rocky Mountain drama with mile-high physics. At 5,000-6,500 feet elevation, the ball flies 10-15% farther, adding an exhilarating dimension to every swing. Cherry Hills — site of Arnold Palmer\'s legendary 1960 charge — anchors a state that pairs world-class championship courses with some of the most visually stunning public golf in America.',
    overview: 'The Front Range corridor from Castle Rock to Boulder contains Colorado\'s densest golf market, with the Rocky Mountains providing a jaw-dropping backdrop. The state\'s 300+ days of sunshine, dramatic terrain, and creative architects (Jim Engh has been particularly prolific here) create a golf experience that rewards the trip. From Tom Doak\'s exceptional CommonGround municipal to 65-million-year-old fossils at Fossil Trace, Colorado golf surprises.',
    topCities: [
      { name: 'Denver', slug: 'denver-colorado' },
    ],
    topCourses: [],
    bestTimeToPlay: 'May through October. June and September offer the best conditions. Afternoon thunderstorms are common in summer but usually brief. Mountain courses have shorter seasons (June–September).',
    golfRegions: [
      { name: 'Denver Front Range', description: 'The state\'s golf hub with championship private clubs, creative public courses, and mountain-view layouts.' },
      { name: 'Colorado Springs', description: 'The Broadmoor and several quality courses at slightly higher elevation south of Denver.' },
      { name: 'Mountain Resorts', description: 'Vail, Beaver Creek, and Aspen offer premium summer golf at 7,000-9,000 feet elevation with mountain scenery.' },
    ],
    faqs: [
      { question: 'How does altitude affect golf in Colorado?', answer: 'At Denver\'s elevation (5,280 feet), expect 10-15% more distance on all shots. At mountain resort courses (7,000-9,000 feet), add 15-20%. Adjust club selection accordingly — most visitors initially club too much.' },
      { question: 'What is the best public golf course in Colorado?', answer: 'Arrowhead Golf Club, set among dramatic red rock formations near Red Rocks Amphitheatre, is the most visually stunning. CommonGround (Tom Doak) offers the best pure golf architecture at municipal pricing.' },
    ],
    relatedStates: [
      { name: 'Arizona', slug: 'arizona' },
    ],
  },
  'new-york': {
    state: 'New York', stateAbbr: 'NY', slug: 'new-york',
    metaTitle: 'Best Golf Courses in New York (2026) | Rankings & Guide',
    metaDescription: 'Find the best golf courses in New York State for 2026. From Bethpage Black to Shinnecock Hills, explore the Empire State\'s legendary championship golf.',
    heroIntro: 'New York State is home to an extraordinary concentration of championship golf. Bethpage Black, Shinnecock Hills, Winged Foot, Oakmont — the list of legendary courses within the Empire State and its immediate surroundings reads like a U.S. Open honor roll.',
    overview: 'While the golf season is shorter than Sun Belt states, New York compensates with an unmatched density of world-class courses. Long Island, Westchester County, and the Hudson Valley contain some of the most storied names in golf, and Bethpage Black gives every golfer the chance to test a championship layout.',
    topCities: [
      { name: 'New York City Area', slug: 'new-york-new-york' },
    ],
    topCourses: [],
    bestTimeToPlay: 'May through October, with September and October offering spectacular fall foliage. June is typically the warmest and most pleasant month for golf.',
    golfRegions: [
      { name: 'Long Island', description: 'Bethpage, Shinnecock Hills, National Golf Links, and the Hamptons golf corridor.' },
      { name: 'Westchester County', description: 'Winged Foot, Quaker Ridge, and a dense collection of elite private clubs.' },
      { name: 'Hudson Valley', description: 'Scenic courses amid rolling hills and historic estates north of the city.' },
    ],
    faqs: [
      { question: 'What is the best public golf course in New York?', answer: 'Bethpage Black on Long Island is not only the best public course in New York — it\'s arguably the most famous public course in America, having hosted two U.S. Opens and a PGA Championship.' },
    ],
    relatedStates: [],
  },
  'oregon': {
    state: 'Oregon', stateAbbr: 'OR', slug: 'oregon',
    metaTitle: 'Best Golf Courses in Oregon (2026) | Bandon Dunes & Rankings',
    metaDescription: 'Discover the best golf courses in Oregon for 2026. From Bandon Dunes Resort\'s world-class links to Portland forest courses, explore Pacific Northwest golf.',
    heroIntro: 'Oregon punches far above its weight in American golf thanks to one transformative resort: Bandon Dunes. With five world-class links courses on the rugged southern coast — including Pacific Dunes, the #1 public course in America — Oregon has become a bucket-list pilgrimage for serious golfers worldwide.',
    overview: 'Oregon\'s golf identity begins and ends with Bandon Dunes, but the state offers much more. Portland\'s Pumpkin Ridge hosted Tiger Woods\' U.S. Amateur victories. Central Oregon\'s Bend-Sunriver corridor delivers mountain-and-river golf at Crosswater and Tetherow. The Pacific Northwest\'s lush forests frame courses throughout the Willamette Valley. And Bandon itself continues to expand — Sheep Ranch (2020) is the latest addition to what may be the finest collection of courses at a single resort in the world.',
    topCities: [
      { name: 'Portland & Oregon', slug: 'portland-oregon' },
    ],
    topCourses: [],
    bestTimeToPlay: 'June through September for most of Oregon. Bandon Dunes plays year-round — the coastal climate is surprisingly mild in winter, though windy and wet. Central Oregon (Bend) is best mid-June through September.',
    golfRegions: [
      { name: 'Bandon Dunes', description: 'Five world-class links courses on the rugged southern Oregon coast — America\'s premier pure golf destination.' },
      { name: 'Portland/Willamette Valley', description: 'Lush forest courses near Portland including Pumpkin Ridge (U.S. Amateur host).' },
      { name: 'Central Oregon', description: 'Bend and Sunriver offer volcanic-soil mountain golf with Cascade Range views.' },
    ],
    faqs: [
      { question: 'What is the best golf course in Oregon?', answer: 'Pacific Dunes at Bandon Dunes Resort is the #1 public course in America and the best course in Oregon. Tom Doak\'s cliff-edge routing on the Pacific Ocean is considered one of the great courses built in the modern era.' },
      { question: 'How many courses are at Bandon Dunes?', answer: 'Bandon Dunes Resort has five full 18-hole courses (Bandon Dunes, Pacific Dunes, Bandon Trails, Old Macdonald, Sheep Ranch) plus The Preserve, a 13-hole par-3 course. Plan at least 3-4 days to experience them all.' },
    ],
    relatedStates: [
      { name: 'California', slug: 'california' },
    ],
  },
  'tennessee': {
    state: 'Tennessee', stateAbbr: 'TN', slug: 'tennessee',
    metaTitle: 'Best Golf Courses in Tennessee (2026) | Rankings & Guide',
    metaDescription: 'Explore the best golf courses in Tennessee for 2026. From the Honors Course to Nashville\'s growing scene, discover Volunteer State golf.',
    heroIntro: 'Tennessee\'s golf gem is The Honors Course — Pete Dye\'s masterwork near Chattanooga that has hosted the U.S. Amateur, NCAA Championship, and numerous USGA events. It\'s widely ranked as the finest course in the state. Nashville\'s rapidly growing golf scene and Middle Tennessee\'s rolling hills add further depth to the Volunteer State.',
    overview: 'Tennessee golf spans from the rolling hills of Middle Tennessee to the dramatic bluffs along the Cumberland River. Nashville\'s growth has attracted investment in new private clubs and improvements to public courses, while the Hermitage\'s Presidents Reserve provides championship-caliber public golf with river views. The state\'s four-season climate allows for near year-round play.',
    topCities: [
      { name: 'Nashville', slug: 'nashville-tennessee' },
    ],
    topCourses: [],
    bestTimeToPlay: 'April through June and September through November. Spring and fall offer beautiful foliage and moderate temperatures. Summers are warm and humid but playable.',
    golfRegions: [
      { name: 'Nashville/Middle Tennessee', description: 'Rolling hill country terrain with a growing collection of private clubs and public courses.' },
      { name: 'Chattanooga', description: 'Home to The Honors Course, Tennessee\'s finest, plus scenic mountain and river valley courses.' },
      { name: 'Memphis', description: 'TPC Southwind (FedEx St. Jude Championship host) anchors western Tennessee golf.' },
    ],
    faqs: [
      { question: 'What is the best golf course in Tennessee?', answer: 'The Honors Course near Chattanooga, a Pete Dye design that has hosted the U.S. Amateur and NCAA Championship, is unanimously ranked as the finest course in Tennessee.' },
    ],
    relatedStates: [
      { name: 'North Carolina', slug: 'north-carolina' }, { name: 'Georgia', slug: 'georgia' },
    ],
  },
  'georgia': {
    state: 'Georgia', stateAbbr: 'GA', slug: 'georgia',
    metaTitle: 'Best Golf Courses in Georgia (2026) | Rankings & Guide',
    metaDescription: 'Discover the best golf courses in Georgia for 2026. From Augusta National to East Lake, explore the Peach State\'s legendary championship courses.',
    heroIntro: 'Georgia is home to the most famous golf course on Earth: Augusta National Golf Club. But the Peach State\'s golf pedigree extends well beyond the Masters — Bobby Jones\'s home course at East Lake hosts the PGA Tour Championship, Peachtree was co-designed by Jones himself, and the rolling Piedmont and coastal islands offer diverse and distinguished golf.',
    overview: 'Georgia golf spans from the red-clay Piedmont of metro Atlanta to the moss-draped barrier islands on the coast. East Lake\'s championship legacy, Atlanta Athletic Club\'s major-hosting history, and the storied Sea Island resort corridor anchor a state with genuine golf depth. The mild climate allows nearly year-round play, and the state\'s proximity to Augusta — where the Masters transforms golf each April — gives Georgia an emotional hold on the game.',
    topCities: [
      { name: 'Atlanta', slug: 'atlanta-georgia' },
    ],
    topCourses: [],
    bestTimeToPlay: 'March through May and September through November. Spring in Georgia is spectacular with dogwood and azalea blooms (and of course, Masters week in April).',
    golfRegions: [
      { name: 'Atlanta Metro', description: 'East Lake, Peachtree, and a deep roster of private and public courses in the Piedmont.' },
      { name: 'Augusta', description: 'Home of Augusta National and the Masters — the most famous golf address in the world.' },
      { name: 'Coastal Georgia', description: 'Sea Island, St. Simons, and Jekyll Island offer resort golf in a Lowcountry island setting.' },
    ],
    faqs: [
      { question: 'Can you play Augusta National?', answer: 'No — Augusta National is one of the most exclusive private clubs in the world, accessible only by member invitation. The course is open only October through May, and the Masters Tournament each April is the only public-facing event.' },
    ],
    relatedStates: [
      { name: 'North Carolina', slug: 'north-carolina' }, { name: 'South Carolina', slug: 'south-carolina' },
    ],
  },
  'illinois': {
    state: 'Illinois', stateAbbr: 'IL', slug: 'illinois',
    metaTitle: 'Best Golf Courses in Illinois (2026) | Rankings & Guide',
    metaDescription: 'Find the best golf courses in Illinois for 2026. From Shoreacres to Medinah, explore Chicago-area championship courses and hidden Midwest gems.',
    heroIntro: 'Illinois is a quiet powerhouse in American golf. Chicago Golf Club — the first 18-hole course in the United States — was founded here in 1893, and the state\'s roster of championship venues (Medinah, Olympia Fields, Shoreacres) ranks among the most impressive in the country.',
    overview: 'The Chicago suburbs contain an extraordinary concentration of elite private courses, many designed by Golden Age masters like Seth Raynor, C.B. Macdonald, and Willie Park Jr. For public golfers, Cog Hill\'s Dubsdread and Harborside International deliver championship experiences at accessible prices. The flat Midwest terrain is offset by creative routing, mature hardwoods, and Lake Michigan\'s coastal influence on the North Shore.',
    topCities: [
      { name: 'Chicago', slug: 'chicago-illinois' },
    ],
    topCourses: [],
    bestTimeToPlay: 'May through October. June through September offers the best weather. Fall golf in October can be spectacular with autumn color.',
    golfRegions: [
      { name: 'Chicago North Shore', description: 'Shoreacres, Lake Shore, and elite private clubs on the Lake Michigan bluffs.' },
      { name: 'Western Suburbs', description: 'Chicago Golf Club, Medinah, Cantigny, and the densest collection of quality courses.' },
      { name: 'South Suburbs', description: 'Olympia Fields, Cog Hill, Harborside, and Rich Harvest Farms.' },
    ],
    faqs: [
      { question: 'What is the best golf course in Illinois?', answer: 'Shoreacres (Seth Raynor) and Chicago Golf Club (C.B. Macdonald) are the two highest-ranked courses in the state, both consistently in the national top 50. Among public courses, Cog Hill Dubsdread is the standard-bearer.' },
    ],
    relatedStates: [],
  },
  'washington': {
    state: 'Washington', stateAbbr: 'WA', slug: 'washington',
    metaTitle: 'Best Golf Courses in Washington State (2026) | Rankings & Guide',
    metaDescription: 'Discover the best golf courses in Washington State for 2026. From Chambers Bay to Pacific Northwest forest courses, explore Evergreen State golf.',
    heroIntro: 'Washington State earned its place on the championship golf map when Chambers Bay hosted the 2015 U.S. Open. The Pacific Northwest\'s lush forests, mountain views, and unique links-style courses along the coast create a diverse golf landscape.',
    overview: 'Washington golf spans from the rain-shadow courses of Eastern Washington to the lush Puget Sound region. Chambers Bay\'s links-style U.S. Open layout, Gamble Sands in the Columbia Basin, and the classic forest courses around Seattle provide variety that surprises visitors.',
    topCities: [{ name: 'Seattle', slug: 'seattle-washington' }],
    topCourses: [],
    bestTimeToPlay: 'June through September. Western Washington gets significant rain October through May. Eastern Washington is drier and sunnier year-round.',
    golfRegions: [
      { name: 'Puget Sound', description: 'Seattle-area courses through Pacific Northwest forest and along Puget Sound.' },
      { name: 'Eastern Washington', description: 'Drier climate, dramatic terrain, and Gamble Sands near Brewster.' },
    ],
    faqs: [{ question: 'What is the best golf course in Washington?', answer: 'Chambers Bay, the 2015 U.S. Open host in University Place near Tacoma, is the most famous. Gamble Sands (David McLay Kidd) in the Columbia Basin is considered the best pure golf experience.' }],
    relatedStates: [{ name: 'Oregon', slug: 'oregon' }],
  },
  'massachusetts': {
    state: 'Massachusetts', stateAbbr: 'MA', slug: 'massachusetts',
    metaTitle: 'Best Golf Courses in Massachusetts (2026) | Rankings & Guide',
    metaDescription: 'Explore the best golf courses in Massachusetts for 2026. From The Country Club to Cape Cod gems, discover New England championship golf.',
    heroIntro: 'Massachusetts is the cradle of American golf. The Country Club in Brookline hosted the first U.S. Open in 1913 and the 2022 U.S. Open, while Cape Cod and the Islands offer some of New England\'s most scenic golf.',
    overview: 'From the storied private clubs of suburban Boston to the windswept links of Cape Cod and Nantucket, Massachusetts delivers golf steeped in history and New England charm. The 2022 U.S. Open at The Country Club reminded the world of the state\'s championship pedigree.',
    topCities: [{ name: 'Boston', slug: 'boston-massachusetts' }],
    topCourses: [],
    bestTimeToPlay: 'May through October. September and October offer spectacular fall foliage.',
    golfRegions: [
      { name: 'Greater Boston', description: 'The Country Club, historic private clubs, and quality public courses.' },
      { name: 'Cape Cod & Islands', description: 'Seaside golf on Cape Cod, Nantucket, and Martha\'s Vineyard.' },
    ],
    faqs: [{ question: 'What is the best golf course in Massachusetts?', answer: 'The Country Club in Brookline, host of the 2022 U.S. Open, is the most prestigious. For public golf, Pinehills in Plymouth offers two excellent courses.' }],
    relatedStates: [{ name: 'New York', slug: 'new-york' }],
  },
  'michigan': {
    state: 'Michigan', stateAbbr: 'MI', slug: 'michigan',
    metaTitle: 'Best Golf Courses in Michigan (2026) | Rankings & Guide',
    metaDescription: 'Find the best golf courses in Michigan for 2026. From Arcadia Bluffs to Crystal Downs, explore Great Lakes championship golf.',
    heroIntro: 'Michigan is a hidden powerhouse of American golf. Crystal Downs is a top-10 national course, Arcadia Bluffs delivers cliffside drama on Lake Michigan, and the state\'s northern resort corridor offers summer golf at its finest.',
    overview: 'Michigan\'s Great Lakes location creates a unique golf environment. The state\'s northern resort area offers stunning summer golf at Arcadia Bluffs, Forest Dunes, and the Bay Harbor complex. Crystal Downs in Frankfort is one of the most revered private courses in the world.',
    topCities: [{ name: 'Detroit', slug: 'detroit-michigan' }],
    topCourses: [],
    bestTimeToPlay: 'June through September. Northern Michigan resort courses have a short but spectacular season.',
    golfRegions: [
      { name: 'Northern Michigan', description: 'Arcadia Bluffs, Crystal Downs, Forest Dunes, and summer resort golf.' },
      { name: 'Metro Detroit', description: 'Oakland Hills, historic private clubs, and public golf options.' },
    ],
    faqs: [{ question: 'What is the best golf course in Michigan?', answer: 'Crystal Downs Club in Frankfort (Alister MacKenzie/Perry Maxwell) is a perennial top-10 national course. For public golf, Arcadia Bluffs offers dramatic Lake Michigan cliffside golf.' }],
    relatedStates: [{ name: 'Illinois', slug: 'illinois' }],
  },
  'minnesota': {
    state: 'Minnesota', stateAbbr: 'MN', slug: 'minnesota',
    metaTitle: 'Best Golf Courses in Minnesota (2026) | Rankings & Guide',
    metaDescription: 'Discover the best golf courses in Minnesota for 2026. From Hazeltine to the Land of 10,000 Lakes, explore North Star State golf.',
    heroIntro: 'Minnesota punches above its weight in championship golf. Hazeltine National has hosted Ryder Cups, PGA Championships, and U.S. Opens, while the Minneapolis-St. Paul corridor offers a surprisingly deep collection of quality courses.',
    overview: 'The Land of 10,000 Lakes brings water features to nearly every course, and Minnesota\'s long summer days provide extended tee times during peak season. Hazeltine and Interlachen anchor the private side, while the state\'s best public courses take full advantage of the rolling glacial terrain.',
    topCities: [{ name: 'Minneapolis', slug: 'minneapolis-minnesota' }],
    topCourses: [],
    bestTimeToPlay: 'May through October. June through August offers the longest days and warmest weather.',
    golfRegions: [
      { name: 'Twin Cities', description: 'Hazeltine, Interlachen, and metro-area public and private courses.' },
      { name: 'Brainerd Lakes', description: 'Resort golf at Madden\'s, Giants Ridge, and Cragun\'s in Minnesota lake country.' },
    ],
    faqs: [{ question: 'What is the best golf course in Minnesota?', answer: 'Hazeltine National Golf Club, host of multiple major championships and the 2016 Ryder Cup, is the most prestigious. For public golf, the Brainerd Lakes area offers excellent resort options.' }],
    relatedStates: [{ name: 'Michigan', slug: 'michigan' }],
  },
  'pennsylvania': {
    state: 'Pennsylvania', stateAbbr: 'PA', slug: 'pennsylvania',
    metaTitle: 'Best Golf Courses in Pennsylvania (2026) | Rankings & Guide',
    metaDescription: 'Explore the best golf courses in Pennsylvania for 2026. From Oakmont to Merion, discover the Keystone State\'s legendary championship courses.',
    heroIntro: 'Pennsylvania is championship golf royalty. Oakmont, Merion, Aronimink, and Philadelphia Cricket Club form an unmatched corridor of championship venues, and the state has hosted more major championships than perhaps any other.',
    overview: 'The Philadelphia and Pittsburgh corridors contain an extraordinary concentration of championship courses. Oakmont\'s fearsome reputation, Merion\'s compact brilliance, and Pine Valley — the #1 course in the world (technically in New Jersey but closely associated with Philadelphia golf) — make Pennsylvania a pilgrimage destination for serious golfers.',
    topCities: [{ name: 'Philadelphia', slug: 'philadelphia-pennsylvania' }],
    topCourses: [],
    bestTimeToPlay: 'May through October. Fall foliage in October is spectacular on Pennsylvania courses.',
    golfRegions: [
      { name: 'Philadelphia', description: 'Merion, Aronimink, Pine Valley nearby, and numerous championship-caliber private clubs.' },
      { name: 'Pittsburgh', description: 'Oakmont, Laurel Valley, and western Pennsylvania\'s rolling terrain.' },
    ],
    faqs: [{ question: 'What is the best golf course in Pennsylvania?', answer: 'Oakmont Country Club, which has hosted more combined U.S. Opens and major championships than any other course in America, is widely considered the state\'s finest and one of the toughest courses in the world.' }],
    relatedStates: [{ name: 'New York', slug: 'new-york' }],
  },
  'missouri': {
    state: 'Missouri', stateAbbr: 'MO', slug: 'missouri',
    metaTitle: 'Best Golf Courses in Missouri (2026) | Rankings & Guide',
    metaDescription: 'Find the best golf courses in Missouri for 2026. From Kansas City to St. Louis, explore Show-Me State golf.',
    heroIntro: 'Missouri\'s two major metro areas — Kansas City and St. Louis — anchor a heartland golf scene with more depth than most expect. Bellerive hosted the 2018 PGA Championship, and quality public and private courses serve both cities.',
    overview: 'Missouri golf is concentrated in the KC and STL corridors, with rolling Ozark terrain adding character to courses throughout the state. Bellerive\'s championship pedigree in St. Louis and emerging courses in Kansas City make Missouri a solid Midwest golf state.',
    topCities: [{ name: 'Kansas City', slug: 'kansas-city-missouri' }, { name: 'St. Louis', slug: 'st-louis-missouri' }],
    topCourses: [],
    bestTimeToPlay: 'April through October. Spring and fall offer the best conditions.',
    golfRegions: [
      { name: 'Kansas City', description: 'Prairie Dunes nearby in Kansas, plus quality KC metro courses.' },
      { name: 'St. Louis', description: 'Bellerive, Old Warson, and championship-caliber private clubs.' },
    ],
    faqs: [{ question: 'What is the best golf course in Missouri?', answer: 'Bellerive Country Club in St. Louis, host of the 2018 PGA Championship, is the state\'s most prestigious venue.' }],
    relatedStates: [{ name: 'Illinois', slug: 'illinois' }],
  },
  'hawaii': {
    state: 'Hawaii', stateAbbr: 'HI', slug: 'hawaii',
    metaTitle: 'Best Golf Courses in Hawaii (2026) | Rankings & Guide',
    metaDescription: 'Discover the best golf courses in Hawaii for 2026. From Kapalua to Mauna Kea, explore paradise golf across the Hawaiian Islands.',
    heroIntro: 'Hawaii offers golf in paradise — volcanic landscapes, Pacific Ocean vistas, and tropical beauty create the most visually stunning golf settings on Earth. Kapalua\'s Plantation Course on Maui hosts the PGA Tour\'s Tournament of Champions.',
    overview: 'Hawaii\'s four main golf islands — Maui, Oahu, Big Island, and Kauai — each offer distinct experiences. Maui\'s Kapalua and Wailea anchor the resort scene, Oahu delivers variety near Honolulu, the Big Island pairs volcanic terrain with luxury at Mauna Kea and Mauna Lani, and Kauai\'s Poipu Bay adds Garden Isle beauty.',
    topCities: [{ name: 'Hawaii', slug: 'hawaii-hawaii' }],
    topCourses: [],
    bestTimeToPlay: 'Year-round, though November through April is peak season with the best weather (ironically, it\'s the "dry" season). Leeward (west) sides of islands are sunnier.',
    golfRegions: [
      { name: 'Maui', description: 'Kapalua Plantation, Wailea, and the Valley Isle\'s resort golf corridor.' },
      { name: 'Big Island', description: 'Mauna Kea, Mauna Lani, and volcanic lava-field courses on the Kohala Coast.' },
      { name: 'Oahu', description: 'Ko Olina, Turtle Bay, and diverse courses near Honolulu.' },
      { name: 'Kauai', description: 'Poipu Bay and Garden Isle beauty on the oldest Hawaiian island.' },
    ],
    faqs: [{ question: 'What is the best golf course in Hawaii?', answer: 'Kapalua Plantation Course on Maui (PGA Tour host) and Mauna Kea on the Big Island are generally considered the finest. Both offer world-class golf with stunning Pacific Ocean views.' }],
    relatedStates: [{ name: 'California', slug: 'california' }],
  },
  'wisconsin': {
    state: 'Wisconsin', stateAbbr: 'WI', slug: 'wisconsin',
    metaTitle: 'Best Golf Courses in Wisconsin (2026) | Rankings & Guide',
    metaDescription: 'Explore the best golf courses in Wisconsin for 2026. From Whistling Straits to Sand Valley, discover America\'s emerging golf destination.',
    heroIntro: 'Wisconsin has quietly become one of America\'s most exciting golf states. Whistling Straits hosted the 2021 Ryder Cup, Sand Valley is the most talked-about new resort in the country, and Erin Hills hosted the 2017 U.S. Open.',
    overview: 'Wisconsin\'s emergence as a golf destination is remarkable. In just two decades, Whistling Straits (Ryder Cup), Sand Valley (Coore & Crenshaw), and Erin Hills (U.S. Open) put the Badger State on the world golf map. The glacial terrain provides excellent natural topography for golf design.',
    topCities: [{ name: 'Milwaukee', slug: 'milwaukee-wisconsin' }],
    topCourses: [],
    bestTimeToPlay: 'May through October. June through September offers the warmest weather.',
    golfRegions: [
      { name: 'Kohler/Sheboygan', description: 'Whistling Straits, Blackwolf Run, and the Kohler resort golf complex.' },
      { name: 'Sand Valley', description: 'Sand Valley, Mammoth Dunes, and the emerging central Wisconsin golf destination.' },
      { name: 'Milwaukee', description: 'Erin Hills and metro-area courses near Wisconsin\'s largest city.' },
    ],
    faqs: [{ question: 'What is the best golf course in Wisconsin?', answer: 'Whistling Straits (Pete Dye), host of the 2021 Ryder Cup, is the most famous. Sand Valley (Coore & Crenshaw) is the most exciting new course. Erin Hills hosted the 2017 U.S. Open.' }],
    relatedStates: [{ name: 'Michigan', slug: 'michigan' }, { name: 'Illinois', slug: 'illinois' }],
  },
  'indiana': {
    state: 'Indiana', stateAbbr: 'IN', slug: 'indiana',
    metaTitle: 'Best Golf Courses in Indiana (2026) | Rankings & Guide',
    metaDescription: 'Find the best golf courses in Indiana for 2026. From Pete Dye\'s homeland courses to French Lick, explore Hoosier State golf.',
    heroIntro: 'Indiana is the home state of Pete Dye, America\'s most influential modern golf architect. His legacy courses — Crooked Stick (PGA Championship host) and the Pete Dye Course at French Lick — anchor a state with more depth than its low profile suggests.',
    overview: 'Indiana golf benefits from Pete Dye\'s deep roots in the state. Crooked Stick in Carmel has hosted multiple major championships, French Lick Resort offers two world-class courses in southern Indiana, and the Indianapolis area has several quality public and private options.',
    topCities: [{ name: 'Indianapolis', slug: 'indianapolis-indiana' }],
    topCourses: [],
    bestTimeToPlay: 'May through October. Late spring and early fall offer the most pleasant conditions.',
    golfRegions: [
      { name: 'Indianapolis', description: 'Crooked Stick, Pete Dye Golf Club, and central Indiana courses.' },
      { name: 'French Lick', description: 'French Lick Resort with two championship courses in the southern Indiana hills.' },
    ],
    faqs: [{ question: 'What is the best golf course in Indiana?', answer: 'Crooked Stick Golf Club (Pete Dye), host of PGA Championships and Solheim Cups, is the state\'s most prestigious course. The Pete Dye Course at French Lick is the best public option.' }],
    relatedStates: [{ name: 'Illinois', slug: 'illinois' }, { name: 'Ohio', slug: 'ohio' }],
  },
  'ohio': {
    state: 'Ohio', stateAbbr: 'OH', slug: 'ohio',
    metaTitle: 'Best Golf Courses in Ohio (2026) | Rankings & Guide',
    metaDescription: 'Discover the best golf courses in Ohio for 2026. From Muirfield Village to Canterbury, explore the Buckeye State\'s championship golf.',
    heroIntro: 'Ohio\'s golf identity centers on Jack Nicklaus. Muirfield Village — the Golden Bear\'s creation in Dublin — hosts the Memorial Tournament annually and has hosted the Presidents Cup and Ryder Cup. The Buckeye State\'s Midwest terrain supports quality golf throughout.',
    overview: 'Ohio golf is anchored by Muirfield Village\'s tournament pedigree, complemented by Firestone\'s championship history in Akron, Canterbury in Cleveland, and the emerging Columbus golf market. Nicklaus\'s influence runs deep, and the state\'s rolling terrain provides good foundations for golf design.',
    topCities: [{ name: 'Columbus', slug: 'columbus-ohio' }],
    topCourses: [],
    bestTimeToPlay: 'May through October. Ohio\'s four seasons provide reliable summer golf and beautiful fall color.',
    golfRegions: [
      { name: 'Columbus', description: 'Muirfield Village, Scioto Country Club, and Jack Nicklaus\'s hometown courses.' },
      { name: 'Cleveland/Akron', description: 'Firestone, Canterbury, and the northeast Ohio championship corridor.' },
    ],
    faqs: [{ question: 'What is the best golf course in Ohio?', answer: 'Muirfield Village Golf Club (Jack Nicklaus) in Dublin, host of the Memorial Tournament, is the most prestigious. Firestone Country Club in Akron has hosted numerous championships.' }],
    relatedStates: [{ name: 'Michigan', slug: 'michigan' }, { name: 'Pennsylvania', slug: 'pennsylvania' }],
  },

  'ontario': {
    state: 'Ontario', stateAbbr: 'ON', slug: 'ontario',
    metaTitle: 'Best Golf Courses in Ontario, Canada (2026) | Rankings & Guide',
    metaDescription: 'Explore the best golf courses in Ontario, Canada for 2026. From the National Golf Club to Muskoka cottage country, discover Ontario\'s finest golf.',
    heroIntro: 'Ontario is home to the finest collection of private club golf in Canada. The National Golf Club of Canada — widely considered Canada\'s best course — anchors a Toronto-area circuit that includes Stanley Thompson masterworks, Harry Colt Golden Age classics, and the dramatic resort golf of Muskoka cottage country two hours north.',
    overview: 'Ontario\'s golf stretches from the Greater Toronto Area\'s deep ravine valleys to the granite lakes and boreal forests of Muskoka. The province produced many of Canada\'s great golf clubs, and architects like Stanley Thompson left their deepest Canadian marks here. With PGA Tour players calling Toronto home and a golf culture as sophisticated as any in North America, Ontario delivers golf of extraordinary depth and variety.',
    topCities: [
      { name: 'Toronto', slug: 'toronto-ontario' }, { name: 'Muskoka', slug: 'muskoka-ontario' },
    ],
    topCourses: [],
    bestTimeToPlay: 'May through October across most of the province. Southern Ontario (Toronto area) enjoys reliable summer conditions June through September. Muskoka\'s season is June through September. Fall colors in October can be spectacular in Muskoka and across the province.',
    golfRegions: [
      { name: 'Greater Toronto Area', description: 'The National Golf Club, St. George\'s, Hamilton, and a dense concentration of Canada\'s finest private clubs.' },
      { name: 'Muskoka', description: 'Cottage country golf on the Canadian Shield — The Rock, Bigwin Island, Taboo, and Deerhurst Highlands.' },
    ],
    faqs: [
      { question: 'What is the best golf course in Ontario?', answer: 'The National Golf Club of Canada (Tom Fazio) in Woodbridge is widely considered the finest course in Canada. Among public and accessible courses, Bigwin Island and Deerhurst Highlands in Muskoka are nationally celebrated.' },
      { question: 'How does Ontario golf compare to the United States?', answer: 'Ontario\'s top private clubs — the National, St. George\'s, Hamilton South, and Toronto Golf Club — are fully comparable to the best in the United States. The shorter season (May–October) is the main distinction.' },
    ],
    relatedStates: [
      { name: 'Quebec', slug: 'quebec' }, { name: 'Michigan', slug: 'michigan' }, { name: 'New York', slug: 'new-york' },
    ],
  },

  'british-columbia': {
    state: 'British Columbia', stateAbbr: 'BC', slug: 'british-columbia',
    metaTitle: 'Best Golf Courses in British Columbia, Canada (2026) | Rankings & Guide',
    metaDescription: 'Discover the best golf courses in British Columbia, Canada for 2026. From Shaughnessy to Cabot Cliffs, explore BC\'s finest mountain and coastal golf.',
    heroIntro: 'British Columbia\'s golf is defined by its scenery — towering mountains, Pacific fjords, and pristine forests create a backdrop that makes every round spectacular. From Vancouver\'s venerable Shaughnessy Golf and Country Club to Nicklaus North\'s lakeside elegance in Whistler, BC delivers world-class golf in a world-class setting.',
    overview: 'British Columbia offers extraordinary golf diversity: century-old parkland clubs in Vancouver, oceanside resort golf in Victoria, dramatic Sea-to-Sky corridor courses between Vancouver and Whistler, and the remote quality of Furry Creek above Howe Sound. The mild Pacific climate extends the Lower Mainland golf season to nine months, making BC one of Canada\'s most golf-active provinces.',
    topCities: [
      { name: 'Vancouver', slug: 'vancouver-bc' }, { name: 'Victoria', slug: 'victoria-bc' },
    ],
    topCourses: [],
    bestTimeToPlay: 'Year-round in Victoria; April through October in Vancouver and the Lower Mainland; late May through September in the mountain resort areas. BC\'s golf season is Canada\'s longest.',
    golfRegions: [
      { name: 'Greater Vancouver', description: 'Shaughnessy, Northview, Morgan Creek, and diverse options across Metro Vancouver and the Fraser Valley.' },
      { name: 'Sea-to-Sky Corridor', description: 'Furry Creek\'s Howe Sound drama and Nicklaus North\'s lakeside Whistler masterpiece.' },
      { name: 'Vancouver Island', description: 'Victoria\'s historic oceanside clubs and Bear Mountain\'s Nicklaus resort design.' },
    ],
    faqs: [
      { question: 'What is the best golf course in British Columbia?', answer: 'Shaughnessy Golf and Country Club (A.V. Macan) is BC\'s most prestigious private club. Among accessible courses, Nicklaus North in Whistler is the top-ranked public option. Furry Creek offers the most visually dramatic golf in the province.' },
      { question: 'Is Whistler worth the drive from Vancouver for golf?', answer: 'Absolutely. The 2-hour Sea-to-Sky Highway drive to Whistler is itself spectacular, and Nicklaus North along Green Lake with the Coast Mountains backdrop is an unforgettable experience worth the journey.' },
    ],
    relatedStates: [
      { name: 'Alberta', slug: 'alberta' }, { name: 'Washington', slug: 'washington' },
    ],
  },

  'alberta': {
    state: 'Alberta', stateAbbr: 'AB', slug: 'alberta',
    metaTitle: 'Best Golf Courses in Alberta, Canada (2026) | Rankings & Guide',
    metaDescription: 'Discover the best golf courses in Alberta, Canada for 2026. From Fairmont Banff Springs to Glencoe, explore the Rockies\' greatest golf.',
    heroIntro: 'Alberta golf reaches heights — literally and figuratively — that few places on earth can match. Stanley Thompson\'s Fairmont Banff Springs is one of the great courses of the world, set among UNESCO World Heritage glacier peaks. Calgary\'s Glencoe Club and the twin masterworks at Kananaskis extend a golf portfolio of extraordinary mountain grandeur.',
    overview: 'Alberta\'s golf is split between the Calgary urban market — led by Stanley Thompson\'s Glencoe and complemented by strong semi-private options — and the incomparable mountain corridor running from Kananaskis through Canmore to Banff. Together they create a province that is one of the world\'s great golf destinations, with a short but spectacular season that draws international visitors every summer.',
    topCities: [
      { name: 'Calgary', slug: 'calgary-alberta' }, { name: 'Banff & Canmore', slug: 'banff-alberta' },
    ],
    topCourses: [],
    bestTimeToPlay: 'Late May through September. Alberta\'s golf season is defined by the mountain summer — brilliant and short. July and August are peak months. September can be extraordinary with fall colors and cooler air. Chinook winds can extend the Calgary season into November during mild years.',
    golfRegions: [
      { name: 'Calgary & Foothills', description: 'Glencoe, Priddis Greens, D\'Arcy Ranch, and the best of Alberta\'s urban private and semi-private golf.' },
      { name: 'Bow Valley & Canadian Rockies', description: 'Fairmont Banff Springs, Silvertip, Stewart Creek, and Kananaskis — the world\'s most spectacular golf terrain.' },
    ],
    faqs: [
      { question: 'What is the best golf course in Alberta?', answer: 'Fairmont Banff Springs (Stanley Thompson) is one of the greatest courses in the world and the undisputed crown jewel of Alberta golf. Among private clubs, Glencoe Golf and Country Club in Calgary (also Stanley Thompson) is the province\'s finest.' },
      { question: 'Is Fairmont Banff Springs open to the public?', answer: 'Yes — Fairmont Banff Springs Golf Course is open to both hotel guests and outside visitors. Tee times sell out well in advance for summer dates. Budget $200–$320 per round and book early.' },
    ],
    relatedStates: [
      { name: 'British Columbia', slug: 'british-columbia' }, { name: 'Montana', slug: 'montana' },
    ],
  },

  'quebec': {
    state: 'Quebec', stateAbbr: 'QC', slug: 'quebec',
    metaTitle: 'Best Golf Courses in Quebec, Canada (2026) | Rankings & Guide',
    metaDescription: 'Explore the best golf courses in Quebec, Canada for 2026. From Royal Montreal to Elm Ridge, discover the province\'s historic and championship golf.',
    heroIntro: 'Quebec is the birthplace of Canadian golf. The Royal Montreal Golf Club — North America\'s oldest golf club, established 1873 — anchors a province rich in golf history, including Stanley Thompson masterworks and the kind of classic parkland island settings unique to the St. Lawrence River valley.',
    overview: 'Quebec\'s golf heritage is unmatched in Canada. The Royal Montreal Golf Club preceded any other golf club on the continent, and the islands west of the city — Ile Bizard, Ile Perrot — hold Stanley Thompson\'s Elm Ridge, the Dick Wilson renovation of Royal Montreal\'s Blue Course, and historic Whitlock in a concentration of quality that rewards the golf pilgrim. The Quebec summer season is short but intense, with course conditions that peak in July and August.',
    topCities: [
      { name: 'Montreal', slug: 'montreal-quebec' },
    ],
    topCourses: [],
    bestTimeToPlay: 'June through September. Quebec\'s winters are long and cold — most courses open in mid-May and close by late October. July and August offer the best conditions. Fall colors in late September can be spectacular on courses surrounded by Quebec\'s hardwood forests.',
    golfRegions: [
      { name: 'Greater Montreal', description: 'Royal Montreal, Elm Ridge, Whitlock, and the island golf corridor of the St. Lawrence valley.' },
      { name: 'Quebec City & Laurentians', description: 'Scenic resort golf through the Laurentian Mountains north of Montreal.' },
    ],
    faqs: [
      { question: 'Is Royal Montreal really the oldest golf club in North America?', answer: 'Yes — the Royal Montreal Golf Club was established in 1873, received its Royal charter in 1884, and predates any other golf club in North America by several years.' },
      { question: 'What is the best golf course in Quebec?', answer: 'Elm Ridge Golf and Country Club (Stanley Thompson) on Ile Bizard is arguably Quebec\'s finest golf course architecturally. The Royal Montreal Blue Course (Dick Wilson) is the most celebrated from a championship history perspective.' },
    ],
    relatedStates: [
      { name: 'Ontario', slug: 'ontario' }, { name: 'Vermont', slug: 'vermont' }, { name: 'New York', slug: 'new-york' },
    ],
  },

  'nova-scotia': {
    state: 'Nova Scotia', stateAbbr: 'NS', slug: 'nova-scotia',
    metaTitle: 'Best Golf Courses in Nova Scotia, Canada (2026) | Rankings & Guide',
    metaDescription: 'Discover the best golf courses in Nova Scotia, Canada for 2026. Cabot Cliffs, Cabot Links, and Highland Links make Cape Breton a world-class golf destination.',
    heroIntro: 'Nova Scotia is home to the greatest golf story of the 21st century. In the span of a decade, the remote village of Inverness in Cape Breton became one of the world\'s premier golf destinations — home to Cabot Cliffs (Top 5 globally) and Cabot Links (Top 10 globally), alongside Stanley Thompson\'s timeless Highland Links in the National Park.',
    overview: 'Nova Scotia\'s golf identity is now inseparable from Cape Breton Island. Cabot Resort\'s two courses have drawn international golf tourists who previously had no reason to visit Atlantic Canada, and Stanley Thompson\'s Highland Links provides historical and architectural context for the newer masterworks. Together, these three courses make Cape Breton one of the world\'s great golf pilgrimages.',
    topCities: [
      { name: 'Cape Breton', slug: 'cape-breton-nova-scotia' },
    ],
    topCourses: [],
    bestTimeToPlay: 'Late May through October. Cape Breton\'s golf season is compact but spectacular. July and August are warmest; September and October bring dramatic Atlantic light and fall colors. The wind is a constant feature — plan for it as part of the authentic links experience rather than fighting it.',
    golfRegions: [
      { name: 'Cape Breton Island', description: 'Cabot Cliffs, Cabot Links, and Highland Links — the world\'s greatest golf concentration by quality-per-mile.' },
    ],
    faqs: [
      { question: 'How hard is it to get a tee time at Cabot Cliffs?', answer: 'Cabot Cliffs tee times sell out months in advance, particularly for July and August. Book through Cabot Resort\'s website as far ahead as possible — 6 to 12 months is not excessive for prime summer dates.' },
      { question: 'Is Cape Breton accessible from the continental US?', answer: 'Yes — fly into Sydney, NS (YQY) for the most direct access, or Halifax (YHZ) for more flight options with a 3-hour drive. Many US golfers also drive the Trans-Canada from the Eastern Seaboard as a golf road trip.' },
    ],
    relatedStates: [
      { name: 'Prince Edward Island', slug: 'prince-edward-island' }, { name: 'Quebec', slug: 'quebec' },
    ],
  },

  'prince-edward-island': {
    state: 'Prince Edward Island', stateAbbr: 'PE', slug: 'prince-edward-island',
    metaTitle: 'Best Golf Courses in Prince Edward Island, Canada (2026) | Rankings & Guide',
    metaDescription: 'Discover the best golf courses in Prince Edward Island, Canada for 2026. From Links at Crowbush Cove to Brudenell River, explore Canada\'s premier golf island.',
    heroIntro: 'Prince Edward Island is Canada\'s golf island — a compact province where Thomas McBroom\'s Links at Crowbush Cove (Canada\'s top-ranked public course), multiple championship layouts, and the province\'s dramatic red sandstone coastline combine for a golf experience unlike anywhere else in the country.',
    overview: 'PEI offers a concentrated golf experience in a small, manageable geography. The Links at Crowbush Cove is the jewel, and Thomas McBroom\'s Dundarave at Brudenell River adds championship depth. The provincial Golf Trail connects courses across the red soil island with packages that make multi-course visits both easy and exceptional value. Golf combines naturally with PEI\'s spectacular seafood, beaches, and the bucolic Anne of Green Gables landscape.',
    topCities: [
      { name: 'Prince Edward Island', slug: 'prince-edward-island' },
    ],
    topCourses: [],
    bestTimeToPlay: 'June through September. PEI\'s peak golf season coincides with the island\'s tourist season. July and August are warmest; June offers uncrowded green conditions; September brings cooler clarity and dramatic Atlantic skies. Crowbush Cove is at its most spectacular in a brisk Atlantic wind.',
    golfRegions: [
      { name: 'Eastern PEI', description: 'Crowbush Cove, Dundarave, and Brudenell River Provincial Park — the heart of PEI golf excellence.' },
      { name: 'Western PEI', description: 'Mill River Provincial Golf Course and traditional island golf in a quieter setting.' },
    ],
    faqs: [
      { question: 'Why is PEI considered a top golf destination?', answer: 'The combination of Crowbush Cove\'s world-class links quality, Thomas McBroom\'s multiple championship designs, the dramatic Gulf of St. Lawrence setting, and the province\'s compact size (making multi-course days easy) creates a uniquely compelling destination.' },
      { question: 'How do I book the PEI Golf Trail?', answer: 'Golf PEI packages are available through Tourism PEI and individual resorts. Multi-course packages offer significant savings and logistical convenience across the island\'s top courses.' },
    ],
    relatedStates: [
      { name: 'Nova Scotia', slug: 'nova-scotia' }, { name: 'New Brunswick', slug: 'new-brunswick' },
    ],
  },
};

export function getStateData(slug: string): StateData | undefined {
  return stateData[slug];
}

export function getAllStates(): { state: string; slug: string }[] {
  return Object.values(stateData).map(s => ({ state: s.state, slug: s.slug }));
}
