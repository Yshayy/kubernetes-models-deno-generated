
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { IIoK8sApiAppsV1DeploymentStrategy } from "./IoK8sApiAppsV1DeploymentStrategy.ts";

import { IIoK8sApiCoreV1PodTemplateSpec } from "./IoK8sApiCoreV1PodTemplateSpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1DeploymentSpec.ts";

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export interface IIoK8sApiAppsV1DeploymentSpec {
/**
 * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
 */
"minReadySeconds"?: number;
/**
 * Indicates that the deployment is paused.
 */
"paused"?: boolean;
/**
 * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
 */
"progressDeadlineSeconds"?: number;
/**
 * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
 */
"replicas"?: number;
/**
 * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
 */
"revisionHistoryLimit"?: number;
/**
 * Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels.
 */
"selector": IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * The deployment strategy to use to replace existing pods with new ones.
 */
"strategy"?: IIoK8sApiAppsV1DeploymentStrategy;
/**
 * Template describes the pods that will be created.
 */
"template": IIoK8sApiCoreV1PodTemplateSpec;
}

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export class IoK8sApiAppsV1DeploymentSpec extends Model<IIoK8sApiAppsV1DeploymentSpec> implements IIoK8sApiAppsV1DeploymentSpec {

"minReadySeconds"?: number;

"paused"?: boolean;

"progressDeadlineSeconds"?: number;

"replicas"?: number;

"revisionHistoryLimit"?: number;

"selector": IIoK8sApimachineryPkgApisMetaV1LabelSelector;

"strategy"?: IIoK8sApiAppsV1DeploymentStrategy;

"template": IIoK8sApiCoreV1PodTemplateSpec;
}

Model.setSchema(IoK8sApiAppsV1DeploymentSpec, "io.k8s.api.apps.v1.DeploymentSpec", addSchema);

export {
  IIoK8sApiAppsV1DeploymentSpec as IDeploymentSpec,
  IoK8sApiAppsV1DeploymentSpec as DeploymentSpec
};
