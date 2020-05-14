
import { IIoK8sApiCoreV1NodeAffinity } from "./IoK8sApiCoreV1NodeAffinity.ts";

import { IIoK8sApiCoreV1PodAffinity } from "./IoK8sApiCoreV1PodAffinity.ts";

import { IIoK8sApiCoreV1PodAntiAffinity } from "./IoK8sApiCoreV1PodAntiAffinity.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Affinity.ts";

/**
 * Affinity is a group of affinity scheduling rules.
 */
export interface IIoK8sApiCoreV1Affinity {
/**
 * Describes node affinity scheduling rules for the pod.
 */
"nodeAffinity"?: IIoK8sApiCoreV1NodeAffinity;
/**
 * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
 */
"podAffinity"?: IIoK8sApiCoreV1PodAffinity;
/**
 * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
 */
"podAntiAffinity"?: IIoK8sApiCoreV1PodAntiAffinity;
}

/**
 * Affinity is a group of affinity scheduling rules.
 */
export class IoK8sApiCoreV1Affinity extends Model<IIoK8sApiCoreV1Affinity> implements IIoK8sApiCoreV1Affinity {

"nodeAffinity"?: IIoK8sApiCoreV1NodeAffinity;

"podAffinity"?: IIoK8sApiCoreV1PodAffinity;

"podAntiAffinity"?: IIoK8sApiCoreV1PodAntiAffinity;
}

Model.setSchema(IoK8sApiCoreV1Affinity, "io.k8s.api.core.v1.Affinity", addSchema);

export {
  IIoK8sApiCoreV1Affinity as IAffinity,
  IoK8sApiCoreV1Affinity as Affinity
};
