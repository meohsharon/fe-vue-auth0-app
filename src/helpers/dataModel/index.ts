export const onboardingFlow = {
  "section 1": [
    {
      step: 1,
      questions: ["Name", "Address"],
      validations_required: ["Government ID Upload"],
      unlocked_features: ["Discover Other Producers"],
    },
    {
      step: 2,
      questions: ["Trade License"],
      validations_required: ["Video Interview"],
      unlocked_features: ["Discover Suppliers", "Message Suppliers"],
    },
  ],
  "section 2": [
    {
      step: 1,
      questions: ["Upload Data"],
      validations_required: ["Emission Record Verification"],
      unlocked_features: ["Connect with Others", "Request Data"],
    },
    {
      step: 2,
      questions: ["Billing Information"],
      validations_required: ["Valid Credit Card", "Valid Paypal"],
      unlocked_features: ["Buy Data"],
    },
  ],
};

export const entities = [
  {
    entity_id: "",
    type: "producer",
    attributes: {
      name: "",
      address: "",
      industry: "",
      license: "",
      registration_date: "",
      jurisdiction: "",
    },
    tags: [],
    connections: [{ entity_id: "", relationship: "suplier" }],
    transactions: [],
    files: [],
    onboarding: {
      section1: [
        {
          step: 1,
          completed: false,
          validations: [], // ipfs links
          unlocked_features: ["Discover Other Producers"],
        },
        {
          step: 2,
          completed: false,
          validations: [],
          unlocked_features: ["Discover Suppliers", "Message Suppliers"],
        },
      ],
      section2: [
        {
          step: 1,
          completed: false,
          validations: [],
          unlocked_features: ["Connect with Others", "Request Data"],
        },
        {
          step: 2,
          completed: false,
          validations: [],
          unlocked_features: ["Buy Data"],
        },
      ],
    },
  },
];
