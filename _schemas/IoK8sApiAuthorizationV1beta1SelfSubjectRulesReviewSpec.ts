import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "namespace": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.authorization.v1beta1.SelfSubjectRulesReviewSpec", schema);
}

