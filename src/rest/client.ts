import { CallsResource } from "./voiceapi/calls"
import { HTTPClient } from "../http/client"
import * as https from 'https'

export interface VoxClientOptions {
  httpsAgent?: https.Agent
}


export class VoxClient {
  private readonly apiToken: string
  private readonly httpClient: HTTPClient

  constructor(apiToken: string, options: VoxClientOptions = {}) {
    this.apiToken = apiToken
    this.httpClient = new HTTPClient(options.httpsAgent)
  }

  get calls(): CallsResource {
    return new CallsResource(this.httpClient, this.apiToken)
  }
}