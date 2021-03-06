﻿import { titanApiUrl } from './titanApiUrl'
import { GridApiUrl } from './gridApiUrls';

export class TestReqestSensorApiUrl {
    //public static gridApiUrl: string = GridApiUrl.testStatusGridUrl;
    //public static getTestStages: string = titanApiUrl + 'testStage/GetTestStages';
    //public static getHourEntryByEntityIdentifierId: string = titanApiUrl + 'timeEntryType/GetHourlyEntries';
    public static postCreatedUrl: string = titanApiUrl + 'testRequestSensor/post';
    public static postTestRequestCreatedUrl: string = titanApiUrl + 'testRequest/post';
    public static postWorkRequestCreatedUrl: string = titanApiUrl + 'workRequest/post';
    public static postWorkRequestUrl: string = titanApiUrl + 'workRequest/CreateWorkRequest';
    public static postTestRequestExternalDepartmentsAddUrl: string = titanApiUrl + 'workRequest/PostExternalDepartments';
    public static postTasksAddUrl: string = titanApiUrl + 'workRequest/CreateTasks';
    public static postTasksCompleteUrl: string = titanApiUrl + 'task/TaskComplete';
    public static postEmailAllUserDepartmentsUrl: string = titanApiUrl + 'workRequest/post';
    public static postCommentCreatedUrl: string = titanApiUrl + 'testRequestSensorComment/post';
    public static postUpdateUrl: string = titanApiUrl + 'testRequestSensor/put';
    public static postCommentUpdateUrl: string = titanApiUrl + 'testRequestSensorComment/put';
    public static getByIdUrl: string = titanApiUrl + 'testRequestSensor/get';
    public static getTestRequestByIdUrl: string = titanApiUrl + 'testRequest/get';
    public static getTaskDetailsByIdUrl: string = titanApiUrl + 'task/get';
    //getSensorCommentIdByTestRequestSensorId
    public static getSensorCommentIdByTestRequestSensorIdUrl: string = titanApiUrl + 'testRequestSensorComment/GetTestRequestCommentById';
    //public static GetTrackingListByEntityId: string = titanApiUrl + 'timeEntry/GetTrackingListByEntityId';
   public static GetAllTestRequestSensors: string = titanApiUrl + 'testRequestSensor/GetAllSensorRequestsByEntityId';
    //public static GetProjectId: string = titanApiUrl + 'testRequest/GetProjectId';
}