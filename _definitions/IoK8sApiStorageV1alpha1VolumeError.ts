
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiStorageV1alpha1VolumeError.ts";

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export interface IIoK8sApiStorageV1alpha1VolumeError {
/**
 * String detailing the error encountered during Attach or Detach operation. This string maybe logged, so it should not contain sensitive information.
 */
"message"?: string;
/**
 * Time the error was encountered.
 */
"time"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export class IoK8sApiStorageV1alpha1VolumeError extends Model<IIoK8sApiStorageV1alpha1VolumeError> implements IIoK8sApiStorageV1alpha1VolumeError {

"message"?: string;

"time"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

Model.setSchema(IoK8sApiStorageV1alpha1VolumeError, "io.k8s.api.storage.v1alpha1.VolumeError", addSchema);

export {
  IIoK8sApiStorageV1alpha1VolumeError as IVolumeError,
  IoK8sApiStorageV1alpha1VolumeError as VolumeError
};
