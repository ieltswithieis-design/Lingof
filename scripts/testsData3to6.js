// Tests 3 to 6 with authentic, diverse academic passages and 40 questions each

export const tests3to6 = [
  {
    id: 3,
    title: "Academic Reading Test 3 • Paleoclimatology, Ancient Epigraphy & Swarm Robotics",
    passages: [
      `[A] Deep beneath the Antarctic ice sheet, locked within microscopic air bubbles trapped over eight hundred millennia, lies the most pristine archive of Earth's atmospheric history. By drilling deep ice cores at sites such as Dome Concordia, paleoclimatologists extract cylindrical columns of glacial ice exceeding three thousand metres in length. Each annual layer of snowfall compresses into solid ice, hermetically preserving ambient greenhouse gases, volcanic ash, and extraterrestrial cosmic dust from ancient epochs.

[B] The analytical power of ice core science rests largely on stable isotope geochemistry. Water molecules composed of heavier isotopes, such as deuterium or oxygen-18, evaporate less readily and condense more rapidly than those containing lighter isotopes. Consequently, during colder glacial periods, oceanic moisture transported to polar latitudes becomes progressively depleted of heavy isotopes. By measuring the ratio of oxygen-18 to oxygen-16 in ice crystals using mass spectrometry, researchers reconstruct Antarctic surface temperatures with remarkable seasonal precision.

[C] Analysis of entrapped atmospheric gases has fundamentally transformed our understanding of climate dynamics. Measurements from the EPICA Dome C core reveal that during the past eight glacial cycles, atmospheric carbon dioxide concentrations oscillated within a constrained natural envelope between 180 parts per million during deep ice ages and 280 parts per million during warm interglacials. Never once across 800,000 years did carbon dioxide concentrations exceed 300 parts per million prior to the Industrial Revolution.

[D] Beyond greenhouse gas quantification, ice cores provide an unparalleled chronicle of cataclysmic volcanism and solar activity. Beryllium-10 isotopes, produced by galactic cosmic rays striking atmospheric nitrogen, serve as a proxy for historic solar magnetic cycles. Furthermore, electrical conductivity measurements across ice cores detect distinct spikes corresponding to sulfate aerosols deposited by historic eruptions, including the 1815 explosion of Mount Tambora and the mysterious 1257 Samalas eruption in Indonesia.

[E] Extracting and transporting fragile ice cores across polar deserts presents immense logistical and cryo-mechanical hurdles. Modern thermal-electromechanical drills operate inside fluid-filled boreholes to prevent hydrostatic closure from surrounding glacial pressure. Once retrieved, cores must be cut, cataloged, and transported under strict continuous sub-zero refrigeration (-30°C) to prevent irreversible isotopic diffusion and gas depressurization before reaching laboratory spectrometers.`,

      `[A] When British architect Michael Ventris announced on BBC radio in June 1952 that he had deciphered Linear B, the script found on thousands of baked clay tablets in Knossos and Pylos, he solved one of European archaeology's greatest mysteries. For half a century following Sir Arthur Evans's initial excavations in Crete, scholars widely assumed that the script encoded an unknown pre-Hellenic Minoan language unrelated to classical Greek.

[B] Ventris's decipherment succeeded not through the discovery of a multilingual bilingual text like the Rosetta Stone, but through painstaking cryptanalytic grid work pioneered by American classicist Alice Kober. Kober observed that specific words in the Linear B tablets exhibited recurring variations in their terminal characters. She deduced that these inflected endings signified grammatical case suffixes characteristic of an Indo-European language, though she passed away before completing the grid.

[C] Building upon Kober's structural matrix, Ventris arranged syllabic signs into horizontal and vertical axes representing shared vowel and consonant values. His decisive breakthrough came when he substituted tentative phonetic values into place-names known to have survived continuously in Crete, such as Amnisos, Knossos, and Tylissos. The resulting phonetic readings instantly yielded recognizable archaic Greek vocabulary, demonstrating that Linear B was an early dialect of Mycenaean Greek dating to 1400 BCE.

[D] The deciphered texts revolutionized historical understanding of Late Bronze Age society. Rather than poetic verse or mythological literature, the tablets proved to be exhaustive bureaucratic account ledgers compiled by palace scribes. They detailed tax levies, bronze allotments for chariot wheels, olive oil rations for priestesses, livestock censuses, and naval defense watches along coastal Peloponnese outposts.

[E] Despite the triumphant decipherment of Linear B, its predecessor—Linear A—remains stubbornly undeciphered. Used by the Minoans from roughly 1800 to 1450 BCE, Linear A shares numerous phonetic ideograms with Linear B. However, when Linear B phonetic values are applied to Linear A inscriptions, the resulting words yield no coherent matches with known Greek, Semitic, or Anatolian languages, keeping the Minoan linguistic identity tantalizingly beyond reach.`,

      `[A] Across the vast monocultures of the American Midwest and the terraced orchards of East Asia, agricultural engineering is witnessing a fundamental paradigm shift: the transition from solitary, heavy diesel tractors to autonomous multi-agent swarm robotics. Traditional mechanized farming relies upon massive machinery weighing upwards of twenty tons, which causes severe subsoil compaction, accelerates erosion, and demands indiscriminate broadcast spraying of agrochemicals.

[B] Swarm robotics counters these ecological liabilities through collective decentralization, inspired by the self-organizing behavior of ant colonies and bird flocks. Rather than employing a single colossal machine, farmers deploy fleets of twenty to fifty small, battery-powered autonomous rovers and aerial drones coordinated via local mesh networks. Operating collaboratively without central hierarchical control, the rovers distribute operational tasks through simple peer-to-peer algorithmic rules.

[C] Micro-targeting capability forms the technical cornerstone of swarm agronomy. Equipped with high-resolution multispectral cameras and edge-computed computer vision models, autonomous rovers inspect individual crop plants millimeter by millimeter. Instead of drenching an entire fifty-hectare field in synthetic herbicide, a rover identifies isolated weed seedlings and delivers micro-droplets of chemical directly onto weed leaves, or eliminates them mechanically using ultrasonic cutters or precision laser pulses.

[D] Field trials conducted at research institutes in the Netherlands and California indicate that swarm micro-targeting can reduce overall chemical pesticide consumption by up to ninety-five percent while reducing diesel fuel dependencies to zero. Moreover, because individual rovers weigh less than forty kilograms, soil compaction is virtually eliminated, preserving soil porosity, earthworm populations, and mycorrhizal fungal networks critical for nutrient cycling.

[E] Significant technical hurdles must still be surmounted before agricultural swarm robotics achieves ubiquitous commercialization. Reliable outdoor telemetry across rolling terrain remains challenging when dense crop canopies obstruct wireless signals. Additionally, swarm coordination algorithms must exhibit robust fault tolerance: if three or four rovers in a fifty-unit fleet suffer mechanical breakdown or battery depletion, the remaining units must dynamically reallocate territory and recharge schedules without human supervisor intervention.`
    ],
    questions: [
      { type: "tfng", q: "Ice cores extracted from Dome Concordia preserve atmospheric dust and greenhouse gases from over 800,000 years ago.", answer: "TRUE" },
      { type: "tfng", q: "Water molecules containing heavy oxygen-18 isotopes evaporate more readily than molecules with lighter isotopes.", answer: "FALSE" },
      { type: "tfng", q: "Carbon dioxide levels in the EPICA Dome C core exceeded 300 parts per million during pre-industrial warm periods.", answer: "FALSE" },
      { type: "tfng", q: "Beryllium-10 isotopes in ice cores serve as an indicator of past solar magnetic activity.", answer: "TRUE" },
      { type: "tfng", q: "Ice core drilling boreholes are left empty to allow ambient polar air to cool the drill bit.", answer: "FALSE" },
      { type: "tfng", q: "Extracted ice cores must be kept at continuous temperatures of -30°C during transport to prevent gas loss.", answer: "TRUE" },
      { type: "tfng", q: "The United Nations funds all major polar ice core drilling operations worldwide.", answer: "NOT GIVEN" },
      { type: "mcq", q: "How do paleoclimatologists reconstruct past Antarctic temperatures from ice core samples?", options: ["By counting annual layers of compressed pollen", "By measuring the ratio of oxygen-18 to oxygen-16 in ice crystals", "By measuring the depth of glacial fissures", "By analyzing the weight of extraterrestrial cosmic dust"], answer: 1 },
      { type: "mcq", q: "What did electrical conductivity spikes in Antarctic ice cores reveal?", options: ["Ancient lightning strike frequencies", "Extinctions of ocean phytoplankton", "Sulfate aerosols deposited by historic volcanic eruptions", "Seasonal shifts in polar magnetic poles"], answer: 2 },
      { type: "mcq", q: "Why was the decipherment of Linear B surprising to classical archaeologists?", options: ["It was written in modern Latin script", "Scholars had long assumed it was an unknown non-Greek Minoan tongue", "The tablets were made of papyrus rather than clay", "It contained mathematical equations rather than words"], answer: 1 },
      { type: "mcq", q: "What contribution did Alice Kober make toward deciphering Linear B?", options: ["She found a trilingual inscription carved in stone", "She recognized that word endings varied systematically according to grammatical case", "She proved that the Minoan script originated in ancient Egypt", "She translated the first complete tablet into French"], answer: 1 },
      { type: "completion", q: "Linear B tablets were primarily administrative ledgers listing items like tax levies and bronze for chariot ________.", answer: "wheels" },
      { type: "completion", q: "Unlike Linear B, the older Minoan script named Linear ________ remains undeciphered.", answer: "A" },
      
      { type: "tfng", q: "Michael Ventris tested phonetic values by inserting them into known ancient Cretan place-names.", answer: "TRUE" },
      { type: "tfng", q: "Linear B tablets contained grand poetic epics and mythological dramas.", answer: "FALSE" },
      { type: "tfng", q: "Linear A and Linear B share zero pictorial or phonetic ideograms.", answer: "FALSE" },
      { type: "tfng", q: "Heavy conventional tractors cause severe subsoil compaction that harms soil structure.", answer: "TRUE" },
      { type: "tfng", q: "Agricultural swarm robots rely on a single central computer tower to direct each individual movement.", answer: "FALSE" },
      { type: "tfng", q: "Micro-targeting rovers can destroy weeds using focused laser pulses or ultrasonic cutters.", answer: "TRUE" },
      { type: "tfng", q: "Swarm robotics has completely replaced conventional diesel farming across all European countries.", answer: "FALSE" },
      { type: "mcq", q: "How do swarm rovers coordinate their actions without central control?", options: ["Through satellite GPS commands issued from headquarters", "Through local peer-to-peer algorithmic rules on mesh networks", "By following pre-laid subterranean magnetic wires", "Through manual radio control operated by tractor drivers"], answer: 1 },
      { type: "mcq", q: "By how much can robotic micro-targeting reduce chemical pesticide usage according to field trials?", options: ["Up to 25 percent", "Up to 50 percent", "Up to 75 percent", "Up to 95 percent"], answer: 3 },
      { type: "mcq", q: "Why are lightweight rovers beneficial for soil ecology?", options: ["They dig deep trenches that aerate groundwater", "Their light weight avoids compacting soil, protecting earthworms and fungal networks", "They release beneficial electric currents into plant roots", "They reflect solar heat away from the crop canopy"], answer: 1 },
      { type: "mcq", q: "What challenge arises when agricultural swarm robots operate in tall, dense crops?", options: ["The foliage overheats the rovers' batteries", "The dense canopy can obstruct wireless communication signals", "The rovers run out of mechanical lubricant within hours", "Crop leaves damage the rovers' rubber tracks"], answer: 1 },
      { type: "completion", q: "Rather than broadcast spraying, swarm rovers identify isolated weeds and apply precise ________ of chemical.", answer: "micro-droplets" },
      { type: "completion", q: "Swarm systems require dynamic fault tolerance so other units reallocate work if rovers run low on ________.", answer: "battery" },

      { type: "tfng", q: "Linear B dates back to approximately 1400 BCE.", answer: "TRUE" },
      { type: "tfng", q: "Alice Kober lived to see Ventris announce his radio breakthrough in 1952.", answer: "FALSE" },
      { type: "tfng", q: "Swarm rovers weigh under forty kilograms each.", answer: "TRUE" },
      { type: "tfng", q: "Conventional 20-ton tractors are powered entirely by zero-emission hydrogen cells.", answer: "FALSE" },
      { type: "tfng", q: "Modern ice core drilling rigs utilize drill fluids to counter high glacial pressure in deep boreholes.", answer: "TRUE" },
      { type: "tfng", q: "Sir Arthur Evans successfully translated all Knossos tablets during his lifetime.", answer: "FALSE" },
      { type: "tfng", q: "Weed-killing lasers used on farm rovers present fire hazards in dry grain fields.", answer: "NOT GIVEN" },
      { type: "mcq", q: "What was the main substance recorded in Knossos tablets as rations for priestesses?", options: ["Barley flour", "Olive oil", "Imported honey", "Wine"], answer: 1 },
      { type: "mcq", q: "What kind of natural organisms inspired the decentralized coordination of farm robot swarms?", options: ["Solitary spiders and desert lizards", "Ant colonies and flocking birds", "Coral polyp colonies", "Deep-sea bioluminescent fish"], answer: 1 },
      { type: "mcq", q: "What was the maximum natural level of atmospheric carbon dioxide across the 800,000-year Dome C record?", options: ["180 ppm", "240 ppm", "280 ppm", "380 ppm"], answer: 2 },
      { type: "mcq", q: "What script was used by the Minoans prior to 1450 BCE that remains undeciphered today?", options: ["Linear A", "Cuneiform III", "Etruscan cursive", "Hieratic papyrus"], answer: 0 },
      { type: "completion", q: "Dome Concordia ice cores have allowed researchers to map past climate over eight ________ millennia.", answer: "hundred" },
      { type: "completion", q: "Linear B was deciphered to be an archaic dialect of the ________ language.", answer: "Greek" },
      { type: "completion", q: "Swarm rovers inspect plants using high-resolution ________ cameras paired with computer vision.", answer: "multispectral" }
    ]
  },
  {
    id: 4,
    title: "Academic Reading Test 4 • Coastal Ecology, Psychoacoustics & Sleep Neuroscience",
    passages: [
      `[A] Fringing tropical and subtropical coastlines across over one hundred equatorial nations, mangrove forests constitute one of the planet's most resilient marine-terrestrial ecotones. Positioned directly at the boundary between land and sea, these halophytic tree communities survive in waterlogged, hyper-saline sediments subject to daily tidal inundation and intense anaerobic stress.

[B] The architectural marvel of the mangrove lies in its specialized root systems. Species such as the red mangrove (Rhizophora mangle) develop extensive stilt roots—arched prop roots that loop outward from the main trunk into murky tidal waters. These intricate, interlocking root matrices act as high-efficiency hydraulic energy dissipators. Field measurements along the Sundarbans indicate that a dense one-hundred-metre strip of mature mangrove forest can attenuate incoming storm surge and tsunami wave energy by up to sixty-six percent.

[C] In addition to physical wave buffering, mangrove roots facilitate rapid coastal sedimentation. By drastically reducing tidal current velocity, the dense stilt networks cause suspended silts, clays, and particulate organic matter to settle onto the sea floor. Over decades, this sedimentation elevates coastal shorelines, countering local sea-level rise while locking massive reservoirs of organic carbon—termed 'blue carbon'—into deep anoxic muds where microbial decomposition is severely retarded.

[D] Physiological adaptations to high salinity exhibit extraordinary diversity across mangrove taxa. While Rhizophora species employ ultra-filtration membranes in their root vascular tissues to exclude up to ninety-nine percent of sea salt before it reaches the sap stream, black mangroves (Avicennia germinans) permit saline intake but actively excrete excess sodium chloride through microscopic foliar salt glands on the surface of their leaves, forming visible white brine crystals.

[E] Despite their ecological indispensability, over thirty-five percent of the world's mangrove forests have been cleared over the past half-century. The primary drivers include coastal aquaculture, particularly commercial tiger prawn farming, and urban waterfront real estate expansion. Conserving and restoring these maritime sanctuaries is increasingly recognized by international climate agreements as a cornerstone of cost-effective coastal resilience.`,

      `[A] In the bustling plazas and cobblestone alleyways of pre-industrial cities, the acoustic environment was dominated by human voices, horse hooves, and artisan hammers—sounds of organic origin and localized proximity. The Industrial Revolution radically disrupted this historical equilibrium, ushering in an era of continuous low-frequency mechanical rumble from steam turbines, rail transit, and combustion engines. In 1977, Canadian composer and researcher R. Murray Schafer coined the term 'soundscape' to analyze the aesthetic and psychological properties of auditory environments.

[B] Psychoacoustics—the scientific study of human sound perception—distinguishes between physical acoustic metrics such as decibel levels and subjective psychological experiences of annoyance and cognitive fatigue. Laboratory experiments reveal that broadband mechanical noise, even at moderate amplitudes between 55 and 65 decibels, elevates circulating cortisol and triggers subtle sympathetic nervous system arousal, impairing working memory and executive task performance.

[C] Conversely, natural acoustic stimuli exert a restorative influence on human attention. Under Attention Restoration Theory, biophonic sounds—such as flowing streams, wind rustling through foliage, and birdsong—engage 'soft fascination'. Unlike intrusive sirens or traffic horns that demand effortful, voluntary cognitive inhibition, natural soundscapes allow the prefrontal cortex to recover from attentional depletion, significantly lowering physiological stress markers.

[D] Urban sound designers are now actively integrating psychoacoustic principles into municipal architecture. Rather than relying solely on monolithic sound-barrier walls that merely reflect engine noise back into urban corridors, designers implement acoustic masking techniques. By introducing cascading water features and carefully calibrated urban green belts, engineers introduce pleasing sound signatures that psychoacoustically mask unwanted traffic frequencies without increasing overall sound pressure.

[E] Looking ahead, the electrification of municipal transit fleets presents both unprecedented acoustic opportunities and unexpected safety hazards. While electric buses dramatically diminish the low-frequency drone that has plagued urban cores for a century, their near-silent operation at low velocities poses acute risks to visually impaired pedestrians, prompting international regulators to mandate Acoustic Vehicle Alerting Systems (AVAS) that emit synthetic sound signatures.`,

      `[A] For nearly a century following the discovery of rapid eye movement (REM) sleep in 1953, neuroscientists viewed the sleeping brain through the lens of passive recovery. Today, advanced electrophysiology and in vivo two-photon microscopy have overturned this assumption, establishing that sleep is a metabolically active, highly coordinated neural state essential for synaptic recalibration, toxic waste clearance, and memory consolidation.

[B] A central theoretical model explaining sleep's cognitive restorative function is the Synaptic Homeostasis Hypothesis (SHY). During waking hours, as humans navigate novel environments and absorb sensory information, synapses across the cerebral cortex undergo net potentiation, steadily increasing baseline synaptic strength and metabolic energy consumption. If this potentiation continued indefinitely, cortical networks would quickly saturate, rendering subsequent learning impossible.

[C] Slow-wave sleep (SWS), characterized by synchronous delta oscillations between 0.5 and 4 Hertz, acts as a systematic synaptic normalizer. During these deep non-REM intervals, the brain downscales synaptic connections by roughly twenty percent across cortical circuits. Weaker synapses established by transient background noise are pruned away, while strong connections representing significant memories are selectively preserved and integrated, restoring cellular energy budgets and baseline learning capacity for the next wakeful day.

[D] Simultaneously, the sleeping brain activates a specialized waste-clearance network known as the glymphatic system. Discovered in 2012 by neurobiologist Maiken Nedergaard, the glymphatic pathway utilizes convective cerebrospinal fluid (CSF) flow through perivascular channels surrounding cerebral arteries. During deep sleep, astrocytic water channels (aquaporin-4) expand the interstitial space by more than sixty percent, dramatically accelerating the clearance of metabolic waste products, including amyloid-beta and tau proteins implicated in neurodegenerative disorders.

[E] Chronic sleep deprivation dismantles these restorative cascades with alarming speed. Restricting human adults to four hours of sleep per night for five consecutive days impairs sustained attentional vigilance to levels comparable with legal alcohol intoxication. Furthermore, chronic disruption of slow-wave sleep impedes nightly glymphatic clearance, contributing over decades to the progressive cerebral accumulation of toxic neurodegenerative aggregates.`
    ],
    questions: [
      { type: "tfng", q: "Mature mangrove forests can reduce storm surge wave energy by up to sixty-six percent.", answer: "TRUE" },
      { type: "tfng", q: "Red mangrove roots take up seawater without excluding any dissolved salt.", answer: "FALSE" },
      { type: "tfng", q: "Mangrove sedimentation creates 'blue carbon' deposits in oxygen-depleted muds.", answer: "TRUE" },
      { type: "tfng", q: "Black mangroves excrete excess salt through microscopic glands on their leaves.", answer: "TRUE" },
      { type: "tfng", q: "Over eighty percent of the world's mangrove forests have been cleared for shrimp aquaculture.", answer: "FALSE" },
      { type: "tfng", q: "Commercial tiger prawn farming has contributed to the destruction of mangrove habitats.", answer: "TRUE" },
      { type: "tfng", q: "Mangrove wood is legally protected from commercial harvesting in every Asian nation.", answer: "NOT GIVEN" },
      { type: "mcq", q: "What is the primary function of red mangrove stilt roots during tidal inundation?", options: ["To store fresh rainwater", "To absorb sunlight directly from sea waves", "To act as hydraulic energy dissipators and buffer waves", "To anchor deep down into freshwater aquifers"], answer: 2 },
      { type: "mcq", q: "Why is organic matter preserved for long periods in mangrove sediments?", options: ["High water pressure compresses it into rock", "The mud environment is anoxic, severely slowing microbial decay", "Salt water petrifies plant leaves within weeks", "Marine animals eat all competing bacteria"], answer: 1 },
      { type: "mcq", q: "Who coined the term 'soundscape' in 1977 to analyze auditory environments?", options: ["Daniel Kahneman", "Maiken Nedergaard", "R. Murray Schafer", "Michael Ventris"], answer: 2 },
      { type: "mcq", q: "According to Attention Restoration Theory, why do natural sounds reduce mental fatigue?", options: ["They vibrate the eardrum at supersonic frequencies", "They trigger 'soft fascination' that allows the prefrontal cortex to rest", "They completely block the auditory cortex from hearing outside noise", "They induce immediate deep sleep within minutes"], answer: 1 },
      { type: "completion", q: "To protect pedestrians from quiet electric buses, authorities require Acoustic Vehicle ________ Systems.", answer: "Alerting" },
      { type: "completion", q: "The term for carbon locked inside coastal marine sediments is ________ carbon.", answer: "blue" },

      { type: "tfng", q: "Continuous noise between 55 and 65 decibels can elevate human cortisol levels.", answer: "TRUE" },
      { type: "tfng", q: "Monolithic acoustic walls absorb all sound without reflecting noise back toward traffic.", answer: "FALSE" },
      { type: "tfng", q: "Urban designers use water fountains to psychoacoustically mask traffic rumble.", answer: "TRUE" },
      { type: "tfng", q: "Before the 1950s, neuroscientists considered sleep to be a state of passive neural recovery.", answer: "TRUE" },
      { type: "tfng", q: "Under the Synaptic Homeostasis Hypothesis, waking hours lead to a net downscaling of synaptic strength.", answer: "FALSE" },
      { type: "tfng", q: "During deep slow-wave sleep, cortical synapses are downscaled by approximately twenty percent.", answer: "TRUE" },
      { type: "tfng", q: "The glymphatic waste-clearance system operates most efficiently during vigorous exercise.", answer: "FALSE" },
      { type: "mcq", q: "What bodily fluid flows through perivascular channels to flush metabolic waste from the sleeping brain?", options: ["Blood plasma", "Cerebrospinal fluid (CSF)", "Lymph fluid", "Saline water"], answer: 1 },
      { type: "mcq", q: "By how much does the brain's interstitial space expand during deep sleep to facilitate waste removal?", options: ["By 10 percent", "By 25 percent", "By over 60 percent", "By 90 percent"], answer: 2 },
      { type: "mcq", q: "What toxic proteins implicated in neurodegenerative diseases are cleared by the glymphatic system?", options: ["Amyloid-beta and tau", "Insulin and glucagon", "Keratin and collagen", "Hemoglobin and albumin"], answer: 0 },
      { type: "mcq", q: "What physiological consequence was observed in adults restricted to four hours of sleep for five nights?", options: ["A complete loss of short-term memory", "Attentional vigilance impairment equivalent to legal alcohol intoxication", "A doubling of red blood cell counts", "Permanent loss of the ability to dream"], answer: 1 },
      { type: "completion", q: "The cellular water channels critical for glymphatic flow are named aquaporin-________.", answer: "4" },
      { type: "completion", q: "Slow-wave sleep is characterized by synchronized delta waves between 0.5 and ________ Hertz.", answer: "4" },

      { type: "tfng", q: "Mangroves inhabit both tropical and polar coastal regions.", answer: "FALSE" },
      { type: "tfng", q: "Black mangrove leaves often show visible white salt crystals on their surfaces.", answer: "TRUE" },
      { type: "tfng", q: "The glymphatic system was first discovered in the year 2012.", answer: "TRUE" },
      { type: "tfng", q: "Rapid eye movement (REM) sleep was discovered in 1853.", answer: "FALSE" },
      { type: "tfng", q: "Pre-industrial cities were quieter than modern cities because humans spoke in whispers.", answer: "FALSE" },
      { type: "tfng", q: "Electric transit vehicles eliminate all low-frequency engine rumbling.", answer: "TRUE" },
      { type: "tfng", q: "Tiger prawn farms can be converted back into mature mangrove forests within three months.", answer: "NOT GIVEN" },
      { type: "mcq", q: "What type of roots do red mangroves possess that loop outward from the trunk?", options: ["Tap roots", "Stilt or prop roots", "Tuberous roots", "Fleshy aerial tentacles"], answer: 1 },
      { type: "mcq", q: "Which scientific field studies the subjective psychological reaction to physical sounds?", options: ["Audiology", "Psychoacoustics", "Phonetics", "Neurolinguistics"], answer: 1 },
      { type: "mcq", q: "What happens to synapses representing significant memories during slow-wave sleep downscaling?", options: ["They are completely wiped out", "They are converted into fat cells", "They are selectively preserved and strengthened", "They migrate to the retina"], answer: 2 },
      { type: "mcq", q: "Where does the black mangrove excrete excess sodium chloride?", options: ["Through leaf salt glands", "Through root tips", "Into tree bark nodules", "Into falling flower petals"], answer: 0 },
      { type: "completion", q: "Tree communities adapted to survive in saline coastal sediments are described as ________ plants.", answer: "halophytic" },
      { type: "completion", q: "Canadian researcher R. Murray Schafer established the concept of the ________ in 1977.", answer: "soundscape" },
      { type: "completion", q: "The theory proposing that sleep renormalizes synaptic strength is known as the Synaptic ________ Hypothesis.", answer: "Homeostasis" }
    ]
  },
  {
    id: 5,
    title: "Academic Reading Test 5 • Historical Navigation, Battery Chemistry & Anthropology",
    passages: [
      `[A] In May 1976, the double-hulled voyaging canoe Hōkūleʻa sailed out of Honolua Bay in Hawaii, bound for the island of Tahiti over four thousand kilometres across the open Pacific. Crucially, the crew carried no compass, sextant, chronometer, or radio transmitter. Led by master navigator Mau Piailug from the Micronesian atoll of Satawal, the voyage successfully revitalized the ancient art of Polynesian wayfinding, proving that early Pacific islanders were deliberate voyagers rather than accidental drifters.

[B] Polynesian oceanic navigation relied upon an intimate cognitive synthesis of astronomical observations and oceanographic cues. Navigators organized the visible horizon into a mental celestial compass divided into thirty-two discrete azimuth houses. Because stars rise and set at identical declination points along the horizon regardless of season, a navigator memorized the trajectories of over two hundred stars, maintaining course by sighting the horizon positions of key celestial bodies as they rose and set through the night.

[C] When cloud cover obscured the night sky, navigators relied upon the motion of ocean swells. Unlike transient surface chop generated by local gusts of wind, swells are massive, deep-water undulating wave trains initiated thousands of kilometres away by distant storms. By feeling the pitch, roll, and yaw of the canoe's wooden hulls against multiple intersecting swell patterns, a master navigator could accurately deduce true cardinal direction in pitch darkness.

[D] Approaching distant islands demanded specialized terrestrial landfall detection skills. Hours before low-lying coral atolls breached the horizon, navigators detected their presence by tracking the flight patterns of pelagic seabirds. Tern and noddy species venture up to fifty kilometres offshore to feed during the day before flying directly home to their island roosts at sunset. Furthermore, navigators observed deep-sea cloud formations; stationary greenish clouds often reflected the sunlight echoing from shallow lagoon waters beneath.

[E] The revival of non-instrumental wayfinding has radically altered contemporary anthropological perspectives on prehistoric migrations. Linguistic and genetic evidence now confirms that Austronesian navigators systematically explored and colonized the Polynesian triangle—spanning from Hawaii in the north to Rapa Nui in the east and Aotearoa (New Zealand) in the southwest—using sophisticated maritime technology centuries before European mariners dared lose sight of their continental coastlines.`,

      `[A] The global transition toward renewable energy grids and long-range electric transport has accelerated the search for electrochemical storage devices that surpass conventional lithium-ion batteries. While traditional lithium-ion cells have underpinned consumer electronics for three decades, their reliance on volatile, flammable liquid organic electrolytes poses intrinsic thermal runaway risks, limits operating temperatures, and caps theoretical gravimetric energy density.

[B] Solid-state batteries represent the most promising alternative to liquid-electrolyte architectures. In a solid-state cell, the liquid electrolyte and porous polymeric separator are replaced by a dense, non-combustible solid ion conductor—typically an inorganic ceramic, sulfide glass, or solid polymer matrix. This fundamental physical substitution eliminates the fire hazard of boiling volatile solvents, allowing cells to operate safely across a much broader temperature envelope.

[C] More crucially, solid electrolytes enable the deployment of pure metallic lithium anodes. In conventional batteries, anodes are composed of porous graphite into which lithium ions intercalate. Graphite adds dead weight and volume, storing only one lithium atom for every six carbon atoms. Pure lithium metal boasts an extraordinary theoretical specific capacity of 3,860 milliampere-hours per gram—more than ten times that of graphite—theoretically enabling electric vehicles to double their driving range on a single charge.

[D] However, commercializing solid-state batteries has encountered formidable electro-chemo-mechanical obstacles, chief among which is dendrite proliferation. During rapid battery recharging, lithium ions migrating across the solid electrolyte can deposit unevenly, forming microscopic, needle-like metallic filaments known as dendrites. Over repeated charge cycles, these dendrites can propagate through microscopic grain boundaries in the brittle ceramic separator, eventually piercing the electrolyte and causing a catastrophic internal short circuit.

[E] Material scientists are tackling dendrite formation through innovative nanotechnology and interfacial engineering. Strategies include applying atomic layer deposition to coat solid electrolytes with ultra-thin protective films of aluminum oxide, and developing self-healing polymer electrolytes that soften at elevated local currents, thereby redistributing localized lithium flux. Achieving economically viable roll-to-roll manufacturing for these brittle ceramic membranes remains the final barrier to gigawatt-scale production.`,

      `[A] In the arid savannah woodlands surrounding Lake Eyasi in northern Tanzania, the Hadza people practice an egalitarian hunting and foraging lifestyle that has persisted for thousands of years. Long studied by evolutionary anthropologists, Hadza society provides profound empirical insights into the origins of human sociality, food sharing networks, and the cooperative breeding strategies that distinguish Homo sapiens from other primates.

[B] A defining characteristic of human hunter-gatherer economics is extensive, non-kin food sharing. In non-human primates such as chimpanzees, foraging is largely an individual endeavor; mothers share food with their unweaned offspring, but adult chimpanzees rarely transfer valuable calories to unrelated group members. In contrast, when a Hadza hunter successfully brings down a large mammal, such as an eland or giraffe, the meat is communally butchered and partitioned among all camp residents, regardless of biological relatedness or hunting success.

[C] Evolutionary theorists have debated the adaptive mechanisms underlying this communal generosity. Proponents of reciprocal altruism argue that meat sharing functions as a form of social insurance: because hunting large game involves high risk and frequent failure (a skilled hunter may secure meat on fewer than five percent of hunting days), sharing today ensures reciprocal provisioning when another camp member succeeds tomorrow.

[D] Alternatively, the 'costly signaling' hypothesis posits that successful hunters share meat conspicuously to advertise unobservable phenotypic qualities, such as physical stamina, intelligence, and generous disposition. Under this model, hunters gain social prestige, leadership influence, and enhanced mating opportunities in exchange for calorie redistribution. Recent biometric and dietary tracking by anthropologists suggests that both reciprocal insurance and costly signaling operate simultaneously in shaping camp dynamics.

[E] Furthermore, human cooperative survival relies heavily on post-reproductive elders—a dynamic formalized in the 'Grandmother Hypothesis'. Tracking Hadza daily foraging yields reveals that post-menopausal women consistently harvest the highest daily surplus of deeply buried wild tubers. By provisioning their daughters' young weaned children with energy-dense roots, grandmothers free young mothers to resume childbearing sooner, offering an evolutionary explanation for why human females live decades beyond reproductive menopause.`
    ],
    questions: [
      { type: "tfng", q: "The Hōkūleʻa crew relied on modern radio transmitters to navigate from Hawaii to Tahiti.", answer: "FALSE" },
      { type: "tfng", q: "Polynesian celestial compasses divided the horizon into thirty-two distinct directional houses.", answer: "TRUE" },
      { type: "tfng", q: "Ocean swells are generated strictly by local winds blowing near the canoe.", answer: "FALSE" },
      { type: "tfng", q: "Navigators observed terns and noddies because these birds fly back to land at sunset.", answer: "TRUE" },
      { type: "tfng", q: "Greenish clouds over the ocean often indicated the presence of a shallow coral lagoon.", answer: "TRUE" },
      { type: "tfng", q: "Polynesians were proven to be accidental castaways blown off course by winter storms.", answer: "FALSE" },
      { type: "tfng", q: "Mau Piailug was awarded an honorary doctorate in oceanography from Oxford University.", answer: "NOT GIVEN" },
      { type: "mcq", q: "How did Polynesian navigators maintain their course at night without stars?", options: ["By listening to whale vocalizations", "By sensing the pitch and roll of the canoe hulls against ocean swell patterns", "By tasting changes in surface water temperature", "By burning oil lamps to detect breeze direction"], answer: 1 },
      { type: "mcq", q: "What is the primary safety advantage of solid-state batteries over conventional lithium-ion cells?", options: ["They are made entirely of recycled wood", "They replace volatile, flammable liquid electrolytes with non-combustible solid conductors", "They require no electric current to charge", "They can be dissolved in seawater safely"], answer: 1 },
      { type: "mcq", q: "Why is a pure lithium metal anode superior to conventional graphite?", options: ["It weighs twice as much as steel", "It operates only at freezing temperatures", "It has more than ten times the theoretical capacity of graphite", "It is mined without any energy expenditure"], answer: 2 },
      { type: "mcq", q: "What causes internal short circuits in solid-state batteries during fast charging?", options: ["Electrolyte melting from excessive heat", "Microscopic needle-like lithium dendrites penetrating the solid separator", "Air bubbles reacting with copper terminals", "Liquid solvents vaporizing inside the casing"], answer: 1 },
      { type: "completion", q: "Polynesian wayfinder Mau Piailug originated from the Micronesian atoll of ________.", answer: "Satawal" },
      { type: "completion", q: "The microscopic metallic filaments that pierce battery separators are called ________.", answer: "dendrites" },

      { type: "tfng", q: "Conventional lithium-ion batteries use liquid electrolytes that can pose fire hazards.", answer: "TRUE" },
      { type: "tfng", q: "Graphite anodes store one lithium atom for every two carbon atoms.", answer: "FALSE" },
      { type: "tfng", q: "Nanotechnology coatings such as aluminum oxide are tested to prevent dendrite growth.", answer: "TRUE" },
      { type: "tfng", q: "Adult chimpanzees frequently share meat with unrelated adult group members.", answer: "FALSE" },
      { type: "tfng", q: "The Hadza people inhabit woodlands around Lake Eyasi in Tanzania.", answer: "TRUE" },
      { type: "tfng", q: "Reciprocal altruism suggests that meat sharing serves as a form of social risk insurance.", answer: "TRUE" },
      { type: "tfng", q: "Hadza hunters successfully catch large animals on over ninety percent of hunting days.", answer: "FALSE" },
      { type: "mcq", q: "According to the costly signaling hypothesis, what benefits do successful hunters gain from sharing meat?", options: ["Direct cash payments from neighboring tribes", "Social prestige, influence, and mating opportunities", "Exemption from all future foraging duties", "Exclusive ownership of hunting territories"], answer: 1 },
      { type: "mcq", q: "What food item do post-menopausal Hadza grandmothers harvest in greatest abundance?", options: ["Wild bird eggs", "Honeycombs from tree canopies", "Deeply buried wild edible tubers", "Dried fish from seasonal rivers"], answer: 2 },
      { type: "mcq", q: "How does grandmother provisioning support higher human reproductive rates?", options: ["It provides milk directly to infants", "It frees young mothers to resume childbearing sooner", "It prevents daughters from marrying young", "It eliminates the need for male hunting entirely"], answer: 1 },
      { type: "mcq", q: "Which geographical points form the boundary of the Polynesian Triangle?", options: ["Hawaii, Rapa Nui, and Aotearoa (New Zealand)", "Fiji, Tahiti, and Madagascar", "Japan, the Philippines, and Samoa", "Australia, New Guinea, and New Caledonia"], answer: 0 },
      { type: "completion", q: "The evolutionary theory explaining long human post-reproductive lifespans is the ________ Hypothesis.", answer: "Grandmother" },
      { type: "completion", q: "The theoretical capacity of pure lithium metal is 3,860 ________-hours per gram.", answer: "milliampere" },

      { type: "tfng", q: "Austronesian seafaring occurred long before European mariners explored the open Atlantic.", answer: "TRUE" },
      { type: "tfng", q: "Solid-state batteries can operate across a narrower temperature range than liquid cells.", answer: "FALSE" },
      { type: "tfng", q: "Hadza society possesses a strict hierarchical monarchy that dictates food rationing.", answer: "FALSE" },
      { type: "tfng", q: "Stars rise and set at different horizon points depending on the month of the year.", answer: "FALSE" },
      { type: "tfng", q: "Atomic layer deposition is used to apply ultra-thin films onto solid electrolytes.", answer: "TRUE" },
      { type: "tfng", q: "Chimpanzee mothers refuse to share food with their unweaned infants.", answer: "FALSE" },
      { type: "tfng", q: "Hadza tubers contain high concentrations of vitamin C compared to citrus fruit.", answer: "NOT GIVEN" },
      { type: "mcq", q: "What was the name of the double-hulled canoe that sailed from Hawaii to Tahiti in 1976?", options: ["Endeavour", "Hōkūleʻa", "Kon-Tiki", "Mayflower"], answer: 1 },
      { type: "mcq", q: "How many stars did a master Polynesian navigator typically memorize to read the sky?", options: ["Fewer than twenty", "Exactly fifty", "Over two hundred", "More than five thousand"], answer: 2 },
      { type: "mcq", q: "What is the primary anode material used in standard commercial lithium-ion batteries today?", options: ["Solid platinum", "Porous graphite", "Pure copper sheet", "Silicon rubber"], answer: 1 },
      { type: "mcq", q: "Which animal do Hadza hunters sometimes pursue that yields immense communal meat?", options: ["Grizzly bear", "Eland or giraffe", "Bactrian camel", "Snow leopard"], answer: 1 },
      { type: "completion", q: "Polynesian navigators divided the horizon into 32 mental azimuth ________.", answer: "houses" },
      { type: "completion", q: "Sharing food to advertise personal stamina and skill is described as costly ________.", answer: "signaling" },
      { type: "completion", q: "Solid-state batteries replace porous plastic separators with dense inorganic ________ conductors.", answer: "ceramic" }
    ]
  },
  {
    id: 6,
    title: "Academic Reading Test 6 • Marine Conservation, Chronometry & Behavioral Economics",
    passages: [
      `[A] Off the sunlit coast of Key Largo in the Florida Keys, marine biologists are deploying diamond-bladed masonry saws to rescue dying coral reefs. While conventional coral restoration relies on harvesting naturally fragmented branches and waiting years for them to grow, scientists at the Mote Marine Laboratory are pioneering an accelerated technique known as micro-fragmentation, which compresses decades of biological growth into mere months.

[B] The biological breakthrough behind micro-fragmentation stems from an accidental discovery by Dr. David Vaughan in 2006. When Vaughan accidentally broke a colony of brain coral into tiny fingernail-sized fragments, he observed that rather than dying, the injured pieces initiated an emergency wound-healing response. Spurred by regenerative cellular signaling, the micro-fragments grew up to forty times faster than undisturbed parent colonies.

[C] In laboratory nurseries, biologists slice stony corals into one-centimetre squares and attach them to ceramic tiles submerged in temperature-controlled raceways. Over several months, the fragments expand rapidly across the tile. When placed near one another on degraded reef substrates, genetically identical fragments recognize their shared tissue and rapidly fuse together—a process termed coalescence—forming a mature, sexually reproductive coral head in under three years instead of the thirty to fifty years required in nature.

[D] Micro-fragmentation also enables targeted thermal hardening. Because ocean warming driven by climate change provokes catastrophic coral bleaching—the expulsion of photosynthetic symbiotic zooxanthellae—researchers expose nursery fragments to elevated heat pulses. Fragments displaying natural resilience are selectively propagated, effectively breeding heat-tolerant 'super corals' capable of surviving projected twenty-first-century marine heatwaves.

[E] Scaling up reef restoration from laboratory tanks to continental shelf ecosystems presents severe ecological challenges. Transplanted corals remain vulnerable to macro-algal overgrowth, agricultural runoff, and infectious coral tissue loss diseases. Consequently, scientists emphasize that micro-fragmentation must be integrated with herbivore reintroduction—such as propagating algae-grazing long-spined sea urchins (Diadema antillarum)—and stringent terrestrial watershed management.`,

      `[A] In October 1707, a British naval squadron commanded by Admiral Sir Cloudesley Shovell struck the treacherous rocks of the Scilly Isles in dense fog, losing four warships and nearly two thousand sailors within minutes. The disaster was not caused by navigational negligence or poor seamanship, but by a fundamental scientific limitation: eighteenth-century mariners had no reliable method for calculating their longitude at sea.

[B] While latitude could be readily determined by measuring the noon sun's angle above the horizon using a quadrant, calculating longitude required comparing local solar time with the time at a fixed reference meridian, such as Greenwich. Because Earth rotates 360 degrees every twenty-four hours, a difference of one hour corresponds to fifteen degrees of longitude. However, no mechanical pendulum clock of the era could maintain time amid the relentless rolling, temperature swings, and humidity of an oceanic voyage.

[C] In 1714, the British Parliament enacted the Longitude Act, offering a colossal fortune of £20,000—equivalent to millions today—for a method capable of determining longitude to within half a degree. Elite astronomers of the Royal Observatory, including Nevil Maskelyne, championed the Lunar Distance Method, an intricate mathematical approach requiring tedious astronomical tables and hours of spherical trigonometry calculations.

[D] Defying the astronomical establishment, an uneducated Yorkshire carpenter and clockmaker named John Harrison proposed a purely mechanical solution. Harrison dedicated four decades to inventing four revolutionary marine timekeepers, culminating in the H4 in 1759. Departing from bulky grandfather clocks, the H4 was a pocket-watch-sized masterpiece featuring a bimetallic strip to compensate for temperature fluctuations, diamond pallet jewels to minimize friction without oil, and an epicycloidal escapement.

[E] In rigorous sea trials aboard HMS Deptford to Jamaica in 1761, Harrison's H4 lost only 5.1 seconds over eighty-one days at sea—an accuracy exceeding the Longitude Act's strictest requirements three times over. Despite bureaucratic delays and resistance from the Board of Longitude, King George III personally intervened in 1772 to ensure Harrison received his rightful financial award, cementing chronometry as the foundation of modern maritime navigation.`,

      `[A] For over a century, orthodox neoclassical economics rested upon the assumption of Homo economicus: an idealized rational actor possessing flawless information, self-consistent preferences, and infinite willpower. In the 1970s and 1980s, cognitive psychologists Daniel Kahneman and Amos Tversky dismantled this construct, demonstrating through empirical experiments that human decisions systematically deviate from rational utility maximization due to cognitive heuristics and biases.

[B] One of the most powerful departures from neoclassical theory is loss aversion. Under Prospect Theory, formulated by Kahneman and Tversky, human psychology is asymmetric: the psychological pain of losing one hundred dollars is roughly twice as intense as the pleasure of gaining an identical sum. Consequently, individuals exhibit risk-averse behavior when facing potential gains, but become reckless risk-seekers when attempting to avoid certain losses.

[C] In 2008, behavioral economist Richard Thaler and legal scholar Cass Sunstein synthesized these psychological insights into 'Nudge Theory'. A nudge is any aspect of choice architecture that alters people's behavior in a predictable manner without forbidding any options or significantly changing their economic incentives. Crucially, a nudge must be easy and cheap to avoid; it is not a legal mandate or economic subsidy, but a design intervention that harnesses natural cognitive inertia.

[D] The quintessential application of nudge theory involves default rules in retirement savings. In conventional opt-in pension programs, employees must complete complex paperwork to contribute to retirement accounts, leading to low enrollment rates despite corporate matching funds. By switching the default architecture to automatic enrollment (opt-out), where employees are automatically enrolled unless they check a box to opt out, corporate participation rates surged from sixty percent to over ninety percent.

[E] Nudge interventions have expanded across global governance, influencing organ donation registries, energy conservation, and public health campaigns. However, ethical critics raise concerns regarding paternalism and transparency. Opponents argue that choice architects wield covert psychological manipulation, potentially steering citizens toward outcomes favored by the state. Proponents counter that because every environment inherently possesses a choice architecture, designing defaults that benefit human welfare is both rational and unavoidable.`
    ],
    questions: [
      { type: "tfng", q: "Dr. David Vaughan discovered the micro-fragmentation effect by accident in 2006.", answer: "TRUE" },
      { type: "tfng", q: "Coral micro-fragments grow at roughly the same speed as undisturbed wild colonies.", answer: "FALSE" },
      { type: "tfng", q: "Genetically identical coral fragments fuse together when grown in close proximity.", answer: "TRUE" },
      { type: "tfng", q: "Coalesced corals can reach sexual maturity in under three years.", answer: "TRUE" },
      { type: "tfng", q: "Exposing nursery fragments to heat pulses allows researchers to breed heat-tolerant corals.", answer: "TRUE" },
      { type: "tfng", q: "Micro-fragmentation alone solves all ocean acidification problems without water management.", answer: "FALSE" },
      { type: "tfng", q: "The State of Florida has banned all commercial fishing around coral nurseries.", answer: "NOT GIVEN" },
      { type: "mcq", q: "Why do scientists reintroduce long-spined sea urchins alongside transplanted corals?", options: ["To eat coral parasites", "To graze on macro-algae that can smother young corals", "To attract larger reef sharks", "To anchor coral fragments to the seabed"], answer: 1 },
      { type: "mcq", q: "What catastrophic event prompted the British Parliament to pass the Longitude Act of 1714?", options: ["The Great Fire of London", "The naval disaster at the Scilly Isles where four warships sank", "The loss of the British trading post in India", "A mutiny aboard HMS Deptford"], answer: 1 },
      { type: "mcq", q: "What was the chief drawback of the Lunar Distance Method proposed by royal astronomers?", options: ["It required clear skies and hours of complex mathematical calculations", "It could only be calculated during a solar eclipse", "It caused magnetic disturbances to compasses", "It only worked in the Southern Hemisphere"], answer: 0 },
      { type: "mcq", q: "What mechanical feature in Harrison's H4 watch compensated for oceanic temperature changes?", options: ["A mercury pendulum", "A bimetallic strip", "A diamond steam escape valve", "A water-filled casing"], answer: 1 },
      { type: "completion", q: "The process whereby genetically identical coral micro-fragments fuse into one colony is called ________.", answer: "coalescence" },
      { type: "completion", q: "John Harrison's celebrated marine pocket timekeeper completed in 1759 was designated the ________.", answer: "H4" },

      { type: "tfng", q: "Calculating longitude requires comparing local solar time with time at a reference meridian like Greenwich.", answer: "TRUE" },
      { type: "tfng", q: "Harrison's H4 lost over ten minutes during its sea trial to Jamaica in 1761.", answer: "FALSE" },
      { type: "tfng", q: "King George III intervened to support John Harrison receiving his financial reward.", answer: "TRUE" },
      { type: "tfng", q: "Neoclassical economics assumed that human beings always make perfectly rational utility calculations.", answer: "TRUE" },
      { type: "tfng", q: "Under Prospect Theory, people feel the pleasure of gaining money more intensely than the pain of losing it.", answer: "FALSE" },
      { type: "tfng", q: "A 'nudge' forbids individuals from choosing undesirable options through legal punishments.", answer: "FALSE" },
      { type: "tfng", q: "Switching retirement savings to an automatic enrollment default increased employee participation to over 90%.", answer: "TRUE" },
      { type: "mcq", q: "According to Kahneman and Tversky, how does loss aversion affect decision-making?", options: ["People avoid all financial investments completely", "People are risk-averse regarding gains, but take high risks to avoid certain losses", "People become indifferent to profits and losses equally", "People prefer gambling over saving money"], answer: 1 },
      { type: "mcq", q: "Who authored the 2008 book synthesizing behavioral economics into Nudge Theory?", options: ["John Harrison and Nevil Maskelyne", "Richard Thaler and Cass Sunstein", "Daniel Kahneman and Cloudesley Shovell", "David Vaughan and Arthur Evans"], answer: 1 },
      { type: "mcq", q: "What ethical criticism has been directed toward governmental nudge policies?", options: ["They cost too much public taxpayer revenue", "They represent covert paternalism that manipulates citizen choices", "They require mandatory physical exercise", "They eliminate all private property rights"], answer: 1 },
      { type: "mcq", q: "How much time accuracy did the H4 clock demonstrate on its 81-day voyage to Jamaica?", options: ["It was off by 5.1 seconds", "It was off by exactly two hours", "It lost three seconds per minute", "It stopped ticking after forty days"], answer: 0 },
      { type: "completion", q: "Nudge interventions leverage natural human cognitive ________ by setting sensible default options.", answer: "inertia" },
      { type: "completion", q: "Coral bleaching occurs when corals expel their photosynthetic symbiotic ________.", answer: "zooxanthellae" },

      { type: "tfng", q: "The Longitude Act offered an award of £20,000 for an accurate longitude calculation method.", answer: "TRUE" },
      { type: "tfng", q: "John Harrison was an Oxford-educated professor of mathematics.", answer: "FALSE" },
      { type: "tfng", q: "Micro-fragments of coral grow on ceramic tiles in nursery raceways.", answer: "TRUE" },
      { type: "tfng", q: "The pain of losing $100 is estimated to be roughly twice as strong as the joy of gaining $100.", answer: "TRUE" },
      { type: "tfng", q: "Every hour of solar time difference corresponds to thirty degrees of longitude.", answer: "FALSE" },
      { type: "tfng", q: "Opt-out pension programs force workers to surrender their salaries without option.", answer: "FALSE" },
      { type: "tfng", q: "Organ donation rates are typically higher in nations that use opt-out default registries.", answer: "TRUE" },
      { type: "mcq", q: "What type of coral saw is used at Mote Marine Laboratory to slice corals into micro-fragments?", options: ["Diamond-bladed masonry saw", "Laser surgical scalpel", "Titanium hand chisel", "Ultrasonic copper wire"], answer: 0 },
      { type: "mcq", q: "How many warships were lost in the 1707 Scilly naval catastrophe?", options: ["One", "Two", "Four", "Twelve"], answer: 2 },
      { type: "mcq", q: "What is the economic term for the idealized rational actor criticized by behavioral economists?", options: ["Homo habilis", "Homo economicus", "Homo sapiens", "Homo technologicus"], answer: 1 },
      { type: "mcq", q: "What was John Harrison's original trade before designing marine clocks?", options: ["Naval admiral", "Carpenter and clockmaker", "Blacksmith and glassmaker", "Silversmith and bookbinder"], answer: 1 },
      { type: "completion", q: "The imaginary line of zero degrees longitude is the prime meridian at ________.", answer: "Greenwich" },
      { type: "completion", q: "In Prospect Theory, human decisions violate classical expected ________ theory.", answer: "utility" },
      { type: "completion", q: "Biologists reintroduce Diadema antillarum, which are long-spined sea ________.", answer: "urchins" }
    ]
  }
];
