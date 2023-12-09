import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";
import HomeScreen from "./src/screen/HomeScreen/HomeScreen";
import { RecoilRoot } from "recoil";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="HomePage"
              component={StackNavigator}
              options={{
                headerShown: false,
                tabBarLabel: "홈",
                // tabBarIcon: ({ focused }) =>
                //   focused ? (
                //     <Feather name="home" size={24} color="black" />
                //   ) : (
                //     <Feather name="home" size={24} color="gray" />
                //   ),
              }}
            />
            {/* <Tab.Screen
          name="Create"
          component={StackNavigator2}
          options={{
            tabBarLabel: "작성",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="create" size={24} color="black" />
              ) : (
                <Ionicons name="create" size={24} color="gray" />
                ),
              }}
            /> */}
          </Tab.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
