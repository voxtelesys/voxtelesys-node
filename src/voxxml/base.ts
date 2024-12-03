import { VoxXML } from "./voxxml"
import * as Attributes from './attributes'
import { XMLBuilder } from 'xmlbuilder2/lib/interfaces'

/**
 * Base VoxXML class. Any verb can be called on this class.
 * As such, it is the parent class for <Response>, <If>, and <Do>.
 */
export abstract class Base extends VoxXML {
  protected constructor(element: XMLBuilder) {
    super(element)
  }

  /**
   * Adds the "Answer" verb to the VoxXML document
   *
   * @param attributes attributes for "Answer"
   * @returns the "Answer" element
   */
  answer(attributes?: Attributes.AnswerAttributes): Answer {
    return new Answer(this.addChild('Answer', attributes as object))
  }

  /**
   * Adds the "Connect" verb to the VoxXML document
   *
   * @param attributes attributes for "Connect"
   * @returns the "Connect" element
   */
  connect(attributes?: Attributes.ConnectAttributes): Connect {
    return new Connect(this.addChild('Connect', attributes as object))
  }

  /**
   * Adds the "Dial" verb to the VoxXML document
   *
   * @param number the number to dial
   * @returns the "Dial" element
   */
  dial(number?: string | number): Dial

  /**
   * Adds the "Dial" verb to the VoxXML document
   *
   * @param attributes attributes for "Dial"
   * @returns the "Dial" element
   */
  dial(attributes?: Attributes.DialAttributes, number?: string | number): Dial

  dial(attributes?: string | number | Attributes.DialAttributes, number?: string | number): Dial {
    if (typeof number === 'object') {
      attributes = number
      number = undefined
    }

    return new Dial(this.addChild('Dial', attributes as object, number as string))
  }

  /**
   * Adds the "Do" verb to the VoxXML document
   *
   * @param attributes attributes for "Do"
   * @returns the "Do" element
   */
  do(attributes?: Attributes.DoAttributes): Do {
    return new Do(this.addChild('Do', attributes as object))
  }

  /**
   * Adds the "Gather" verb to the VoxXML document
   *
   * @param attributes attributes for "Gather"
   * @returns the "Gather" element
   */
  gather(attributes?: Attributes.GatherAttributes): Gather {
    return new Gather(this.addChild('Gather', attributes as object))
  }

  /**
   * Adds the "Hangup" verb to the VoxXML document
   *
   * @param attributes attributes for "Hangup"
   * @returns the "Hangup" element
   */
  hangup(attributes?: Attributes.HangupAttributes): Hangup {
    return new Hangup(this.addChild('Hangup', attributes as object))
  }

  /**
   * Adds the "If" verb to the VoxXML document
   *
   * @param attributes attributes for "If"
   * @returns the "If" element
   */
  if(attributes?: Attributes.IfAttributes): If {
    return new If(this.addChild('If', attributes as object))
  }

  /**
   * Adds the "Pause" verb to the VoxXML document
   *
   * @param attributes attributes for "Pause"
   * @returns the "Pause" element
   */
  pause(attributes?: Attributes.PauseAttributes): Pause {
    return new Pause(this.addChild('Pause', attributes as object))
  }

  /**
   * Adds the "Pay" verb to the VoxXML document
   *
   * @param attributes attributes for "Pay"
   * @returns the "Pay" element
   */
  pay(attributes?: Attributes.PayAttributes): Play {
    return new Pay(this.addChild('Pay', attributes as object))
  }

  /**
   * Adds the "Play" verb to the VoxXML document
   *
   * @param attributes attributes for "Play"
   * @param url the URL of the audio file to play
   * @returns the "Play" element
   */
  play(attributes?: Attributes.PlayAttributes, url?: string): Play {
    return new Play(this.addChild('Play', attributes as object, url))
  }

  /**
   * Adds the "Record" verb to the VoxXML document
   *
   * @param attributes attributes for "Record"
   * @returns the "Record" element
   */
  record(attributes?: Attributes.RecordAttributes): Record {
    return new Record(this.addChild('Record', attributes as object))
  }

  /**
   * Adds the "Redirect" verb to the VoxXML document
   *
   * @param attributes attributes for "Redirect"
   * @param url the URL to redirect to
   * @returns the "Redirect" element
   */
  redirect(attributes?: Attributes.RedirectAttributes, url?: string): Redirect {
    return new Redirect(this.addChild('Redirect', attributes as object, url))
  }

  /**
   * Adds the "Reject" verb to the VoxXML document
   *
   * @param attributes attributes for "Reject"
   * @returns the "Reject" element
   */
  reject(attributes?: Attributes.RejectAttributes): Reject {
    return new Reject(this.addChild('Reject', attributes as object))
  }

