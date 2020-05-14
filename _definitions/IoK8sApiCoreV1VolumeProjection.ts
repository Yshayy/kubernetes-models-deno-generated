
import { IIoK8sApiCoreV1ConfigMapProjection } from "./IoK8sApiCoreV1ConfigMapProjection.ts";

import { IIoK8sApiCoreV1DownwardAPIProjection } from "./IoK8sApiCoreV1DownwardAPIProjection.ts";

import { IIoK8sApiCoreV1SecretProjection } from "./IoK8sApiCoreV1SecretProjection.ts";

import { IIoK8sApiCoreV1ServiceAccountTokenProjection } from "./IoK8sApiCoreV1ServiceAccountTokenProjection.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1VolumeProjection.ts";

/**
 * Projection that may be projected along with other supported volume types
 */
export interface IIoK8sApiCoreV1VolumeProjection {
/**
 * information about the configMap data to project
 */
"configMap"?: IIoK8sApiCoreV1ConfigMapProjection;
/**
 * information about the downwardAPI data to project
 */
"downwardAPI"?: IIoK8sApiCoreV1DownwardAPIProjection;
/**
 * information about the secret data to project
 */
"secret"?: IIoK8sApiCoreV1SecretProjection;
/**
 * information about the serviceAccountToken data to project
 */
"serviceAccountToken"?: IIoK8sApiCoreV1ServiceAccountTokenProjection;
}

/**
 * Projection that may be projected along with other supported volume types
 */
export class IoK8sApiCoreV1VolumeProjection extends Model<IIoK8sApiCoreV1VolumeProjection> implements IIoK8sApiCoreV1VolumeProjection {

"configMap"?: IIoK8sApiCoreV1ConfigMapProjection;

"downwardAPI"?: IIoK8sApiCoreV1DownwardAPIProjection;

"secret"?: IIoK8sApiCoreV1SecretProjection;

"serviceAccountToken"?: IIoK8sApiCoreV1ServiceAccountTokenProjection;
}

Model.setSchema(IoK8sApiCoreV1VolumeProjection, "io.k8s.api.core.v1.VolumeProjection", addSchema);

export {
  IIoK8sApiCoreV1VolumeProjection as IVolumeProjection,
  IoK8sApiCoreV1VolumeProjection as VolumeProjection
};
