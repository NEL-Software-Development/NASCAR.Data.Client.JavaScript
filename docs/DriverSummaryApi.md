# NascarDataClient.DriverSummaryApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**driverSummaryGet**](DriverSummaryApi.md#driverSummaryGet) | **GET** /driver-summary | 

<a name="driverSummaryGet"></a>
# **driverSummaryGet**
> [DriverSummary] driverSummaryGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.DriverSummaryApi();
let opts = { 
  'seriesId': 56, // Number | 
  'season': 56, // Number | 
  'driverId': 0 // Number | 
};
apiInstance.driverSummaryGet(opts, (error, data, response) => {
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
 **seriesId** | **Number**|  | [optional] 
 **season** | **Number**|  | [optional] 
 **driverId** | **Number**|  | [optional] [default to 0]

### Return type

[**[DriverSummary]**](DriverSummary.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

