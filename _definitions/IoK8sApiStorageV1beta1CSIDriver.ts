
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiStorageV1beta1CSIDriverSpec } from "./IoK8sApiStorageV1beta1CSIDriverSpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiStorageV1beta1CSIDriver.ts";

/**
 * CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. CSI drivers do not need to create the CSIDriver object directly. Instead they may use the cluster-driver-registrar sidecar container. When deployed with a CSI driver it automatically creates a CSIDriver object representing the driver. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced.
 */
export interface IIoK8sApiStorageV1beta1CSIDriver {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "storage.k8s.io/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "CSIDriver";
/**
 * Standard object metadata. metadata.Name indicates the name of the CSI driver that this object refers to; it MUST be the same name returned by the CSI GetPluginName() call for that driver. The driver name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), dots (.), and alphanumerics between. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the CSI Driver.
 */
"spec": IIoK8sApiStorageV1beta1CSIDriverSpec;
}

/**
 * CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. CSI drivers do not need to create the CSIDriver object directly. Instead they may use the cluster-driver-registrar sidecar container. When deployed with a CSI driver it automatically creates a CSIDriver object representing the driver. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced.
 */
export class IoK8sApiStorageV1beta1CSIDriver extends Model<IIoK8sApiStorageV1beta1CSIDriver> implements IIoK8sApiStorageV1beta1CSIDriver {

apiVersion: IIoK8sApiStorageV1beta1CSIDriver["apiVersion"] = IoK8sApiStorageV1beta1CSIDriver["apiVersion"];

kind: IIoK8sApiStorageV1beta1CSIDriver["kind"] = IoK8sApiStorageV1beta1CSIDriver["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec": IIoK8sApiStorageV1beta1CSIDriverSpec;

static apiVersion: IIoK8sApiStorageV1beta1CSIDriver["apiVersion"] = "storage.k8s.io/v1beta1";
static kind: IIoK8sApiStorageV1beta1CSIDriver["kind"] = "CSIDriver";
}

Model.setSchema(IoK8sApiStorageV1beta1CSIDriver, "io.k8s.api.storage.v1beta1.CSIDriver", addSchema);

export {
  IIoK8sApiStorageV1beta1CSIDriver as ICSIDriver,
  IoK8sApiStorageV1beta1CSIDriver as CSIDriver
};
