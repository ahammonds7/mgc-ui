module "deploy-qa" {
  source = "../modules"
  DEPLOY_ENV = "qa"
  URL_PREFIX = "qa."
}
