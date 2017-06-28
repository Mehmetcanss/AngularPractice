import { NgModule } from '@angular/core'
import {RouterModule} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './event-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavbarComponent } from './nav/navbar.component'
import { EventService } from './events/shared/event.service'
import { ToasterService } from './common/toastr.service'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import {appRoutes} from './routes'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavbarComponent, EventDetailsComponent],
    bootstrap: [EventsAppComponent],
    providers: [EventService, ToasterService]
})
export class AppModule{}