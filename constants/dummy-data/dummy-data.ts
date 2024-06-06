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
        id: "getgamename_(optional)",
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
        type: ApiEnum.NONE,
      },
      {
        name: "Provider and game types",
        id: "provider_game_types",
        type: ApiEnum.NONE,
      },
      {
        name: "Pagination",
        id: "pagination",
        type: ApiEnum.NONE,
      },
      {
        name: "Language",
        id: "language",
        type: ApiEnum.NONE,
      },
      {
        name: "Date time in input and output",
        id: "date_time_input_output",
        type: ApiEnum.NONE,
      },
      {
        name: "Supported timezone",
        id: "supported_timezone",
        type: ApiEnum.NONE,
      },
      {
        name: "Mimi seamless diagram",
        id: "mimi_seamless_diagram",
        type: ApiEnum.NONE,
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
                      description: "",
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
                    description: "",
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
        description: "This function returns the balance of a player.",
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
                    description: "",
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
        description: "This function allows to deposit money amount to a player.",
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
                    description: "",
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
        description: "This function allows a player to withdraw money.",
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
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "PageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for PageSize is 100.",
                restriction: [],
                schema: []
              },
              {
                name: "Type",
                type: "string",
                required: true,
                description: "The type of transactions you want to get. It can take these values: “deposit”, “withdraw” and “all” to get respective result.",
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
                    description: "",
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
                        name: "Count",
                        type: "integer",
                        required: false,
                        description: "250"
                      },
                      {
                        name: "Entities",
                        type: "string",
                        required: false,
                        description: ""
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
              "FromDate":"2019-08-01 00:00:00",
              "ToDate":"2019-08-30 00:00:00",
              "PageIndex": 1,
              "PageSize": 10,
              "Type": "deposit"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": {
              "Count": 250,
              "Entities":[
                    {
                      "Id": 81,
                  "Type": "Withdraw",
                      "CreateDate": "2019-08-14T08:23:19Z",
                      "StartAmount": 1000.00, // The balance before the withdrawal
                      "AmountChange": 100.00, // The amount to be withdrawn
                      "EndAmount": 900.00, // The balance after the withdrawal
                      "TransGuid": "5235235"
                    },
                    {
                      "Id": 80,
                      "Type": "Deposit",
                      "CreateDate": "2019-08-14T08:19:33Z",
                      "StartAmount": 0.00, // The balance before the deposit
                      "AmountChange": 1000.00, // The amount to be deposited
                      "EndAmount": 1000.00, // The balance after the deposit
                      "TransGuid": "5252523"
                    }
                ]
                }
            }
          },
          {
            name: "Request samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
            }
          },
        ]
      },
      {
        title: "BetList",
        id: "betlist",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/betlist",
        description: "Get the list of bets that the specified player made in the specified date range.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "PageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for PageSize is 100.",
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
                    description: "",
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "FromDate":"2019-08-01 00:00:00",
              "ToDate":"2019-08-30 00:00:00",
              "PageIndex": 1,
              "PageSize": 10
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": [
                  {
                      "UserName": "username",
                      "TransGuid": "11111111",
                      "ActualStake": 19.60,
                      "WinLost": 39.60,
                      "Profit": 20.00,
                      "StartAmount": 664.50,
                      "BetDate": "2019-08-13T16:44:17Z",
                      "GameType": "SportsBook",
                      "GameId": null,
                      "ProductType": null,
                      "TableName": null,
                      "Status": "Settled",
                      "ProviderStatus": "won",
                      "ProviderId": 2,
                      "Provider": "SBO"
                  }
              ]
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
        title: "BetListBy",
        id: "betlistby",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/betlistby",
        description: "Like the BetList function, but this function limits the result to the specified provider only. The result will be sorted by the settled time.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id. So, the result will be limited to this provider only.",
                restriction: [],
                schema: []
              },
              {
                name: "PageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for PageSize is 100.",
                restriction: [],
                schema: []
              },
              {
                name: "TimeSpecific",
                type: "boolean",
                required: false,
                description: "By default, this field will have the value `false`. When this field is `true`, we will consider limiting the result to the specific time in `FromDate` and `ToDate`",
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
                    description: "",
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "FromDate":"2019-08-01 00:00:00",
              "ToDate":"2019-08-30 00:00:00",
              "ProviderId": 3,
              "PageIndex": 1,
              "PageSize": 10,
              "TimeSpecific": true
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": [
                  {
                      "UserName": "username",
                      "TransGuid": "11111111",
                      "ActualStake": 19.60,
                      "WinLost": 39.60,
                      "Profit": 20.00,
                      "StartAmount": 664.50,
                      "BetDate": "2019-08-13T16:44:17.000Z",
                      "GameType": "Slot",
                      "GameId": null,
                      "ProductType": null,
                      "TableName": null,
                      "Status": "Settled",
                      "ProviderStatus": "won",
                      "ProviderId": 3,
                      "Provider": "AG"
                  }
              ]
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
        title: "BetListOfAgent",
        id: "betlistofagent",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/betlistofagent",
        description: "Get list of bets of all players of this agent depends on the input.",
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
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id. So, the result will be limited to this provider only. If you set ProviderId = 0 here, it means you will get data of all providers.",
                restriction: [],
                schema: []
              },
              {
                name: "pageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for PageSize is 100.",
                restriction: [],
                schema: []
              },
              {
                name: "TimeSpecific",
                type: "boolean",
                required: false,
                description: "By default, this field will have the value `false`. When this field is `true`, we will consider limiting the result to the specific time in `FromDate` and `ToDate`",
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
                    description: "",
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
                        name: "Count",
                        type: "string",
                        required: false,
                        description: "250 // Total of records that satisfied the request you can use"
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "AgentName":"{{agent_name}}",
              "FromDate":"2019-08-01 00:00:00",
              "ToDate":"2019-08-30 00:00:00",
              "PageIndex": 1,
              "PageSize": 20,
              "ProviderId": 2,
              "TimeSpecific": true
            
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": {
            "Count": 250, // Total of records that satisfied the request, you can use
                // this figure to count total page
            "Entities": [
                {
                          "UserName": "username",
                          "TransGuid": "B00179411774",
                          "Stake": 10.00,
                          "ActualStake": 10.00,
                          "WinLost": 0.00,
                          "Profit": -10.00,
                          "StartAmount": 10062.84,
                          "WinLoseDate": "2019-09-19T10:54:50.337",
                          "BetDate":"2019-09-19T10:54:51.237",
                          "GameType": "Casino",
                          "GameName": "Name",
                          "GameId": "55555",
                          "ProductType": "type",
                          "TableName": "table name",
                          "Status": "Settled",
                          "ProviderStatus": "Lose",
                          "ProviderId": 2,
                          "Provider": "SBO_BetFun"
                      }
            ]
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
        title: "GetGameName (optional)",
        id: "getgamename_(optional)",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/getgamename",
        description: "Get name of the game base on the code.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The ProviderId ",
                restriction: [],
                schema: []
              },
              {
                name: "Code",
                type: "string",
                required: true,
                description: "Code of the game.",
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
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "Dragon Kingdom",
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ProviderId": 4,
              "Code": "vs25dragonkingdom"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": "Dragon Kingdom"
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
        title: "Get Transaction by RefNo",
        id: "get_transaction_by_refno",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/ TransactionByRefNo",
        description: "When doing deposit or withdraw, the response may contain a field named `TransGuid`. You can use this function to retrieve information of certain transaction base on that TransGuid (in this function, the field TransGuid is called RefNo).",
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
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "RefNo",
                type: "string",
                required: true,
                description: "Received from deposit/withdrawal transfer.",
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
                params: []
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
                    description: " Agent Name is not found",
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "RefNo": "7ud6tjn1x643c1hy",
              "AgentName": "AGN",
              "ApiKey": "aaaappppiiiikkkkeeeeyyyy"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "Id": 1908,
              "Type": "Withdraw",
              "CreateDate": "2020-03-11T16:32:19.000Z",
              "StartAmount": 4000.00,
              "AmountChange": 1.00,
              "EndAmount": 3999.00,
              "TransGuid": "7ud6tjn1x643c1hy",
              "AgentName": "AGN",
              "UserName": "usrname",
              "Note": "usrname transfer to AGN"
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": " Agent Name is not found",
              "data": ""
              }
          }
        ]
      },
      {
        title: "Get Transaction of Agent",
        id: "get_transaction_of_agent",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/ TransactionOfAgent",
        description: "Get list of transactions of players under the specified agent, order by created time.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The agent name we provided",
                restriction: [],
                schema: []
              },
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "ApiKey of the agent",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "The `ToDate` in string format “yyyy-MM-dd hh:mm:ss” (will be considered as in GMT+0)",
                restriction: [],
                schema: []
              },
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "The `FromDate` in string format “yyyy-MM-dd hh:mm:ss” (will be considered as in GMT+0)",
                restriction: [],
                schema: []
              },
              {
                name: "PageIndex",
                type: "integer",
                required: true,
                description: "Default is 1",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: true,
                description: "Default is 50",
                restriction: [],
                schema: []
              },
              {
                name: "Type",
                type: "string",
                required: true,
                description: "Either “Deposit” or “Withdraw”. Leave it as blank to retrieve both Deposit and Withdraw requests.",
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
                    description: "",
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
                        name: "Count",
                        type: "integer",
                        required: false,
                        description: "25"
                      },
                      {
                        name: "Entities",
                        type: "string",
                        required: false,
                        description: ""
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
                    description: " Agent Name is not found",
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "AgentName": "AGN",
              "ApiKey": "aaaappppiiiikkkkeeeeyyyy",
              "ToDate":"2020-04-01 00:00:00",
              "FromDate":"2019-08-30 00:00:00",
              "PageIndex": 1,
              "PageSize": 100,
              "Type": "deposit"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": {
                  "Count": 25,
                  "Entities": [
                      {
                          "Id": 1906,
                          "Type": "Deposit",
                          "CreateDate": "2020-03-11T16:29:44.000Z",
                          "StartAmount": 5000.00,
                          "AmountChange": 1050.00,
                          "EndAmount": 6050.00,
                          "TransGuid": "xbe0jssz4av5iddo",
                          "AgentName": "AGN",
                          "UserName": "xxx",
                          "Note": null
                      },
                      {
                          "Id": 1905,
                          "Type": "Deposit",
                          "CreateDate": "2020-03-11T16:28:50.000Z",
                          "StartAmount": 4498.00,
                          "AmountChange": 502.00,
                          "EndAmount": 5000.00,
                          "TransGuid": "qv18zaizhdm8xoza",
                          "AgentName": "AGN",
                          "UserName": "xxxx",
                          "Note": null
                      }
                  ]
              }
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": " Agent Name is not found",
              "data": ""
              }
          }
        ]
      },
      {
        title: "BetListPaginated",
        id: "betlistpaginated",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/BetListPaginated",
        description: "Like the BetListBy function but add more field in the response: `Count`. This will let client paginate data.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id. So, the result will be limited to this provider only.",
                restriction: [],
                schema: []
              },
              {
                name: "PageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for PageSize is 100.",
                restriction: [],
                schema: []
              },
              {
                name: "TimeSpecific",
                type: "boolean",
                required: false,
                description: "By default, this field will have the value `false`. When this field is `true`, we will consider to limit the result to the specific time in `FromDate` and `ToDate`",
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
                    description: "",
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
                        name: "Count",
                        type: "integer",
                        required: false,
                        description: "941"
                      },
                      {
                        name: "Entities",
                        type: "string",
                        required: false,
                        description: ""
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "FromDate":"2019-08-01 00:00:00",
              "ToDate":"2019-08-30 00:00:00",
              "ProviderId": 3,
              "PageIndex": 1,
              "PageSize": 10,
              "TimeSpecific": true
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
    "message": "",
    "data": {
        "Count": 941,
        "Entities": [
            {
                "UserName": "parker",
                "TransGuid": "20200522090740961110660",
                "ActualStake": 4.00,
                "WinLost": 24.00,
                "Profit": 20.00,
                "StartAmount": 9668.00,
                "WinLoseDate": "2020-05-22T01:06:37.780Z",
                "BetDate": "2020-05-22T01:06:37.780Z",
                "GameType": "S-MM01",
                "GameId": "20200522090740628110659",
                "ProductType": "Slot",
                "TableName": "Web",
                "Status": "Settled",
                "ProviderStatus": "Payout",
                "ProviderId": 14,
                "Provider": "Prv",
                "Result": null,
                "PlayTypeName": null
            },
            {
                "UserName": "parker",
                "TransGuid": "20200522090737678110658",
                "ActualStake": 4.00,
                "WinLost": 0.00,
                "Profit": -4.00,
                "StartAmount": 9672.00,
                "WinLoseDate": "2020-05-22T01:06:34.493Z",
                "BetDate": "2020-05-22T01:06:34.493Z",
                "GameType": "S-MM01",
                "GameId": "20200522090737346110657",
                "ProductType": "Slot",
                "TableName": "Web",
                "Status": "Settled",
                "ProviderStatus": "Payout",
                "ProviderId": 14,
                "Provider": "Prv",
                "Result": null,
                "PlayTypeName": null
            }
        ]
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
        title: "GetOutStandingBets",
        id: "getoutstandingbets",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/GetOutStandingBets",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
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
                required: false,
                description: "Get outstanding bets for user by username, if not will get outstanding bets for all agent users",
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
                    description: "",
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
                    description: "[]",
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "AgentName" : "{{agent_name}}",
              "ApiKey" : "{{api_key}}",
              "UserName" : "UserName1"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": [
                  {
                      "subBet": [
                          {
                              "transId": 4011031,
                              "betOption": "Melbourne Victory (n)",
                              "marketType": "Handicap",
                              "hdp": -0.5,
                              "odds": -0.98,
                              "league": "Australia Hyundai A League",
                              "match": "Melbourne Victory (n) vs Central Coast Mariners",
                              "status": "running",
                              "winlostDate": "2020-08-03T00:00:00.000Z",
                              "liveScore": "0:0",
                              "htScore": "0:0",
                              "ftScore": "0:0",
                              "customeizedBetType": "",
                              "isHalfWonLose": false,
                              "isLive": false,
                              "kickOffTime": "2020-08-03T05:30:00"
                          }
                      ],
                      "refNo": "4011031",
                      "username": "011BOBLOG90",
                      "sportType": "Football",
                      "orderTime": "2020-08-03T02:09:34.590Z",
                      "winlostDate": "2020-08-03T00:00:000Z",
                      "modifyDate": "2020-08-03T02:09:34.590Z",
                      "odds": -0.98,
                      "oddsStyle": "M",
                      "stake": 12.0,
                      "actualStake": 11.76,
                      "currency": "MYR",
                      "status": "running",
                      "winlose": 0.0,
                      "turnover": 12.0,
                      "isHalfWonLose": false,
                      "isLive": false,
                      "MaxWinWithoutActualStake": 12.0,
                      "Ip": "42.191.235.171"
                    }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": []
              }
          }
        ]
      }, 
      {
        title: "Get Sum of Balance of all players",
        id: "get_sum_of_balance_of_all_players",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/sum-player-balance",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "Agent name that we provided you",
                restriction: [],
                schema: []
              },
              {
                name: "APIKey",
                type: "string",
                required: true,
                description: "APIKey that we provided you",
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
                    description: "",
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "AgentName": "agname",
    	        "APIKey": "---"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": [
                  {
                      "AgentName": "<agentname>",
                      "SumBalance": 12322.29
                  }
              ]
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
        title: "BetListDetailsV3",
        id: "betlistdetailsv3",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/BetListDetailsV3",
        description: "Like the BetListDetails (3.13) function but the input is different. This version will require Agent Name, API Key and Playername, instead of Authorization token.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "Agent name that we provided you",
                restriction: [],
                schema: []
              },
              {
                name: "APIKey",
                type: "string",
                required: true,
                description: "APIKey that we provided you",
                restriction: [],
                schema: []
              },
              {
                name: "PlayerName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id. So, the result will be limited to this provider only.",
                restriction: [],
                schema: []
              },
              {
                name: "PageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for PageSize is 100.",
                restriction: [],
                schema: []
              },
              {
                name: "TimeSpecific",
                type: "boolean",
                required: false,
                description: "By default, this field will have the value `false`. When this field is `true`, we will consider to limit the result to the specific time in `FromDate` and `ToDate`",
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
                    description: "",
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
                        name: "Count",
                        type: "integer",
                        required: false,
                        description: "1"
                      },
                      {
                        name: "Entities",
                        type: "string",
                        required: false,
                        description: ""
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "AgentName": "agname",
              "PlayerName": "test01",
              "APIKey": "-----",
              "FromDate":"2020-05-22 01:06:00",
              "ToDate":"2020-07-22 01:07:00",
              "PageIndex": 1,
              "PageSize": 20,
              "ProviderId": 2,
              "TimeSpecific": false
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": {
                  "Count": 1,
                  "Entities": [
                      {
                    "Ip": "192.168.1.1",
                    "TurnOver": 98.00,
                          "UserName": "ccaskdksport",
                          "TransGuid": "3998214",
                          "ActualStake": 98.00,
                          "WinLost": 49.00,
                          "Profit": -49.00,
                          "StartAmount": 100004.77,
                          "WinLoseDate": "2020-07-07T04:00:00.000Z",
                          "BetDate": "2020-07-07T10:53:39.430Z",
                          "GameType": "SportsBook",
                          "GameId": null,
                          "ProductType": "Football",
                          "TableName": null,
                          "Status": "Settled",
                          "ProviderStatus": "lose",
                          "ProviderId": 2,
                          "Provider": "SBO_BetFun",
                          "Result": null,
                          "PlayTypeName": null,
                          "SubBets": "[    {      \"transId\": 3998214,      \"betOption\": \"Chelsea\",      \"marketType\": \"Handicap\",      \"hdp\": -1.25,      \"odds\": -0.98,      \"league\": \"ENGLISH PREMIER LEAGUE\",      \"match\": \"Crystal Palace vs Chelsea\",      \"status\": \"lose\",      \"winlostDate\": \"2020-07-07T00:00:00\",      \"liveScore\": \"0:0\",      \"htScore\": \"1:2\",      \"ftScore\": \"2:3\",      \"customeizedBetType\": \"\",      \"isHalfWonLose\": false,      \"isLive\": false,      \"kickOffTime\": \"2020-07-07T13:00:00\"    }  ]"
                      }
                  ]
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
        title: "GetGameHistoryUrl",
        id: "getgamehistoryurl",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/get-game-history-url",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Transguid of bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id",
                restriction: [],
                schema: []
              },
              {
                name: "Language",
                type: "string",
                required: false,
                description: "Language: EN-US, TH-TH, ZN-CN",
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
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "http",
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "TransGuid": "transguId",
              "ProviderId": 6,
              "Language": "EN-US" 
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": "http://...."
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
        title: "WinloseSummarize",
        id: "winlosesummarize",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/ WinloseSummarize/GetAll",
        description: "",
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
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "UserName",
                type: "string",
                required: false,
                description: "Username cannot be longer than 15 chars. Only numeric and alphabet is allowed in username. Username must be unique among all users in fund provider",
                restriction: [],
                schema: []
              },
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "The `Fromdate` in string format “yyyy-MM-dd”",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "The `Todate` in string format “yyyy-MM-dd”",
                restriction: [],
                schema: []
              },
              {
                name: "FromTimeId",
                type: "long",
                required: false,
                description: "Default 0. ",
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
                    description: "OK",
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
                        name: "TotalCount",
                        type: "integer",
                        required: false,
                        description: "1"
                      },
                      {
                        name: "Items",
                        type: "string",
                        required: false,
                        description: ""
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
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "AgentName":"{{agent_name}}",
              "FromDate": "2021-04-04",
              "ToDate": "2021-04-06",
              "FromTimeId": 3,
              "ToTimeId": 3, 
              "Username": "",
              "TimeZone": "00:00"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "OK",
              "data": {
                "TotalCount": 1,
                "Items": [
                  {
                    "ProviderId": 8,
                    "GameType": "MiniGame",
                    "Username": "Playername",
                    "BetCount": 476,
                    "Stake": 875700,
                    "ActualStake": 739700,
                    "Winlose": 838504,
                    "Turnover": 739700,
                    "Profit": 37196,
                    "AgentPush": 2231.76
                  }
                ]
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
              }
          }
        ]
      },
      {
        title: "BettingHistory",
        id: "bettinghistory",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/Data/BettingHistory",
        description: "",
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
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "Username",
                type: "string",
                required: false,
                description: "Username cannot be longer than 15 chars. Only numeric and alphabet is allowed in username. Username must be unique among all users in fund provider",
                restriction: [],
                schema: []
              },
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "The `FromDate` in string format “yyyy-MM-dd”",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "The `ToDate` in string format “yyyy-MM-dd”",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: false,
                description: "Provider id we provided.",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: false,
                description: "Game type we provided.",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: false,
                description: "GameId/RoundId",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: false,
                description: "Unique TransGuid/RefNo in system.",
                restriction: [],
                schema: []
              },
              {
                name: "PageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for pageSize is 100.",
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
                params: []
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
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
                "ApiKey":"{{api_key}}",
                "AgentName":"{{agent_name}}",
                "FromDate": "2021-01-20",
                "ToDate": "2021-06-14",
                "Username":"",
                "ProviderId": -1,
                "GameType": "",
                "GameId": "",
                "TransGuid": "",
                "PageIndex": 1,
                "PageSize": 20
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "OK",
              "data": {
                  "TotalCount": 15,
                  "Items": [
                      {
                          "Playername": "PlayerName",
                          "TransGuid": "ab33a1a5-48bc-464f-6a3d-08d92a392ff2",
                          "CreatedDate": "2021-06-14T22:02:21.000Z",
                          "WinloseDate": "2021-06-14T21:58:14.23.000Z",
                          "GameType": "Slot",
                          "GameId": "e530a1aa-b11d-443d-6a3b-08d92a392ff2",
                          "TableName": "Mega_Rise",
                          "ProductType": "Mega_Rise",
                          "SubBets": "{\"externalbetid\":\"956445737\",\"externalgameid\":\"MegaRise\",\"externalroundid\":\"956445737\",\"platformtype\":0,\"isclosinground\":true}",
                          "Odds": 0.0,
                          "OddsStyle": null,
                          "Currency": "THB",
                          "Stake": 10.00,
                          "ActualStake": 10.00,
                          "Profit": -10.00,
                          "Turnover": 10.00,
                          "Winloss": 0.00,
                          "StartAmount": 0.00,
                          "EndAmount": 0.00,
                          "Ip": "94.237.78.228",
                          "Status": "Settled",
                          "ProviderStatus": "Lose",
                          "ProviderId": 10,
                          "ProviderName": "RT Slot",
                          "IsHalfWonLose": null,
                          "GameName": "Mega Rise",
                          "BetChoice": ""
                      }
                  ]
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
              }
          }
        ]
      },
      {
        title: "WinloseV2",
        id: "winlosev2",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/winloseV2",
        description: "Get list of winlose summary data of a player but limited in specified date range and provider. ",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id. Set = -1 to get all data",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: false,
                description: "GameType. Set = “” to get all gametype",
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
                    description: "OK",
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
                        name: "GameType",
                        type: "string",
                        required: false,
                        description: "Slot"
                      },
                      {
                        name: "UserName",
                        type: "string",
                        required: false,
                        description: "demo_02"
                      },
                      {
                        name: "TotalBetAmount",
                        type: "number",
                        required: false,
                        description: "56.25"
                      },
                      {
                        name: "TotalWinlost",
                        type: "number",
                        required: false,
                        description: "1930.00"
                      },
                      {
                        name: "TotalProfit",
                        type: "number",
                        required: false,
                        description: "1873.75"
                      },
                      {
                        name: "ProviderId",
                        type: "integer",
                        required: false,
                        description: "8"
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "FromDate":"2019-08-01 00:00:00",
              "ToDate":"2019-08-30 00:00:00",
              "ProviderId": 3
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "OK",
              "data": {
                  "GameType": "Slot",
                  "UserName": "demo_02",
                  "TotalBetAmount": 56.25,
                  "TotalWinlost": 1930.00,
                  "TotalProfit": 1873.75,
                  "ProviderId": 8
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
        title: "WinloseAllV2",
        id: "winloseallv2",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/winloseallv2",
        description: "Get list of winlose summary data from all players in specified provider. So, this function doesn’t require authorization token as above functions. But it requires ApiKey and AgentName instead.",
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
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id. Set = -1 to get all data",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: false,
                description: "GameType. Set = “” to get all gametype",
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
                    description: "",
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
                        name: "TotalBetAmount",
                        type: "number",
                        required: false,
                        description: "0.0"
                      },
                      {
                        name: "TotalWinlost",
                        type: "number",
                        required: false,
                        description: "0.0"
                      },
                      {
                        name: "TotalProfit",
                        type: "number",
                        required: false,
                        description: "0.0"
                      },
                      {
                        name: "ProviderId",
                        type: "integer",
                        required: false,
                        description: "4"
                      },
                      {
                        name: "Provider",
                        type: "string",
                        required: false,
                        description: "PP"
                      },
                      {
                        name: "GameType",
                        type: "string",
                        required: false,
                        description: "Slot"
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "AgentName":"{{agent_name}}",
              "FromDate":"2019-08-01 00:00:00",
              "ToDate":"2019-08-30 00:00:00",
              "ProviderId": 4,
              "GameType": "Slot"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": {
                  "TotalBetAmount": 0.0,
                  "TotalWinlost": 0.0,
                  "TotalProfit": 0.0,
                  "ProviderId": 4,
                  "Provider": "PP",
                  "GameType": "Slot"
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
        title: "List available game",
        id: "list_available_game",
        type: ApiEnum.GET,
        endpoint: "https://{{data_domain}}/data/games",
        description: "Get list of winlose summary data from all players in specified provider. So, this function doesn’t require authorization token as above functions. But it requires ApiKey and AgentName instead.",
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
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id. Set = -1 to get all data",
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
                    description: "OK",
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "AgentName":"{{agent_name}}",
              "providerId": 6
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "OK",
              "data": [
                  {
                      "ProviderId": 6,
                      "ProviderName": "Sexy Gaming",
                      "GameId": "",
                      "GameName": "Sexy Baccarat",
                      "GameType": "SexyBaccarat",
                      "GameImageUrl": "https://image.12live.vip/icons/live/Game_MX_Sexy_Gaming_Lobby_910x367.png",
                      "OrderBy": 14
                  },
                  {
                      "ProviderId": 6,
                      "ProviderName": "Sexy Gaming",
                      "GameId": "2",
                      "GameName": "Sexy Baccarat",
                      "GameType": "SexyBaccarat",
                      "GameImageUrl": "https://image.12live.vip/icons/ag_casino/Live_Dealers.png",
                      "OrderBy": 118
                  }
              ]
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
        title: "GetGameHistoryUrlByRoundId",
        id: "getgamehistoryurlbyroundid",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/get-game-history-url-by-roundid",
        description: "",
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
                name: "AgentName",
                type: "string",
                required: true,
                description: "The AgentName pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "Language",
                type: "string",
                required: false,
                description: "See Appendix",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id",
                restriction: [],
                schema: []
              },
              {
                name: "RoundId",
                type: "string",
                required: true,
                description: "RoundId of game",
                restriction: [],
                schema: []
              },
              {
                name: "PlayerUsername",
                type: "string",
                required: true,
                description: "",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: false,
                description: "Gametype",
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
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "http",
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "AgentName":"{{agent_name}}",
              "Language": "en-US",
              "ProviderId": "8",
              "RoundId":"3396984",
              "PlayerUsername":"player01",
              "GameType":""
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": "http://...."
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
        title: "MMG-OutStandingBets",
        id: "mmg-outstandingbets",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/mmg-outstandingbets",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
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
                required: false,
                description: "Get outstanding bets for user by username, if not will get outstanding bets for all agent users",
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
                    description: "",
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
                    description: "[]",
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "AgentName" : "{{agent_name}}",
              "ApiKey" : "{{api_key}}",
              "UserName" : "UserName1"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": [
                  {
                      "username": "demo01",
                      "orderTime": "2022-04-26T03:12:50.313",
                      "stake": 3.00,
                      "transGuid": "mm-32323572",
                      "providerId": 8,
                      "gameId": "32323572",
                      "ProductType": "Aztec King",
                      "TableName": "35",
                      "GameType": "Slot",
                  }
              ]
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": []
              }
          }
        ]
      },
      {
        title: "BetListDetailsV2",
        id: "betlistdetailsv2",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/data/BetListDetailsV2",
        description: "Like the BetListDetails (3.13) function but the input is different. This version will require Agent Name, API Key and Playername, instead of Authorization token.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "fromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "toDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "Agent name that we provided you",
                restriction: [],
                schema: []
              },
              {
                name: "APIKey",
                type: "string",
                required: true,
                description: "APIKey that we provided you",
                restriction: [],
                schema: []
              },
              {
                name: "providerId",
                type: "integer",
                required: true,
                description: "The provider-id. So, the result will be limited to this provider only.",
                restriction: [],
                schema: []
              },
              {
                name: "pageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "pageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for pageSize is 100.",
                restriction: [],
                schema: []
              },
              {
                name: "TimeSpecific",
                type: "boolean",
                required: false,
                description: "By default, this field will have the value `false`. When this field is `true`, we will consider to limit the result to the specific time in `fromDate` and `toDate`",
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
                    description: "",
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
                        name: "Count",
                        type: "integer",
                        required: false,
                        description: "1"
                      },
                      {
                        name: "Entities",
                        type: "string",
                        required: false,
                        description: ""
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "AgentName": "agname",
              "PlayerName": "test01",
              "APIKey": "-----",
              "fromDate":"2020-05-22 01:06:00",
              "toDate":"2020-07-22 01:07:00",
              "pageIndex": 1,
              "PageSize": 20,
              "providerId": 2,
              "TimeSpecific": false
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": {
                  "Count": 1,
                  "Entities": [
                      {
                          "UserName": "ccaskdksport",
                          "TransGuid": "3998214",
                          "ActualStake": 98.00,
                          "WinLost": 49.00,
                          "Profit": -49.00,
                          "StartAmount": 100004.77,
                          "WinLoseDate": "2020-07-07T04:00:00",
                          "BetDate": "2020-07-07T10:53:39.43",
                          "GameType": "SportsBook",
                          "GameId": null,
                          "ProductType": "Football",
                          "TableName": null,
                          "Status": "Settled",
                          "ProviderStatus": "lose",
                          "ProviderId": 2,
                          "Provider": "SBO_BetFun",
                          "Result": null,
                          "PlayTypeName": null,
                          "SubBets": "[    {      \"transId\": 3998214,      \"betOption\": \"Chelsea\",      \"marketType\": \"Handicap\",      \"hdp\": -1.25,      \"odds\": -0.98,      \"league\": \"ENGLISH PREMIER LEAGUE\",      \"match\": \"Crystal Palace vs Chelsea\",      \"status\": \"lose\",      \"winlostDate\": \"2020-07-07T00:00:00\",      \"liveScore\": \"0:0\",      \"htScore\": \"1:2\",      \"ftScore\": \"2:3\",      \"customeizedBetType\": \"\",      \"isHalfWonLose\": false,      \"isLive\": false,      \"kickOffTime\": \"2020-07-07T13:00:00\"    }  ]"
                      }
                  ]
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
    ]
  },
  {
    title: "Seamless",
    id: "seamless",
    api: [
      {
        title: "Get Balance",
        id: "get_balance",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sync player’s balance periodically",
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
                name: "action",
                type: "string",
                required: true,
                description: "Notice: we will send the exact value `getBalance` ",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: false,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: false,
                description: "Player username",
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
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "10000.23",
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
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"getBalance",
              "userId":2268242,
              "userName":"player1",
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 10000.23
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message"
              }
          }
        ]
      },
      {
        title: "Place Bet",
        id: "place_bet",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. Every bet request response must include 'balance' parameter to update player balance on the page. 2. Current status of bet transaction is unsettled. 3. Any bet failure occurred will trigger 'Cancel Bet' function to cancel this transaction.",
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
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
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
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
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
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"bet",
              "data":[
                  {
                      "UserId": 2268242, 
                      "UserName": "UserName1", 
                      "OrderTime": "2020-01-07T06:18:53.573Z", 
                      "TransGuid": "SEXYBCRT_BAC-60107294", 
                      "Stake": 10.00, 
                      "ProviderId": 6, 
                      "GameId": "Mexico-01-GA242010045", 
                      "ProductType": "MX-LIVE-001", 
                      "GameType": "LIVE", 
                      "TableName": "Baccarat",
                      "PlayType": "",
                      "ExtraData": "",
                      "BetType": ""
                  }
                ]
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 10000.23,
              "data":[
                  {
                      "error": "0", 
                      "transId": " SEXYBCRT_BAC-60107294", 
                      "userId": "2268242", 
                      "balance": 1000.20,
                  }
              ]
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
      {
        title: "Cancel Bet",
        id: "cancel_bet",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. When place bet has failure will call 'Cancel Bet'. 2. When cancel bet is unsuccessful will schedule a job to repeat it until success.",
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
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
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
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
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
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"cancelBet",
              "data":[
                  {
                      "UserId": 2268242, 
                      "UserName": "UserName1", 
                      "OrderTime": "2020-01-07T06:18:53.573Z", 
                      "TransGuid": "SEXYBCRT_BAC-60107294", 
                      "Stake": 10.00, 
                      "ProviderId": 6, 
                      "GameId": "Mexico-01-GA242010045", 
                      "ProductType": "MX-LIVE-001", 
                      "GameType": "LIVE", 
                      "TableName": "Baccarat",
                "PlayType": "",
                "ExtraData": "",
                "BetType": ""
                  }
              ]
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 1000.20,
              "data":[
                  {
                      "error": 0, 
                      "transId": "SEXYBCRT_BAC-60107294", 
                      "userId": 2268242, 
                      "balance": 1000.20,
                  }
              ]
          
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
      {
        title: "Settle Bet",
        id: "place_bet",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending transactions when had settled.",
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
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "Winlost",
                type: "decimal",
                required: true,
                description: "Player winlost (included Stake)",
                restriction: [],
                schema: []
              },
              {
                name: "TurnOver",
                type: "decimal",
                required: true,
                description: "",
                restriction: [],
                schema: []
              },
              {
                name: "Currency",
                type: "string",
                required: true,
                description: "User currency",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "Provider",
                type: "string",
                required: false,
                description: "Provider name",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: true,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ModifyDate",
                type: "datetime",
                required: true,
                description: "Modify date in case resettle we can know when this record resettle.",
                restriction: [],
                schema: []
              },
              {
                name: "WinloseDate",
                type: "datetime",
                required: true,
                description: "Winlose time",
                restriction: [],
                schema: []
              },
              {
                name: "Status",
                type: "String",
                required: true,
                description: "CurrentStatus",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderStatus",
                type: "String",
                required: false,
                description: "Reference provider status",
                restriction: [],
                schema: []
              },
              {
                name: "EndRound",
                type: "boolean",
                required: true,
                description: "Is this settle end of round",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "String",
                required: false,
                description: "Bet type",
                restriction: [],
                schema: []
              },
              {
                name: "ReferenceTrans",
                type: "String",
                required: false,
                description: "Reference tranguid",
                restriction: [],
                schema: []
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
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
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
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"settle",
              "data":[
                  {
                      "UserId": 2268242, 
                      "UserName": "UserName1", 
                      "OrderTime": "2020-01-07T06:18:53.573Z", 
                      "TransGuid": "SEXYBCRT_BAC-60107294", 
                      "Stake": 10.00, 
                      "Winlost": 20.00,
                      "TurnOver": 10.00,
                      "Currency": "MYR",
                      "ProviderId": 6, 
                      "Provider": "Sexy", 
                      "GameId": "Mexico-01-GA242010045", 
                      "ProductType": "MX-LIVE-001", 
                      "GameType": "LIVE", 
                      "TableName": "Baccarat",
                      "PlayType": "",
                      "ModifyDate": "2020-01-07T06:19:29.477Z",
                      "WinloseDate": "2020-01-07T06:19:29.477Z",
                      "Status": "Settled",
                      "ProviderStatus": "Settled",
                      "EndRound": true,
                      "BetType": "",
                      "ReferenceTrans": ""
                  }
              ]

              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 1000.20,
              "data":[
                  {
                      "error": 0, 
                      "transId": "SEXYBCRT_BAC-60107294", 
                      "userId": 2268242, 
                      "balance": 1000.20,
                  }
              ]
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
      {
        title: "Void Bet",
        id: "void_bet",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending transactions when unsettled transactions had voided.",
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
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "Bet type",
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
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "10000.23",
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
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"voidBet",
              "data":[
                  {
                      "UserId": 2268242, 
                      "UserName": "UserName1", 
                      "OrderTime": "2020-01-07T06:18:53.573Z", 
                      "TransGuid": "SEXYBCRT_BAC-60107294", 
                      "Stake": 10.00, 
                      "ProviderId": 6, 
                      "GameId": "Mexico-01-GA242010045", 
                      "ProductType": "MX-LIVE-001", 
                      "GameType": "LIVE", 
                      "TableName": "Baccarat",
                      "PlayType": "",
                      "ExtraData": "",
                      "BetType": ""
                  }
              ]
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 1000.20 ,
              "data":[
                  {
                      "error": 0, 
                      "transId": "SEXYBCRT_BAC-60107294", 
                      "userId": 2268242, 
                      "balance": 1000.20,
                  }
              ]
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message"
              }
          }
        ]
      },
      {
        title: "UnSettle",
        id: "unSettle",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending transactions when had unsettled.",
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
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ModifyDate",
                type: "datetime",
                required: true,
                description: "Modify date in case resettle we can know when this record resettle.",
                restriction: [],
                schema: []
              },
              {
                name: "EndRound",
                type: "boolean",
                required: true,
                description: "Is this settle end of round",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "Bet type",
                restriction: [],
                schema: []
              },
              {
                name: "ReferenceTrans",
                type: "string",
                required: false,
                description: "Reference tranguid",
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
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "10000.20",
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
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"unsettle",
              "data":[
                  {
                      "UserId": 2268242, 
                      "UserName": "UserName1", 
                      "OrderTime": "2020-01-07T06:18:53.573Z", 
                      "TransGuid": "SEXYBCRT_BAC-60107294", 
                      "Stake": 10.00, 
                      "ProviderId": 6, 
                      "GameId": "Mexico-01-GA242010045", 
                      "ProductType": "MX-LIVE-001", 
                      "GameType": "LIVE", 
                      "TableName": "Baccarat",
                      "PlayType": "",
                      "ModifyDate": "2020-01-07T06:19:29.477Z",
                      "EndRound": true,
                      "BetType": "",
                      "ReferenceTrans": ""
                  }
              ]

              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 1000.20 ,
              "data":[
                  {
                      "error": 0, 
                      "transId": "SEXYBCRT_BAC-60107294", 
                      "userId": 2268242, 
                      "balance": 1000.20,
                  }
              ]
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message"
              }
          }
        ]
      },
      {
        title: "Resettle",
        id: "resettle",
        type: ApiEnum.POST,
        endpoint: "",
        description: "This function is used when the game provider changes the result of settled transactions. Change transaction status from 'Settle' to 'Settle'. Operators need to update the player's balance based on updated transactions Way to change Balance Current Balance + new Winlost amount (resettle) - old Winlost amount (settle)",
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
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "Winlost",
                type: "decimal",
                required: true,
                description: "Player winlost (included Stake)",
                restriction: [],
                schema: []
              },
              {
                name: "TurnOver",
                type: "decimal",
                required: true,
                description: "",
                restriction: [],
                schema: []
              },
              {
                name: "Currency",
                type: "string",
                required: true,
                description: "User currency",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "Provider",
                type: "string",
                required: false,
                description: "Provider name",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ModifyDate",
                type: "datetime",
                required: true,
                description: "Modify date in case resettle we can know when this record resettle.",
                restriction: [],
                schema: []
              },
              {
                name: "EndRound",
                type: "boolean",
                required: true,
                description: "Is this settle end of round",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "Bet type",
                restriction: [],
                schema: []
              },
              {
                name: "ReferenceTrans",
                type: "string",
                required: false,
                description: "Reference tranguid",
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
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "10000.23",
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
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"resettle",
              "data":[
                  {
                      "UserId": 2268242, 
                      "UserName": "UserName1", 
                      "OrderTime": "2020-01-07T06:18:53.573Z", 
                      "TransGuid": "SEXYBCRT_BAC-60107294", 
                      "Stake": 10.00, 
                "Winlost": 20.00,
                "TurnOver": 10.00,
                "Currency": "MYR",
                      "ProviderId": 6, 
                      "Provider": "Sexy", 
                      "GameId": "Mexico-01-GA242010045", 
                      "ProductType": "MX-LIVE-001", 
                      "GameType": "LIVE", 
                      "TableName": "Baccarat",
                "PlayType": "",
                "ModifyDate": "2020-01-07T06:19:29.477Z",
                "WinloseDate": "2020-01-07T06:19:29.477Z",
                "Status": "Settled",
                "ProviderStatus": "Settled",
                "EndRound": true,
                "BetType": "",
                "ReferenceTrans": ""
                  }
              ]
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 1000.20 ,
              "data":[
                  {
                      "error": 0, 
                      "transId": "SEXYBCRT_BAC-60107294", 
                      "userId": 2268242, 
                      "balance": 1000.20,
                  }
              ]
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message"
              }
          }
        ]
      },
      {
        title: "Void Settle",
        id: "void_settle",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending transactions when settled transactions had voided.",
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
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "ModifyDate",
                type: "datetime",
                required: true,
                description: "Modify date in case resettle we can know when this record resettle.",
                restriction: [],
                schema: []
              },
              {
                name: "EndRound",
                type: "boolean",
                required: true,
                description: "Is this settle end of round",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "Bet type",
                restriction: [],
                schema: []
              },
              {
                name: "ReferenceTrans",
                type: "string",
                required: false,
                description: "Reference tranguid",
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
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "10000.23",
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
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":" voidSettle",
              "data":[
                  {
                      "UserId": 2268242, 
                      "UserName": "UserName1", 
                      "OrderTime": "2020-01-07T06:18:53.573Z", 
                      "TransGuid": "SEXYBCRT_BAC-60107294", 
                      "Stake": 10.00, 
                      "ProviderId": 6, 
                      "GameId": "Mexico-01-GA242010045", 
                      "ProductType": "MX-LIVE-001", 
                      "GameType": "LIVE", 
                      "TableName": "Baccarat",
                      "PlayType": "",
                      "ModifyDate": "2020-01-07T06:19:29.477Z",
                      "EndRound": true,
                      "BetType": "",
                      "ReferenceTrans": ""
                  }
              ]
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 1000.20,
              "data":[
                  {
                      "error": 0, 
                      "transId": "SEXYBCRT_BAC-60107294", 
                      "userId": 2268242, 
                      "balance": 1000.20,
                  }
              ]
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message"
              }
          }
        ]
      },
      {
        title: "PenddingBets",
        id: "penddingbets",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/mimigame/PenddingBets",
        description: "Get bets/settle pending on Mimi side. ",
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
                name: "AgentName",
                type: "string",
                required: true,
                description: "The AgentName pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "PageIndex",
                type: "string",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "string",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for PageSize is 50.",
                restriction: [],
                schema: []
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
                    description: "",
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "AgentName":"{{agent_name}}",
              "PageIndex": 1,
              "PageSize" : 20
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 1000.20 ,
              "data":[
                  {
                    "TransGuid": "mm-888888",
                    "CreationTime": "2021-08-31T10:28:41.907Z",
                    "ResendCount": 1,
                    "RequestData": "[{{Canncel bet or Settle data refer 4.3 and 4.4}}]"
                  }
              ]
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
        title: "ResendBetOrSettle",
        id: "resendbetorsettle",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/mimigame/ResendBetOrSettle",
        description: "Resend bet/settle by TransGuids.",
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
                name: "AgentName",
                type: "string",
                required: true,
                description: "The AgentName pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuids",
                type: "string",
                required: true,
                description: "Transguids need to resend immediately, can resend more than one and separate by the comma character",
                restriction: [],
                schema: []
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
                    description: "",
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
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "AgentName":"{{agent_name}}",
              "TransGuids": "mm-123,mm-456, " 
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "OK",
              "data": [
                  "mm-123 : OK!",
                  "mm-456 : OK!"
              ]
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
      }
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