export const entities = [
    {
        entity_id: '',
        type: 'producer',
        attributes: {
            name: '',
            address: '',
            industry: '',
            license: '',
            registration_date: '',
            jurisdiction: '',
        }, 
        tags: [],
        connections: [{ entity_id: '', relationship: 'suplier'}],
        transactions: [],
        files: [],
        onboarding: {
            phase1: [
                {
                    step: 1,
                    completed: false,
                    questions:[],
                    validations: [],
                    unlocked_features:[]
                },
                {
                    step: 2,
                    completed: false,
                    questions:[],
                    validations: [],
                    unlocked_features:[]
                }

            ],
            phase2: [
                {
                    step: 1,
                    completed: false,
                    questions:[],
                    validations: [],
                    unlocked_features:[]
                },
                {
                    step: 2,
                    completed: false,
                    questions:[],
                    validations: [],
                    unlocked_features:[]
                }

            ]
        }
    }
]