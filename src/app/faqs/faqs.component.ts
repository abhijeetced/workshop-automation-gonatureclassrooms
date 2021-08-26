import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gonature-workshop-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  faqs: IFAQ[] = [
    {
      question: `When does the "Naturopathy Breakthrough Mastery" Webinar start?`,
      answer  : `the naturopathy workshop takes place wverday except on saturdays. the actual cost in 499/- but it is Rs 99/- for only two days.`
    },
    {
      question: `Will I get lifetime access to the video?`,
      answer  : `Take a note that this is a Class (Webinar), not an online course. Therefore, you don’t get lifetime access to the sessions’ recording. Everything will be live; hence, no replays & recordings`
    },
    {
      question: `Will I be able to start my own diet clinic after the certification and earn money?`,
      answer  : `The Certificate that you get is for your participation.. Consequently, the workshop does not guarantee any income or job. Instead, it makes you understand the self-healing mechanism of the human body.`
    },
    {
      question: "If I miss the workshop, will my 99/- INR be refunded?",
      answer  : "If you are occupied during workshop time, we suggest you not to buy a ticket as there is no option of refunding 99/- INR."
    },
    {
      question: "I am an established health coach, can I attend this?",
      answer  : "This Webinar is for everyone. We welcome all the coaches, doctors, patients, and working professionals."
    },
    {
      question: "Will the certificate be provided in hard copy or soft copy? If yes, then till when?",
      answer  : "The certificate is provided in a soft copy (PDF) to your registered email ID within 24 hours of course completion."
    },
    {
      question: "What if I have questions during the workshop?",
      answer  : "In the end of the workshop we have a dedicated time to answer your questions."
    },
    {
      question: "With one ticket how many person can attend workshop?",
      answer  : "One person with one ticket"
    },
    {
      question: "What kind of 8 bonuses you are providing?",
      answer  : "we will provide 2 free bonuses- 1. learn power breathing. 2. certificate of participation"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

interface IFAQ  {
  question: string;
  answer: string;
}
