
/// Administrators ///

OnFleetAPI.Administrators = {

  "create": function(newAdmin){

    check(newAdmin, Object);

    if (!newAdmin.name && !newAdmin.email){
      throw new Meteor.Error("You must provide a name and email for a new admin with OnFleet.");
    }

    var apiEndpoint = OnFleetAPI.API_URL+"admins";
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.post(apiEndpoint, {
        auth: apiKey,
        data: newAdmin
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },
  "list": function(){
    var apiEndpoint = OnFleetAPI.API_URL+"admins";
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
  "update": function(adminId, adminInfo){
    check(adminId, String);
    check(adminInfo, Match.Optional(Object));

    var apiEndpoint = OnFleetAPI.API_URL+"admins/"+adminId;
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.put(apiEndpoint, {
        auth: apiKey,
        data: newAdmin
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },
  "delete": function(adminId){
    check(adminId, String);

    var apiEndpoint = OnFleetAPI.API_URL+"admins/"+adminId;
    var apiKey = OnFleetAPI.key;
    try{
      var resp = HTTP.del(apiEndpoint, {
        auth: apiKey,
      });
      return resp.data;
    }catch(e){
      console.log(e);
      throw new Meteor.Error(e);
    }
  },

}
