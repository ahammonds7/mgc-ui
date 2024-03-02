variable "root_domain_name" {
  type      = string
  nullable  = false
  description = "The root domain name that the route 53 zone is under"
}

variable "fqdn" {
  type      = string
  nullable  = false
  description = "The fqdn to setup"
}

variable "cf_domain_name" {
  type      = string
  nullable  = false
  description = "The fqdn to setup"
}

variable "cf_hosted_zone_id" {
  type      = string
  nullable  = false
  description = "The fqdn to setup"
}
