import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors, Metrics } from './Themes';

const icons = {
  'line-chart': [Metrics.icons.medium, Colors.snow],
  money: [Metrics.icons.medium, Colors.snow],
  users: [Metrics.icons.medium, Colors.snow],
  pencil: [Metrics.icons.medium, Colors.snow],
  trash: [Metrics.icons.medium, Colors.snow],
  user: [Metrics.icons.medium, Colors.snow],
  'user-plus': [Metrics.icons.medium, Colors.snow],
  phone: [Metrics.icons.medium, Colors.snow],
  share: [Metrics.icons.medium, Colors.snow],
  filter: [Metrics.icons.medium, Colors.snow],
  plus: [Metrics.icons.medium, Colors.snow],
  university: [Metrics.icons.medium, Colors.snow],
};

const defaultIconProvider = FontAwesome;
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map((iconName) => {
      const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
      return Provider.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
        icons[iconName][1],
      );
    }),
  ).then((sources) => {
    Object.keys(icons)
      .forEach((iconName, idx) => iconsMap[iconName] = sources[idx]);

    // Call resolve (and we are done)
    resolve(true);
  });
});

export {
  iconsMap,
  iconsLoaded,
};
