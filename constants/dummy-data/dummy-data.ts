import { json } from "stream/consumers"
import { ApiEnum } from "../enum"

export const data = [
  {
    name: "Introduction",
    id: "introduction",
    children: []
  },
  {
    name: "Overview",
    id: "overview",
    children: []
  },
  {
    name: "Authentication",
    id: "authentication",
    children: []
  },
  {
    name: "Error Code List",
    id: "error_code",
    children: []
  },
  {
    name: "Change Log",
    id: "change_log",
    children: []
  },
  {
    name: "Account",
    id: "account",
    children: [
      {
        name: "CreatePlayer",
        id: "createPlayer",
        type: ApiEnum.POST,
      },
      {
        name: "Login",
        id: "login",
        type: ApiEnum.POST,
      },
      {
        name: "RefreshToken",
        id: "refreshToken",
        type: ApiEnum.POST,
      }
    ]
  },
  {
    name: "Player",
    id: "player",
    children: [
      {
        name: "Profile",
        id: "profile",
        type: ApiEnum.POST,
      },
      {
        name: "GetBalance",
        id: "getbalance",
        type: ApiEnum.POST,
      },
      {
        name: "Deposit",
        id: "deposit",
        type: ApiEnum.POST,
      },
      {
        name: "Withdraw",
        id: "withdraw",
        type: ApiEnum.POST,
      },
      {
        name: "GetGameUrl",
        id: "getgameUrl",
        type: ApiEnum.POST,
      },
      {
        name: "Logout",
        id: "logout",
        type: ApiEnum.POST,
      },
      {
        name: "Update BetlimitID for Sexy",
        id: "update_betlimitid",
        type: ApiEnum.POST,
      },
      {
        name: "Get pending rounds in Pragmatic Play (Optional)",
        id: "get_pending_rounds",
        type: ApiEnum.POST,
      },
    ]
  },
  {
    name: "Data",
    id: "data_domain",
    children: [
      {
        name: "Transaction",
        id: "transaction",
        type: ApiEnum.POST,
      },
      {
        name: "BetList",
        id: "betlist",
        type: ApiEnum.POST,
      },
      {
        name: "BetListOfAgent",
        id: "betlistofagent",
        type: ApiEnum.POST,
      },
      {
        name: "GetGameName (optional)",
        id: "getgamename",
        type: ApiEnum.POST,
      },
      {
        name: "Get Transaction by RefNo",
        id: "get_transaction_refno",
        type: ApiEnum.POST,
      },
      {
        name: "Get Transaction of Agent",
        id: "get_transaction_agent",
        type: ApiEnum.POST,
      },
      {
        name: "BetListPaginated",
        id: "betlistpaginated",
        type: ApiEnum.POST,
      },
      {
        name: "GetOutStandingBets",
        id: "getoutstandingbets",
        type: ApiEnum.POST,
      },
      {
        name: "Get Sum of Balance of all players",
        id: "get_sum_balance_all_players",
        type: ApiEnum.POST,
      },
      {
        name: "BetListDetailsV3",
        id: "betlistdetailsv3",
        type: ApiEnum.POST,
      },
      {
        name: "GetGameHistoryUrl",
        id: "getgamehistoryurl",
        type: ApiEnum.POST,
      },
      {
        name: "WinloseSummarize",
        id: "winlosesummarize",
        type: ApiEnum.POST,
      },
      {
        name: "BettingHistory",
        id: "bettinghistory",
        type: ApiEnum.POST,
      },
      {
        name: "WinloseV2",
        id: "winlosev2",
        type: ApiEnum.POST,
      },
      {
        name: "WinloseAllV2",
        id: "winloseallv2",
        type: ApiEnum.POST,
      },
      {
        name: "List available game",
        id: "list_available_game",
        type: ApiEnum.GET,
      },
      {
        name: "GetGameHistoryUrlByRoundId",
        id: "getgamehistoryurlbyroundid",
        type: ApiEnum.POST,
      },
      {
        name: "MMG-OutStandingBets",
        id: "mmg_outstandingbets",
        type: ApiEnum.POST,
      },
      {
        name: "BetListDetailsV2",
        id: "betlistdetailsv2",
        type: ApiEnum.POST,
      },
    ]
  },
  {
    name: "Seamless",
    id: "seamless",
    children: [
      {
        name: "Get Balance",
        id: "get_balance",
        type: ApiEnum.POST,
      },
      {
        name: "Place Bet",
        id: "place_bet",
        type: ApiEnum.POST,
      },
      {
        name: "Cancel Bet",
        id: "cancel_bet",
        type: ApiEnum.POST,
      },
      {
        name: "Settle Bet",
        id: "settle_bet",
        type: ApiEnum.POST,
      },
      {
        name: "Void Bet",
        id: "void_bet",
        type: ApiEnum.POST,
      },
      {
        name: "UnSettle",
        id: "unsettle",
        type: ApiEnum.POST,
      },
      {
        name: "Resettle",
        id: "resettle",
        type: ApiEnum.POST,
      },
      {
        name: "Void Settle",
        id: "void_settle",
        type: ApiEnum.POST,
      },
      {
        name: "PenddingBets",
        id: "penddingbets",
        type: ApiEnum.POST,
      },
      {
        name: "ResendBetOrSettle",
        id: "resendbetorsettle",
        type: ApiEnum.POST,
      },
    ]
  },
  {
    name: "Appendix",
    id: "appendix",
    children: [
      {
        name: "Error codes reference",
        id: "error_codes_reference",
        type: ApiEnum.POST,
      },
      {
        name: "Provider and game types",
        id: "provider_game_types",
        type: ApiEnum.POST,
      },
      {
        name: "Pagination",
        id: "pagination",
        type: ApiEnum.POST,
      },
      {
        name: "Language",
        id: "language",
        type: ApiEnum.POST,
      },
      {
        name: "Date time in input and output",
        id: "date_time_input_output",
        type: ApiEnum.POST,
      },
      {
        name: "Supported timezone",
        id: "supported_timezone",
        type: ApiEnum.POST,
      },
      {
        name: "Mimi seamless diagram",
        id: "mimi_seamless_diagram",
        type: ApiEnum.POST,
      },
      
    ]
  },
]

