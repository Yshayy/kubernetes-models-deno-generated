
import { IIoK8sApiStorageV1CSINodeDriver } from "./IoK8sApiStorageV1CSINodeDriver.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiStorageV1CSINodeSpec.ts";

/**
 * CSINodeSpec holds information about the specification of all CSI drivers installed on a node
 */
export interface IIoK8sApiStorageV1CSINodeSpec {
/**
 * drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
 */
"drivers": Array<IIoK8sApiStorageV1CSINodeDriver>;
}

/**
 * CSINodeSpec holds information about the specification of all CSI drivers installed on a node
 */
export class IoK8sApiStorageV1CSINodeSpec extends Model<IIoK8sApiStorageV1CSINodeSpec> implements IIoK8sApiStorageV1CSINodeSpec {

"drivers": Array<IIoK8sApiStorageV1CSINodeDriver>;
}

Model.setSchema(IoK8sApiStorageV1CSINodeSpec, "io.k8s.api.storage.v1.CSINodeSpec", addSchema);

export {
  IIoK8sApiStorageV1CSINodeSpec as ICSINodeSpec,
  IoK8sApiStorageV1CSINodeSpec as CSINodeSpec
};
