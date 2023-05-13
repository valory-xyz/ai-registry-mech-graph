import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { CreateMech } from "../generated/schema"
import { CreateMech as CreateMechEvent } from "../generated/AgentFactory/AgentFactory"
import { handleCreateMech } from "../src/agent-factory"
import { createCreateMechEvent } from "./agent-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let mech = Address.fromString("0x0000000000000000000000000000000000000001")
    let agentId = BigInt.fromI32(234)
    let price = BigInt.fromI32(234)
    let newCreateMechEvent = createCreateMechEvent(mech, agentId, price)
    handleCreateMech(newCreateMechEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CreateMech created and stored", () => {
    assert.entityCount("CreateMech", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CreateMech",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "mech",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CreateMech",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "agentId",
      "234"
    )
    assert.fieldEquals(
      "CreateMech",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
