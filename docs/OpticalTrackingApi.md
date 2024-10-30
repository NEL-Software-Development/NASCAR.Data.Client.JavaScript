# NascarDataClient.OpticalTrackingApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**opticalTrackingUtmOffsetsGet**](OpticalTrackingApi.md#opticalTrackingUtmOffsetsGet) | **GET** /optical-tracking/utm-offsets | 

<a name="opticalTrackingUtmOffsetsGet"></a>
# **opticalTrackingUtmOffsetsGet**
> [OpticalTrackingUTMOffset] opticalTrackingUtmOffsetsGet()



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.OpticalTrackingApi();
apiInstance.opticalTrackingUtmOffsetsGet((error, data, response) => {
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

[**[OpticalTrackingUTMOffset]**](OpticalTrackingUTMOffset.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

