data "aws_route53_zone" "mgc-ui_zone" {
  name = var.root_domain_name
}

resource "aws_route53_record" "mgc-ui_record_A" {
  zone_id = data.aws_route53_zone.mgc-ui_zone.zone_id
  name    = var.fqdn
  type    = "A"

  alias {
    evaluate_target_health = false
    name                   = var.cf_domain_name
    zone_id                = var.cf_hosted_zone_id
  }
}
resource "aws_route53_record" "mgc-ui_record_AAAA" {
  zone_id = data.aws_route53_zone.mgc-ui_zone.zone_id
  name    = var.fqdn
  type    = "AAAA"

  alias {
    evaluate_target_health = false
    name                   = var.cf_domain_name
    zone_id                = var.cf_hosted_zone_id
  }
}
resource "aws_route53_record" "mgc-ui_record_CNAME" {
  zone_id = data.aws_route53_zone.mgc-ui_zone.zone_id
  name    = "www"
  type    = "CNAME"
  ttl     = 60
  records = [var.fqdn]
}
