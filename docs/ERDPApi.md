# NascarDataClient.ERDPApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**erdpDatapointsGet**](ERDPApi.md#erdpDatapointsGet) | **GET** /erdp/datapoints | 
[**erdpSourcesGet**](ERDPApi.md#erdpSourcesGet) | **GET** /erdp/sources | 

<a name="erdpDatapointsGet"></a>
# **erdpDatapointsGet**
> [NextGenDatapoint] erdpDatapointsGet()



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.ERDPApi();
apiInstance.erdpDatapointsGet((error, data, response) => {
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

[**[NextGenDatapoint]**](NextGenDatapoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="erdpSourcesGet"></a>
# **erdpSourcesGet**
> [NextGenSource] erdpSourcesGet()



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.ERDPApi();
apiInstance.erdpSourcesGet((error, data, response) => {
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

[**[NextGenSource]**](NextGenSource.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

