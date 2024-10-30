# NascarDataClient.AccountApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountRefreshTokenGet**](AccountApi.md#accountRefreshTokenGet) | **GET** /account/refresh-token | 

<a name="accountRefreshTokenGet"></a>
# **accountRefreshTokenGet**
> TokenResponse accountRefreshTokenGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.AccountApi();
let opts = { 
  'refreshToken': "refreshToken_example" // String | 
};
apiInstance.accountRefreshTokenGet(opts, (error, data, response) => {
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
 **refreshToken** | **String**|  | [optional] 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

