resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "cloudfront-mgc-ui-origin"
}

resource "aws_cloudfront_distribution" "mgc-ui_distribution" {
  origin {
    domain_name = aws_s3_bucket.mgc-ui_bucket.bucket_regional_domain_name
    origin_id   = local.s3_origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }

  aliases = [
    local.domain_name,
    'www.' + local.domain_name
  ]

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  tags = {
    Environment = var.DEPLOY_ENV
  }

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.mgc.arn
    ssl_support_method  = "sni-only"
  }
}

output "cloudfront_dns" {
  value = aws_cloudfront_distribution.mgc-ui_distribution.domain_name
}

data "aws_iam_policy_document" "cf_s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.mgc-ui_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "cf_s3_bucket_policy" {
  bucket = aws_s3_bucket.mgc-ui_bucket.id
  policy = data.aws_iam_policy_document.cf_s3_policy.json
}

resource "aws_s3_bucket_public_access_block" "cf_s3_bucket_acl" {
  bucket = aws_s3_bucket.mgc-ui_bucket.id

  block_public_acls   = true
  block_public_policy = true
  //ignore_public_acls      = true
  //restrict_public_buckets = true
}

output "mgc-ui_distribution" {
  value = aws_cloudfront_distribution.mgc-ui_distribution
}
