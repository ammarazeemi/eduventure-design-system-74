
export interface Topic {
  id: string;
  name: string;
  icon: string;
  progress: number;
  readingContent: string;
  videoUrl: string;
  description: string;
}

export interface Subject {
  id: string;
  title: string;
  icon: string;
  color: string;
  path: string;
  subtitle: string;
  topics: Topic[];
}

export interface Quiz {
  id: string;
  name: string;
  icon: string;
  score: string;
  color: string;
  subject: string;
  topic: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Game {
  id: string;
  name: string;
  icon: string;
  subject: string;
  color: string;
  description: string;
  type: 'quiz' | 'memory' | 'matching' | 'puzzle';
}

export const subjects: Subject[] = [
  {
    id: 'biology',
    title: 'BIOLOGY',
    icon: '🧬',
    color: 'from-green-300 to-green-400',
    path: 'biology',
    subtitle: 'Cells, Evolution, DNA, Human Body',
    topics: [
      {
        id: 'cells',
        name: 'Cells',
        icon: '🔬',
        progress: 75,
        description: 'The basic unit of life',
        readingContent: `
# Cell Biology

Cells are the fundamental units of life. Every living organism is composed of one or more cells. 

## Cell Types
- **Prokaryotic cells**: Lack a membrane-bound nucleus (bacteria)
- **Eukaryotic cells**: Have a membrane-bound nucleus (plants, animals, fungi)

## Cell Organelles
- **Nucleus**: Controls cell activities and contains DNA
- **Mitochondria**: Powerhouse of the cell, produces ATP
- **Ribosomes**: Protein synthesis
- **Endoplasmic Reticulum**: Protein and lipid synthesis
- **Golgi Apparatus**: Modifies and packages proteins

## Cell Membrane
The cell membrane controls what enters and exits the cell through selective permeability.
        `,
        videoUrl: 'https://www.youtube.com/embed/URUJD5NEXC8'
      },
      {
        id: 'dna',
        name: 'DNA',
        icon: '🧬',
        progress: 60,
        description: 'Genetic material and heredity',
        readingContent: `
# DNA - Deoxyribonucleic Acid

DNA is the hereditary material in humans and almost all other organisms.

## Structure
- Double helix structure
- Made of nucleotides (A, T, G, C)
- Sugar-phosphate backbone

## Functions
- Stores genetic information
- Controls protein synthesis
- Passes traits to offspring

## DNA Replication
The process by which DNA makes a copy of itself during cell division.
        `,
        videoUrl: 'https://www.youtube.com/embed/TNKWgcFPHqw'
      },
      {
        id: 'human-body',
        name: 'Human Body',
        icon: '👤',
        progress: 40,
        description: 'Anatomy and physiology',
        readingContent: `
# Human Body Systems

The human body consists of several interconnected systems.

## Major Systems
- **Circulatory System**: Heart, blood vessels, blood
- **Respiratory System**: Lungs, airways
- **Digestive System**: Stomach, intestines, liver
- **Nervous System**: Brain, spinal cord, nerves
- **Skeletal System**: Bones, joints, cartilage
- **Muscular System**: Muscles and tendons

## Homeostasis
The body's ability to maintain stable internal conditions.
        `,
        videoUrl: 'https://www.youtube.com/embed/uBUHI0vUC3Q'
      },
      {
        id: 'photosynthesis',
        name: 'Photosynthesis',
        icon: '🌱',
        progress: 90,
        description: 'How plants make food',
        readingContent: `
# Photosynthesis

The process by which plants convert light energy into chemical energy.

## Equation
6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂

## Stages
1. **Light Reactions**: Occur in thylakoids
2. **Calvin Cycle**: Occurs in stroma

## Importance
- Produces oxygen for life on Earth
- Foundation of food chains
- Removes CO₂ from atmosphere
        `,
        videoUrl: 'https://www.youtube.com/embed/uixA8ZXx0KY'
      },
      {
        id: 'evolution',
        name: 'Evolution',
        icon: '🦕',
        progress: 25,
        description: 'Species change over time',
        readingContent: `
# Evolution

The process by which species change over time through natural selection.

## Key Concepts
- **Natural Selection**: Survival of the fittest
- **Adaptation**: Traits that help survival
- **Mutation**: Changes in DNA
- **Genetic Drift**: Random changes in allele frequency

## Evidence
- Fossil record
- Comparative anatomy
- Molecular biology
- Biogeography
        `,
        videoUrl: 'https://www.youtube.com/embed/GhHOjC4oxh8'
      },
      {
        id: 'microbes',
        name: 'Microbes',
        icon: '🦠',
        progress: 55,
        description: 'Microscopic organisms',
        readingContent: `
# Microorganisms

Tiny living organisms invisible to the naked eye.

## Types
- **Bacteria**: Single-celled prokaryotes
- **Viruses**: Non-living infectious agents
- **Fungi**: Yeasts, molds, mushrooms
- **Protozoa**: Single-celled eukaryotes

## Importance
- Decomposition and nutrient cycling
- Food production (yogurt, bread)
- Medicine production
- Some cause diseases
        `,
        videoUrl: 'https://www.youtube.com/embed/tEg2DWc23_A'
      }
    ]
  },
  {
    id: 'mathematics',
    title: 'MATHEMATICS',
    icon: '📊',
    color: 'from-blue-300 to-blue-400',
    path: 'maths',
    subtitle: 'Algebra, Geometry, Statistics, Calculus',
    topics: [
      {
        id: 'algebra',
        name: 'Algebra',
        icon: '🔢',
        progress: 90,
        description: 'Working with variables and equations',
        readingContent: `
# Algebra

Algebra is the branch of mathematics that uses symbols and variables to represent numbers.

## Basic Concepts
- **Variables**: Letters that represent unknown numbers (x, y, z)
- **Expressions**: Combinations of variables and numbers (3x + 5)
- **Equations**: Mathematical statements that two expressions are equal

## Linear Equations
- Form: ax + b = c
- Example: 2x + 3 = 7
- Solution: x = 2

## Quadratic Equations
- Form: ax² + bx + c = 0
- Solutions using quadratic formula
        `,
        videoUrl: 'https://www.youtube.com/embed/NybHckSEQBI'
      },
      {
        id: 'geometry',
        name: 'Geometry',
        icon: '📐',
        progress: 70,
        description: 'Shapes, angles, and spatial reasoning',
        readingContent: `
# Geometry

The study of shapes, sizes, and properties of space.

## Basic Shapes
- **Triangles**: 3 sides, angles sum to 180°
- **Quadrilaterals**: 4 sides (squares, rectangles, parallelograms)
- **Circles**: All points equidistant from center

## Key Formulas
- Area of triangle: ½ × base × height
- Area of circle: πr²
- Pythagorean theorem: a² + b² = c²

## Types of Angles
- Acute: less than 90°
- Right: exactly 90°
- Obtuse: greater than 90°
        `,
        videoUrl: 'https://www.youtube.com/embed/Z-S-QCPX-SY'
      },
      {
        id: 'probability',
        name: 'Probability',
        icon: '🎲',
        progress: 45,
        description: 'Chance and statistics',
        readingContent: `
# Probability

The study of chance and likelihood of events occurring.

## Basic Concepts
- **Probability**: P(event) = favorable outcomes / total outcomes
- **Range**: 0 ≤ P(event) ≤ 1
- **Certain event**: P = 1
- **Impossible event**: P = 0

## Types of Events
- **Independent**: One event doesn't affect another
- **Dependent**: One event affects another
- **Mutually exclusive**: Events cannot occur together

## Probability Rules
- Addition rule
- Multiplication rule
- Conditional probability
        `,
        videoUrl: 'https://www.youtube.com/embed/uzkc-qNVoOk'
      },
      {
        id: 'statistics',
        name: 'Statistics',
        icon: '📈',
        progress: 65,
        description: 'Data analysis and interpretation',
        readingContent: `
# Statistics

The science of collecting, organizing, and interpreting data.

## Measures of Central Tendency
- **Mean**: Average of all values
- **Median**: Middle value when ordered
- **Mode**: Most frequently occurring value

## Measures of Spread
- **Range**: Difference between max and min
- **Variance**: Average squared deviation
- **Standard deviation**: Square root of variance

## Data Representation
- Bar graphs
- Histograms
- Pie charts
- Scatter plots
        `,
        videoUrl: 'https://www.youtube.com/embed/hjZJaENgUCQ'
      }
    ]
  },
  {
    id: 'chemistry',
    title: 'CHEMISTRY',
    icon: '⚛️',
    color: 'from-orange-300 to-orange-400',
    path: 'chemistry',
    subtitle: 'Atoms, Molecules, Reactions, Periodic Table',
    topics: [
      {
        id: 'atoms',
        name: 'Atoms',
        icon: '⚛️',
        progress: 85,
        description: 'Building blocks of matter',
        readingContent: `
# Atoms

Atoms are the basic building blocks of all matter.

## Structure
- **Nucleus**: Contains protons and neutrons
- **Electrons**: Orbit around the nucleus
- **Protons**: Positive charge, determine element
- **Neutrons**: No charge, add mass
- **Electrons**: Negative charge, involved in bonding

## Atomic Number
- Number of protons in an atom
- Determines the element's identity
- Same as number of electrons in neutral atom

## Mass Number
- Sum of protons and neutrons
- Used to calculate atomic mass
        `,
        videoUrl: 'https://www.youtube.com/embed/FSyAehMdpyI'
      },
      {
        id: 'periodic-table',
        name: 'Periodic Table',
        icon: '📊',
        progress: 75,
        description: 'Organization of elements',
        readingContent: `
# Periodic Table

A systematic arrangement of chemical elements.

## Organization
- **Periods**: Horizontal rows (7 periods)
- **Groups**: Vertical columns (18 groups)
- **Families**: Elements with similar properties

## Important Groups
- **Group 1**: Alkali metals (highly reactive)
- **Group 17**: Halogens (form salts)
- **Group 18**: Noble gases (unreactive)

## Trends
- **Atomic radius**: Decreases across period
- **Ionization energy**: Increases across period
- **Electronegativity**: Increases across period
        `,
        videoUrl: 'https://www.youtube.com/embed/fPnwBITSmgU'
      },
      {
        id: 'molecules',
        name: 'Molecules',
        icon: '🔬',
        progress: 60,
        description: 'Atoms bonded together',
        readingContent: `
# Molecules

Groups of atoms bonded together by chemical bonds.

## Types of Bonds
- **Ionic bonds**: Transfer of electrons
- **Covalent bonds**: Sharing of electrons
- **Metallic bonds**: Sea of electrons

## Molecular Shapes
- **Linear**: 180° bond angle
- **Bent**: Less than 120° angle
- **Tetrahedral**: 109.5° angles
- **Trigonal planar**: 120° angles

## Polarity
- **Polar molecules**: Unequal electron sharing
- **Nonpolar molecules**: Equal electron sharing
        `,
        videoUrl: 'https://www.youtube.com/embed/QqjcCvzWwww'
      },
      {
        id: 'reactions',
        name: 'Reactions',
        icon: '⚗️',
        progress: 40,
        description: 'Chemical changes and equations',
        readingContent: `
# Chemical Reactions

Processes where substances are transformed into new substances.

## Types of Reactions
- **Synthesis**: A + B → AB
- **Decomposition**: AB → A + B
- **Single replacement**: A + BC → AC + B
- **Double replacement**: AB + CD → AD + CB
- **Combustion**: Hydrocarbon + O₂ → CO₂ + H₂O

## Balancing Equations
- Law of conservation of mass
- Same number of atoms on both sides
- Use coefficients to balance

## Reaction Rates
Factors affecting how fast reactions occur:
- Temperature, concentration, surface area, catalysts
        `,
        videoUrl: 'https://www.youtube.com/embed/7ErwQTgTD-4'
      }
    ]
  },
  {
    id: 'geography',
    title: 'GEOGRAPHY',
    icon: '🌍',
    color: 'from-emerald-300 to-emerald-400',
    path: 'geography',
    subtitle: 'Earth Science, Climate, Natural Hazards',
    topics: [
      {
        id: 'volcanoes',
        name: 'Volcanoes',
        icon: '🌋',
        progress: 80,
        description: 'Volcanic activity and formation',
        readingContent: `
# Volcanoes

Openings in Earth's crust where molten rock erupts.

## Formation
- Formed at plate boundaries
- Hot spots in the mantle
- Magma rises through cracks

## Types
- **Shield volcanoes**: Broad, gentle slopes (Hawaii)
- **Stratovolcanoes**: Steep-sided, explosive (Mt. Fuji)
- **Cinder cones**: Small, cone-shaped

## Ring of Fire
- Circle of volcanoes around Pacific Ocean
- 75% of world's active volcanoes
- Located on tectonic plate boundaries

## Volcanic Hazards
- Lava flows, ash clouds, pyroclastic flows
        `,
        videoUrl: 'https://www.youtube.com/embed/2WB6eJiwhP8'
      },
      {
        id: 'climate',
        name: 'Climate',
        icon: '🌤️',
        progress: 30,
        description: 'Weather patterns and climate zones',
        readingContent: `
# Climate

Long-term weather patterns in a region.

## Climate Factors
- **Latitude**: Distance from equator
- **Altitude**: Height above sea level
- **Ocean currents**: Warm/cold water movement
- **Topography**: Mountains, valleys affect weather

## Climate Zones
- **Tropical**: Hot, humid year-round
- **Temperate**: Moderate temperatures
- **Polar**: Cold year-round
- **Desert**: Hot, dry conditions

## Climate Change
- Global warming due to greenhouse gases
- Effects: melting ice, rising sea levels
- Human activities contribute to change
        `,
        videoUrl: 'https://www.youtube.com/embed/dcBxEb3J9hY'
      },
      {
        id: 'ecosystems',
        name: 'Ecosystems',
        icon: '🌿',
        progress: 70,
        description: 'Living and non-living interactions',
        readingContent: `
# Ecosystems

Communities of living organisms and their environment.

## Components
- **Biotic factors**: Living things (plants, animals)
- **Abiotic factors**: Non-living (water, soil, air)

## Types of Ecosystems
- **Forest**: Trees, diverse wildlife
- **Grassland**: Grasses, grazing animals
- **Desert**: Sparse vegetation, adapted animals
- **Aquatic**: Freshwater and marine

## Food Chains
- **Producers**: Plants make their own food
- **Primary consumers**: Herbivores eat plants
- **Secondary consumers**: Carnivores eat herbivores
- **Decomposers**: Break down dead material

## Energy Flow
Energy flows from sun → producers → consumers
        `,
        videoUrl: 'https://www.youtube.com/embed/2FKpH6K4w50'
      },
      {
        id: 'earth-layers',
        name: 'Earth Layers',
        icon: '🌍',
        progress: 45,
        description: 'Structure of planet Earth',
        readingContent: `
# Earth's Layers

Our planet has distinct layers with different properties.

## Structure
- **Crust**: Thin outer layer (5-70 km thick)
- **Mantle**: Hot, dense rock layer (2,900 km thick)
- **Outer core**: Liquid iron and nickel
- **Inner core**: Solid iron and nickel

## Crust Types
- **Continental crust**: Thicker, less dense
- **Oceanic crust**: Thinner, more dense

## Plate Tectonics
- Crust broken into moving pieces (plates)
- Plates move due to convection in mantle
- Causes earthquakes, volcanoes, mountain building

## Evidence
- Earthquake waves reveal internal structure
        `,
        videoUrl: 'https://www.youtube.com/embed/XcYrm3_X0Fk'
      },
      {
        id: 'maps',
        name: 'Maps',
        icon: '🗺️',
        progress: 65,
        description: 'Reading and understanding maps',
        readingContent: `
# Maps and Map Reading

Tools for representing Earth's surface on a flat surface.

## Map Elements
- **Title**: What the map shows
- **Legend/Key**: Explains symbols and colors
- **Scale**: Shows real-world distances
- **Compass rose**: Shows directions
- **Grid system**: Latitude and longitude

## Types of Maps
- **Political**: Countries, states, cities
- **Physical**: Mountains, rivers, elevation
- **Climate**: Weather patterns
- **Topographic**: Detailed elevation

## Projections
Ways to show curved Earth on flat paper:
- Mercator, Robinson, Mollweide projections
- Each has advantages and distortions
        `,
        videoUrl: 'https://www.youtube.com/embed/kIEMiZ4bWgU'
      }
    ]
  },
  {
    id: 'physics',
    title: 'PHYSICS',
    icon: '⚡',
    color: 'from-yellow-300 to-yellow-400',
    path: 'physics',
    subtitle: 'Motion, Forces, Energy, Waves',
    topics: [
      {
        id: 'motion',
        name: 'Motion',
        icon: '🏃',
        progress: 60,
        description: 'Movement and kinematics',
        readingContent: `
# Motion

The change in position of an object over time.

## Types of Motion
- **Linear motion**: Movement in a straight line
- **Rotational motion**: Movement around an axis
- **Oscillatory motion**: Back and forth movement

## Key Concepts
- **Distance**: Total path traveled
- **Displacement**: Change in position
- **Speed**: Distance per unit time
- **Velocity**: Displacement per unit time
- **Acceleration**: Change in velocity per unit time

## Equations of Motion
- v = u + at
- s = ut + ½at²
- v² = u² + 2as

Where: u = initial velocity, v = final velocity, a = acceleration, t = time, s = displacement
        `,
        videoUrl: 'https://www.youtube.com/embed/ZM8ECpBuQYE'
      },
      {
        id: 'forces',
        name: 'Forces',
        icon: '💪',
        progress: 75,
        description: 'Pushes and pulls that cause motion',
        readingContent: `
# Forces

A force is a push or pull that can change an object's motion.

## Newton's Laws
1. **First Law**: Objects at rest stay at rest, objects in motion stay in motion
2. **Second Law**: F = ma (Force = mass × acceleration)
3. **Third Law**: For every action, there's an equal and opposite reaction

## Types of Forces
- **Gravitational force**: Earth pulls objects down
- **Friction**: Opposes motion between surfaces
- **Normal force**: Surface pushes back on object
- **Applied force**: Force you apply to object
- **Tension**: Force in ropes or strings

## Force Diagrams
Show all forces acting on an object
        `,
        videoUrl: 'https://www.youtube.com/embed/fo_pmp5rtzo'
      },
      {
        id: 'energy',
        name: 'Energy',
        icon: '⚡',
        progress: 55,
        description: 'Ability to do work',
        readingContent: `
# Energy

The ability to do work or cause change.

## Types of Energy
- **Kinetic energy**: Energy of motion (KE = ½mv²)
- **Potential energy**: Stored energy due to position
- **Chemical energy**: Stored in bonds (food, fuel)
- **Thermal energy**: Heat energy
- **Electrical energy**: Moving electric charges
- **Nuclear energy**: From atomic nuclei

## Conservation of Energy
- Energy cannot be created or destroyed
- Energy can be converted from one form to another
- Total energy in a closed system remains constant

## Work
- Work = Force × Distance
- Work is done when force causes displacement
        `,
        videoUrl: 'https://www.youtube.com/embed/w4QFJb9a8vo'
      }
    ]
  },
  {
    id: 'english',
    title: 'ENGLISH',
    icon: '📚',
    color: 'from-pink-300 to-pink-400',
    path: 'english',
    subtitle: 'Grammar, Literature, Writing, Reading',
    topics: [
      {
        id: 'grammar',
        name: 'Grammar',
        icon: '📝',
        progress: 70,
        description: 'Rules of language structure',
        readingContent: `
# English Grammar

The rules that govern how we use language.

## Parts of Speech
- **Nouns**: Person, place, thing, or idea
- **Verbs**: Action or state of being
- **Adjectives**: Describe nouns
- **Adverbs**: Describe verbs, adjectives, or other adverbs
- **Pronouns**: Replace nouns
- **Prepositions**: Show relationships
- **Conjunctions**: Connect words or phrases
- **Interjections**: Express emotion

## Sentence Structure
- **Subject**: Who or what the sentence is about
- **Predicate**: What the subject does or is
- **Object**: Receives the action

## Tenses
Past, present, and future forms of verbs
        `,
        videoUrl: 'https://www.youtube.com/embed/fYLJ1SdCST8'
      },
      {
        id: 'literature',
        name: 'Literature',
        icon: '📖',
        progress: 45,
        description: 'Poetry, novels, and classic works',
        readingContent: `
# Literature

Written works of artistic value and expression.

## Genres
- **Fiction**: Made-up stories (novels, short stories)
- **Non-fiction**: True stories and information
- **Poetry**: Rhythmic, expressive writing
- **Drama**: Plays and scripts

## Literary Elements
- **Plot**: Sequence of events
- **Character**: People in the story
- **Setting**: Time and place
- **Theme**: Central message or meaning
- **Point of view**: Who tells the story

## Famous Authors
- Shakespeare, Dickens, Austen, Twain
- Modern authors: Rowling, Morrison, King

## Reading Strategies
Active reading, annotation, analysis
        `,
        videoUrl: 'https://www.youtube.com/embed/MSYw502dJNY'
      }
    ]
  },
  {
    id: 'computer-science',
    title: 'COMPUTER SCIENCE',
    icon: '💻',
    color: 'from-indigo-300 to-indigo-400',
    path: 'computer-science',
    subtitle: 'Programming, Algorithms, Data Structures',
    topics: [
      {
        id: 'programming',
        name: 'Programming',
        icon: '💻',
        progress: 50,
        description: 'Writing code and algorithms',
        readingContent: `
# Programming

The process of creating instructions for computers.

## Basic Concepts
- **Algorithm**: Step-by-step solution to a problem
- **Variable**: Storage for data
- **Function**: Reusable block of code
- **Loop**: Repeat code multiple times
- **Condition**: Make decisions in code

## Programming Languages
- **Python**: Easy to learn, versatile
- **JavaScript**: Web development
- **Java**: Object-oriented, platform independent
- **C++**: Fast, system programming

## Problem Solving
1. Understand the problem
2. Break it into smaller parts
3. Write pseudocode
4. Code the solution
5. Test and debug
        `,
        videoUrl: 'https://www.youtube.com/embed/zOjov-2OZ0E'
      },
      {
        id: 'algorithms',
        name: 'Algorithms',
        icon: '🔄',
        progress: 35,
        description: 'Problem-solving procedures',
        readingContent: `
# Algorithms

Step-by-step procedures for solving problems.

## Characteristics
- **Input**: Data given to algorithm
- **Output**: Result produced
- **Definiteness**: Clear, unambiguous steps
- **Finiteness**: Must terminate
- **Effectiveness**: Steps must be executable

## Common Algorithms
- **Sorting**: Arrange data in order
- **Searching**: Find specific data
- **Recursion**: Function calls itself

## Algorithm Analysis
- **Time complexity**: How long it takes
- **Space complexity**: How much memory used
- **Big O notation**: Describes efficiency

## Examples
Binary search, bubble sort, merge sort
        `,
        videoUrl: 'https://www.youtube.com/embed/KEEKn7Me-ms'
      }
    ]
  },
  {
    id: 'history',
    title: 'HISTORY',
    icon: '🏛️',
    color: 'from-red-300 to-red-400',
    path: 'history',
    subtitle: 'Ancient Civilizations, Wars, Important Events',
    topics: [
      {
        id: 'ancient-civilizations',
        name: 'Ancient Civilizations',
        icon: '🏺',
        progress: 40,
        description: 'Early human societies',
        readingContent: `
# Ancient Civilizations

The first complex societies in human history.

## Major Civilizations
- **Mesopotamia**: First cities, writing (3500 BCE)
- **Ancient Egypt**: Pyramids, pharaohs, Nile River
- **Indus Valley**: Well-planned cities, drainage systems
- **Ancient China**: Great Wall, silk, paper
- **Ancient Greece**: Democracy, philosophy, Olympics
- **Roman Empire**: Law, engineering, vast territory

## Characteristics
- **Agriculture**: Farming surplus enabled cities
- **Writing systems**: Record keeping, laws
- **Social hierarchy**: Different classes of people
- **Specialized jobs**: Not everyone farmed
- **Government**: Rules and leaders

## Legacy
These civilizations laid foundations for modern society
        `,
        videoUrl: 'https://www.youtube.com/embed/9mGlnVHJkMY'
      },
      {
        id: 'world-wars',
        name: 'World Wars',
        icon: '⚔️',
        progress: 25,
        description: 'Global conflicts of the 20th century',
        readingContent: `
# World Wars

Two major global conflicts that shaped the modern world.

## World War I (1914-1918)
- **Causes**: Imperialism, alliances, nationalism
- **Major powers**: Allied vs Central Powers
- **New technology**: Machine guns, poison gas, planes
- **Outcome**: End of empires, new countries formed

## World War II (1939-1945)
- **Causes**: Rise of fascism, failure of League of Nations
- **Major events**: Holocaust, Pearl Harbor, D-Day
- **Key figures**: Hitler, Churchill, Roosevelt, Stalin
- **Outcome**: United Nations formed, Cold War begins

## Impact
- Millions of casualties
- Technological advancement
- Changed world politics
- Human rights awareness
        `,
        videoUrl: 'https://www.youtube.com/embed/HUqy-OQvVtI'
      }
    ]
  },
  {
    id: 'environmental-science',
    title: 'ENVIRONMENTAL SCIENCE',
    icon: '🌱',
    color: 'from-teal-300 to-teal-400',
    path: 'environmental-science',
    subtitle: 'Ecology, Conservation, Sustainability',
    topics: [
      {
        id: 'ecology',
        name: 'Ecology',
        icon: '🌿',
        progress: 65,
        description: 'Study of organism interactions',
        readingContent: `
# Ecology

The study of how organisms interact with each other and their environment.

## Levels of Organization
- **Individual**: Single organism
- **Population**: Same species in an area
- **Community**: Different species in an area
- **Ecosystem**: Community plus environment
- **Biosphere**: All life on Earth

## Ecological Relationships
- **Predation**: One organism eats another
- **Competition**: Organisms compete for resources
- **Mutualism**: Both organisms benefit
- **Parasitism**: One benefits, other is harmed
- **Commensalism**: One benefits, other unaffected

## Nutrient Cycles
Water, carbon, nitrogen, and phosphorus cycles
Energy flows through ecosystems
        `,
        videoUrl: 'https://www.youtube.com/embed/LbPwI-9BRRI'
      },
      {
        id: 'conservation',
        name: 'Conservation',
        icon: '🛡️',
        progress: 30,
        description: 'Protecting natural resources',
        readingContent: `
# Conservation

The protection and sustainable use of natural resources.

## Why Conserve?
- **Biodiversity**: Variety of life is important
- **Resources**: Finite materials we depend on
- **Climate stability**: Ecosystems regulate climate
- **Future generations**: Leave a healthy planet

## Threats to Environment
- **Habitat destruction**: Development, deforestation
- **Pollution**: Air, water, soil contamination
- **Climate change**: Global warming effects
- **Overexploitation**: Taking too much too fast

## Conservation Methods
- Protected areas and national parks
- Sustainable practices
- Renewable energy
- Recycling and waste reduction
- Education and awareness
        `,
        videoUrl: 'https://www.youtube.com/embed/OIdnYagCa1k'
      }
    ]
  }
];

export const allQuizzes: Quiz[] = [
  {
    id: 'algebra-quiz',
    name: 'Algebra Quiz',
    icon: '🔢',
    score: 'Last Score: 85%',
    color: 'from-blue-300 to-blue-400',
    subject: 'mathematics',
    topic: 'algebra',
    questions: [
      {
        question: 'What is the value of x in the equation 2x + 5 = 15?',
        options: ['5', '10', '7.5', '3'],
        correct: 0,
        explanation: 'Subtract 5 from both sides: 2x = 10, then divide by 2: x = 5'
      },
      {
        question: 'Simplify: 3x + 2x',
        options: ['5x', '6x', '5x²', '6x²'],
        correct: 0,
        explanation: 'Combine like terms: 3x + 2x = 5x'
      },
      {
        question: 'What is the slope of the line y = 3x + 2?',
        options: ['2', '3', '3x', '5'],
        correct: 1,
        explanation: 'In the form y = mx + b, the slope is m = 3'
      }
    ]
  },
  {
    id: 'cell-biology-quiz',
    name: 'Cell Biology Quiz',
    icon: '🧬',
    score: 'Last Score: 92%',
    color: 'from-green-300 to-green-400',
    subject: 'biology',
    topic: 'cells',
    questions: [
      {
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'],
        correct: 1,
        explanation: 'Mitochondria produce ATP, the energy currency of the cell'
      },
      {
        question: 'Which organelle controls the cell?',
        options: ['Mitochondria', 'Nucleus', 'Ribosome', 'Cytoplasm'],
        correct: 1,
        explanation: 'The nucleus contains DNA and controls all cell activities'
      },
      {
        question: 'Where does protein synthesis occur?',
        options: ['Nucleus', 'Mitochondria', 'Ribosomes', 'Golgi apparatus'],
        correct: 2,
        explanation: 'Ribosomes are the sites of protein synthesis in the cell'
      }
    ]
  },
  {
    id: 'volcanoes-quiz',
    name: 'Volcanoes Quiz',
    icon: '🌋',
    score: 'Last Score: 78%',
    color: 'from-red-300 to-red-400',
    subject: 'geography',
    topic: 'volcanoes',
    questions: [
      {
        question: 'What type of rock forms from cooled lava?',
        options: ['Sedimentary', 'Metamorphic', 'Igneous', 'Limestone'],
        correct: 2,
        explanation: 'Igneous rock forms when lava or magma cools and solidifies'
      },
      {
        question: 'What is the Ring of Fire?',
        options: ['Ring of volcanoes around Pacific', 'Solar phenomenon', 'Mountain range', 'Ocean current'],
        correct: 0,
        explanation: 'The Ring of Fire is a circle of volcanoes around the Pacific Ocean'
      }
    ]
  },
  {
    id: 'periodic-table-quiz',
    name: 'Periodic Table Quiz',
    icon: '⚛️',
    score: 'Last Score: 88%',
    color: 'from-orange-300 to-orange-400',
    subject: 'chemistry',
    topic: 'periodic-table',
    questions: [
      {
        question: 'What is the chemical symbol for Gold?',
        options: ['Go', 'Gd', 'Au', 'Ag'],
        correct: 2,
        explanation: 'Au comes from the Latin word "aurum" meaning gold'
      },
      {
        question: 'Which element has atomic number 1?',
        options: ['Helium', 'Hydrogen', 'Lithium', 'Carbon'],
        correct: 1,
        explanation: 'Hydrogen has one proton, giving it atomic number 1'
      }
    ]
  },
  {
    id: 'motion-quiz',
    name: 'Motion Quiz',
    icon: '🏃',
    score: 'New Quiz!',
    color: 'from-yellow-300 to-yellow-400',
    subject: 'physics',
    topic: 'motion',
    questions: [
      {
        question: 'What is velocity?',
        options: ['Speed only', 'Displacement per unit time', 'Distance per unit time', 'Acceleration'],
        correct: 1,
        explanation: 'Velocity is displacement (change in position) per unit time'
      }
    ]
  },
  {
    id: 'grammar-quiz',
    name: 'Grammar Quiz',
    icon: '📝',
    score: 'Last Score: 95%',
    color: 'from-pink-300 to-pink-400',
    subject: 'english',
    topic: 'grammar',
    questions: [
      {
        question: 'What part of speech is the word "quickly"?',
        options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
        correct: 3,
        explanation: 'Adverbs describe verbs, adjectives, or other adverbs. "Quickly" describes how an action is done.'
      }
    ]
  }
];

export const allGames: Game[] = [
  {
    id: 'periodic-table-match',
    name: 'Periodic Table Match',
    icon: '⚛️',
    subject: 'chemistry',
    color: 'from-orange-300 to-orange-400',
    description: 'Match elements with their symbols',
    type: 'matching'
  },
  {
    id: 'cell-parts-quiz',
    name: 'Cell Parts Quiz',
    icon: '🧬',
    subject: 'biology',
    color: 'from-green-300 to-green-400',
    description: 'Identify cell organelles and their functions',
    type: 'quiz'
  },
  {
    id: 'volcano-memory',
    name: 'Volcano Memory Game',
    icon: '🌋',
    subject: 'geography',
    color: 'from-red-300 to-red-400',
    description: 'Match volcanic features and facts',
    type: 'memory'
  },
  {
    id: 'math-puzzle',
    name: 'Math Puzzle Challenge',
    icon: '🔢',
    subject: 'mathematics',
    color: 'from-blue-300 to-blue-400',
    description: 'Solve algebra and geometry puzzles',
    type: 'puzzle'
  },
  {
    id: 'dna-sequence',
    name: 'DNA Sequence Game',
    icon: '🧬',
    subject: 'biology',
    color: 'from-green-300 to-green-400',
    description: 'Build DNA sequences correctly',
    type: 'puzzle'
  },
  {
    id: 'map-explorer',
    name: 'Map Explorer',
    icon: '🗺️',
    subject: 'geography',
    color: 'from-emerald-300 to-emerald-400',
    description: 'Navigate and identify locations',
    type: 'quiz'
  },
  {
    id: 'equation-solver',
    name: 'Equation Solver',
    icon: '📊',
    subject: 'mathematics',
    color: 'from-blue-300 to-blue-400',
    description: 'Solve mathematical equations',
    type: 'puzzle'
  },
  {
    id: 'element-matching',
    name: 'Element Matching',
    icon: '⚛️',
    subject: 'chemistry',
    color: 'from-orange-300 to-orange-400',
    description: 'Match elements to their properties',
    type: 'matching'
  },
  {
    id: 'reaction-timer',
    name: 'Reaction Timer',
    icon: '⚗️',
    subject: 'chemistry',
    color: 'from-orange-300 to-orange-400',
    description: 'Balance chemical equations quickly',
    type: 'puzzle'
  },
  {
    id: 'grammar-catcher',
    name: 'Grammar Catcher',
    icon: '📝',
    subject: 'english',
    color: 'from-pink-300 to-pink-400',
    description: 'Catch grammar mistakes in sentences',
    type: 'quiz'
  },
  {
    id: 'binary-converter',
    name: 'Binary Converter',
    icon: '💻',
    subject: 'computer-science',
    color: 'from-indigo-300 to-indigo-400',
    description: 'Convert numbers to binary and back',
    type: 'puzzle'
  },
  {
    id: 'climate-challenge',
    name: 'Climate Challenge',
    icon: '🌤️',
    subject: 'environmental-science',
    color: 'from-teal-300 to-teal-400',
    description: 'Learn about climate change solutions',
    type: 'quiz'
  }
];
