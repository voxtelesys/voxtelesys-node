import { VoiceAPI } from "./voiceapi"
import { HTTPClient } from "../../http/client"
import { APIResource } from "../api"
import { VOICE_API_ROUTES } from "../../constants/api_routes"

/**
 * Voice API "calls" resource.
 */
export class CallsResource extends VoiceAPI implements APIResource {
  url = VOICE_API_ROUTES.V0.CALLS

  constructor(http: HTTPClient, apiToken: string) {
    super(http, apiToken)
  }

  /**
   * Create an outbound call.
   *
   * @param data options for creating the call
   * @returns information about the call
   */
  create(data: CreateCallRequest): Promise<CreateCallResponse> {
    const options = {
      url: this.url,
      method: 'POST',
      body: data
    }

    return this.apiRequest(options) as Promise<CreateCallResponse>
  }

  fetch(): Promise<unknown> {
    throw new Error("Method not implemented.")
  }

  list(): Promise<unknown> {
    throw new Error("Method not implemented.")
  }

  update(): Promise<unknown> {
    throw new Error("Method not implemented.")
  }

  delete(): Promise<unknown> {
    throw new Error("Method not implemented.")
  }
}

export interface CreateCallRequest {
  to: string
  from: string
  voice_trunk_group_id: number
  voxxml?: string
  timeout?: number
  url?: string
  method?: 'GET' | 'POST',
  record?: boolean,
  recording_status_callback?: string,
  recording_status_callback_method?: 'GET' | 'POST',
  recording_status_callback_event?: string,
  recording_track?: 'inbound' | 'outbound' | 'both',
  recording_channel?: 'mono' | 'dual',
  flow_guid?: string
}

export interface CreateCallResponse {
  status: string
}