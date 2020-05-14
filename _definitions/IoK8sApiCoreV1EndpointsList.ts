
import { IIoK8sApiCoreV1Endpoints } from "./IoK8sApiCoreV1Endpoints.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1EndpointsList.ts";

/**
 * EndpointsList is a list of endpoints.
 */
export interface IIoK8sApiCoreV1EndpointsList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * List of endpoints.
 */
"items": Array<IIoK8sApiCoreV1Endpoints>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "EndpointsList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * EndpointsList is a list of endpoints.
 */
export class IoK8sApiCoreV1EndpointsList extends Model<IIoK8sApiCoreV1EndpointsList> implements IIoK8sApiCoreV1EndpointsList {

apiVersion: IIoK8sApiCoreV1EndpointsList["apiVersion"] = IoK8sApiCoreV1EndpointsList["apiVersion"];

"items": Array<IIoK8sApiCoreV1Endpoints>;

kind: IIoK8sApiCoreV1EndpointsList["kind"] = IoK8sApiCoreV1EndpointsList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1EndpointsList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1EndpointsList["kind"] = "EndpointsList";
}

Model.setSchema(IoK8sApiCoreV1EndpointsList, "io.k8s.api.core.v1.EndpointsList", addSchema);

export {
  IIoK8sApiCoreV1EndpointsList as IEndpointsList,
  IoK8sApiCoreV1EndpointsList as EndpointsList
};
