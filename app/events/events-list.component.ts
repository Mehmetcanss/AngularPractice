import { Component, OnInit } from '@angular/core'
import {EventService} from './shared/event.service'
import {ToasterService} from '../common/toastr.service'

@Component({
    templateUrl: '/app/events/events-list.component.html',
    styles: [`
        .container: {padding-left: 20px; padding-right:20px;}
        .event-image: {height: 100px;}
`]
        
})

export class EventsListComponent implements OnInit {

    events: any[]
    constructor(private eventService: EventService, private toasterService: ToasterService) {
      
    }

    ngOnInit() {
        this.events = this.eventService.getEvents()
    }

    ShowToaster(data) {
        this.toasterService.Success(data)
    }

}