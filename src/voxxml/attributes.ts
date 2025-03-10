type History = 'disable' | 'compact' | 'full'

type Input = 'dtmf' | 'speech' | 'dtmf speech'

type Method = 'GET' | 'POST'

type BankAccountType = 'consumer-checking' | 'consumer-savings' | 'commercial-checking'

type PaymentMethod = 'credit-card' | 'ach-debit'

type TokenType = 'one-time' | 'reusable' | 'payment-method'

type Currency = 'usd'

type PromptFor = 'payment-card-number'
  | 'expiration-date'
  | 'security-code'
  | 'postal-code'
  | 'bank-account-number'
  | 'bank-routing-number'

type PromptError = 'input-timeout'
  | 'invalid-card-number'
  | 'invalid-security-code'
  | 'invalid-card-type'
  | 'invalid-date'
  | 'invalid-postal-code'
  | 'invalid-bank-routing-number'
  | 'invalid-bank-account-number'
  | 'input-matching-failed'

// https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
type TTSLanguage = 'arb'
  | 'ar-AE'
  | 'ca-ES'
  | 'yue-CN'
  | 'cmn-CN'
  | 'da-DK'
  | 'nl-NL'
  | 'en-AU'
  | 'en-GB'
  | 'en-IN'
  | 'en-NZ'
  | 'en-ZA'
  | 'en-US'
  | 'fi-FI'
  | 'fr-FR'
  | 'fr-CA'
  | 'de-DE'
  | 'de-AT'
  | 'is-IS'
  | 'is-IT'
  | 'it-IT'
  | 'ja-JP'
  | 'ko-KR'
  | 'nb-NO'
  | 'pl-PL'
  | 'pt-BR'
  | 'pt-PT'
  | 'ro-RO'
  | 'ru-RU'
  | 'es-ES'
  | 'es-MX'
  | 'es-US'
  | 'sv-SE'
  | 'tr-TR'
  | 'cy-GB'
  | 'en-IE'
  | 'af-ZA'
  | 'ar-XA'
  | 'eu-ES'
  | 'bn-IN'
  | 'bg-BG'
  | 'yue-HK'
  | 'cs-CZ'
  | 'nl-BE'
  | 'fil-PH'
  | 'gl-ES'
  | 'el-GR'
  | 'gu-IN'
  | 'he-IL'
  | 'hi-IN'
  | 'hu-HU'
  | 'id-ID'
  | 'kn-IN'
  | 'lv-LV'
  | 'lt-LT'
  | 'ms-MY'
  | 'ml-IN'
  | 'cmn-TW'
  | 'mr-IN'
  | 'pa-IN'
  | 'sr-RS'
  | 'sk-SK'
  | 'ta-IN'
  | 'te-IN'
  | 'th-TH'
  | 'uk-UA'
  | 'vi-VN'

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
  | 'Polly.Amy-Generative'
  | 'Polly.Emma'
  | 'Polly.Emma-Neural'
  | 'Polly.Brian'
  | 'Polly.Brian-Neural'
  | 'Polly.Arthur-Neural'
  | 'Polly.Raveena'
  | 'Polly.Aria-Neural'
  | 'Polly.Ayanda-Neural'
  | 'Polly.Danielle-Neural'
  | 'Polly.Gregory-Neural'
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
  | 'Polly.Kevin-Neural'
  | 'Polly.Matthew'
  | 'Polly.Matthew-Neural'
  | 'Polly.Matthew-Generative'
  | 'Polly.Ruth-Neural'
  | 'Polly.Ruth-Generative'
  | 'Polly.Stephen-Neural'
  | 'Polly.Suvi-Neural'
  | 'Polly.Céline'
  | 'Polly.Celine'
  | 'Polly.Léa'
  | 'Polly.Léa-Neural'
  | 'Polly.Mathieu'
  | 'Polly.Rémi-Neural'
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
  | 'Polly.Adriano-Neural'
  | 'Polly.Carla'
  | 'Polly.Bianca'
  | 'Polly.Bianca-Neural'
  | 'Polly.Giorgio'
  | 'Polly.Kazuha-Neural'
  | 'Polly.Tomoko-Neural'
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
  | 'Polly.Thiago-Neural'
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
  | 'Polly.Sergio-Neural'
  | 'Polly.Mia'
  | 'Polly.Mia-Neural'
  | 'Polly.Andrés-Neural'
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
  | 'Deepgram.Asteria'
  | 'Deepgram.Luna'
  | 'Deepgram.Stella'
  | 'Deepgram.Athena'
  | 'Deepgram.Hera'
  | 'Deepgram.Orion'
  | 'Deepgram.Arcas'
  | 'Deepgram.Perseus'
  | 'Deepgram.Angus'
  | 'Deepgram.Orpheus'
  | 'Deepgram.Helios'
  | 'Deepgram.Zeus'
  | 'Google.af-ZA-Standard-A'
  | 'Google.ar-XA-Standard-A'
  | 'Google.ar-XA-Standard-B'
  | 'Google.ar-XA-Standard-C'
  | 'Google.ar-XA-Standard-D'
  | 'Google.ar-XA-Wavenet-A'
  | 'Google.ar-XA-Wavenet-B'
  | 'Google.ar-XA-Wavenet-C'
  | 'Google.ar-XA-Wavenet-D'
  | 'Google.eu-ES-Standard-A'
  | 'Google.bn-IN-Standard-A'
  | 'Google.bn-IN-Standard-B'
  | 'Google.bn-IN-Standard-C'
  | 'Google.bn-IN-Standard-D'
  | 'Google.bn-IN-Wavenet-A'
  | 'Google.bn-IN-Wavenet-B'
  | 'Google.bn-IN-Wavenet-C'
  | 'Google.bn-IN-Wavenet-D'
  | 'Google.bg-BG-Standard-A'
  | 'Google.ca-ES-Standard-A'
  | 'Google.yue-HK-Standard-A'
  | 'Google.yue-HK-Standard-B'
  | 'Google.yue-HK-Standard-C'
  | 'Google.yue-HK-Standard-D'
  | 'Google.cs-CZ-Standard-A'
  | 'Google.cs-CZ-Wavenet-A'
  | 'Google.da-DK-Neural2-D'
  | 'Google.da-DK-Standard-A'
  | 'Google.da-DK-Standard-C'
  | 'Google.da-DK-Standard-D'
  | 'Google.da-DK-Standard-E'
  | 'Google.da-DK-Wavenet-A'
  | 'Google.da-DK-Wavenet-C'
  | 'Google.da-DK-Wavenet-D'
  | 'Google.da-DK-Wavenet-E'
  | 'Google.nl-BE-Standard-A'
  | 'Google.nl-BE-Standard-B'
  | 'Google.nl-BE-Wavenet-A'
  | 'Google.nl-BE-Wavenet-B'
  | 'Google.nl-NL-Standard-A'
  | 'Google.nl-NL-Standard-B'
  | 'Google.nl-NL-Standard-C'
  | 'Google.nl-NL-Standard-D'
  | 'Google.nl-NL-Standard-E'
  | 'Google.nl-NL-Wavenet-A'
  | 'Google.nl-NL-Wavenet-B'
  | 'Google.nl-NL-Wavenet-C'
  | 'Google.nl-NL-Wavenet-D'
  | 'Google.nl-NL-Wavenet-E'
  | 'Google.en-AU-Neural2-A'
  | 'Google.en-AU-Neural2-B'
  | 'Google.en-AU-Neural2-C'
  | 'Google.en-AU-Neural2-D'
  | 'Google.en-AU-Standard-A'
  | 'Google.en-AU-Standard-B'
  | 'Google.en-AU-Standard-C'
  | 'Google.en-AU-Standard-D'
  | 'Google.en-AU-Wavenet-A'
  | 'Google.en-AU-Wavenet-B'
  | 'Google.en-AU-Wavenet-C'
  | 'Google.en-AU-Wavenet-D'
  | 'Google.en-IN-Neural2-A'
  | 'Google.en-IN-Neural2-B'
  | 'Google.en-IN-Neural2-C'
  | 'Google.en-IN-Neural2-D'
  | 'Google.en-IN-Standard-A'
  | 'Google.en-IN-Standard-B'
  | 'Google.en-IN-Standard-C'
  | 'Google.en-IN-Standard-D'
  | 'Google.en-IN-Wavenet-A'
  | 'Google.en-IN-Wavenet-B'
  | 'Google.en-IN-Wavenet-C'
  | 'Google.en-IN-Wavenet-D'
  | 'Google.en-GB-Neural2-A'
  | 'Google.en-GB-Neural2-B'
  | 'Google.en-GB-Neural2-C'
  | 'Google.en-GB-Neural2-D'
  | 'Google.en-GB-Neural2-F'
  | 'Google.en-GB-Standard-A'
  | 'Google.en-GB-Standard-B'
  | 'Google.en-GB-Standard-C'
  | 'Google.en-GB-Standard-D'
  | 'Google.en-GB-Standard-F'
  | 'Google.en-GB-Wavenet-A'
  | 'Google.en-GB-Wavenet-B'
  | 'Google.en-GB-Wavenet-C'
  | 'Google.en-GB-Wavenet-D'
  | 'Google.en-GB-Wavenet-F'
  | 'Google.en-US-Neural2-A'
  | 'Google.en-US-Neural2-C'
  | 'Google.en-US-Neural2-D'
  | 'Google.en-US-Neural2-E'
  | 'Google.en-US-Neural2-F'
  | 'Google.en-US-Neural2-G'
  | 'Google.en-US-Neural2-H'
  | 'Google.en-US-Neural2-I'
  | 'Google.en-US-Neural2-J'
  | 'Google.en-US-Standard-A'
  | 'Google.en-US-Standard-B'
  | 'Google.en-US-Standard-C'
  | 'Google.en-US-Standard-D'
  | 'Google.en-US-Standard-E'
  | 'Google.en-US-Standard-F'
  | 'Google.en-US-Standard-G'
  | 'Google.en-US-Standard-H'
  | 'Google.en-US-Standard-I'
  | 'Google.en-US-Standard-J'
  | 'Google.en-US-Wavenet-A'
  | 'Google.en-US-Wavenet-B'
  | 'Google.en-US-Wavenet-C'
  | 'Google.en-US-Wavenet-D'
  | 'Google.en-US-Wavenet-E'
  | 'Google.en-US-Wavenet-F'
  | 'Google.en-US-Wavenet-G'
  | 'Google.en-US-Wavenet-H'
  | 'Google.en-US-Wavenet-I'
  | 'Google.en-US-Wavenet-J'
  | 'Google.fil-PH-Standard-A'
  | 'Google.fil-PH-Standard-B'
  | 'Google.fil-PH-Standard-C'
  | 'Google.fil-PH-Standard-D'
  | 'Google.fil-PH-Wavenet-A'
  | 'Google.fil-PH-Wavenet-B'
  | 'Google.fil-PH-Wavenet-C'
  | 'Google.fil-PH-Wavenet-D'
  | 'Google.fil-ph-Neural2-A'
  | 'Google.fil-ph-Neural2-D'
  | 'Google.fi-FI-Standard-A'
  | 'Google.fi-FI-Wavenet-A'
  | 'Google.fr-CA-Neural2-A'
  | 'Google.fr-CA-Neural2-B'
  | 'Google.fr-CA-Neural2-C'
  | 'Google.fr-CA-Neural2-D'
  | 'Google.fr-CA-Standard-A'
  | 'Google.fr-CA-Standard-B'
  | 'Google.fr-CA-Standard-C'
  | 'Google.fr-CA-Standard-D'
  | 'Google.fr-CA-Wavenet-A'
  | 'Google.fr-CA-Wavenet-B'
  | 'Google.fr-CA-Wavenet-C'
  | 'Google.fr-CA-Wavenet-D'
  | 'Google.fr-FR-Neural2-A'
  | 'Google.fr-FR-Neural2-B'
  | 'Google.fr-FR-Neural2-C'
  | 'Google.fr-FR-Neural2-D'
  | 'Google.fr-FR-Neural2-E'
  | 'Google.fr-FR-Standard-A'
  | 'Google.fr-FR-Standard-B'
  | 'Google.fr-FR-Standard-C'
  | 'Google.fr-FR-Standard-D'
  | 'Google.fr-FR-Standard-E'
  | 'Google.fr-FR-Wavenet-A'
  | 'Google.fr-FR-Wavenet-B'
  | 'Google.fr-FR-Wavenet-C'
  | 'Google.fr-FR-Wavenet-D'
  | 'Google.fr-FR-Wavenet-E'
  | 'Google.gl-ES-Standard-A'
  | 'Google.de-DE-Neural2-A'
  | 'Google.de-DE-Neural2-B'
  | 'Google.de-DE-Neural2-C'
  | 'Google.de-DE-Neural2-D'
  | 'Google.de-DE-Neural2-F'
  | 'Google.de-DE-Standard-A'
  | 'Google.de-DE-Standard-B'
  | 'Google.de-DE-Standard-C'
  | 'Google.de-DE-Standard-D'
  | 'Google.de-DE-Standard-E'
  | 'Google.de-DE-Standard-F'
  | 'Google.de-DE-Wavenet-A'
  | 'Google.de-DE-Wavenet-B'
  | 'Google.de-DE-Wavenet-C'
  | 'Google.de-DE-Wavenet-D'
  | 'Google.de-DE-Wavenet-E'
  | 'Google.de-DE-Wavenet-F'
  | 'Google.el-GR-Standard-A'
  | 'Google.el-GR-Wavenet-A'
  | 'Google.gu-IN-Standard-A'
  | 'Google.gu-IN-Standard-B'
  | 'Google.gu-IN-Standard-C'
  | 'Google.gu-IN-Standard-D'
  | 'Google.gu-IN-Wavenet-A'
  | 'Google.gu-IN-Wavenet-B'
  | 'Google.gu-IN-Wavenet-C'
  | 'Google.gu-IN-Wavenet-D'
  | 'Google.he-IL-Standard-A'
  | 'Google.he-IL-Standard-B'
  | 'Google.he-IL-Standard-C'
  | 'Google.he-IL-Standard-D'
  | 'Google.he-IL-Wavenet-A'
  | 'Google.he-IL-Wavenet-B'
  | 'Google.he-IL-Wavenet-C'
  | 'Google.he-IL-Wavenet-D'
  | 'Google.hi-IN-Neural2-A'
  | 'Google.hi-IN-Neural2-B'
  | 'Google.hi-IN-Neural2-C'
  | 'Google.hi-IN-Neural2-D'
  | 'Google.hi-IN-Standard-A'
  | 'Google.hi-IN-Standard-B'
  | 'Google.hi-IN-Standard-C'
  | 'Google.hi-IN-Standard-D'
  | 'Google.hi-IN-Wavenet-A'
  | 'Google.hi-IN-Wavenet-B'
  | 'Google.hi-IN-Wavenet-C'
  | 'Google.hi-IN-Wavenet-D'
  | 'Google.hu-HU-Standard-A'
  | 'Google.hu-HU-Wavenet-A'
  | 'Google.is-IS-Standard-A'
  | 'Google.id-ID-Standard-A'
  | 'Google.id-ID-Standard-B'
  | 'Google.id-ID-Standard-C'
  | 'Google.id-ID-Standard-D'
  | 'Google.id-ID-Wavenet-A'
  | 'Google.id-ID-Wavenet-B'
  | 'Google.id-ID-Wavenet-C'
  | 'Google.id-ID-Wavenet-D'
  | 'Google.it-IT-Neural2-A'
  | 'Google.it-IT-Neural2-C'
  | 'Google.it-IT-Standard-A'
  | 'Google.it-IT-Standard-B'
  | 'Google.it-IT-Standard-C'
  | 'Google.it-IT-Standard-D'
  | 'Google.it-IT-Wavenet-A'
  | 'Google.it-IT-Wavenet-B'
  | 'Google.it-IT-Wavenet-C'
  | 'Google.it-IT-Wavenet-D'
  | 'Google.ja-JP-Neural2-B'
  | 'Google.ja-JP-Neural2-C'
  | 'Google.ja-JP-Neural2-D'
  | 'Google.ja-JP-Standard-A'
  | 'Google.ja-JP-Standard-B'
  | 'Google.ja-JP-Standard-C'
  | 'Google.ja-JP-Standard-D'
  | 'Google.ja-JP-Wavenet-A'
  | 'Google.ja-JP-Wavenet-B'
  | 'Google.ja-JP-Wavenet-C'
  | 'Google.ja-JP-Wavenet-D'
  | 'Google.kn-IN-Standard-A'
  | 'Google.kn-IN-Standard-B'
  | 'Google.kn-IN-Standard-C'
  | 'Google.kn-IN-Standard-D'
  | 'Google.kn-IN-Wavenet-A'
  | 'Google.kn-IN-Wavenet-B'
  | 'Google.kn-IN-Wavenet-C'
  | 'Google.kn-IN-Wavenet-D'
  | 'Google.ko-KR-Neural2-A'
  | 'Google.ko-KR-Neural2-B'
  | 'Google.ko-KR-Neural2-C'
  | 'Google.ko-KR-Standard-A'
  | 'Google.ko-KR-Standard-B'
  | 'Google.ko-KR-Standard-C'
  | 'Google.ko-KR-Standard-D'
  | 'Google.ko-KR-Wavenet-A'
  | 'Google.ko-KR-Wavenet-B'
  | 'Google.ko-KR-Wavenet-C'
  | 'Google.ko-KR-Wavenet-D'
  | 'Google.lv-LV-Standard-A'
  | 'Google.lt-LT-Standard-A'
  | 'Google.ms-MY-Standard-A'
  | 'Google.ms-MY-Standard-B'
  | 'Google.ms-MY-Standard-C'
  | 'Google.ms-MY-Standard-D'
  | 'Google.ms-MY-Wavenet-A'
  | 'Google.ms-MY-Wavenet-B'
  | 'Google.ms-MY-Wavenet-C'
  | 'Google.ms-MY-Wavenet-D'
  | 'Google.ml-IN-Standard-A'
  | 'Google.ml-IN-Standard-B'
  | 'Google.ml-IN-Standard-C'
  | 'Google.ml-IN-Standard-D'
  | 'Google.ml-IN-Wavenet-A'
  | 'Google.ml-IN-Wavenet-B'
  | 'Google.ml-IN-Wavenet-C'
  | 'Google.ml-IN-Wavenet-D'
  | 'Google.cmn-CN-Standard-A'
  | 'Google.cmn-CN-Standard-B'
  | 'Google.cmn-CN-Standard-C'
  | 'Google.cmn-CN-Standard-D'
  | 'Google.cmn-CN-Wavenet-A'
  | 'Google.cmn-CN-Wavenet-B'
  | 'Google.cmn-CN-Wavenet-C'
  | 'Google.cmn-CN-Wavenet-D'
  | 'Google.cmn-TW-Standard-A'
  | 'Google.cmn-TW-Standard-B'
  | 'Google.cmn-TW-Standard-C'
  | 'Google.cmn-TW-Wavenet-A'
  | 'Google.cmn-TW-Wavenet-B'
  | 'Google.cmn-TW-Wavenet-C'
  | 'Google.mr-IN-Standard-A'
  | 'Google.mr-IN-Standard-B'
  | 'Google.mr-IN-Standard-C'
  | 'Google.mr-IN-Wavenet-A'
  | 'Google.mr-IN-Wavenet-B'
  | 'Google.mr-IN-Wavenet-C'
  | 'Google.nb-NO-Standard-A'
  | 'Google.nb-NO-Standard-B'
  | 'Google.nb-NO-Standard-C'
  | 'Google.nb-NO-Standard-D'
  | 'Google.nb-NO-Standard-E'
  | 'Google.nb-NO-Wavenet-A'
  | 'Google.nb-NO-Wavenet-B'
  | 'Google.nb-NO-Wavenet-C'
  | 'Google.nb-NO-Wavenet-D'
  | 'Google.nb-NO-Wavenet-E'
  | 'Google.pl-PL-Standard-A'
  | 'Google.pl-PL-Standard-B'
  | 'Google.pl-PL-Standard-C'
  | 'Google.pl-PL-Standard-D'
  | 'Google.pl-PL-Standard-E'
  | 'Google.pl-PL-Wavenet-A'
  | 'Google.pl-PL-Wavenet-B'
  | 'Google.pl-PL-Wavenet-C'
  | 'Google.pl-PL-Wavenet-D'
  | 'Google.pl-PL-Wavenet-E'
  | 'Google.pt-BR-Neural2-A'
  | 'Google.pt-BR-Neural2-B'
  | 'Google.pt-BR-Neural2-C'
  | 'Google.pt-BR-Standard-A'
  | 'Google.pt-BR-Standard-B'
  | 'Google.pt-BR-Standard-C'
  | 'Google.pt-BR-Wavenet-A'
  | 'Google.pt-BR-Wavenet-B'
  | 'Google.pt-BR-Wavenet-C'
  | 'Google.pt-PT-Standard-A'
  | 'Google.pt-PT-Standard-B'
  | 'Google.pt-PT-Standard-C'
  | 'Google.pt-PT-Standard-D'
  | 'Google.pt-PT-Wavenet-A'
  | 'Google.pt-PT-Wavenet-B'
  | 'Google.pt-PT-Wavenet-C'
  | 'Google.pt-PT-Wavenet-D'
  | 'Google.pa-IN-Standard-A'
  | 'Google.pa-IN-Standard-B'
  | 'Google.pa-IN-Standard-C'
  | 'Google.pa-IN-Standard-D'
  | 'Google.pa-IN-Wavenet-A'
  | 'Google.pa-IN-Wavenet-B'
  | 'Google.pa-IN-Wavenet-C'
  | 'Google.pa-IN-Wavenet-D'
  | 'Google.ro-RO-Standard-A'
  | 'Google.ro-RO-Wavenet-A'
  | 'Google.ru-RU-Standard-A'
  | 'Google.ru-RU-Standard-B'
  | 'Google.ru-RU-Standard-C'
  | 'Google.ru-RU-Standard-D'
  | 'Google.ru-RU-Standard-E'
  | 'Google.ru-RU-Wavenet-A'
  | 'Google.ru-RU-Wavenet-B'
  | 'Google.ru-RU-Wavenet-C'
  | 'Google.ru-RU-Wavenet-D'
  | 'Google.ru-RU-Wavenet-E'
  | 'Google.sr-RS-Standard-A'
  | 'Google.sk-SK-Standard-A'
  | 'Google.sk-SK-Wavenet-A'
  | 'Google.es-ES-Neural2-A'
  | 'Google.es-ES-Neural2-B'
  | 'Google.es-ES-Neural2-C'
  | 'Google.es-ES-Neural2-D'
  | 'Google.es-ES-Neural2-E'
  | 'Google.es-ES-Neural2-F'
  | 'Google.es-ES-Standard-A'
  | 'Google.es-ES-Standard-B'
  | 'Google.es-ES-Standard-C'
  | 'Google.es-ES-Standard-D'
  | 'Google.es-ES-Wavenet-B'
  | 'Google.es-ES-Wavenet-C'
  | 'Google.es-ES-Wavenet-D'
  | 'Google.es-US-Neural2-A'
  | 'Google.es-US-Neural2-B'
  | 'Google.es-US-Neural2-C'
  | 'Google.es-US-Standard-A'
  | 'Google.es-US-Standard-B'
  | 'Google.es-US-Standard-C'
  | 'Google.es-US-Wavenet-A'
  | 'Google.es-US-Wavenet-B'
  | 'Google.es-US-Wavenet-C'
  | 'Google.sv-SE-Standard-A'
  | 'Google.sv-SE-Standard-B'
  | 'Google.sv-SE-Standard-C'
  | 'Google.sv-SE-Standard-D'
  | 'Google.sv-SE-Standard-E'
  | 'Google.sv-SE-Wavenet-A'
  | 'Google.sv-SE-Wavenet-B'
  | 'Google.sv-SE-Wavenet-C'
  | 'Google.sv-SE-Wavenet-D'
  | 'Google.sv-SE-Wavenet-E'
  | 'Google.ta-IN-Standard-A'
  | 'Google.ta-IN-Standard-B'
  | 'Google.ta-IN-Standard-C'
  | 'Google.ta-IN-Standard-D'
  | 'Google.ta-IN-Wavenet-A'
  | 'Google.ta-IN-Wavenet-B'
  | 'Google.ta-IN-Wavenet-C'
  | 'Google.ta-IN-Wavenet-D'
  | 'Google.te-IN-Standard-A'
  | 'Google.te-IN-Standard-B'
  | 'Google.th-TH-Neural2-C'
  | 'Google.th-TH-Standard-A'
  | 'Google.tr-TR-Standard-A'
  | 'Google.tr-TR-Standard-B'
  | 'Google.tr-TR-Standard-C'
  | 'Google.tr-TR-Standard-D'
  | 'Google.tr-TR-Standard-E'
  | 'Google.tr-TR-Wavenet-A'
  | 'Google.tr-TR-Wavenet-B'
  | 'Google.tr-TR-Wavenet-C'
  | 'Google.tr-TR-Wavenet-D'
  | 'Google.tr-TR-Wavenet-E'
  | 'Google.uk-UA-Standard-A'
  | 'Google.uk-UA-Wavenet-A'
  | 'Google.vi-VN-Neural2-A'
  | 'Google.vi-VN-Neural2-D'
  | 'Google.vi-VN-Standard-A'
  | 'Google.vi-VN-Standard-B'
  | 'Google.vi-VN-Standard-C'
  | 'Google.vi-VN-Standard-D'
  | 'Google.vi-VN-Wavenet-A'
  | 'Google.vi-VN-Wavenet-B'
  | 'Google.vi-VN-Wavenet-C'
  | 'Google.vi-VN-Wavenet-D'

