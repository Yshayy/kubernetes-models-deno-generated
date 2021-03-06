
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { IIoK8sApiCoreV1PodTemplateSpec } from "./IoK8sApiCoreV1PodTemplateSpec.ts";

import { IIoK8sApiAppsV1StatefulSetUpdateStrategy } from "./IoK8sApiAppsV1StatefulSetUpdateStrategy.ts";

import { IIoK8sApiCoreV1PersistentVolumeClaim } from "./IoK8sApiCoreV1PersistentVolumeClaim.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1StatefulSetSpec.ts";

/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export interface IIoK8sApiAppsV1StatefulSetSpec {
/**
 * podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.
 */
"podManagementPolicy"?: string;
/**
 * replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
 */
"replicas"?: number;
/**
 * revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.
 */
"revisionHistoryLimit"?: number;
/**
 * selector is a label query over pods that should match the replica count. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
 */
"selector": IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller.
 */
"serviceName": string;
/**
 * template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet.
 */
"template": IIoK8sApiCoreV1PodTemplateSpec;
/**
 * updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template.
 */
"updateStrategy"?: IIoK8sApiAppsV1StatefulSetUpdateStrategy;
/**
 * volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name.
 */
"volumeClaimTemplates"?: Array<IIoK8sApiCoreV1PersistentVolumeClaim>;
}

/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export class IoK8sApiAppsV1StatefulSetSpec extends Model<IIoK8sApiAppsV1StatefulSetSpec> implements IIoK8sApiAppsV1StatefulSetSpec {

"podManagementPolicy"?: string;

"replicas"?: number;

"revisionHistoryLimit"?: number;

"selector": IIoK8sApimachineryPkgApisMetaV1LabelSelector;

"serviceName": string;

"template": IIoK8sApiCoreV1PodTemplateSpec;

"updateStrategy"?: IIoK8sApiAppsV1StatefulSetUpdateStrategy;

"volumeClaimTemplates"?: Array<IIoK8sApiCoreV1PersistentVolumeClaim>;
}

Model.setSchema(IoK8sApiAppsV1StatefulSetSpec, "io.k8s.api.apps.v1.StatefulSetSpec", addSchema);

export {
  IIoK8sApiAppsV1StatefulSetSpec as IStatefulSetSpec,
  IoK8sApiAppsV1StatefulSetSpec as StatefulSetSpec
};
