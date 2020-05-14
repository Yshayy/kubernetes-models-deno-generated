
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1HTTPHeader.ts";

/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export interface IIoK8sApiCoreV1HTTPHeader {
/**
 * The header field name
 */
"name": string;
/**
 * The header field value
 */
"value": string;
}

/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export class IoK8sApiCoreV1HTTPHeader extends Model<IIoK8sApiCoreV1HTTPHeader> implements IIoK8sApiCoreV1HTTPHeader {

"name": string;

"value": string;
}

Model.setSchema(IoK8sApiCoreV1HTTPHeader, "io.k8s.api.core.v1.HTTPHeader", addSchema);

export {
  IIoK8sApiCoreV1HTTPHeader as IHTTPHeader,
  IoK8sApiCoreV1HTTPHeader as HTTPHeader
};
