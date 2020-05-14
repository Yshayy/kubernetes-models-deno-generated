
import { IIoK8sApiCoreV1EnvVar } from "./IoK8sApiCoreV1EnvVar.ts";

import { IIoK8sApiCoreV1EnvFromSource } from "./IoK8sApiCoreV1EnvFromSource.ts";

import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { IIoK8sApiCoreV1VolumeMount } from "./IoK8sApiCoreV1VolumeMount.ts";

import { IIoK8sApiCoreV1Volume } from "./IoK8sApiCoreV1Volume.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiSettingsV1alpha1PodPresetSpec.ts";

/**
 * PodPresetSpec is a description of a pod preset.
 */
export interface IIoK8sApiSettingsV1alpha1PodPresetSpec {
/**
 * Env defines the collection of EnvVar to inject into containers.
 */
"env"?: Array<IIoK8sApiCoreV1EnvVar>;
/**
 * EnvFrom defines the collection of EnvFromSource to inject into containers.
 */
"envFrom"?: Array<IIoK8sApiCoreV1EnvFromSource>;
/**
 * Selector is a label query over a set of resources, in this case pods. Required.
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * VolumeMounts defines the collection of VolumeMount to inject into containers.
 */
"volumeMounts"?: Array<IIoK8sApiCoreV1VolumeMount>;
/**
 * Volumes defines the collection of Volume to inject into the pod.
 */
"volumes"?: Array<IIoK8sApiCoreV1Volume>;
}

/**
 * PodPresetSpec is a description of a pod preset.
 */
export class IoK8sApiSettingsV1alpha1PodPresetSpec extends Model<IIoK8sApiSettingsV1alpha1PodPresetSpec> implements IIoK8sApiSettingsV1alpha1PodPresetSpec {

"env"?: Array<IIoK8sApiCoreV1EnvVar>;

"envFrom"?: Array<IIoK8sApiCoreV1EnvFromSource>;

"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

"volumeMounts"?: Array<IIoK8sApiCoreV1VolumeMount>;

"volumes"?: Array<IIoK8sApiCoreV1Volume>;
}

Model.setSchema(IoK8sApiSettingsV1alpha1PodPresetSpec, "io.k8s.api.settings.v1alpha1.PodPresetSpec", addSchema);

export {
  IIoK8sApiSettingsV1alpha1PodPresetSpec as IPodPresetSpec,
  IoK8sApiSettingsV1alpha1PodPresetSpec as PodPresetSpec
};
