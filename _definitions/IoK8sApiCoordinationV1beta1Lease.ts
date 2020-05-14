
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoordinationV1beta1LeaseSpec } from "./IoK8sApiCoordinationV1beta1LeaseSpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoordinationV1beta1Lease.ts";

/**
 * Lease defines a lease concept.
 */
export interface IIoK8sApiCoordinationV1beta1Lease {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "coordination.k8s.io/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Lease";
/**
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the Lease. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoordinationV1beta1LeaseSpec;
}

/**
 * Lease defines a lease concept.
 */
export class IoK8sApiCoordinationV1beta1Lease extends Model<IIoK8sApiCoordinationV1beta1Lease> implements IIoK8sApiCoordinationV1beta1Lease {

apiVersion: IIoK8sApiCoordinationV1beta1Lease["apiVersion"] = IoK8sApiCoordinationV1beta1Lease["apiVersion"];

kind: IIoK8sApiCoordinationV1beta1Lease["kind"] = IoK8sApiCoordinationV1beta1Lease["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiCoordinationV1beta1LeaseSpec;

static apiVersion: IIoK8sApiCoordinationV1beta1Lease["apiVersion"] = "coordination.k8s.io/v1beta1";
static kind: IIoK8sApiCoordinationV1beta1Lease["kind"] = "Lease";
}

Model.setSchema(IoK8sApiCoordinationV1beta1Lease, "io.k8s.api.coordination.v1beta1.Lease", addSchema);

export {
  IIoK8sApiCoordinationV1beta1Lease as ILease,
  IoK8sApiCoordinationV1beta1Lease as Lease
};
