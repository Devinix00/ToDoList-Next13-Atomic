"use client";

import List from "@/components/molecules/list/List";
import styles from "./Main.module.scss";
import useGetToDos from "@/hooks/home/useGetToDos";
import Title from "@/components/atoms/title/Title";
import { FadeLoader } from "react-spinners";
import Loading from "@/components/common/loading/Loading";

function Main(): JSX.Element {
  const { toDos, isToDosLoading, isToDosError } = useGetToDos();

  if (isToDosError) {
    return (
      <p className={styles.errorText}>
        에러가 발생했습니다. 다시 시도해주세요...
      </p>
    );
  }

  return (
    <>
      {isToDosLoading ? <Loading /> : null}
      {!isToDosLoading && <Title title={"할 일 목록"} variant="small" />}
      {toDos?.map((toDo) => (
        <List key={toDo.id} toDo={toDo} />
      ))}
    </>
  );
}

export default Main;
