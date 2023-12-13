import { APIClient, APIRequestOptions, APIException } from "../api"
import { HTTPClient, HTTPException } from "../../http/client"
import { VOICE_API_URL } from "../../constants/api_urls"

/**
 * Wrapper class for the Voice API resources.
 */
export abstract class VoiceAPI extends APIClient {
  protected constructor(http: HTTPClient, apiToken: string) {
    super(http, apiToken, VOICE_API_URL)
  }

  /**
   * Handler for all requests to the Voice API. Ensures proper authorization, base URL usage, and error handling.
   * 
   * @param options HTTP options
   * @returns the response from the API
   * @throws APIException if the response status is not 2xx
   */
  protected async apiRequest(options: APIRequestOptions): Promise<unknown> {
    const reqOptions = {
      headers: { authorization: `Bearer ${this.apiToken}` },
      baseURL: this.baseURL,
      url: options.url,
      method: options.method,
      body: options.body,
      query: options.query
    }

    try {
      const response = await this.httpClient.request(reqOptions)

      return response
    } catch (e: unknown) {
      const err = e as HTTPException
      const response = err.response as VoiceAPIErrorResponse

      throw new APIException(response?.message ?? 'internal server error', response?.error_id ?? '', err.status)
    }
  }
}

export interface VoiceAPIErrorResponse {
  status: string
  error_id: string
  message: string
}