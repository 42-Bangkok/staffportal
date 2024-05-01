/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/account/auths/login/": {
    /**
     * Post Login
     * @description Login through API. It creates a session, and a user if not exist.
     */
    post: operations["appaccount_routes_auths_post_login"];
  };
  "/api/account/auths/logout/": {
    /**
     * Post Logout
     * @description Logout given access_token, session is destroyed.
     */
    post: operations["appaccount_routes_auths_post_logout"];
  };
  "/api/account/auths/refresh/": {
    /**
     * Post Refresh
     * @description Refresh access_token using refresh_token.
     */
    post: operations["appaccount_routes_auths_post_refresh"];
  };
  "/api/account/users/me/": {
    /**
     * Get Me
     * @description Get current user profile
     */
    get: operations["appaccount_routes_users_get_me"];
    /**
     * Delete Me
     * @description Delete current user profile
     */
    delete: operations["appaccount_routes_users_delete_me"];
    /**
     * Patch Me
     * @description Patch current user profile
     */
    patch: operations["appaccount_routes_users_patch_me"];
  };
  "/api/data/cadetmeta/latest/": {
    /**
     * Get Latest Cadetmeta
     * @description Get the latest cadetmeta of all users
     */
    get: operations["appdata_routes_cadetmeta_get_latest_cadetmeta"];
  };
  "/api/data/cadetmeta/{login}/": {
    /**
     * Get Cadetmeta
     * @description Get the cadetmeta of a user for the given login
     * If meta does not exist it creates one regardless of it being on intra or not.
     */
    get: operations["appdata_routes_cadetmeta_get_cadetmeta"];
    /**
     * Patch Cadetmeta
     * @description Patch the cadetmeta of a user for the given login
     * If meta does not exist it creates one regardless of it being on intra or not.
     */
    patch: operations["appdata_routes_cadetmeta_patch_cadetmeta"];
  };
  "/api/data/intra/user/{login}/status/": {
    /**
     * Get Cadet Status
     * @description Resolves the cadet status of the given login for the pedago usage
     *
     * ```
     * blackholed: true if blackholed in 42cursus, false otherwise
     * enrollment: cadet | pisciner | no-cursus
     * ```
     */
    get: operations["appdata_routes_intra_get_cadet_status"];
  };
  "/api/apptasks/tasks/": {
    /**
     * Get Tasks
     * @description Get all tasks
     * Query Parameters:
     * - name_contains: str (optional) - Filter tasks by name
     */
    get: operations["apptasks_routes_tasks_get_tasks"];
  };
  "/api/apptasks/tasks/snappy/": {
    /**
     * Post Snappy Task
     * @description Create a new snappy to gsheet task
     */
    post: operations["apptasks_routes_tasks_post_snappy_task"];
  };
  "/api/apptasks/tasks/snappy/{id}/": {
    /**
     * Patch Snappy Task
     * @description Patch a snappy task
     */
    patch: operations["apptasks_routes_tasks_patch_snappy_task"];
  };
  "/api/apptasks/tasks/{id}/": {
    /**
     * Get Task
     * @description Get a task
     * Path Parameters:
     * - id: int - Task ID
     */
    get: operations["apptasks_routes_tasks_get_task"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** LoginPostOut */
    LoginPostOut: {
      /** Access Token */
      access_token: string;
      /** Expires In */
      expires_in: number;
      /** Refresh Token */
      refresh_token: string;
      /** Refresh Token Expires In */
      refresh_token_expires_in: number;
    };
    /** LoginPostIn */
    LoginPostIn: {
      /** Uid */
      uid: string;
      /**
       * Provider
       * @constant
       * @enum {string}
       */
      provider: "42";
      /**
       * Email
       * @description Email of the user
       */
      email?: string | null;
    };
    /** RefreshPostOut */
    RefreshPostOut: {
      /** Access Token */
      access_token: string;
      /** Expires In */
      expires_in: number;
      /** Refresh Token */
      refresh_token: string;
    };
    /** RefreshPostIn */
    RefreshPostIn: {
      /** Refresh Token */
      refresh_token: string;
    };
    /** MeGetOut */
    MeGetOut: {
      /**
       * Created
       * Format: date-time
       */
      created: string;
      /**
       * Updated
       * Format: date-time
       */
      updated: string;
      /**
       * First Name
       * @default
       */
      first_name?: string;
      /**
       * Last Name
       * @default
       */
      last_name?: string;
      /**
       * Gender
       * @default u
       */
      gender?: string;
      /** Dob */
      dob?: string | null;
      /** Time Of Birth */
      time_of_birth?: string | null;
      /**
       * Medical Condition
       * @default
       */
      medical_condition?: string;
      /**
       * Job Title
       * @default
       */
      job_title?: string;
      /** Username */
      username: string;
    };
    /** MePatchOut */
    MePatchOut: {
      /**
       * Created
       * Format: date-time
       */
      created: string;
      /**
       * Updated
       * Format: date-time
       */
      updated: string;
      /**
       * First Name
       * @default
       */
      first_name?: string;
      /**
       * Last Name
       * @default
       */
      last_name?: string;
      /**
       * Gender
       * @default u
       */
      gender?: string;
      /** Dob */
      dob?: string | null;
      /** Time Of Birth */
      time_of_birth?: string | null;
      /**
       * Medical Condition
       * @default
       */
      medical_condition?: string;
      /**
       * Job Title
       * @default
       */
      job_title?: string;
      /** Username */
      username: string;
    };
    /** MePatchIn */
    MePatchIn: {
      /** Username */
      username?: string;
      /**
       * First Name
       * @default
       */
      first_name?: string;
      /**
       * Last Name
       * @default
       */
      last_name?: string;
      /**
       * Gender
       * @default u
       */
      gender?: string;
      /** Dob */
      dob?: string | null;
      /** Time Of Birth */
      time_of_birth?: string | null;
      /**
       * Medical Condition
       * @default
       */
      medical_condition?: string;
      /**
       * Job Title
       * @default
       */
      job_title?: string;
    };
    /** Input */
    Input: {
      /**
       * Page
       * @default 1
       */
      page?: number;
    };
    /** GetLastestCadetMetaOut */
    GetLastestCadetMetaOut: {
      /**
       * Id
       * Format: uuid
       */
      id?: string;
      /**
       * Created
       * Format: date-time
       */
      created: string;
      /**
       * Updated
       * Format: date-time
       */
      updated: string;
      /**
       * Profile
       * Format: uuid
       */
      profile: string;
      /** Data */
      data: Record<string, never>;
    };
    /** PagedGetLastestCadetMetaOut */
    PagedGetLastestCadetMetaOut: {
      /** Count */
      count: number;
      /** Total Page */
      total_page: number;
      /** Items */
      items: components["schemas"]["GetLastestCadetMetaOut"][];
    };
    /** CadetmetaGetOut */
    CadetmetaGetOut: {
      /**
       * Id
       * Format: uuid
       */
      id?: string;
      /**
       * Created
       * Format: date-time
       */
      created: string;
      /**
       * Updated
       * Format: date-time
       */
      updated: string;
      /** Login */
      login: string;
      /**
       * Note
       * @default
       */
      note?: string;
    };
    /** CadetmetaPatchOut */
    CadetmetaPatchOut: {
      /**
       * Id
       * Format: uuid
       */
      id?: string;
      /**
       * Created
       * Format: date-time
       */
      created: string;
      /**
       * Updated
       * Format: date-time
       */
      updated: string;
      /** Login */
      login: string;
      /**
       * Note
       * @default
       */
      note?: string;
    };
    /** CadetmetaPatchIn */
    CadetmetaPatchIn: {
      /**
       * Note
       * @default
       */
      note?: string;
    };
    /** CadetStatusGetOut */
    CadetStatusGetOut: {
      /**
       * Updated
       * Format: date-time
       */
      updated: string;
      /** Blackholed */
      blackholed: boolean;
      /**
       * Enrollment
       * @enum {string}
       */
      enrollment: "cadet" | "pisciner" | "no-cursus";
    };
    /** PeriodicTaskSchema */
    PeriodicTaskSchema: {
      /** ID */
      id?: number | null;
      /**
       * Name
       * @description Short Description For This Task
       */
      name: string;
      /**
       * Enabled
       * @description Set to False to disable the schedule
       * @default true
       */
      enabled?: boolean;
    };
    /** TasksGetOut */
    TasksGetOut: {
      /** Items */
      items: components["schemas"]["PeriodicTaskSchema"][];
    };
    /** CreateSnappyKwargs */
    CreateSnappyKwargs: {
      /** Cursus Id */
      cursus_id: number;
      /** Sheet Name Static */
      sheet_name_static: string;
      /** Sheet Name */
      sheet_name: string;
      /** Pool Month */
      pool_month?: string | null;
      /** Pool Year */
      pool_year?: number | null;
      /** Only Id After */
      only_id_after?: number | null;
      /** Skip Logins */
      skip_logins?: string[] | null;
    };
    /** CreateSnappyTaskPostIn */
    CreateSnappyTaskPostIn: {
      /** Name */
      name: string;
      cron_schedule: components["schemas"]["CronScheduleSchema"];
      kwargs: components["schemas"]["CreateSnappyKwargs"];
    };
    /** CronScheduleSchema */
    CronScheduleSchema: {
      /**
       * Timezone
       * @default Asia/Bangkok
       */
      timezone?: string;
      /**
       * Minute(s)
       * @description Cron Minutes to Run. Use "*" for "all". (Example: "0,30")
       * @default *
       */
      minute?: string;
      /**
       * Hour(s)
       * @description Cron Hours to Run. Use "*" for "all". (Example: "8,20")
       * @default *
       */
      hour?: string;
      /**
       * Day(s) Of The Month
       * @description Cron Days Of The Month to Run. Use "*" for "all". (Example: "1,15")
       * @default *
       */
      day_of_month?: string;
      /**
       * Month(s) Of The Year
       * @description Cron Months (1-12) Of The Year to Run. Use "*" for "all". (Example: "1,12")
       * @default *
       */
      month_of_year?: string;
      /**
       * Day(s) Of The Week
       * @description Cron Days Of The Week to Run. Use "*" for "all", Sunday is 0 or 7, Monday is 1. (Example: "0,5")
       * @default *
       */
      day_of_week?: string;
    };
    /** ErrorResponse */
    ErrorResponse: {
      /** Code */
      code: string;
      /** Detail */
      detail: string;
    };
    /** SnappyTaskPatchIn */
    SnappyTaskPatchIn: {
      /** Name */
      name?: string;
      /** Enabled */
      enabled?: boolean;
      cron_schedule: components["schemas"]["CronScheduleSchema"];
      kwargs?: components["schemas"]["CreateSnappyKwargs"];
    };
    /** TaskGetOut */
    TaskGetOut: {
      /** Kwargs */
      kwargs: Record<string, never>;
      /** ID */
      id?: number | null;
      /**
       * Name
       * @description Short Description For This Task
       */
      name: string;
      /**
       * Task Name
       * @description The Name of the Celery Task that Should be Run.  (Example: "proj.tasks.import_contacts")
       */
      task: string;
      /**
       * Interval Schedule
       * @description Interval Schedule to run the task on.  Set only one schedule type, leave the others null.
       */
      interval?: number | null;
      /**
       * Crontab Schedule
       * @description Crontab Schedule to run the task on.  Set only one schedule type, leave the others null.
       */
      crontab?: number | null;
      /**
       * Solar Schedule
       * @description Solar Schedule to run the task on.  Set only one schedule type, leave the others null.
       */
      solar?: number | null;
      /**
       * Clocked Schedule
       * @description Clocked Schedule to run the task on.  Set only one schedule type, leave the others null.
       */
      clocked?: number | null;
      /**
       * Positional Arguments
       * @description JSON encoded positional arguments (Example: ["arg1", "arg2"])
       * @default []
       */
      args?: string;
      /**
       * Queue Override
       * @description Queue defined in CELERY_TASK_QUEUES. Leave None for default queuing.
       */
      queue?: string | null;
      /**
       * Exchange
       * @description Override Exchange for low-level AMQP routing
       */
      exchange?: string | null;
      /**
       * Routing Key
       * @description Override Routing Key for low-level AMQP routing
       */
      routing_key?: string | null;
      /**
       * AMQP Message Headers
       * @description JSON encoded message headers for the AMQP message.
       * @default {}
       */
      headers?: string;
      /**
       * Priority
       * @description Priority Number between 0 and 255. Supported by: RabbitMQ, Redis (priority reversed, 0 is highest).
       */
      priority?: number | null;
      /**
       * Expires Datetime
       * @description Datetime after which the schedule will no longer trigger the task to run
       */
      expires?: string | null;
      /**
       * Expires timedelta with seconds
       * @description Timedelta with seconds which the schedule will no longer trigger the task to run
       */
      expire_seconds?: number | null;
      /**
       * One-off Task
       * @description If True, the schedule will only run the task a single time
       * @default false
       */
      one_off?: boolean;
      /**
       * Start Datetime
       * @description Datetime when the schedule should begin triggering the task to run
       */
      start_time?: string | null;
      /**
       * Enabled
       * @description Set to False to disable the schedule
       * @default true
       */
      enabled?: boolean;
      /**
       * Last Run Datetime
       * @description Datetime that the schedule last triggered the task to run. Reset to None if enabled is set to False.
       */
      last_run_at?: string | null;
      /**
       * Total Run Count
       * @description Running count of how many times the schedule has triggered the task
       * @default 0
       */
      total_run_count?: number;
      /**
       * Last Modified
       * Format: date-time
       * @description Datetime that this PeriodicTask was last modified
       */
      date_changed: string;
      /**
       * Description
       * @description Detailed description about the details of this Periodic Task
       */
      description?: string | null;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Post Login
   * @description Login through API. It creates a session, and a user if not exist.
   */
  appaccount_routes_auths_post_login: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginPostIn"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["LoginPostOut"];
        };
      };
    };
  };
  /**
   * Post Logout
   * @description Logout given access_token, session is destroyed.
   */
  appaccount_routes_auths_post_logout: {
    responses: {
      /** @description No Content */
      204: {
        content: never;
      };
    };
  };
  /**
   * Post Refresh
   * @description Refresh access_token using refresh_token.
   */
  appaccount_routes_auths_post_refresh: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["RefreshPostIn"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RefreshPostOut"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: never;
      };
    };
  };
  /**
   * Get Me
   * @description Get current user profile
   */
  appaccount_routes_users_get_me: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["MeGetOut"];
        };
      };
    };
  };
  /**
   * Delete Me
   * @description Delete current user profile
   */
  appaccount_routes_users_delete_me: {
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
  /**
   * Patch Me
   * @description Patch current user profile
   */
  appaccount_routes_users_patch_me: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["MePatchIn"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["MePatchOut"];
        };
      };
    };
  };
  /**
   * Get Latest Cadetmeta
   * @description Get the latest cadetmeta of all users
   */
  appdata_routes_cadetmeta_get_latest_cadetmeta: {
    parameters: {
      query?: {
        page?: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["PagedGetLastestCadetMetaOut"];
        };
      };
    };
  };
  /**
   * Get Cadetmeta
   * @description Get the cadetmeta of a user for the given login
   * If meta does not exist it creates one regardless of it being on intra or not.
   */
  appdata_routes_cadetmeta_get_cadetmeta: {
    parameters: {
      path: {
        login: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["CadetmetaGetOut"];
        };
      };
    };
  };
  /**
   * Patch Cadetmeta
   * @description Patch the cadetmeta of a user for the given login
   * If meta does not exist it creates one regardless of it being on intra or not.
   */
  appdata_routes_cadetmeta_patch_cadetmeta: {
    parameters: {
      path: {
        login: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CadetmetaPatchIn"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["CadetmetaPatchOut"];
        };
      };
    };
  };
  /**
   * Get Cadet Status
   * @description Resolves the cadet status of the given login for the pedago usage
   *
   * ```
   * blackholed: true if blackholed in 42cursus, false otherwise
   * enrollment: cadet | pisciner | no-cursus
   * ```
   */
  appdata_routes_intra_get_cadet_status: {
    parameters: {
      path: {
        login: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["CadetStatusGetOut"];
        };
      };
      /** @description Not Found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Get Tasks
   * @description Get all tasks
   * Query Parameters:
   * - name_contains: str (optional) - Filter tasks by name
   */
  apptasks_routes_tasks_get_tasks: {
    parameters: {
      query?: {
        startswith?: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["TasksGetOut"];
        };
      };
    };
  };
  /**
   * Post Snappy Task
   * @description Create a new snappy to gsheet task
   */
  apptasks_routes_tasks_post_snappy_task: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateSnappyTaskPostIn"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
  /**
   * Patch Snappy Task
   * @description Patch a snappy task
   */
  apptasks_routes_tasks_patch_snappy_task: {
    parameters: {
      path: {
        id: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SnappyTaskPatchIn"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorResponse"];
        };
      };
      /** @description Not Found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Get Task
   * @description Get a task
   * Path Parameters:
   * - id: int - Task ID
   */
  apptasks_routes_tasks_get_task: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["TaskGetOut"];
        };
      };
      /** @description Not Found */
      404: {
        content: never;
      };
    };
  };
}
