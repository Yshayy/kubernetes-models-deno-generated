
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1FlowDistinguisherMethod.ts";

/**
 * FlowDistinguisherMethod specifies the method of a flow distinguisher.
 */
export interface IIoK8sApiFlowcontrolV1alpha1FlowDistinguisherMethod {
/**
 * `type` is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required.
 */
"type": string;
}

/**
 * FlowDistinguisherMethod specifies the method of a flow distinguisher.
 */
export class IoK8sApiFlowcontrolV1alpha1FlowDistinguisherMethod extends Model<IIoK8sApiFlowcontrolV1alpha1FlowDistinguisherMethod> implements IIoK8sApiFlowcontrolV1alpha1FlowDistinguisherMethod {

"type": string;
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1FlowDistinguisherMethod, "io.k8s.api.flowcontrol.v1alpha1.FlowDistinguisherMethod", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1FlowDistinguisherMethod as IFlowDistinguisherMethod,
  IoK8sApiFlowcontrolV1alpha1FlowDistinguisherMethod as FlowDistinguisherMethod
};
