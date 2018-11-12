import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    // this action first clears all model data and then query model data
    fetchData: function (input) {
        if (input.length > 1) {
          this.store.unloadAll('location');
          this.store.query('location', {
              searchTerm: input
          }).then( locations => {
            this.controller.set('locations', locations);
          });
        }
    },

    // this action clears model data
    clearData: function () {
      this.store.unloadAll('location');
      this.controller.set('locations', null);
    }
  }

});
