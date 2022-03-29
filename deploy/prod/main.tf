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
    region = "us-east-1"
    key = "./prod"
  }
}

module "deploy-prod" {
  source = "../modules"
  DEPLOY_ENV = "prod"
  URL_PREFIX = ""
}
