
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ExecAction.ts";

/**
 * ExecAction describes a "run in container" action.
 */
export interface IIoK8sApiCoreV1ExecAction {
/**
 * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
 */
"command"?: Array<string>;
}

/**
 * ExecAction describes a "run in container" action.
 */
export class IoK8sApiCoreV1ExecAction extends Model<IIoK8sApiCoreV1ExecAction> implements IIoK8sApiCoreV1ExecAction {

"command"?: Array<string>;
}

Model.setSchema(IoK8sApiCoreV1ExecAction, "io.k8s.api.core.v1.ExecAction", addSchema);

export {
  IIoK8sApiCoreV1ExecAction as IExecAction,
  IoK8sApiCoreV1ExecAction as ExecAction
};