type STTLanguage = 'zh-CN'
  | 'zh-TW'
  | 'da'
  | 'nl'
  | 'en-US'
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

export interface ConnectAttributes {
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
  record?: 'do-not-record' | 'record-from-answer' | 'record-from-ringing' | 'record-from-answer-dual' | 'record-from-ringing-dual'
  recordingStatusCallback?: string
  recordingStatusCallbackMethod?: Method
  recordingStatusCallbackEvent?: string
  recordingTrack?: 'inbound' | 'outbound' | 'both'
}

export interface DoAttributes {
  expression: string
  maxLoops?: number
}

export interface FlowAttributes {
  resume?: boolean
}

export interface GatherAttributes {
  action?: string
  actionOnEmptyResult?: boolean
  method?: Method
  numDigits?: number
  finishOnKey?: string
  language?: STTLanguage
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

export interface PauseAttributes {
  length?: number
  history?: History
}

export interface PlayAttributes {
  loop?: number
  digits?: string
  history?: History
}

export interface PayAttributes {
  action?: string
  bankAccountType?: BankAccountType
  chargeAmount?: number
  currency?: Currency
  description?: string
  input?: Input
  history?: History
  language?: TTSLanguage
  maxAttempts?: number
  method?: Method
  minPostalCodeLength: number
  paymentConnector?: string
  paymentMethod?: PaymentMethod
  postalCode?: boolean
  securityCode?: boolean
  statusCallback?: string
  statusCallbackMethod?: Method
  timeout?: number
  tokenType?: TokenType
  validCardTypes?: string
}

export interface ParameterAttributes {
  name: string
  value: string
}

export interface PromptAttributes {
  attempt?: string
  cardType?: string
  errorType?: PromptError
  for: PromptFor
  history?: History
  requireMatchingInputs?: boolean
}

export interface RecordAttributes {
  action?: string
  method?: Method
  timeout?: number
  history?: History
  finishOnKey?: string
  maxLength?: number
  playBeep?: boolean
  recordingStatusCallback?: string
  recordingStatusCallbackMethod?: Method
  recordingStatusCallbackEvent?: string
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
  language?: TTSLanguage
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