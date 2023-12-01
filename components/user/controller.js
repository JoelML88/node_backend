const nanoid = require('nanoid');
const TABLE = 'user'

module.exports = function(injectedStore){
    let store = injectedStore;

    if(!store){
        store = require('../../store/dummy')
    }

    function list(){
        return store.list(TABLE)
    }
    function get(id){
        return store.get(TABLE, id)
    }

    function upsert(body){
        if(body.id){
            user.id= bodu.id;
        }
        else{
            user.id = nanoid();
        }

        return store.upsert(TABLE, user)
    }

    return {
        list,
        get,
        upsert,
    };
};