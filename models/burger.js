var orm = require("../config/orm");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burger", function(res){
            cb(res);
        })
    }
}

module.exports = burger;