
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthenticationV1UserInfo.ts";

/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export interface IIoK8sApiAuthenticationV1UserInfo {
/**
 * Any additional information provided by the authenticator.
 */
"extra"?: {
[key: string]: Array<string>;
};
/**
 * The names of groups this user is a part of.
 */
"groups"?: Array<string>;
/**
 * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
 */
"uid"?: string;
/**
 * The name that uniquely identifies this user among all active users.
 */
"username"?: string;
}

/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export class IoK8sApiAuthenticationV1UserInfo extends Model<IIoK8sApiAuthenticationV1UserInfo> implements IIoK8sApiAuthenticationV1UserInfo {

"extra"?: {
[key: string]: Array<string>;
};

"groups"?: Array<string>;

"uid"?: string;

"username"?: string;
}

Model.setSchema(IoK8sApiAuthenticationV1UserInfo, "io.k8s.api.authentication.v1.UserInfo", addSchema);

export {
  IIoK8sApiAuthenticationV1UserInfo as IUserInfo,
  IoK8sApiAuthenticationV1UserInfo as UserInfo
};