export const changeLog = [
  {version: "1.0",	changelog: (
    
    [
    "Create player",
    "Player login",
    "Refresh token",
    "Get player profile",
    "Get player account balance",
    "Deposit/withdraw money",
    "Get game URL",
    "Get list of transactions",
    "Get list of betting data from all providers",
    "Get list of betting data from certain provider",
    "Get winloss summary data from certain provider",
    "Get winloss summary data from all players in certain provider"
])
  , modifydate: "14-Aug-2019"},

{version: "1.1",	changelog:  [
  "Add more information about other providers and their game types in Appendix",
  "Update supported languages",
], modifydate: "12-Sep-2019"},

{version: "1.2",	changelog:  [
  "Add API to let player logout",
  "Add API to search bet list of an agent (across all players)",
  "Add API to get bet list and winlose of minigame (if agent registered to play minigames of Mimi)",
  "Add API to get game name from game code"

], modifydate: "24-Sep-2019"},

{version: "1.3",	changelog:  [
  "Add support to sexy baccarat of AWC in 2.5",
], modifydate: "23-Nov-2019"},

{version: "1.3.1",	changelog:  [
  "Add more providers and game types",
  "Update description for two API /data/minigamebetlist and /data/minigamewinlose",
  "Update the data type of `Amount` field in these two APIs: /player/deposit and /player/withdraw"
], modifydate: "03-Dec-2019"},

{version: "2.0",	changelog:  [
  "Add Seamless API"
], modifydate: "01-Jan-2020"},

{version: "2.0.1",	changelog:  [
  "Allow the api /data/betlistby to search by time"
], modifydate: "28-Mar-2020"},

{version: "2.0.2",	changelog:  [
  "Allow client to update betlimit of SexyBaccarat"
], modifydate: "30-Mar-2020"},

{version: "2.0.3",	changelog:  [
  "Update the api 3.1 /data/transaction, add total record to response"
], modifydate: "18-May-2020"},

{version: "2.0.4",	changelog:  [
  "Add function /data/transactionbyRefNo",
  "Add function /data/TransactionOfAgent"
], modifydate: "20-May-2020"},

{version: "2.0.5",	changelog:  [
  "Add new function: BetListPaginated (3.12)",
], modifydate: "22-May-2020"},

{version: "2.0.6",	changelog:  [
  "Add 2.8: get list pending rounds of PP (for certain player)",
], modifydate: "20-Jun-2020"},

{version: "2.0.7",	changelog:  [
  "Add new function BetListDetails (3.13)",
], modifydate: "27-Jun-2020"},

{version: "2.0.8",	changelog:  [
  "Add new function GetOutStandingBets (3.14)",
], modifydate: "03-Aug-2020"},

{version: "2.0.9",	changelog:  [
  "Update Provider List in the appendix",
  "Add new function BetListDetailsV2 (3.15) which does same thing as 3.13 but input will not require authorization code",
  "Update input for update-bet-limit-ids function to support Cockfight",
], modifydate: "14-Aug-2020"},

{version: "2.0.10",	changelog:  [
  "Add function to retrieve total balance of players of certain agent",
], modifydate: "17-Oct-2020"},

{version: "2.0.11",	changelog:  [
  "Add username parameter for GetBalance Api",
], modifydate: "20-Oct-2020"},

{version: "2.0.12",	changelog:  [
  "Update description for parameters of Seamless API",
], modifydate: "21-Oct-2020"},

{version: "2.0.13",	changelog:  [
  "Add 3.17 API get history game url",
], modifydate: "23-Oct-2020"},

{version: "2.0.14",	changelog:  [
  "Add 3.18 GetGameHistoryUrl",
  "Add 3.19 api winlose summarize",
  "Update 3.7, 3.8 to deprecated",
], modifydate: "06-April-2021"},

{version: "2.0.15",	changelog:  [
  "Add 3.20 BettingHistoryNew",
  "Add 3.21 Get player winlose (WinloseV2)",
  "Add 3.22 Get agent winlose (WinloseAllV2)",
], modifydate: "20-Jun-2021"},

{version: "2.0.16",	changelog:  [
  "Update Deposit/Withdrawal function. Add TransGuid when deposit and withdrawal (2.3, 2.4)",
  "Update refno length from 16 to 50 (3.10)",
], modifydate: "30-Jun-2021"},

{version: "2.0.17",	changelog:  [
  "Add 3.23 List available game",
], modifydate: "16-Jul-2021"},

{version: "2.0.18",	changelog:  [
  "Add 4.8 PenddingBets",
  "Add 4.9 ResendBetAndSettle",
], modifydate: "06-Aug-2021"},

{version: "3.0.0",	changelog:  [
  "Remove some unuse/old api and re index number",
  "Update 4.8, 4.9 description",
  "Add base url data https://{{data_domain}} for get data",
  "Add appendix 7 seamless sequence diagram",
  "Update time format"
], modifydate: "25-Oct-2021"},

{version: "3.0.1",	changelog:  [
  "Add 3.18 [POST] GetGameHistoryUrlByRoundId",
  "Fix format date from “yyyy-MM-ddTH:mm:ss.fffZ” to “yyyy-MM-ddTHH:mm:ss.fffZ”"
], modifydate: "29-Oct-2021"},

{version: "3.0.2",	changelog:  [
  "Update 3.18 [POST] GetGameHistoryUrlByRoundId",
], modifydate: "16-Jul-2021"},

{version: "3.0.3",	changelog:  [
  "Update Payload of 2.3",
], modifydate: "19-Jan-2022"},

{version: "3.0.4",	changelog:  [
  "Add Get mmg-outstandingbets Api",
], modifydate: "26-April-2022"},

{version: "3.0.5",	changelog:  [
  "Add Resettle Api ",
], modifydate: "08-July-2022"},

{version: "3.0.6",	changelog:  [
  "Add redirectUrl in getgameUrl Api",
], modifydate: "23-Jun-2023"},

]

