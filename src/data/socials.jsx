// data/socials.jsx
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";

const socials = [
  {
    icon: () => <FaLinkedin />,
    label: "LinkedIn",
    href: "https://in.linkedin.com/in/rohini-r-b21983278",
  },
  {
    icon: () => <FaGithub />,
    label: "GitHub",
    href: "https://github.com/rohini-ravi2",
  },
  {
    icon: () => <FaCode />,
    label: "LeetCode",
    href: "https://leetcode.com/u/rohini_ravi_/",
  },
  {
  label: "Email",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=rohiniravi2028@gmail.com&su=Let's%20Connect&body=Hi%20Rohini%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!",
  icon: () => <FaEnvelope />,
}
,
];

export default socials;
