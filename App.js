import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import QuizFormScreen from "./screens/QuizFormScreen";
import QuizDetailsScreen from "./screens/QuizDetailsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Quiz" component={QuizFormScreen} />
        <Stack.Screen name="QuizDetails" component={QuizDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;