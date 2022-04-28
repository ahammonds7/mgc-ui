terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket = "mgc-tf-state"
    key = "./prod"
    region = "us-east-1"
  }
}

module "deploy-prod" {
  source = "../modules"
  DEPLOY_ENV = "prod"
  URL_PREFIX = ""
}
