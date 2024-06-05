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
        id: "getgameurl",
        type: ApiEnum.POST,
      },
      {
        name: "Logout",
        id: "logout",
        type: ApiEnum.POST,
      },
      {
        name: "Update BetlimitID for Sexy",
        id: "update_betlimitid_for_sexy",
        type: ApiEnum.POST,
      },
      {
        name: "Get pending rounds in Pragmatic Play (Optional)",
        id: "get_pending_rounds_in_pragmatic_play_(optional)",
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
              "ApiKey":"{{api_key}}",
              "UserName":"username",
              "AgentName":"{{agent_name}}"

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
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "UserName":"username",
              "AgentName":"{{agent_name}}"

            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            description: null,
            json: {
              error: 0,
              message: "Success",
              data: "{{authentication_token}}"
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            description: null,
            json: {
              error: 1,//has error if greater than 0
              message: "corresponding message",
              data: ""
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
              error: 0,
              message: "Success",
              data: "{{authentication_token}}"
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            description: null,
            json: {
              error: 1, //has error if greater than 0
              message: "corresponding message",
              data: ""
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
              "UserName":"username"
            }
          },
          {
            name: "Request samples",
            payload: "200",
            contentType: "application/json",
            json: {
              error: 0,
              message: "Success",
              data: { 
                "UserId": "123",
                "UserName": "username",
                "DisplayName": "name",
                "Balance" : 10.00,
                "VipPoint": 10
              }
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              error : 1, //has error if greater than 0
              message: "corresponding message",
              data: ""
              }
            }
        ]
      },
      {
        title: "GetBalance",
        id: "getbalance",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/player/getbalance",
        description: "",
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
            message: "Success",
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
                        name: "Balance",
                        type: "number",
                        required: false,
                        description: "10.00"
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
              "UserName":"username"
            }
          },
          {
            name: "Request samples",
            payload: "200",
            contentType: "application/json",
            json: {
              error: 0,
              message: "Success",
              data: {
                "Balance": 10.00
              }
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              error : 1, //has error if greater than 0
              message: "corresponding message",
              data: ""
              }
            }
        ]
      },
      {
        title: "Deposit",
        id: "deposit",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/player/deposit",
        description: "",
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
              },
              {
                name: "Amount",
                type: "string",
                required: true,
                description: "The amount of money to be used for deposit to the specified player. It is a decimal number in format of a string.",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: false,
                description: "Your unique transguid, TransGuid must have less or equal than 50 characters and only contain \"a-z\", \"0-9\", \"-\"",
                restriction: [],
                schema: []
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
                        name: "Balance",
                        type: "string",
                        required: false,
                        description: "1000.00 // This balance is the balance after the deposit"
                      },
                      {
                        name: "TransGuid",
                        type: "string",
                        required: false,
                        description: "somecode"
                      }
                    ]
                  }
                ]
              },
              
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
              "UserName":"username",
              "Amount": 1000.6,
              "TransGuid": "<Your TransGuid>"
            }
          },
          {
            name: "Response sample",
            payload: "200",
            contentType: "application/json",
            json: {
              error: 0,
              message:"Success",
              data: {
                "Balance": 1000.00, // This balance is the balance after the deposit
                "TransGuid": "somecode"
              }
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              error : 1, //has error if greater than 0
              message: "corresponding message",
              data: ""
              }
            },
        ]
      },
      {
        title: "Withdraw",
        id: "withdraw",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/player/withdraw",
        description: "",
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
              },
              {
                name: "Amount",
                type: "string",
                required: true,
                description: "The amount of money to be used for withdrawal from the specified player. It is a decimal number in format of a string.",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: false,
                description: "Your unique transguid, TransGuid must have less or equal than 50 characters and only contain \"a-z\", \"0-9\", \"-\"",
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
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "Balance",
                        type: "string",
                        required: false,
                        description: "900.00 // This balance is the balance after the withdrawal"
                      },
                      {
                        name: "TransGuid",
                        type: "string",
                        required: false,
                        description: "<Your TransGuid>"
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
              "UserName":"username",
              "Amount": 100.5,
              "TransGuid": "<Your TransGuid>"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "Success",
              "data": {
                  "Balance": 900.00, // This balance is the balance after the withdrawal
                  "TransGuid": "<Your TransGuid>"
              }
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""

            }
          }
        ]
      },
      {
        title: "GetGameUrl",
        id: "getgameurl",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/player/getgameurl",
        description: "Get the game URL of provider to let player play that game.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "The game type, each provider has a set of available game types",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: false,
                description: "In some game types of some providers, this field will be required. Request technical team for your concrete game id list.",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "string",
                required: true,
                description: "Available values: -	“0”: this will navigate players to game lobby -	“2”: SBO -	“3”: AG -	“4”: PragmaticPlay More details in the Appendix",
                restriction: [],
                schema: []
              },
              {
                name: "Language",
                type: "string",
                required: true,
                description: "See Appendix"
              },
              {
                name: "Platform",
                type: "string",
                required: true,
                description: "D: Desktop, M: Mobile"
              },
              {
                name: "BetLimitIds",
                type: "Array of integers",
                required: false,
                description: "This field is optional and dedicated to SexyBaccarat of AWC.If this field presents, please make sure to enter from 1 to 3 bet limit ids. For the available bet limit ids, please refer to the attached excel file (ask our technical team)"
              },
              {
                name: "Language",
                type: "string",
                required: true,
                description: "The parameter RedirectUrl is necessary for overwriting the original behavior of Close game button."
              },
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
                    description: "http://the-link.url",
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
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "GameType":"Games",
              "GameId":"1",
              "ProviderId": "3",
              "Language":"en-us",
              "Platform":"D",
              "BetLimitIds": [280105]

            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "Success",
              "data": "http://the-link.url"
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
            }
          }
        ]
      },
      {
        title: "Logout",
        id: "logout",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/player/logout",
        description: "Logout Mimi system, and close all game sessions.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: []
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
                    description: "",
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
                    description: "5 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Invalid Authorization Token.",
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
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "Success",
              "data": ""
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 5, //has error if greater than 0
              "message": "Invalid Authorization Token.",
              "data": ""
            }
          },
        ]
      },
      {
        title: "Update BetlimitID for Sexy",
        id: "update_betlimitid_for_sexy",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/player/update-bet-limit-ids",
        description: "Update betlimitids for existing players. Applied for Sexy Baccarat. Please refer to the attached excel to know more about the available ID to send.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: []
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
                    description: "",
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
                    description: "5 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Invalid Authorization Token.",
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
              "Ids": [112,223],
              "CfMinBet": 1,
              "CfMaxBet": 100,
              "CfMinDraw": 1,
              "CfMaxDraw": 100,
              "CfMaxMatch": 200
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "Success",
              "data": ""
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 5, //has error if greater than 0
              "message": "Invalid Authorization Token.",
              "data": ""
            }
          }
        ]
      },
      {
        title: "Get pending rounds in Pragmatic Play (Optional)",
        id: "get_pending_rounds_in_pragmatic_play_(optional)",
        type: ApiEnum.GET,
        endpoint: "https://{{api_domain}}/player/get-pending-pp-rounds",
        description: "Sometimes when player purchase freespin of some slot game of Pragmatic Play, the round will be in the “pending” state until the player spin all the freespin. This API will return all those pending rounds.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: []
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
                    description: "[",
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
                    description: "5 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Invalid Authorization Token.",
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
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "Success",
              "data": [
                  {
                      "betTime": "2020-06-20T09:46:39.167Z",
                      "gameId": "vs20fruitsw",
                      "playSessionID": "2361357885",
                      "betAmount": "6000.0"
                  }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 5, //has error if greater than 0
              "message": "Invalid Authorization Token.",
              "data": []
            }
          },
        ]
      }
    ]
  },

  {
    title: "Data (https://{{data_domain}})",
    id: "data_domain",
    api: [
      {
        title: "Transaction",
        id: "transaction",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/transaction",
        description: "Get the transaction list of the specified player in the specified date range.",
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