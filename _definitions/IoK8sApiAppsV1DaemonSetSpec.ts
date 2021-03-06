
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { IIoK8sApiCoreV1PodTemplateSpec } from "./IoK8sApiCoreV1PodTemplateSpec.ts";

import { IIoK8sApiAppsV1DaemonSetUpdateStrategy } from "./IoK8sApiAppsV1DaemonSetUpdateStrategy.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1DaemonSetSpec.ts";

/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export interface IIoK8sApiAppsV1DaemonSetSpec {
/**
 * The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
 */
"minReadySeconds"?: number;
/**
 * The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
 */
"revisionHistoryLimit"?: number;
/**
 * A label query over pods that are managed by the daemon set. Must match in order to be controlled. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
 */
"selector": IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
 */
"template": IIoK8sApiCoreV1PodTemplateSpec;
/**
 * An update strategy to replace existing DaemonSet pods with new pods.
 */
"updateStrategy"?: IIoK8sApiAppsV1DaemonSetUpdateStrategy;
}

/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export class IoK8sApiAppsV1DaemonSetSpec extends Model<IIoK8sApiAppsV1DaemonSetSpec> implements IIoK8sApiAppsV1DaemonSetSpec {

"minReadySeconds"?: number;

"revisionHistoryLimit"?: number;

"selector": IIoK8sApimachineryPkgApisMetaV1LabelSelector;

"template": IIoK8sApiCoreV1PodTemplateSpec;

"updateStrategy"?: IIoK8sApiAppsV1DaemonSetUpdateStrategy;
}

Model.setSchema(IoK8sApiAppsV1DaemonSetSpec, "io.k8s.api.apps.v1.DaemonSetSpec", addSchema);

export {
  IIoK8sApiAppsV1DaemonSetSpec as IDaemonSetSpec,
  IoK8sApiAppsV1DaemonSetSpec as DaemonSetSpec
};
