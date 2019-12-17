/**
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { XHR } from "./XHR"
import * as models from "../model/models"
export declare class iccBeDrugsApi {
  host: string
  headers: Array<XHR.Header>
  fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
  constructor(
    host: string,
    headers: any,
    fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
  )
  setHeaders(h: Array<XHR.Header>): void
  handleError(e: XHR.Data): void
  fullTextSearch(
    searchString: string,
    lang: string,
    classes?: string,
    types?: string,
    first?: number,
    count?: number
  ): Promise<Array<models.FullTextSearchResult> | any>
  getCheapAlternativesBasedOnAtc(
    medecinePackageId: string,
    lang: string
  ): Promise<Array<models.MppPreview> | any>
  getCheapAlternativesBasedOnInn(
    innClusterId: string,
    lang: string
  ): Promise<Array<models.MppPreview> | any>
  getChildrenDocs(docId: string, lang: string): Promise<Array<models.DocPreview> | any>
  getChildrenMps(docId: string, lang: string): Promise<Array<models.MpPreview> | any>
  getDocOfMp(medecineId: string, lang: string): Promise<models.DocPreview | any>
  getDocPreview(docId: string, lang: string): Promise<models.DocPreview | any>
  getExtentedMpInfosWithPackage(
    medecinePackageId: string,
    lang: string
  ): Promise<models.MpExtendedInfos | any>
  getFullMpInfosWithPackage(
    medecinePackageId: string,
    lang: string
  ): Promise<models.MpFullInfos | any>
  getInnClusters(
    searchString: string,
    lang: string,
    types?: string,
    first?: number,
    count?: number
  ): Promise<Array<models.MppPreview> | any>
  getInteractions(
    medecinePackageId: string,
    lang: string,
    otherCnks: string
  ): Promise<Array<models.IamFullInfos> | any>
  getMedecinePackages(
    searchString: string,
    lang: string,
    types?: string,
    first?: number,
    count?: number
  ): Promise<Array<models.MppPreview> | any>
  getMedecinePackagesFromIngredients(
    searchString: string,
    lang: string,
    types?: string,
    first?: number,
    count?: number
  ): Promise<Array<models.MppPreview> | any>
  getMpFromMpp(medecinePackageId: string, lang: string): Promise<models.MpPreview | any>
  getMppInfos(medecinePackageId: string, lang: string): Promise<models.MppInfos | any>
  getParentDoc(docId: string, lang: string): Promise<models.DocPreview | any>
  getRootDocs(lang: string): Promise<Array<models.DocPreview> | any>
}