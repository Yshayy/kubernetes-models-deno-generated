
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAuthenticationV1TokenRequestSpec } from "./IoK8sApiAuthenticationV1TokenRequestSpec.ts";

import { IIoK8sApiAuthenticationV1TokenRequestStatus } from "./IoK8sApiAuthenticationV1TokenRequestStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthenticationV1TokenRequest.ts";

/**
 * TokenRequest requests a token for a given service account.
 */
export interface IIoK8sApiAuthenticationV1TokenRequest {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "authentication.k8s.io/v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "TokenRequest";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiAuthenticationV1TokenRequestSpec;
"status"?: IIoK8sApiAuthenticationV1TokenRequestStatus;
}

/**
 * TokenRequest requests a token for a given service account.
 */
export class IoK8sApiAuthenticationV1TokenRequest extends Model<IIoK8sApiAuthenticationV1TokenRequest> implements IIoK8sApiAuthenticationV1TokenRequest {

apiVersion: IIoK8sApiAuthenticationV1TokenRequest["apiVersion"] = IoK8sApiAuthenticationV1TokenRequest["apiVersion"];

kind: IIoK8sApiAuthenticationV1TokenRequest["kind"] = IoK8sApiAuthenticationV1TokenRequest["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiAuthenticationV1TokenRequestSpec;
"status"?: IIoK8sApiAuthenticationV1TokenRequestStatus;

static apiVersion: IIoK8sApiAuthenticationV1TokenRequest["apiVersion"] = "authentication.k8s.io/v1";
static kind: IIoK8sApiAuthenticationV1TokenRequest["kind"] = "TokenRequest";
}

Model.setSchema(IoK8sApiAuthenticationV1TokenRequest, "io.k8s.api.authentication.v1.TokenRequest", addSchema);

export {
  IIoK8sApiAuthenticationV1TokenRequest as ITokenRequest,
  IoK8sApiAuthenticationV1TokenRequest as TokenRequest
};
