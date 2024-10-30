# NascarDataClient.RaceWeekApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**raceWeekDetailsGet**](RaceWeekApi.md#raceWeekDetailsGet) | **GET** /race-week/details | 
[**raceWeekLiveGet**](RaceWeekApi.md#raceWeekLiveGet) | **GET** /race-week/live | 
[**raceWeekSeasonGet**](RaceWeekApi.md#raceWeekSeasonGet) | **GET** /race-week/season | 

<a name="raceWeekDetailsGet"></a>
# **raceWeekDetailsGet**
> RaceWeekDetails raceWeekDetailsGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceWeekApi();
let opts = { 
  'id': 56 // Number | 
};
apiInstance.raceWeekDetailsGet(opts, (error, data, response) => {
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
 **id** | **Number**|  | [optional] 

### Return type

[**RaceWeekDetails**](RaceWeekDetails.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="raceWeekLiveGet"></a>
# **raceWeekLiveGet**
> [RaceWeek] raceWeekLiveGet()



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceWeekApi();
apiInstance.raceWeekLiveGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[RaceWeek]**](RaceWeek.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="raceWeekSeasonGet"></a>
# **raceWeekSeasonGet**
> [RaceWeek] raceWeekSeasonGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.RaceWeekApi();
let opts = { 
  'season': 56 // Number | 
};
apiInstance.raceWeekSeasonGet(opts, (error, data, response) => {
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

### Return type

[**[RaceWeek]**](RaceWeek.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

