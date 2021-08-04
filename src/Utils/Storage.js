import { USER_STORAGE, LOGGEDIN_USER } from "./constants";

// local storage 참조
export const loadLocalStorage = (storageKey = USER_STORAGE) => {
  const loadedUserListData = localStorage.getItem(storageKey);
  const parsedUserListData = JSON.parse(loadedUserListData);
  return parsedUserListData;
};

// local storage 저장
export const saveLocalStorage = (storageKey = USER_STORAGE, data) => {
  const fommatedSaveData = JSON.stringify(data);
  const savedUserListData = localStorage.setItem(storageKey, fommatedSaveData);
  return savedUserListData;
};

// 로그아웃 시 local storage 키 삭제
export const loggedOutStorage = (storageKey = LOGGEDIN_USER) => {
  localStorage.removeItem(storageKey);
};

// 로그인 한 유저의 권한 참조
export const userAuthority = () => {
  const nowLoggedInuserData = loadLocalStorage(LOGGEDIN_USER);
  return nowLoggedInuserData.authority;
};

// 계정 생성 시 자동으로 id +1씩 증가
export const autoIncrementUserId = (storageKey = USER_STORAGE) => {
  const loadedUserListData = loadLocalStorage(storageKey);
  const lastUserListData = loadedUserListData[loadedUserListData.length - 1];
  return lastUserListData.id + 1;
};
