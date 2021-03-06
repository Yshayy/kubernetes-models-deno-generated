
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiStorageV1beta1CSINodeSpec } from "./IoK8sApiStorageV1beta1CSINodeSpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiStorageV1beta1CSINode.ts";

/**
 * DEPRECATED - This group version of CSINode is deprecated by storage/v1/CSINode. See the release notes for more information. CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object.
 * @deprecated
 */
export interface IIoK8sApiStorageV1beta1CSINode {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "storage.k8s.io/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "CSINode";
/**
 * metadata.name must be the Kubernetes node name.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec is the specification of CSINode
 */
"spec": IIoK8sApiStorageV1beta1CSINodeSpec;
}

/**
 * DEPRECATED - This group version of CSINode is deprecated by storage/v1/CSINode. See the release notes for more information. CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object.
 * @deprecated
 */
export class IoK8sApiStorageV1beta1CSINode extends Model<IIoK8sApiStorageV1beta1CSINode> implements IIoK8sApiStorageV1beta1CSINode {

apiVersion: IIoK8sApiStorageV1beta1CSINode["apiVersion"] = IoK8sApiStorageV1beta1CSINode["apiVersion"];

kind: IIoK8sApiStorageV1beta1CSINode["kind"] = IoK8sApiStorageV1beta1CSINode["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec": IIoK8sApiStorageV1beta1CSINodeSpec;

static apiVersion: IIoK8sApiStorageV1beta1CSINode["apiVersion"] = "storage.k8s.io/v1beta1";
static kind: IIoK8sApiStorageV1beta1CSINode["kind"] = "CSINode";
}

Model.setSchema(IoK8sApiStorageV1beta1CSINode, "io.k8s.api.storage.v1beta1.CSINode", addSchema);

export {
  IIoK8sApiStorageV1beta1CSINode as ICSINode,
  IoK8sApiStorageV1beta1CSINode as CSINode
};
