
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiSchedulingV1beta1PriorityClass.ts";

/**
 * DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 * @deprecated
 */
export interface IIoK8sApiSchedulingV1beta1PriorityClass {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "scheduling.k8s.io/v1beta1";
/**
 * description is an arbitrary string that usually provides guidelines on when this priority class should be used.
 */
"description"?: string;
/**
 * globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.
 */
"globalDefault"?: boolean;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PriorityClass";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature.
 */
"preemptionPolicy"?: string;
/**
 * The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.
 */
"value": number;
}

/**
 * DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 * @deprecated
 */
export class IoK8sApiSchedulingV1beta1PriorityClass extends Model<IIoK8sApiSchedulingV1beta1PriorityClass> implements IIoK8sApiSchedulingV1beta1PriorityClass {

apiVersion: IIoK8sApiSchedulingV1beta1PriorityClass["apiVersion"] = IoK8sApiSchedulingV1beta1PriorityClass["apiVersion"];

"description"?: string;

"globalDefault"?: boolean;

kind: IIoK8sApiSchedulingV1beta1PriorityClass["kind"] = IoK8sApiSchedulingV1beta1PriorityClass["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"preemptionPolicy"?: string;

"value": number;

static apiVersion: IIoK8sApiSchedulingV1beta1PriorityClass["apiVersion"] = "scheduling.k8s.io/v1beta1";
static kind: IIoK8sApiSchedulingV1beta1PriorityClass["kind"] = "PriorityClass";
}

Model.setSchema(IoK8sApiSchedulingV1beta1PriorityClass, "io.k8s.api.scheduling.v1beta1.PriorityClass", addSchema);

export {
  IIoK8sApiSchedulingV1beta1PriorityClass as IPriorityClass,
  IoK8sApiSchedulingV1beta1PriorityClass as PriorityClass
};
