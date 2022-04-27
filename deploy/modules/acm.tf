resource "aws_acm_certificate" "mgc-ui_cert" {
  domain_name               = local.domain_name
  validation_method         = "DNS"

  tags = {
    Name : local.domain_name
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "validation" {
  certificate_arn         = aws_acm_certificate.mgc-ui_cert.arn
  validation_record_fqdns = [for record in aws_route53_record.mgc-ui_record : record.fqdn]
}
