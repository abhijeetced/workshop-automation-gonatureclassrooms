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
      answer  : `The naturopathy webinar takes place every Monday, Wednesday and friday. the actual cost in 499/- but it is Rs 99/- for only two days.`
    },
    {
      question: `Will I get lifetime access to the video?`,
      answer  : `Take a note that this is a Class (Webinar), not an online course. Therefore, you don’t get lifetime access to the sessions’ recording. Everything will be live; hence, no replays & recordings`
    },
    {
      question: `Will I be able to start my own diet clinic after the certification and earn money?`,
      answer  : `The webinar does not guarantee any income or job. Instead, it makes you understand the self-healing mechanism of the human body.`
    },
    {
      question: "If I miss the webinar, will my 99/- INR be refunded?",
      answer  : "If you are occupied during webinar time, we suggest you not to buy a ticket as there is no option of refunding 99/- INR."
    },
    {
      question: "I am an established health coach, can I attend this?",
      answer  : "This Webinar is for everyone. We welcome all the coaches, doctors, patients, and working professionals."
    },
   
    {
      question: "What if I have questions during the webinar?",
      answer  : "In the end of the webinar we have a dedicated 30 minute time to answer your questions."
    },
    {
      question: "With one ticket how many person can attend webinar?",
      answer  : "Only one person is allowed one ticket"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

interface IFAQ  {
  question: string;
  answer: string;
}
