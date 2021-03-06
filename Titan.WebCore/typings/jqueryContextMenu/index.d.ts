/// <reference path="../jquery/jquery.d.ts" />
// Type definitions for jQuery contextMenu 1.7.0
// Project: http://medialize.github.com/jQuery-contextMenu/
// Definitions by: Natan Vivo <https://github.com/nvivo/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface JQueryContextMenuOptions {
    selector: string;
    appendTo?: string;
    trigger?: string;
    autoHide?: boolean;
    delay?: number;
    determinePosition?: (menu: JQuery) => void;
    position?: (opt: JQuery, x: number, y: number) => void;
    positionSubmenu?: (menu: JQuery) => void;
    zIndex?: number;
    animation?: {
        duration?: number;
        show?: string;
        hide?: string;
    };
    events?: {
        show?: () => void;
        hide?: () => void;
    };
    callback?: (key: any, options: any) => any;
    items: any;
    reposition?: boolean;
    className?: string;
    itemClickEvent?: string;
}

