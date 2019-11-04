import { Colors } from "../Themes";

export const options = {
  statusBar: {
    visible: true,
    backgroundColor: Colors.primary
  },
  topBar: {
    visible: true,
    rightButtons: {
      color: Colors.snow
    },
    leftButtons: {
      color: Colors.snow
    },
    background: {
      color: Colors.primary
    },
    title: {
      fontSize: 20,
      color: Colors.snow
    }
  },
  bottomTabs: {
    visible: true,
    animate: false,
    drawBehind: true,
    backgroundColor: Colors.snow
  },
  bottomTab: {
    iconColor: Colors.primary,
    selectedIconColor: Colors.lightPrimary
  }
};
