
import { IIoK8sApiPolicyV1beta1PodDisruptionBudget } from "./IoK8sApiPolicyV1beta1PodDisruptionBudget.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1PodDisruptionBudgetList.ts";

/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 */
export interface IIoK8sApiPolicyV1beta1PodDisruptionBudgetList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "policy/v1beta1";
"items": Array<IIoK8sApiPolicyV1beta1PodDisruptionBudget>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PodDisruptionBudgetList";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 */
export class IoK8sApiPolicyV1beta1PodDisruptionBudgetList extends Model<IIoK8sApiPolicyV1beta1PodDisruptionBudgetList> implements IIoK8sApiPolicyV1beta1PodDisruptionBudgetList {

apiVersion: IIoK8sApiPolicyV1beta1PodDisruptionBudgetList["apiVersion"] = IoK8sApiPolicyV1beta1PodDisruptionBudgetList["apiVersion"];
"items": Array<IIoK8sApiPolicyV1beta1PodDisruptionBudget>;

kind: IIoK8sApiPolicyV1beta1PodDisruptionBudgetList["kind"] = IoK8sApiPolicyV1beta1PodDisruptionBudgetList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiPolicyV1beta1PodDisruptionBudgetList["apiVersion"] = "policy/v1beta1";
static kind: IIoK8sApiPolicyV1beta1PodDisruptionBudgetList["kind"] = "PodDisruptionBudgetList";
}

Model.setSchema(IoK8sApiPolicyV1beta1PodDisruptionBudgetList, "io.k8s.api.policy.v1beta1.PodDisruptionBudgetList", addSchema);

export {
  IIoK8sApiPolicyV1beta1PodDisruptionBudgetList as IPodDisruptionBudgetList,
  IoK8sApiPolicyV1beta1PodDisruptionBudgetList as PodDisruptionBudgetList
};
