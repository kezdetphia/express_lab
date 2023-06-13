const players = [
  {name: 'Roberto Carlos', foot: "left footed", desc: ' The best defender ever'},
  {name: 'Ronaldinho', foot: "right footed", desc: ' The biggest talent ever'},
  {name: 'R9', foot: "right footed", desc: ' The phenomeno'},
  {name: 'Luis Figo', foot: "right footed", desc: ' Alright'},
  {name: 'Edgar Davids', foot: "right footed", desc: ' The eagle vision'},
  {name: 'David Beckham', foot: "right footed", desc: ' Bend it like Beckham'}
]



module.exports = {
  getAll: ()=>{
    return players;
  }
}