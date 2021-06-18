import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ProductScreen from '../screens/ProductScreen'
import CreateScreen from '../screens/CreateScreen'
import DetailsScreen from '../screens/DetailsScreen'

const StackNavigator = createStackNavigator(
  {
    ProductScreen: {
      screen: ProductScreen
    },
    CreateScreen: {
      screen: CreateScreen
    },
    DetailsScreen: {
      screen: DetailsScreen
    },
  },
  {
    initialRouteName: 'ProductScreen',

  }
)

export default createAppContainer(StackNavigator)