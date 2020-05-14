
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1NodeSpec } from "./IoK8sApiCoreV1NodeSpec.ts";

import { IIoK8sApiCoreV1NodeStatus } from "./IoK8sApiCoreV1NodeStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Node.ts";

/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 */
export interface IIoK8sApiCoreV1Node {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Node";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the behavior of a node. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoreV1NodeSpec;
/**
 * Most recently observed status of the node. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiCoreV1NodeStatus;
}

/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 */
export class IoK8sApiCoreV1Node extends Model<IIoK8sApiCoreV1Node> implements IIoK8sApiCoreV1Node {

apiVersion: IIoK8sApiCoreV1Node["apiVersion"] = IoK8sApiCoreV1Node["apiVersion"];

kind: IIoK8sApiCoreV1Node["kind"] = IoK8sApiCoreV1Node["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiCoreV1NodeSpec;

"status"?: IIoK8sApiCoreV1NodeStatus;

static apiVersion: IIoK8sApiCoreV1Node["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1Node["kind"] = "Node";
}

Model.setSchema(IoK8sApiCoreV1Node, "io.k8s.api.core.v1.Node", addSchema);

export {
  IIoK8sApiCoreV1Node as INode,
  IoK8sApiCoreV1Node as Node
};
