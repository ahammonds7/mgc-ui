locals {
  domain_name = "magnoliagrovecreations.com"
}

resource "aws_route53_zone" "mgc-ui_zone" {
  name = local.domain_name
}

resource "aws_route53_record" "mgc-ui_record" {
  for_each = {
    for dvo in aws_acm_certificate.mgc-ui_cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.mgc-ui_zone.zone_id
}
resource "aws_route53_record" "mgc-ui_record_A" {
  zone_id = aws_route53_zone.mgc-ui_zone.zone_id
  name    = local.domain_name
  type = "A"

  alias {
    evaluate_target_health = false
    name                   = "${aws_cloudfront_distribution.mgc-ui_distribution.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.mgc-ui_distribution.hosted_zone_id}"
  }
}
resource "aws_route53_record" "mgc-ui_record_AAAA" {
  zone_id = aws_route53_zone.mgc-ui_zone.zone_id
  name    = local.domain_name
  type = "AAAA"

  alias {
    evaluate_target_health = false
    name                   = "${aws_cloudfront_distribution.mgc-ui_distribution.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.mgc-ui_distribution.hosted_zone_id}"
  }
}

output "s3_website_endpoint" {
  value = aws_s3_bucket.mgc-ui_bucket.website_endpoint
}

output "cdn_domain" {
  value = aws_cloudfront_distribution.mgc-ui_distribution.domain_name
}
