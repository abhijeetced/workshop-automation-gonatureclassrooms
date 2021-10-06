import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gonature-workshop-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  faqs: IFAQ[] = [
    {
      question: `When does the "Naturopathy Healing System" Webinar start?`,
      answer  : `The Naturopathy Webinar starts on Sunday at 11:00 AM and it will end at 01:00 PM. It will be live on zoom.`
    },
    {
      question: `Will I get lifetime access to the video?`,
      answer  : `Take a note that this is a Class (Webinar), not an online course. Therefore, you don’t get lifetime access to the sessions’ recording. Everything will be live; hence, no replays & recordings`
    },
    {
      question: `Will I be able to start my own diet clinic after the certification and earn money?`,
      answer  : `The Certificate that you get is for your participation.. Consequently, the Webinar does not guarantee any income or job. Instead, it makes you understand the self-healing mechanism of the human body.`
    },
    {
      question: "I am an established health coach, can I attend this?",
      answer  : "This Webinar is for everyone. We welcome all the coaches, doctors, patients, and working professionals."
    },
    {
      question: "Will the certificate be provided in hard copy or soft copy? and, then till when?",
      answer  : "The certificate is provided in a soft copy (PDF) to your registered email ID within 24 hours of course completion please note that at the end of the webinar we will give you a form if you fail to fill that form, you will not get the certificate."
    },

    {
      question: "Will you provide us with the 49 days circulation diets & recipes in this webinar?",
      answer  : "The circulation diet is a very long scientific study & diet plan. Therefore, explaining in merely 2 hours is not possible. Instead, we will tell you what a circulation diet is, how it works & what results it can give. Hence, we do not provide 49 days 49 different diets (the circulation diet) in the webinars."
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
