const symptoms = [
  { id: 0, name: "" },
  { id: 1, name: "abdominal bloating" },
  { id: 2, name: "abdominal cramps" },
  { id: 3, name: "abdominal pain" },
  { id: 4, name: "abdominal pain in children" },
  { id: 5, name: "abnormal bleeding" },
  { id: 6, name: "acid reflux" },
  { id: 7, name: "acne" },
  { id: 8, name: "adrenal disorders" },
  { id: 9, name: "agitation" },
  { id: 10, name: "amenorrhea" },
  { id: 11, name: "anemia" },
  { id: 12, name: "anxiety" },
  { id: 13, name: "apathy" },
  { id: 14, name: "arthritis" },
  { id: 15, name: "asthma" },
  { id: 16, name: "autoimmune disorders" },
  { id: 17, name: "back pain" },
  { id: 18, name: "bad breath" },
  { id: 19, name: "balance problems" },
  { id: 20, name: "Bartholin cysts" },
  { id: 21, name: "bedwetting" },
  { id: 22, name: "behavioral problems in children" },
  { id: 23, name: "bipolar disorder" },
  { id: 24, name: "black or tarry stool" },
  { id: 25, name: "blackouts" },
  { id: 26, name: "bladder pain" },
  { id: 27, name: "blistering" },
  { id: 28, name: "bloating" },
  { id: 29, name: "blood in stool" },
  { id: 30, name: "blood in stool or urine" },
  { id: 31, name: "blood in stools in children" },
  { id: 32, name: "blood in urine" },
  { id: 33, name: "bluish lips or face" },
  { id: 34, name: "bluish skin" },
  { id: 35, name: "blurred vision" },
  { id: 36, name: "bone pain" },
  { id: 37, name: "breast pain" },
  { id: 38, name: "breathing problems in children" },
  { id: 39, name: "brittle nails" },
  { id: 40, name: "bulging eyes" },
  { id: 41, name: "bumps on the skin" },
  { id: 42, name: "burning eyes" },
  { id: 43, name: "cataracts" },
  { id: 44, name: "cervical polyps" },
  { id: 45, name: "changes in bowel habits" },
  { id: 46, name: "changes in libido" },
  { id: 47, name: "chest congestion" },
  { id: 48, name: "chest discomfort" },
  { id: 49, name: "chest pain when breathing" },
  { id: 50, name: "chest pressure" },
  { id: 51, name: "chest tightness" },
  { id: 52, name: "chills" },
  { id: 53, name: "chronic bronchitis symptoms" },
  { id: 54, name: "chronic coughing" },
  { id: 55, name: "chronic fatigue" },
  { id: 56, name: "chronic pain" },
  { id: 57, name: "clammy hands" },
  { id: 58, name: "clicking or popping in joints" },
  { id: 59, name: "cloudy or strong-smelling urine" },
  { id: 60, name: "cognitive impairment" },
  { id: 61, name: "cold intolerance" },
  { id: 62, name: "colic in infants" },
  { id: 63, name: "color vision problems" },
  { id: 64, name: "compulsions" },
  { id: 65, name: "concentration difficulties" },
  { id: 66, name: "confusion" },
  { id: 67, name: "constipation" },
  { id: 68, name: "constipation in children" },
  { id: 69, name: "coordination problems" },
  { id: 70, name: "cough" },
  { id: 71, name: "coughing up blood" },
  { id: 72, name: "crossed eyes" },
  { id: 73, name: "dark spots in vision" },
  { id: 74, name: "decreased libido" },
  { id: 75, name: "delusions" },
  { id: 76, name: "depression" },
  { id: 77, name: "developmental delay" },
  { id: 78, name: "diabetes" },
  { id: 79, name: "diarrhea" },
  { id: 80, name: "diarrhea in children" },
  { id: 81, name: "difficulty bending" },
  { id: 82, name: "difficulty breathing" },
  { id: 83, name: "difficulty carrying objects" },
  { id: 84, name: "difficulty climbing stairs" },
  { id: 85, name: "difficulty concentrating" },
  { id: 86, name: "difficulty focusing" },
  { id: 87, name: "difficulty gripping objects" },
  { id: 88, name: "difficulty in digesting certain foods" },
  { id: 89, name: "difficulty lifting" },
  { id: 90, name: "difficulty speaking" },
  { id: 91, name: "difficulty standing" },
  { id: 92, name: "difficulty straightening" },
  { id: 93, name: "difficulty swallowing" },
  { id: 94, name: "difficulty swallowing in children" },
  { id: 95, name: "difficulty urinating" },
  { id: 96, name: "difficulty using hands" },
  { id: 97, name: "difficulty walking" },
  { id: 98, name: "difficulty walking upstairs" },
  { id: 99, name: "digestive problems" },
  { id: 100, name: "disorganized thinking" },
  { id: 101, name: "disorientation" },
  { id: 102, name: "dizziness" },
  { id: 103, name: "double vision" },
  { id: 104, name: "dribbling at the end of urination" },
  { id: 105, name: "droopy eyelids" },
  { id: 106, name: "dry eyes" },
  { id: 107, name: "dry mouth" },
  { id: 108, name: "dry skin" },
  { id: 109, name: "dry throat" },
  { id: 110, name: "ear discharge" },
  { id: 111, name: "ear fullness" },
  { id: 112, name: "ear itching" },
  { id: 113, name: "ear pain" },
  { id: 114, name: "eating disorders" },
  { id: 115, name: "eczema" },
  { id: 116, name: "endometriosis symptoms" },
  { id: 117, name: "enlarged prostate symptoms" },
  { id: 118, name: "erectile dysfunction" },
  { id: 119, name: "excessive gas" },
  { id: 120, name: "excessive hunger" },
  { id: 121, name: "excessive sweating" },
  { id: 122, name: "excessive tearing" },
  { id: 123, name: "excessive thirst" },
  { id: 124, name: "exhaustion" },
  { id: 125, name: "eye discharge" },
  { id: 126, name: "eye fatigue" },
  { id: 127, name: "eye floaters" },
  { id: 128, name: "eye pain" },
  { id: 129, name: "eye problems" },
  { id: 130, name: "eye redness" },
  { id: 131, name: "eye strain" },
  { id: 132, name: "eye twitching" },
  { id: 133, name: "facial pain" },
  { id: 134, name: "fainting" },
  { id: 135, name: "fatigue" },
  { id: 136, name: "fatigue in children" },
  { id: 137, name: "feeling full quickly" },
  { id: 138, name: "fertility issues" },
  { id: 139, name: "fever" },
  { id: 140, name: "fibromyalgia" },
  { id: 141, name: "fluttering in chest" },
  { id: 142, name: "foul-smelling stools" },
  { id: 143, name: "fractures" },
  { id: 144, name: "frequent belching" },
  { id: 145, name: "frequent heartburn" },
  { id: 146, name: "frequent infections" },
  { id: 147, name: "frequent urination" },
  { id: 148, name: "gastritis symptoms" },
  { id: 149, name: "genital pain" },
  { id: 150, name: "genital sores" },
  { id: 151, name: "genital warts" },
  { id: 152, name: "goiter" },
  { id: 153, name: "gritty sensation in eyes" },
  { id: 154, name: "hair loss" },
  { id: 155, name: "hallucinations" },
  { id: 156, name: "halo around lights" },
  { id: 157, name: "headache" },
  { id: 158, name: "headaches" },
  { id: 159, name: " hearing loss" },
  { id: 160, name: "heart palpitations" },
  { id: 161, name: "heart problems" },
  { id: 162, name: "heartburn" },
  { id: 163, name: "heat intolerance" },
  { id: 164, name: "heavy feeling in chest" },
  { id: 165, name: "heavy menstrual bleeding" },
  { id: 166, name: " high blood pressure" },
  { id: 167, name: "hives" },
  { id: 168, name: "hoarseness" },
  { id: 169, name: "hormonal imbalance" },
  { id: 170, name: "hyperactivity" },
  { id: 171, name: "incontinence" },
  { id: 172, name: "indigestion" },
  { id: 173, name: "infertility" },
  { id: 174, name: "insomnia" },
  { id: 175, name: " instability in joints" },
  { id: 176, name: "irregular heartbeat" },
  { id: 177, name: "irregular menstruation" },
  { id: 178, name: "irritability" },
  { id: 179, name: "itching" },
  { id: 180, name: "itchy ears" },
  { id: 181, name: "itchy eyes" },
  { id: 182, name: "itchy throat" },
  { id: 183, name: " jaundice" },
  { id: 184, name: "joint deformity" },
  { id: 185, name: "joint pain" },
  { id: 186, name: "joint stiffness" },
  { id: 187, name: "joint swelling" },
  { id: 188, name: "joint tenderness" },
  { id: 189, name: "kidney infection symptoms" },
  { id: 190, name: "kidney problems" },
  { id: 191, name: " kidney stones" },
  { id: 192, name: "light sensitivity" },
  { id: 193, name: "lightheadedness" },
  { id: 194, name: "limited range of motion" },
  { id: 195, name: "loss of appetite" },
  { id: 196, name: "loss of smell" },
  { id: 197, name: "low self-esteem" },
  { id: 198, name: "lumps" },
  { id: 199, name: "lupus" },
  { id: 200, name: "memory loss" },
  { id: 201, name: "memory problems" },
  { id: 202, name: "menopause symptoms" },
  { id: 203, name: "menstrual cramps" },
  { id: 204, name: "moles" },
  { id: 205, name: "mood swings" },
  { id: 206, name: "morning stiffness" },
  { id: 207, name: "mouth ulcers in children" },
  { id: 208, name: "  muscle aches" },
  { id: 209, name: "muscle cramps" },
  { id: 210, name: "muscle spasms" },
  { id: 211, name: "muscle strains" },
  { id: 212, name: "muscle weakness" },
  { id: 213, name: "nasal congestion" },
  { id: 214, name: "nasal drainage" },
  { id: 215, name: "nausea" },
  { id: 216, name: "nervousness" },
  { id: 217, name: " night blindness" },
  { id: 218, name: "night sweats" },
  { id: 219, name: "nosebleeds" },
  { id: 220, name: "numbness" },
  { id: 221, name: "numbness in hands or feet" },
  { id: 222, name: "numbness in limbs" },
  { id: 223, name: "obesity" },
  { id: 224, name: "obsessions" },
  { id: 225, name: "osteoporosis" },
  { id: 226, name: " ovarian cysts" },
  { id: 227, name: "pain during intercourse" },
  { id: 228, name: "pain or discomfort in the chest area" },
  { id: 229, name: "painful ejaculation" },
  { id: 230, name: "painful intercourse" },
  { id: 231, name: "painful ovulation" },
  { id: 232, name: " painful periods" },
  { id: 233, name: "painful urination" },
  { id: 234, name: "palpitations" },
  { id: 235, name: "panic attacks" },
  { id: 236, name: "paralysis" },
  { id: 237, name: "pelvic inflammatory disease (PID)" },
  { id: 238, name: "pelvic pain" },
  { id: 239, name: "  persistent bloating" },
  { id: 240, name: "persistent cough" },
  { id: 241, name: "persistent gas" },
  { id: 242, name: "persistent headaches" },
  { id: 243, name: "persistent infections" },
  { id: 244, name: "personality changes" },
  { id: 245, name: "phobias" },
  { id: 246, name: "   polycystic ovary syndrome (PCOS)" },
  { id: 247, name: "poor feeding" },
  { id: 248, name: "poor weight gain" },
  { id: 249, name: "postnasal drip" },
  { id: 250, name: "pregnancy" },
  { id: 251, name: "premenstrual syndrome (PMS)" },
  { id: 252, name: "psoriasis" },
  { id: 253, name: " PTSD symptoms" },
  { id: 254, name: "racing heartbeat" },
  { id: 255, name: "rapid breathing" },
  { id: 256, name: "rapid heartbeat" },
  { id: 257, name: "rash in children" },
  { id: 258, name: "rash with fever" },
  { id: 259, name: "Raynaud phenomenon" },
  { id: 260, name: "rectal bleeding" },
  { id: 261, name: " red eyelids" },
  { id: 262, name: "redness" },
  { id: 263, name: "redness around joints" },
  { id: 264, name: "respiratory infections" },
  { id: 265, name: "ringing in ears" },
  { id: 266, name: "runny nose" },
  { id: 267, name: "scaly skin" },
  { id: 268, name: "seizures" },
  { id: 269, name: "self-harm" },
  { id: 270, name: "  sensitivity to light" },

  { id: 271, name: "sensitivity to noise" },
  { id: 272, name: "shortness of breath" },
  { id: 273, name: "shortness of breath with activity" },
  { id: 274, name: "shoulder pain" },
  { id: 275, name: "sinus congestion" },
  { id: 276, name: "  sinus headaches" },
  { id: 277, name: "sinus pressure" },
  { id: 278, name: "skin blisters" },
  { id: 279, name: "skin bruising" },
  { id: 280, name: "skin changes" },
  { id: 281, name: "skin cracking" },
  { id: 282, name: "skin cysts" },
  { id: 283, name: "skin discoloration" },
  { id: 284, name: "skin dryness" },
  { id: 285, name: "skin flushing" },
  { id: 286, name: "skin infection" },
  { id: 287, name: "skin inflammation" },
  { id: 288, name: "skin irritation" },
  { id: 289, name: "skin lesions" },
  { id: 290, name: "skin peeling" },
  { id: 291, name: "skin rashes" },
  { id: 292, name: "skin rashes in children" },
  { id: 293, name: "skin sensitivity" },
  { id: 294, name: "skin swelling" },
  { id: 295, name: "skin tenderness" },
  { id: 296, name: "skin thickening" },
  { id: 297, name: "sleep disturbances" },
  { id: 298, name: "sleep problems" },
  { id: 299, name: "slurred speech" },
  { id: 300, name: "snoring" },
  { id: 301, name: "  social withdrawal" },
  { id: 302, name: "sore throat" },
  { id: 303, name: "sputum production" },
  { id: 304, name: "squinting" },
  { id: 305, name: "stiffness" },
  { id: 306, name: "stomach ache" },
  { id: 307, name: "stomach ulcers" },
  { id: 308, name: "substance abuse" },
  { id: 309, name: " suicidal behavior" },
  { id: 310, name: "suicidal thoughts" },
  { id: 311, name: "sweating" },
  { id: 312, name: "swelling" },
  { id: 313, name: "swelling around a joint" },
  { id: 314, name: "swelling in limbs" },
  { id: 315, name: "swollen abdomen" },
  { id: 316, name: "swollen ankles" },
  { id: 317, name: "swollen glands" },
  { id: 318, name: "swollen labia" },
  { id: 319, name: "swollen lymph nodes" },
  { id: 320, name: "teething problems" },
  { id: 321, name: "testicular lumps" },
  { id: 322, name: "testicular pain" },
  { id: 323, name: "therapy" },
  { id: 324, name: "throat clearing" },
  { id: 325, name: "thyroid issues" },
  { id: 326, name: "tightness in chest" },
  { id: 327, name: "tingling sensations" },
  { id: 328, name: "tired eyes" },
  { id: 329, name: "tonsil inflammation" },
  { id: 330, name: "tremors" },
  { id: 331, name: "trouble swallowing food" },
  { id: 332, name: "unexplained bruising" },
  { id: 333, name: "unexplained weight loss" },
  { id: 334, name: "urethral discharge" },
  { id: 335, name: "urethral itching" },
  { id: 336, name: "urinary frequency" },
  { id: 337, name: "urinary hesitancy" },
  { id: 338, name: "  urinary incontinence" },
  { id: 339, name: "urinary incontinence at night" },
  { id: 340, name: "urinary leakage" },
  { id: 341, name: "urinary retention" },
  { id: 342, name: "urinary tract infection" },
  { id: 343, name: "urinary tract infections (UTIs)" },
  { id: 344, name: "urinary tract obstruction" },
  { id: 345, name: "urinary urgency" },
  { id: 346, name: "uterine fibroids" },
  { id: 347, name: "vaccinations" },
  { id: 348, name: "vaginal discharge" },
  { id: 349, name: "vaginal itching or irritation" },
  { id: 350, name: "vertigo" },
  { id: 351, name: "vision loss" },
  { id: 352, name: "vision problems" },
  { id: 353, name: "voice changes" },
  { id: 354, name: "vomiting" },
  { id: 355, name: "vomiting blood" },
  { id: 356, name: "vulvodynia" },
  { id: 357, name: "watery eyes" },
  { id: 358, name: "weak pulse" },
  { id: 359, name: "weakness" },
  { id: 360, name: "weight gain" },
  { id: 361, name: "weight loss" },
  { id: 362, name: "wheezing" },
  { id: 363, name: "yeast infections" },
];

 export default symptoms


