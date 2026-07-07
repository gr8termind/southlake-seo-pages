import type { FAQ } from '../config';

export interface Location {
  slug: string;
  city: string;
  region: string;        // county / area label
  title: string;         // <title>
  description: string;    // meta description
  heroEyebrow: string;
  heroTitle: string;      // H1
  heroDesc: string;
  introHeading: string;   // first H2
  intro: string;          // local paragraph 1
  local: string;          // local paragraph 2
  nearby: { name: string; href: string }[];
  faqs: FAQ[];
  // Optional deep-content fields — render when present. Populated for the
  // highest-value cities first; other cities inherit the shorter default page.
  neighborhoods?: string;    // paragraph about specific areas/roads/landmarks
  whyLocal?: string;         // paragraph about why local drivers pick us
  commonWork?: string[];     // bulleted list of most-requested repairs in this city
  drivingPatterns?: string;  // paragraph on how local driving affects vehicles
  gettingHere?: string;      // directions paragraph
}

// Each entry is written to be genuinely differentiated — real roads, landmarks,
// and proximity to the shop at 7032 Jonesboro Rd, Morrow — to serve local
// searchers and avoid thin/duplicate "doorway" pages.
export const LOCATIONS: Location[] = [
  {
    slug: 'jonesboro-auto-repair',
    city: 'Jonesboro',
    region: 'Clayton County, GA',
    title: 'Auto Repair in Jonesboro, GA | Southlake Auto Care | (770) 961-8500',
    description:
      'Trusted auto repair in Jonesboro, GA. Southlake Auto Care handles brakes, oil changes, engine diagnostics, AC & transmissions just off Tara Boulevard. Call (770) 961-8500.',
    heroEyebrow: 'Serving Jonesboro, GA',
    heroTitle: 'Auto Repair in Jonesboro, GA',
    heroDesc:
      "Southlake Auto Care is the Jonesboro area's go-to shop for honest diagnostics and quality repairs — minutes from Tara Boulevard and the Clayton County courthouse.",
    introHeading: "Jonesboro's Trusted Repair Shop",
    intro:
      "Jonesboro is home base for us — our shop on Jonesboro Road connects straight into the heart of the city, from the historic downtown and Clayton County courthouse to the busy Tara Boulevard retail run. Whether you commute up Tara every morning or run errands around Lee Street, we're the local alternative to dealer prices and chain-store upsells.",
    local:
      "Tara Boulevard driving is stop-and-go and hard on brakes and cooling systems, and Jonesboro's older neighborhoods mean we see plenty of higher-mileage vehicles that need honest, prioritized repair plans. We tell you what's urgent, what can wait, and what it'll cost — before we touch anything.",
    neighborhoods:
      "Our Jonesboro customer base runs from the historic downtown square and Lee Street corridor, through the neighborhoods off Fielder Road and Flint River Road, out to the residential areas near Kendrick and Panhandle Roads. We see plenty of vehicles from the Clayton State University area and from workers at the Clayton County courthouse and municipal complex just down the road. If you're anywhere in Jonesboro proper, we're a five-to-ten-minute drive.",
    whyLocal:
      "Drivers around Jonesboro have plenty of chain-shop options along Tara Boulevard — and they still choose us. The reason is straightforward: we diagnose the actual problem before quoting, we put pricing in writing, and we say the words \"this can wait\" when it can. There's no upsell pressure, no scare tactics, and no surprise bills at pickup. That approach has built a customer base that's mostly word-of-mouth, and it's why we can spend more time on your car and less on marketing.",
    commonWork: [
      'Brake pad and rotor replacement — heavy Tara Blvd stop-and-go wears these fast',
      'Full synthetic oil changes with a real multi-point inspection',
      'Check engine light diagnostics and Clayton County emissions repairs',
      'AC recharge and leak repair before Georgia summer hits',
      'Transmission fluid service and shift-quality diagnostics',
      'Battery, alternator, and starter service for older commuter vehicles',
      'Tire rotation, alignment checks, and suspension inspections'
    ],
    drivingPatterns:
      "Jonesboro driving is unusually hard on a few specific systems. Stop-and-go on Tara Boulevard eats brake pads faster than highway driving — most Jonesboro commuters land on the shorter end of their pad-life window. Short trips to Southlake Mall or the courthouse never let the engine warm up fully, which builds moisture and fuel contamination in the oil. And summer idling in traffic pushes cooling systems and AC compressors hard. All of that is normal for city driving — it's just why regular inspections matter more here than most drivers realize.",
    gettingHere:
      "From downtown Jonesboro, take Tara Boulevard south, then continue as it becomes Jonesboro Road heading toward Morrow — we're on the right at 7032 Jonesboro Rd, in the Southlake area. From I-75, take the Jonesboro Road exit and head north. If you're coming from the courthouse area, it's a straight shot down Highway 54/Jonesboro Rd — usually under ten minutes.",
    nearby: [
      { name: 'Morrow', href: '/morrow-auto-repair' },
      { name: 'Lake City', href: '/lake-city-auto-repair' },
      { name: 'Riverdale', href: '/riverdale-auto-repair' }
    ],
    faqs: [
      { q: 'Where are you located relative to downtown Jonesboro?', a: "We're on Jonesboro Road in the Southlake area, just a few minutes from the Clayton County courthouse and Tara Boulevard. Most Jonesboro drivers reach us in under ten minutes." },
      { q: 'Do you offer emissions-related repairs for Jonesboro drivers?', a: "Yes. Clayton County requires emissions testing for most gasoline vehicles from 3 to 24 model years old. If your vehicle won't pass or has a check engine light, we diagnose the real cause and complete the repairs — then verify readiness monitors have run before you re-test." },
      { q: 'Can you work on high-mileage vehicles?', a: 'Absolutely. Older and high-mileage vehicles are a big part of what we see. We build honest, prioritized repair plans so you can budget the important safety work first and plan the rest.' },
      { q: 'Do I need an appointment or can I walk in?', a: "Walk-ins are welcome, but scheduling ahead means we can plan for your vehicle and usually get you in and out faster. Give us a call or use the online scheduler." },
      { q: "What if my car won't make it to the shop?", a: "If you're anywhere near Jonesboro and your car isn't safe to drive, call us and we'll help arrange a tow to the shop. We work with local towing companies and can coordinate the drop-off." }
    ]
  },
  {
    slug: 'stockbridge-auto-repair',
    city: 'Stockbridge',
    region: 'Henry County, GA',
    title: 'Auto Repair in Stockbridge, GA | Southlake Auto Care | (770) 961-8500',
    description:
      'Auto repair for Stockbridge, GA drivers. Southlake Auto Care offers honest brakes, oil changes, diagnostics, AC & transmission service a short I-75 drive away. Call (770) 961-8500.',
    heroEyebrow: 'Serving Stockbridge, GA',
    heroTitle: 'Auto Repair in Stockbridge, GA',
    heroDesc:
      'A quick hop down I-75 from Stockbridge, Southlake Auto Care gives North Henry County drivers dealer-quality repairs without the dealer markup or the runaround.',
    introHeading: 'Straightforward Repairs for Stockbridge',
    intro:
      "Stockbridge sits just up I-75 and Highway 138 from our shop, so plenty of North Henry County drivers make the short drive for repairs they can actually trust. From the Eagle's Landing area to the neighborhoods off North Henry Boulevard, we're an easy, honest option when the dealership quote feels inflated.",
    local:
      'Highway commuting on I-75 puts real miles on Stockbridge vehicles, which is tough on tires, brakes, and cooling systems. Our multi-point inspection catches wear early, and we give you a written estimate you approve before any work starts — no surprises when you pick the car up.',
    neighborhoods:
      "Stockbridge customers come to us from all over the city — the Eagle's Landing area off Highway 138, the neighborhoods around North Henry Boulevard, the newer developments off Rock Quarry Road, and the industrial corridor near Interstate 75. Many of our regulars work at the businesses along Jonesboro Road in Stockbridge or commute up to Atlanta from the Highway 42 area. Whichever part of town you're in, we're a short drive on I-75 or Jonesboro Road.",
    whyLocal:
      "Stockbridge has plenty of repair options — Highway 138 alone is lined with them — but a lot of Henry County drivers still make the short trip to our shop. What we hear from them: the dealer quotes feel bloated, the chains feel like sales pitches, and finding a shop that just fixes what's broken (and tells you what isn't) is surprisingly hard. We don't run promotions to draw people in and then hit them with an inspection list — the honest inspection is included, and if nothing else needs work, we say so.",
    commonWork: [
      'Brake pad, rotor, and caliper service after long I-75 commutes',
      'Full synthetic oil changes with a manufacturer-spec filter',
      'Check engine light diagnostics with real scan-tool data',
      'AC leak detection and recharge — R-134a and R-1234yf',
      'Transmission fluid service and shift-quality diagnostics',
      'Tire rotation, alignment, and suspension inspection',
      'Battery, alternator, and starter testing for commuter vehicles'
    ],
    drivingPatterns:
      "Stockbridge commuters put more highway miles on their vehicles than most Clayton County drivers, and I-75 traffic patterns punish a few specific systems. Long stretches at highway speed with sudden brake applications heat up brake fluid and pads. Continuous high-load driving wears transmission fluid and cooling systems faster than around-town use. And the heat cycles from summer commuting are hard on AC systems and engine coolant. We inspect those systems closely on every visit — because we know what Henry County driving does to cars.",
    gettingHere:
      "From Stockbridge, the easiest route is I-75 north to the Jonesboro Road exit, then a short drive north. Alternatively, take Highway 138 west to Jonesboro Road and head north — you'll pass through Rex and into the Southlake area. Total drive time is usually 15 minutes or less depending on where you start.",
    nearby: [
      { name: 'McDonough', href: '/mcdonough-auto-repair' },
      { name: 'Rex', href: '/rex-auto-repair' },
      { name: 'Hampton', href: '/hampton-auto-repair' }
    ],
    faqs: [
      { q: 'How far is the shop from Stockbridge?', a: "We're a short drive down I-75 in the Southlake area of Morrow — typically around 15 minutes from most of Stockbridge, sometimes less if traffic is light." },
      { q: 'Is it worth the drive from Henry County?', a: 'Stockbridge drivers tell us the honest diagnostics and upfront pricing are worth the short trip — especially compared to dealer estimates and the pressure-sell approach at some chain shops.' },
      { q: 'Can I drop off before my I-75 commute?', a: "Yes. Early drop-off works well for Stockbridge commuters — leave the car and we'll call with the diagnosis and estimate before doing any work. Many customers pick up on the way home." },
      { q: 'Do you handle Georgia emissions repairs?', a: "Yes. Even though Henry County has different emissions requirements than Clayton, we can diagnose and repair check engine light and emissions-related problems for any vehicle. We'll let readiness monitors run before you re-test to save a wasted trip." },
      { q: 'What if I need financing on a bigger repair?', a: "We offer financing through Snap Finance, Affirm, and Sunbit for qualifying customers, so a bigger repair doesn't have to wait for payday. Ask us for details when you get your written estimate." }
    ]
  },
  {
    slug: 'riverdale-auto-repair',
    city: 'Riverdale',
    region: 'Clayton County, GA',
    title: 'Auto Repair in Riverdale, GA | Southlake Auto Care | (770) 961-8500',
    description:
      'Riverdale, GA auto repair you can trust. Southlake Auto Care handles brakes, oil changes, diagnostics, AC & transmissions near Highway 85. Call (770) 961-8500.',
    heroEyebrow: 'Serving Riverdale, GA',
    heroTitle: 'Auto Repair in Riverdale, GA',
    heroDesc:
      'Just across Clayton County from Riverdale, Southlake Auto Care keeps your car reliable with honest diagnostics and quality repairs at fair prices.',
    introHeading: "Riverdale's Honest Auto Shop",
    intro:
      'Riverdale drivers along Highway 85 and Valley Hill Road are minutes from our shop, and many work near Hartsfield-Jackson where a reliable vehicle isn\u2019t optional. We keep Riverdale commuters and airport-area workers on the road with repairs done right the first time.',
    local:
      'Heavy commuter traffic and airport-corridor stop-and-go are hard on brakes, transmissions, and AC systems — all things Georgia heat only makes worse. We inspect those systems closely on every visit and explain exactly what your vehicle needs before we start.',
    nearby: [
      { name: 'Forest Park', href: '/forest-park-auto-repair' },
      { name: 'Jonesboro', href: '/jonesboro-auto-repair' },
      { name: 'Lake City', href: '/lake-city-auto-repair' }
    ],
    faqs: [
      { q: 'How close is Southlake Auto Care to Riverdale?', a: "We're a short drive east in the Southlake area of Morrow — usually about ten minutes from Riverdale via Highway 85 or Jonesboro Road." },
      { q: 'Do you serve airport-area workers?', a: 'Yes. Many of our customers work near Hartsfield-Jackson and count on us for dependable repairs and honest timelines so they\u2019re never stranded.' },
      { q: 'Can you handle AC repair before summer?', a: 'Definitely. We do leak detection, recharge, and full AC system repair so your cold air survives the Georgia heat.' }
    ]
  },
  {
    slug: 'lake-city-auto-repair',
    city: 'Lake City',
    region: 'Clayton County, GA',
    title: 'Auto Repair in Lake City, GA | Southlake Auto Care | (770) 961-8500',
    description:
      'Auto repair right in Lake City, GA. Southlake Auto Care is on Jonesboro Road for brakes, oil changes, diagnostics, AC & transmission service. Call (770) 961-8500.',
    heroEyebrow: 'Serving Lake City, GA',
    heroTitle: 'Auto Repair in Lake City, GA',
    heroDesc:
      "Southlake Auto Care sits right on Jonesboro Road in Lake City's backyard — about as local as auto repair gets, with honest service to match.",
    introHeading: 'Your Neighborhood Shop in Lake City',
    intro:
      'Lake City runs right along Jonesboro Road and I-75, which puts our shop practically around the corner. If you live or work in Lake City, you likely pass us on your regular route — no long drive, no unfamiliar part of town, just a trusted local shop minutes from home.',
    local:
      "Being this close means Lake City drivers can drop off on the way to work and pick up on the way home. Short-trip, in-town driving is surprisingly hard on batteries and brakes, so those are always part of our multi-point inspection.",
    nearby: [
      { name: 'Morrow', href: '/morrow-auto-repair' },
      { name: 'Forest Park', href: '/forest-park-auto-repair' },
      { name: 'Jonesboro', href: '/jonesboro-auto-repair' }
    ],
    faqs: [
      { q: 'Are you actually in Lake City?', a: "We're right on Jonesboro Road in the Southlake area, immediately next to Lake City — for most residents we're only a few minutes away." },
      { q: 'Can I walk in for a quick service?', a: 'Walk-ins are welcome, though scheduling ahead means we can plan for your vehicle and usually get you in and out faster.' },
      { q: 'Do short in-town trips really hurt my car?', a: 'They can. Frequent short drives are tough on batteries and brakes, which is why we check both at every visit.' }
    ]
  },
  {
    slug: 'rex-auto-repair',
    city: 'Rex',
    region: 'Clayton County, GA',
    title: 'Auto Repair in Rex, GA | Southlake Auto Care | (770) 961-8500',
    description:
      'Rex, GA auto repair from a shop you can trust. Southlake Auto Care handles brakes, oil changes, diagnostics, AC & transmissions nearby. Call (770) 961-8500.',
    heroEyebrow: 'Serving Rex, GA',
    heroTitle: 'Auto Repair in Rex, GA',
    heroDesc:
      'A short drive from Rex, Southlake Auto Care delivers honest diagnostics and quality repairs without the dealer markup.',
    introHeading: 'Dependable Repairs for Rex Drivers',
    intro:
      "Rex sits just east of us in Clayton County, and its drivers make the quick trip over for repairs they can trust. Whether you're coming from Rex Road or the neighborhoods toward Ellenwood, we're an easy, honest stop for everything from routine maintenance to bigger repairs.",
    local:
      'Rex drivers cover a mix of rural roads and county highways, which means suspension, tires, and alignment tend to take a beating. We keep an eye on those systems and give you an honest, prioritized plan rather than a laundry list of upsells.',
    nearby: [
      { name: 'Forest Park', href: '/forest-park-auto-repair' },
      { name: 'Morrow', href: '/morrow-auto-repair' },
      { name: 'Stockbridge', href: '/stockbridge-auto-repair' }
    ],
    faqs: [
      { q: 'How far is the shop from Rex?', a: "We're a short drive west in the Southlake area of Morrow — usually about ten minutes from most of Rex." },
      { q: 'Do you check suspension and alignment?', a: 'Yes. Rougher county roads are hard on suspension and alignment, and we inspect those systems as part of a thorough visit.' },
      { q: 'Will you tell me what can wait?', a: 'Always. We prioritize repairs by safety and urgency so you can budget the important work first.' }
    ]
  },
  {
    slug: 'lovejoy-auto-repair',
    city: 'Lovejoy',
    region: 'Clayton County, GA',
    title: 'Auto Repair in Lovejoy, GA | Southlake Auto Care | (770) 961-8500',
    description:
      'Auto repair for Lovejoy, GA drivers. Southlake Auto Care offers honest brakes, oil changes, diagnostics, AC & transmission service up Tara Boulevard. Call (770) 961-8500.',
    heroEyebrow: 'Serving Lovejoy, GA',
    heroTitle: 'Auto Repair in Lovejoy, GA',
    heroDesc:
      'A straight shot up Tara Boulevard from Lovejoy, Southlake Auto Care gives South Clayton drivers repairs they can trust at prices that make sense.',
    introHeading: 'Honest Auto Repair for Lovejoy',
    intro:
      'Lovejoy drivers head up Tara Boulevard (Highway 19/41) to reach us, and it\u2019s a drive plenty make gladly for straight answers and fair pricing. From the growing subdivisions off Talmadge Road to McDonough Road, we\u2019re the trusted shop for South Clayton County.',
    local:
      'Longer commutes from Lovejoy into the metro rack up highway miles fast, so we pay close attention to tires, brakes, fluids, and the cooling system that keeps your engine alive in summer traffic. You\u2019ll always get a written estimate before we begin.',
    nearby: [
      { name: 'Jonesboro', href: '/jonesboro-auto-repair' },
      { name: 'Hampton', href: '/hampton-auto-repair' },
      { name: 'Morrow', href: '/morrow-auto-repair' }
    ],
    faqs: [
      { q: 'How do I get to you from Lovejoy?', a: "Head north on Tara Boulevard toward the Southlake area of Morrow — we're typically about 15 minutes from Lovejoy." },
      { q: 'Is the drive worth it?', a: 'Lovejoy customers tell us the honest diagnostics and fair pricing are well worth the short trip up Tara.' },
      { q: 'Do you handle commuter mileage maintenance?', a: 'Yes — factory-schedule maintenance and wear-item service are some of the most common things we do for commuting drivers.' }
    ]
  },
  {
    slug: 'hampton-auto-repair',
    city: 'Hampton',
    region: 'Henry County, GA',
    title: 'Auto Repair in Hampton, GA | Southlake Auto Care | (770) 961-8500',
    description:
      'Hampton, GA auto repair near Atlanta Motor Speedway. Southlake Auto Care handles brakes, oil changes, diagnostics, AC & transmissions. Call (770) 961-8500.',
    heroEyebrow: 'Serving Hampton, GA',
    heroTitle: 'Auto Repair in Hampton, GA',
    heroDesc:
      'From the Atlanta Motor Speedway area and beyond, Hampton drivers trust Southlake Auto Care for honest diagnostics and repairs done right.',
    introHeading: 'Repairs Hampton Drivers Can Trust',
    intro:
      'Hampton sits south of us near the Atlanta Motor Speedway, and its drivers make the trip for the honest, no-pressure service that\u2019s hard to find at a chain. Whether you\u2019re off Highway 19/41 or the roads toward Lovejoy and McDonough, we\u2019re a dependable option for South Metro drivers.',
    local:
      'Hampton\u2019s mix of rural highway and event-weekend traffic is tough on brakes and cooling systems, and longer drives mean maintenance matters. We inspect the wear items that keep you safe and give you a clear plan and price before starting.',
    nearby: [
      { name: 'Lovejoy', href: '/lovejoy-auto-repair' },
      { name: 'McDonough', href: '/mcdonough-auto-repair' },
      { name: 'Jonesboro', href: '/jonesboro-auto-repair' }
    ],
    faqs: [
      { q: 'How far is the shop from Hampton?', a: "We're north in the Southlake area of Morrow — generally about 20 minutes from Hampton depending on your starting point." },
      { q: 'Do you service vehicles before long trips?', a: 'Yes. Pre-trip inspections — brakes, fluids, tires, and cooling — are a smart call before any long drive, and one of our most requested services.' },
      { q: 'Can you diagnose a check engine light?', a: 'Absolutely. We run professional diagnostics to find the real cause instead of just clearing the code.' }
    ]
  },
  {
    slug: 'mcdonough-auto-repair',
    city: 'McDonough',
    region: 'Henry County, GA',
    title: 'Auto Repair in McDonough, GA | Southlake Auto Care | (770) 961-8500',
    description:
      'McDonough, GA auto repair with honest pricing. Southlake Auto Care handles brakes, oil changes, diagnostics, AC & transmissions a short I-75 drive away. Call (770) 961-8500.',
    heroEyebrow: 'Serving McDonough, GA',
    heroTitle: 'Auto Repair in McDonough, GA',
    heroDesc:
      'A quick I-75 drive from McDonough, Southlake Auto Care gives Henry County drivers dealer-quality repairs without the dealer price tag.',
    introHeading: 'Straight Answers for McDonough',
    intro:
      'McDonough drivers head up I-75 to reach us, trading a short drive for honest diagnostics and fair pricing. From the historic square to the neighborhoods off Highway 20 and 81, we\u2019re a trusted alternative when a dealer estimate feels steep.',
    local:
      'I-75 commuting from McDonough means real highway miles, which wear tires, brakes, and transmissions faster than around-town driving. Our multi-point inspection catches those issues early, and you approve a written estimate before any work begins.',
    nearby: [
      { name: 'Stockbridge', href: '/stockbridge-auto-repair' },
      { name: 'Hampton', href: '/hampton-auto-repair' },
      { name: 'Henry County', href: '/henry-county-auto-repair' }
    ],
    faqs: [
      { q: 'How far is Southlake Auto Care from McDonough?', a: "We're up I-75 in the Southlake area of Morrow — usually around 20 minutes from McDonough." },
      { q: 'Why drive from McDonough for repairs?', a: 'Customers make the trip for our honest diagnostics and upfront pricing, which often beat a dealer estimate for the same work.' },
      { q: 'Do you service trucks and SUVs?', a: 'Yes — cars, trucks, and SUVs, domestic and import. Highway commuters and work vehicles alike.' }
    ]
  },
  {
    slug: 'fayetteville-auto-repair',
    city: 'Fayetteville',
    region: 'Fayette County, GA',
    title: 'Auto Repair in Fayetteville, GA | Southlake Auto Care | (770) 961-8500',
    description:
      'Fayetteville, GA auto repair you can trust. Southlake Auto Care handles brakes, oil changes, diagnostics, AC & transmissions near Highways 85 & 54. Call (770) 961-8500.',
    heroEyebrow: 'Serving Fayetteville, GA',
    heroTitle: 'Auto Repair in Fayetteville, GA',
    heroDesc:
      'Fayetteville drivers count on Southlake Auto Care for honest diagnostics and quality repairs worth the short drive across the county line.',
    introHeading: 'Honest Repairs for Fayetteville',
    intro:
      'Fayetteville sits west of us near Highways 85 and 54 and the growing Trilith studio area, and its drivers make the trip for repairs they can trust. When you want straight answers and fair pricing instead of a hard sell, we\u2019re a dependable option for Fayette County.',
    local:
      'Commuting between Fayetteville and the metro adds up highway miles, so we focus on the wear items — brakes, tires, fluids, and cooling — that keep those drives safe. Every job starts with an honest diagnosis and a written estimate you approve first.',
    nearby: [
      { name: 'Riverdale', href: '/riverdale-auto-repair' },
      { name: 'Jonesboro', href: '/jonesboro-auto-repair' },
      { name: 'Lovejoy', href: '/lovejoy-auto-repair' }
    ],
    faqs: [
      { q: 'How far is the shop from Fayetteville?', a: "We're east in the Southlake area of Morrow — generally about 25 minutes from Fayetteville depending on traffic." },
      { q: 'Is it worth crossing the county line?', a: 'Fayetteville customers tell us the honest service and fair pricing make the short drive worthwhile.' },
      { q: 'Do you offer financing on larger repairs?', a: 'For qualifying customers, yes — we can point you toward financing so a bigger repair doesn\u2019t have to wait.' }
    ]
  },
  {
    slug: 'clayton-county-auto-repair',
    city: 'Clayton County',
    region: 'Georgia',
    title: 'Auto Repair in Clayton County, GA | Southlake Auto Care | (770) 961-8500',
    description:
      'Serving all of Clayton County, GA — Jonesboro, Morrow, Forest Park, Riverdale, Lake City & more. Southlake Auto Care for brakes, diagnostics, AC & transmissions. Call (770) 961-8500.',
    heroEyebrow: 'Serving Clayton County, GA',
    heroTitle: 'Auto Repair in Clayton County, GA',
    heroDesc:
      'From Jonesboro to Riverdale, Southlake Auto Care is Clayton County\u2019s trusted shop for honest diagnostics and quality repairs at fair prices.',
    introHeading: 'Clayton County\u2019s Local Auto Shop',
    intro:
      'Our shop on Jonesboro Road sits near the center of Clayton County, which makes us a convenient, trusted option for drivers across the county — Jonesboro, Morrow, Forest Park, Riverdale, Lake City, Lovejoy, and Rex. Wherever you are in Clayton County, quality auto repair is close by.',
    local:
      'Clayton County driving means a lot of stop-and-go on Tara Boulevard and Highway 85, plenty of short in-town trips, and hot summer idling — all hard on brakes, batteries, and cooling systems. We inspect those closely on every visit and always explain your options before starting.',
    nearby: [
      { name: 'Jonesboro', href: '/jonesboro-auto-repair' },
      { name: 'Riverdale', href: '/riverdale-auto-repair' },
      { name: 'Forest Park', href: '/forest-park-auto-repair' }
    ],
    faqs: [
      { q: 'Which Clayton County cities do you serve?', a: 'All of them — including Jonesboro, Morrow, Forest Park, Riverdale, Lake City, Lovejoy, and Rex. Our shop is centrally located on Jonesboro Road.' },
      { q: 'Do you help with Georgia emissions?', a: "Yes. If your vehicle won't pass or has a check engine light, we diagnose the cause and handle the repairs to get you compliant." },
      { q: 'What kinds of vehicles do you service?', a: 'Cars, trucks, and SUVs — domestic and import — from routine maintenance to complex diagnostics.' }
    ]
  },
  {
    slug: 'henry-county-auto-repair',
    city: 'Henry County',
    region: 'Georgia',
    title: 'Auto Repair in Henry County, GA | Southlake Auto Care | (770) 961-8500',
    description:
      'Serving Henry County, GA — Stockbridge, McDonough, Hampton & beyond. Southlake Auto Care for honest brakes, diagnostics, AC & transmission repair a short I-75 drive away. Call (770) 961-8500.',
    heroEyebrow: 'Serving Henry County, GA',
    heroTitle: 'Auto Repair in Henry County, GA',
    heroDesc:
      'A short I-75 drive serves Henry County drivers from Stockbridge to McDonough — Southlake Auto Care delivers honest diagnostics and quality repairs.',
    introHeading: 'Trusted Repairs for Henry County',
    intro:
      'Henry County drivers from Stockbridge, McDonough, and Hampton reach us quickly via I-75, trading a short drive for honest diagnostics and fair pricing. When a dealer estimate feels inflated, we\u2019re the dependable, no-pressure alternative just across the county line.',
    local:
      'Henry County means highway commuting on I-75 and Highway 138, which puts real wear on tires, brakes, and transmissions. Our multi-point inspection catches problems early, and you approve a written estimate before we start — so there are never surprises at pickup.',
    nearby: [
      { name: 'Stockbridge', href: '/stockbridge-auto-repair' },
      { name: 'McDonough', href: '/mcdonough-auto-repair' },
      { name: 'Hampton', href: '/hampton-auto-repair' }
    ],
    faqs: [
      { q: 'Which Henry County areas do you serve?', a: 'Stockbridge, McDonough, Hampton, and the surrounding communities — all a short I-75 drive from our shop in the Southlake area of Morrow.' },
      { q: 'How long is the drive from Henry County?', a: 'Most Henry County drivers reach us in roughly 15 to 20 minutes via I-75, depending on where they start.' },
      { q: 'Do you handle high-mileage commuter cars?', a: 'Yes. Highway commuters are a big part of who we serve — we keep wear items and fluids on schedule so your vehicle stays reliable.' }
    ]
  }
];
