import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gonature-workshop-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  faqs: IFAQ[] = [
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
