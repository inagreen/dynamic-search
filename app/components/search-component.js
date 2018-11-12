import Component from '@ember/component';

export default Component.extend({
  locationNames: null,

  //observing location model
  modelObserver: function () {
    if (this.get('locations')) {
      let locationNames = this.get('locations').reduce((arr, location) => {
        arr.push(location.locationName);
        return arr;
      } ,[]);
      this.set('locationNames', locationNames);
    } else if (!this.get('locations') && this.get('locationNames')){
      this.set('locationNames', null);
    }
  }.observes('locations'),

  //clearing location names
  clearLocationNames: function () {
    this.set('locationNames', null);
  },

  actions: {
    //triggering sets of action to send to route either fetching model data or clear model data
    inputChange: function (input) {
      if (input.length > 1) {
        this.sendAction('fetchData', input);
      } else {
        this.sendAction('clearData');
        this.clearLocationNames();
      }
    }
  }
});
