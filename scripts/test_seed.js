const fs = require('fs');
const path = require('path');

// 20 Academic Tests with 3 completely distinct passages per test (60 unique passages)
// and 40 questions per test (800 unique questions total)
const testsConfig = [
  {
    id: 1,
    title: "Academic Reading Test 1 • Engineering, Abyssal Ecosystems & Cognitive Linguistics",
    p1: {
      title: "Roman Hydraulic Engineering & Aqueduct Construction",
      paragraphs: [
        "[A] For centuries, historians marvelled at the monumental scale of Roman civil engineering, yet only recently have geoscientific analyses revealed the precise mathematical calculations behind their water transport systems. The Roman aqueducts were not merely passive channels; they were sophisticated gravitational networks designed to maintain continuous laminar flow across hundreds of kilometres of rugged topography without the aid of mechanical pumps.",
        "[B] The primary challenge lay in maintaining a steady hydraulic gradient. If the slope was too steep, turbulent water would rapidly scour and erode the mortar lining, known as opus caementicium. Conversely, if the gradient was too gentle, stagnant water would precipitate heavy calcified sinter, progressively choking the conduit. Engineers solved this by maintaining slopes as slight as 1:5000, utilizing precise surveying instruments such as the chorobates—a wooden level bench equipped with plumb lines and a water groove.",
        "[C] Contrary to the widespread modern perception that aqueducts were predominantly elevated arches crossing open plains, over eighty percent of the empire's water conduits were subterranean. Tunnelling through solid limestone protected the water supply from seasonal evaporation, airborne pathogens, and deliberate contamination during wartime. Shafts known as putei were sunk at regular intervals of thirty to sixty metres, enabling workers to ventilate tunnels and excavate spoil.",
        "[D] Hydraulic transitions across deep river valleys posed severe structural hurdles. Where building elevated masonry arches was cost-prohibitive or physically unfeasible, Roman engineers implemented inverted siphons. High-pressure lead conduits carried water down one flank of a gorge and up the opposite side, operating under hydrostatic pressure before discharging into normal gravity channels.",
        "[E] Water entering imperial cities was routed through a distribution hub called a castellum divisorium. Here, water was filtered through settling tanks before being apportioned via calibrated bronze nozzles into separate aqueducts serving public fountains, imperial bath complexes, and wealthy private residences who paid heavy municipal taxes for dedicated connections."
      ],
      questions: [
        { type: "tfng", q: "Modern geoscientific tests have confirmed that Roman aqueducts relied on mechanical pumps to raise water across hills.", answer: "FALSE" },
        { type: "tfng", q: "An excessively steep conduit slope caused erosion of the hydraulic mortar lining.", answer: "TRUE" },
        { type: "tfng", q: "The chorobates used a water groove alongside plumb lines to measure gradients.", answer: "TRUE" },
        { type: "tfng", q: "Most Roman water channels were constructed as elevated stone arches above ground.", answer: "FALSE" },
        { type: "tfng", q: "Underground water conduits helped prevent evaporation and wartime contamination.", answer: "TRUE" },
        { type: "tfng", q: "Roman engineers preferred lead siphons over stone arches in every valley they crossed.", answer: "FALSE" },
        { type: "tfng", q: "The emperor personally decided which private citizens received municipal water supply pipes.", answer: "NOT GIVEN" },
        { type: "mcq", q: "What was the purpose of sinking vertical shafts called putei during aqueduct construction?", options: ["To store rainwater for dry summer months", "To ventilate tunnels and remove excavated earth", "To provide drinking water for local agricultural villages", "To test the salinity of bedrock groundwater"], answer: 1 },
        { type: "mcq", q: "Why did Roman engineers avoid very gentle gradients below 1:5000?", options: ["Water would freeze during winter nights", "The structural weight of the stone would collapse", "Calcified mineral deposits would gradually block the channel", "Surveying instruments were incapable of detecting them"], answer: 2 },
        { type: "mcq", q: "How did an inverted siphon transport water across deep river valleys?", options: ["Using hydrostatic pressure within reinforced lead pipes", "Using wooden water wheels powered by river currents", "Using steam pressure created by burning timber", "By diverting the river into underground storage vaults"], answer: 0 },
        { type: "mcq", q: "Where was incoming city water initially directed and filtered before distribution?", options: ["Directly into private household cisterns", "Into the municipal sewer system", "Into a distribution hub called the castellum divisorium", "Into the emperor's private garden fountains"], answer: 2 },
        { type: "completion", q: "The hydraulic mortar lining used to seal the interior of Roman aqueduct channels was called opus ________.", answer: "caementicium" },
        { type: "completion", q: "Vertical shafts known as ________ were excavated at intervals of 30 to 60 metres.", answer: "putei" },
        { type: "completion", q: "Water was distributed from the central reservoir through calibrated ________ nozzles.", answer: "bronze" }
      ]
    },
    p2: {
      title: "Marine Bioluminescence & Deep-Sea Chemosynthesis",
      paragraphs: [
        "[A] In the aphotic bathypelagic zone, where sunlight never penetrates beyond two hundred metres, life does not depend on solar photon absorption. Instead, over ninety percent of abyssal organisms generate their own illumination through bioluminescence—a cold chemical reaction converting chemical energy into radiant photon emission with near one-hundred-percent thermal efficiency.",
        "[B] The chemical basis of this biological glow invariably requires a substrate, broadly classified as luciferin, and an enzyme or photoprotein known as luciferase. In the presence of dissolved oxygen and cofactors such as magnesium or adenosine triphosphate, luciferase catalyzes the rapid oxidation of luciferin, yielding an excited-state oxyluciferin molecule that releases blue-green light as it returns to its ground state.",
        "[C] Blue-green light, with wavelengths between 470 and 490 nanometres, is evolutionarily favored because these frequencies suffer the lowest optical attenuation in saline water. Certain predatory taxa, however, such as the dragonfish (Malacosteus niger), produce long-wave red bioluminescence alongside specialized ocular pigments capable of detecting it. This provides the dragonfish with an invisible tactical searchlight, illuminating prey that are physiologically blind to red spectrum photons.",
        "[D] Beyond predation, deep-sea organisms deploy bioluminescence for camouflage through counterillumination. Species of hatchetfish possess ventral photophores that match both the spectral quality and downwelling intensity of faint twilight filtering from above. When viewed from below by ascending predators, the silhouette of the hatchetfish is completely erased against the ambient downwelling light field.",
        "[E] At hydrothermal vent systems, where temperatures exceed three hundred degrees Celsius, an entirely distinct biological regime thrives based on chemosynthesis. Dense colonies of giant tube worms (Riftia pachyptila) harbor endosymbiotic sulfur-oxidizing bacteria within a specialized vascular organ called the trophosome, converting toxic hydrogen sulfide into organic carbohydrates without any photosynthetic input."
      ],
      questions: [
        { type: "mcq", q: "Why is blue-green light the predominant wavelength produced by deep-sea bioluminescent organisms?", options: ["It requires significantly less enzymatic energy to produce", "It transmits through saline water with the lowest optical attenuation", "It repels territorial competitors across all ocean depths", "It matches the temperature of abyssal hydrothermal vents"], answer: 1 },
        { type: "mcq", q: "What strategic advantage does red bioluminescence give the dragonfish (Malacosteus niger)?", options: ["It blinds dangerous apex predators instantly", "It attracts photosynthetic phytoplankton to the abyssal floor", "It acts as a private searchlight unseen by prey species", "It accelerates the oxidation of metabolic luciferin"], answer: 2 },
        { type: "mcq", q: "How do ventral photophores protect hatchetfish from being attacked from below?", options: ["By emitting blinding flashes that confuse attacking predators", "By heating the surrounding water to create a thermal decoy", "By matching the colour and intensity of faint light from above", "By projecting false eye-spot patterns onto nearby rocks"], answer: 2 },
        { type: "mcq", q: "Where do giant tube worms (Riftia pachyptila) house their endosymbiotic chemosynthetic bacteria?", options: ["Inside their outer chitinous protective tube", "Within an internal vascular organ called the trophosome", "On the surface of their red respiratory plumes", "Directly inside their stomach and digestive tract"], answer: 1 },
        { type: "mcq", q: "Which chemical compound is utilized by vent bacteria to synthesize organic carbohydrates?", options: ["Atmospheric carbon monoxide", "Dissolved calcium carbonate", "Toxic hydrogen sulfide", "Superheated methane hydrates"], answer: 2 },
        { type: "mcq", q: "What is the typical thermal efficiency of light emission in biological bioluminescence?", options: ["Approximately 20 percent with substantial heat loss", "Around 50 percent resembling incandescent bulbs", "Near one-hundred percent with minimal thermal waste", "Less than 10 percent due to enzymatic friction"], answer: 2 },
        { type: "tfng", q: "Bioluminescence and chemosynthesis both require solar photon energy from the surface.", answer: "FALSE" },
        { type: "tfng", q: "Luciferase acts as a catalyst that accelerates the oxidation of the substrate luciferin.", answer: "TRUE" },
        { type: "tfng", q: "All deep-sea fish have lost the evolutionary ability to perceive blue-green light.", answer: "FALSE" },
        { type: "tfng", q: "Hatchetfish adjust their photophores dynamically when downwelling surface light fluctuates.", answer: "TRUE" },
        { type: "tfng", q: "Giant tube worms have fully functional digestive mouths and stomachs.", answer: "FALSE" },
        { type: "completion", q: "The substrate that undergoes oxidation during bioluminescent reactions is called ________.", answer: "luciferin" },
        { type: "completion", q: "The technique whereby animals match downwelling light to erase their silhouette is called ________.", answer: "counterillumination" },
        { type: "completion", q: "The organ in giant tube worms that contains symbiotic bacteria is known as the ________.", answer: "trophosome" }
      ]
    },
    p3: {
      title: "Cognitive Linguistics & the Metaphorical Architecture of Mind",
      paragraphs: [
        "[A] For decades following the mid-twentieth-century cognitive revolution, mainstream linguistics treated metaphor as an ornamental poetic device—a stylistic flourish peripheral to serious conceptual reasoning. In 1980, cognitive linguists George Lakoff and Mark Johnson challenged this foundational doctrine, arguing that human conceptual systems are fundamentally metaphorical in nature and grounded in physical bodily interaction with the material environment.",
        "[B] Under the framework of Conceptual Metaphor Theory, abstract concepts are systematically understood in terms of concrete embodied experiences. For example, our understanding of time is deeply mapped to spatial movement: humans routinely conceptualize the future as being 'ahead' and the past as lying 'behind', or view time as a finite material commodity that can be 'spent', 'saved', or 'wasted'.",
        "[C] Neuroimaging studies have provided empirical validation for this embodied grounding hypothesis. When subjects listen to linguistic metaphors involving physical sensations, such as 'she had a rough day' or 'he grasped the argument', functional magnetic resonance imaging (fMRI) demonstrates activation in the primary somatosensory cortex and motor cortex corresponding to physical tactile sensation and hand grasping.",
        "[D] Cross-linguistic fieldwork has revealed both universal mappings and cultural variations. While spatial representations of time appear worldwide, the directional axis is not fixed. In the Aymara language of the Andean highlands, the past is located in front of the speaker (because it has already been 'seen' and is known), whereas the future lies behind (unseen and unknown). Similarly, Mandarin speakers frequently utilize vertical spatial metaphors, locating earlier events 'up' (shàng) and later events 'down' (xià).",
        "[E] The sociopolitical implications of metaphor are profound. Psychological experiments demonstrate that framing crime as a 'wild beast preying on a city' prompts citizens to demand punitive law-enforcement measures and prison expansion. Conversely, framing the identical statistical crime rate as a 'contagious virus infecting the community' leads participants to endorse systemic social reforms, education, and economic rehabilitation."
      ],
      questions: [
        { type: "tfng", q: "Prior to 1980, mainstream linguistics considered metaphor to be a fundamental mechanism of abstract thought.", answer: "FALSE" },
        { type: "tfng", q: "Conceptual Metaphor Theory posits that abstract reasoning is rooted in concrete bodily interactions.", answer: "TRUE" },
        { type: "tfng", q: "fMRI neuroimaging shows motor cortex activation when people process phrases like 'he grasped the argument'.", answer: "TRUE" },
        { type: "tfng", q: "Speakers of all world languages position the future directly in front of the speaker's body.", answer: "FALSE" },
        { type: "tfng", q: "In the Aymara language, the past is described as being in front because it is visible to the mind.", answer: "TRUE" },
        { type: "tfng", q: "Mandarin speakers never utilize horizontal spatial terms when discussing sequences of events.", answer: "FALSE" },
        { type: "mcq", q: "How did experimental participants respond when municipal crime was metaphorically framed as a 'virus'?", options: ["They demanded stricter mandatory prison sentences", "They endorsed systemic social interventions and public education", "They advocated closing down community healthcare clinics", "They ignored statistical crime reports altogether"], answer: 1 },
        { type: "mcq", q: "What did George Lakoff and Mark Johnson argue in their seminal 1980 work?", options: ["Metaphor is purely decorative language restricted to classical poetry", "All human languages descend from a single proto-Indo-European root", "The human conceptual system is inherently metaphorical and embodied", "Computer algorithms can process metaphors identically to human brains"], answer: 2 },
        { type: "mcq", q: "Which brain region activates during the processing of tactile metaphors like 'a rough day'?", options: ["The primary auditory processing center", "The primary somatosensory cortex", "The visual occipital lobe", "The cerebellum balance pathway"], answer: 1 },
        { type: "mcq", q: "In Mandarin spatial orientation, which vertical direction is associated with earlier chronological events?", options: ["Down (xià)", "Left (zuǒ)", "Up (shàng)", "Right (yòu)"], answer: 2 },
        { type: "completion", q: "George Lakoff and Mark Johnson formulated what became known as ________ Metaphor Theory.", answer: "Conceptual" },
        { type: "completion", q: "In Andean culture, the ________ language conceptualizes the past as being in front of the speaker.", answer: "Aymara" }
      ]
    }
  },
  {
    id: 2,
    title: "Academic Reading Test 2 • Silk Road Botany, Geothermal Systems & Memory Replay",
    p1: {
      title: "Botanical Exchanges Along the Ancient Silk Road",
      paragraphs: [
        "[A] Although the Silk Road has historically been romanticized as a conduit for luxury textiles, precious gemstones, and fine ceramics, recent archaeobotanical excavations indicate that agricultural transfers had a far more enduring impact on Eurasian civilizations. From the Han dynasty onwards, trans-Eurasian caravans transported seeds, rootstocks, and cultivation technologies across the arid deserts and mountain passes of Central Asia.",
        "[B] Among the earliest crops to diffuse westward from China were peaches (Prunus persica) and apricots (Prunus armeniaca). Long misattributed to Persia and Armenia due to their Linnaean botanical taxonomy, genetic sequencing has confirmed their domestication in the fertile valleys of the Yangtze and Yellow rivers. In return, Central Asian traders introduced alfalfa (Medicago sativa) to imperial China—a nutrient-rich forage crop essential for sustaining the formidable cavalry horses needed to patrol the northern frontier.",
        "[C] The oasis cities of the Taklamakan Desert, such as Dunhuang and Turpan, functioned as critical agricultural acclimation zones. In Turpan, where summer temperatures regularly exceeded forty-five degrees Celsius, farmers constructed underground irrigation tunnels called karez. By tapping into meltwater from the Tian Shan mountains beneath the desert floor, these systems prevented surface evaporation, enabling the intensive cultivation of introduced varieties of grapes, pomegranates, and sesame.",
        "[D] The arrival of foreign flora also revolutionized culinary culture. The introduction of walnuts, pistachios, and coriander enriched imperial banquet menus, while the adoption of Persian flatbread techniques altered urban staple diets. Archaeologists have discovered desiccated wheat noodles and dumplings in Astana cemetery tombs dating to the seventh century, demonstrating how culinary traditions merged along trading corridors.",
        "[E] Furthermore, the botanical exchange facilitated the transmission of industrial crops. Sericulture relied upon the white mulberry tree (Morus alba), whose cultivation spread to Byzantium and Western Europe. Concurrently, paper-making technology, reliant on mulberry bark and hemp fibers, traveled westward, providing the material foundation for the Islamic Golden Age's massive scriptoria and scholarly libraries."
      ],
      questions: [
        { type: "tfng", q: "Recent archaeobotanical studies show agricultural crops were traded more continuously than luxury silk.", answer: "TRUE" },
        { type: "tfng", q: "Genetic research proved that peaches were originally domesticated in ancient Persia.", answer: "FALSE" },
        { type: "tfng", q: "Alfalfa was adopted in China primarily to improve pasture for military cavalry horses.", answer: "TRUE" },
        { type: "tfng", q: "The karez irrigation systems transported water through uncovered surface canals.", answer: "FALSE" },
        { type: "tfng", q: "Turpan's underground tunnels drew water from melting mountain glaciers.", answer: "TRUE" },
        { type: "tfng", q: "Foreign spices like coriander completely replaced traditional Chinese seasoning plants.", answer: "NOT GIVEN" },
        { type: "tfng", q: "Mulberry bark was a key fiber source utilized in early paper production.", answer: "TRUE" },
        { type: "mcq", q: "Why were peaches and apricots mistakenly thought to have originated in Persia and Armenia?", options: ["Early traders created fraudulent trade receipts", "Their botanical Latin species names reflected trade intermediaries", "Ancient Chinese emperors banned their export documentation", "They only bore edible fruit when grown in Mediterranean soil"], answer: 1 },
        { type: "mcq", q: "What was the primary environmental benefit of the karez system in the Turpan oasis?", options: ["It eliminated mineral salts from surrounding sand dunes", "It prevented water evaporation in extreme desert heat", "It generated hydroelectric power for flour mills", "It trapped fish swimming from mountain lakes"], answer: 1 },
        { type: "mcq", q: "What culinary artifacts were found preserved in Astana cemetery tombs?", options: ["Ceramic jars of fermented grape vinegar", "Desiccated noodles and filled dumplings", "Cast-iron baking ovens for flatbread", "Imported Greek amphorae containing olive oil"], answer: 1 },
        { type: "mcq", q: "Which tree species was indispensable for both sericulture and early paper manufacturing?", options: ["The European sweet chestnut", "The Mediterranean olive tree", "The white mulberry tree", "The Himalayan cedar"], answer: 2 },
        { type: "completion", q: "Underground irrigation channels constructed in oasis cities were known as ________.", answer: "karez" },
        { type: "completion", q: "China imported the nutrient-rich forage crop ________ to sustain frontier cavalry horses.", answer: "alfalfa" },
        { type: "completion", q: "The Latin scientific name for the peach is Prunus ________.", answer: "persica" }
      ]
    },
    p2: {
      title: "Enhanced Geothermal Systems & Supercritical Fluids",
      paragraphs: [
        "[A] Traditional geothermal energy generation has historically been constrained to rare volcanic hotspots where three geological conditions naturally coincide: high thermal energy, abundant subterranean water, and permeable fractured rock. These conventional hydrothermal sites represent less than two percent of the world's accessible thermal crust. To unlock baseload clean energy globally, geologists are advancing Enhanced Geothermal Systems (EGS).",
        "[B] In an EGS installation, deep wells are drilled three to six kilometres into hot crystalline basement rock where natural permeability is virtually zero. Engineers inject cold water at controlled high pressure into the borehole—a process termed hydraulic stimulation. Rather than fracturing pristine rock, the hydraulic pressure causes preexisting micro-fissures to shear and self-propagate, establishing an interconnected artificial heat-exchange reservoir.",
        "[C] Once the fracture network is established, production wells are drilled to intersect the circulating fluid. Cold surface water is continuously pumped down injection wells, heated to over two hundred degrees Celsius as it percolates through the subterranean rock matrix, and extracted via production wells to vaporize a low-boiling-point working fluid in a binary cycle turbine.",
        "[D] An even more formidable energy frontier involves tapping into supercritical geothermal fluids. At depths exceeding four kilometres near magmatic intrusions, subterranean water encounters pressures above 22 megapascals and temperatures surpassing 374 degrees Celsius. In this supercritical state, water ceases to exist as either distinct liquid or vapor, possessing the density of a liquid and the transport diffusivity of a gas.",
        "[E] Harvesting supercritical fluids could dramatically multiply energy yields. Because supercritical water possesses immense thermodynamic enthalpy, a single supercritical borehole could generate up to fifty megawatts of continuous electrical power—roughly ten times the energy output of a standard hydrothermal well. However, overcoming the extreme chemical corrosiveness of acidic supercritical brines remains an active metallurgical frontier."
      ],
      questions: [
        { type: "mcq", q: "What limitation has historically restricted traditional hydrothermal energy generation?", options: ["Excessive atmospheric carbon emissions during extraction", "Dependency on rare locations with heat, water, and permeable rock together", "Incompatibility with standard national electric distribution grids", "High operational fuel costs compared to fossil fuels"], answer: 1 },
        { type: "mcq", q: "How does hydraulic stimulation create an underground reservoir in an EGS project?", options: ["By melting underground granite through laser heat", "By dissolving basalt rock using concentrated hydrochloric acid", "By shearing and reopening preexisting micro-fissures with pressurized water", "By detonating chemical explosives at the base of the borehole"], answer: 2 },
        { type: "mcq", q: "What thermodynamic phase characterizes water in a supercritical state?", options: ["It forms an ultra-dense solid ice crystal under heat", "It exists simultaneously with liquid density and gas diffusivity", "It splits spontaneously into oxygen and hydrogen gas", "It condenses into a frozen gel that resists flow"], answer: 1 },
        { type: "mcq", q: "Why could a single supercritical geothermal well generate ten times more power than a standard well?", options: ["It draws electrical charges directly from the Earth's magnetic core", "The working fluid contains dissolved radioactive minerals", "Supercritical fluid carries extraordinarily high thermodynamic enthalpy", "It requires no surface turbine generator to convert energy"], answer: 2 },
        { type: "mcq", q: "What engineering challenge currently hinders widespread supercritical fluid extraction?", options: ["Extremely low temperatures at magmatic depths", "Excessive chemical corrosiveness of hot acidic brines on drill pipes", "Total lack of water in deep geological formations", "Rapid radioactive decay of surface turbines"], answer: 1 },
        { type: "mcq", q: "How does a binary cycle turbine generate power in an EGS plant?", options: ["Hot extracted fluid directly turns open-air windmill blades", "Thermal energy vaporizes a secondary working fluid with a lower boiling point", "Water is split into hydrogen fuel through electrolysis", "Heavy steam is stored in pressurized ground chambers"], answer: 1 },
        { type: "tfng", q: "Conventional hydrothermal hotspots make up over fifty percent of Earth's land surface.", answer: "FALSE" },
        { type: "tfng", q: "EGS reservoirs can be created in hot rock that naturally lacks water permeability.", answer: "TRUE" },
        { type: "tfng", q: "Water reaches a supercritical state at temperatures above 374 degrees Celsius and 22 megapascals.", answer: "TRUE" },
        { type: "tfng", q: "All existing EGS installations have completely solved borehole metal corrosion.", answer: "FALSE" },
        { type: "tfng", q: "Binary power plants release zero water vapor into the atmosphere.", answer: "NOT GIVEN" },
        { type: "completion", q: "The process of injecting pressurized fluid to open subterranean rock fissures is called hydraulic ________.", answer: "stimulation" },
        { type: "completion", q: "In a supercritical state, water has the density of a liquid and the diffusivity of a ________.", answer: "gas" },
        { type: "completion", q: "A single supercritical geothermal well could generate up to ________ megawatts of electricity.", answer: "50|fifty" }
      ]
    },
    p3: {
      title: "Hippocampal Replay & Memory Consolidation",
      paragraphs: [
        "[A] How the mammalian brain converts transient daily experiences into durable long-term memories has long been one of cognitive neuroscience's central enigmas. The prevailing model, known as Two-Stage Memory Consolidation, posits that the hippocampus acts as a temporary buffer that rapidly encodes episodic memories, which are subsequently reorganized and integrated into the neocortex during sleep.",
        "[B] The crucial physiological mechanism driving this transfer is hippocampal sharp-wave ripples (SWRs)—high-frequency electrical oscillations occurring predominantly during slow-wave sleep. During SWR events, ensembles of hippocampal place cells fire in the precise sequential order that was activated during daytime maze exploration, but compressed up to twenty times faster.",
        "[C] This phenomenon, termed 'neural replay', does not occur in isolation. High-frequency hippocampal ripples synchronize with slow cortical oscillations originating in the prefrontal cortex and thalamocortical sleep spindles. This cross-structure dialogue allows the hippocampus to repeatedly 'teach' neocortical circuits, strengthening synaptic connections through long-term potentiation.",
        "[D] Intriguingly, replay is not strictly forward-facing. Researchers tracking rodent neuronal firing have documented reverse replay, where sequences are re-enacted from goal location backward to start point. Reverse replay occurs frequently during awake resting states following rewarding experiences, suggesting that the brain uses backward simulation to compute reward prediction errors and update navigational decision models.",
        "[E] Experimental disruption of sharp-wave ripples demonstrates their causal indispensability. In controlled rodent studies, delivering targeted micro-stimulation to cancel SWRs immediately upon detection severely impaired maze learning and spatial memory retention. Understanding these replay dynamics is currently inspiring artificial intelligence researchers to build neural networks that resist catastrophic forgetting."
      ],
      questions: [
        { type: "tfng", q: "The Two-Stage Memory Consolidation model states that memories reside permanently in the hippocampus.", answer: "FALSE" },
        { type: "tfng", q: "Hippocampal sharp-wave ripples occur most frequently during slow-wave sleep.", answer: "TRUE" },
        { type: "tfng", q: "During neural replay, sequential neuron firing happens at the exact same speed as daytime exploration.", answer: "FALSE" },
        { type: "tfng", q: "Reverse replay has been observed during awake resting states following rewards.", answer: "TRUE" },
        { type: "tfng", q: "Disrupting sharp-wave ripples in rodents produced no detectable effect on spatial memory.", answer: "FALSE" },
        { type: "tfng", q: "AI researchers are applying neural replay concepts to prevent catastrophic forgetting in machine learning.", answer: "TRUE" },
        { type: "mcq", q: "What is the primary role of the hippocampus in the Two-Stage Memory model?", options: ["Permanent storage vault for all motor reflexes", "Temporary buffer that rapidly encodes episodic experiences", "Filter that discards emotional memories immediately", "Primary producer of conscious sensory awareness"], answer: 1 },
        { type: "mcq", q: "By how much is neuronal firing compressed during sharp-wave ripple replay events?", options: ["Up to twice as fast", "Roughly five times faster", "Up to twenty times faster", "Over one hundred times faster"], answer: 2 },
        { type: "mcq", q: "What function does reverse replay appear to serve in navigational learning?", options: ["Erasing unpleasant maze memories completely", "Calculating reward prediction errors and updating navigational models", "Conserving electrical glucose in the temporal lobe", "Preparing the rodent for immediate deep REM sleep"], answer: 1 },
        { type: "mcq", q: "Which cortical brain region synchronizes its slow oscillations with hippocampal ripples?", options: ["The primary visual cortex", "The prefrontal cortex", "The olfactory bulb", "The spinal motor column"], answer: 1 },
        { type: "completion", q: "High-frequency electrical oscillations in the hippocampus are called sharp-wave ________.", answer: "ripples" },
        { type: "completion", q: "Memory transfer from hippocampus to neocortex strengthens synapses via long-term ________.", answer: "potentiation" }
      ]
    }
  }
];

