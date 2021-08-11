import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gonature-workshop-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  faqs: IFAQ[] = [
    {
      question: `When does the "Naturopathy Healing System" Workshop start?`,
      answer  : `The Naturopathy workshop starts on Sunday at 6:00 PM and it will end at 8:00 PM. It will be live on zoom.`
    },
    {
      question: `Will I get lifetime access to the video?`,
      answer  : `Take a note that this is a Class (Workshop), not an online course. Therefore, you don’t get lifetime access to the sessions’ recording. Everything will be live; hence, no replays & recordings`
    },
    {
      question: `Will I be able to start my own diet clinic after the certification and earn money?`,
      answer  : `The Certificate that you get is for your participation.. Consequently, the workshop does not guarantee any income or job. Instead, it makes you understand the self-healing mechanism of the human body.`
    },
    {
      question: "If I miss the workshop, will my 49/- INR be refunded?",
      answer  : "There is no provision of refunding 49 /- INR in any scenario because the workshop is live. If you are occupied during workshop time, we suggest you not to buy a ticket as there is no option of refunding 49/- INR."
    },
    {
      question: "I am an established health coach, can I attend this?",
      answer  : "This workshop is for everyone. We welcome all the coaches, doctors, patients, and working professionals."
    },
    {
      question: "Will the certificate be provided in hard copy or soft copy? If yes, then till when?",
      answer  : "The certificate is provided in a soft copy (PDF) to your registered email ID within 24 hours of course completion."
    },
    {
      question: "Will you provide us with the 49 days circulation diets & recipes in this workshop?",
      answer  : "The circulation diet is a very long scientific study & diet plan. Therefore, explaining in merely 2 hours is not possible. Instead, we will tell you what a circulation diet is, how it works & what results it can give. Hence, we do not provide 49 days 49 different diets (the circulation diet) in the workshop."
    },
    {
      question: "What is 5 days Alkaline (detox edition)?",
      answer  : "The 5 days Alkaline diet is a body cleansing and detox diet that is important to clean your body. You can start your healing journey with this diet."
    },
    {
      question: "Will we get The 5 days Alkaline diet?",
      answer  : "Yes, in the end of the workshop you will get, please note you have to be in workshop till end with us as we need to explain how it works. We will not email neither the recordings nor the diet because many people without properly understanding the diet start following, which is not recommended."
    },
    {
      question: "What do you mean by Food as medicine? ",
      answer  : "It simply means the right food can replace your medicines & supplements, that is why we are organizing this workshop to understand you clearly. "
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
      answer  : "We provide 8 free bonuses in the workshop 1) Target 100 model of brain (Lecture) 2) The Human Anatomy Blueprint ( Lecture) 3) The Do It Yourself Blueprint (Lecture) 4) The Power Breathing Blueprint (group activity) 5) The One Word Treatment (Lecture) 6) Get 2 Free E-books (PDF) 7) The 5 Days Alkaline Diet (PDF) 8) Certificate of Participation with your name (PDF)"
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
