/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
import { ApiAiConstants } from "./ApiAiConstants";
import { ApiAiClientConfigurationError } from "./Errors";
import { EventRequest } from "./Request/EventRequest";
import TextRequest from "./Request/TextRequest";
export * from "./Interfaces";
export { ApiAiConstants } from "./ApiAiConstants";
export default class ApiAiClient {
    constructor(options) {
        if (!options || !options.accessToken) {
            throw new ApiAiClientConfigurationError("Access token is required for new ApiAi.Client instance");
        }
        this.accessToken = options.accessToken;
        this.apiLang = options.lang || ApiAiConstants.DEFAULT_CLIENT_LANG;
        this.apiVersion = options.version || ApiAiConstants.DEFAULT_API_VERSION;
        this.apiBaseUrl = options.baseUrl || ApiAiConstants.DEFAULT_BASE_URL;
        this.sessionId = options.sessionId || this.guid();
    }
    textRequest(query, options = {}) {
        if (!query) {
            throw new ApiAiClientConfigurationError("Query should not be empty");
        }
        options.query = query;
        return new TextRequest(this, options).perform();
    }
    eventRequest(eventName, eventData = {}, options = {}) {
        if (!eventName) {
            throw new ApiAiClientConfigurationError("Event name can not be empty");
        }
        options.event = { name: eventName, data: eventData };
        return new EventRequest(this, options).perform();
    }
    // @todo: implement local tts request
    /*public ttsRequest(query) {
        if (!query) {
            throw new ApiAiClientConfigurationError("Query should not be empty");
        }
        return new TTSRequest(this).makeTTSRequest(query);
    }*/
    /*public userEntitiesRequest(options: IRequestOptions = {}): UserEntitiesRequest {
        return new UserEntitiesRequest(this, options);
    }*/
    getAccessToken() {
        return this.accessToken;
    }
    getApiVersion() {
        return (this.apiVersion) ? this.apiVersion : ApiAiConstants.DEFAULT_API_VERSION;
    }
    getApiLang() {
        return (this.apiLang) ? this.apiLang : ApiAiConstants.DEFAULT_CLIENT_LANG;
    }
    getApiBaseUrl() {
        return (this.apiBaseUrl) ? this.apiBaseUrl : ApiAiConstants.DEFAULT_BASE_URL;
    }
    setSessionId(sessionId) {
        this.sessionId = sessionId;
    }
    getSessionId() {
        return this.sessionId;
    }
    /**
     * generates new random UUID
     * @returns {string}
     */
    guid() {
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
            s4() + "-" + s4() + s4() + s4();
    }
}
