data "aws_acm_certificate" "mgc" {
  domain = local.root_domain_name
}
