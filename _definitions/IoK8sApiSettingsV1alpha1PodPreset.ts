
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiSettingsV1alpha1PodPresetSpec } from "./IoK8sApiSettingsV1alpha1PodPresetSpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiSettingsV1alpha1PodPreset.ts";

/**
 * PodPreset is a policy resource that defines additional runtime requirements for a Pod.
 */
export interface IIoK8sApiSettingsV1alpha1PodPreset {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "settings.k8s.io/v1alpha1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PodPreset";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiSettingsV1alpha1PodPresetSpec;
}

/**
 * PodPreset is a policy resource that defines additional runtime requirements for a Pod.
 */
export class IoK8sApiSettingsV1alpha1PodPreset extends Model<IIoK8sApiSettingsV1alpha1PodPreset> implements IIoK8sApiSettingsV1alpha1PodPreset {

apiVersion: IIoK8sApiSettingsV1alpha1PodPreset["apiVersion"] = IoK8sApiSettingsV1alpha1PodPreset["apiVersion"];

kind: IIoK8sApiSettingsV1alpha1PodPreset["kind"] = IoK8sApiSettingsV1alpha1PodPreset["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiSettingsV1alpha1PodPresetSpec;

static apiVersion: IIoK8sApiSettingsV1alpha1PodPreset["apiVersion"] = "settings.k8s.io/v1alpha1";
static kind: IIoK8sApiSettingsV1alpha1PodPreset["kind"] = "PodPreset";
}

Model.setSchema(IoK8sApiSettingsV1alpha1PodPreset, "io.k8s.api.settings.v1alpha1.PodPreset", addSchema);

export {
  IIoK8sApiSettingsV1alpha1PodPreset as IPodPreset,
  IoK8sApiSettingsV1alpha1PodPreset as PodPreset
};
