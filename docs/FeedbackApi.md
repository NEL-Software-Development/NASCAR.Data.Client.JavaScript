# NascarDataClient.FeedbackApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**feedbackDevNotesGet**](FeedbackApi.md#feedbackDevNotesGet) | **GET** /feedback/dev-notes | 
[**feedbackSubmitFeedbackPost**](FeedbackApi.md#feedbackSubmitFeedbackPost) | **POST** /feedback/submit-feedback | 

<a name="feedbackDevNotesGet"></a>
# **feedbackDevNotesGet**
> [DevNote] feedbackDevNotesGet()



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.FeedbackApi();
apiInstance.feedbackDevNotesGet((error, data, response) => {
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

[**[DevNote]**](DevNote.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="feedbackSubmitFeedbackPost"></a>
# **feedbackSubmitFeedbackPost**
> feedbackSubmitFeedbackPost(opts)



### Example
```javascript
import NascarDataClient from 'nascar-data-client';
let defaultClient = NascarDataClient.ApiClient.instance;


let apiInstance = new NascarDataClient.FeedbackApi();
let opts = { 
  'body': new NascarDataClient.Feedback() // Feedback | 
};
apiInstance.feedbackSubmitFeedbackPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Feedback**](Feedback.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: Not defined

