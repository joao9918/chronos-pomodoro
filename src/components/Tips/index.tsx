import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

type TipsProps = {
  nextCycleType: "workTime" | "shortBreakTime" | "longBreakTime";
};

export function Tips({ nextCycleType }: TipsProps) {
  const { state } = useTaskContext();

  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Descanse por {state.config.longBreakTime}min</span>,
  };

  const tipsForNoActiveTask = {
    workTime: <span>Proximo ciclo será de {state.config.workTime}min</span>,
    shortBreakTime: (
      <span>Proximo descanso será de {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: (
      <span>Proximo descanso será de {state.config.longBreakTime}min</span>
    ),
  };
  return (
    <>
      {state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
