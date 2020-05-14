
import { IIoK8sApiSettingsV1alpha1PodPreset } from "./IoK8sApiSettingsV1alpha1PodPreset.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiSettingsV1alpha1PodPresetList.ts";

/**
 * PodPresetList is a list of PodPreset objects.
 */
export interface IIoK8sApiSettingsV1alpha1PodPresetList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "settings.k8s.io/v1alpha1";
/**
 * Items is a list of schema objects.
 */
"items": Array<IIoK8sApiSettingsV1alpha1PodPreset>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PodPresetList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PodPresetList is a list of PodPreset objects.
 */
export class IoK8sApiSettingsV1alpha1PodPresetList extends Model<IIoK8sApiSettingsV1alpha1PodPresetList> implements IIoK8sApiSettingsV1alpha1PodPresetList {

apiVersion: IIoK8sApiSettingsV1alpha1PodPresetList["apiVersion"] = IoK8sApiSettingsV1alpha1PodPresetList["apiVersion"];

"items": Array<IIoK8sApiSettingsV1alpha1PodPreset>;

kind: IIoK8sApiSettingsV1alpha1PodPresetList["kind"] = IoK8sApiSettingsV1alpha1PodPresetList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiSettingsV1alpha1PodPresetList["apiVersion"] = "settings.k8s.io/v1alpha1";
static kind: IIoK8sApiSettingsV1alpha1PodPresetList["kind"] = "PodPresetList";
}

Model.setSchema(IoK8sApiSettingsV1alpha1PodPresetList, "io.k8s.api.settings.v1alpha1.PodPresetList", addSchema);

export {
  IIoK8sApiSettingsV1alpha1PodPresetList as IPodPresetList,
  IoK8sApiSettingsV1alpha1PodPresetList as PodPresetList
};
