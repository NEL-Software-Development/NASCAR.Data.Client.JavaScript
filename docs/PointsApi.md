# NascarDataClient.PointsApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pointsDriverPointsGet**](PointsApi.md#pointsDriverPointsGet) | **GET** /points/driver-points | 
[**pointsManufacturerPointsGet**](PointsApi.md#pointsManufacturerPointsGet) | **GET** /points/manufacturer-points | 
[**pointsOwnerPointsGet**](PointsApi.md#pointsOwnerPointsGet) | **GET** /points/owner-points | 

<a name="pointsDriverPointsGet"></a>
# **pointsDriverPointsGet**
> [DriverPoint] pointsDriverPointsGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.PointsApi();
let opts = { 
  'season': 56, // Number | 
  'seriesId': 56, // Number | 
  'raceId': 0 // Number | 
};
apiInstance.pointsDriverPointsGet(opts, (error, data, response) => {
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
 **raceId** | **Number**|  | [optional] [default to 0]

### Return type

[**[DriverPoint]**](DriverPoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="pointsManufacturerPointsGet"></a>
# **pointsManufacturerPointsGet**
> [ManufacturerPoint] pointsManufacturerPointsGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.PointsApi();
let opts = { 
  'season': 56, // Number | 
  'seriesId': 56, // Number | 
  'raceId': 0 // Number | 
};
apiInstance.pointsManufacturerPointsGet(opts, (error, data, response) => {
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
 **raceId** | **Number**|  | [optional] [default to 0]

### Return type

[**[ManufacturerPoint]**](ManufacturerPoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="pointsOwnerPointsGet"></a>
# **pointsOwnerPointsGet**
> [OwnerPoint] pointsOwnerPointsGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.PointsApi();
let opts = { 
  'season': 56, // Number | 
  'seriesId': 56, // Number | 
  'raceId': 0 // Number | 
};
apiInstance.pointsOwnerPointsGet(opts, (error, data, response) => {
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
 **raceId** | **Number**|  | [optional] [default to 0]

### Return type

[**[OwnerPoint]**](OwnerPoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

