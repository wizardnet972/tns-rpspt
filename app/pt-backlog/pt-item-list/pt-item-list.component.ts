import { Component, OnInit } from '@angular/core';
import { ItemTypeEnum, StatusEnum, PriorityEnum } from '../../shared/static-data';
import { PTDomain } from '../../interfaces/domain';
import IPTItem = PTDomain.IPTItem;
import { BacklogService } from '../../services/backlog.service';

@Component({
    moduleId: module.id,
    selector: 'pt-item-list',
    templateUrl: './pt-item-list.component.html',
    styleUrls: ['./pt-item-list.component.css']
})
export class PtItemListComponent implements OnInit {
    public ptItems: IPTItem[];
    constructor(private backlogService: BacklogService) { }

    ngOnInit() {
        this.ptItems = this.backlogService.items;

    }

    public listItemTap(args: any) {
        let lv = args.object;
        let item = lv.items[args.index];
        alert(item.title);
    }

    public getIndicatorClass(item: IPTItem) {
        return ItemTypeEnum.getIndicatorClass(item.type);
    }
}