// Let's create an automated procedural generator that populates all 20 tests cleanly
// with 3 authentic, fully differentiated academic passages per test and 40 questions per test!
// We'll write out fullTestsData.ts / readingTestsData.ts

const topicCatalog = [
  // 3: Antarctic Ice Core, Phonetic Alphabets, Autonomous Swarm Robotics
  {
    id: 3,
    title: "Academic Reading Test 3 • Paleoclimatology, Ancient Epigraphy & Swarm Robotics",
    p1: {
      title: "Antarctic Ice Core Drilling & Quaternary Paleoclimatology",
      paragraphs: [
        "[A] Buried beneath thousands of metres of perennial ice in East Antarctica lies an unbroken physical record of Earth's atmospheric history spanning eight hundred thousand years. By drilling vertical cores through ice sheets at sites like Dome C and Vostok Station, paleoclimatologists extract direct samples of ancient atmosphere sealed inside hermetic bubbles.",
        "[B] The physical structure of the ice core offers dual analytical avenues. The isotopic composition of the water molecules—specifically the ratio of heavy oxygen-18 to light oxygen-16—serves as a proxy for historical surface temperatures at the time precipitation fell as snow. Lighter isotopes evaporate more readily and precipitate preferentially as air masses travel toward polar extremes.",
        "[C] Concurrently, tiny gas bubbles trapped as snow compacted into firn and glacial ice preserve pristine samples of ancient air. Mass spectrometry analysis of these bubbles provides an unassailable record of atmospheric carbon dioxide, methane, and nitrous oxide concentrations, revealing that pre-industrial CO2 levels consistently oscillated between 180 parts per million during ice ages and 280 parts per million during warm interglacials.",
        "[D] Beyond greenhouse gases, ice cores archive evidence of catastrophic geological events. Microscopic volcanic tephra shards and elevated sulfate concentrations identify ancient volcanic eruptions, allowing scientists to synchronize ice cores from Greenland and Antarctica to within a few decades.",
        "[E] Deep drilling operations encounter formidable technical hurdles. At depths below three thousand metres, immense overburden pressure causes ice to flow plastically. Drill heads must be bathed in specialized drilling fluids with densities matching ice to prevent borehole closure while preventing warm air from fracturing fragile core segments."
      ],
      questions: [
        { type: "tfng", q: "Ice cores from Dome C provide atmospheric records extending back over 800,000 years.", answer: "TRUE" },
        { type: "tfng", q: "Oxygen-18 isotope ratios in ice reflect historical polar temperatures.", answer: "TRUE" },
        { type: "tfng", q: "Pre-industrial atmospheric carbon dioxide levels exceeded 350 parts per million during interglacials.", answer: "FALSE" },
        { type: "tfng", q: "Volcanic tephra shards allow researchers to synchronize ice core timelines across both poles.", answer: "TRUE" },
        { type: "tfng", q: "Drilling fluid is used to melt deep ice so the drill can penetrate faster.", answer: "FALSE" },
        { type: "tfng", q: "Greenland ice cores provide older atmospheric records than Antarctic ice cores.", answer: "NOT GIVEN" },
        { type: "tfng", q: "Deep ice under high pressure behaves as a brittle, rigid solid that never bends.", answer: "FALSE" },
        { type: "mcq", q: "How are atmospheric greenhouse gas concentrations directly measured from ice cores?", options: ["By calculating mathematical climate models", "By analyzing ancient air bubbles trapped inside compacted firn", "By measuring the electrical resistance of the ice cylinder", "By heating the drill fluid to separate oxygen atoms"], answer: 1 },
        { type: "mcq", q: "What was the typical CO2 range during Quaternary glacial periods?", options: ["Between 180 and 280 parts per million", "Under 100 parts per million", "Above 400 parts per million", "Around 50 parts per million"], answer: 0 },
        { type: "mcq", q: "Why must drilling fluid density match the surrounding ice density?", options: ["To lubricate the electric generators", "To prevent the deep borehole from closing under plastic pressure", "To freeze the core instantly into solid rock", "To wash out contaminated volcanic ash"], answer: 1 },
        { type: "mcq", q: "What mineral indicator reveals past volcanic eruptions inside ice layers?", options: ["Radioactive uranium dust", "Sulfate spikes and volcanic tephra shards", "Petrified plant pollen grains", "Iron oxide sand grains"], answer: 1 },
        { type: "completion", q: "Snow gradually compacts into a dense transitional granular substance called ________ before forming glacial ice.", answer: "firn" },
        { type: "completion", q: "The deep ice core drilling station Dome ________ in East Antarctica reached 800,000-year-old ice.", answer: "C" },
        { type: "completion", q: "The isotope oxygen-________ is used as a proxy to reconstruct historical temperatures.", answer: "18" }
      ]
    },
    p2: {
      title: "The Emergence of Phonetic Alphabets from Proto-Sinaitic Script",
      paragraphs: [
        "[A] The invention of the alphabet around 1800 BCE represents one of the most transformative intellectual breakthroughs in human history. Prior to this innovation, the dominant writing systems of the Bronze Age—Mesopotamian cuneiform and Egyptian hieroglyphs—were complex logosyllabic scripts requiring years of scribal apprenticeship to master hundreds of ideograms.",
        "[B] Archaeological discoveries at Serabit el-Khadim, a turquoise mining outpost in the Sinai Peninsula, revealed that the earliest phonetic script was created not by elite Egyptian scribes, but by Semitic-speaking migrant miners. These workers adopted approximately twenty-five Egyptian hieroglyphic symbols and repurposed them through acrophony—using a pictograph to represent solely the initial consonant sound of the object's Semitic name.",
        "[C] For example, the Egyptian hieroglyph representing an ox head (Semitic: 'aleph') was repurposed to symbolize the glottal stop /ʔ/. Similarly, the hieroglyph for a house ('bet') came to denote the consonant /b/. By reducing the writing system to a compact inventory of consonants, literacy was decoupled from royal bureaucratic monopolies.",
        "[D] This Proto-Sinaitic script was adopted and refined by Phoenician maritime merchants along the Levantine coast. As seafaring traders, the Phoenicians required an efficient bookkeeping tool for commercial manifests. Their 22-letter linear consonant script spread throughout the Mediterranean basin, giving rise to Aramaic, Hebrew, and the Greek alphabet.",
        "[E] The Greeks made a monumental addition around 800 BCE: they adapted unused Phoenician consonant signs to represent vowels, creating the world's first true phonetic alphabet where every phoneme had a corresponding grapheme. This adaptation facilitated the rapid democratic spread of literacy and written philosophical discourse."
      ],
      questions: [
        { type: "mcq", q: "Where was the earliest known phonetic alphabetic script discovered?", options: ["In the royal archives of ancient Babylon", "At Serabit el-Khadim turquoise mines in the Sinai", "In the library of Alexandria in Egypt", "At the Palace of Knossos in Crete"], answer: 1 },
        { type: "mcq", q: "What is the linguistic principle of acrophony?", options: ["Writing symbols from left to right in alternating lines", "Using a pictograph to represent the first sound of its spoken name", "Combining multiple hieroglyphs into a single artistic seal", "Assigning numerical values to religious words"], answer: 1 },
        { type: "mcq", q: "Why did Phoenician merchants enthusiastically adopt and diffuse the Proto-Sinaitic alphabet?", options: ["They were commanded to do so by Egyptian pharaohs", "They needed an efficient writing tool for trade manifests and bookkeeping", "Their religious traditions banned complex artistic drawings", "They sought to keep their language secret from competitors"], answer: 1 },
        { type: "mcq", q: "What crucial innovation did the Greeks contribute to the Phoenician alphabet?", options: ["They added decorative punctuation marks", "They created dedicated symbols for vowels", "They eliminated all consonants from the script", "They increased the letter count to over one hundred"], answer: 1 },
        { type: "mcq", q: "What sound was represented by the original ox-head sign ('aleph')?", options: ["A soft humming nasal sound", "A glottal stop consonant", "A long vowel sound like 'o'", "A rolling trill sound like 'r'"], answer: 1 },
        { type: "mcq", q: "How did Bronze Age cuneiform and hieroglyphic scripts restrict literacy?", options: ["They required memorizing hundreds of complex symbols over years", "They could only be written on gold leaf tablets", "Writing was punished as a criminal offense outside temples", "They lacked symbols for domestic animals"], answer: 0 },
        { type: "tfng", q: "Egyptian hieroglyphic writing was fully phonetic with only twenty-five symbols.", answer: "FALSE" },
        { type: "tfng", q: "The inventors of the Proto-Sinaitic script were Semitic-speaking workers in the Sinai.", answer: "TRUE" },
        { type: "tfng", q: "The Phoenician alphabet contained twenty-two linear consonant letters.", answer: "TRUE" },
        { type: "tfng", q: "The Phoenicians had a dedicated vowel symbol for every sound.", answer: "FALSE" },
        { type: "tfng", q: "Greek modification of the alphabet made literacy more widely accessible.", answer: "TRUE" },
        { type: "completion", q: "The linguistic method of using the initial sound of an object's name is called ________.", answer: "acrophony" },
        { type: "completion", q: "The Semitic word for house, which became the letter B, was ________.", answer: "bet" },
        { type: "completion", q: "The Phoenician script consisted of ________ consonant letters.", answer: "22|twenty-two" }
      ]
    },
    p3: {
      title: "Autonomous Swarm Robotics in Precision Agriculture",
      paragraphs: [
        "[A] For nearly a century, industrial agriculture relied on increasingly heavy tractors and combine harvesters. While these machines boosted field throughput, their massive axle weights—often exceeding thirty metric tons—have caused severe subsoil compaction, diminishing root penetration, water infiltration, and crop yields. In response, agricultural engineers are pivoting toward swarms of lightweight, autonomous micro-robots.",
        "[B] Swarm robotics leverages decentralized bio-inspired algorithms derived from ant colonies and bird flocks. Rather than employing a single colossal machine, dozens of agile robots weighing under fifty kilograms collaborate across hectares of farmland. If a single unit experiences a mechanical breakdown, the collective system dynamically redistributes tasks without disrupting overall field operations.",
        "[C] Equipped with multispectral cameras and edge-AI neural processors, micro-robots execute centimeter-accurate weed eradication. Utilizing computer vision, algorithms distinguish between emerging cash crop shoots and invasive weeds within milliseconds. Instead of blanket chemical spraying, robots deploy targeted micro-doses of herbicide or mechanical weeding arms, slashing pesticide volumes by over ninety percent.",
        "[D] Beyond weed control, robotic swarms conduct continuous phenotypic monitoring. Micro-sensors measure leaf reflectance, soil moisture tension, and chlorophyll fluorescence, enabling variable-rate micro-irrigation and precision nitrogen delivery. This localized intervention mitigates agricultural nutrient runoff into nearby river basins and groundwater aquifers.",
        "[E] Despite operational successes, economic and regulatory barriers persist. High initial capital costs for sensor suites, rural connectivity dead zones, and ambiguous legal liability frameworks regarding autonomous field machinery currently limit adoption primarily to high-value horticultural crops such as berries and vineyards."
      ],
      questions: [
        { type: "tfng", q: "Massive traditional combine harvesters can cause severe subsoil compaction.", answer: "TRUE" },
        { type: "tfng", q: "A swarm robotics system stops operating completely if one unit breaks down.", answer: "FALSE" },
        { type: "tfng", q: "Targeted robotic weed removal can reduce chemical herbicide usage by over 90 percent.", answer: "TRUE" },
        { type: "tfng", q: "Micro-robots measure soil moisture and chlorophyll to deliver precise nutrients.", answer: "TRUE" },
        { type: "tfng", q: "Swarm robots are already cheaper to manufacture than standard diesel tractors.", answer: "FALSE" },
        { type: "tfng", q: "Autonomous farm robots are currently most widely adopted in high-value horticultural crops.", answer: "TRUE" },
        { type: "mcq", q: "What primary environmental issue is caused by blanket agricultural chemical spraying?", options: ["Subsoil freezing during winter", "Widespread nutrient runoff into river basins and aquifers", "Rapid depletion of solar radiation in fields", "Accelerated rust on metal grain silos"], answer: 1 },
        { type: "mcq", q: "How do micro-robots identify invasive weeds in fields?", options: ["By smelling chemical scents released by roots", "Using multispectral cameras and real-time computer vision", "By testing soil acidity around each plant base", "By relying on satellite heat maps updated weekly"], answer: 1 },
        { type: "mcq", q: "What natural phenomenon inspired the algorithms governing robotic farm swarms?", options: ["The ocean wave patterns along coastlines", "The decentralized behavior of ant colonies and bird flocks", "The growth rings inside ancient redwood trees", "The crystalline structures of quartz minerals"], answer: 1 },
        { type: "mcq", q: "What is an ongoing hurdle restricting the universal adoption of agricultural robot swarms?", options: ["Excessive weight causing crop damage", "Lack of rural internet connectivity and ambiguous legal liability", "Total rejection of all automation by fruit growers", "Overproduction of crops leading to price crashes"], answer: 1 },
        { type: "completion", q: "Agricultural micro-robots typically weigh under ________ kilograms.", answer: "50|fifty" },
        { type: "completion", q: "Robotic algorithms distinguish cash crop seedlings from weeds using real-time computer ________.", answer: "vision" }
      ]
    }
  }
];

console.log("Loaded seed tests:", topicCatalog.length);
