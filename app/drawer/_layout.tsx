import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";

function CustomDrawerContent(props: any) {
  const router = useRouter();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Home" onPress={() => router.replace("/")} />
    </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawerContent}>
        <Drawer.Screen
          name="news"
          options={{
            drawerLabel: "News",
            title: "News",
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "Profile",
            title: "Profile",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
