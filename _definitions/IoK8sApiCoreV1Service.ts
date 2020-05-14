
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1ServiceSpec } from "./IoK8sApiCoreV1ServiceSpec.ts";

import { IIoK8sApiCoreV1ServiceStatus } from "./IoK8sApiCoreV1ServiceStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Service.ts";

/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 */
export interface IIoK8sApiCoreV1Service {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Service";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the behavior of a service. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoreV1ServiceSpec;
/**
 * Most recently observed status of the service. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiCoreV1ServiceStatus;
}

/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 */
export class IoK8sApiCoreV1Service extends Model<IIoK8sApiCoreV1Service> implements IIoK8sApiCoreV1Service {

apiVersion: IIoK8sApiCoreV1Service["apiVersion"] = IoK8sApiCoreV1Service["apiVersion"];

kind: IIoK8sApiCoreV1Service["kind"] = IoK8sApiCoreV1Service["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiCoreV1ServiceSpec;

"status"?: IIoK8sApiCoreV1ServiceStatus;

static apiVersion: IIoK8sApiCoreV1Service["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1Service["kind"] = "Service";
}

Model.setSchema(IoK8sApiCoreV1Service, "io.k8s.api.core.v1.Service", addSchema);

export {
  IIoK8sApiCoreV1Service as IService,
  IoK8sApiCoreV1Service as Service
};
