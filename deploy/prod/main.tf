terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" { }

module "deploy-prod" {
  source = "../modules"
  DEPLOY_ENV = "prod"
  URL_PREFIX = ""
}
