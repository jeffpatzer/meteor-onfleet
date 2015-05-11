/// Teams ///

OnFleetAPI.Teams = {

  "list": function(){
    var apiEndpoint = OnFleetAPI.API_URL+"teams";
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
  "getSingleTeam": function(teamId){
    check(teamId, String)
    var apiEndpoint = OnFleetAPI.API_URL+"teams/"+teamId;
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
