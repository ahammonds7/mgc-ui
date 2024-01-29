module "main-domain" {
  source            = "./route-53-domain"
  root_domain_name  = local.root_domain_name
  fqdn              = "${var.URL_PREFIX}${local.root_domain_name}"
  cf_domain_name    = aws_cloudfront_distribution.mgc-ui_distribution.domain_name
  cf_hosted_zone_id = aws_cloudfront_distribution.mgc-ui_distribution.hosted_zone_id
}

module "redirect-domain" {
  for_each          = toset(local.other_root_domain_names)
  source            = "./route-53-domain"
  root_domain_name  = each.key
  fqdn              = "${var.URL_PREFIX}${each.key}"
  cf_domain_name    = aws_cloudfront_distribution.mgc-ui_distribution.domain_name
  cf_hosted_zone_id = aws_cloudfront_distribution.mgc-ui_distribution.hosted_zone_id
}
