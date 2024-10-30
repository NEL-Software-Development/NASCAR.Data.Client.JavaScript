# NascarDataClient.DriverApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**driverGet**](DriverApi.md#driverGet) | **GET** /driver | 
[**driverSeasonFinishesGet**](DriverApi.md#driverSeasonFinishesGet) | **GET** /driver/season-finishes | 
[**driverSeasonGet**](DriverApi.md#driverSeasonGet) | **GET** /driver/season | 

<a name="driverGet"></a>
# **driverGet**
> Driver driverGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.DriverApi();
let opts = { 
  'id': 56 // Number | 
};
apiInstance.driverGet(opts, (error, data, response) => {
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

[**Driver**](Driver.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="driverSeasonFinishesGet"></a>
# **driverSeasonFinishesGet**
> [RaceResultSummary] driverSeasonFinishesGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.DriverApi();
let opts = { 
  'id': 56, // Number | 
  'season': 56, // Number | 
  'seriesId': 56 // Number | 
};
apiInstance.driverSeasonFinishesGet(opts, (error, data, response) => {
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
 **season** | **Number**|  | [optional] 
 **seriesId** | **Number**|  | [optional] 

### Return type

[**[RaceResultSummary]**](RaceResultSummary.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="driverSeasonGet"></a>
# **driverSeasonGet**
> [Driver] driverSeasonGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.DriverApi();
let opts = { 
  'season': 56, // Number | 
  'seriesId': 56 // Number | 
};
apiInstance.driverSeasonGet(opts, (error, data, response) => {
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

[**[Driver]**](Driver.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

