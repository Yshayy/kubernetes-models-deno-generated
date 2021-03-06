
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ObjectReference.ts";

/**
 * ObjectReference contains enough information to let you inspect or modify the referred object.
 */
export interface IIoK8sApiCoreV1ObjectReference {
/**
 * API version of the referent.
 */
"apiVersion"?: string;
/**
 * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
 */
"fieldPath"?: string;
/**
 * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind"?: string;
/**
 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
"name"?: string;
/**
 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
 */
"namespace"?: string;
/**
 * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
 */
"resourceVersion"?: string;
/**
 * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
 */
"uid"?: string;
}

/**
 * ObjectReference contains enough information to let you inspect or modify the referred object.
 */
export class IoK8sApiCoreV1ObjectReference extends Model<IIoK8sApiCoreV1ObjectReference> implements IIoK8sApiCoreV1ObjectReference {

"apiVersion"?: string;

"fieldPath"?: string;

"kind"?: string;

"name"?: string;

"namespace"?: string;

"resourceVersion"?: string;

"uid"?: string;
}

Model.setSchema(IoK8sApiCoreV1ObjectReference, "io.k8s.api.core.v1.ObjectReference", addSchema);

export {
  IIoK8sApiCoreV1ObjectReference as IObjectReference,
  IoK8sApiCoreV1ObjectReference as ObjectReference
};
