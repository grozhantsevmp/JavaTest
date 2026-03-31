const { defineComponent, h } = require('vue');

const makeComponent = (name) =>
  defineComponent({
    name,
    inheritAttrs: false,
    setup(_, { attrs, slots }) {
      return () => h('div', attrs, slots.default ? slots.default() : []);
    },
  });

module.exports = {
  IonApp: makeComponent('IonApp'),
  IonContent: makeComponent('IonContent'),
  IonHeader: makeComponent('IonHeader'),
  IonIcon: makeComponent('IonIcon'),
  IonLabel: makeComponent('IonLabel'),
  IonPage: makeComponent('IonPage'),
  IonRouterOutlet: makeComponent('IonRouterOutlet'),
  IonTabBar: makeComponent('IonTabBar'),
  IonTabButton: makeComponent('IonTabButton'),
  IonTabs: makeComponent('IonTabs'),
  IonTitle: makeComponent('IonTitle'),
  IonToolbar: makeComponent('IonToolbar'),
};
