module "deploy-qa" {
  source = "./deploy-modules"
  DEPLOY_ENV = "qa"
  URL_PREFIX = "qa."
}
