
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NamespaceSpec.ts";

/**
 * NamespaceSpec describes the attributes on a Namespace.
 */
export interface IIoK8sApiCoreV1NamespaceSpec {
/**
 * Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
 */
"finalizers"?: Array<string>;
}

/**
 * NamespaceSpec describes the attributes on a Namespace.
 */
export class IoK8sApiCoreV1NamespaceSpec extends Model<IIoK8sApiCoreV1NamespaceSpec> implements IIoK8sApiCoreV1NamespaceSpec {

"finalizers"?: Array<string>;
}

Model.setSchema(IoK8sApiCoreV1NamespaceSpec, "io.k8s.api.core.v1.NamespaceSpec", addSchema);

export {
  IIoK8sApiCoreV1NamespaceSpec as INamespaceSpec,
  IoK8sApiCoreV1NamespaceSpec as NamespaceSpec
};
