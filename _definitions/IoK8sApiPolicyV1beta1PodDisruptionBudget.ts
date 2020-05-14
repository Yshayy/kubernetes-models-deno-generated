
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiPolicyV1beta1PodDisruptionBudgetSpec } from "./IoK8sApiPolicyV1beta1PodDisruptionBudgetSpec.ts";

import { IIoK8sApiPolicyV1beta1PodDisruptionBudgetStatus } from "./IoK8sApiPolicyV1beta1PodDisruptionBudgetStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1PodDisruptionBudget.ts";

/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
export interface IIoK8sApiPolicyV1beta1PodDisruptionBudget {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "policy/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PodDisruptionBudget";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior of the PodDisruptionBudget.
 */
"spec"?: IIoK8sApiPolicyV1beta1PodDisruptionBudgetSpec;
/**
 * Most recently observed status of the PodDisruptionBudget.
 */
"status"?: IIoK8sApiPolicyV1beta1PodDisruptionBudgetStatus;
}

/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
export class IoK8sApiPolicyV1beta1PodDisruptionBudget extends Model<IIoK8sApiPolicyV1beta1PodDisruptionBudget> implements IIoK8sApiPolicyV1beta1PodDisruptionBudget {

apiVersion: IIoK8sApiPolicyV1beta1PodDisruptionBudget["apiVersion"] = IoK8sApiPolicyV1beta1PodDisruptionBudget["apiVersion"];

kind: IIoK8sApiPolicyV1beta1PodDisruptionBudget["kind"] = IoK8sApiPolicyV1beta1PodDisruptionBudget["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiPolicyV1beta1PodDisruptionBudgetSpec;

"status"?: IIoK8sApiPolicyV1beta1PodDisruptionBudgetStatus;

static apiVersion: IIoK8sApiPolicyV1beta1PodDisruptionBudget["apiVersion"] = "policy/v1beta1";
static kind: IIoK8sApiPolicyV1beta1PodDisruptionBudget["kind"] = "PodDisruptionBudget";
}

Model.setSchema(IoK8sApiPolicyV1beta1PodDisruptionBudget, "io.k8s.api.policy.v1beta1.PodDisruptionBudget", addSchema);

export {
  IIoK8sApiPolicyV1beta1PodDisruptionBudget as IPodDisruptionBudget,
  IoK8sApiPolicyV1beta1PodDisruptionBudget as PodDisruptionBudget
};