export const apiData = [
  {
    title: "Account",
    id: "account",
    api: [
      {
        title: "CreatePlayer",
        id: "createplayer",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/account/createplayer",
        description: "This function is for registering a new player account in middleware system. Every player is binded to an agent. The hierarchy is => Agent -> Player. The new player's default TableLimit is following with player's agent settings.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema : []
              },
              {
                name: "UserName",
                type: "string",
                required: true,
                description: "Username cannot be longer than 15 chars. Only numeric and alphabet is allowed in username. Username must be unique among all users in fund provider",
                restriction: [],
                schema: []
              },
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              }
            ]
          }
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Success",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "{{authentication_token}}",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "gameCode": "string",
              "userName": "string",
              "playerId": "string",
              "currency": "string",
              "language": "string",
              "playerIp": "string",
              "sessionId": "string",
              "isTestAccount": "string",
              "fpId": "string",
              "masterId": 0
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "data": {
                "gameUrl": "string",
                "token": "string"
                }
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            description: null,
            json: {
              error: [],
              message: [],
              data: []
            }
          }
        ]
      },
      {
        title: "Login",
        id: "login",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/account/login",
        description: "Login function is used to get a login token for player who logins to middleware system. The token is binded to this login session and it will be expired in 30 minutes. To obtain new token before it gets expired, consider using RefreshToken function or Login function again. Player is required to carry this token to visit our website for authentication.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "UserName",
                type: "string",
                required: true,
                description: "Username cannot be longer than 15 chars. Only numeric and alphabet is allowed in username. Username must be unique among all users in fund provider",
                restriction: [],
                schema: []
              },
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              }
            ]
          }
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Success",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "{{authentication_token}}",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            description: null,
            json: {
              error: [],
              message: [],
              data: []
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            description: null,
            json: {
              error: [],
              message: [],
              data: []
            }
          }
        ]
      },
      {
        title: "RefreshToken",
        id: "refreshtoken",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/account/refreshtoken",
        description: "This function is used to get a new token for players who have already got authentication token earlier. This function will invalidate the old token as well.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "UserName",
                type: "string",
                required: true,
                description: "Username of the player",
                restriction: [],
                schema: []
              }
            ]
          }
        ],
        responses: [
        {
          code: 200,
          message: "OK",
          parameter: [
            {
                  name: "RESPONSE SCHEMA",
                  description: "application/json",
                  params: [
                    {
                      name: "error",
                      type: "integer",
                      required: false,
                      description: "0",
                      restriction: [],
                      schema: []
                    },
                    {
                      name: "message",
                      type: "string",
                      required: false,
                      description: "Success",
                      restriction: [],
                      schema: []
                    },
                    {
                      name: "data",
                      type: "string",
                      required: false,
                      description: "{",
                      restriction: [],
                      schema: [
                        {
                          name: "UserId",
                          type: "integer",
                          required: false,
                          description: "123"
                        },
                        {
                          name: "UserName",
                          type: "string",
                          required: false,
                          description: "username"
                        },
                        {
                          name: "DisplayName",
                          type: "string",
                          required: false,
                          description: "name"
                        },
                        {
                          name: "Balance",
                          type: "number",
                          required: false,
                          description: "10.00"
                        },
                        {
                          name: "VipPoint",
                          type: "integer",
                          required: false,
                          description: "10"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
            
        ],
        sample: [
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            description: null,
            json: {
              error: [],
              message: [],
              data: [
                []
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            description: null,
            json: {
              error: [],
              message: [],
              data: []
            }
          }
        ]
      }
    ]
  },
  {
    title: "Player",
    id: "player",
    api: [
      {
        title: "Profile",
        id: "profile",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/player/profile",
        description: "This function returns the profile information of a player. ",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "UserName",
                type: "string",
                required: true,
                description: "Username of the player",
                restriction: [],
                schema: []
              }
            ]
          }
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter:  [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Success",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "{",
                    restriction: [],
                    schema: [
                      {
                        name: "UserId",
                        type: "integer",
                        required: false,
                        description: "123"
                      },
                      {
                        name: "UserName",
                        type: "string",
                        required: false,
                        description: "username"
                      },
                      {
                        name: "DisplayName",
                        type: "string",
                        required: false,
                        description: "name"
                      },
                      {
                        name: "Balance",
                        type: "number",
                        required: false,
                        description: "10.00"
                      },
                      {
                        name: "VipPoint",
                        type: "integer",
                        required: false,
                        description: "10"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "playerId": "string",
              "sessionId": "string",
              "fpid": 0
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorMessage": "string",
              "errorCode": 0,
              "data": {
              "balance": 0
              }
            }
          },
        ]
      },
      {
        title: "Check Bet",
        id: "check_bet",
        type: ApiEnum.POST,
        endpoint: "/{funkyUrl}/Funky/Bet/CheckBet",
        description: "This API is for Funky system to query the bet status from operator.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "funkyUrl",
                type: "string",
                required: true,
                description: "Funky System's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: [],
              },
              {
                name: "refNo",
                type: "string",
                required: true,
                description: "The reference number of the bet which is always unique.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "stake",
                    type: "number <double>",
                    required: false,
                    description: "Effective Stake",
                    restriction: [],
                  },
                  {
                    name: "winAmount",
                    type: "number <double>",
                    required: false,
                    description: "The amount that player wins.",
                    restriction: [],
                  },
                  {
                    name: "status",
                    type: "string",
                    required: false,
                    description: "R: Running, W: Won, L: Loss, C: Canceled, D: Draw, V: Voided",
                    restriction: [],
                  },
                  {
                    name: "statementDate",
                    type: "string",
                    required: false,
                    description: "Format: yyyy-MM-dd, statement date for settlement which includes date part only.",
                    restriction: [],
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "playerId": "string",
              "refNo": "string",
              "fpid": 0
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "stake": 0,
              "winAmount": 0,
              "status": "string",
              "statementDate": "string"
            }
          },
        ]
      },
      {
        title: "Place Bet",
        id: "place_bet",
        type: ApiEnum.POST,
        endpoint: "/{funkyUrl}/Funky/Bet/PlaceBet",
        description: "When a player makes a bet in a game, Funky system will send this request to operator system.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "funkyUrl",
                type: "string",
                required: true,
                description: "Funky System's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "bet",
                type: "object",
                required: true,
                description: "",
                restriction: [],
                schema: [
                  {
                    name: "gameCode",
                    type: "string",
                    required: true,
                    description: "The game (by code) to be launched.",
                  },
                  {
                    name: "refNo",
                    type: "string",
                    required: true,
                    description: "The reference number of the bet which is always unique.",
                  },
                  {
                    name: "roundId",
                    type: "string",
                    required: true,
                    description: "RoundId",
                  },
                  {
                    name: "stake",
                    type: "number <double>",
                    required: true,
                    description: "Bet amount",
                  },
                  {
                    name: "voucherId",
                    type: "string",
                    required: false,
                    description: "If player is using voucher, fill in the unique id of voucher.",
                  },
                ]
              },
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: [],
              },
              {
                name: "playerIp",
                type: "string",
                required: true,
                description: "Player’s IP at the moment. This is for preventing players from betting through VPN. (Please enter the correct country’s IP for real players due to regional restrictions, API testing is not subject to this requirement)",
                restriction: [],
              },
              {
                name: "sessionId",
                type: "string",
                required: true,
                description: "User session from platform, the unique ID when the player launch game.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,400,401,402,403,405,407,602",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "balance",
                        type: "number <double>",
                        required: false,
                        description: "Player’s balance.",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "bet": {
                "gameCode": "string",
                "refNo": "string",
                "roundId": "string",
                "stake": 0,
                "voucherId": "string"
              },
              "playerId": "string",
              "sessionId": "string",
              "fpid": 0,
              "playerIp": "string"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "data": {
                "balance": 0
              }
            }
          },
        ]
      },
      {
        title: "Bet Settlement",
        id: "bet_settlement",
        type: ApiEnum.POST,
        endpoint: "/{funkyUrl}/Funky/Bet/SettleBet",
        description: "When a game is completed Funky system will send this request to the operator system to adjust the balance of the player.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "funkyUrl",
                type: "string",
                required: true,
                description: "Funky System's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "betResultReq",
                type: "object",
                required: true,
                description: "",
                restriction: [],
                schema: [
                  {
                    name: "effectiveStake",
                    type: "number <double>",
                    required: true,
                    description: "Effective stake. For some games, game result might be TIE and the stake won’t equal to effective stake. In fishing games, player might play more than the initial stake.",
                  },
                  {
                    name: "gameCode",
                    type: "string",
                    required: true,
                    description: "The game (by code) to be launched.",
                  },
                  {
                    name: "playerId",
                    type: "string",
                    required: true,
                    description: "The unique ID of the player. At least 3 characters are required.",
                  },
                  {
                    name: "stake",
                    type: "number <double>",
                    required: true,
                    description: "Bet amount",
                  },
                  {
                    name: "winAmount",
                    type: "number <double>",
                    required: true,
                    description: "The amount that player wins.",
                  },
                  {
                    name: "freeSpinMainBet",
                    type: "string",
                    required: false,
                    description: "When bet is free spin, fill in the refNo of root bet.",
                  },
                ]
              },
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "refNo",
                type: "string",
                required: true,
                description: "The reference number of the bet which is always unique.",
                restriction: [],
              },
              {
                name: "voucherId",
                type: "string",
                required: false,
                description: "The reference number of the bet which is always unique.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,404,409,403",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "balance",
                        type: "number <double>",
                        required: false,
                        description: "Player’s balance.",
                      },
                      {
                        name: "playerId",
                        type: "string",
                        required: false,
                        description: "The unique ID of the player. At least 3 characters are required.",
                      },
                      {
                        name: "currency",
                        type: "string",
                        required: false,
                        description: "User currency (if you want to use kcurrency please contact to FunkySupport).",
                      },
                      {
                        name: "statementDate",
                        type: "number <double>",
                        required: false,
                        description: "Format: yyyy-MM-dd. Statement date for settlement which includes date part only.",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "refNo": "string",
              "betResultReq": {
                "winAmount": 0,
                "stake": 0,
                "effectiveStake": 0,
                "playerId": "string",
                "gameCode": "string",
                "freeSpinMainBet": "string"
              },
              "fpid": 0,
              "voucherId": "string"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "data": {
                "balance": 0,
                "playerId": "string",
                "currency": "string",
                "statementDate": "string"
              }
            }
          },
        ]
      },
      {
        title: "Bet Cancellation",
        id: "bet_cancellation",
        type: ApiEnum.POST,
        endpoint: "/{funkyUrl}/Funky/Bet/CancelBet",
        description: "If a Bet request timeout or operator system responded an error to the game provider, a CancelBet request will be sent to the operator system. Funky system will treat it as a failed bet and report to the player that his bet has been failed. Operator must handle this request once and only once and must respond to our platform. Successfully settled bets cannot be canceled through the cancel bet API.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "funkyUrl",
                type: "string",
                required: true,
                description: "Funky System's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: [],
              },
              {
                name: "refNo",
                type: "string",
                required: true,
                description: "The reference number of the bet which is always unique.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,404,409,403",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "refNo",
                        type: "string",
                        required: false,
                        description: "The reference number of the bet which is always unique.",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "playerId": "string",
              "refNo": "string",
              "fpid": 0
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorMessage": "string",
              "errorCode": 0,
              "data": {
                "refNo": "string"
              }
            }
          },
        ]
      },
      {
        title: "*Void Bets(Already Settled)",
        id: "void_bet",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Bet/VoidBets",
        description: "If the balance of the player needs to be adjusted after a game has completed, the Funky system will send this request to the operator system.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "refNos",
                type: "Array of strings",
                required: true,
                description: "RefNos",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,500",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "fpId": 0,
              "refNos": [
                "string"
              ]
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorMessage": "string",
              "errorCode": 0
            }
          },
        ]
      },
      {
        title: "*Update Balance Event",
        id: "update_balance_event",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Game/Event/UpdateBalance",
        description: "This api will be requested by operator, when the player’s balance is changed. When the game provider receive the request, they should call the get balance api to update the latest balance.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,400",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "playerId": "string",
              "fpid": 0
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string"
            }
          },
        ]
      },
      {
        title: "*Update Balance Event",
        id: "update_balance_event",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Game/Event/UpdateBalance",
        description: "This api will be requested by operator, when the player’s balance is changed. When the game provider receive the request, they should call the get balance api to update the latest balance.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,400",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "playerId": "string",
              "fpid": 0
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string"
            }
          },
        ]
      },
      {
        title: "Bonus Bet [Optional]",
        id: "bonus_bet",
        type: ApiEnum.POST,
        endpoint: "/{funkyUrl}/Bet/BonusBet",
        description: "When a free spin game has completed, the Funky system will send this request to the operator system to adjust the balance of the player.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "funkyUrl",
                type: "string",
                required: true,
                description: "Funky System's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "bonusResultReq",
                type: "object",
                required: true,
                description: "Platform ID.",
                restriction: [],
                schema: [
                  {
                    name: "bonusRefNo",
                    type: "string",
                    required: false,
                    description: "BonusRefNo",
                  },
                  {
                    name: "bonusAmount",
                    type: "number <double>",
                    required: false,
                    description: "BonusAmount",
                  },
                  {
                    name: "playerId",
                    type: "string",
                    required: false,
                    description: "The unique ID of the player. At least 3 characters are required.",
                  },
                  {
                    name: "gameCode",
                    type: "string",
                    required: false,
                    description: "The game (by code) to be launched.",
                  },
                ]
              },
              {
                name: "currency",
                type: "string",
                required: true,
                description: "User currency (if you want to use kcurrency please contact to FunkySupport).",
                restriction: [],
              },
              {
                name: "fpId",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "refNo",
                type: "string",
                required: true,
                description: "The reference number of the bet which is always unique.",
                restriction: [],
              },
              {
                name: "totalRound",
                type: "integer <int32>",
                required: false,
                description: "Total Round",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                    schema: [
                      {
                        name: "errorCode",
                        type: "integer",
                        required: false,
                        description: "0",
                      },
                      {
                        name: "errorMessage",
                        type: "string",
                        required: false,
                        description: "Error Code List.",
                      },
                      {
                        name: "balance",
                        type: "number <double>",
                        required: false,
                        description: "Player’s balance.",
                      },
                      {
                        name: "playerId",
                        type: "string",
                        required: false,
                        description: "The unique ID of the player. At least 3 characters are required.",
                      },
                      {
                        name: "statementDate",
                        type: "string <date-time>",
                        required: false,
                        description: "Format: yyyy-MM-dd. Statement date for settlement which includes date part only.",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "refNo": "string",
              "fpId": 0,
              "currency": "string",
              "totalRound": 0,
              "bonusResultReq": {
                "bonusRefNo": "string",
                "bonusAmount": 0,
                "playerId": "string",
                "gameCode": "string"
              }
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorMessage": "string",
              "errorCode": 0,
              "data": {
                "errorCode": 0,
                "errorMessage": "string",
                "balance": 0,
                "playerId": "string",
                "statementDate": "2019-08-24T14:15:22Z"
              }
            }
          },
        ]
      },
      {
        title: "Get Bet Status(For Transfer Game)",
        id: "get_bet_status",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Bet/GetBetStatus",
        description: "Operator use the API to check the transfer game bet status.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "gameCode",
                type: "string",
                required: true,
                description: "Platform ID.",
                restriction: ["non-empty"],
              },
              {
                name: "refNo",
                type: "string",
                required: true,
                description: "The reference number of the bet which is always unique.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,404,3002,3004,9999",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "refNo",
                        type: "string",
                        required: false,
                        description: "The reference number of the bet which is always unique.",
                      },
                      {
                        name: "status",
                        type: "string",
                        required: false,
                        description: "BetsInfoStatus",
                      },
                      {
                        name: "message",
                        type: "",
                        required: false,
                        description: "Message",
                      },
                      {
                        name: "statementDate",
                        type: "string",
                        required: false,
                        description: "Format: yyyy-MM-dd. Statement date for settlement which includes date part only.",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "gameCode": "string",
              "refNo": "string"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "data": {
                "refNo": "string",
                "status": "string",
                "message": "string",
                "statementDate": "string"
              }
            }
          },
        ]
      },
    ]
  },
  {
    title: "Bet Detail",
    id: "bet_detail",
    api: [
      {
        title: "Get Bet Detail API",
        id: "get_bet_detail_api",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Bet/GetBetDetail",
        description: "This API is for Player to get the bet detail from Funky System.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "gameCode",
                type: "string",
                required: true,
                description: "The game (by code) to be launched.",
                restriction: [],
              },
              {
                name: "lang",
                type: "string",
                required: true,
                description: "The language of the player. Will return English if the specified language code is not supported or recognized.",
                restriction: [],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: [],
              },
              {
                name: "refNo",
                type: "string",
                required: true,
                description: "The reference number of the bet which is always unique.",
                restriction: [],
              },
              {
                name: "sourceIp",
                type: "string",
                required: true,
                description: "The request ip",
                restriction: [],
              },
              {
                name: "location",
                type: "string",
                required: false,
                description: "The “ISO 3166 country codes” alpha-2 of request. Reference : https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,404",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "url",
                        type: "string",
                        required: false,
                        description: "Url",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "gameCode": "string",
              "refNo": "string",
              "playerId": "string",
              "lang": "string",
              "fpId": 0,
              "sourceIp": "string",
              "location": "string"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorMessage": "string",
              "errorCode": 0,
              "data": {
                "url": "string"
              }
            }
          },
        ]
      },
      {
        title: "Bet Detail",
        id: "bet_detail_api",
        type: ApiEnum.GET,
        endpoint: "/betDetailUrl",
        description: "The bet detail Url.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "betDetailUrl",
                type: "string",
                required: true,
                description: "The URL for the operator to redirect the player to the proper bet detail page.",
                restriction: [],
              }
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,404",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "url",
                        type: "string",
                        required: false,
                        description: "Url",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorMessage": "string",
              "errorCode": 0,
              "data": {
                "url": "string"
              }
            }
          },
        ]
      },
    ]
  },
  {
    title: "Promotion",
    id: "promotion",
    api: [
      {
        title: "Get Vouchers [Optional]",
        id: "get_vouchers",
        type: ApiEnum.POST,
        endpoint: "/{funkyUrl}/User/GetVoucher",
        description: "If you want enable voucher, please contact FunkySupport.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "funkyUrl",
                type: "string",
                required: true,
                description: "Funky System's URL",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "currency",
                type: "string",
                required: true,
                description: "User currency (if you want to use kcurrency please contact to FunkySupport).",
                restriction: [],
              },
              {
                name: "fpId",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "gameCode",
                type: "string",
                required: true,
                description: "The game (by code) to be launched.",
                restriction: [],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: [],
              },
              {
                name: "sessionId",
                type: "string",
                required: true,
                description: "User session from platform, the unique ID when the player launch game.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,401",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "totalRemainAmount",
                        type: "number <double>",
                        required: false,
                        description: "Total Remain Amount",
                      },
                      {
                        name: "vouchers",
                        type: "Array of objects",
                        required: false,
                        description: "Vouchers",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "playerId": "string",
              "gameCode": "string",
              "sessionId": "string",
              "fpId": 0,
              "currency": "string"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "data": {
                "totalRemainAmount": 0,
                "vouchers": [
                  {
                  "voucherId": "string",
                  "fixStake": 0,
                  "effectiveDate": "2019-08-24T14:15:22Z",
                  "expireDate": "2019-08-24T14:15:22Z",
                  "freeSpin": 0,
                  "usedFreeSpin": 0,
                  "netFreeSpin": 0,
                  "gameCode": "string"
                  }
                ]
              }
            }
          },
        ]
      },
    ]
  },
  {
    title: "Consolidate Report",
    id: "consolidate_report",
    api: [
      {
        title: "Win/Loss Report API by Player",
        id: "win_loss_report_api_player",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Funky/Report/GetActivePlayerByGame",
        description: "Get win/loss report by GameCode, StartDate, EndDate, FpId and Page.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "endDate",
                type: "string <date-time>",
                required: true,
                description: "yyyy-MM-dd (StatementDate)",
                restriction: [],
              },
              {
                name: "fpId",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "gameCode",
                type: "string",
                required: true,
                description: "The game (by code) to be launched.",
                restriction: [],
              },
              {
                name: "includeTestAccount",
                type: "boolean",
                required: true,
                description: "If true, all data should include test accounts. If false, all data should not include test accounts.",
                restriction: [],
              },
              {
                name: "page",
                type: "integer <int32>",
                required: true,
                description: "Current page.",
                restriction: [],
              },
              {
                name: "startDate",
                type: "string <date-time>",
                required: true,
                description: "yyyy-MM-dd (StatementDate)",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "totalPage",
                    type: "integer <int32>",
                    required: false,
                    description: "Total number of pages",
                    restriction: [],
                  },
                  {
                    name: "currentPage",
                    type: "integer <int32>",
                    required: false,
                    description: "Current page.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "Array of objects",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "playerId",
                        type: "number <double>",
                        required: false,
                        description: "The unique ID of the player. At least 3 characters are required.",
                      },
                      {
                        name: "currency",
                        type: "string",
                        required: false,
                        description: "User currency (if you want to use kcurrency please contact to FunkySupport).",
                      },
                      {
                        name: "betCount",
                        type: "integer <int32>",
                        required: false,
                        description: "Bet Count",
                      },
                      {
                        name: "totalStake",
                        type: "number <double>",
                        required: false,
                        description: "TotalStake",
                      },
                      {
                        name: "winloss",
                        type: "number <double>",
                        required: false,
                        description: "Win/Loss = WinAmount - stake. PlayerA placed $10 to an bet option which odds was 1.95, and he wins then gets $19.5(winAmount), his winloss was $19.5-$10=$9.5. PlayerB placed $10 to an bet option which odds was 1.95, and he loss then gets $0 (winAmount), therefore the winloss of the bet is $0-$10=$-10",
                      },
                      {
                        name: "isTestAccount",
                        type: "boolean",
                        required: false,
                        description: "A flag indicates if the account is for testing or not.Default value set to false.",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "playerId": "string",
              "gameCode": "string",
              "sessionId": "string",
              "fpId": 0,
              "currency": "string"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "data": {
                "totalRemainAmount": 0,
                "vouchers": [
                  {
                  "voucherId": "string",
                  "fixStake": 0,
                  "effectiveDate": "2019-08-24T14:15:22Z",
                  "expireDate": "2019-08-24T14:15:22Z",
                  "freeSpin": 0,
                  "usedFreeSpin": 0,
                  "netFreeSpin": 0,
                  "gameCode": "string"
                  }
                ]
              }
            }
          },
        ]
      },
      {
        title: "Transaction Report API by Statement Date",
        id: "transaction_report_api_statement_date",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Funky/Report/GetTransactionListByStatementDate",
        description: "Get transactions by StartDate, EndDate, FpId and Page. Each page contains up to 100 records.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "endDate",
                type: "string <date-time>",
                required: true,
                description: "yyyy-MM-dd (StatementDate)",
                restriction: [],
              },
              {
                name: "fpId",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "page",
                type: "integer <int32>",
                required: true,
                description: "Current page.",
                restriction: [],
              },
              {
                name: "startDate",
                type: "string <date-time>",
                required: true,
                description: "yyyy-MM-dd (StatementDate)",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "totalPage",
                    type: "integer <int32>",
                    required: false,
                    description: "Total number of pages",
                    restriction: [],
                  },
                  {
                    name: "currentPage",
                    type: "integer <int32>",
                    required: false,
                    description: "Current page.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "Array of objects",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "statementDate",
                        type: "string",
                        required: false,
                        description: "Format: yyyy-MM-dd. Statement date for settlement which includes date part only.",
                      },
                      {
                        name: "fpId",
                        type: "integer <int32>",
                        required: false,
                        description: "Platform ID.",
                      },
                      {
                        name: "betCount",
                        type: "integer <int32>",
                        required: false,
                        description: "Bet Count",
                      },
                      {
                        name: "activePlayerCount",
                        type: "integer <int32>",
                        required: false,
                        description: "Distinct Player Count",
                      },
                      {
                        name: "gameCode",
                        type: "string",
                        required: false,
                        description: "The game (by code) to be launched.",
                      },
                      {
                        name: "currency",
                        type: "string",
                        required: false,
                        description: "User currency (if you want to use kcurrency please contact to FunkySupport).",
                      },
                      {
                        name: "betAmount",
                        type: "number <double>",
                        required: false,
                        description: "Bet Amount(Effective Stake,Including Bonus Game)",
                      },
                      {
                        name: "winLose",
                        type: "number <double>",
                        required: false,
                        description: "Win/Lose = Payout - Stake",
                      },
                      {
                        name: "payout",
                        type: "number <double>",
                        required: false,
                        description: "Payout",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "startDate": "2019-08-24T14:15:22Z",
              "endDate": "2019-08-24T14:15:22Z",
              "fpId": 0,
              "page": 0
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "totalPage": 0,
              "currentPage": 0,
              "data": [
                {
                "statementDate": "string",
                "playerId": "string",
                "betId": "string",
                "currency": "string",
                "gameCode": "string",
                "betAmount": 0,
                "winloss": 0,
                "stake": 0,
                "payout": 0
                }
              ]
            }
          },
        ]
      },
      {
        title: "Win/Loss Report API by StatementDate",
        id: "win_loss_report_api_statement_date",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Funky/Report/GetConsolidateByStatementDate",
        description: "Get win/loss report by StartDate, EndDate, FpId.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "endDate",
                type: "string <date-time>",
                required: true,
                description: "yyyy-MM-dd (StatementDate)",
                restriction: [],
              },
              {
                name: "includeTestAccount",
                type: "boolean",
                required: true,
                description: "If true, all data should include test accounts. If false, all data should not include test accounts.",
                restriction: [],
              },
              {
                name: "startDate",
                type: "string <date-time>",
                required: true,
                description: "yyyy-MM-dd (StatementDate)",
                restriction: [],
              },
              {
                name: "fpId",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "Array of objects",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "statementDate",
                        type: "string",
                        required: false,
                        description: "Format: yyyy-MM-dd. Statement date for settlement which includes date part only.",
                      },
                      {
                        name: "fpId",
                        type: "integer <int32>",
                        required: false,
                        description: "Platform ID.",
                      },
                      {
                        name: "betCount",
                        type: "integer <int32>",
                        required: false,
                        description: "Bet Count",
                      },
                      {
                        name: "activePlayerCount",
                        type: "integer <int32>",
                        required: false,
                        description: "Distinct Player Count",
                      },
                      {
                        name: "gameCode",
                        type: "string",
                        required: false,
                        description: "The game (by code) to be launched.",
                      },
                      {
                        name: "currency",
                        type: "string",
                        required: false,
                        description: "User currency (if you want to use kcurrency please contact to FunkySupport).",
                      },
                      {
                        name: "betAmount",
                        type: "number <double>",
                        required: false,
                        description: "Bet Amount(Effective Stake,Including Bonus Game)",
                      },
                      {
                        name: "winLose",
                        type: "number <double>",
                        required: false,
                        description: "Win/Lose = Payout - Stake",
                      },
                      {
                        name: "payout",
                        type: "number <double>",
                        required: false,
                        description: "Payout",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "startDate": "2019-08-24T14:15:22Z",
              "endDate": "2019-08-24T14:15:22Z",
              "fpId": 0,
              "includeTestAccount": true
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "data": [
                {
                "statementDate": "string",
                "fpId": 0,
                "betCount": 0,
                "activePlayerCount": 0,
                "gameCode": "string",
                "currency": "string",
                "betAmount": 0,
                "winLose": 0,
                "payout": 0
                }
              ]
            }
          },
        ]
      },
    ]
  },
]

