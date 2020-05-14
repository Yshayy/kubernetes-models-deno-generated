import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "type": "object"
};

export function addSchema() {
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceStatus", schema);
}