  /**
   * Adds the "Say" verb to the VoxXML document
   *
   * @param attributes attributes for "Say"
   * @param text the text to say
   * @returns the "Say" element
   */
  say(attributes?: Attributes.SayAttributes, text?: string): Say {
    return new Say(this.addChild('Say', attributes as object, text))
  }

  /**
   * Adds the "Set" verb to the VoxXML document
   *
   * @param attributes attributes for "Set"
   * @param value the value to set
   * @returns the "Set" element
   */
  set(attributes?: Attributes.SetAttributes, value?: string): Set {
    return new Set(this.addChild('Set', attributes as object, value))
  }

  /**
   * Adds the "Unset" verb to the VoxXML document
   *
   * @param attributes attributes for "Unset"
   * @returns the "Unset" element
   */
  unset(attributes?: Attributes.UnsetAttributes): Unset {
    return new Unset(this.addChild('Unset', attributes as object))
  }
}

// CONDITIONALS
export class Do extends Base {}
export class If extends Base {}

// VERBS
export class Answer extends VoxXML {}

export class Connect extends VoxXML {
  public constructor(element: XMLBuilder) {
    super(element)
  }

  /**
   * Adds a "Flow" noun to the "Connect" element
   *
   * @param guid the GUID of the Flow
   * @returns the "Flow" element
   */
  public flow(attributes?: Attributes.FlowAttributes, guid?: string): Flow {
    return new Flow(this.addChild('Flow', attributes as object, guid))
  }
}

/**
 * Dial verb class. Allows for adding "Number" nouns.
 */
export class Dial extends VoxXML {
  public constructor(element: XMLBuilder) {
    super(element)
  }

  /**
   * Adds a "Number" noun to the "Dial" element
   *
   * @param number the number to dial
   * @returns the "Number" element
   */
  public number(number?: string | number): DialNumber {
    return new DialNumber(this.addChild('Number', number as string))
  }
}

/**
 * Gather verb class. Allows for adding "Play", "Say", and "Pause" verbs.
 */
export class Gather extends VoxXML {
  constructor(element: XMLBuilder) {
    super(element)
  }

  /**
   * Adds a "Play" verb to the "Gather" element
   *
   * @param attributes attributes for "Play"
   * @param url the URL of the audio file to play
   * @returns the "Play" element
   */
  play(attributes?: Attributes.PlayAttributes, url?: string): Play {
    return new Play(this.addChild('Play', attributes as object, url))
  }

  /**
   * Adds a "Say" verb to the "Gather" element
   *
   * @param attributes attributes for "Say"
   * @param text the text to say
   * @returns the "Say" element
   */
  say(attributes?: Attributes.SayAttributes, text?: string): Say {
    return new Say(this.addChild('Say', attributes as object, text))
  }

  /**
   * Adds a "Pause" verb to the "Gather" element
   *
   * @param attributes attributes for "Pause"
   * @returns the "Pause" element
   */
  pause(attributes?: Attributes.PauseAttributes): Pause {
    return new Pause(this.addChild('Pause', attributes as object))
  }
}

export class Hangup extends VoxXML {}
export class Pause extends VoxXML {}

export class Pay extends VoxXML {
  constructor(element: XMLBuilder) {
    super(element)
  }

  /**
   * Adds a "Prompt" verb to the "Pay" element
   *
   * @param attributes attributes for "Prompt"
   * @returns the "Prompt" element
   */
  prompt(attributes?: Attributes.PromptAttributes): Prompt {
    return new Prompt(this.addChild('Prompt', attributes as object))
  }
}

export class Play extends VoxXML {}
export class Record extends VoxXML {}
export class Redirect extends VoxXML {}
export class Reject extends VoxXML {}
export class Say extends VoxXML {}
export class Set extends VoxXML {}
export class Unset extends VoxXML {}

// NOUNS
export class DialNumber extends VoxXML {}

export class Prompt extends VoxXML {
  constructor(element: XMLBuilder) {
    super(element)
  }

  /**
   * Adds a "Play" verb to the "Prompt" element
   *
   * @param attributes attributes for "Play"
   * @param url the URL of the audio file to play
   * @returns the "Play" element
   */
  play(attributes?: Attributes.PlayAttributes, url?: string): Play {
    return new Play(this.addChild('Play', attributes as object, url))
  }

  /**
   * Adds a "Say" verb to the "Prompt" element
   *
   * @param attributes attributes for "Say"
   * @param text the text to say
   * @returns the "Say" element
   */
  say(attributes?: Attributes.SayAttributes, text?: string): Say {
    return new Say(this.addChild('Say', attributes as object, text))
  }
}

export class Flow extends VoxXML {}