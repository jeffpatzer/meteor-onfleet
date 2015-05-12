# OnFleet API Package

Making Meteor play nicely with [https://onfleet.com](OnFleet).

Integrates with v2.0 of the [http://docs.onfleet.com/v2.0/docs/recipients](docs).

## API Keys

Make sure that you get your API keys from OnFleet. You can do this via Settings Modal > API. It should look something like this: `1b9fedc97360a02d390fab837eb3c70a`.

## Endpoints

* Organizations
* Administrators
* Workers
* Teams
* Destinations
* Recipients
* Tasks

## Usage

### Configure the Object

```javascript
Meteor.startup(function(){
  // Put you api key below, this one is an example
  var OnFleet = OnFleetAPI.Config({key: "1b9fedc97360a02d390fab837eb3c70a"})
})
```
You should mostly likely be using `Meteor.settings.onfleet.secret` or `process.env.ONFLEET` to inject your api key. You don't want to have the secret right in your code.

### Test things are working

```
OnFleet.Auth.test();
```

will return

```
{
    "message": "Hello organization 'Oq5F4bYJIFspkVj*u*p*Tyim' hitting Onfleet from 127.0.0.1"
}
```

### Use it for something real

[http://docs.onfleet.com/v2.0/docs/organizations](Full Reference)

List teams

```
OnFleet.Teams.list()
```

Find recipient

```
OnFleet.Recipient.find("name", "Saul Goodman")
```

## TODO

* More tests

## API

```
var OnFleet = OnFleetAPI.Config({key: "1b9fedc97360a02d390fab837eb3c70a"})
```
Assuming your variable is OnFleet, then your calls are 

```
OnFleet.Administrators.create
OnFleet.Administrators.list
OnFleet.Administrators.update
OnFleet.Administrators.delete
OnFleet.Destinations.create
OnFleet.Destinations.getSingleDest
OnFleet.Organizations.getDetails
OnFleet.Organizations.getDelegatee
OnFleet.Recipients
OnFleet.Tasks
OnFleet.Teams
OnFleet.Workers
```



