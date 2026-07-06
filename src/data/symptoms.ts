import type { FAQ } from '../config';

export interface Symptom {
  slug: string;              // "car-wont-start"
  symptom: string;           // "Car Won't Start"
  title: string;
  description: string;
  hero: string;
  causes: string[];          // likely causes
  whatToDo: string;          // paragraph
  service: {                 // where to route the fix
    href: string;
    label: string;
  };
  faqs: FAQ[];
}

// Empty by default. Populate to publish. Suggested symptoms to seed later:
// - "Car Won't Start"
// - "Squealing Brakes"
// - "Check Engine Light On"
// - "AC Not Blowing Cold"
// - "Transmission Slipping"
// - "Overheating"
// - "Steering Wheel Vibration"
export const SYMPTOMS: Symptom[] = [];
