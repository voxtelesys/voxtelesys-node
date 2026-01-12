import { fragment } from 'xmlbuilder2'
import { XMLBuilder } from 'xmlbuilder2/lib/interfaces'

/**
 * Wrapper class for xmlbuilder2.
 */
export class VoxXML {
  private element: XMLBuilder

  protected constructor(element: XMLBuilder) {
    this.element = element
  }

  protected addChild(name: string, text?: string): XMLBuilder
  protected addChild(name: string, attributes: object, text?: string): XMLBuilder
  protected addChild(name: string, attributes?: object | string, text?: string): XMLBuilder {
    if (typeof attributes === 'string') {
      text = attributes
      attributes = undefined
    }
    let node = this.element.ele(name, attributes)
    if (text) {
      //If the text includes tags, parse as XML, not text
      const hasTags = /<[a-z][\s\S]*>/i.test(text)
      if (hasTags) {
        const xmlFragment = fragment(text)
        node.import(xmlFragment)
        return node
      }

      node.txt(text)
    }

    return node
  }

  /**
   * Export the VoxXML as a string
   *
   * @param beautify if true, formats the XML string with line breaks and indentation
   * @returns stringified XML
   */
  toString(beautify: boolean = false): string {
    return this.element.end({ prettyPrint: beautify })
  }

  /**
   * Adds a comment to the current VoxXML element
   *
   * @param text the text in the comment
   */
  comment(text: string): void {
    this.element.com(text)
  }
}