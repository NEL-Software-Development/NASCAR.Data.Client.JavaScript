# NascarDataClient.RaceApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**raceCautionsGet**](RaceApi.md#raceCautionsGet) | **GET** /race/cautions | 
[**raceDisciplineUpdatesGet**](RaceApi.md#raceDisciplineUpdatesGet) | **GET** /race/discipline-updates | 
[**raceEntriesGet**](RaceApi.md#raceEntriesGet) | **GET** /race/entries | 
[**raceGet**](RaceApi.md#raceGet) | **GET** /race | 
[**raceInfractionsGet**](RaceApi.md#raceInfractionsGet) | **GET** /race/infractions | 
[**raceLapLeadersGet**](RaceApi.md#raceLapLeadersGet) | **GET** /race/lap-leaders | 
[**raceLoopStatsGet**](RaceApi.md#raceLoopStatsGet) | **GET** /race/loop-stats | 
[**racePitstopsGet**](RaceApi.md#racePitstopsGet) | **GET** /race/pitstops | 
[**racePracticeResultsGet**](RaceApi.md#racePracticeResultsGet) | **GET** /race/practice-results | 
[**raceQualifyingResultsGet**](RaceApi.md#raceQualifyingResultsGet) | **GET** /race/qualifying-results | 
[**raceRaceResultsGet**](RaceApi.md#raceRaceResultsGet) | **GET** /race/race-results | 
[**raceRostersGet**](RaceApi.md#raceRostersGet) | **GET** /race/rosters | 
[**raceSeasonGet**](RaceApi.md#raceSeasonGet) | **GET** /race/season | 
[**raceStageResultsGet**](RaceApi.md#raceStageResultsGet) | **GET** /race/stage-results | 
[**raceViewmodelGet**](RaceApi.md#raceViewmodelGet) | **GET** /race/viewmodel | 
[**raceWeekendScheduleGet**](RaceApi.md#raceWeekendScheduleGet) | **GET** /race/weekend-schedule | 

<a name="raceCautionsGet"></a>
# **raceCautionsGet**
> [Caution] raceCautionsGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.raceCautionsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raceId** | **Number**|  | [optional] 

### Return type

[**[Caution]**](Caution.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="raceDisciplineUpdatesGet"></a>
# **raceDisciplineUpdatesGet**
> [DisciplineUpdate] raceDisciplineUpdatesGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.raceDisciplineUpdatesGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raceId** | **Number**|  | [optional] 

### Return type

[**[DisciplineUpdate]**](DisciplineUpdate.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="raceEntriesGet"></a>
# **raceEntriesGet**
> [RunEntry] raceEntriesGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.raceEntriesGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raceId** | **Number**|  | [optional] 

### Return type

[**[RunEntry]**](RunEntry.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="raceGet"></a>
# **raceGet**
> RaceDetails raceGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.raceGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raceId** | **Number**|  | [optional] 

### Return type

[**RaceDetails**](RaceDetails.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="raceInfractionsGet"></a>
# **raceInfractionsGet**
> [RaceInfraction] raceInfractionsGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.raceInfractionsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raceId** | **Number**|  | [optional] 

### Return type

[**[RaceInfraction]**](RaceInfraction.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="raceLapLeadersGet"></a>
# **raceLapLeadersGet**
> [LapLeader] raceLapLeadersGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.raceLapLeadersGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raceId** | **Number**|  | [optional] 

### Return type

[**[LapLeader]**](LapLeader.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="raceLoopStatsGet"></a>
# **raceLoopStatsGet**
> [LoopStat] raceLoopStatsGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.raceLoopStatsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raceId** | **Number**|  | [optional] 

### Return type

[**[LoopStat]**](LoopStat.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="racePitstopsGet"></a>
# **racePitstopsGet**
> [Pitstop] racePitstopsGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.racePitstopsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raceId** | **Number**|  | [optional] 

### Return type

[**[Pitstop]**](Pitstop.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="racePracticeResultsGet"></a>
# **racePracticeResultsGet**
> [PracticeRunResults] racePracticeResultsGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.racePracticeResultsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raceId** | **Number**|  | [optional] 

### Return type

[**[PracticeRunResults]**](PracticeRunResults.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="raceQualifyingResultsGet"></a>
# **raceQualifyingResultsGet**
> [QualifyingRunResults] raceQualifyingResultsGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.raceQualifyingResultsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raceId** | **Number**|  | [optional] 

### Return type

[**[QualifyingRunResults]**](QualifyingRunResults.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="raceRaceResultsGet"></a>
# **raceRaceResultsGet**
> [RaceRunResults] raceRaceResultsGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.raceRaceResultsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raceId** | **Number**|  | [optional] 

### Return type

[**[RaceRunResults]**](RaceRunResults.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="raceRostersGet"></a>
# **raceRostersGet**
> [TeamRoster] raceRostersGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.raceRostersGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raceId** | **Number**|  | [optional] 

### Return type

[**[TeamRoster]**](TeamRoster.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="raceSeasonGet"></a>
# **raceSeasonGet**
> [[Race]] raceSeasonGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'season': 56, // Number | 
  'seriesId': 56 // Number | 
};
apiInstance.raceSeasonGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **season** | **Number**|  | [optional] 
 **seriesId** | **Number**|  | [optional] 

### Return type

**[[Race]]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="raceStageResultsGet"></a>
# **raceStageResultsGet**
> [StageRunResults] raceStageResultsGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.raceStageResultsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raceId** | **Number**|  | [optional] 

### Return type

[**[StageRunResults]**](StageRunResults.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="raceViewmodelGet"></a>
# **raceViewmodelGet**
> RaceViewModel raceViewmodelGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.raceViewmodelGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raceId** | **Number**|  | [optional] 

### Return type

[**RaceViewModel**](RaceViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="raceWeekendScheduleGet"></a>
# **raceWeekendScheduleGet**
> [WeekendSchedule] raceWeekendScheduleGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.raceWeekendScheduleGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raceId** | **Number**|  | [optional] 

### Return type

[**[WeekendSchedule]**](WeekendSchedule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

