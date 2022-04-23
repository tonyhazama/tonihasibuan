import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

export default function Contacts({center}) {
  return (
    <div className={"flex " + (center ? "justify-center" : "")}>
      <a target="_blank" href="https://github.com/tonyhazama"><AiFillGithub className="text-3xl mr-4" /></a>
      <a target="_blank" href="https://www.linkedin.com/in/tonyhazama"><AiFillLinkedin className="text-3xl mr-4" /></a>
      <a target="_blank" href="https://www.linkedin.com/in/tonyhazama"><AiFillMail className="text-3xl mr-4" /></a>
    </div>
  )
}
