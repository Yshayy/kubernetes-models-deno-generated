import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "format": "date-time",
  "type": "string"
};

export function addSchema() {
register("io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime", schema);
}

