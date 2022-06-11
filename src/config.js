const config = {
  colors: {
    primary: '#caa893',
    primaryDark: '#b69683',
    primaryLight: '#ddbfb1',
    secondary: '#9ba27b',
    secondaryDark: '#4c695b',
    dark: '#424242',
    light: '#ffffff',
    shadowLight: '#ece2db',
  },
  size: {
    maxWidth: '1850px'
  },
  squareUrl: 'https://magnolia-grove-creations-llc.square.site',
}

export const colors = config.colors
export const size = config.size
export const squareUrl = config.squareUrl
export const redirectProducts = process.env.REDIRECT_PRODUCTS == null ? true : process.env.REDIRECT_PRODUCTS
