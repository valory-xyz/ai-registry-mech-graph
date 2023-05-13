import {
  CreateMech as CreateMechEvent,
  OwnerUpdated as OwnerUpdatedEvent,
  Pause as PauseEvent,
  Unpause as UnpauseEvent
} from "../generated/AgentFactory/AgentFactory"
import { CreateMech, OwnerUpdated, Pause, Unpause } from "../generated/schema"

export function handleCreateMech(event: CreateMechEvent): void {
  let entity = new CreateMech(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.mech = event.params.mech
  entity.agentId = event.params.agentId
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerUpdated(event: OwnerUpdatedEvent): void {
  let entity = new OwnerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePause(event: PauseEvent): void {
  let entity = new Pause(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpause(event: UnpauseEvent): void {
  let entity = new Unpause(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
