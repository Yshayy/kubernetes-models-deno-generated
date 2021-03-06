import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrBool } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrBool.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSON } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSON.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrStringArray } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrStringArray.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ExternalDocumentation } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ExternalDocumentation.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrArray } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrArray.ts";
const schema: object = {
  "properties": {
    "$ref": {
      "type": "string"
    },
    "$schema": {
      "type": "string"
    },
    "additionalItems": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaPropsOrBool#"
    },
    "additionalProperties": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaPropsOrBool#"
    },
    "allOf": {
      "items": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#"
      },
      "type": "array"
    },
    "anyOf": {
      "items": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#"
      },
      "type": "array"
    },
    "default": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSON#"
    },
    "definitions": {
      "additionalProperties": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#"
      },
      "type": "object"
    },
    "dependencies": {
      "additionalProperties": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaPropsOrStringArray#"
      },
      "type": "object"
    },
    "enum": {
      "items": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSON#"
      },
      "type": "array"
    },
    "example": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSON#"
    },
    "exclusiveMaximum": {
      "type": "boolean"
    },
    "exclusiveMinimum": {
      "type": "boolean"
    },
    "externalDocs": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.ExternalDocumentation#"
    },
    "format": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "items": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaPropsOrArray#"
    },
    "maxItems": {
      "format": "int64",
      "type": "integer"
    },
    "maxLength": {
      "format": "int64",
      "type": "integer"
    },
    "maxProperties": {
      "format": "int64",
      "type": "integer"
    },
    "maximum": {
      "format": "double",
      "type": "number"
    },
    "minItems": {
      "format": "int64",
      "type": "integer"
    },
    "minLength": {
      "format": "int64",
      "type": "integer"
    },
    "minProperties": {
      "format": "int64",
      "type": "integer"
    },
    "minimum": {
      "format": "double",
      "type": "number"
    },
    "multipleOf": {
      "format": "double",
      "type": "number"
    },
    "not": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#"
    },
    "nullable": {
      "type": "boolean"
    },
    "oneOf": {
      "items": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#"
      },
      "type": "array"
    },
    "pattern": {
      "type": "string"
    },
    "patternProperties": {
      "additionalProperties": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#"
      },
      "type": "object"
    },
    "properties": {
      "additionalProperties": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#"
      },
      "type": "object"
    },
    "required": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "title": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "uniqueItems": {
      "type": "boolean"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrBool();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSON();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrStringArray();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ExternalDocumentation();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrArray();
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps", schema);
}

