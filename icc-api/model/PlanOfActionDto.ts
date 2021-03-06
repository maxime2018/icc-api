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
import { CareTeamMembershipDto } from "./CareTeamMembershipDto"
import { CodeStubDto } from "./CodeStubDto"

import { decodeBase64 } from "./ModelHelper"

export class PlanOfActionDto {
  constructor(json: JSON | any) {
    Object.assign(this as PlanOfActionDto, json)
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
  valueDate?: number
  openingDate?: number
  closingDate?: number
  deadlineDate?: number
  name?: string
  descr?: string
  note?: string
  relevant?: boolean
  idOpeningContact?: string
  idClosingContact?: string
  status?: number
  documentIds?: Array<string>
  prescriberId?: string
  numberOfCares?: number
  careTeamMemberships?: Array<CareTeamMembershipDto>
  encryptedSelf?: string
}
