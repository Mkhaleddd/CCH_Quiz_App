export interface Option {
    value: string
    label: string
  }
  
  export interface Options {
    category: Option[]
    difficulty: Option[]
    type: Option[]
  }
  
  const selection_category: Option[] = [
    { value: '', label: 'Any Category' },
    { value: '9', label: 'General Knowledge' },
    { value: '10', label: 'Entertainment: Books' },
    { value: '11', label: 'Entertainment: Film' },
    { value: '12', label: 'Entertainment: Music' },
    { value: '13', label: 'Entertainment: Musicals & Theatres' },
    { value: '14', label: 'Entertainment: Television' },
    { value: '15', label: 'Entertainment: Video Games' },
    { value: '16', label: 'Entertainment: Board Games' },
    { value: '17', label: 'Science & Nature' },
    { value: '18', label: 'Science: Computers' },
    { value: '19', label: 'Science: Mathematics' },
    { value: '20', label: 'Mythology' },
    { value: '21', label: 'Sports' },
    { value: '22', label: 'Geography' },
    { value: '23', label: 'History' },
    { value: '24', label: 'Politics' },
    { value: '25', label: 'Art' },
    { value: '26', label: 'Celebrities' },
    { value: '27', label: 'Animals' },
    { value: '28', label: 'Vehicles' },
    { value: '29', label: 'Entertainment: Comics' },
    { value: '30', label: 'Science: Gadgets' },
    { value: '31', label: 'Entertainment: Japanese Anime & Manga' },
    { value: '32', label: 'Entertainment: Cartoon & Animations' },
  ]
  
  const selection_difficulty: Option[] = [
    { value: '', label: 'Any Difficulty' },
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
  ]
  
  const selection_type: Option[] = [
    { value: '', label: 'Any Type' },
    { value: 'multiple', label: 'Multiple Choice' },
    { value: 'boolean', label: 'True/False' },
  ]
  export const selectOptions: Options = {
    category: selection_category,
    difficulty: selection_difficulty,
    type: selection_type,
  }
  
      
   