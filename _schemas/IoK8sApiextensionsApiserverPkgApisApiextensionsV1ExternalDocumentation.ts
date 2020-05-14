import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "url": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ExternalDocumentation", schema);
}

