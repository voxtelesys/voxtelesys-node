import { AxiosInstance } from 'axios'
import axios from 'axios'
import * as https from 'https'

export interface HTTPRequest {
  baseURL: string
  headers: object
  url: string
  method?: string
  body?: unknown
  query?: object
}

export interface HTTPResponse {
  status: number
  data: object
}

export class HTTPException extends Error {
  status: number
  response: object

  constructor(message: string, response: object, status: number) {
    super(message)
    this.status = status
    this.response = response
  }
}

/**
 * A simple HTTP client.
 */
export class HTTPClient {
  http: AxiosInstance

  public constructor(agent?: https.Agent) {
    agent ||= agent = new https.Agent({ keepAlive: true, timeout: 5000 })

    this.http = axios.create({
      httpsAgent: agent
    })
  }

  /**
   * Make an HTTP request.
   * 
   * @param options HTTP options
   * @returns HTTP response data and status
   * @throws HTTPException if the response status is 4xx or 5xx
   */
  public async request(options: HTTPRequest): Promise<HTTPResponse> {
    const response = await this.http({
      method: options.method || 'GET',
      baseURL: options.baseURL,
      url: options.url,
      data: options.body,
      headers: options.headers,
      params: options.query,
      validateStatus: null
    })

    if (response.status >= 400 && response.status < 500) {
      const message = `${response.status >= 500 ? 'server' : 'client'} error`
      throw new HTTPException(message, response.data, response.status)
    }

    return { data: response.data, status: response.status }
  }
}