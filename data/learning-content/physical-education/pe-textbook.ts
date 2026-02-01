import { LearningModule } from "../../../types";
import React from "react";

export const physicalEducationTextbookModules: LearningModule[] = [
    {
        chapter: "Unit I",
        title: "Planning in Sports",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Overview"),
            React.createElement("p", { className: "mb-4" }, "This unit covers the essential aspects of planning for sports events, including the formation of various committees (Technical, Finance, Marketing, Logistics) and their responsibilities."),
            React.createElement("p", { className: "mb-4" }, "It details different tournament types including Knock-Out, League (Round Robin), and Combination tournaments, along with procedures for drawing fixtures (Byes and Seeding)."),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Key Topics"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, "Objectives of Planning: Goal orientation, Economy, Efficiency."),
                React.createElement("li", null, "Tournament Formats: Knock-Out vs League."),
                React.createElement("li", null, "Intramural vs Extramural competitions.")
            )
        ),
        keyConcepts: [
            {
                title: "Planning",
                content: "The process of setting goals and defining the course of action to achieve them efficiently."
            },
            {
                title: "Knock-Out Tournament",
                content: "A format where a team is eliminated after a single defeat. Saves time but good teams might exit early."
            },
            {
                title: "League Tournament",
                content: "Each team plays every other team. True winner emerges but is time and cost intensive."
            },
            {
                title: "Bye",
                content: "A privilege tracking a team to skip the first round, given to adjust the number of teams to a power of 2."
            }
        ],
        keywords: [
            { term: "Fixture", definition: "The schedule of matches (who plays whom, when, and where)." },
            { term: "Seeding", definition: "Placing strong teams in the fixture to prevent them from meeting in early rounds." },
            { term: "Intramural", definition: "Competitions within the walls of an institution (e.g., Inter-house)." },
            { term: "Extramural", definition: "Competitions between different institutions (e.g., Inter-school)." }
        ],
        caseStudies: [
            {
                title: "Tournament Organization",
                scenario: "A school is organizing an inter-school basketball tournament. The sports committee needs to handle logistics, finance, and technical aspects. However, on the match day, there is confusion regarding the referees and scoresheets.",
                analysis: React.createElement("div", null,
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Key Issues:")),
                    React.createElement("ul", { className: "list-disc pl-5 mb-2" },
                        React.createElement("li", null, "Lack of coordination between Technical and Ground committees."),
                        React.createElement("li", null, "Pre-tournament planning failed to assign specific duties for match officials.")
                    ),
                    React.createElement("p", null, React.createElement("strong", null, "Solution:"), " The Organizing Committee must ensure the Technical Committee (responsible for officials/rules) is distinct from the Logistics Committee. A pre-tournament meeting with all heads is essential.")
                )
            },
            {
                title: "Fixture Dilemma",
                scenario: "A sports organizer needs to schedule a tournament for 25 teams. They want to ensure fair play but have limited time.",
                analysis: React.createElement(React.Fragment, null,
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Knock-out vs League:"), " Knock-out is faster but good teams might be eliminated early. League is fairer but time-consuming."),
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Recommendation:"), " A Knock-out tournament with seeding for top teams is best for limited time."),
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Fixture Calculation (Knock-out):"), " N=25. Next Power of 2 = 32. Byes = 32-25 = 7. Matches = N-1 = 24.")
                )
            },
            {
                title: "Organizing Committees Hierarchy",
                scenario: "The 'Khel Mahakumbh' is being organized. Detailed planning requires a hierarchy of committees for smooth conduct.",
                analysis: React.createElement(React.Fragment, null,
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Administrative Director:"), " Top-level management, ensuring funds and permissions."),
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Executive Committee:"), " Overall supervision of the event."),
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Organizing Committee:"), " Responsible for all technical aspects."),
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Sub-Committees:"), " Publicity, Boarding & Lodging, Reception, Transport, First Aid (specific roles).")
                )
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("h4", { className: "font-semibold mb-2" }, "Quick Revision: Planning"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
                React.createElement("li", null, React.createElement("strong", null, "Committee Roles:"), " Publicity (Pre-game), Transport (During), Finance (Post-game)."),
                React.createElement("li", null, React.createElement("strong", null, "Knock-out Formulae:"), " Matches = N-1. Rounds = Power of 2 (e.g., 2^n). Byes = 2^n - N."),
                React.createElement("li", null, React.createElement("strong", null, "League Formulae:"), " Single League Matches = N(N-1)/2. Cyclic Method used for fixtures.")
            )
        )
    },
    {
        chapter: "Unit II",
        title: "Sports and Nutrition",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Overview"),
            React.createElement("p", { className: "mb-4" }, "Explores the relationship between diet and sports performance, focusing on Balanced Diet, Macro (Carbs, Proteins, Fats) and Micro Nutrients (Vitamins, Minerals)."),
            React.createElement("p", { className: "mb-4" }, "Discusses weight management, the pitfalls of dieting, food intolerance, and common food myths that affect athletes.")
        ),
        keyConcepts: [
            {
                title: "Balanced Diet",
                content: "A diet containing all essential nutrients in correct proportions."
            },
            {
                title: "Macronutrients",
                content: "Nutrients needed in large amounts: Carbohydrates (Energy), Proteins (Building), Fats (Storage)."
            },
            {
                title: "Micronutrients",
                content: "Nutrients needed in trace amounts: Vitamins and Minerals (Regulatory functions)."
            },
            {
                title: "BMI (Body Mass Index)",
                content: "A measure of body fat based on height and weight. Formula: Weight(kg) / Height(m)²."
            }
        ],
        keywords: [
            { term: "Food Intolerance", definition: "Difficulty in digesting certain foods (e.g., Lactose intolerance)." },
            { term: "Food Myth", definition: "False beliefs about food (e.g., 'Potatoes make you fat')." },
            { term: "Nutritive Components", definition: "Provide energy/calories (Proteins, Carbs, Fats)." },
            { term: "Non-Nutritive Components", definition: "Do not provide energy but are essential (Water, Fiber/Roughage)." }
        ],
        caseStudies: [
            {
                title: "Diet for endurance",
                scenario: "Rohan is a long-distance runner. He often feels exhausted midway through his practice runs and suffers from frequent muscle cramps. His coach assesses his diet and finds it lacking in specific nutrients.",
                analysis: React.createElement("div", null,
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Nutritional Analysis:")),
                    React.createElement("ul", { className: "list-disc pl-5" },
                        React.createElement("li", null, React.createElement("b", null, "Exhaustion:"), " Likely due to low Carbohydrate intake (Glycogen depletion). Needs Carbo-loading."),
                        React.createElement("li", null, React.createElement("b", null, "Cramps:"), " Deficiency in Micro-nutrients (Electrolytes like Sodium/Potassium) and Hydration."),
                        React.createElement("li", null, React.createElement("b", null, "Recommendation:"), " Increase complex carbs (pasta, rice) and ensure fluid intake with electrolytes.")
                    )
                )
            }
        ],
        quickRevision: React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
            React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "⚡ Quick Revision: Nutrition"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-1 text-sm text-green-800" },
                React.createElement("li", null, React.createElement("b", null, "BMI Formula:"), " Weight (kg) / Height (m)²"),
                React.createElement("li", null, React.createElement("b", null, "Underweight:"), " < 18.5 | ", React.createElement("b", null, "Normal:"), " 18.5 - 24.9 | ", React.createElement("b", null, "Obese:"), " > 30"),
                React.createElement("li", null, React.createElement("b", null, "Macro Nutrients:"), " Carbs (4kcal/g), Proteins (4kcal/g), Fats (9kcal/g)."),
                React.createElement("li", null, React.createElement("b", null, "Vitamins:"), " Fat Soluble (A,D,E,K) vs Water Soluble (B,C).")
            )
        )
    },
    {
        chapter: "Unit III",
        title: "Yoga and Lifestyle",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Overview"),
            React.createElement("p", { className: "mb-4" }, "Focuses on gathering Yoga asanas as preventive measures for modern lifestyle diseases: Obesity, Diabetes, Asthma, Hypertension, and Back Pain."),
            React.createElement("p", { className: "mb-4" }, "It details specific Asanas (like Bhujangasana, Tadasana) with their procedures, benefits, and contraindications.")
        ),
        keyConcepts: [
            {
                title: "Asana",
                content: "A steady and comfortable posture ('Sthira Sukham Asanam')."
            },
            {
                title: "Obesity Prevention",
                content: "Asanas: Vajrasana, Hastasana, Trikonasana, Ardha Matsyendrasana."
            },
            {
                title: "Diabetes Management",
                content: "Asanas: Bhujangasana, Paschimottanasana, Pavan Muktasana."
            },
            {
                title: "Back Pain Relief",
                content: "Asanas: Tadasana, Vakrasana, Bhujangasana (Cobra Pose)."
            }
        ],
        keywords: [
            { term: "Contraindication", definition: "A condition where a specific asana should NOT be performed." },
            { term: "Pranayama", definition: "Control of breath." },
            { term: "Lifestyle Disease", definition: "Diseases linked to the way people live (sedentary, diet)." }
        ],
        caseStudies: [
            {
                title: "Management of Lifestyle Diseases",
                scenario: "Mr. Sharma (50 years old) suffers from Hypertension and Back Pain. He wants to start Yoga but is unsure which Asanas are safe and beneficial for him.",
                analysis: React.createElement("div", null,
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Recommended Protocol:")),
                    React.createElement("ul", { className: "list-disc pl-5 mb-2" },
                        React.createElement("li", null, React.createElement("b", null, "For Hypertension:"), " Tadasana, Vajrasana, Shavasana (Relaxative). Avoid inversions."),
                        React.createElement("li", null, React.createElement("b", null, "For Back Pain:"), " Vakrasana, Bhujangasana (Cobra pose), Shalabhasana."),
                        React.createElement("li", null, React.createElement("b", null, "Contraindications:"), " Since he has back pain, avoid deep forward bends (like Paschimottanasana) initially.")
                    )
                )
            },
            {
                title: "Asthma Management",
                scenario: "A student complains of frequent breathlessness and wheezing (Asthma). The PE teacher suggests regular practice of specific Pranayama and Asanas.",
                analysis: React.createElement("div", null,
                    React.createElement("p", { className: "mb-2" }, "Beneficial Practices:"),
                    React.createElement("ul", { className: "list-disc pl-5" },
                        React.createElement("li", null, React.createElement("b", null, "Matsyasana (Fish Pose):"), " Expands the chest cavity, improving lung capacity."),
                        React.createElement("li", null, React.createElement("b", null, "Anulom-Vilom:"), " Balances airflow and calms the respiratory system."),
                        React.createElement("li", null, React.createElement("b", null, "Gomukhasana:"), " Opens the chest.")
                    )
                )
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("h4", { className: "font-semibold mb-2" }, "Quick Revision: Yoga & Lifestyle"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
                React.createElement("li", null, React.createElement("strong", null, "Obesity:"), " Vajrasana (Diamond), Hastasana (Arms Up), Trikonasana (Triangle), Ardha Matsyendrasana."),
                React.createElement("li", null, React.createElement("strong", null, "Diabetes:"), " Bhujangasana (Cobra), Paschimottanasana (Forward Bend), Pavan Muktasana, Ardha Matsyendrasana."),
                React.createElement("li", null, React.createElement("strong", null, "Asthma:"), " Sukhasana, Chakrasana (Wheel), Gomukhasana (Cow Face), Parvatasana, Bhujangasana."),
                React.createElement("li", null, React.createElement("strong", null, "Hypertension:"), " Tadasana (Palm Tree), Katichakrasana, Uttanpadasana, Ardha Halasana, Shavasana."),
                React.createElement("li", null, React.createElement("strong", null, "Diagram Identification Cues:"), " Cobra pose (Bhujangasana) looks like a snake. Bow pose (Dhanurasana) looks like a bow. Tree pose (Vrikshasana) is balancing on one leg.")
            )
        )
    },
    {
        chapter: "Unit IV",
        title: "PE & Sports for CWSN",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Overview"),
            React.createElement("p", { className: "mb-4" }, "Addresses Physical Education for Children With Special Needs (Divyangjan). Distinguishes between Disability (impairment) and Disorder (functional disruption)."),
            React.createElement("p", { className: "mb-4" }, "Covers types of disabilities (Cognitive, Intellectual, Physical) and disorders (ADHD, SPD, ASD, ODD, OCD), emphasizing inclusion and adaptive strategies.")
        ),
        keyConcepts: [
            {
                title: "Disability vs Disorder",
                content: "Disability is a structural/functional impairment. Disorder is a disruption of normal functions (often mental/behavioral)."
            },
            {
                title: "ADHD",
                content: "Attention Deficit Hyperactivity Disorder (Issues with focus and impulse control)."
            },
            {
                title: "SPD",
                content: "Sensory Processing Disorder (Difficulty responding to sensory info)."
            },
            {
                title: "Adaptive Sports",
                content: "Modifying rules/equipment to make sports accessible for CWSN."
            }
        ],
        keywords: [
            { term: "Inclusion", definition: "Integrating CWSN into regular physical education settings." },
            { term: "ASD", definition: "Autism Spectrum Disorder." },
            { term: "ODD", definition: "Oppositional Defiant Disorder." }
        ],
        caseStudies: [
            {
                title: "Inclusive Sports Event",
                scenario: "A school wants to organize a sports day including students with various disabilities. They need to modify rules and equipment.",
                analysis: React.createElement(React.Fragment, null,
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Strategy 1 (Equipment):"), " Use tactile balls for visually impaired (auditory cues). Use ramps for wheelchair users."),
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Strategy 2 (Rules):"), " Reduce field size, allow 'buddies' or guides, simplify scoring."),
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Goal:"), " Increase participation and social integration, boosting self-esteem.")
                )
            },
            {
                title: "Strategies for Making Sports Inclusive",
                scenario: "A PE teacher observes that CWSN students feel isolated during regular PE classes. She introduces adaptive measures.",
                analysis: React.createElement(React.Fragment, null,
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Medical Check-up:"), " First step to understand limitations and capabilities."),
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Activity Modification:"), " Modifying rules, equipment, and environment (e.g., lower basketball hoops)."),
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Safety:"), " Ensuring the playing area is accessible and free of hazards.")
                )
            }
        ],
        quickRevision: React.createElement("div", { className: "bg-orange-50 p-4 rounded-lg" },
            React.createElement("h4", { className: "font-bold text-orange-900 mb-2" }, "⚡ Quick Revision: CWSN"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-1 text-sm text-orange-800" },
                React.createElement("li", null, React.createElement("b", null, "Disability vs Disorder:"), " Disability is typically physical/structural; Disorder is often mental/functional (ADHD, SPD)."),
                React.createElement("li", null, React.createElement("b", null, "Strategies:"), " Modified rules, specialized equipment, simplified instructions."),
                React.createElement("li", null, React.createElement("b", null, "Benefits:"), " Socialization, motor skills, self-esteem.")
            )
        )
    },
    {
        chapter: "Unit V",
        title: "Children and Women in Sports",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Overview"),
            React.createElement("p", { className: "mb-4" }, "Covers Motor Development in children (Gross vs Fine motor skills) and factors affecting it. It also addresses common postural deformities like Knock Knees and Flat Foot."),
            React.createElement("p", { className: "mb-4" }, "Discusses Women's participation in sports, identifying special considerations like Menarche, Menstrual dysfunction, and the Female Athlete Triad.")
        ),
        keyConcepts: [
            {
                title: "Motor Development",
                content: "Development of movement abilities. Gross (large muscles like running) vs Fine (small precision like writing)."
            },
            {
                title: "Postural Deformities",
                content: "Spinal: Kyphosis (Hunchback), Lordosis (Swayback), Scoliosis (C-curve). Leg: Knock Knees, Bow Legs, Flat Foot."
            },
            {
                title: "Female Athlete Triad",
                content: "A syndrome of three conditions: Osteoporosis, Amenorrhea, and Eating Disorders."
            },
            {
                title: "Menarche",
                content: "The first occurrence of menstruation."
            }
        ],
        keywords: [
            { term: "Amenorrhea", definition: "Absence of menstruation." },
            { term: "Osteoporosis", definition: "Weakening of bones." },
            { term: "Kyphosis", definition: "Exaggerated outward curvature of the thoracic region (Hunchback)." }
        ],
        caseStudies: [
            {
                title: "Postural Analysis",
                scenario: "During a health check-up, a student is observed to have a 'hunchback' while standing. Another student's knees touch each other while standing with feet apart.",
                analysis: React.createElement("div", null,
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Diagnosis & Correction:")),
                    React.createElement("ul", { className: "list-disc pl-5" },
                        React.createElement("li", null, React.createElement("b", null, "Hunchback (Kyphosis):"), " Weak back muscles. Corrective exercises: Bhujangasana, Dhanurasana (back bends)."),
                        React.createElement("li", null, React.createElement("b", null, "Knock Knees (Genu Valgum):"), " Knees touch. Cause: Weak ligaments/obesity. Correction: Horse riding (Padmasana), Pillow between knees.")
                    )
                )
            }
        ],
        quickRevision: React.createElement("div", { className: "bg-pink-50 p-4 rounded-lg" },
            React.createElement("h4", { className: "font-bold text-pink-900 mb-2" }, "⚡ Quick Revision: Women & Children"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-1 text-sm text-pink-800" },
                React.createElement("li", null, React.createElement("b", null, "Female Athlete Triad:"), " Osteoporosis (Bone loss) + Amenorrhea (Missed periods) + Eating Disorders (Anorexia/Bulimia)."),
                React.createElement("li", null, React.createElement("b", null, "Menarche:"), " Start of menstruation (delayed in intense sports)."),
                React.createElement("li", null, React.createElement("b", null, "Deformities:"), " Flat foot (no arch), Scoliosis (S-spine).")
            )
        )
    },
    {
        chapter: "Unit VI",
        title: "Test and Measurement in Sports",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Overview"),
            React.createElement("p", { className: "mb-4" }, "Details various fitness tests: Motor Fitness Test (AAPHER), General Motor Fitness (Barrow), and Cardiovascular Fitness (Harvard Step, Rockport)."),
            React.createElement("p", { className: "mb-4" }, "Includes the Rikli and Jones Senior Citizen Fitness Test protocol for assessing functional fitness in the elderly.")
        ),
        keyConcepts: [
            {
                title: "Motor Fitness Test",
                content: "50M Standing Start (Speed), 600M Run/Walk (Endurance), Sit & Reach (Flexibility)."
            },
            {
                title: "Harvard Step Test",
                content: "Measures cardiovascular endurance by stepping up/down a platform and checking pulse recovery."
            },
            {
                title: "Rikli & Jones Test",
                content: "Chair Stand (Strength), Arm Curl (Upper strength), Back Scratch (Flexibility) for seniors."
            },
            {
                title: "BMR",
                content: "Basal Metabolic Rate."
            }
        ],
        keywords: [
            { term: "Vital Capacity", definition: "Maximum air exhaled after max inhalation." },
            { term: "Vo2 Max", definition: "Maximum rate of oxygen consumption." }
        ],
        caseStudies: [
            {
                title: "Fitness Assessment (SAI)",
                scenario: "A PE teacher is conducting the SAI Khelo India Fitness Test for 15-year-old boys. Two key tests are the 50M Standing Start and the Partial Curl Up.",
                analysis: React.createElement("div", null,
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Test Protocol:")),
                    React.createElement("ul", { className: "list-disc pl-5" },
                        React.createElement("li", null, React.createElement("b", null, "50M Standing Start:"), " Measures Speed. Participant stands behind line, runs max speed on 'Go'. Time recorded to nearest 0.01 sec."),
                        React.createElement("li", null, React.createElement("b", null, "Partial Curl Up:"), " Measures Abdominal Strength. Knees bent, feet 12 inches from buttocks. Curl up sliding hands 6 inches forward. Count reps in 30s/1min.")
                    )
                )
            }
        ],
        quickRevision: React.createElement("div", { className: "bg-indigo-50 p-4 rounded-lg" },
            React.createElement("h4", { className: "font-bold text-indigo-900 mb-2" }, "⚡ Quick Revision: Testing"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-1 text-sm text-indigo-800" },
                React.createElement("li", null, React.createElement("b", null, "Rikli & Jones (Seniors):"), " Chair Stand (Lower Body Strength), Arm Curl (Upper Body), Back Scratch (Shoulder Flex)."),
                React.createElement("li", null, React.createElement("b", null, "Harvard Step:"), " Cardio test. Duration up to 5 mins. Pulse checked at 1, 2, 3 mins recovery."),
                React.createElement("li", null, React.createElement("b", null, "BMR:"), " Energy for basic functions. Men approx 1kcal/kg/hr.")
            )
        )
    },
    {
        chapter: "Unit VII",
        title: "Physiology and Injuries in Sports",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Overview"),
            React.createElement("p", { className: "mb-4" }, "Examines physiological factors determining fitness (strength, speed, endurance) and the effect of exercise on Muscular and Cardio-Respiratory systems."),
            React.createElement("p", { className: "mb-4" }, "Classifies Sports Injuries (Soft tissue vs Bone/Joint) and outlines First Aid (PRICER) and treatment.")
        ),
        keyConcepts: [
            {
                title: "Muscle Fibers",
                content: "Slow Twitch (Type I) for endurance (Red). Fast Twitch (Type II) for speed/explosive power (White)."
            },
            {
                title: "Soft Tissue Injuries",
                content: "Strain (Muscle), Sprain (Ligament), Contusion (Bruise), Abrasion, Laceration."
            },
            {
                title: "Bone & Joint Injuries",
                content: "Fracture (Greenstick, Comminuted), Dislocation."
            },
            {
                title: "Stroke Volume",
                content: "Amount of blood pumped by the heart per beat. Increases with training."
            }
        ],
        keywords: [
            { term: "Lactic Acid", definition: "Byproduct of anaerobic respiration causing fatigue." },
            { term: "Strain", definition: "Injury to Muscle or Tendon." },
            { term: "Sprain", definition: "Injury to Ligament." }
        ],
        caseStudies: [
            {
                title: "First Aid Management",
                scenario: "During a football match, a player twists his ankle and falls in pain. The area starts swelling immediately.",
                analysis: React.createElement("div", null,
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Immediate Management (PRICER):")),
                    React.createElement("ul", { className: "list-disc pl-5" },
                        React.createElement("li", null, React.createElement("b", null, "P - Protection:"), " Stop play, protect from further harm."),
                        React.createElement("li", null, React.createElement("b", null, "R - Rest:"), " Do not put weight on the injured limb."),
                        React.createElement("li", null, React.createElement("b", null, "I - Ice:"), " Apply ice pack (20 mins) to reduce swelling/pain."),
                        React.createElement("li", null, React.createElement("b", null, "C - Compression:"), " Crepe bandage to limit swelling."),
                        React.createElement("li", null, React.createElement("b", null, "E - Elevation:"), " Keep leg above heart level."),
                        React.createElement("li", null, React.createElement("b", null, "R - Rehabilitation:"), " Gradual return to activity.")
                    )
                )
            }
        ],
        quickRevision: React.createElement("div", { className: "bg-red-50 p-4 rounded-lg" },
            React.createElement("h4", { className: "font-bold text-red-900 mb-2" }, "⚡ Quick Revision: Physiology"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-1 text-sm text-red-800" },
                React.createElement("li", null, React.createElement("b", null, "Strength Factors:"), " Muscle cross-section area, Fiber type (Fast twitch = explosive)."),
                React.createElement("li", null, React.createElement("b", null, "Speed Factors:"), " CNS mobility, Explosive strength."),
                React.createElement("li", null, React.createElement("b", null, "Oxygen Uptake:"), " VO2 Max is genetic but improvable. Higher in elite athletes.")
            )
        )
    },
    {
        chapter: "Unit VIII",
        title: "Biomechanics and Sports",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Overview"),
            React.createElement("p", { className: "mb-4" }, "Applies laws of physics to human movement. Covers Newton's Laws of Motion and types of movements (Flexion, Extension, etc.)."),
            React.createElement("p", { className: "mb-4" }, "Discusses equilibrium, friction, and projectile motion in the context of improving sports performance.")
        ),
        keyConcepts: [
            {
                title: "Newton's Laws",
                content: "1. Inertia (Start/Stop). 2. Acceleration (F=ma). 3. Action-Reaction (Force application)."
            },
            {
                title: "Movements",
                content: "Flexion (Decreasing angle), Extension (Increasing angle), Abduction (Away from midline), Adduction (Towards midline)."
            },
            {
                title: "Friction",
                content: "Force opposing motion. Important for grip (shoes) vs sliding (skiing)."
            },
            {
                title: "Projectile",
                content: "Object thrown into space. Regulated by angle, speed, and height of release."
            }
        ],
        keywords: [
            { term: "Biomechanics", definition: "Study of mechanical laws acting on living structure." },
            { term: "Abduction", definition: "Moving a limb away from the body's midline." },
            { term: "Adduction", definition: "Moving a limb towards the body's midline." }
        ],
        caseStudies: [
            {
                title: "Levers in Sports",
                scenario: "Analysing the mechanics of different sports movements to optimize performance.",
                analysis: React.createElement("div", null,
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Lever Classes:")),
                    React.createElement("ul", { className: "list-disc pl-5" },
                        React.createElement("li", null, React.createElement("b", null, "Class I (Fulcrum in middle):"), " Nodding head, See-saw. (Rare in limbs)."),
                        React.createElement("li", null, React.createElement("b", null, "Class II (Load in middle):"), " Standing on tiptoes (Calf raise). Max Mechanical Advantage."),
                        React.createElement("li", null, React.createElement("b", null, "Class III (Effort in middle):"), " Bicep Curl, Kicking a ball. Most common in sports; favors speed/ROM over force.")
                    )
                )
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("h4", { className: "font-semibold mb-2" }, "Quick Revision: Biomechanics"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
                React.createElement("li", null, React.createElement("strong", null, "Newton's Laws:"), " 1st (Inertia - Starting a sprint), 2nd (Acceleration - F=ma in shotput), 3rd (Reaction - Jumping off ground)."),
                React.createElement("li", null, React.createElement("strong", null, "Levers:"), " Class 1 (Seesaw - Neck extension), Class 2 (Wheelbarrow - Calf raise), Class 3 (Fishing rod - Bicep curl)."),
                React.createElement("li", null, React.createElement("strong", null, "Friction:"), " Static vs Kinetic. Spikes increase friction for runners; smooth surfaces reduce it for ice skating.")
            )
        )
    },
    {
        chapter: "Unit IX",
        title: "Psychology and Sports",
        keyConcepts: [
            {
                title: "Personality Types (Sheldon)",
                content: "Endomorph (Round/Relaxed), Mesomorph (Muscular/Active), Ectomorph (Thin/Introverted)."
            },
            {
                title: "Big Five Theory",
                content: "OCEAN: Openness, Conscientiousness, Extroversion, Agreeableness, Neuroticism."
            },
            {
                title: "Motivation",
                content: "Intrinsic (Internal drive) vs Extrinsic (Rewards/Praise)."
            },
            {
                title: "Aggression",
                content: "Hostile (Intent to harm) vs Instrumental (Means to a goal) vs Assertive (Within rules)."
            }
        ],
        keywords: [
            { term: "Exercise Adherence", definition: "Sticking to an exercise program." },
            { term: "Self-Talk", definition: "Internal dialogue used for motivation." },
            { term: "Goal Setting", definition: "Process of identifying what to achieve." }
        ],
        caseStudies: [
            {
                title: "Personality Profiling",
                scenario: "A coach observes that one athlete is aggressive and outgoing, while another is shy but highly focused on technique. He uses the Big Five theory to understand them better.",
                analysis: React.createElement("div", null,
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Big Five Traits (OCEAN):")),
                    React.createElement("ul", { className: "list-disc pl-5" },
                        React.createElement("li", null, React.createElement("b", null, "O - Openness:"), " Willingness to try new training methods."),
                        React.createElement("li", null, React.createElement("b", null, "C - Conscientiousness:"), " Discipline, organized (Key for elite athletes)."),
                        React.createElement("li", null, React.createElement("b", null, "E - Extroversion:"), " Sociable, energetic (Team sports)."),
                        React.createElement("li", null, React.createElement("b", null, "A - Agreeableness:"), " Cooperative (Team cohesion)."),
                        React.createElement("li", null, React.createElement("b", null, "N - Neuroticism:"), " Emotional instability (Needs anxiety management).")
                    )
                )
            }
        ],
        quickRevision: React.createElement("div", { className: "bg-yellow-50 p-4 rounded-lg" },
            React.createElement("h4", { className: "font-bold text-yellow-900 mb-2" }, "⚡ Quick Revision: Psychology"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-1 text-sm text-yellow-800" },
                React.createElement("li", null, React.createElement("b", null, "Intrinsic Motivation:"), " Joy of playing (Long-lasting)."),
                React.createElement("li", null, React.createElement("b", null, "Extrinsic Motivation:"), " Trophies, Money (Short-term)."),
                React.createElement("li", null, React.createElement("b", null, "Aggression:"), " Instrumental aggression is often necessary in contact sports (Tackling in rugby).")
            )
        )
    },
    {
        chapter: "Unit X",
        title: "Sports Training",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Overview"),
            React.createElement("p", { className: "mb-4" }, "The final unit covers scientific principles of training to develop Strength, Endurance, Speed, Flexibility, and Coordinative Abilities."),
            React.createElement("p", { className: "mb-4" }, "Explains methods like Interval Training, Fartlek, Circuit Training, and types of muscle contractions (Isometric, Isotonic).")
        ),
        keyConcepts: [
            {
                title: "Training Methods",
                content: "Continuous (Endurance), Interval (Speed/Endurance), Fartlek ('Speed play')."
            },
            {
                title: "Strength Types",
                content: "Isometric (Static length), Isotonic (Movement), Isokinetic (Constant speed)."
            },
            {
                title: "Circuit Training",
                content: "Series of exercises performed in a loop to improve general fitness."
            },
            {
                title: "Coordinative Abilities",
                content: "Orientation, Differentiation, Coupling, Reaction, Balance, Rhythm, Adaptation."
            }
        ],
        keywords: [
            { term: "Fartlek", definition: "Swedish term for 'Speed Play'; varies speed/terrain." },
            { term: "Isometric", definition: "Muscle tenses but length doesn't change (e.g., Pushing a wall)." },
            { term: "Isotonic", definition: "Muscle length changes (concentric/eccentric)." }
        ],
        caseStudies: [
            {
                title: "Circuit Training Design",
                scenario: "A coach wants to design a Circuit Training session for general fitness improvement with 6 stations.",
                analysis: React.createElement("div", null,
                    React.createElement("p", { className: "mb-2" }, React.createElement("strong", null, "Sample Circuit (6 Stations):")),
                    React.createElement("ol", { className: "list-decimal pl-5 mb-2" },
                        React.createElement("li", null, "Skipping (Whole body/Cardio)"),
                        React.createElement("li", null, "Push-ups (Upper body)"),
                        React.createElement("li", null, "Shuttle Run (Speed/Agility)"),
                        React.createElement("li", null, "Squats (Lower body)"),
                        React.createElement("li", null, "Medicine Ball Toss (Explosive power)"),
                        React.createElement("li", null, "Plank (Core)")
                    ),
                    React.createElement("p", null, React.createElement("b", null, "Method:"), " 30s work, 15s rest. Repeat loop 3 times. Increases strength and endurance simultaneously.")
                )
            }
        ],
        quickRevision: React.createElement("div", { className: "bg-teal-50 p-4 rounded-lg" },
            React.createElement("h4", { className: "font-bold text-teal-900 mb-2" }, "⚡ Quick Revision: Training"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-1 text-sm text-teal-800" },
                React.createElement("li", null, React.createElement("b", null, "Fartlek:"), " Self-disciplined 'Speed Play'. Good for psychological freshness."),
                React.createElement("li", null, React.createElement("b", null, "Interval:"), " High intensity with Incomplete Recovery (HR 180 -> 120)."),
                React.createElement("li", null, React.createElement("b", null, "Isotonic:"), " Weights (dynamic). | ", React.createElement("b", null, "Isometric:"), " Static holds. | ", React.createElement("b", null, "Isokinetic:"), " Machines.")
            )
        )
    }
];
