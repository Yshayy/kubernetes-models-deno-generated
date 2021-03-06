
import { IIoK8sApimachineryPkgApisMetaV1MicroTime } from "./IoK8sApimachineryPkgApisMetaV1MicroTime.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoordinationV1beta1LeaseSpec.ts";

/**
 * LeaseSpec is a specification of a Lease.
 */
export interface IIoK8sApiCoordinationV1beta1LeaseSpec {
/**
 * acquireTime is a time when the current lease was acquired.
 */
"acquireTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;
/**
 * holderIdentity contains the identity of the holder of a current lease.
 */
"holderIdentity"?: string;
/**
 * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime.
 */
"leaseDurationSeconds"?: number;
/**
 * leaseTransitions is the number of transitions of a lease between holders.
 */
"leaseTransitions"?: number;
/**
 * renewTime is a time when the current holder of a lease has last updated the lease.
 */
"renewTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;
}

/**
 * LeaseSpec is a specification of a Lease.
 */
export class IoK8sApiCoordinationV1beta1LeaseSpec extends Model<IIoK8sApiCoordinationV1beta1LeaseSpec> implements IIoK8sApiCoordinationV1beta1LeaseSpec {

"acquireTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;

"holderIdentity"?: string;

"leaseDurationSeconds"?: number;

"leaseTransitions"?: number;

"renewTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;
}

Model.setSchema(IoK8sApiCoordinationV1beta1LeaseSpec, "io.k8s.api.coordination.v1beta1.LeaseSpec", addSchema);

export {
  IIoK8sApiCoordinationV1beta1LeaseSpec as ILeaseSpec,
  IoK8sApiCoordinationV1beta1LeaseSpec as LeaseSpec
};
