# NASCAR.Data.Client - the JavaScript library for the NASCAR.Data.API

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Getting Started](#getting-started)

<a name="overview"></a>
## Overview
- API version: 1.0
- Package version: 1.0

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install nascar-data-client --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

<a name="getting-started"></a>
## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var NascarDataClient = require('nascar-data-client');
var defaultClient = NascarDataClient.ApiClient.instance;


var api = new NascarDataClient.AccountApi()
var opts = { 
  'refreshToken': "refreshToken_example" // {String} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountRefreshTokenGet(opts, callback);
```

## Documentation for API Endpoints

All URIs are relative to */api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*NascarDataClient.AccountApi* | [**accountRefreshTokenGet**](docs/AccountApi.md#accountRefreshTokenGet) | **GET** /account/refresh-token | 
*NascarDataClient.CompanyApi* | [**companySearchGet**](docs/CompanyApi.md#companySearchGet) | **GET** /company/search | 
*NascarDataClient.DriverApi* | [**driverGet**](docs/DriverApi.md#driverGet) | **GET** /driver | 
*NascarDataClient.DriverApi* | [**driverSeasonFinishesGet**](docs/DriverApi.md#driverSeasonFinishesGet) | **GET** /driver/season-finishes | 
*NascarDataClient.DriverApi* | [**driverSeasonGet**](docs/DriverApi.md#driverSeasonGet) | **GET** /driver/season | 
*NascarDataClient.DriverSummaryApi* | [**driverSummaryGet**](docs/DriverSummaryApi.md#driverSummaryGet) | **GET** /driver-summary | 
*NascarDataClient.ERDPApi* | [**erdpDatapointsGet**](docs/ERDPApi.md#erdpDatapointsGet) | **GET** /erdp/datapoints | 
*NascarDataClient.ERDPApi* | [**erdpSourcesGet**](docs/ERDPApi.md#erdpSourcesGet) | **GET** /erdp/sources | 
*NascarDataClient.FeedbackApi* | [**feedbackDevNotesGet**](docs/FeedbackApi.md#feedbackDevNotesGet) | **GET** /feedback/dev-notes | 
*NascarDataClient.FeedbackApi* | [**feedbackSubmitFeedbackPost**](docs/FeedbackApi.md#feedbackSubmitFeedbackPost) | **POST** /feedback/submit-feedback | 
*NascarDataClient.InspectionsApi* | [**inspectionsOssGet**](docs/InspectionsApi.md#inspectionsOssGet) | **GET** /inspections/oss | 
*NascarDataClient.InspectionsApi* | [**inspectionsVehicleWeightsGet**](docs/InspectionsApi.md#inspectionsVehicleWeightsGet) | **GET** /inspections/vehicle-weights | 
*NascarDataClient.OpticalTrackingApi* | [**opticalTrackingUtmOffsetsGet**](docs/OpticalTrackingApi.md#opticalTrackingUtmOffsetsGet) | **GET** /optical-tracking/utm-offsets | 
*NascarDataClient.PointsApi* | [**pointsDriverPointsGet**](docs/PointsApi.md#pointsDriverPointsGet) | **GET** /points/driver-points | 
*NascarDataClient.PointsApi* | [**pointsManufacturerPointsGet**](docs/PointsApi.md#pointsManufacturerPointsGet) | **GET** /points/manufacturer-points | 
*NascarDataClient.PointsApi* | [**pointsOwnerPointsGet**](docs/PointsApi.md#pointsOwnerPointsGet) | **GET** /points/owner-points | 
*NascarDataClient.RaceApi* | [**raceCautionsGet**](docs/RaceApi.md#raceCautionsGet) | **GET** /race/cautions | 
*NascarDataClient.RaceApi* | [**raceDisciplineUpdatesGet**](docs/RaceApi.md#raceDisciplineUpdatesGet) | **GET** /race/discipline-updates | 
*NascarDataClient.RaceApi* | [**raceEntriesGet**](docs/RaceApi.md#raceEntriesGet) | **GET** /race/entries | 
*NascarDataClient.RaceApi* | [**raceGet**](docs/RaceApi.md#raceGet) | **GET** /race | 
*NascarDataClient.RaceApi* | [**raceInfractionsGet**](docs/RaceApi.md#raceInfractionsGet) | **GET** /race/infractions | 
*NascarDataClient.RaceApi* | [**raceLapLeadersGet**](docs/RaceApi.md#raceLapLeadersGet) | **GET** /race/lap-leaders | 
*NascarDataClient.RaceApi* | [**raceLoopStatsGet**](docs/RaceApi.md#raceLoopStatsGet) | **GET** /race/loop-stats | 
*NascarDataClient.RaceApi* | [**racePitstopsGet**](docs/RaceApi.md#racePitstopsGet) | **GET** /race/pitstops | 
*NascarDataClient.RaceApi* | [**racePracticeResultsGet**](docs/RaceApi.md#racePracticeResultsGet) | **GET** /race/practice-results | 
*NascarDataClient.RaceApi* | [**raceQualifyingResultsGet**](docs/RaceApi.md#raceQualifyingResultsGet) | **GET** /race/qualifying-results | 
*NascarDataClient.RaceApi* | [**raceRaceResultsGet**](docs/RaceApi.md#raceRaceResultsGet) | **GET** /race/race-results | 
*NascarDataClient.RaceApi* | [**raceRostersGet**](docs/RaceApi.md#raceRostersGet) | **GET** /race/rosters | 
*NascarDataClient.RaceApi* | [**raceSeasonGet**](docs/RaceApi.md#raceSeasonGet) | **GET** /race/season | 
*NascarDataClient.RaceApi* | [**raceStageResultsGet**](docs/RaceApi.md#raceStageResultsGet) | **GET** /race/stage-results | 
*NascarDataClient.RaceApi* | [**raceViewmodelGet**](docs/RaceApi.md#raceViewmodelGet) | **GET** /race/viewmodel | 
*NascarDataClient.RaceApi* | [**raceWeekendScheduleGet**](docs/RaceApi.md#raceWeekendScheduleGet) | **GET** /race/weekend-schedule | 
*NascarDataClient.RaceWeekApi* | [**raceWeekDetailsGet**](docs/RaceWeekApi.md#raceWeekDetailsGet) | **GET** /race-week/details | 
*NascarDataClient.RaceWeekApi* | [**raceWeekLiveGet**](docs/RaceWeekApi.md#raceWeekLiveGet) | **GET** /race-week/live | 
*NascarDataClient.RaceWeekApi* | [**raceWeekSeasonGet**](docs/RaceWeekApi.md#raceWeekSeasonGet) | **GET** /race-week/season | 
*NascarDataClient.SeriesApi* | [**seriesGet**](docs/SeriesApi.md#seriesGet) | **GET** /series | 
*NascarDataClient.VehicleApi* | [**vehicleGet**](docs/VehicleApi.md#vehicleGet) | **GET** /vehicle | 
*NascarDataClient.VehicleApi* | [**vehicleSeasonFinishesGet**](docs/VehicleApi.md#vehicleSeasonFinishesGet) | **GET** /vehicle/season-finishes | 

## Documentation for Models

 - [NascarDataClient.Caution](docs/Caution.md)
 - [NascarDataClient.Company](docs/Company.md)
 - [NascarDataClient.DevNote](docs/DevNote.md)
 - [NascarDataClient.DisciplineUpdate](docs/DisciplineUpdate.md)
 - [NascarDataClient.Driver](docs/Driver.md)
 - [NascarDataClient.DriverPoint](docs/DriverPoint.md)
 - [NascarDataClient.DriverSummary](docs/DriverSummary.md)
 - [NascarDataClient.DriverSummaryByPrincipalRaceID](docs/DriverSummaryByPrincipalRaceID.md)
 - [NascarDataClient.DriverSummaryBySeason](docs/DriverSummaryBySeason.md)
 - [NascarDataClient.DriverSummaryByTrack](docs/DriverSummaryByTrack.md)
 - [NascarDataClient.DriverSummaryByTrackType](docs/DriverSummaryByTrackType.md)
 - [NascarDataClient.Feedback](docs/Feedback.md)
 - [NascarDataClient.Flag](docs/Flag.md)
 - [NascarDataClient.LapLeader](docs/LapLeader.md)
 - [NascarDataClient.LoopStat](docs/LoopStat.md)
 - [NascarDataClient.ManufacturerPoint](docs/ManufacturerPoint.md)
 - [NascarDataClient.NextGenDatapoint](docs/NextGenDatapoint.md)
 - [NascarDataClient.NextGenSource](docs/NextGenSource.md)
 - [NascarDataClient.OSSScan](docs/OSSScan.md)
 - [NascarDataClient.OpticalTrackingUTMOffset](docs/OpticalTrackingUTMOffset.md)
 - [NascarDataClient.OwnerPoint](docs/OwnerPoint.md)
 - [NascarDataClient.Pitstop](docs/Pitstop.md)
 - [NascarDataClient.PracticeRunResults](docs/PracticeRunResults.md)
 - [NascarDataClient.ProcessingState](docs/ProcessingState.md)
 - [NascarDataClient.PublishState](docs/PublishState.md)
 - [NascarDataClient.QualifyingRunResults](docs/QualifyingRunResults.md)
 - [NascarDataClient.Race](docs/Race.md)
 - [NascarDataClient.RaceDetails](docs/RaceDetails.md)
 - [NascarDataClient.RaceInfraction](docs/RaceInfraction.md)
 - [NascarDataClient.RaceResult](docs/RaceResult.md)
 - [NascarDataClient.RaceResultSummary](docs/RaceResultSummary.md)
 - [NascarDataClient.RaceRunResults](docs/RaceRunResults.md)
 - [NascarDataClient.RaceViewModel](docs/RaceViewModel.md)
 - [NascarDataClient.RaceWeek](docs/RaceWeek.md)
 - [NascarDataClient.RaceWeekDetails](docs/RaceWeekDetails.md)
 - [NascarDataClient.RosterMember](docs/RosterMember.md)
 - [NascarDataClient.RunDetails](docs/RunDetails.md)
 - [NascarDataClient.RunEntry](docs/RunEntry.md)
 - [NascarDataClient.RunResult](docs/RunResult.md)
 - [NascarDataClient.RunState](docs/RunState.md)
 - [NascarDataClient.RunType](docs/RunType.md)
 - [NascarDataClient.Series](docs/Series.md)
 - [NascarDataClient.StageResult](docs/StageResult.md)
 - [NascarDataClient.StageRunResults](docs/StageRunResults.md)
 - [NascarDataClient.TeamRoster](docs/TeamRoster.md)
 - [NascarDataClient.TokenResponse](docs/TokenResponse.md)
 - [NascarDataClient.VehicleDetails](docs/VehicleDetails.md)
 - [NascarDataClient.VehicleWeight](docs/VehicleWeight.md)
 - [NascarDataClient.WeekendSchedule](docs/WeekendSchedule.md)

