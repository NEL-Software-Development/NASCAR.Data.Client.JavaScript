# NascarDataClient.SeriesApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**seriesGet**](SeriesApi.md#seriesGet) | **GET** /series | 

<a name="seriesGet"></a>
# **seriesGet**
> [Series] seriesGet()



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.SeriesApi();
apiInstance.seriesGet((error, data, response) => {
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

[**[Series]**](Series.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

