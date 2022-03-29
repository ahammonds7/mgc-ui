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

module "deploy-qa" {
  source = "../modules"
  DEPLOY_ENV = "qa"
  URL_PREFIX = "qa."
}
