
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiStorageV1beta1VolumeError.ts";

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export interface IIoK8sApiStorageV1beta1VolumeError {
/**
 * String detailing the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information.
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
export class IoK8sApiStorageV1beta1VolumeError extends Model<IIoK8sApiStorageV1beta1VolumeError> implements IIoK8sApiStorageV1beta1VolumeError {

"message"?: string;

"time"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

Model.setSchema(IoK8sApiStorageV1beta1VolumeError, "io.k8s.api.storage.v1beta1.VolumeError", addSchema);

export {
  IIoK8sApiStorageV1beta1VolumeError as IVolumeError,
  IoK8sApiStorageV1beta1VolumeError as VolumeError
};
