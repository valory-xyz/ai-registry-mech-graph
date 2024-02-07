import { Bytes } from "@graphprotocol/graph-ts"
import {
    Request as RequestEvent,
    Deliver as DeliverEvent
} from "../generated/AgentMech/AgentMech"
import { Request, Delivery } from "../generated/schema"

function getIpfsHash(data: Bytes): string {
    return "f01701220" + data.toHexString().slice(2)
}

export function handleRequest(event: RequestEvent): void {
    let entity = new Request(
        event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.sender = event.params.sender
    entity.requestId = event.params.requestId
    entity.ipfsHash = getIpfsHash(event.params.data)
    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash
    entity.save()
}

export function handleDelivery(event: DeliverEvent): void {
    let entity = new Delivery(
        event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.sender = event.params.sender
    entity.requestId = event.params.requestId
    entity.ipfsHash = getIpfsHash(event.params.data)
    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash
    entity.save()
}
