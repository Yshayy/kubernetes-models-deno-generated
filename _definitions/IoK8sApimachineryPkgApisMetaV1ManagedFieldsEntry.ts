
import { IIoK8sApimachineryPkgApisMetaV1FieldsV1 } from "./IoK8sApimachineryPkgApisMetaV1FieldsV1.ts";

import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry.ts";

/**
 * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
 */
export interface IIoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry {
/**
 * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
 */
"apiVersion"?: string;
/**
 * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
 */
"fieldsType"?: string;
/**
 * FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.
 */
"fieldsV1"?: IIoK8sApimachineryPkgApisMetaV1FieldsV1;
/**
 * Manager is an identifier of the workflow managing these fields.
 */
"manager"?: string;
/**
 * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
 */
"operation"?: string;
/**
 * Time is timestamp of when these fields were set. It should always be empty if Operation is 'Apply'
 */
"time"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

/**
 * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
 */
export class IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry extends Model<IIoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry> implements IIoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry {

"apiVersion"?: string;

"fieldsType"?: string;

"fieldsV1"?: IIoK8sApimachineryPkgApisMetaV1FieldsV1;

"manager"?: string;

"operation"?: string;

"time"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

Model.setSchema(IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry, "io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry", addSchema);

export {
  IIoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry as IManagedFieldsEntry,
  IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry as ManagedFieldsEntry
};
