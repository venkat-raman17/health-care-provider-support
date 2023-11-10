import avatar1 from "../assets/images/users/avatar-1.jpg";
import avatar2 from "../assets/images/users/avatar-2.jpg";
import avatar3 from "../assets/images/users/avatar-3.jpg";
import avatar4 from "../assets/images/users/avatar-4.jpg";
import avatar5 from "../assets/images/users/avatar-5.jpg";
import avatar6 from "../assets/images/users/avatar-6.jpg";
import avatar7 from "../assets/images/users/avatar-7.jpg";
import avatar8 from "../assets/images/users/avatar-8.jpg";
import avatar9 from "../assets/images/users/avatar-9.jpg";
import avatar10 from "../assets/images/users/avatar-10.jpg";

export interface CallItem {
  callId: string | number;
  firstName: string;
  lastName: string;
  profileImage?: string;
  callDuration: string;
  isIncomming: boolean;
  callDate: string;
  isGrouped: boolean;
  hasVideoCall: boolean;
  peoplesAvailableOnCall: number;
  peoples?: Array<any>;
}
const calls: CallItem[] = [
  {
    callId: 0,
    firstName: "Burgess",
    lastName: "Burt",
    profileImage: avatar1,
    callDuration: "5:37",
    isIncomming: true,
    callDate: "2016-05-05T06:21:22",
    isGrouped: false,
    hasVideoCall: true,
    peoplesAvailableOnCall: 2,
  },
  {
    callId: 1,
    firstName: "Bryant",
    lastName: "Shaffer",
    profileImage: avatar2,
    callDuration: "5:24",
    isIncomming: true,
    callDate: "2014-05-17T10:22:03",
    isGrouped: false,
    hasVideoCall: false,
    peoplesAvailableOnCall: 2,
  },
  {
    callId: 2,
    firstName: "Curtis",
    lastName: "Spears",
    profileImage: avatar3,
    callDuration: "2:43",
    isIncomming: false,
    callDate: "2020-11-27T04:11:34",
    isGrouped: false,
    hasVideoCall: true,
    peoplesAvailableOnCall: 2
  }
];

export { calls };
