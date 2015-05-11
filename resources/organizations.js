/// Organizations ///

OnFleetAPI.Organizations = {

  "getDetails": function(){
    var apiEndpoint = OnFleetAPI.API_URL+"organization";
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.get(apiEndpoint, {
        auth: apiKey
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },
  "getDelegatee": function(delegatee){
    check(delegatee, String);

    var apiEndpoint = OnFleetAPI.API_URL+"organizations/"+delegatee;
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.get(apiEndpoint, {
        auth: apiKey
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },

}