export const erorcodes = [
    {error: "0",	description: (["Function executed successfully"])},
    {error: "1",	description:  ["Some error happened. Refer to the `message` field to get more information."]}
  ]

export const providergametype = [

  {providerid: "2",	providername:  ["SBO",], gametypes: "SportsBook, Casino, VirtualSports, Games"},
  {providerid: "3",	providername:  ["AG",], gametypes: "AGIN, EGames (Where AGIN is Casino and EGames is Slot)"},
  {providerid: "4",	providername:  ["Pragmatic Play",], gametypes: "Slot"},
  {providerid: "5",	providername:  ["IMOne",], gametypes: "IMSlot and IMLiveDealer (Corresponding to Slot and Casino)"},
  {providerid: "6",	providername:  ["AWC",], gametypes: "SexyBaccarat"},
  {providerid: "8",	providername:  ["MM",], gametypes: "Slot"},
  {providerid: "10",	providername:  ["Red Tiger",], gametypes: "Slot"},
  {providerid: "11",	providername:  ["PGSoft",], gametypes: "Slot"},
  {providerid: "12",	providername:  ["Pragmatic Play Live",], gametypes: "Casino"},
  {providerid: "13",	providername:  ["WM Live",], gametypes: "Casino"},
  {providerid: "14",	providername:  ["Spade Gaming",], gametypes: "Slot, Fishing"},
  {providerid: "15",	providername:  ["Gamatron",], gametypes: "Slot, Fishing"},
  {providerid: "16",	providername:  ["EvoPlay",], gametypes: "Slot, Table"},
]

