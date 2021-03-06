
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAppsV1DeploymentSpec } from "./IoK8sApiAppsV1DeploymentSpec.ts";

import { IIoK8sApiAppsV1DeploymentStatus } from "./IoK8sApiAppsV1DeploymentStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1Deployment.ts";

/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 */
export interface IIoK8sApiAppsV1Deployment {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "apps/v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Deployment";
/**
 * Standard object metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior of the Deployment.
 */
"spec"?: IIoK8sApiAppsV1DeploymentSpec;
/**
 * Most recently observed status of the Deployment.
 */
"status"?: IIoK8sApiAppsV1DeploymentStatus;
}

/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 */
export class IoK8sApiAppsV1Deployment extends Model<IIoK8sApiAppsV1Deployment> implements IIoK8sApiAppsV1Deployment {

apiVersion: IIoK8sApiAppsV1Deployment["apiVersion"] = IoK8sApiAppsV1Deployment["apiVersion"];

kind: IIoK8sApiAppsV1Deployment["kind"] = IoK8sApiAppsV1Deployment["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiAppsV1DeploymentSpec;

"status"?: IIoK8sApiAppsV1DeploymentStatus;

static apiVersion: IIoK8sApiAppsV1Deployment["apiVersion"] = "apps/v1";
static kind: IIoK8sApiAppsV1Deployment["kind"] = "Deployment";
}

Model.setSchema(IoK8sApiAppsV1Deployment, "io.k8s.api.apps.v1.Deployment", addSchema);

export {
  IIoK8sApiAppsV1Deployment as IDeployment,
  IoK8sApiAppsV1Deployment as Deployment
};
