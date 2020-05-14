
import { IIoK8sApiAppsV1Deployment } from "./IoK8sApiAppsV1Deployment.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1DeploymentList.ts";

/**
 * DeploymentList is a list of Deployments.
 */
export interface IIoK8sApiAppsV1DeploymentList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "apps/v1";
/**
 * Items is the list of Deployments.
 */
"items": Array<IIoK8sApiAppsV1Deployment>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "DeploymentList";
/**
 * Standard list metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * DeploymentList is a list of Deployments.
 */
export class IoK8sApiAppsV1DeploymentList extends Model<IIoK8sApiAppsV1DeploymentList> implements IIoK8sApiAppsV1DeploymentList {

apiVersion: IIoK8sApiAppsV1DeploymentList["apiVersion"] = IoK8sApiAppsV1DeploymentList["apiVersion"];

"items": Array<IIoK8sApiAppsV1Deployment>;

kind: IIoK8sApiAppsV1DeploymentList["kind"] = IoK8sApiAppsV1DeploymentList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiAppsV1DeploymentList["apiVersion"] = "apps/v1";
static kind: IIoK8sApiAppsV1DeploymentList["kind"] = "DeploymentList";
}

Model.setSchema(IoK8sApiAppsV1DeploymentList, "io.k8s.api.apps.v1.DeploymentList", addSchema);

export {
  IIoK8sApiAppsV1DeploymentList as IDeploymentList,
  IoK8sApiAppsV1DeploymentList as DeploymentList
};
