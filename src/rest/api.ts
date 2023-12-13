import { HTTPClient } from "../http/client"

export interface APIRequestOptions {
  url: string
  method?: string
  body?: unknown
  query?: object
}

export abstract class APIClient {
  protected readonly httpClient: HTTPClient
  protected readonly apiToken: string
  protected readonly baseURL: string

  constructor(http: HTTPClient, apiToken: string, baseURL: string) {
    this.httpClient = http
    this.apiToken = apiToken
    this.baseURL = baseURL
  }

  protected abstract apiRequest(options: APIRequestOptions): Promise<unknown>
}

export interface APIResource {
  url: string

  create(data: unknown): Promise<unknown>
  fetch(id: string): Promise<unknown>
  list(): Promise<unknown>
  update(id: string, data: unknown): Promise<unknown>
  delete(id: string): Promise<unknown>
}

export class APIException extends Error {
  status: number
  id: string

  constructor(message: string, id: string, status: number) {
    super(message)
    this.id = id
    this.status = status
  }
}
