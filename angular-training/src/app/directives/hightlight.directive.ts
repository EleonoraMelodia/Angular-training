import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHightlight]",
})
export class HightlightDirective {
  constructor(private element: ElementRef) {}
  @Input() appHightlight = ''
  @Input() defaultColor = ''

  @HostListener("mouseenter") onMouseEnter() {
    this.changeHighlighterColor(this.appHightlight || this.defaultColor || 'teal');
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.changeHighlighterColor('transparent');
  }

  changeHighlighterColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
