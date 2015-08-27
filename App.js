Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        console.log("My First App");
        this._loadData();
    },

    _loadData: function() {
        var myStore = Ext.create('Rally.data.wsapi.Store', {
            model: 'Defect',
            autoLoad: true,
            listeners: {
                load: function(myStore, myData, success) {
                    console.log("got data",myStore, myData,success );
                    this._loadGrid(myStore);
                },
                scope:this
            },
            fetch: ['FormattedID','Name', 'Owner']
        });
    },

    _loadGrid: function(myStore) {
        var myGrid = Ext.create('Rally.ui.grid.Grid', {
            store:myStore,
            columnCfgs:['FormattedID','Name','Owner']
        });
        console.log('myGrid',myGrid);
        this.add(myGrid);
    }
});
