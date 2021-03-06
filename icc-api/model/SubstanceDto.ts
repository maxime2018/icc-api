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
import { SamTextDto } from "./SamTextDto"
import { StandardSubstanceDto } from "./StandardSubstanceDto"

import { decodeBase64 } from "./ModelHelper"

export class SubstanceDto {
  constructor(json: JSON | any) {
    Object.assign(this as SubstanceDto, json)
  }

  id?: string
  rev?: string
  deletionDate?: number
  code?: string
  chemicalForm?: string
  name?: SamTextDto
  note?: SamTextDto
  standardSubstances?: Array<StandardSubstanceDto>
}
