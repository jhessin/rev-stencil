/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Appendices, Bible, Commentary, Resource } from "./models";
export namespace Components {
    interface AppHome {
        "book"?: string;
        "chapter"?: number;
        "resource"?: Resource;
        "verse"?: number;
    }
    interface AppRoot {
    }
    interface AppendixView {
        "appendix": Appendices;
    }
    interface ChapterView {
        "bible": Bible;
    }
    interface CommentaryView {
        "commentary": Commentary;
    }
    interface ContentView {
    }
    interface RevMenu {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppendixViewElement extends Components.AppendixView, HTMLStencilElement {
    }
    var HTMLAppendixViewElement: {
        prototype: HTMLAppendixViewElement;
        new (): HTMLAppendixViewElement;
    };
    interface HTMLChapterViewElement extends Components.ChapterView, HTMLStencilElement {
    }
    var HTMLChapterViewElement: {
        prototype: HTMLChapterViewElement;
        new (): HTMLChapterViewElement;
    };
    interface HTMLCommentaryViewElement extends Components.CommentaryView, HTMLStencilElement {
    }
    var HTMLCommentaryViewElement: {
        prototype: HTMLCommentaryViewElement;
        new (): HTMLCommentaryViewElement;
    };
    interface HTMLContentViewElement extends Components.ContentView, HTMLStencilElement {
    }
    var HTMLContentViewElement: {
        prototype: HTMLContentViewElement;
        new (): HTMLContentViewElement;
    };
    interface HTMLRevMenuElement extends Components.RevMenu, HTMLStencilElement {
    }
    var HTMLRevMenuElement: {
        prototype: HTMLRevMenuElement;
        new (): HTMLRevMenuElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
        "appendix-view": HTMLAppendixViewElement;
        "chapter-view": HTMLChapterViewElement;
        "commentary-view": HTMLCommentaryViewElement;
        "content-view": HTMLContentViewElement;
        "rev-menu": HTMLRevMenuElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
        "book"?: string;
        "chapter"?: number;
        "resource"?: Resource;
        "verse"?: number;
    }
    interface AppRoot {
    }
    interface AppendixView {
        "appendix"?: Appendices;
    }
    interface ChapterView {
        "bible"?: Bible;
    }
    interface CommentaryView {
        "commentary"?: Commentary;
    }
    interface ContentView {
    }
    interface RevMenu {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-root": AppRoot;
        "appendix-view": AppendixView;
        "chapter-view": ChapterView;
        "commentary-view": CommentaryView;
        "content-view": ContentView;
        "rev-menu": RevMenu;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "appendix-view": LocalJSX.AppendixView & JSXBase.HTMLAttributes<HTMLAppendixViewElement>;
            "chapter-view": LocalJSX.ChapterView & JSXBase.HTMLAttributes<HTMLChapterViewElement>;
            "commentary-view": LocalJSX.CommentaryView & JSXBase.HTMLAttributes<HTMLCommentaryViewElement>;
            "content-view": LocalJSX.ContentView & JSXBase.HTMLAttributes<HTMLContentViewElement>;
            "rev-menu": LocalJSX.RevMenu & JSXBase.HTMLAttributes<HTMLRevMenuElement>;
        }
    }
}