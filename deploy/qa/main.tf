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
    key = "./qa"
  }
}

module "deploy-qa" {
  source = "../modules"
  DEPLOY_ENV = "qa"
  URL_PREFIX = "qa."
}
