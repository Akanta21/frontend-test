const subjects = {
    data: {
        level: [
            "pri1",
            "pri2",
            "pri3",
            "pri4",
            "pri5",
            "pri6",
            "sec1",
            "sec2",
            "sec3",
            "sec4",
            "sec5",
            "jc1",
            "jc2",
            "ib1",
            "ib2",
            "ib3",
            "poly1",
            "poly2",
            "poly3"
        ],
        levelSubject: {
            pri1: [
                "english",
                "literature_english",
                "math",
                "social_studies",
                "history",
                "geography"
            ],
            pri2: [
                "english",
                "literature_english",
                "math",
                "social_studies",
                "history",
                "geography"
            ],
            pri3: [
                "english",
                "literature_english",
                "math",
                "social_studies",
                "history",
                "geography"
            ],
            pri4: [
                "english",
                "literature_english",
                "math",
                "social_studies",
                "history",
                "geography"
            ],
            pri5: [
                "english",
                "literature_english",
                "math",
                "social_studies",
                "history",
                "geography"
            ],
            pri6: [
                "english",
                "literature_english",
                "math",
                "social_studies",
                "history",
                "geography"
            ],
            sec1: [
                "english",
                "literature_english",
                "e_math",
                "physics",
                "biology",
                "chemistry",
                "history",
                "geography"
            ],
            sec2: [
                "english",
                "literature_english",
                "e_math",
                "physics",
                "biology",
                "chemistry",
                "history",
                "geography"
            ],
            sec3: [
                "english",
                "literature_english",
                "e_math",
                "a_math",
                "physics",
                "biology",
                "chemistry",
                "science_pc",
                "science_pb",
                "cscience_bc",
                "social_studies",
                "history",
                "geography"
            ],
            sec4: [
                "english",
                "literature_english",
                "e_math",
                "a_math",
                "physics",
                "biology",
                "chemistry",
                "science_pc",
                "science_pb",
                "cscience_bc",
                "social_studies",
                "history",
                "geography"
            ],
            sec5: [
                "english",
                "literature_english",
                "e_math",
                "a_math",
                "physics",
                "biology",
                "chemistry",
                "science_pc",
                "science_pb",
                "cscience_bc",
                "social_studies",
                "history",
                "geography"
            ],
            jc1: [
                "h1_math",
                "h2_f_math",
                "h1_physics",
                "h1_biology",
                "h1_chemistry",
                "h2_physics",
                "h2_biology",
                "h2_chemistry",
                "h1_history",
                "h1_geography",
                "h1_china_studies",
                "h1_economics",
                "h2_economics",
                "h1_management_of_business",
                "h2_management_of_business",
                "h1_principles_of_ccounting",
                "h2_principles_of_ccounting"
            ],
            jc2: [
                "h1_math",
                "h2_f_math",
                "h1_physics",
                "h1_biology",
                "h1_chemistry",
                "h2_physics",
                "h2_biology",
                "h2_chemistry",
                "h1_history",
                "h1_geography",
                "h1_china_studies",
                "h1_economics",
                "h2_economics",
                "h1_management_of_business",
                "h2_management_of_business",
                "h1_principles_of_ccounting",
                "h2_principles_of_ccounting"
            ],
            ib1: [
                "english",
                "literature_english",
                "math",
                "physics",
                "biology",
                "chemistry",
                "history",
                "geography"
            ],
            ib2: [
                "english",
                "literature_english",
                "math",
                "physics",
                "biology",
                "chemistry",
                "history",
                "geography"
            ],
            ib3: [
                "english",
                "literature_english",
                "math",
                "physics",
                "biology",
                "chemistry",
                "history",
                "geography"
            ]
        },
        levelSection: {
            pri: [
                null,
                null,
                null,
                null,
                null,
                null
            ],
            lower_sec: [
                null,
                null
            ],
            upper_sec: [
                null,
                null,
                null
            ],
            jc_grade: [
                null,
                null
            ],
            ib_grade: [
                null,
                null,
                null
            ]
        },
        subjectSection: [
            "language",
            "math",
            "science",
            "humanities",
            "other"
        ],
        subject: {
            math: {
                name: "Mathematics",
                group: "math",
                in: [
                    "pri",
                    "ib_grade"
                ]
            },
            e_math: {
                name: "Elementary Mathematics",
                group: "math",
                in: [
                    "lower_sec",
                    "upper_sec"
                ]
            },
            a_math: {
                name: "Additional Mathematics",
                group: "math",
                in: [
                    "upper_sec"
                ]
            },
            h1_math: {
                name: "H1 Mathematics",
                group: "math",
                in: [
                    "jc_grade"
                ]
            },
            h2_f_math: {
                name: "H2 Further Mathematics",
                group: "math",
                in: [
                    "jc_grade"
                ]
            },
            social_studies: {
                name: "Social Studies",
                group: "humanities",
                in: [
                    "pri",
                    "upper_sec"
                ]
            },
            history: {
                name: "History",
                group: "humanities",
                in: [
                    "pri",
                    "lower_sec",
                    "upper_sec",
                    "ib_grade"
                ]
            },
            geography: {
                name: "Geography",
                group: "humanities",
                in: [
                    "pri",
                    "lower_sec",
                    "upper_sec",
                    "ib_grade"
                ]
            },
            h1_history: {
                name: "H1 History",
                group: "humanities",
                in: [
                    "jc_grade"
                ]
            },
            h1_geography: {
                name: "H1 Geography",
                group: "humanities",
                in: [
                    "jc_grade"
                ]
            },
            h1_china_studies: {
                name: "H1 China Studies",
                group: "humanities",
                in: [
                    "jc_grade"
                ]
            },
            foundation_science: {
                name: "Foundation Science",
                group: "science"
            },
            physics: {
                name: "Physics",
                group: "science",
                in: [
                    "lower_sec",
                    "upper_sec",
                    "ib_grade"
                ]
            },
            biology: {
                name: "Biology",
                group: "science",
                in: [
                    "lower_sec",
                    "upper_sec",
                    "ib_grade"
                ]
            },
            chemistry: {
                name: "Chemistry",
                group: "science",
                in: [
                    "lower_sec",
                    "upper_sec",
                    "ib_grade"
                ]
            },
            h1_physics: {
                name: "H1 Physics",
                group: "science",
                in: [
                    "jc_grade"
                ]
            },
            h1_biology: {
                name: "H1 Biology",
                group: "science",
                in: [
                    "jc_grade"
                ]
            },
            h1_chemistry: {
                name: "H1 Chemistry",
                group: "science",
                in: [
                    "jc_grade"
                ]
            },
            h2_physics: {
                name: "H2 Physics",
                group: "science",
                in: [
                    "jc_grade"
                ]
            },
            h2_biology: {
                name: "H2 Biology",
                group: "science",
                in: [
                    "jc_grade"
                ]
            },
            h2_chemistry: {
                name: "H2 Chemistry",
                group: "science",
                in: [
                    "jc_grade"
                ]
            },
            science_pc: {
                name: "Science (P/C)",
                group: "science",
                in: [
                    "upper_sec"
                ]
            },
            science_pb: {
                name: "Science (P/B)",
                group: "science",
                in: [
                    "upper_sec"
                ]
            },
            cscience_bc: {
                name: "Science (B/C)",
                group: "science",
                in: [
                    "upper_sec"
                ]
            },
            english: {
                name: "English",
                group: "language",
                in: [
                    "pri",
                    "lower_sec",
                    "upper_sec",
                    "ib_grade"
                ]
            },
            literature_english: {
                name: "English Literature",
                group: "language",
                in: [
                    "pri",
                    "lower_sec",
                    "upper_sec",
                    "ib_grade"
                ]
            },
            chinese: {
                name: "Chinese",
                group: "language",
                tag: [
                    "chinese",
                    "mother tongue"
                ]
            },
            tamil: {
                name: "Tamil",
                group: "language",
                tag: [
                    "tamil",
                    "mother tongue"
                ],
                options: [
                    "is_higher"
                ]
            },
            malay: {
                name: "Malay",
                group: "language",
                tag: [
                    "malay",
                    "mother tongue"
                ],
                options: [
                    "is_higher"
                ]
            },
            hindi: {
                name: "Hindi",
                group: "language",
                tag: [
                    "hindi",
                    "mother tongue"
                ],
                options: [
                    "is_higher"
                ]
            },
            panjabi: {
                name: "Panjabi",
                group: "language",
                tag: [
                    "panjabi",
                    "mother tongue"
                ],
                options: [
                    "is_higher"
                ]
            },
            gujarati: {
                name: "Gujarati",
                group: "language",
                tag: [
                    "gujarati",
                    "mother tongue"
                ],
                options: [
                    "is_higher"
                ]
            },
            bengali: {
                name: "Bengali",
                group: "language",
                tag: [
                    "bengali",
                    "mother tongue"
                ],
                options: [
                    "is_higher"
                ]
            },
            urdu: {
                name: "Urdu",
                group: "language",
                tag: [
                    "urdu",
                    "mother tongue"
                ],
                options: [
                    "is_higher"
                ]
            },
            higher_chinese: {
                name: "Higher Chinese",
                group: "language",
                tag: [
                    "chinese",
                    "mother tongue",
                    "higher mother tongue"
                ]
            },
            higher_tamil: {
                name: "Higher Tamil",
                group: "language",
                tag: [
                    "tamil",
                    "mother tongue",
                    "higher mother tongue"
                ],
                options: [
                    "is_higher"
                ]
            },
            higher_malay: {
                name: "Higher Malay",
                group: "language",
                tag: [
                    "malay",
                    "mother tongue",
                    "higher mother tongue"
                ],
                options: [
                    "is_higher"
                ]
            },
            higher_hindi: {
                name: "Higher Hindi",
                group: "language",
                tag: [
                    "hindi",
                    "mother tongue",
                    "higher mother tongue"
                ],
                options: [
                    "is_higher"
                ]
            },
            higher_panjabi: {
                name: "Higher Panjabi",
                group: "language",
                tag: [
                    "panjabi",
                    "mother tongue",
                    "higher mother tongue"
                ],
                options: [
                    "is_higher"
                ]
            },
            higher_gujarati: {
                name: "Higher Gujarati",
                group: "language",
                tag: [
                    "gujarati",
                    "mother tongue",
                    "higher mother tongue"
                ],
                options: [
                    "is_higher"
                ]
            },
            higher_bengali: {
                name: "Higher Bengali",
                group: "language",
                tag: [
                    "bengali",
                    "mother tongue",
                    "higher mother tongue"
                ],
                options: [
                    "is_higher"
                ]
            },
            higher_urdu: {
                name: "Higher Higher Urdu",
                group: "language",
                tag: [
                    "urdu",
                    "mother tongue",
                    "higher mother tongue"
                ],
                options: [
                    "is_higher"
                ]
            },
            h1_general_paper: {
                name: "H1 General Paper",
                group: "language"
            },
            h1_economics: {
                name: "H1 Economics",
                group: "other",
                in: [
                    "jc_grade"
                ]
            },
            h2_economics: {
                name: "H2 Economics",
                group: "other",
                in: [
                    "jc_grade"
                ]
            },
            h1_management_of_business: {
                name: "H1 Management of Business",
                group: "other",
                in: [
                    "jc_grade"
                ]
            },
            h2_management_of_business: {
                name: "H2 Management of Business",
                group: "other",
                in: [
                    "jc_grade"
                ]
            },
            h1_principles_of_ccounting: {
                name: "H2 Principles of Accounting",
                group: "other",
                in: [
                    "jc_grade"
                ]
            },
            h2_principles_of_ccounting: {
                name: "H2 Principles of Accounting",
                group: "other",
                in: [
                    "jc_grade"
                ]
            }
        },
        questionType: [
            "mcq",
            "short_answer"
        ],
        questionTopic: [
            "addition",
            "number_line"
        ],
        questionSkill: [
            "addition",
            "number_line"
        ],
        voteUpDown: [
            "up",
            "down"
        ],
        localization: {
            level: {
                pri1: "PRI 1",
                pri2: "PRI 2",
                pri3: "PRI 3",
                pri4: "PRI 4",
                pri5: "PRI 5",
                pri6: "PRI 6",
                sec1: "SEC 1",
                sec2: "SEC 2",
                sec3: "SEC 3",
                sec4: "SEC 4",
                sec5: "SEC 5",
                jc1: "JC 1",
                jc2: "JC 2",
                ib1: "IB 1",
                ib2: "IB 2",
                ib3: "IB 3",
                poly1: "poly1",
                poly2: "poly2",
                poly3: "poly3"
            }
        }
    }

}

export default subjects