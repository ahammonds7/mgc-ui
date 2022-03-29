locals {
  mime_types = jsondecode(file("${path.module}/mime.json"))
}

resource "aws_s3_bucket" "mgc-ui_bucket" {
  force_destroy = "true"
  bucket        = "mgc-prod-ui"
}

resource "aws_s3_object" "mgc-ui_object" {
  for_each = fileset("${path.module}/build", "**/*")

  bucket       = aws_s3_bucket.mgc-ui_bucket.bucket
  key          = each.value
  source       = "${path.module}/build/${each.value}"
  content_type = lookup(local.mime_types, regex("\\.[^.]+$", each.value), null)
}

output "fileset-results" {
  value = fileset("${path.module}/build", "**/*")
}
