resource "aws_cloudfront_function" "lambda-router" {
  name    = "lambda-router-${var.DEPLOY_ENV}"
  runtime = "cloudfront-js-2.0"
  code    = file("${path.module}/router.js")
  comment = "used to route other domains to default domain"
}
