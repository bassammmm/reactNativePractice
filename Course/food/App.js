import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import RestultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator({
        Search: SearchScreen,
        ResultsShow: RestultsShowScreen
},{
  
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title: 'BusinessSearch'
  }
}); 


export default createAppContainer(navigator);