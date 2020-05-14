
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PodAffinityTerm.ts";

/**
 * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
 */
export interface IIoK8sApiCoreV1PodAffinityTerm {
/**
 * A label query over a set of resources, in this case pods.
 */
"labelSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
 */
"namespaces"?: Array<string>;
/**
 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
 */
"topologyKey": string;
}

/**
 * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
 */
export class IoK8sApiCoreV1PodAffinityTerm extends Model<IIoK8sApiCoreV1PodAffinityTerm> implements IIoK8sApiCoreV1PodAffinityTerm {

"labelSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

"namespaces"?: Array<string>;

"topologyKey": string;
}

Model.setSchema(IoK8sApiCoreV1PodAffinityTerm, "io.k8s.api.core.v1.PodAffinityTerm", addSchema);

export {
  IIoK8sApiCoreV1PodAffinityTerm as IPodAffinityTerm,
  IoK8sApiCoreV1PodAffinityTerm as PodAffinityTerm
};
