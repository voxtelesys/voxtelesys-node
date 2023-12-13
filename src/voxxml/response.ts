import { Base } from './base'
import * as xmlBuilder from 'xmlbuilder2'

/**
 * Class for building VoxXML voice responses.
 */
export class VoiceResponse extends Base {
  constructor() {
    // create a base <Response> element
    super(xmlBuilder.create({ version: '1.0', encoding: 'UTF-8' }).ele('Response'))
  }
}