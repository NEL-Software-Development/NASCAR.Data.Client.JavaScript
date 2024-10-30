# NascarDataClient.VehicleApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vehicleGet**](VehicleApi.md#vehicleGet) | **GET** /vehicle | 
[**vehicleSeasonFinishesGet**](VehicleApi.md#vehicleSeasonFinishesGet) | **GET** /vehicle/season-finishes | 

<a name="vehicleGet"></a>
# **vehicleGet**
> VehicleDetails vehicleGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.VehicleApi();
let opts = { 
  'id': 56 // Number | 
};
apiInstance.vehicleGet(opts, (error, data, response) => {
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

[**VehicleDetails**](VehicleDetails.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="vehicleSeasonFinishesGet"></a>
# **vehicleSeasonFinishesGet**
> [RaceResultSummary] vehicleSeasonFinishesGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.VehicleApi();
let opts = { 
  'season': 56, // Number | 
  'seriesId': 56, // Number | 
  'vehicle': "vehicle_example" // String | 
};
apiInstance.vehicleSeasonFinishesGet(opts, (error, data, response) => {
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
 **vehicle** | **String**|  | [optional] 

### Return type

[**[RaceResultSummary]**](RaceResultSummary.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

