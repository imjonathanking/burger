var orm = require("../config/orm");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burger", function(res){
            cb(res);
        })
    },
    insertOne: function(burgerName, cb){
        column = "burger_name";
        orm.insertOne("burger", column, burgerName, cb);
    },
    updateOne: function(id, cb){
        orm.updateOne("burger", "devoured", "1", id, cb);
    }
}

module.exports = burger;