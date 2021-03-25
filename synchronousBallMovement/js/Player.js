class Player  {
    constructor() {
    }
    getState () {
    var playerStateRef = dataBase.ref ("playerCount");
    playerCountRef.on("value",function(data) {
    playerCount = data.val();
    })
    }
    updateCount(count) {
        database.ref("/"),update( {
        
           playerCount: count
        })
        
    }
    
    update(name){
 var playerIndex = "player"+playerCount;
 dataBase.ref(playerIndex).set({
     name:name
 })
    }
    }
    