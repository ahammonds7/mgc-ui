#resource "aws_route53_zone" "mgc-ui_zone" {
#  name = local.domain_name
#}
#
#resource "aws_route53_record" "mgc-ui_record_A" {
#  zone_id = aws_route53_zone.mgc-ui_zone.zone_id
#  name    = local.domain_name
#  type = "A"
#
#  alias {
#    evaluate_target_health = false
#    name                   = aws_cloudfront_distribution.mgc-ui_distribution.domain_name
#    zone_id                = aws_cloudfront_distribution.mgc-ui_distribution.hosted_zone_id
#  }
#}
#resource "aws_route53_record" "mgc-ui_record_AAAA" {
#  zone_id = aws_route53_zone.mgc-ui_zone.zone_id
#  name    = local.domain_name
#  type = "AAAA"
#
#  alias {
#    evaluate_target_health = false
#    name                   = aws_cloudfront_distribution.mgc-ui_distribution.domain_name
#    zone_id                = aws_cloudfront_distribution.mgc-ui_distribution.hosted_zone_id
#  }
#}
