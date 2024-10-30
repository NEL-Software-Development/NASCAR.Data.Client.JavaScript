# NascarDataClient.InspectionsApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inspectionsOssGet**](InspectionsApi.md#inspectionsOssGet) | **GET** /inspections/oss | 
[**inspectionsVehicleWeightsGet**](InspectionsApi.md#inspectionsVehicleWeightsGet) | **GET** /inspections/vehicle-weights | 

<a name="inspectionsOssGet"></a>
# **inspectionsOssGet**
> [OSSScan] inspectionsOssGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.InspectionsApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.inspectionsOssGet(opts, (error, data, response) => {
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

[**[OSSScan]**](OSSScan.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="inspectionsVehicleWeightsGet"></a>
# **inspectionsVehicleWeightsGet**
> [VehicleWeight] inspectionsVehicleWeightsGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.InspectionsApi();
let opts = { 
  'raceId': 56 // Number | 
};
apiInstance.inspectionsVehicleWeightsGet(opts, (error, data, response) => {
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

[**[VehicleWeight]**](VehicleWeight.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