export const language = [
  {value: "en-us",	description: (["English"])},
  {value: "zh-tw",	description: (["Traditional Chinese"])},
  {value: "zh-cn",	description: (["Simplified Chinese"])},
  {value: "th-th",	description: (["Thai"])},
]

export const timezone = [
  {
    json : {
      "-12:00": "GMT −12",
      "-11:00": "GMT −11",
      "-10:00": "GMT −10",
      "-9:30": "GMT -9:30",
      "-9:00": "GMT -9",
      "-8:00": "GMT -8",
      "-7:00": "GMT -7",
      "-6:00": "GMT -6",
      "-5:00": "GMT -5",
      "-4:00": "GMT -4",
      "-3:30": "GMT -3:30",
      "-3:00": "GMT -3",
      "-2:00": "GMT -2",
      "-1:00": "GMT -1",
      "00:00": "GMT +0",
      "01:00": "GMT +1",
      "02:00": "GMT +2",
      "03:00": "GMT +3",
      "03:30": "GMT +3:30",
      "04:00": "GMT +4",
      "04:30": "GMT +4:30",
      "05:00": "GMT +5",
      "05:30": "GMT +5:30",
      "06:00": "GMT +6",
      "06:30": "GMT +6:30",
      "07:00": "GMT +7",
      "08:00": "GMT +8",
      "08:30": "GMT +8:30",
      "09:00": "GMT +9",
      "09:30": "GMT +9:30",
      "10:00": "GMT +10",
      "10:30": "GMT +10:30",
      "11:00": "GMT +11",
      "12:00": "GMT +12",
      "12:30": "GMT +12:30",
      "13:00": "GMT +13",
      "14:00": "GMT +14"
  }}
]