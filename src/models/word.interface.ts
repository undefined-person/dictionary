export interface IWord {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  sourceUrls: string[]
  audio?: string
}

export interface Phonetic {
  text: string
  audio: string
  sourceUrl: string
}

interface Definition {
  definition: string
  example?: string
}

interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms?: string[]
  antonyms?: string[]
}
