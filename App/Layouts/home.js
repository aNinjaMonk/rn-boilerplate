export const home = {
  sideMenu: {
    left: {
      component: {
        name: 'screen.drawer'
      }
    },
    center: {
      component: {
        name: "screen.home",
        options: {
          topBar: {
            visible: true,
            title: {
              text: "Home"
            },
            drawUnder: false
          }
        }
      }
    }
  }
};
