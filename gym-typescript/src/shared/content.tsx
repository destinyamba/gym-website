import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";
import { BenefitType } from "./types";
import { ClassType } from "./types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";

export const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Dedicated Pro Trainers",
    description:
      "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
  },
];

export const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
    image: image1,
  },
  {
    name: "Weight Training Classes",
    description:
      "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
    image: image2,
  },
  {
    name: "Weight Training Classes",
    description:
      "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
    image: image3,
  },
  {
    name: "Weight Training Classes",
    description:
      "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
    image: image4,
  },
  {
    name: "Weight Training Classes",
    description:
      "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
    image: image5,
  },
  {
    name: "Weight Training Classes",
    description:
      "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
    image: image6,
  },
];
