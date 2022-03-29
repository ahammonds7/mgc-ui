module "deploy-prod" {
  source = "../modules"
  DEPLOY_ENV = "prod"
  URL_PREFIX = ""
}
