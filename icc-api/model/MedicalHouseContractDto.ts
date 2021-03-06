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

import { decodeBase64 } from "./ModelHelper"

export class MedicalHouseContractDto {
  constructor(json: JSON | any) {
    Object.assign(this as MedicalHouseContractDto, json)
  }

  contractId?: string
  validFrom?: number
  validTo?: number
  mmNihii?: string
  hcpId?: string
  changeType?: MedicalHouseContractDto.ChangeTypeEnum
  parentContractId?: string
  changedBy?: string
  startOfContract?: number
  startOfCoverage?: number
  endOfContract?: number
  endOfCoverage?: number
  kine?: boolean
  gp?: boolean
  nurse?: boolean
  noKine?: boolean
  noGp?: boolean
  noNurse?: boolean
  unsubscriptionReasonId?: number
  startOfSuspension?: number
  endOfSuspension?: number
  suspensionReason?: MedicalHouseContractDto.SuspensionReasonEnum
  suspensionSource?: string
  forcedSuspension?: boolean
  signatureType?: MedicalHouseContractDto.SignatureTypeEnum
  status?: number
  receipts?: { [key: string]: string }
  encryptedSelf?: string
}
export namespace MedicalHouseContractDto {
  export type ChangeTypeEnum =
    | "inscriptionStart"
    | "inscriptionEnd"
    | "suspension"
    | "coverageChange"
  export const ChangeTypeEnum = {
    InscriptionStart: "inscriptionStart" as ChangeTypeEnum,
    InscriptionEnd: "inscriptionEnd" as ChangeTypeEnum,
    Suspension: "suspension" as ChangeTypeEnum,
    CoverageChange: "coverageChange" as ChangeTypeEnum
  }
  export type SuspensionReasonEnum =
    | "notInsured"
    | "noReasonGiven"
    | "isHospitalized"
    | "outsideOfCountry"
    | "changeOfMutuality"
  export const SuspensionReasonEnum = {
    NotInsured: "notInsured" as SuspensionReasonEnum,
    NoReasonGiven: "noReasonGiven" as SuspensionReasonEnum,
    IsHospitalized: "isHospitalized" as SuspensionReasonEnum,
    OutsideOfCountry: "outsideOfCountry" as SuspensionReasonEnum,
    ChangeOfMutuality: "changeOfMutuality" as SuspensionReasonEnum
  }
  export type SignatureTypeEnum =
    | "holderEid"
    | "holderPaper"
    | "legalrepresentativeEid"
    | "legalrepresentativePaper"
  export const SignatureTypeEnum = {
    HolderEid: "holderEid" as SignatureTypeEnum,
    HolderPaper: "holderPaper" as SignatureTypeEnum,
    LegalrepresentativeEid: "legalrepresentativeEid" as SignatureTypeEnum,
    LegalrepresentativePaper: "legalrepresentativePaper" as SignatureTypeEnum
  }
}
