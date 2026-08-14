// Canonical exam-review contract. Keep exam mathematics in English; zh is optional UI support.
window.EXAM_REVIEW_DATA = {
  schemaVersion: 1,
  id: '{{EXAM_ID}}',
  meta: {
    year: {{YEAR}},
    form: '{{FORM}}',
    date: '{{DATE}}',
    total: 25
  },
  attempt: {
    id: '{{EXAM_ID}}-attempt',
    attemptedAt: '{{DATE}}',
    sourceQuestions: 'Q{{FIRST_QUESTION}}-{{LAST_QUESTION}}',
    correct: {{DEFAULT_CORRECT}},
    wrong: 0,
    blank: {{DEFAULT_BLANK}},
    status: 'active',
    diagnosis: { en: 'Describe the recurring representation or strategy bottleneck.' },
    nextAction: { en: 'Name the next cold redo or transfer assignment.' }
  },

  problems: [
    {
      number: {{FIRST_QUESTION}},
      title: { en: 'Replace with a short problem title' },
      topic: { en: 'Primary topic · secondary strategy' },
      stem: { en: 'Paste the exact contest problem statement here.' },
      options: [
        { key: 'A', text: 'Choice A' },
        { key: 'B', text: 'Choice B' },
        { key: 'C', text: 'Choice C' },
        { key: 'D', text: 'Choice D' },
        { key: 'E', text: 'Choice E' }
      ],
      answer: { choice: 'A', value: 'Choice A' },
      mapSummary: { en: 'Name the structural first move, not the final calculation.' },
      concepts: [
        { id: 'concept-1', label: { en: 'First central concept' } },
        { id: 'concept-2', label: { en: 'Second central concept' } },
        { id: 'distractor', label: { en: 'Plausible distractor concept' } }
      ],
      required: ['concept-1', 'concept-2'],
      prompt: { en: 'Which two ideas and first representation would you try?' },
      hints: [
        { id: 'h1', prompt: { en: 'What is the smallest useful observation?' }, content: { en: 'Give one strategic nudge without revealing the answer.' } },
        { id: 'h2', prompt: { en: 'How can you represent the structure?' }, content: { en: 'Point toward the key representation or case split.' } }
      ],
      solutions: [
        {
          id: 'core',
          title: { en: 'Core method' },
          steps: [
            { en: 'State the decisive setup.' },
            { en: 'Carry out the main argument.' },
            { en: 'Check the result against the question.' }
          ],
          insight: { en: 'Summarize the transferable insight in one sentence.' },
          result: 'Choice A'
        }
      ],
      practice: [
        {
          id: 'transfer-1',
          level: 'Transfer 01',
          question: { en: 'Write a nearby problem that uses the same launch but different surface details.' },
          answer: { en: 'Expected answer' },
          sketch: { en: 'Optional teacher-only explanation shown after passing.' }
        }
      ]
    }
  ]
};
