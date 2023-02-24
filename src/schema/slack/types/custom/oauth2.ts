import SchemaTypes from "../../../schema_types.ts";
import { DefineType } from "../../../../types/mod.ts";

export const oAuthTypeId = "slack#/types/credential/oauth";

export const OAuthType = DefineType({
  name: oAuthTypeId,
  type: SchemaTypes.object,
  properties: {
    credential_source: {
      type: SchemaTypes.string,
      description: "Which user's OAuth credentials that should be used", // TODO: Is there a shared description for this?
      enum: ["DEVELOPER", "END_USER"], // TODO: Double check these are the available values
    },
  },
  required: [], // TODO [brk-chg]: Make `credential_source` required
});
