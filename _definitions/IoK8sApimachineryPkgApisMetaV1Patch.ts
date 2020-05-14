
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgApisMetaV1Patch.ts";

/**
 * Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.
 */
export interface IIoK8sApimachineryPkgApisMetaV1Patch {
}

/**
 * Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.
 */
export class IoK8sApimachineryPkgApisMetaV1Patch extends Model<IIoK8sApimachineryPkgApisMetaV1Patch> implements IIoK8sApimachineryPkgApisMetaV1Patch {
}

Model.setSchema(IoK8sApimachineryPkgApisMetaV1Patch, "io.k8s.apimachinery.pkg.apis.meta.v1.Patch", addSchema);

export {
  IIoK8sApimachineryPkgApisMetaV1Patch as IPatch,
  IoK8sApimachineryPkgApisMetaV1Patch as Patch
};
