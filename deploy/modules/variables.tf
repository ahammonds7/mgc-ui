variable "DEPLOY_ENV" {
  type      = string
  nullable  = false
  description = "The environment to deploy to (qa, prod, etc.)"
}

variable "URL_PREFIX" {
  type      = string
  nullable  = true
  description = "The prefix for the url (should be blank for prod)"
}

locals {
  s3_origin_id = "mgc-ui-origin-id"
  root_domain_name = "magnoliagrovecreations.com"
  domain_name = "${var.URL_PREFIX}${local.root_domain_name}"
}
