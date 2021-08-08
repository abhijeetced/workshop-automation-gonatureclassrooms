import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gonature-workshop-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input("review") review:any;
  constructor(public sanitizer: DomSanitizer)  { }

  ngOnInit(): void {
    var v = document.getElementsByClassName("youtube-player");
    console.log("v",v);
    for (var n = 0; n < v.length; n++) {
        let element = v[n] as any;
        console.log("vn",v[n]);
        (v[n] as any).onclick = function() {
            var iframe = document.createElement("iframe");
            iframe.setAttribute("src", `//www.youtube.com/embed/${element.dataset.id}?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&rel=${element.dataset.related}&controls=${element.dataset.control}&showinfo=${element.dataset.info}`);
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("id", "youtube-iframe");
            iframe.setAttribute("style", "width: 100%; height: 100%; position: absolute; top: 0; left: 0;");
            if (element.dataset.fullscreen == 1) {
                iframe.setAttribute("allowfullscreen", "");
            }
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            element.appendChild(iframe);
        };
    }
  }

}
