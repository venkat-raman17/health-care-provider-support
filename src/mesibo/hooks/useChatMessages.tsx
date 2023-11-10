//@flow
import { useState, useEffect } from "react";
import { getMesiboApi, initializeMesibo } from "../ChatWorker";
import { useSelector } from "react-redux";
import {
  isMesiboInitializedSelector,
  latestTimeStampSelector,
} from "../state/selectors";

type Props = {
  userId?: string,
  summaryOfAllUsers: boolean,
};

const useChatMessages = ({ summaryOfAllUsers, userId }: Props): Array<any> => {
  initializeMesibo();
  const [messages, setMessages] = useState([]);
  const isMesiboInitialized = true;
  const address = userId ?? null;
  //useSelector(latestTimeStampSelector);


  return messages;
};

export default useChatMessages;
