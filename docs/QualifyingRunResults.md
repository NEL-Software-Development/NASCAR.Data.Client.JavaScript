# NascarDataClient.QualifyingRunResults

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runName** | **String** | Run name | [optional] 
**runState** | **String** | Run state:  (Inactive, Active, Completed) | [optional] 
**flagState** | **String** | Flag state:  (NONE, WARMUP, GREEN, YELLOW, RED, WHITE, FINISH, EXTRA) | [optional] 
**round** | **Number** | Qualifying round: 0-3 | [optional] 
**group** | **String** | Qualifying group: A, B, (empty) | [optional] 
**results** | [**[RunResult]**](RunResult.md) | Qualifying results | [optional] 
