/**
 * iCure Cloud API Documentation
 * Spring shop sample application
 *
 * OpenAPI spec version: v0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CodeStubDto } from "./CodeStubDto"
import { ServiceLinkDto } from "./ServiceLinkDto"

import { decodeBase64 } from "./ModelHelper"

export class SubContactDto {
  constructor(json: JSON | any) {
    Object.assign(this as SubContactDto, json)
  }

  id?: string
  created?: number
  modified?: number
  author?: string
  responsible?: string
  medicalLocationId?: string
  tags?: Array<CodeStubDto>
  codes?: Array<CodeStubDto>
  endOfLife?: number
  descr?: string
  protocol?: string
  status?: number
  formId?: string
  planOfActionId?: string
  healthElementId?: string
  classificationId?: string
  services?: Array<ServiceLinkDto>
  encryptedSelf?: string
}
