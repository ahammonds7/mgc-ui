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

module "deploy-qa" {
  source = "../modules"
  DEPLOY_ENV = "qa"
  URL_PREFIX = "qa."
}
