import { ElementRef } from '@angular/core';
import { ScrollbarHelper } from '../../services';
export declare class DataTableBodyRowComponent {
    private scrollbarHelper;
    columns: any[];
    innerWidth: number;
    rowClass: any;
    row: any;
    offsetX: number;
    isSelected: boolean;
    readonly cssClass: string;
    rowHeight: number;
    readonly columnsTotalWidths: string;
    element: any;
    columnGroupWidths: any;
    columnsByPin: any;
    _columns: any[];
    _innerWidth: number;
    constructor(scrollbarHelper: ScrollbarHelper, element: ElementRef);
    trackByGroups(index: number, colGroup: any): any;
    columnTrackingFn(index: number, column: any): any;
    stylesByGroup(group: string): {
        width: string;
    };
    recalculateColumns(val?: any[]): void;
}
