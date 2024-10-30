# NascarDataClient.CompanyApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companySearchGet**](CompanyApi.md#companySearchGet) | **GET** /company/search | 

<a name="companySearchGet"></a>
# **companySearchGet**
> [Company] companySearchGet(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.CompanyApi();
let opts = { 
  'searchTerm': "searchTerm_example" // String | 
};
apiInstance.companySearchGet(opts, (error, data, response) => {
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
 **searchTerm** | **String**|  | [optional] 

### Return type

[**[Company]**](Company.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

