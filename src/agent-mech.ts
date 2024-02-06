import {
    Request as RequestEvent,
    Deliver as DeliverEvent
} from "../generated/AgentMech/AgentMech"
import { Request, Delivery } from "../generated/schema"

export function handleRequest(event: RequestEvent): void {
    let entity = new Request(
        event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.sender = event.params.sender
    entity.requestId = event.params.requestId
    entity.data = event.params.data
    entity.save()
}

export function handleDelivery(event: DeliverEvent): void {
    let entity = new Delivery(
        event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.sender = event.params.sender
    entity.requestId = event.params.requestId
    entity.data = event.params.data
    entity.save()
}
