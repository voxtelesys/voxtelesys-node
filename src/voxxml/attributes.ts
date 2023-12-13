type History = 'disable' | 'compact' | 'full'

type Input = 'dtmf' | 'speech' | 'dtmf speech'

type Method = 'GET' | 'POST'

// https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
type Language = 'zh-CN'
  | 'zh-TW'
  | 'da'
  | 'nl'
  | 'en'
  | 'en-AU'
  | 'en-IN'
  | 'en-NZ'
  | 'en-GB'
  | 'en-US'
  | 'fr'
  | 'fr-CA'
  | 'de'
  | 'hi'
  | 'hi-Latn'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'no'
  | 'pl'
  | 'pt'
  | 'pt-BR'
  | 'pt-PT'
  | 'ru'
  | 'es'
  | 'es-419'
  | 'sv'
  | 'ta'
  | 'tr'
  | 'uk'

// https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
type Voice = 'Polly.Zeina'
  | 'Polly.Hala-Neural'
  | 'Polly.Arlet-Neural'
  | 'Polly.Hiujin-Neural'
  | 'Polly.Zhiyu'
  | 'Polly.Zhiyu-Neural'
  | 'Polly.Naja'
  | 'Polly.Mads'
  | 'Polly.Laura-Neural'
  | 'Polly.Lotte'
  | 'Polly.Ruben'
  | 'Polly.Nicole'
  | 'Polly.Olivia-Neural'
  | 'Polly.Russell'
  | 'Polly.Amy'
  | 'Polly.Amy-Neural'
  | 'Polly.Emma'
  | 'Polly.Emma-Neural'
  | 'Polly.Brian'
  | 'Polly.Brian-Neural'
  | 'Polly.Arthur-Neural'
  | 'Polly.Raveena'
  | 'Polly.Aria-Neural'
  | 'Polly.Ayanda-Neural'
  | 'Polly.Ivy'
  | 'Polly.Ivy-Neural'
  | 'Polly.Joanna'
  | 'Polly.Joanna-Neural'
  | 'Polly.Kendra'
  | 'Polly.Kendra-Neural'
  | 'Polly.Kimberly'
  | 'Polly.Kimberly-Neural'
  | 'Polly.Salli'
  | 'Polly.Salli-Neural'
  | 'Polly.Joey'
  | 'Polly.Joey-Neural'
  | 'Polly.Justin'
  | 'Polly.Justin-Neural'
  | 'Polly.Kevin'
  | 'Polly.Matthew'
  | 'Polly.Matthew-Neural'
  | 'Polly.Ruth-Neural'
  | 'Polly.Stephen-Neural'
  | 'Polly.Suvi-Neural'
  | 'Polly.Céline'
  | 'Polly.Celine'
  | 'Polly.Léa'
  | 'Polly.Léa-Neural'
  | 'Polly.Mathieu'
  | 'Polly.Chantal'
  | 'Polly.Gabrielle-Neural'
  | 'Polly.Liam-Neural'
  | 'Polly.Marlene'
  | 'Polly.Vicki'
  | 'Polly.Vicki-Neural'
  | 'Polly.Hans'
  | 'Polly.Daniel-Neural'
  | 'Polly.Hannah-Neural'
  | 'Polly.Dóra'
  | 'Polly.Dora'
  | 'Polly.Karl'
  | 'Polly.Carla'
  | 'Polly.Bianca'
  | 'Polly.Bianca-Neural'
  | 'Polly.Giorgio'
  | 'Polly.Mizuki'
  | 'Polly.Takumi'
  | 'Polly.Takumi-Neural'
  | 'Polly.Seoyeon'
  | 'Polly.Seoyeon-Neural'
  | 'Polly.Liv'
  | 'Polly.Ida-Neural'
  | 'Polly.Ewa'
  | 'Polly.Maja'
  | 'Polly.Jacek'
  | 'Polly.Jan'
  | 'Polly.Ola-Neural'
  | 'Polly.Camila'
  | 'Polly.Camila-Neural'
  | 'Polly.Vitória'
  | 'Polly.Vitória-Neural'
  | 'Polly.Vitoria'
  | 'Polly.Vitoria-Neural'
  | 'Polly.Ricardo'
  | 'Polly.Inês'
  | 'Polly.Inês-Neural'
  | 'Polly.Ines'
  | 'Polly.Ines-Neural'
  | 'Polly.Cristiano'
  | 'Polly.Carmen'
  | 'Polly.Tatyana'
  | 'Polly.Maxim'
  | 'Polly.Conchita'
  | 'Polly.Lucia'
  | 'Polly.Lucia-Neural'
  | 'Polly.Enrique'
  | 'Polly.Mia'
  | 'Polly.Mia-Neural'
  | 'Polly.Lupe'
  | 'Polly.Lupe-Neural'
  | 'Polly.Penélope'
  | 'Polly.Penelope'
  | 'Polly.Miguel'
  | 'Polly.Pedro-Neural'
  | 'Polly.Astrid'
  | 'Polly.Elin-Neural'
  | 'Polly.Filiz'
  | 'Polly.Gwyneth'

type RingTone = 'au'
  | 'be'
  | 'cn'
  | 'cz'
  | 'de'
  | 'dk'
  | 'es'
  | 'fi'
  | 'fr'
  | 'hu'
  | 'il'
  | 'in'
  | 'jp'
  | 'pl'
  | 'uk'
  | 'us'

export interface AnswerAttributes {
  history?: History
}

export interface DialAttributes {
  action?: string
  answerOnBridge?: boolean
  callerId?: string | number
  hangupOnStar?: boolean
  method?: Method
  history?: History
  output?: string
  ringTone?: RingTone
  timeout?: number
  timeLimit?: number
}

export interface DoAttributes {
  expression: string
  maxLoops?: number
}

export interface GatherAttributes {
  action?: string
  actionOnEmptyResult?: boolean
  method?: Method
  numDigits?: number
  finishOnKey?: string
  language?: Language
  input?: Input
  history?: History
  output?: string
  profanityFilter?: boolean
  timeout?: number
  speechTimeout?: number | 'auto'
}

export interface HangupAttributes {
  history?: History
}

export interface IfAttributes {
  expression: string
}

export interface PlayAttributes {
  loop?: number
  digits?: string
  history?: History
}

export interface PauseAttributes {
  length?: number
  history?: History
}

export interface RedirectAttributes {
  method?: Method
  history?: History
}

export interface RejectAttributes {
  reason?: string
  history?: History
}

export interface SayAttributes {
  language?: Language
  voice?: Voice
  loop?: number
  history?: History
}

export interface SetAttributes {
  history?: History
  output?: string
}

export interface UnsetAttributes {
  history?: History
  output?: string
}