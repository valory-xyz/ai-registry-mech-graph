import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  BaseURIChanged,
  CreateAgent,
  ManagerUpdated,
  OwnerUpdated,
  Transfer,
  UpdateAgentHash
} from "../generated/AgentRegistry/AgentRegistry"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  id: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBaseURIChangedEvent(baseURI: string): BaseURIChanged {
  let baseUriChangedEvent = changetype<BaseURIChanged>(newMockEvent())

  baseUriChangedEvent.parameters = new Array()

  baseUriChangedEvent.parameters.push(
    new ethereum.EventParam("baseURI", ethereum.Value.fromString(baseURI))
  )

  return baseUriChangedEvent
}

export function createCreateAgentEvent(
  agentId: BigInt,
  agentHash: Bytes
): CreateAgent {
  let createAgentEvent = changetype<CreateAgent>(newMockEvent())

  createAgentEvent.parameters = new Array()

  createAgentEvent.parameters.push(
    new ethereum.EventParam(
      "agentId",
      ethereum.Value.fromUnsignedBigInt(agentId)
    )
  )
  createAgentEvent.parameters.push(
    new ethereum.EventParam(
      "agentHash",
      ethereum.Value.fromFixedBytes(agentHash)
    )
  )

  return createAgentEvent
}

export function createManagerUpdatedEvent(manager: Address): ManagerUpdated {
  let managerUpdatedEvent = changetype<ManagerUpdated>(newMockEvent())

  managerUpdatedEvent.parameters = new Array()

  managerUpdatedEvent.parameters.push(
    new ethereum.EventParam("manager", ethereum.Value.fromAddress(manager))
  )

  return managerUpdatedEvent
}

export function createOwnerUpdatedEvent(owner: Address): OwnerUpdated {
  let ownerUpdatedEvent = changetype<OwnerUpdated>(newMockEvent())

  ownerUpdatedEvent.parameters = new Array()

  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return ownerUpdatedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  id: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return transferEvent
}

export function createUpdateAgentHashEvent(
  agentId: BigInt,
  agentHash: Bytes
): UpdateAgentHash {
  let updateAgentHashEvent = changetype<UpdateAgentHash>(newMockEvent())

  updateAgentHashEvent.parameters = new Array()

  updateAgentHashEvent.parameters.push(
    new ethereum.EventParam(
      "agentId",
      ethereum.Value.fromUnsignedBigInt(agentId)
    )
  )
  updateAgentHashEvent.parameters.push(
    new ethereum.EventParam(
      "agentHash",
      ethereum.Value.fromFixedBytes(agentHash)
    )
  )

  return updateAgentHashEvent
}
