/// Destinations ///

OnFleetAPI.Destinations = {

  "create": function(newDest){
    check(newDest, {
      address: Object,
      location: Match.Optional([Match.Any]),
      notes: Match.Optional(String)
    })
    if (!newDest.address.unparsed){
      check(newDest.address, {
        name: Match.Optional(String),
        number: String,
        street: String,
        apartment: Match.Optional(String),
        city: String,
        state: Match.Optional(String),
        postalCode: Match.Optional(String),
        country: String
      });
    }else{
      check(newDest.address.unparsed, String)
    }

    var apiEndpoint = OnFleetAPI.API_URL+"destinations";
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.post(apiEndpoint, {
        auth: apiKey,
        data: newDest
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },
  "getSingleDest": function(destId){
    check(destId, String)

    var apiEndpoint = OnFleetAPI.API_URL+"destinations/"+destId;
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.get(apiEndpoint, {
        auth: apiKey,
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },

}
