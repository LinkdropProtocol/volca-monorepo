export const ABI = [
  {
    constant: true,
    inputs: [],
    name: "LINKDROP_VERIFICATION_ADDRESS",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_receiver",
        type: "address"
      },
      {
        name: "_tokenId",
        type: "uint256"
      },
      {
        name: "_linkAddress",
        type: "address"
      },
      {
        name: "_linkdropperSignature",
        type: "bytes"
      },
      {
        name: "_receiverSignature",
        type: "bytes"
      }
    ],
    name: "checkClaimParams",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "unpause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_linkAddress",
        type: "address"
      },
      {
        name: "_tokenId",
        type: "uint256"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    name: "verifyLinkKey",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    name: "isPauser",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "paused",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "renouncePauser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    name: "addPauser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "pause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_receiver",
        type: "address"
      },
      {
        name: "_tokenId",
        type: "uint256"
      },
      {
        name: "_linkAddress",
        type: "address"
      },
      {
        name: "_linkdropperSignature",
        type: "bytes"
      },
      {
        name: "_receiverSignature",
        type: "bytes"
      }
    ],
    name: "claim",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "NFT_ADDRESS",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "LINKDROPPER",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_linkAddress",
        type: "address"
      },
      {
        name: "_receiver",
        type: "address"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    name: "verifyReceiverAddress",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_linkAddress",
        type: "address"
      }
    ],
    name: "isClaimedLink",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_linkAddress",
        type: "address"
      }
    ],
    name: "linkClaimedTo",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "_NFTAddress",
        type: "address"
      },
      {
        name: "_linkdropVerificationAddress",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "linkAddress",
        type: "address"
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "Claimed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "account",
        type: "address"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "account",
        type: "address"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address"
      }
    ],
    name: "PauserAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address"
      }
    ],
    name: "PauserRemoved",
    type: "event"
  }
];

export const BYTECODE =
  "60806040523480156200001157600080fd5b50604051604080620018ed833981018060405260408110156200003357600080fd5b8101908080519060200190929190805190602001909291905050506200005f336200014460201b60201c565b6000600160006101000a81548160ff02191690831515021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816001806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620002ee565b6200015f816000620001a560201b620014ba1790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620001e057600080fd5b620001f282826200025b60201b60201c565b15620001fd57600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200029757600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6115ef80620002fe6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806382dc1ec411610097578063b43114f811610066578063b43114f8146106d3578063cad2daf71461071d578063f3e8843a14610830578063fef429e91461088c576100f5565b806382dc1ec4146104875780638456cb59146104cb5780638e46b4a8146104d5578063b32c5c4514610689576100f5565b80633fc6ef7e116100d35780633fc6ef7e1461030257806346fbf68e146103ff5780635c975abb1461045b5780636ef8d66d1461047d576100f5565b806321f1f766146100fa5780633286ac45146101445780633f4ba83a146102f8575b600080fd5b610102610910565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102de600480360360a081101561015a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156101c157600080fd5b8201836020820111156101d357600080fd5b803590602001918460018302840111640100000000831117156101f557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561025857600080fd5b82018360208201111561026a57600080fd5b8035906020019184600183028401116401000000008311171561028c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610936565b604051808215151515815260200191505060405180910390f35b610300610a86565b005b6103e56004803603606081101561031857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561035f57600080fd5b82018360208201111561037157600080fd5b8035906020019184600183028401116401000000008311171561039357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610b31565b604051808215151515815260200191505060405180910390f35b6104416004803603602081101561041557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c06565b604051808215151515815260200191505060405180910390f35b610463610c23565b604051808215151515815260200191505060405180910390f35b610485610c3a565b005b6104c96004803603602081101561049d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c45565b005b6104d3610c63565b005b61066f600480360360a08110156104eb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561055257600080fd5b82018360208201111561056457600080fd5b8035906020019184600183028401116401000000008311171561058657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156105e957600080fd5b8201836020820111156105fb57600080fd5b8035906020019184600183028401116401000000008311171561061d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610d0e565b604051808215151515815260200191505060405180910390f35b610691610fcd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106db610ff2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6108166004803603606081101561073357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561079057600080fd5b8201836020820111156107a257600080fd5b803590602001918460018302840111640100000000831117156107c457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611018565b604051808215151515815260200191505060405180910390f35b6108726004803603602081101561084657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110c3565b604051808215151515815260200191505060405180910390f35b6108ce600480360360208110156108a257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611104565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000801515610944856110c3565b1515146109b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4c696e6b2068617320616c7265616479206265656e20636c61696d656400000081525060200191505060405180910390fd5b6109c4848685610b31565b610a19576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260338152602001806115916033913960400191505060405180910390fd5b610a24848784611018565b610a79576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611567602a913960400191505060405180910390fd5b6001905095945050505050565b610a8f33610c06565b610a9857600080fd5b600160009054906101000a900460ff16610ab157600080fd5b6000600160006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b600080610b9a8585604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401828152602001925050506040516020818303038152906040528051906020012061116d565b90506000610ba882856111c5565b9050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614925050509392505050565b6000610c1c8260006112c990919063ffffffff16565b9050919050565b6000600160009054906101000a900460ff16905090565b610c433361135b565b565b610c4e33610c06565b610c5757600080fd5b610c60816113b5565b50565b610c6c33610c06565b610c7557600080fd5b600160009054906101000a900460ff1615610c8f57600080fd5b60018060006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b6000600160009054906101000a900460ff1615610d2a57600080fd5b610d378686868686610936565b610da9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f496e76616c696420636c61696d20706172616d7300000000000000000000000081525060200191505060405180910390fd5b85600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342842e0e600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1688886040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b158015610f2557600080fd5b505af1158015610f39573d6000803e3d6000fd5b50505050848473ffffffffffffffffffffffffffffffffffffffff167f8dab6d35466ca3cba614bc5b262979b277949786977e81107f375f7e39f7734a8842604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a36001905095945050505050565b6001809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008061107984604051602001808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014019150506040516020818303038152906040528051906020012061116d565b9050600061108782856111c5565b90508573ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614925050509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff166110e583611104565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008160405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c01828152602001915050604051602081830303815290604052805190602001209050919050565b600060418251146111d957600090506112c3565b60008060006020850151925060408501519150606085015160001a90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c111561122d57600093505050506112c3565b601b8160ff16141580156112455750601c8160ff1614155b1561125657600093505050506112c3565b60018682858560405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156112b3573d6000803e3d6000fd5b5050506020604051035193505050505b92915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561130457600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61136f81600061140f90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e60405160405180910390a250565b6113c98160006114ba90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561144957600080fd5b61145382826112c9565b61145c57600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156114f457600080fd5b6114fe82826112c9565b1561150857600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe52656365697665722061646472657373206973206e6f74207369676e6564206279206c696e6b206b65794c696e6b206b6579206973206e6f74207369676e6564206279206c696e6b64726f7020766572696669636174696f6e206b6579a165627a7a72305820da43cd675b45462d635547ae032db5b718eedaf01472bf62535b39d4777c8d0f0029";